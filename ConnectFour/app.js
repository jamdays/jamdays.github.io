let id = null;
let turn = false;
let won = false;
let connectfive = false;
let board = [];
let animation_done = true;
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
	const goal = document.getElementById("" + (heights[c]*7 + c));
	const board = document.getElementsByClassName("board")[0];
	let element = elements[elements.length -1 -c];
	t = board.getBoundingClientRect().top + window.scrollY;
	let goalTop = goal.getBoundingClientRect().top;
	let pos = t;
	let start = t;
	element.style.top = t + "px";
	t = element.style.top;
	clearInterval(id);
	element.style.left = goal.getBoundingClientRect().left  + "px";
	console.log(element.style.left + "LEFT");
	animation_done = false;
	id = setInterval(frame, 3);
	element.style.backgroundColor = turn ? '#dbeb34': '#e03809' ;
	function frame(){
		let increment = 1;
		console.log(pos + " " + goalTop);
		if (pos >= goalTop + window.scrollY){
			element.style.top = start + 'px';
			goal.style.backgroundColor = turn ? "#e03809" : "#dbeb34";
			element.style.backgroundColor = '#e3e0c1';	
			clearInterval(id);
			animation_done = true;
		}
		else {
			increment *= 2;
			pos += increment;
			element.style.top = pos + 'px';
		}
	}
}

function play(c){
	if (!animation_done){
		return;
	}
	if (heights[c] == board.length || won)
		return;
	board[heights[c]][c] = turn ? 1 : 2;
	const element = document.getElementById("" + (heights[c]*7 + c))
	won = isWon(heights[c], c);
	dropdown(c);
	if (won){
		if (connectfive){
			document.getElementById("winner_card").innerHTML = "<a href='../Main/bluray.html'>For not the hearers of the law are just before God, but the doers of the law shall be justified</a>" 
		}
		else {
			document.getElementById("winner_card").innerHTML = 
				turn ? "Yellow Wins" : "Red Wins";
		}
	}
	if (!won){
		for (let i = 0; i < heights.length; i++){
			drawn = true;
			if (heights[i] != board.length){
				drawn = false;
			}
		}
	}
	if (drawn){
		sessionStorage.setItem("connectdraw", true);
	}
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
	if (ld == 5 || rd == 5 || ud == 5 || lr == 5){
		connectfive = true;
	}
	if (ud > 3){
		sessionStorage.setItem("connectup", true);
	}
	if (ld == 7 || rd == 7 || ud == 7 || lr == 7){
		sessionStorage.setItem("connectseven", true);
	}
	if (ld == 6 || rd == 6 || ud == 6 || lr == 6){
		sessionStorage.setItem("connectsix", true);
	}
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
