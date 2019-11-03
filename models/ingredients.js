module.exports = function(sequelize, DataTypes) {
    let Ingredients = sequelize.define("Ingredients", {
      ingredient: {
        type: DataTypes.STRING,
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
                  allowNull: true
              }
          });
      };
    return Ingredients;
  };