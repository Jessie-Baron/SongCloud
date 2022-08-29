'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Song, { foreignKey: "songId" })
      Comment.belongsTo(models.User, { foreignKey: "userId" })
    }
  }
  Comment.init({
    songId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
