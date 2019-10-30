// ingredients routes
// require model
var db = require("../models/ingredients.js")

module.exports = function(app) {

// get /api/recipes/:id/ingredients/
//      get all ingredients for recipe
    app.get("api/recipes/:id/ingredients/", function (req, res) {
        db.Ingredients.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Recipe]
        }).then(function(data){
            res.json(data)
        });
    });

// post /api/recipes/:id/ingredients
//      add new ingredient
    app.post("/api/recipes/:id/ingredients", function(req, res){
        db.Ingredients.create(req.body).then(function(dbIngredients){
            res.json(dbIngredients);
        });
    });

// PUT /api/recipes/:id/ingredients
//      updates ingredients
    app.put("/api/recipes/:id/ingredients", function(req, res){
        db.Ingredients.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbIngredients){
            res.json(dbIngredients);
        });
    });

// delete /api/recipes/:id/ingredients/:id
//      delete
    app.delete("/api/recipes/:id/ingredients", function(req, res){
        db.Ingredients.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        });
    });
};

