console.log("linked");
// Global Variables
var counter = 1;
var limit = 15;

// Function Definitions
function addInput(){
    if (counter == limit)  {
         alert("You have reached the limit of adding " + counter + " inputs");
    } else {
         var newdiv = document.createElement('div');
         newdiv.setAttribute("class", "control");
         newdiv.setAttribute("data-id", counter);
         newdiv.innerHTML = `<input class="input ingredient" type="text" placeholder="One Ingredient Per Line">`;
        //  newdiv.innerHTML = "Entry " + (counter + 1) + " <br><input type='text' name='myInputs[]'>";
         document.getElementById('ingredients').appendChild(newdiv);
         counter++;
    }
}

// Methods & Function Cals
document.addEventListener("DOMContentLoaded", function() {

    document.addEventListener("click", event => {
        if ( event.target.getAttribute("id") === "dynamicInput") {
            addInput();
        }
    })


});
