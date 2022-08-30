const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const { restoreUser } = require("../../utils/auth.js");
const { Song, Album, User } = require('../../db/models');

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.get('/songs', async (req, res, next) => {
  const songs = await Song.findAll()
  res.json(songs)
})

router.get('/songs/current', async (req, res, next) => {
  const user = req.user.id
  if(user) {
    const songs = await Song.findAll({
      where: {
        userId: user
      }
    })
    res.json(songs)
  }
})
// albumId is null
router.post('/songs', async (req, res, next) => {
  const { title, description, url, imageUrl, albumId } = req.body

  const song = await Song.create({ title, description, url, imageUrl, albumId })

  res.json(song)
})

router.put('/songs/:songid', async (req, res, next) => {
  const { title, description, url, imageUrl, albumId } = req.body

  const song = await Song.findOne({
    where: {
      id: req.params.songid
    }
  })

  if(title) song.title = title
  if(description) song.description = description
  if(url) song.url = url
  if(imageUrl) song.imageUrl = imageUrl
  if(albumId) song.albumId = albumId
  song.save()

  res.json(song)
})

//does not include User data
router.get('/users/:userid/songs', async (req, res, next) => {
  const songs = await Song.findAll(
     {
      include: {
        model: User,
        where: {
          userId: req.params.userid
        }
      }
  })
  res.json(songs)
})

router.get('/songs/:songid', async (req, res, next) => {
  const song = await Song.findOne({
    include: {
      model: User,
      model: Album,
      where: {
        id: req.params.songid
      }
    }
  })
  res.json(song)
})

//userId is throwing error
router.post('/albums', async (req, res, next) => {
  const { title, description, imageUrl, userId } = req.body

  const album = await Album.create({
    title, description, imageUrl, userId
  })
  res.json(album)
})



module.exports = router;
