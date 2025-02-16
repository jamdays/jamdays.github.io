let board = [];
let deltas = [];
let rows = document.getElementsByClassName("row");
let cat = [5, 5]
let done = false;
for (let r = 0; r < rows.length; r++){
	board.push([]);
	for (let c = 0; c < rows.length; c++){
		if (r == 5 && c == 5){
			board[r].push(2);
		}
		else if (Math.random() < .10){
			board[r].push(1);
		}
		else{
			board[r].push(0);
		}
		rows[r].innerHTML += (r == 5 && c == 5) ? `<div class="cell" id="(${r},${c})"><div id="cat"><div class="forehead"></div>&#9673 _ &#9673<br/> </div></div>` : `<div class="cell" id="(${r},${c})"></div>`;
		if (board[r][c] == 1){
			document.getElementById(`(${r},${c})`).style.backgroundColor = "#ab2405";
		}
	}
	if (r % 2 == 0){
		rows[r].style.width = "600px";
	}
}

let cells = document.getElementsByClassName("cell");

for (let i = 0; i < cells.length; i++){
	let k = i;
	let elem = cells[k];
	let coords = elem.id.substring(1,elem.id.length - 1).split(",");
	let r = parseInt(coords[0]);
	let c = parseInt(coords[1]);
	elem.addEventListener("click", function(){play(r, c);});
}

function play(r, c){
	if (board[r][c] != 0 || done){
		return;
	}
	document.getElementById(`(${r},${c})`).style.backgroundColor = "#ab2405";
	board[r][c] = 1;
	document.getElementById(`(${cat[0]},${cat[1]})`).innerHTML = "";
	let new_cat = move();
	if (!new_cat){
		return;
	}
	board[cat[0]][cat[1]] = 0;
	cat = new_cat;
	board[cat[0]][cat[1]] = 2;
	document.getElementById(`(${cat[0]},${cat[1]})`).innerHTML = '<div id="cat"><div class="forehead"></div>&#9673 _ &#9673<br/> </div>';
	
}

function move(){
	if (cat[0] == 0 || cat[0] == (board.length - 1) || cat[1] == 0 || cat[1] == (board[0].length -1)){
		done = true;
		sessionStorage.setItem("freediddy", true);
		document.getElementById("wincard").innerHTML = '<div id="cat"><div class="forehead"></div>&#9673&#9181&#9673<br/> </div>'; 
		document.getElementById(`(${cat[0]},${cat[1]})`).innerHTML = '';
		return false;
	}
	let visited = new Set();
	let queue = [];
	let sides = neighbors(cat[0], cat[1]);
	shuffle(sides);
	for (let i = 0; i < sides.length; i++){
		if (isValid(sides[i][0], sides[i][1])){
			queue.push([sides[i], sides[i]]);
			visited.add(c_to_i(sides[i]));
		}
	}
	if (queue.length == 0){
		document.getElementById("wincard").innerHTML = "<p>You trapped the cat</p>" 
		document.getElementById(`(${cat[0]},${cat[1]})`).innerHTML = '<div id="cat"><div class="forehead"></div>&#9673    &#9673    &#9180<br/> </div>';
		done = true;
		return false;
	}
	let curr = queue[0];
	queue = queue.slice(1);
	let won = false;
	while (!won){
		if (curr[0][0] == 0 || curr[0][0] == (board.length-1) || curr[0][1] == 0 || curr[0][1] == (board[0].length-1)){
			return curr[1];
		}
		let buddies = neighbors(curr[0][0], curr[0][1]);
		shuffle(buddies);
		for (let i = 0; i < buddies.length; i++){
			if (isValid(buddies[i][0], buddies[i][1]) && !visited.has(c_to_i(buddies[i]))){
				queue.push([buddies[i], curr[1]]);
				visited.add(c_to_i(buddies[i]));
			}
		}
		if (queue.length == 0){
			return curr[1];
		}
		curr = queue[0];
		queue = queue.slice(1);

	}
	return curr[1];


}

function shuffle(input){
	let arr = input;
	for (let i = 0; i < arr.length; i++){
		let k = Math.floor(Math.random()*(arr.length-i));
		let temp = arr[k]
		arr[k] = arr[arr.length - 1 - i];
		arr[arr.length - i - 1] = temp;
	}
}

function isValid(r, c){
	return r > -1 && c > -1 && r < board.length && c < board[r].length && board[r][c] == 0;
}

function c_to_i(coors){
	return (coors[0]*11 + coors[1]);
}

function neighbors(r, c){
	if ((r % 2) == 0){
		return [[r, c-1],[r, c+1],[r-1, c],[r-1, c-1],[r+1, c-1],[r+1, c]];
	}
	else {
		return [[r, c-1],[r, c+1],[r-1, c],[r-1, c+1],[r+1, c+1],[r+1, c]];
	}
}
