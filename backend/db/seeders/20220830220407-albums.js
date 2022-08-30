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

    await queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: "Rock Album",
        description: "This Album Rocks",
        imageUrl: "image.1"
      },
      {
        userId: 1,
        title: "Jazz Album",
        description: "This Album is Smooth",
        imageUrl: "image.2"
      },
      {
        userId: 2,
        title: "Pop Album",
        description: "This Album Pops off",
        imageUrl: "image.3"
      },
      {
        userId: 2,
        title: "Rap Album",
        description: "This Album Raps",
        imageUrl: "image.4"
      },
      {
        userId: 3,
        title: "Country Album",
        description: "This Album Rocks",
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
     await queryInterface.bulkDelete('Albums', [
      {
        userId: 1,
        title: "Rock Album",
        description: "This Album Rocks",
        imageUrl: "image.1"
      },
      {
        userId: 1,
        title: "Jazz Album",
        description: "This Album is Smooth",
        imageUrl: "image.2"
      },
      {
        userId: 2,
        title: "Pop Album",
        description: "This Album Pops off",
        imageUrl: "image.3"
      },
      {
        userId: 2,
        title: "Rap Album",
        description: "This Album Raps",
        imageUrl: "image.4"
      },
      {
        userId: 3,
        title: "Country Album",
        description: "This Album Rocks",
        imageUrl: "image.5"
      }
    ])
  }
};
