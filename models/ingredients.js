module.exports = function(sequelize, DataTypes) {
    let Ingredients = sequelize.define("Ingredients", {
      ingredient: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      recipe_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }},
      {timestamps: false
      });
    return Ingredients;
  };