'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Follows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      followerId: {
        type: Sequelize.INTEGER,
        references: { model: "Users"},
        onDelete: 'CASCADE'
      },
      followedId: {
        type: Sequelize.INTEGER,
        references: { model: "Users"},
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }, options);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Follows', options);
  }
};

// npx sequelize-cli model:generate --name LikeSong --attributes userId:integer,songId:integer
// npx sequelize-cli model:generate --name LikePlaylist --attributes userId:integer,playlistId:integer
// npx sequelize-cli model:generate --name LikeComment --attributes userId:integer,commentId:integer
