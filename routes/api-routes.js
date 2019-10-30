// Requiring our models as we've configured it
var db = require("../models");

module.exports = function(app) {


// add recipe:
// "api/add"


// view all recipe:
// "api/all"


// view specific cuisine:
// "api/:food_type"




  // app.post("/api/signup", function(req, res) {
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  //     .then(function() {
  //       res.redirect(307, "/api/login");
  //     })
  //     .catch(function(err) {
  //       res.status(401).json(err);
  //     });
  // });

  // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });
};
