'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikeSong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LikeSong.belongsTo(models.Song, {foreignKey: 'songId'})
      LikeSong.belongsTo(models.User, {foreignKey: 'userId'})

    }
  }
  LikeSong.init({
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LikeSong',
  });
  return LikeSong;
};
