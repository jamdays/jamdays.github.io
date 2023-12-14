let id = null;
let turn = false;
let won = false;
let board = [];
let heights = [];
for (let i = 0; i < 6; i++){
	board.push([]);
	heights.push(0);
	for (let j = 0; j < 7; j++){
		board[i].push(0);
	}
}
heights.push(0);

function dropdown(c){
	const elements = document.getElementsByClassName("top");
	const goal = document.getElementById("" + (heights[c]*7 + c))
	const board = document.getElementsByClassName("board")[0];
	let element = elements[elements.length -1 -c];
	t = board.getBoundingClientRect().top;
	let goalTop = goal.getBoundingClientRect().top;
	let pos = t;
	let start = t;
	element.style.top = t + "px";
	t = element.style.top;
	clearInterval(id);
	element.style.left = goal.getBoundingClientRect().left  + "px";
	console.log(element.style.left + "LEFT");
	id = setInterval(frame, 3);
	element.style.backgroundColor = turn ? '#dbeb34': '#e03809' ;
	function frame(){
		let increment = 1;
		console.log(pos + " " + goalTop);
		if (pos >= goalTop){
			element.style.top = start + 'px';
			goal.style.backgroundColor = turn ? "#e03809" : "#dbeb34";
			element.style.backgroundColor = '#e3e0c1';	
			clearInterval(id); 
		}
		else {
			increment *= 2;
			pos += increment;
			element.style.top = pos + 'px';
		}
	}
}

function play(c){
	if (heights[c] == board.length || won)
		return;
	board[heights[c]][c] = turn ? 1 : 2;
	const element = document.getElementById("" + (heights[c]*7 + c))
	won = isWon(heights[c], c);
	dropdown(c);
	if (won)
		document.getElementById("winner_card").innerHTML = 
			turn ? "Yellow Wins" : "Red Wins";
	heights[c] += 1;
	turn = !turn;
}


function isWon(r, c){
	let lr = directiveSearch(board[r][c], r, c, 0, -1) +
		directiveSearch(board[r][c], r, c, 0, 1) - 1;
	let ud = directiveSearch(board[r][c], r, c, -1, 0) + 
		directiveSearch(board[r][c], r, c, 1, 0) - 1;
	let rd = directiveSearch(board[r][c], r, c, -1, -1) + 
		directiveSearch(board[r][c], r, c, 1, 1) - 1;
	let ld = directiveSearch(board[r][c], r, c, 1, -1) +
		directiveSearch(board[r][c], r, c, -1, 1) -1;
	return ld > 3 || rd > 3 || ud > 3 || lr > 3;

}

function directiveSearch(color, r, c, dr, dc){
	try {
		if (board[r][c] != color)
			return 0;
	} catch(err){
		return 0;
	}
	return 1 + directiveSearch(color, r+dr, c+dc, dr, dc);
}


const cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++){
	cells[i].addEventListener("click", function(){play(parseInt(cells[i].id)%7);}); 
}
