		//you can start typing JSc in hare diresctly
		console.log("hello"); 

		var myFacts = ["I went to Cal Poly SLO", "I love avocados", "My favorite show is scrubs"]
		var index = 0;


		function buttonClick(){
			document.getElementById("output").innerHTML = myFacts[index];
			index++;

			if (index >2){
				index = 0;
			}
		}

	
		//function for when we change the option in our drop down list

		var myChoice = "newzeland";


		function changeOption(list){
			var value = list.value;
			console.log(value);

			if(value == "newzeland"){
				document.getElementById("list-output").innerHTML = "Go explore Fiordland National Park";
			}
			else {
				document.getElementById("list-output").innerHTML ="Stay in a Riad";
			}
		}





/*

		var name = "Ileana";
		console.log(name);
		document.write(name);

		document.getElementById("string").innerHTML = name;

		var fact = "I have"

		document.getElementById("fact").innerHTML = fact;

		// this does 2 things first it ids the elent by its id in the HTML document
		// then it inserts an object into the elemnt
		//in this case the object is a string

		function clickMe() {
			alert("Surprise! Have a good day.")
		}
		*/