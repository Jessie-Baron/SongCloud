'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Playlists';
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        name: 'first playlist',
        imageUrl: 'https://images.pexels.com/photos/7464825/pexels-photo-7464825.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        name: 'just for fun',
        imageUrl: 'https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        name: 'secret playlist',
        imageUrl: 'https://images.pexels.com/photos/3935703/pexels-photo-3935703.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        name: '2022',
        imageUrl: 'https://images.pexels.com/photos/3078831/pexels-photo-3078831.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
      {
        userId: 1,
        name: '2023',
        imageUrl: 'https://images.pexels.com/photos/4200745/pexels-photo-4200745.jpeg?auto=compress&cs=tinysrgb&w=1600'
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName = 'Playlists';
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['first playlist', 'just for fun', 'secret playlist', '2022', '2023'] }
    }, {});
  }
};
