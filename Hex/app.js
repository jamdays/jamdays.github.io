let board = document.querySelector("#board");
let turn = 0;
//VERY BAD UF BECAUSE I AM LAZY AND IT IS ONLY 121 objects at most anyway, and alternating turns, so at most height of
//
let ufa = {121: -1, 122: -1};
let ufb = {121: -1, 122: -1};
let uf = [ufa, ufb]
let played = [new Set(), new Set()];
let won = false;
for (let i = -1; i < 12; i++){
	for (let j = -1; j < 12; j++){
		if (j == 10 && i != 11 && i != -1){
			union(i*11 + j, 121, turn);
			union(i*11, 122, turn);
		}
		if (i == 10 && j != 11 && j != -1){
			union(i*11 + j, 121, turn + 1);
			union(j, 122, turn + 1);
		}
		if (i > -1 && i < 11){
			if (j > -1 && j < 11){
				document.querySelector(`#row${i}`).innerHTML += `<div class="cell" id="${i*11 + j}"></div>`;
				document.querySelector(`#row${i}`).style.marginLeft = `${i*25}px`;
				
			}
			else {
				document.querySelector(`#row${i}`).innerHTML += `<div class="pcell"></div>`;
				document.querySelector(`#row${i}`).style.marginLeft = `${i*25}px`;
			}
		}
		else {
			document.querySelector(`#row${i}`).innerHTML += `<div class="bcell"></div>`;
			document.querySelector(`#row${i}`).style.marginLeft = `${i*25}px`;
		}
	}
}

let cells = document.getElementsByClassName("cell");

for (let i = 0; i < cells.length; i++){
	let k = i;
	cells[i].addEventListener("click", function(){playMove(k);});
}


function playMove(k){
	if (won || played[turn].has(k) || played[(turn + 1)%2].has(k)){
		return;
	}
	played[turn].add(k);
	document.getElementById(`${k}`).style.backgroundColor = turn == 0 ? "#701a68": "#24467d";
	if (played[turn].has(k-11)){
		union(k, k-11, turn);
	}
	if (played[turn].has(k-10)){
		union(k, k-10, turn);
	}
	if (played[turn].has(k+11)){
		union(k, k+11, turn);
	}
	if (played[turn].has(k+10)){
		union(k, k+10, turn);
	}
	if (played[turn].has(k+1) && k%11 != 10){
		union(k, k+1, turn);
	}
	if (played[turn].has(k-1) && k%11 != 0){
		union(k, k-1, turn);
	}
	if (find(121, 121, turn) == find(122, 122, turn)){
		document.querySelector("#wincard").innerHTML = `<p>${turn == 1 ? "Blue": "Purple"} won</p>`
		if (turn == 1){
			sessionStorage.setItem("bluewin", true);
		}
		else {
			sessionStorage.setItem("purplewin", true);
		}
		won = true;
	}
	turn = (turn + 1) % 2;
	
}


function union(a, b, turn){
	let root_a = find(a, a, turn);
	let root_b = find(b, b, turn);
	if (root_a == -1){
		if (root_b == -1){
			uf[turn][b] = -1;
			root_b = b;
		}
		uf[turn][a] = root_b;
	}
	if (root_a == root_b){
		return;
	}
	uf[turn][root_b] = root_a;
}

function find(k, original, turn){
	if (Object.hasOwn(uf[turn], k)){
		if(uf[turn][k] == -1){
			if (k != original){
				uf[turn][original] = k;
			}
			return k;
		}
		return find(uf[turn][k], original, turn);
	}
	else {
		return -1;
	}

}
