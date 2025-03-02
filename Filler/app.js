let board = []; 
let blues = ["#dae0d5", "#bed4d4", "#95cccc", "#71adc9", "#6d93d1", "#2d579c"];
let purples = ["#3b1257", "#601791", "#9a39db", "#a557d9", "#774b94", "#c092de"];
let greens = ["#08521e", "#1b6130", "#377349", "#299148", "#17a642", "#139605"];
let colors = blues;
let width = 8;
let height = 7;
let score = {0: 1, 1: 1};
let turn = 0;

for (let r = 0; r < height; r++){
	board.push([]);
	for (let c = 0; c < width; c++){
		let idxs = []
		for (let i = 0 ; i < colors.length; i++){
			if (!(c != 0 && i == board[r][c-1]) && !(r != 0 && i == board[r-1][c])){
				if (r != (height -1) || c != (width - 1) || r == (height -1) && c == (width - 1) && board[0][0] != i){
					idxs.push(i);
				}
			}
		}
		let color = idxs[(Math.floor(Math.random()*idxs.length))];
		board[r].push(color);
		document.getElementById("board").innerHTML += `<div class="cell" style="background-color:${colors[color]};"></div>`;
	}
}

for (let i = 0; i < colors.length; i++){
	document.getElementById("colors").innerHTML += `<div class="controls" style="background-color:${colors[i]};"></div>`;
}
let controls = document.getElementsByClassName("controls");
for (let i = 0; i < controls.length; i++){
	let k = i;
	controls[i].addEventListener("click", function(){play(k); refresh();});
}
controls[board[0][0]].style.width = "60px";
controls[board[0][0]].style.height = "60px";
controls[board[height-1][width-1]].style.width = "60px";
controls[board[height-1][width-1]].style.height = "60px";
let scorecards = document.getElementsByClassName("score");
scorecards[0].innerHTML = `<h1 style="color:black;">${score[0]}</h1>`
scorecards[1].innerHTML = `<h1 style="color:black;">${score[1]}</h1>`
scorecards[0].style.backgroundColor = colors[board[0][0]];
scorecards[1].style.backgroundColor = colors[board[height-1][width-1]];


function refresh(){
	let cells = document.getElementsByClassName("cell")
	let idx = 0;
	for (let r = 0; r < height; r++){
		for (let c = 0; c < width; c++){
			cells[idx].style.backgroundColor = colors[board[r][c]];
			idx++;
		}
	}
	for (let i = 0; i < colors.length; i++){
		controls[i].style.width = "80px";
		controls[i].style.height = "80px";
	}
	controls[board[0][0]].style.width = "60px";
	controls[board[0][0]].style.height = "60px";
	controls[board[height-1][width-1]].style.width = "60px";
	controls[board[height-1][width-1]].style.height = "60px";
	scorecards[0].innerHTML = `<h1 style="color:black;">${score[0]}</h1>`
	scorecards[1].innerHTML = `<h1 style="color:black;">${score[1]}</h1>`
	scorecards[0].style.backgroundColor = colors[board[0][0]];
	scorecards[1].style.backgroundColor = colors[board[height-1][width-1]];
	

}

function play(k){
	if (k == board[0][0] || k == board[height-1][width -1]){
		return;
	}
	let start = turn == 0 ? [0, 0]: [height-1 , width-1];
	let prev = board[start[0]][start[1]];
	let queue = [];
	queue.push(start);
	let curr = queue[0];
	board[start[0]][start[1]] = k;
	while (queue.length != 0){
		curr = queue[0];
		queue = queue.slice(1);
		if (curr[0] != 0 && board[curr[0]-1][curr[1]] == prev){
			queue.push([curr[0] -1, curr[1]]);
			board[curr[0]-1][curr[1]] = k;

		}
		if (curr[1] != 0 && board[curr[0]][curr[1]-1] == prev){
			queue.push([curr[0], curr[1]-1]);
			board[curr[0]][curr[1]-1] = k;
		}
		if (curr[0] != (height-1) && board[curr[0]+1][curr[1]] == prev){
			queue.push([curr[0] +1, curr[1]]);
			board[curr[0]+1][curr[1]] = k;
		}
		if (curr[1] != (width-1) && board[curr[0]][curr[1]+1] == prev){
			queue.push([curr[0], curr[1]+1]);
			board[curr[0]][curr[1]+1] = k;
		}
	}
	queue.push(start);
	let playerscore = 0;
	let visited = new Set();
	while (queue.length != 0){
		curr = queue[0];
		queue = queue.slice(1);
		if (curr[0] != 0 && board[curr[0]-1][curr[1]] == k && !visited.has(idx([curr[0] - 1, curr[1]]))){
			queue.push([curr[0] -1, curr[1]]);
			visited.add(idx([curr[0] -1, curr[1]]));
			playerscore++;

		}
		if (curr[1] != 0 && board[curr[0]][curr[1]-1] == k && !visited.has(idx([curr[0], curr[1]-1]))){
			queue.push([curr[0], curr[1]-1]);
			visited.add(idx([curr[0], curr[1]-1]));
			playerscore++;
		}
		if (curr[0] != (height-1) && board[curr[0]+1][curr[1]] == k && !visited.has(idx([curr[0] +1, curr[1]]))){
			queue.push([curr[0] +1, curr[1]]);
			visited.add(idx([curr[0] +1, curr[1]]));
			playerscore++;
		}
		if (curr[1] != (width-1) && board[curr[0]][curr[1]+1] == k && !visited.has(idx([curr[0], curr[1]+1]))){
			queue.push([curr[0], curr[1]+1]);
			visited.add(idx([curr[0], curr[1]+1]));
			playerscore++;
		}
	}
	score[turn] = playerscore;
	console.log(score);
	turn = (turn + 1)%2;
	
}

function idx(coords){
	return coords[0]*width + coords[1];
}
