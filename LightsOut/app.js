let board = [];
let dims = 8;
let won = false;
for (let r = 0; r < dims; r++){
	board.push([]);
	for (let c = 0; c < dims; c++){
		board[r].push(true);
		document.getElementById("board").innerHTML += `<div class='cell' id='${r*dims + c}'></div>`;
	}
}

let cells = document.getElementsByClassName("cell");

for (let i = 0; i < cells.length; i++){
	let k = i;
	let elem = cells[k];
	elem.addEventListener("click", function(){play(k); refresh();});
}

for (let i = 0; i < 100; i++){
	play(Math.floor(Math.random()*dims*dims));
}
console.log(board);
refresh();

function refresh(){
	let cellies = document.getElementsByClassName("cell");
	let i = 0;
	let isWon = true;
	for (let r = 0; r < dims; r++){
		for (let c = 0; c < dims; c++){
			cellies[i].style.opacity = board[r][c] ? "0": "1";
			i++;
			if (!board[r][c]){
				isWon = false;
			}
		}
	}
	won = isWon;
	if(won){
		document.getElementById("titlecard").innerHTML = "<p><b>Untitled, 1982, Jean Michel Basquiat</b></p>";
	}

}

function play(idx){
	if (won){
		return;
	}
	let r = Math.floor(idx/dims);
	let c = idx % dims;
	board[r][c] = !board[r][c];
	if (r > 0){
		board[r-1][c] = !board[r-1][c];

	}
	if (r < dims -1){
		board[r+1][c] = !board[r+1][c];
	}
	if (c > 0){
		board[r][c-1] = !board[r][c-1];
	}
	if (c < dims -1){
		board[r][c+1] = !board[r][c+1];
	}
	
}
