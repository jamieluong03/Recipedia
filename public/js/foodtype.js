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
var ingredientsList = $(".ingredients-list");
var imgDiv = $("#insertImg");

var typeName;


var searchCuisine = function() {
    var searchResult = userInput.val().trim();
    typeName = searchResult
    console.log(typeName);
    renderTypes();
};

var renderTypes = function() {
    menuList.empty();

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
    recipeName.empty();
    imgDiv.empty();
    difficulty.empty();
    type.empty();
    prepTime.empty();
    servings.empty();
    ingredientsList.empty();
    instructions.empty();

    var selectedRecipe = $(this).attr("data-name");
    console.log(selectedRecipe);


    $("#recipeDiv").addClass("box");
    $.get("/api/recipes", function(data) {

        for (var i=0; i < data.length; i++) {
            var recipe = data[i];
            if (recipe.recipe_name === selectedRecipe) {
                recipeName.text(recipe.recipe_name);

                    var addImg = $("<img>");
                    addImg.attr("src", recipe.image_url);
                    imgDiv.append(addImg);

                difficulty.text(`Difficulty: ${recipe.recipe_difficulty}`);
                type.text(`Type: ${recipe.food_type}`);
                prepTime.text(`Prep Time: ${recipe.prep_time}`);
                servings.text(`Servings : ${recipe.number_servings}`);
                ingredients.text(`Ingredients: `)
                for (var k=0; k < recipe.Ingredients.length; k++) {
                    console.log(recipe.Ingredients[k]);
                    var newLi = $("<li>");
                    newLi.append(recipe.Ingredients[k].ingredient);
                    ingredientsList.append(newLi);
                };

                instructions.text(`Instructions: ${recipe.prep_instruction}`);
        
            };
        };
    });
};


searchBtn.on("click", searchCuisine);
menuList.on("click", ".list-group-item", renderRecipe);