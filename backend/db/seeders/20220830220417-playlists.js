'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     options.tableName = 'Playlists';
     await queryInterface.bulkInsert(options, [
      {
        userId: 1,
        name: "Rock Playlist",
        imageUrl: "image.1"
      },
      {
        userId: 1,
        name: "Pop Playlist",
        imageUrl: "image.2"
      },
      {
        userId: 1,
        name: "Jazz Playlist",
        imageUrl: "image.3"
      },
      {
        userId: 2,
        name: "Country Playlist",
        imageUrl: "image.4"
      },
      {
        userId: 2,
        name: "Rap Playlist",
        imageUrl: "image.5"
      },
      {
        userId: 5,
        name: "Demo Playlist",
        imageUrl: "image.6"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     options.tableName = 'Playlists';
     await queryInterface.bulkDelete(options, [
      {
        userId: 1,
        name: "Rock Playlist",
        imageUrl: "image.1"
      },
      {
        userId: 1,
        name: "Pop Playlist",
        imageUrl: "image.2"
      },
      {
        userId: 1,
        name: "Jazz Playlist",
        imageUrl: "image.3"
      },
      {
        userId: 2,
        name: "Country Playlist",
        imageUrl: "image.4"
      },
      {
        userId: 2,
        name: "Rap Playlist",
        imageUrl: "image.5"
      },
      {
        userId: 5,
        name: "Demo Playlist",
        imageUrl: "image.6"
      }
    ])
  }
};
