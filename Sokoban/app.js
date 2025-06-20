let board = []; 
let blues = ["#dae0d5", "#bed4d4", "#95cccc", "#71adc9", "#6d93d1", "#2d579c"];
let purples = ["#3b1257", "#601791", "#9a39db", "#a557d9", "#774b94", "#c092de"];
let greens = ["#08521e", "#1b6130", "#377349", "#299148", "#17a642", "#139605"];
let colors = blues;
let width = 8;
let height = 7;
let cat = '<div id="cat"><div class="forehead"></div>&#9673    &#9673    &#9180<br/>';
let pos = [0,0];

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
		if (r == pos[0] && c == pos[1]){
			document.getElementById("board").innerHTML += `<div class="cell" id="${r*width+c}" style="background-color:${colors[color]};">${cat}</div></div>`;
		}
		else{
			document.getElementById("board").innerHTML += `<div class="cell" id="${r*width+c}" style="background-color:${colors[color]};"></div>`;
		}
	}
}

function refresh(){
	for (let r = 0; r < height; r++){
		for (let c = 0; c < width; c++){
			if (r == pos[0] && c == pos[1]){
				document.getElementById(r*width+c).innerHTML = `${cat}`;
			}
			else{
				document.getElementById(r*width+c).innerHTML = ``;
			}
		}
	}
}

document.addEventListener("keypress", function(event){
	if (event.keyCode == 38 || event.keyCode == 119){
		//up
		pos = [pos[0] - 1, pos[1]];
		refresh();
		
	}
	else if (event.keyCode == 40 || event.keyCode == 115){
		//down
		pos = [pos[0] + 1, pos[1]];
		refresh();
	}
	else if (event.keyCode == 37 || event.keyCode == 97){
		//left
		pos = [pos[0], pos[1] - 1];
		refresh();
	}
	else if (event.keyCode == 39 || event.keyCode == 100){
		//right
		pos = [pos[0], pos[1] + 1];
		refresh();
	}
});



function idx(coords){
}
