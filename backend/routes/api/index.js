const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
const { Song, Album, User, Playlist, PlaylistSong } = require('../../db/models');
// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// Songs
router.get('/songs', requireAuth, async (req, res, next) => {
  const songs = await Song.findAll()
  res.json({
    Songs: songs
  })
})

router.get('/songs/current', async (req, res, next) => {
  const user = req.user.id
  if(user) {
    const songs = await Song.findAll({
      where: {
        userId: user
      }
    })
    res.json({
      Songs: songs
    })
  }
})

router.post('/songs', requireAuth, async (req, res) => {
  const { title, description, url, imageUrl, albumId } = req.body
  const userId = req.user.id

  if(albumId > 999) {
    res.status(404).json({
      statusCode: 404,
      message: "Album couldn't be found"
    })
  }

  const song = await Song.create({ title, description, url, imageUrl, albumId, userId })

  res.json(song)
})

router.put('/songs/:songid', requireAuth, async (req, res, next) => {
  const { title, description, url, imageUrl, albumId } = req.body

  const song = await Song.findOne({
    where: {
      id: req.params.songid
    }
  })

  if(!song) res.status(404).json({
    message: "Song couldn't be found",
    statusCode: 404
  })

  if(title) song.title = title
  if(description) song.description = description
  if(url) song.url = url
  if(imageUrl) song.imageUrl = imageUrl
  if(albumId) song.albumId = albumId
  song.save()

  res.json(song)
})

router.get('/artists/:userid/songs', async (req, res, next) => {
  const songs = await Song.findAll(
     {
        where: {
          userId: req.params.userid
        }
  })

  if(!songs.length) {
  res.status(404)
  res.json({
    message: "Artist couldn't be found",
    statusCode: 404
  })
}
  else {
    res.json({Songs: songs})
  }
})


router.get('/songs/:songid', async (req, res, next) => {
  const song = await Song.findOne({
    include: [{
      model: User, as: 'Artist',
      attributes: ['id', 'username', 'imageUrl']
    },
    {
      model: Album,
      attributes: ['id', 'title', 'imageUrl']
    }],
      where: {
        id: req.params.songid
      }
  })
  if(!song) {
    res.status(404)
    res.json({
      message: "Song couldn't be found",
      statusCode: 404
    })
  }
  else {
  res.json(song)
  }
})

router.delete('/songs/:songid', requireAuth, async (req, res, next) => {
  const song = await Song.findOne({
      where: {
        id: req.params.songid
      }
  })

  if(!song) res.status(404).json({
    message: "Song couldn't be found",
    statusCode: 404
  })

  song.destroy()
  res.json({
    message: "Successfully deleted",
    statusCode: 200
  })
})

// Playlists
router.get('/users/:userid/playlists', async (req, res, next) => {
  const playlists = await Playlist.findAll({
    where: {
      userId: req.params.userid
    }
  })

  if(!playlists.length) res.status(404).json({
    message: "Artist couldn't be found",
    statusCode: 404
  })

  res.json({Playlists: playlists})
})



router.post('/playlists', requireAuth, restoreUser, async (req, res, next) => {
  const { name, imageUrl } = req.body
  const userId = req.user.id

  const song = await Playlist.create({ name, imageUrl, userId })

  res.json(song)
})

router.post('/playlists/:playlistid/songs', requireAuth, restoreUser, async (req, res, next) => {
  const { songId } = req.body
  const { playlistid } = req.params

  const playlist = await Playlist.findOne({
    where: {
      id: playlistid
    }
  })

  if(!playlist) {
    res.status(404).json({
      message: "Playlist couldn't be found",
      statusCode: 404
    })
  }

  const song = await Song.findOne({
    where: {
      id: songId
    }
  })

  if(!song) {
    res.status(404).json({
      message: "Song couldn't be found",
      statusCode: 404
    })
  }

  await PlaylistSong.create({songId, playlistid})

  const playlistSong = await PlaylistSong.findOne({
    where: {
      playlistId: playlistid,
      songId: songId
    },
    attributes:{
      include:['id','songId'],
      exclude:['createdAt','updatedAt', 'order']
    }
  })
  res.json(playlistSong)
})

// router.get('/playlists/:playlistid', async (req, res, next) => {

//   const playlist = await Playlist.findOne({
//     where: {
//       id: req.params.playlistid
//     },
//     include: [
//     {
//       model: Song,
//       through: {attributes: []}
//     }],
//   })

//   if(!playlist) {
//     res.status(404)
//     res.json({
//       message: "Playlist couldn't be found",
//       statusCode: 404
//     })
//   }

//   else {
//   res.json(playlist)
//   }
// })

// router.post('/albums', async (req, res, next) => {
//   const userId = req.user.id
//   const { title, description, imageUrl } = req.body

//   const album = await Album.create({
//     title, description, imageUrl, userId
//   })
//   res.json(album)
// })



module.exports = router;
