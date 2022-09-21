'use strict';

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
     await queryInterface.bulkInsert('Playlists', [
      {
        userId: 5,
        name: "Rock Playlist",
        imageUrl: "image.1"
      },
      {
        userId: 5,
        name: "Pop Playlist",
        imageUrl: "image.2"
      },
      {
        userId: 5,
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

     await queryInterface.bulkDelete('Playlists', [
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
        userId: 2,
        name: "Jazz Playlist",
        imageUrl: "image.3"
      },
      {
        userId: 3,
        name: "Country Playlist",
        imageUrl: "image.4"
      },
      {
        userId: 3,
        name: "Rap Playlist",
        imageUrl: "image.5"
      }
    ])
  }
};
