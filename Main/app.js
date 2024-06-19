


let dictionary = new Set(words);

let letters = ['A', 'B', 'C', 'D', 'E', 
		'F', 'G', 'H', 'I', 'J', 
		'K', 'L', 'M', 'N', 'O', 
		'P', 'Q', 'R', 'S', 'T', 'U'];

const cells = document.querySelectorAll(".cell");

for (let i = 0; i < cells.length; i++){
	if (letters[i] == 'Q'){
		letters[i] = 'Qu'
	}
	cells[i].innerHTML = letters[i];
	
}

const paper = document.querySelector(".paper");
let input = document.getElementById("wordGuess");
function checkWord() {
	let userInput = document.querySelector("#wordGuess").value;
	if (isValid(userInput) && dictionary.has(userInput.toLowerCase())){
		paper.innerHTML += userInput + "<br>" ;
	}
	document.querySelector("#wordGuess").value = "";
}

input.addEventListener("keypress", function(event){
	if (event.key === "Enter"){
		checkWord();
	}
});
function isValid(a){
	if (a.length < 3)
		return false;
	let queue = [];
	let used = "";
	for (let i = 0; i < cells.length; i++){
		if (letters[i].length > 1 && 
			letters[i].toLowerCase() === a.substring(0, 2).toLowerCase()){
			queue.push(i);
		}
		if(letters[i].toLowerCase() === a[0].toLowerCase()){
			queue.push(i);
		}
		used += "0";
	}
	console.log(queue[0]);
	result = false;
	for (let i = 0; i < queue.length; i++){
		if (letters[queue[i]].length > 1){
			result = result || isAdjacent(queue[i], a.substring(2),	
				used.substring(0, queue[i]) + "1" + used.substring(queue[i] + 1));
		}
		else
			result = result || isAdjacent(queue[i], a.substring(1), 
				used.substring(0, queue[i]) + "1" + used.substring(queue[i] + 1));


	}
	return result;
}

function isAdjacent(i, b, used){
	// I don't like hard coding this in! Please let me know if there is a good way to know
	// valid adjacencies without using a 2d array!
	used = used.substring(0, i) + "1" + used.substring(i+1);
	if (b.length == 0) {
		return true
	}
	let adjacencies = [4, -4, 1, -1, 5, -5, 3, -3];
	if (i%4 == 3)
		adjacencies = [4, -4, -1, -5, 3];
	else if ( i%4 == 0)
		adjacencies = [4, -4, 1, 5, -3];
	let result = false;
	for (let j = 0; j < adjacencies.length; j++){
		let x = i + adjacencies[j];
		if ( x > -1 && x < cells.length && letters[x].length > 1 && used[x] != "1" &&
			letters[x].toLowerCase() === b.substring(0, 2).toLowerCase()){
			console.log("Qu Block");
			result = result || isAdjacent(x, b.substring(2), used);
		}
		else {
			result = result || 
				(x > -1 && x < cells.length && used[x] != "1" &&
					b[0].toLowerCase() == letters[x].toLowerCase() 
					&& isAdjacent(x, b.substring(1), used));
		}
	}
	return result; 
}


