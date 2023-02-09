'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikePlaylist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LikePlaylist.belongsTo(models.User, {foreignKey: 'userId'})
      LikePlaylist.belongsTo(models.Playlist, {foreignKey: 'playlistId'})

    }
  }
  LikePlaylist.init({
    userId: DataTypes.INTEGER,
    playlistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LikePlaylist',
  });
  return LikePlaylist;
};
