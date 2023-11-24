'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserQuest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Quest}) {
      UserQuest.belongsTo(User, { foreignKey: 'userId' });
      UserQuest.belongsTo(Quest, { foreignKey: 'questId' });
    }
  }
  UserQuest.init({
    userId: DataTypes.INTEGER,
    questId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserQuest',
  });
  return UserQuest;
};