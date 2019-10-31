// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // app.get("/all", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/all.html"));
  // });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  app.get("/foodType", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/foodType.html"));
  })

};
