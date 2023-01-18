const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a first name with at least 4 characters.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a last name with at least 4 characters.'),
  check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];


  router.get('/', async (req, res) => {

      const users = await User.findAll()
      res.json({
        Users: users
      })
    })

// Sign up
router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const { firstName, lastName, imageUrl, email, password, username } = req.body;
    const user = await User.signup({ firstName, lastName, imageUrl, email, username, password });

    const token = await setTokenCookie(res, user);
    console.log("this is the user from api/users.js", user)
    const userObj = user.toJSON()
    userObj.token = token
    res.json(userObj)
    // return res.json({
    //     id: userObj.id,
    //     firstName: userObj.firstName,
    //     lastName: userObj.lastName,
    //     email: userObj.email,
    //     username: userObj.username,
    //     token: userObj.token
    // });
  }
);

  module.exports = router;
