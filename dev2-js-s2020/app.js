var facts = ["I am 16 years old", "I like playing video games", "My favorite food is tacos because I like cows and tortillas", "My favorite video game is Minecraft", "I am a junior in high school"];
var i = 0;
function clickMe(){
    document.getElementById("output").innerHTML = facts[i];
    i = i+1; 
    if (i >= 4){
        i = 0;
    }
}

function storeName(){
    var name = document.getElementById("input").value;
    document.getElementById("output").innerHTML = "Surprise!"
}

// This is a function for when we change the option in our drop down list, we evaluate the option hose and determine if it's out favorite color or not
function changeOption(list){
    var value = list.value; // This is storing the value given by the attribute value storing it in a variable called ??
    console.log(value);
    
    if(value === "red"){
        document.getElementById("list-output").innerHTML = "We have the same favorite color";
    }
    else {
        document.getElementById("list-output").innerHTML = "We dont have the same color";
    }
}

function changeChoice(list){
    var value = list.value; // This is storing the value given by the attribute value storing it in a variable called ??
    console.log(value);
    
    if(value === "progressive house"){
        document.getElementById("list-output-2").innerHTML = "We like the same genre";
    }
    else {
        document.getElementById("list-output-2").innerHTML = "We dont like the same genre";
    }
}