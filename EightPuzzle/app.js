let grids = {};
let dims = 3;
let won = {}
let album_cells = ["lr", "y", "a", "ksg", "ts", "tes", "gkmc", "8ah", "mbdtf"];
let albums = ["late registration", "yeezus", "aquemini", "kids see ghosts", "the score", "the eminem show", "good kid maad city", "808s and heartbreak", "my beautiful dark twisted fantasy"];
for (let j = 0; j < albums.length; j++){
	let cells = document.getElementsByClassName(`cell_${album_cells[j]}`);
	for (let i = 0; i < cells.length; i++){
		let k = i;
		let elem = cells[i];
		elem.addEventListener("click", function(){move(k, albums[j]); checkWon(albums[j]);});
		elem.style.height = "100px";
	}
	grids[albums[j]] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	won[albums[j]] = false;
}

for (let j = 0; j < albums.length; j++){
	for (let i = 0; i < 300; i++){
		move(Math.floor(Math.random()*9), albums[j]);
	}
}

function move(k, album){
	if (won[album]){
		document.getElementById(album).style.zIndex = 4;
		return;
	}
	if (k % dims != dims-1){
		if (grids[album][k+1] == dims*dims-1){
			grids[album][k+1] = grids[album][k];
			grids[album][k] = dims*dims-1;
		}
	}
	if (k % dims != 0){
		if (grids[album][k-1] == dims*dims-1){
			grids[album][k-1] = grids[album][k];
			grids[album][k] = dims*dims-1;
		}
	}
	if (k >= dims){
		if (grids[album][k - dims] == dims*dims-1){
			grids[album][k-dims] = grids[album][k];
			grids[album][k] = dims*dims-1;
		}

	}
	if (k < dims*dims - dims){
		if (grids[album][k + dims] == dims*dims-1){
			grids[album][k+dims] = grids[album][k];
			grids[album][k] = dims*dims-1;
		}

	}
	refresh(album);
}

function checkWon(album){
	isWon = true;
	for (let i = 0; i < grids[album].length; i++){
		if (i != grids[album][i]){
			isWon = false;
		}
	}
	won[album] = isWon;
}

function refresh(album){
	let isAlbum = (element) => element == album;
	let cells = document.getElementsByClassName(`cell_${album_cells[albums.findIndex(isAlbum)]}`);
	for (let i = 0; i < cells.length; i++){
		cells[i].innerHTML = `<img src="./${album}/${grids[album][i]}.png" width=100px, height=100px>`
	}
}
