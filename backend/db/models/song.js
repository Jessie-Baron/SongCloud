'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsTo(models.Album, { foreignKey: "albumId" })
      Song.belongsTo(models.User, { as: 'Artist', foreignKey: "userId" })
      Song.hasMany(models.Comment, { foreignKey: "songId" })
      Song.belongsToMany(models.Playlist, { through: models.PlaylistSong })
    }
  }
  Song.init({
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
