module.exports = function(sequelize, DataTypes) {
  let Recipe = sequelize.define("Recipe", {
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    recipe_difficulty: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    food_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    prep_time: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    number_servings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    prep_instruction: {
      type: DataTypes.TEXT,
      allowNull: true,
    }},
    {timestamps: false
    });
  return Recipe;
};