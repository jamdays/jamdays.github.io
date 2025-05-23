let turn = false;
let walls = {true: 10, false: 10};
let walls_placed = new Set();
walls_placed.add(-1);
let p_one = '<div class="a_pawn"></div>';
let p_two = '<div class="b_pawn"></div>';
let two_pos = [0, 4];
let one_pos = [8, 4];
let p_pos = {false: one_pos, true: two_pos};
let p_text = {false: p_one, true: p_two};
let demo_text = {false: '<div class="a_pawn" style="opacity:.5;"></div>', true: '<div class="b_pawn" style="opacity:.5;"></div>'};
document.getElementById('' + c_to_id(one_pos)).innerHTML = p_one;
document.getElementById('' + c_to_id(two_pos)).innerHTML = p_two;
let walls_one = '';
let walls_two = '';
let walls_o_left = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let walls_t_left = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let walls_left = {false: walls_o_left, true: walls_t_left}; 

for (let i = 0; i < 10; i++){
	walls_one += '<div class="wall_o" style="rotate:'+(Math.floor(Math.random()*90) - 45)+'deg"></div>\n';
	walls_two += '<div class="wall_t" style="rotate:'+(Math.floor(Math.random()*90) - 45)+'deg"></div>\n';
}
document.getElementsByClassName("wall_holder_one")[0].innerHTML = walls_one;
document.getElementsByClassName("wall_holder_two")[0].innerHTML = walls_two;

function canVisit(v, w){
	return !(walls_placed.has(wallBetween(v, w)));
}

function wallBetween(v, w){
	if (v[0] == w[0] && v[1] == w[1] + 1)
		return c_to_id(v) - 1;
	if (v[0] == w[0] && v[1] == w[1] - 1)
		return c_to_id(w) - 1;
	if (v[0] == w[0] + 1 && v[1] == w[1])
		return c_to_id(v) - 17;
	if (v[0] == w[0] - 1 && v[1] == w[1])
		return c_to_id(w) - 17;
	return -1;
}

function id_to_c(id){
	//This only works for cell ids
	return [Math.floor(id/17)/2, ((id%17) - Math.floor((id%17)/2))];
}

function c_to_id(coors){
	return ((coors[0]*2)*17 + coors[1]*2);
}



function c_to_i(coors){
	return (coors[0]*9 + coors[1])
}

function two_can_win(pos){
	let visited = new Set();
	let queue = [];
	let curr = pos;
	let won = false;
	visited.add(c_to_i(curr));
	while(!won){
		if (curr[0] == 8){
			return true;
		}
		if (can_move(curr, [curr[0] + 1, curr[1]]) && !visited.has(c_to_i([curr[0] + 1, curr[1]]))){
			queue.push([curr[0] + 1, curr[1]]);
			visited.add(c_to_i([curr[0] +1, curr[1]]));
		}
		if (can_move(curr, [curr[0], curr[1] + 1]) && !visited.has(c_to_i([curr[0], curr[1] + 1]))){
			queue.push([curr[0], curr[1] + 1]);
			visited.add(c_to_i([curr[0], curr[1]+1]));
		}
		if (can_move(curr, [curr[0], curr[1] - 1]) && !visited.has(c_to_i([curr[0], curr[1] - 1]))){
			queue.push([curr[0], curr[1] - 1]);
			visited.add(c_to_i([curr[0], curr[1]-1]));
		}
		if (can_move(curr, [curr[0] - 1, curr[1]]) && !visited.has(c_to_i([curr[0] - 1, curr[1]]))){
			queue.push([curr[0] -1, curr[1]]);
			visited.add(c_to_i([curr[0] -1, curr[1]]));
		}
		if (queue.length == 0){
			return false;
		}
		curr = queue[0];
		queue = queue.slice(1);
	}
	return won;
}

function one_can_win(pos){
	let visited = new Set();
	let queue = [];
	let curr = pos;
	let won = false;
	while(!won){
		if (curr[0] == 0){
			return true;
		}
		visited.add(c_to_i(curr));
		if (can_move(curr, [curr[0] + 1, curr[1]]) && !visited.has(c_to_i([curr[0] + 1, curr[1]]))){
			queue.push([curr[0] + 1, curr[1]]);
			visited.add(c_to_i([curr[0] +1, curr[1]]));
		}
		if (can_move(curr, [curr[0], curr[1] + 1]) && !visited.has(c_to_i([curr[0], curr[1] + 1]))){
			queue.push([curr[0], curr[1] + 1]);
			visited.add(c_to_i([curr[0], curr[1]+1]));
		}
		if (can_move(curr, [curr[0], curr[1] - 1]) && !visited.has(c_to_i([curr[0], curr[1] - 1]))){
			queue.push([curr[0], curr[1] - 1]);
			visited.add(c_to_i([curr[0], curr[1]-1]));
		}
		if (can_move(curr, [curr[0] - 1, curr[1]]) && !visited.has(c_to_i([curr[0] - 1, curr[1]]))){
			queue.push([curr[0] -1, curr[1]]);
			visited.add(c_to_i([curr[0] -1, curr[1]]));
		}
		if (queue.length == 0)
			return false;
		curr = queue[0];
		queue = queue.slice(1);
	}
	return won;
}

function can_move(x, y){
	return x[0] > -1 && x[1] > -1 && y[0] > -1 && y[1] > -1 && x[0] < 9 && x[1] < 9 && y[0] < 9 && y[1] < 9 && canVisit(x, y);
}
function isWon(){
	if (p_pos[false][0] == 0 || p_pos[true][0] == 8){
		if (document.getElementsByClassName("wall_o").length == 10 || document.getElementsByClassName("wall_t").length == 10){
			sessionStorage.setItem("wallbuster", true);
		}
	}
	return p_pos[false][0] == 0 || p_pos[true][0] == 8;
}
function placeWall(id){
	if (!walls[turn] || isWon()){
		return;
	}
	if ((Math.floor(id/17))%2 == 1 && (id+1)%17 != 0){
		for (i = 0; i < 3; i++){
			if (walls_placed.has(id + i))
				return;
			walls_placed.add(id + i);
		}
		if (!(two_can_win(two_pos) && one_can_win(one_pos))){
			for (i = 0; i < 3; i++){
				walls_placed.delete(id + i);
			}
			return;
		}
		/*for (let i = 0; i < 3; i++){
			if (document.getElementById("" + (id + i)).style.backgroundColor.toString() == "rgb(125, 71, 40)")
				return;
		}*/
		for (let i = 0; i < 3; i++){
			document.getElementById("" + (id + i)).style.backgroundColor = '#7d4728';
			document.getElementById("" + (id + i)).style.opacity = '1';
		}
	}
	else if ((Math.floor(id/17))%2 == 0 && (id/17) < 16){
		for (i = 0; i < 3; i++){
			if (walls_placed.has(id + i*17))
				return;
		}
		for (i = 0; i < 3; i++){
			walls_placed.add(id + i*17);
		}
		if (!(two_can_win(two_pos) && one_can_win(one_pos))){
			for (i = 0; i < 3; i++){
				walls_placed.delete(id + i*17);
			}
			return;
		}
		/*for (let i = 0; i < 3; i++){
			if (document.getElementById("" + (id + i*17)).style.backgroundColor.toString() == "rgb(125, 71, 40)")
				return;
		}*/
		for (let i = 0; i < 3; i++){
			document.getElementById("" + (id + i*17)).style.backgroundColor = '#7d4728';
			document.getElementById("" + (id + i*17)).style.opacity = '1';
		}
	}
	else {
		return;
	}
	j = Math.floor(walls_left[turn].length*Math.random());
	let idx = walls_left[turn][j]; 	
	elements = document.getElementsByClassName({false: 'wall_o', true: 'wall_t'}[turn]);
	elements[idx].style.opacity = '0';
	let new_walls_left =[];
	for (let i = 0; i < walls_left[turn].length; i++){
		if (i != j)
			new_walls_left.push(walls_left[turn][i]);

	}
	walls_left[turn] = new_walls_left;
	walls[turn]--;
	turn = !turn;
}


function demoWall(id){
	if (!walls[turn] || isWon()){
		return;
	}
	if ((Math.floor(id/17))%2 == 1 && (id+1)%17 != 0){
		for (let i = 0; i < 3; i++){
			if (document.getElementById("" + (id + i)).style.backgroundColor.toString() == "rgb(125, 71, 40)")
				return;
		}
		for (let i = 0; i < 3; i++){
			document.getElementById("" + (id + i)).style.backgroundColor = '#7d4629';
			document.getElementById("" + (id + i)).style.opacity = '.85';
		}
	}
	if ((Math.floor(id/17))%2 == 0 && (id/17) < 16){
		for (let i = 0; i < 3; i++){
			if (document.getElementById("" + (id + i*17)).style.backgroundColor.toString() == "rgb(125, 71, 40)")
				return;
		}
		for (let i = 0; i < 3; i++){
			document.getElementById("" + (id + i*17)).style.backgroundColor = '#7d4629';
			document.getElementById("" + (id + i*17)).style.opacity = '.85';
		}
	}
}


function undemoWall(id){
	if (!walls[turn] || isWon()){
		return;
	}
	if ((Math.floor(id/17))%2 == 1 && (id+1)%17 != 0){
		for (let i = 0; i < 3; i++){
			if (document.getElementById("" + (id + i)).style.backgroundColor.toString() == "rgb(125, 71, 40)")
				return;
		}
		for (let i = 0; i < 3; i++){
			document.getElementById("" + (id + i)).style.backgroundColor = '#380707';
			document.getElementById("" + (id + i)).style.opacity = '1';
		}
	}
	if ((Math.floor(id/17))%2 == 0 && (id/17) < 16){
		for (let i = 0; i < 3; i++){
			if (document.getElementById("" + (id + i*17)).style.backgroundColor.toString() == "rgb(125, 71, 40)")
				return;
		}
		for (let i = 0; i < 3; i++){
			document.getElementById("" + (id + i*17)).style.backgroundColor = '#380707';
			document.getElementById("" + (id + i*17)).style.opacity = '1';
		}
	}
}

function minus(v, w){
	return [(v[0] - w[0]), (v[1] - w[1])];
}

function plus(v, w){
	return [(v[0] + w[0]), (v[1] + w[1])];
}

function movePawn(id){
	if (isWon())
		return;
	if (id_to_c(id)[0] == p_pos[turn][0] && id_to_c(id)[1] == p_pos[turn][1])
		return;
	if (id_to_c(id)[0] == p_pos[!turn][0] && id_to_c(id)[1] == p_pos[!turn][1])
		return;
	if (can_move(p_pos[turn], p_pos[!turn])){
		side_c =  minus(p_pos[!turn], minus(p_pos[turn], p_pos[!turn]))
		if(can_move(p_pos[!turn], side_c)){
			if (id_to_c(id)[0] == side_c[0] && id_to_c(id)[1] == side_c[1]){
				document.getElementById('' + id).innerHTML = p_text[turn];
				document.getElementById('' + c_to_id(p_pos[turn])).innerHTML = '';
				p_pos[turn] = id_to_c(id);
				one_pos = p_pos[false];
				two_pos = p_pos[true];
				turn = !turn;
				return;
			}
		}
		else if (can_move(p_pos[!turn], id_to_c(id))){
			document.getElementById('' + id).innerHTML = p_text[turn];
			document.getElementById('' + c_to_id(p_pos[turn])).innerHTML = '';
			p_pos[turn] = id_to_c(id);
			one_pos = p_pos[false];
			two_pos = p_pos[true];
			turn = !turn;
			return;
		}
	}
	if (can_move(p_pos[turn], id_to_c(id))){
		document.getElementById('' + id).innerHTML = p_text[turn];
		document.getElementById('' + c_to_id(p_pos[turn])).innerHTML = '';
		p_pos[turn] = id_to_c(id);
		one_pos = p_pos[false];
		two_pos = p_pos[true];
		turn = !turn;
	}
}

function demoPawn(id){
	if (isWon())
		return;
	if (id_to_c(id)[0] == p_pos[turn][0] && id_to_c(id)[1] == p_pos[turn][1])
		return;
	if (can_move(p_pos[turn], id_to_c(id)) && !(id_to_c(id)[0] == p_pos[!turn][0] && id_to_c(id)[1] == p_pos[!turn][1]))
		document.getElementById('' + id).innerHTML = demo_text[turn];		
	if (can_move(p_pos[turn], p_pos[!turn])){
		side_c =  minus(p_pos[!turn], minus(p_pos[turn], p_pos[!turn]))
		if(can_move(p_pos[!turn], side_c)){
			if (id_to_c(id)[0] == side_c[0] && id_to_c(id)[1] == side_c[1]){
				document.getElementById('' + id).innerHTML = demo_text[turn];
			}
		}
		else if (can_move(p_pos[!turn], id_to_c(id))){
			document.getElementById('' + id).innerHTML = demo_text[turn];
		}
	}
}

function undemoPawn(id){
	if (isWon())
		return;
	if (id_to_c(id)[0] == p_pos[turn][0] && id_to_c(id)[1] == p_pos[turn][1])
		return;
	if (can_move(p_pos[turn], id_to_c(id)) && !(id_to_c(id)[0] == p_pos[!turn][0] && id_to_c(id)[1] == p_pos[!turn][1]))
		document.getElementById('' + id).innerHTML = '';	
	if (can_move(p_pos[turn], p_pos[!turn])){
		side_c =  minus(p_pos[!turn], minus(p_pos[turn], p_pos[!turn]))
		if(can_move(p_pos[!turn], side_c)){
			if (id_to_c(id)[0] == side_c[0] && id_to_c(id)[1] == side_c[1]){
				document.getElementById('' + id).innerHTML = '';
			}
		}
		else if (can_move(p_pos[!turn], id_to_c(id))){
			document.getElementById('' + id).innerHTML = '';
		}
	}
}

let walls_from_doc= document.getElementsByClassName("hwall");
for (let i = 0; i < walls_from_doc.length; i++){
	let k = parseInt(walls_from_doc[i].id);
	walls_from_doc[i].addEventListener("click", function(){placeWall(k);});
	walls_from_doc[i].addEventListener("mouseover", function(){demoWall(k);});
	walls_from_doc[i].addEventListener("mouseout", function(){undemoWall(k);});
}
walls_from_doc = document.getElementsByClassName("vwall");
for (let i = 0; i < walls_from_doc.length; i++){
	let k = parseInt(walls_from_doc[i].id);
	walls_from_doc[i].addEventListener("click", function(){placeWall(k)});
	walls_from_doc[i].addEventListener("mouseover", function(){demoWall(k);});
	walls_from_doc[i].addEventListener("mouseout", function(){undemoWall(k);});
}

walls_from_doc = document.getElementsByClassName("cell");
for (let i = 0; i < walls_from_doc.length; i++){
	let k = parseInt(walls_from_doc[i].id);
	walls_from_doc[i].addEventListener("click", function(){movePawn(k)});
	walls_from_doc[i].addEventListener("mouseover", function(){demoPawn(k);});
	walls_from_doc[i].addEventListener("mouseout", function(){undemoPawn(k);});
}
