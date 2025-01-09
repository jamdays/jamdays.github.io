let turn = true;

function tryclaim(n){
	let sub = 4 + (n%10 - 4)/2
	let add = 6 - (n%10 - 4)/2
	console.log((n-1) + "");
	if (document.querySelector("#" + (n-1).toString()) &&
		document.querySelector("#" + (n+1).toString()) &&
		document.querySelector("#" + (n-sub).toString()) &&
		document.querySelector("#" + (n+add).toString())){
		turn = !turn;
		let entry = turn ? "o" : "x";
		document.querySelector("#a" + n.toString()).innerHTML += `<div class="{entry}"></div>`;
	}

}

function clicked(id){
	let elem = document.querySelector("#" + id);
	if (elem.style.backgroundColor == "#757575"){
		return;
	}
	let intid = parseInt(id.substring(1));
	if(intid%10 < 3){
		if (intid > 3) {
			//TODO THIS GUY PASS IT IN ALSO DEAL WITH DOING TWO AT ONCE
			tryclaim();
		}
		if (intid < 29) {
			//TODO THIS GUY PASS IT IN ALSO DEAL WITH DOING TWO AT ONCE
			tryclaim();
		}
	}
	turn = !turn;
	elem.style.backgroundColor = "#757575";
}

let vlines = document.getElementsByClassName("vline");
let hlines = document.getElementsByClassName("hline");

for (let i = 0; i < hlines.length; i++){
	let idstr = hlines[i].id;
	hlines[i].addEventListener("click", function(){clicked(idstr)});
}

for (let i = 0; i < vlines.length; i++){
	let idstr = vlines[i].id;
	vlines[i].addEventListener("click", function(){clicked(idstr)});

}
