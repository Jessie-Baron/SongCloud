'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        length(value) {
          if(value < 4 || value > 30) throw new Error("must be correct length")
        },
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.");
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        length(value) {
          if(value < 3 || value > 256) throw new Error("must be correct length")
        },
        isEmail: true
      },
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        length(value) {
          if(value < 60 || value > 60) throw new Error("must be correct length")
        }
      },
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
