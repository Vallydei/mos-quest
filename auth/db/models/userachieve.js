// models/userAchieve.js
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAchieve extends Model {
    static associate({ User, Achieve }) {
      UserAchieve.belongsTo(User, { foreignKey: 'userId' });
      UserAchieve.belongsTo(Achieve, { foreignKey: 'achivId' });
    }
  }

  UserAchieve.init(
    {
      userId: DataTypes.INTEGER,
      achivId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserAchieve',
    }
  );

  return UserAchieve;
};
