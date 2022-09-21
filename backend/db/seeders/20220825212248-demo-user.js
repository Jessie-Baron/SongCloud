'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        imageUrl: 'image.1'
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        imageUrl: 'image.2'
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        imageUrl: 'image.3'
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync('password4'),
        imageUrl: 'image.4'
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync('password5'),
        imageUrl: 'image.5'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'FakeUser3', 'FakeUser4'] }
    }, {});
  }
};
