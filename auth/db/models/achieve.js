// models/achieve.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Achieve extends Model {
    static associate({ User, Quest }) {
      this.belongsToMany(User, {
        through: 'UserAchieve',
        foreignKey: 'achivId',
        as: 'users',
      });
      this.hasOne(Quest, {
        foreignKey: 'achivId',
      });
    }
  }

  Achieve.init(
    {
      description: DataTypes.TEXT,
      img: DataTypes.STRING,
      longText: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Achieve',
    }
  );

  return Achieve;
};
