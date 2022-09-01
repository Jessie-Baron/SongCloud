const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
const { Song, Album, User, Playlist, PlaylistSong, Comment } = require('../../db/models');
const { Op } = require('sequelize')
// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// Songs
router.get('/songs', async (req, res, next) => {

  let { size, page } = req.query
  const pagination = {}

  if (!page) page = 0
  if (!size) size = 20
  if (page > 10) page = 10
  if (size > 20) size = 20

  if(page >= 1 && size >= 1) {
    pagination.limit = size
    pagination.offset = (size * page - 1)
}

  const songs = await Song.findAll({
    ...pagination
  })

  res.json({
    Songs: songs,
    page: parseInt(page),
    size: parseInt(size)
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

router.post('/songs', requireAuth, restoreUser, async (req, res) => {
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

router.put('/songs/:songid', requireAuth, restoreUser, async (req, res, next) => {
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

router.get('/artists/:artistid/songs', async (req, res, next) => {
  const songs = await Song.findAll(
     {
        where: {
          userId: req.params.artistid
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

router.delete('/songs/:songid', requireAuth, restoreUser, async (req, res, next) => {
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

router.get('/playlists/current', restoreUser, requireAuth, async (req, res)=>{
  const user = req.user
  if(user){
    const playlists = await Playlist.findAll({
      where:{
        userId: user.id
      }
    })
    res.json({
      Playlists: playlists
    })
  }
})

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

const newSong = await PlaylistSong.create({songId, playlistId: +playlistid})

const playlistSong = newSong.toJSON()

delete playlistSong.createdAt
delete playlistSong.updatedAt
delete playlistSong.order


res.json(playlistSong)
})

router.get('/playlists/:playlistid', async (req, res, next) => {

  const playlist = await Playlist.findOne({
    where: {
      id: req.params.playlistid
    },
    include: [
    {
      model: Song,
      through: {attributes: []}
    }],
  })

  if(!playlist) {
    res.status(404)
    res.json({
      message: "Playlist couldn't be found",
      statusCode: 404
    })
  }

  else {
  res.json(playlist)
  }
})

router.put('/playlists/:playlistid', requireAuth, restoreUser, async (req, res, next) => {
  const { name, imageUrl } = req.body

  const playlist = await Playlist.findOne({
    where: {
      id: req.params.playlistid
    }
  })

  if(!playlist) res.status(404).json({
    message: "Playlist couldn't be found",
    statusCode: 404
  })

  if(name) playlist.name = name
  if(imageUrl) playlist.imageUrl = imageUrl
  playlist.save()

  res.json({
    id: playlist.id,
    userId: playlist.userId,
    name: playlist.name,
    createdAt: playlist.createdAt,
    updatedAt: playlist.updatedAt,
    previewImage: playlist.imageUrl
  })
})

router.delete('/playlists/:playlistid', requireAuth, restoreUser, async (req, res, next) => {
  const playlist = await Playlist.findOne({
      where: {
        id: req.params.playlistid
      }
  })

  if(!playlist) res.status(404).json({
    message: "Playlist couldn't be found",
    statusCode: 404
  })

  playlist.destroy()
  res.json({
    message: "Successfully deleted",
    statusCode: 200
  })
})

// Comments

router.get('/songs/:songid/comments', async (req, res, next) => {
  const comments = await Comment.findAll({
    where: {
      songId: req.params.songid
    },
    include: {
      model: User,
      attributes: ['id', 'username']
    }
  })

  if(!comments.length) res.status(404).json({
    message: "Song couldn't be found",
    statusCode: 404
  })

  res.json({Comments: comments})
})

router.post('/songs/:songid/comments', requireAuth, restoreUser, async (req, res, next) => {
  const { body } = req.body
  const userId = req.user.id
  const songId = req.params.songid

  const comment = await Comment.create({ userId, songId, body })

  res.json(comment)
})

router.put('/comments/:commentid', requireAuth, restoreUser, async (req, res, next) => {
  const { body } = req.body

  const comment = await Comment.findOne({
    where: {
      id: req.params.commentid
    }
  })

  if(!comment) res.status(404).json({
    message: "Comment couldn't be found",
    statusCode: 404
  })

  if(body) comment.body = body
  comment.save()

  res.json({
    id: comment.id,
    userId: comment.userId,
    songId: comment.songId,
    body: comment.body,
    createdAt: comment.createdAt,
    updatedAt: comment.updatedAt,
  })
})

router.delete('/comments/:commentid', requireAuth, restoreUser, async (req, res, next) => {
  const comment = await Comment.findOne({
      where: {
        id: req.params.commentid
      }
  })

  if(!comment) res.status(404).json({
    message: "Comment couldn't be found",
    statusCode: 404
  })

  comment.destroy()
  res.json({
    message: "Successfully deleted",
    statusCode: 200
  })
})

// Albums

router.get('/albums', async (req, res, next) => {

  const albums = await Album.findAll()

  res.json({
    Albums: albums
  })
})

router.post('/albums', async (req, res, next) => {
  const userId = req.user.id
  const { title, description, imageUrl } = req.body

  const album = await Album.create({
    title, description, imageUrl, userId
  })
  res.json(album)
})

router.get('/albums/current', restoreUser, requireAuth, async (req, res)=>{
  const user = req.user
  if(user){
    const albums = await Album.findAll({
      where:{
        userId: user.id
      }
    })
    res.json({
      Albums: albums
    })
  }
})

router.get('/artists/:artistid/albums', async (req, res, next) => {
  const albums = await Album.findAll(
     {
        where: {
          userId: req.params.artistid
        }
  })

  if(!albums.length) {
  res.status(404)
  res.json({
    message: "Artist couldn't be found",
    statusCode: 404
  })
}
  else {
    res.json({Albums: albums})
  }
})

router.get('/albums/:albumid', async (req, res, next) => {

  const album = await Album.findOne({
    where: {
      id: req.params.albumid
    },
    include: [{
      model: User, as: 'Artist',
      attributes: ['id', 'username', 'imageUrl']
    },
    {
      model: Song
    }],
  })

  if(!album) {
    res.status(404)
    res.json({
      message: "Album couldn't be found",
      statusCode: 404
    })
  }

  else {
  res.json(album)
  }
})

router.put('/albums/:albumid', requireAuth, restoreUser, async (req, res, next) => {
  const { title, description, imageUrl } = req.body

  const album = await Album.findOne({
    where: {
      id: req.params.albumid
    }
  })

  if(!album) res.status(404).json({
    message: "Album couldn't be found",
    statusCode: 404
  })

  if(title) album.title = title
  if(description) album.description = description
  if(imageUrl) album.imageUrl = imageUrl

  album.save()

  res.json({
    id: album.id,
    userId: album.userId,
    description: album.description,
    createdAt: album.createdAt,
    updatedAt: album.updatedAt,
    previewImage: album.imageUrl
  })
})

router.delete('/albums/:albumid', requireAuth, restoreUser, async (req, res, next) => {
  const album = await Album.findOne({
      where: {
        id: req.params.albumid
      }
  })

  if(!album) res.status(404).json({
    message: "Comment couldn't be found",
    statusCode: 404
  })

  album.destroy()
  res.json({
    message: "Successfully deleted",
    statusCode: 200
  })
})

// Artist

router.get('/artists/:artistid', async (req, res, next) => {

  const artist = await User.findOne({
    where: {
      id: req.params.artistid
    }
  })

  if(!artist) {
    res.status(404)
    res.json({
      message: "Artist couldn't be found",
      statusCode: 404
    })
  }

  else {
  res.json(artist)
  }
})

module.exports = router;
