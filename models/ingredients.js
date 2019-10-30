module.exports = function(sequelize, DataTypes) {
    let Ingredients = sequelize.define("Ingredients", {
      ingredient: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }},
      {timestamps: false
      });

      Ingredients.associate = function(models) {
          Ingredients.belongsTo(models.Recipe, {
              foriegnKey: {
                  allowNull: false
              }
          });
      };
    return Ingredients;
  };