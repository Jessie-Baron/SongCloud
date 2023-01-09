const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
const { Song, User, Playlist, PlaylistSong, Comment } = require('../../db/models');
const { Op } = require('sequelize')
// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// Songs

// Get all Songs
router.get('/songs', async (req, res, next) => {

  let { size, page } = req.query
  const pagination = {}

  if(!page) page = 0
  if(!size) size = 20

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

// Get all songs by current user
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


// Create a song
router.post('/songs', requireAuth, restoreUser, async (req, res) => {
  const { title, description, url, imageUrl } = req.body
  const userId = req.user.id

  const song = await Song.create({ title, description, url, imageUrl, userId })

  res.json(song)
})

// Edit a song
router.put('/songs/:songid', requireAuth, restoreUser, async (req, res, next) => {
  const { title, description, url, imageUrl } = req.body

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
  song.save()

  res.json(song)
})

// Get all songs by an artist
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

// Get details of a song
router.get('/songs/:songid', async (req, res, next) => {
  const song = await Song.findOne({
    include: [{
      model: User, as: 'Artist',
      attributes: ['id', 'username', 'imageUrl']
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

// Delete a song
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

// Get all playlists by current user
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

// Get all playlists by an artist
router.get('/artists/:userid/playlists', async (req, res, next) => {
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


// Create a playlist
router.post('/playlists', requireAuth, restoreUser, async (req, res, next) => {
  const { name, imageUrl } = req.body
  const userId = req.user.id

  const song = await Playlist.create({ name, imageUrl, userId })

  res.json(song)
})

// Add a song to a playlist
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

// Get details of a playlist
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
  console.log("this route is running")
  res.json(playlist)
  }
})


// Edit a playlist
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

// Delete a playlist
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

// Get all comments of a song
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


// Create a comment
router.post('/songs/:songid/comments', requireAuth, restoreUser, async (req, res, next) => {
  const { body } = req.body
  const userId = req.user.id
  const songId = req.params.songid

  const songs = await Song.findAll()

  const validator = songId => {
    let isValid = false
    songs.forEach(song => {
      if((song.id) == songId) isValid = true
    })
    return isValid
  }

  if(!validator(songId)) {
    res.status(404).json({
      message: "Song couldn't be found",
      statusCode: 404
    })
  }

  const comment = await Comment.create({ userId, songId, body })

  res.json(comment)
})

// Edit a comment
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

// Delete a comment
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

// Artist

// Get details of an artist
router.get('/artists/:userid', async (req, res, next) => {

  const artist = await User.findOne({
    where: {
      id: req.params.userid
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
