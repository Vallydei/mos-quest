const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Location, Quest, UserProgress }) {
      this.belongsTo(Location, {
        foreignKey: 'locationId',
      });
      this.belongsTo(Quest, {
        foreignKey: 'questId',
      });
      this.hasMany(UserProgress, {
        foreignKey: 'questionId',
      });
    }
  }
  Question.init(
    {
      title: DataTypes.STRING,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      questId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
