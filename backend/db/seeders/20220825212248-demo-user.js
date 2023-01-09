'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
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
    options.tableName = 'Users';
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'FakeUser3', 'FakeUser4'] }
    }, {});
  }
};
