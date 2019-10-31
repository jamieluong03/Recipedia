// variables from html
var searchBtn = $("#searchBtn");
var userInput = $("#cuisineInput");
var showCuisine = $(".menu-label");
var menuList = $(".menu-list");
var recipeName = $("#name");
var difficulty = $("#difficulty");
var type = $("#type");
var prepTime = $("#prepTime");
var servings = $("#servings");
var ingredients = $("#ingredients");
var instructions = $("#instructions");

var typeName;

var searchCuisine = function() {
    var searchResult = userInput.val().trim();
    typeName = searchResult
    console.log(typeName);
    renderTypes();
};

var renderTypes = function() {
    $('ul').empty();

    showCuisine.text(typeName);

    $.get(`/api/recipes?type=${typeName}`, function(data) {
        for (var i=0; i<data.length; i++) {
            var newLi = $("<li class='list-group-item'>");
            var aTag = $("<a>");
            newLi.attr("data-name", data[i].recipe_name);
            aTag.attr("id", "food-" + i);
            newLi.append(aTag);
            menuList.append(newLi);

            $("#food-" + i).append(data[i].recipe_name)
        };
    });
};

var renderRecipe = function() {
    var selectedRecipe = $(this).attr("data-name");
    console.log(selectedRecipe);

    $("#recipeDiv").addClass("box");
    $.get("/api/recipes", function(data) {

        for (var i=0; i < data.length; i++) {
            if (data[i].recipe_name === selectedRecipe) {
                recipeName.text(data[i].recipe_name);
                difficulty.text(data[i].recipe_difficulty);
                type.text(data[i].food_type);
                prepTime.text(data[i].prep_time);
                servings.text(data[i].number_servings);
                ingredients.text(data[i].Ingredients);
                instructions.text(data[i].prep_instructions);
            }
        }
    })
}

// // api to get food image
// var API = "14104502-4c53e5529f6809b17c843d2ad";
// var recipe_title = req.body.recipe_name;
// var queryURL = `https://pixabay.com/api/?key=${API}&q=${recipe_title}&category=food`;

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response){
//     console.log(response);
//     var imgURL = response.hits[0].largeImageURL;
//     console.log(imgURL);
//     console.log(response.hits[0].tags);


searchBtn.on("click", searchCuisine);
menuList.on("click", ".list-group-item", renderRecipe);