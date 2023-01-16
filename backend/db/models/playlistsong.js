'use strict';
const {
  Model
} = require('sequelize');
const song = require('./song');
module.exports = (sequelize, DataTypes) => {
  class PlaylistSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PlaylistSong.belongsTo(models.Song, {foreignKey: 'songId'})
      PlaylistSong.belongsTo(models.Playlist, {foreignKey: 'playlistId'})

    }
  }
  PlaylistSong.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    songId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlaylistSong',
  });
  return PlaylistSong;
};
