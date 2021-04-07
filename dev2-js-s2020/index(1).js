



// Random number generator
function randomInt(min, max)
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array with my facts
var myFacts = ["I enjoy visiting new places", "I love tacos!", "This is my first project using HTML", "My fist gaming console was a N64", "I drink cofee every day", "I was born in Mexico City", "My favorite soccer team is America"];
var index = 0;

 // Adding the fact to my HTML page
function buttonClick()
{
  var random = randomInt(0, 6);
  console.log(random)
  document.getElementById("output").innerHTML = myFacts[random];

}

/*
// Adding the fact to my HTML page
document.getElementById("button").addEventListener("click", function()
{
  var random = randomInt(0, 6);
  console.log(random);
  document.getElementsById("button-output").innerHTML = facts[random];
});
*/

function changeOption(list)
{
  var value = list.value; //This is storing the value, given by the attribute "value", and storing in a variable called
  console.log(value);
  if (value === "Action") // Display our movie compatibility
  {
    document.getElementById("list-output").innerHTML = "We like the same genre";
  }
  else
  {
    document.getElementById("list-output").innerHTML = "We don't have the same movie genre taste";
  }
}


/*
// Getting value from drop down menu
var choice = document.getElementById("choices");
var option = choice.options[choice.selectedIndex].value;
console.log(option);

// Display our movie compatibility
if (option === "Action")
{
  document.getElementById("list-output").innerHTML = "We like the same genre";
}
else
{
  document.getElementById("list-output").innerHTML = "We don't have the same movie genre taste";
}
*/
