// Requiring our models as we've configured it
var db = require("../models");

module.exports = function(app) {

  // Recipies routes
  //
  // get /api/recipes
  //      return all recipes
  app.get("/api.recipes", function(req, res) {
    db.Recipe.findAll({
      include: [db.Ingredients]
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
  // get /api/recipes?type=whatever
  //      return recipes of type
  app.get("/api.recipes?type=whatever", function(req, res) {
    db.Recipe.findAll({
      where: {
        food_type: req.body.food_type
      },
      include: [db.Ingredients]
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
  // post /api/recipes
  //      make new recipe
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
  // delete /api/recipes/:id
  //      delete a recipe
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
  // get /api/recipes/:id
  //      return specified recipe together with all ingredients
  app.get("/api/recipes/:id", function(req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Ingredients]
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
};
