console.log("Howdy!") //confirming the connection to javascript works

var myFacts = ["Sonic Adventure", "Kirby's DreamLand 3", "Dragon Quest 3", "Pokemon Emerald", "Sonic 2"];
var index =0;

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var random =randomInt(0, 4);
console.log

//This function will, when clicked, show us our favorite thing on it
function buttonClick(){
  //console.log("hi"); //verifiying that my function is being called on by the onlick of my button
  console.log(index); //This is to check  and verify that our index is indeed increasing by one

  document.getElementById("output").innerHTML = myFacts[index];
  index = index + 1;

  if(index >= 5){
    index = 0;
  }
}

function greetings(){
  console.log( 2 + 2);
}

myChoice = "green";
//This is a function for when we change the option in our drop down list, we evaulate the option chosen and determined if it's our favorite
function changeOption(list){
  var value = list.value;
  console.log(value);

  if (value === "green"){
    document.getElementById("list-output").innerHTML = "We have the same favorite color! :D";
  }
  else {
    document.getElementById("list-output").innerHTMl = "We dont have the same favorite color... :(";
  }
}
