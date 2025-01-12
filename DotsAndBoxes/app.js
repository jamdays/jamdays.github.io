let turn = true;

function tryclaim(n){
	let sub = 4 + (n%10 - 4)/2
	let add = 6 - (n%10 - 4)/2
	console.log((n-1) + "");
	if (document.querySelector("#" + (n-1).toString()).style.backgroundColor ==  "#757575" &&
		document.querySelector("#" + (n+1).toString()).style.backgroundColor ==  "#757575" &&
		document.querySelector("#" + (n-sub).toString()).style.backgroundColor ==  "#757575" &&
		document.querySelector("#" + (n+add).toString()).style.backgroundColor ==  "#757575"){
		let entry = turn ? "o" : "x";
		document.querySelector("#a" + n.toString()).innerHTML += `<div class="{entry}"></div>`;
		return true;
	}
	return false;

}

function clicked(id){
	let elem = document.querySelector("#" + id);
	if (elem.style.backgroundColor == "#757575"){
		return;
	}
	let intid = parseInt(id.substring(1));
	if(intid%10 < 3){
		let claimed = false;
		if (intid > 2) {
			claimed = claimed | tryclaim();
		}
		if (intid < 29) {
			claimed = claimed | tryclaim();
		}
		if (claimed){
			turn = !turn;
		}
	}
	else {
		let claimed = false;
		if (intid % 10 > 2) {
			claimed = claimed | tryclaim();
		}
		else if (intid % 10 < 9) {
			claimed = claimed | tryclaim();
		}
		if (claimed){
			turn = !turn;
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
