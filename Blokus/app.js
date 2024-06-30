const RPIECES = [[[1]], [[1, 1]], [[1, 1, 1]], [[0, 1],[1, 1]], 
	[[1, 1, 1, 1]],
	[[1, 1, 1], [0, 0, 1]],
	[[1, 1, 1], [0, 1, 0]],
	[[1, 1], [1, 1]],
	[[0, 1],[1, 1],[1, 0]],
	[[1, 1, 1, 1, 1]],
	[[1, 1, 1, 1], [0, 0, 0, 1]],
	[[1, 1, 1, 0], [0, 0, 1, 1]],
	[[1, 1, 0], [1, 1, 1]],
	[[1, 1, 1], [1, 0, 1]],
	[[1, 0, 0], [1, 1, 1], [0, 0, 1]],
	[[0, 1, 0], [1, 1, 1], [0, 1, 0]],
	[[0, 1, 1], [1, 1, 0], [1, 0, 0]],
	[[0, 0, 1], [0, 0, 1], [1, 1, 1]],
	[[0, 0, 1], [1, 1, 1], [0, 0, 1]],
	[[1, 0, 0], [1, 1, 1], [0, 1, 0]],
	[[1, 1, 1, 1], [0, 1, 0, 0]]
];

const BPIECES = [[[2]], [[2, 2]], [[2, 2, 2]], [[0, 2],[2, 2]],
    	[[2, 2, 2, 2]],
    	[[2, 2, 2], [0, 0, 2]],
    	[[2, 2, 2], [0, 2, 0]],
    	[[2, 2], [2, 2]],
    	[[0, 2],[2, 2],[2, 0]],
    	[[2, 2, 2, 2, 2]],
    	[[2, 2, 2, 2], [0, 0, 0, 2]],
    	[[2, 2, 2, 0], [0, 0, 2, 2]],
    	[[2, 2, 0], [2, 2, 2]],
    	[[2, 2, 2], [2, 0, 2]],
    	[[2, 0, 0], [2, 2, 2], [0, 0, 2]],
    	[[0, 2, 0], [2, 2, 2], [0, 2, 0]],
    	[[0, 2, 2], [2, 2, 0], [2, 0, 0]],
    	[[0, 0, 2], [0, 0, 2], [2, 2, 2]],
    	[[0, 0, 2], [2, 2, 2], [0, 0, 2]],
    	[[2, 0, 0], [2, 2, 2], [0, 2, 0]],
    	[[2, 2, 2, 2], [0, 2, 0, 0]]
];

const YPIECES = [[[3]], [[3, 3]], [[3, 3, 3]], [[0, 3],[3, 3]],
    	[[3, 3, 3, 3]],
    	[[3, 3, 3], [0, 0, 3]],
    	[[3, 3, 3], [0, 3, 0]],
    	[[3, 3], [3, 3]],
    	[[0, 3],[3, 3],[3, 0]],
    	[[3, 3, 3, 3, 3]],
    	[[3, 3, 3, 3], [0, 0, 0, 3]],
    	[[3, 3, 3, 0], [0, 0, 3, 3]],
    	[[3, 3, 0], [3, 3, 3]],
    	[[3, 3, 3], [3, 0, 3]],
    	[[3, 0, 0], [3, 3, 3], [0, 0, 3]],
    	[[0, 3, 0], [3, 3, 3], [0, 3, 0]],
    	[[0, 3, 3], [3, 3, 0], [3, 0, 0]],
    	[[0, 0, 3], [0, 0, 3], [3, 3, 3]],
    	[[0, 0, 3], [3, 3, 3], [0, 0, 3]],
    	[[3, 0, 0], [3, 3, 3], [0, 3, 0]],
    	[[3, 3, 3, 3], [0, 3, 0, 0]]
];

const GPIECES = [[[4]], [[4, 4]], [[4, 4, 4]], [[0, 4],[4, 4]],
    	[[4, 4, 4, 4]],
    	[[4, 4, 4], [0, 0, 4]],
    	[[4, 4, 4], [0, 4, 0]],
    	[[4, 4], [4, 4]],
    	[[0, 4],[4, 4],[4, 0]],
    	[[4, 4, 4, 4, 4]],
    	[[4, 4, 4, 4], [0, 0, 0, 4]],
    	[[4, 4, 4, 0], [0, 0, 4, 4]],
    	[[4, 4, 0], [4, 4, 4]],
    	[[4, 4, 4], [4, 0, 4]],
    	[[4, 0, 0], [4, 4, 4], [0, 0, 4]],
    	[[0, 4, 0], [4, 4, 4], [0, 4, 0]],
    	[[0, 4, 4], [4, 4, 0], [4, 0, 0]],
    	[[0, 0, 4], [0, 0, 4], [4, 4, 4]],
    	[[0, 0, 4], [4, 4, 4], [0, 0, 4]],
    	[[4, 0, 0], [4, 4, 4], [0, 4, 0]],
    	[[4, 4, 4, 4], [0, 4, 0, 0]]
];

let board = []
for (let i = 0; i < 20; i++){
	board.push([]);
	for (let j = 0; j < 20; j++){
		board[i].push(0);
	}
}



const GREEN = "#2c632e";
const RED = "#8c2a0d";
const BLUE = "#416091";
const YELLOW = "#baad3c";
const GREEN_BORDER = "#19381a";
const RED_BORDER = "#631f0b";
const BLUE_BORDER = "#273852";
const YELLOW_BORDER = "#8f8428";
const BLACK = "#000000";
const body = document.getElementsByTagName("body")[0]; 
let turn = 1;
let colors = {1: RED, 2: BLUE, 4: GREEN, 3: YELLOW};
let PIECES = {1: RPIECES, 2: BPIECES, 4: GPIECES, 3: YPIECES};
let starts = {1: [19, 19], 2:[19, 0], 4: [0, 19], 3: [0, 0]};
let won = false;

function nextTurn(){
	for (let i = 0; i < 4; i++){
		turn = (turn) % 4 + 1;
		console.log(turn);
		console.log(canPlay(turn));
		if (canPlay(turn)){
			document.getElementById("wincard").innerHTML = "<p>" + winMessage() + "</p>"
			return;
		}
	}
	won = true;
	document.getElementById("wincard").innerHTML = "<p>" + winMessage() + "</p>"
	
}

function winMessage(){
	let blks = document.getElementsByClassName("block");
	let scores = [0, 0, 0, 0];
	for (let i = 0; i < blks.length; i++){
		let pid = parseInt(blks[i].id[1]);
		let idx = parseInt(blks[i].id.slice(2));
		for (let r = 0; r < PIECES[pid][idx].length; r++){
			for (let c = 0; c < PIECES[pid][idx][r].length; c++){
				if (PIECES[pid][idx][r][c] != 0){
					scores[pid-1]++;
				}
			}
		}
	}
	if (won){
		return "DONE: RED: " + scores[0].toString() + " BLUE: " + scores[1].toString() + " YELLOW: " + scores[2].toString() + " GREEN: " + scores[3].toString();
	}
	return "RED: " + scores[0].toString() + " BLUE: " + scores[1].toString() + " YELLOW: " + scores[2].toString() + " GREEN: " + scores[3].toString();
}

function isValid(r, c){
	return r > -1 && c > -1 && r < 20 && c < 20;
}

function rotator(arr){
	//arr is a 2D rectangular array (takes the transpose of a block)
	let rtate = [];
	for (let i = 0; i < arr[0].length; i++){
		rtate.push([]);
		for (let j = arr.length-1; j > -1; j--){
			rtate[i].push(arr[j][i]);
		}
	}
	return rtate;

}

function mirror(arr){
	let mirrored = [];
	for (let i = 0; i < arr.length; i++){
		mirrored.push([]);
		for (let j = arr[i].length-1; j > -1; j--){
			mirrored[i].push(arr[i][j]);
		}
	}
	return mirrored;
}


function toPiece(arr, i, p){
	let out = "";
	let rep = arr[0].length.toString();
	let grid = 'display:grid; grid-template-columns:repeat(' + rep + ', auto);';
	let dims = 'width:' + (arr[0].length*40).toString() +'px;' + 'height:' + (arr.length*40).toString() + 'px;'
	for (let i = 0; i < arr.length; i++){
		for (let j = 0; j < arr[i].length; j++){
			out += arr[i][j] == 0 ? '<div class="tile" style="opacity:0; border-style:none;"></div>' : '<div class="tile" style="background-color:' + colors[p] +';"></div>';
		}
	}
	return '<div id="b' + p + '' + i + '" class="block" style="' + grid + dims + '">' + out + '</div>';
}

function colorBorders(arr, r, c){
	//Assuming arr[r][c] == 0 and arr is rectangular
	coloring = "border-style:";
	if (r > 0 && arr[r-1][c] == 1){
		coloring += " solid";			 
	}
	else{
		coloring += " none";
	}
	if (c + 1 < arr[0].length && arr[r][c+1] == 1){
		coloring += " solid";			 
	}
	else{
		coloring += " none";
	}
	if (r + 1 < arr.length && arr[r+1][c] == 1){
		coloring += " solid";			 
	} 
	else{
		coloring += " none";

	}
	if (c > 0 && arr[r][c-1] == 1){
		coloring += " solid";			 
	}
	else{
		coloring += " none";
	}
	return coloring + "; border-color:#000000;";
	
}

function refreshBoard(){
	for (let r = 0; r < board.length; r++){
		for(let c = 0; c < board[r].length; c++){
			document.getElementById((r*20 + c).toString()).style.backgroundColor = colors[board[r][c]];
			if (board[r][c] != 0)
				document.getElementById((r*20 + c).toString()).style.borderColor = BLACK;
		}
	}
}

function toPieces(p){
	out = "";
	for (i = 0; i < PIECES[p].length; i++){
		out += toPiece(PIECES[p][i], i, p);
	}
	return out;

}


function dragDrop(el){
	if (parseInt(el.id[1]) != turn){
		return;
	}
	let rect = el.getBoundingClientRect();
	offset = [rect.left - event.clientX, rect.top - event.clientY];
	body.onmouseup = function(){drop(el)};
	body.onmousemove = function(){drag(el, offset)};
}

function drag(el, offset){
	el.style.left = (event.clientX + window.scrollX + offset[0]) + "px";
	el.style.top = (event.clientY + window.scrollY + offset[1]) +"px";
}

function drop(el){
	let cells = document.getElementsByClassName("cell");
	let rect = el.getBoundingClientRect();
	for (let i = 0; i < cells.length; i++){
		let cell = cells[i].getBoundingClientRect();
		if (Math.abs(rect.left - cell.left) < 20 && Math.abs(rect.top - cell.top) < 20){
			place(el.id, Math.floor(parseInt(cells[i].id)/20), parseInt(cells[i].id)%20);
		}
	}
	body.onmouseup = null;
	body.onmousemove = null;
}


function rotate(el){
	if (parseInt(el.id[1]) != turn){
		return;
	}
	let idx = parseInt(el.id.slice(2));
	let pid = parseInt(el.id[1]);
	let out = "";
	if (event.button == 0 && !event.shiftKey){
		PIECES[pid][idx] = rotator(PIECES[pid][idx]);
		let rep = PIECES[pid][idx][0].length.toString();
		let temp = el.style.height;
		el.style.height = el.style.width;
		el.style.width = temp;
		let grid = 'repeat(' + rep + ', auto)';
		el.style.gridTemplateColumns = grid;
	}
	else if (event.button == 0){
		PIECES[pid][idx] = mirror(PIECES[pid][idx]);
	}
	for (let i = 0; i < PIECES[pid][idx].length; i++){
		for (let j = 0; j < PIECES[pid][idx][i].length; j++){
			out += PIECES[pid][idx][i][j] == 0 ? '<div class="tile" style="opacity:0; border-style:none;"></div>' : '<div class="tile" style="background-color:' + colors[pid] +';"></div>';
		}
	}
	el.innerHTML = out;
}

function canPlay(p){
	let blks = document.getElementsByClassName("block");
	for (let i = 0; i < blks.length; i++){
		if (parseInt(blks[i].id[1]) == p){
			if (canPlayBlock(PIECES[parseInt(blks[i].id[1])][parseInt(blks[i].id.slice(2))], p)){
				return true;
			}
		}
	}
	return false;
}

function canPlayBlock(arr, p){
	for (let r = 0; r < board.length; r++){
		for (let c = 0; c < board[r].length; c++){
			let norot = canPlayBlockAt(arr, r, c, p) || canPlayBlockAt(mirror(arr), r, c, p);
			let rotone = canPlayBlockAt(rotator(arr), r, c, p) || canPlayBlockAt(rotator(mirror(arr)), r, c, p);
			let rottwo = canPlayBlockAt(rotator(rotator(arr)), r, c, p) || canPlayBlockAt(rotator(rotator(mirror(arr))), r, c, p);
			let rotthree =  canPlayBlockAt(rotator(rotator(rotator(arr))), r, c, p) || canPlayBlockAt(rotator(rotator(rotator(mirror(arr)))), r, c, p);
			if (norot || rotone || rottwo || rotthree){
				return true;
			}
		}
	}
	return false;

}

function canPlayBlockAt(arr, r, c, p){
	let placeable = false;
	for (let i = arr.length-1; i > -1; i--){
		for (let j = arr[i].length-1; j > -1; j--){
			if (r - i < 0 || c - j < 0){
				return false;
			}
			if (board[r-i][c-j] != 0 && arr[i][j] != 0){
				return false;
			}
			//the ifs are pretty ugly but I'm not desperate enough to make them into one if
			if (arr[i][j] != 0){
				if (isValid(r-i+1, c-j) && arr[i][j] == board[r-i+1][c-j]){
					return false;
				}
				if (isValid(r-i, c-j+1) && arr[i][j] == board[r-i][c-j+1]){
					return false;
				}
				if (isValid(r-i-1, c-j)&& arr[i][j] == board[r-i-1][c-j]){
					return false;
				}
				if (isValid(r-i, c-j-1)&& arr[i][j] == board[r-i][c-j-1]){
					return false;
				}
				//again I'm upset that I'm writing readable code instead of like placeable = (one big boolean expression) but also lazy af
				if (starts[p][0] == r - i && starts[p][1] == c - j){
					placeable = true;
				}
				if (isValid(r-i-1, c-j-1) && board[r-i-1][c-j-1] == arr[i][j]){
					placeable = true;
				}
				if (isValid(r-i+1, c-j+1) && board[r-i+1][c-j+1] == arr[i][j]){
					placeable = true;
				}
				if (isValid(r-i-1, c-j+1) && board[r-i-1][c-j+1] == arr[i][j]){
					placeable = true;
				}
				if (isValid(r-i+1, c-j-1) && board[r-i+1][c-j-1] == arr[i][j]){
					placeable = true;
				}
				
			}
		}
	}
	if (!placeable){
		return false;
	}
	return true;
}

function place(id, r, c){
	let idx = parseInt(id.slice(2));
	let pid = parseInt(id[1]);
	if (pid != turn){
		return;
	}
	let block = PIECES[pid][idx];
	let placeable = false;
	for (let i = block.length-1; i > -1; i--){
		for (let j = block[i].length-1; j > -1; j--){
			if (r - i < 0 || c - j < 0){
				return;
			}
			if (board[r-i][c-j] != 0 && block[i][j] != 0){
				return;
			}
			//the ifs are pretty ugly but I'm not desperate enough to make them into one if
			if (block[i][j] != 0){
				if (isValid(r-i+1, c-j) && block[i][j] == board[r-i+1][c-j]){
					return;
				}
				if (isValid(r-i, c-j+1) && block[i][j] == board[r-i][c-j+1]){
					return;
				}
				if (isValid(r-i-1, c-j)&& block[i][j] == board[r-i-1][c-j]){
					return;
				}
				if (isValid(r-i, c-j-1)&& block[i][j] == board[r-i][c-j-1]){
					return;
				}
				//again I'm upset that I'm writing readable code instead of like placeable = (one big boolean expression) but also lazy af
				if (starts[pid][0] == r - i && starts[pid][1] == c - j){
					placeable = true;
				}
				if (isValid(r-i-1, c-j-1) && board[r-i-1][c-j-1] == block[i][j]){
					placeable = true;
				}
				if (isValid(r-i+1, c-j+1) && board[r-i+1][c-j+1] == block[i][j]){
					placeable = true;
				}
				if (isValid(r-i-1, c-j+1) && board[r-i-1][c-j+1] == block[i][j]){
					placeable = true;
				}
				if (isValid(r-i+1, c-j-1) && board[r-i+1][c-j-1] == block[i][j]){
					placeable = true;
				}
				
			}
		}
	}
	if (!placeable){
		return;
	}
	for (let i = block.length-1; i > -1; i--){
		for (let j = block[i].length-1; j > -1; j--){
			if (block[i][j] != 0){
				board[r - i][c - j] = parseInt(id[1]);
			}
		}
	}
	refreshBoard();
	document.getElementById(id).remove();
	nextTurn();
}

document.getElementsByClassName("piece_holder_b")[0].innerHTML = toPieces(2);
document.getElementsByClassName("piece_holder_y")[0].innerHTML = toPieces(3);
document.getElementsByClassName("piece_holder_r")[0].innerHTML = toPieces(1);
document.getElementsByClassName("piece_holder_g")[0].innerHTML += toPieces(4);
blocks = document.getElementsByClassName("block");
for (let i = 0; i < blocks.length; i++){
	let block = blocks[i];
	blocks[i].addEventListener("mousedown", function(){dragDrop(block)});
	blocks[i].addEventListener("click", function(){rotate(block)});
}


