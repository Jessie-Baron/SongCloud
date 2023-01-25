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
        imageUrl: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg'
      },
      {
        email: 'user1@user.io',
        username: 'Christine Hunt',
        hashedPassword: bcrypt.hashSync('password2'),
        imageUrl: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg'
      },
      {
        email: 'user2@user.io',
        username: 'Renee Crawford',
        hashedPassword: bcrypt.hashSync('password3'),
        imageUrl: 'https://learn.zoner.com/wp-content/uploads/2019/01/how-can-you-get-good-profile-photos-watch-for-these-6-things.jpg'
      },
      {
        email: 'user3@user.io',
        username: 'Nathaniel Aguilar',
        hashedPassword: bcrypt.hashSync('password4'),
        imageUrl: 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg'
      },
      {
        email: 'user4@user.io',
        username: 'Martin Caldwell',
        hashedPassword: bcrypt.hashSync('password5'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU'
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


