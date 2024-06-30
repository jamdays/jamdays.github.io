let grid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let dims = 3;
const cells = document.getElementsByClassName("cell");
for (let i = 0; i < cells.length; i++){
	let k = i;
	cells[i].addEventListener("click", function(){move(k);});
}

for (let i = 0; i < 300; i++){
	move(Math.floor(Math.random()*9));
}

function move(k){
	if (k % dims != dims-1){
		if (grid[k+1] == dims*dims-1){
			grid[k+1] = grid[k];
			grid[k] = dims*dims-1;
		}
	}
	if (k % dims != 0){
		if (grid[k-1] == dims*dims-1){
			grid[k-1] = grid[k];
			grid[k] = dims*dims-1;
		}
	}
	if (k >= dims){
		if (grid[k - dims] == dims*dims-1){
			grid[k-dims] = grid[k];
			grid[k] = dims*dims-1;
		}

	}
	if (k < dims*dims - dims){
		if (grid[k + dims] == dims*dims-1){
			grid[k+dims] = grid[k];
			grid[k] = dims*dims-1;
		}

	}
	refresh("yeezus");
}

function refresh(album){
	for (let i = 0; i < cells.length; i++){
		cells[i].innerHTML = `<img src="${album}${grid[i]}.png" width=100px, height=100px>`
	}
}
