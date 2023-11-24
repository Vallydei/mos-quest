const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserProgress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Question }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Question, { foreignKey: 'questionId' });
    }
  }
  UserProgress.init(
    {
      userId: DataTypes.INTEGER,
      questionId: DataTypes.INTEGER,
      complete: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'UserProgress',
    }
  );
  return UserProgress;
};
