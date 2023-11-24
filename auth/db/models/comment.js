const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Location }) {
      this.belongsTo(User, {
        foreignKey: 'userId',
      });
      this.belongsTo(Location, {
        foreignKey: 'locationId',
      });
    }
  }
  Comment.init(
    {
      userId: DataTypes.INTEGER,
      locationId: DataTypes.INTEGER,
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};
