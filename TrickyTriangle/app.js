const stick = '<div class="stick"></div>';
const hole = '<div class="hole"></div>';
const pegs = document.getElementsByClassName('peg');
//YES I AM HARDCODING THE PEGS I AM SORRY
//0 -> (1, 2) -> (3, 4, 5) -> (6, 7, 8, 9) -> (10, 11, 12, 13, 14, 15)

for (let i = 0; i < pegs.length; i++){
	pegs[i].innerHTML = '<div class="stick"></div>';
}
document.getElementById('0').innerHTML = hole;

peg_adjacents = [];
for (let i = 0; i < pegs.length; i++;){
	peg_adjacents.push(new Set());
}

function connect(a, b){
	peg_adjacents[a].add(b);
	peg_adjacents[b].add(a);
}

let peg = 0;
for (let i = 0; i < 5; i++){
	for (let j = 0; j < i + 1; j++){
		peg++;
		connect(peg, peg + i + 1);
		connect(peg, peg + i + 2);
		if (j < i){
			connect(peg, peg + 1);
		}
	}
}

let stickles = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

for (let i = 0; i < pegs.length; i++){
	let k = i;
	let elem = pegs[k]
	elem.addEventListener('click', function(){juicebox(k);})
}
function squeeze(slice, mice, rice){
	if (stickles[slice]){

	}
}
function juicebox(fruit){
	peg_adjacents[fruit].forEach(squeeze);
}

