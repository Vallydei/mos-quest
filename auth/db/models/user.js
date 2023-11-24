// models/user.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Achieve, Quest, UserProgress, Comment}) {
      this.belongsToMany(Achieve, {
        through: 'UserAchieve',
        foreignKey: 'userId',
      });
      this.belongsToMany(Quest, {
        through: 'UserQuest',
        foreignKey: 'userId',
      });
      this.hasMany(UserProgress, {
        foreignKey: 'userId',
      });
      this.hasMany(Comment, {
        foreignKey: 'userId',
      });
    }
  }

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashpass: DataTypes.STRING,
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
