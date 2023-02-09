'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LikeComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LikeComment.belongsTo(models.Comment, {foreignKey: 'commentId'})
      LikeComment.belongsTo(models.User, {foreignKey: 'userId'})

    }
  }
  LikeComment.init({
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LikeComment',
  });
  return LikeComment;
};
