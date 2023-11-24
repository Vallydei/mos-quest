const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    static associate({ User, Achieve, Question }) {
      this.belongsToMany(User, {
        through: 'UserQuest',
        foreignKey: 'questId',
      });
      this.belongsTo(Achieve, {
        foreignKey: 'achivId',
      });
      this.hasMany(Question, {
        foreignKey: 'questId',
      });
    }
  }
  Quest.init(
    {
      title: DataTypes.STRING,
      achivId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Quest',
    }
  );
  return Quest;
};
