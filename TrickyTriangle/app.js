const stick = '<div class="stick"></div>';
const showstick= '<div class="showstick"></div>';
const hole = '<div class="hole"></div>';
const pegs = document.getElementsByClassName('peg');
let won = false;
for (let i = 0; i < pegs.length; i++){
	let k = i;
	let elem = pegs[k];
	elem.innerHTML = `<div class="stick" id="stick-${k}"></div>`;
}
document.getElementById('0').innerHTML = hole;

peg_adjacents = [];
peg_skips = [];
for (let i = 0; i < pegs.length; i++){
	peg_adjacents.push(new Set());
	peg_skips.push({});
}

function connect(a, b){
	peg_adjacents[a].add(b);
	peg_adjacents[b].add(a);
}

function connect_skip(a, b, c){
	peg_skips[a][b] = c;
	peg_skips[b][a] = c;
}

let peg = 0;
for (let i = 0; i < 5; i++){
	for (let j = 0; j < i + 1; j++){
		if (i < 4){
			connect(peg, peg + i + 1);
			connect(peg, peg + i + 2);
		}
		if (i < 3){
			connect_skip(peg, peg + 2*i + 3, peg + i + 1); 
			connect_skip(peg, peg + 2*i + 5, peg + i + 2); 
		}
		if (j < i){
			connect(peg, peg + 1);
		}
		if (j < i - 1){
			connect_skip(peg, peg + 2, peg + 1);
		}
		peg++;
	}
}

let stickles = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const sticks = document.getElementsByClassName('stick');
for (let i = 0; i < sticks.length; i++){
	let k = i;
	let elem = sticks[k];
	elem.addEventListener('click', function(){move(parseInt(elem.id.substring(6)));});
}

function preview(ids, id){
	let test = document.getElementsByClassName("showstick");
	for (let i = 0; i < test.length; i++){
		pegs[parseInt(test[i].id.substring(4))].innerHTML = hole;
	}
	for (let i = 0; i < ids.length; i++){
		pegs[ids[i]].innerHTML = `<div class="showstick" id="pre-${ids[i]}"></div>`; 
	}
	let previews = document.getElementsByClassName("showstick");
	function place(z){
		for (let i = 0; i < ids.length; i++){
			pegs[ids[i]].innerHTML = hole;
		}
		pegs[z].innerHTML = `<div class="stick" id="stick-${z}"></div>`;
		document.getElementById(`stick-${z}`).addEventListener('click', function(){move(parseInt(z))});
		stickles[z] = 1;
		pegs[id].innerHTML = hole;
		pegs[peg_skips[id][z]].innerHTML = hole;
		stickles[peg_skips[id][z]] = 0;
		stickles[id] = 0;
		let c = 0;
		for (let i = 0; i < stickles.length; i++){
			if (stickles[i] == 1){
				c++;
			}
		}
		if (c == 1){
			won = true;
			document.getElementsByClassName("welcome")[0].innerHTML = "<a href='./Main/index.html'><b>WVBGS OIOAI RDAMT DEREE SOD..</b></a>"
		}
	}
	for (let i = 0; i < previews.length; i++){
		let k = i;
		let elem = previews[k];
		elem.addEventListener('click', function(){place(parseInt(elem.id.substring(4)));});
	}
}

function move(id){
	previews = []
	for (let i = 0; i < stickles.length; i++){
		if(stickles[i] == 0 && i in peg_skips[id] && stickles[peg_skips[id][i]] == 1){
			previews.push(i);
		}
	}
	preview(previews, id);
}



