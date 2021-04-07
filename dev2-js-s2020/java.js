console.log("howdy");//comfirm that my script is linked

var myfacts = ["yugioh", "pokemon", "hamtaro", "Courage the Cowardly Dog", "goku"];
var index = 0;

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max - min +1)) + min;
}

var random = randomInt(0, 4);
console.log(random)

//this is a function for your button
function buttonclick(){
   
    document.getElementById("output").innerHTML = myfacts[index];
    console.log("hi");
    index = index + 1;
    //the moment our index is 5 or greater it wil restart or else it will say undefined
    if (index >= 5){
        index = 0;
    }

    //console.log(index);//this is to check our index is still increasing
    
}


var myChoice = "rock";
//this isa function for when we change the value of our dropdown list
function changeOption(list){
    var value = list.value; //this is storing the value given by the attribute vale
    console.log(value);

    if (value === "rock"){
        document.getElementById("list-output").innerHTML = "Wow! So cool";
    }
    else {
        document.getElementById("list-output").innerHTML = "you are a fool";
    }

}

