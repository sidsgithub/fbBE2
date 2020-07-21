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
      User.hasMany(models.Post)
      User.hasMany(models.Comment)
      FriendStatus.belongsToMany(models.User, { through: 'FriendRelations'}, { foreignKey: 'userOneId'});
      FriendStatus.belongsToMany(models.User, { through: 'FriendRelations'}, { foreignKey: 'userTwoId'});
      FriendStatus.belongsToMany(models.User, { through: 'FriendRelations'}, { foreignKey: 'actionUserId'});
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    resetPasswordDate: DataTypes.STRING,
    accountDeactivationDate: DataTypes.DATE,
    accountDeletionDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};