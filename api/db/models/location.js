const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question, Comment, Image }) {
      this.hasMany(Question, {
        foreignKey: 'locationId',
      });
      this.hasMany(Comment, {
        foreignKey: 'locationId',
      });
      this.hasMany(Image, {
        foreignKey: 'locationId',
      });
    }
  }
  Location.init(
    {
      title: DataTypes.STRING,
      shortDescription: DataTypes.TEXT,
      description: DataTypes.TEXT,
      adress: DataTypes.STRING,
      map: DataTypes.TEXT,
      type: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Location',
    }
  );
  return Location;
};
