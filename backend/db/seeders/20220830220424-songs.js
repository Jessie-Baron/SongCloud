'use strict';

const { url } = require("inspector");

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
     await queryInterface.bulkInsert('Songs', [
      {
        albumId: 1,
        userId: 1,
        title: "Rock Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      },
      {
        albumId: 1,
        userId: 1,
        title: "Country Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      },
      {
        albumId: 2,
        userId: 2,
        title: "Rap Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      },
      {
        albumId: 2,
        userId: 2,
        title: "Pop Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      },
      {
        albumId: 3,
        userId: 3,
        title: "Jazz Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
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
     await queryInterface.bulkDelete('Songs', [
      {
        albumId: 1,
        userId: 1,
        title: "Rock Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      },
      {
        albumId: 1,
        userId: 1,
        title: "Country Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      },
      {
        albumId: 2,
        userId: 2,
        title: "Rap Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      },
      {
        albumId: 2,
        userId: 2,
        title: "Pop Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      },
      {
        albumId: 3,
        userId: 3,
        title: "Jazz Song",
        description: "This Song Rocks",
        url: 'url.1',
        imageUrl: "image.1"
      }
    ])
  }
};
