
// Global Variables
var counter = 1;
var limit = 15;
var RecipeId;
console.log(RecipeId);

// Function Definitions
function addInput() {
    if (counter == limit) {
        alert("You have reached the limit of adding " + counter + " inputs");
    } else {
        var input = document.createElement('INPUT');
        input.setAttribute("class", "input ingredient");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "One Ingredient Per Line");
        document.getElementById('ingredients').appendChild(input);
        counter++;
    }
}
// save new recipe

function saveRecipe() {
    // function will post customers recipe in our database
    // gather form inputs
    var recipe_name = document.getElementById("recipeName").value;
    var image_url = document.getElementById("dishImage").value;
    var recipe_difficulty = document.getElementById("selectSkill").value;
    var food_type = document.getElementById("category").value;
    var prep_time = document.getElementById("prepTime").value;
    var number_servings = document.getElementById("selectServing").value;
    var prep_instruction = document.getElementById("prepInstruc").value;
    // TODO: WILL NEED TO POST INSTRUCTIONS


    // console.log(ingredients)
    // package up inputs into an object new recipe
    const newRecipe = {
          recipe_name,
          image_url,
          recipe_difficulty,
          food_type,
          prep_time,
          number_servings,
          prep_instruction
    };


    return $.ajax({
        url: "/api/recipes",
        method: "POST",
        data: newRecipe
    });

    // then we post it to a server
}
console.log(RecipeId);

function saveIngredients(recipeId) {
    let ingredients = []
    let ingredientList = document.querySelectorAll(".ingredient");
    for (i = 0; i < ingredientList.length; i++) {
        ingredients.push(ingredientList[i].value)
    }
    // console.log(ingredients)
    console.log('recipe.id', recipeId);

    return $.post(`/api/recipes/${recipeId}/ingredients`, {'ingredients': ingredients});
}

// Methods & Function Calls
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("click", event => {
        console.log("clicked")

        if (event.target.getAttribute("id") === "dynamicInput") {
            addInput();
        }

        if (event.target.getAttribute("id") === "submit") {
            //
            // using alerts in project not allowed
            //
            alert("Thank you for making our site a little more delicious!")
            saveRecipe().then(response => {
                return saveIngredients(response.id);
            }).then(response => {
                $(".input").val("");
                $(".textarea").val("");

            }).catch(error => {
                console.log(error);
            });
        }
    });
});



// random joke API
var apiKey = "f9c1c025cdc4430e8a6c924cc8e254ea";
var queryURL = `https://api.spoonacular.com/food/jokes/random?apiKey=${apiKey}`

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response.text);
    var joke = response.text;
    $("#randomJoke").text(joke)
})
