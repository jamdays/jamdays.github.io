let turn = true;
sessionStorage.setItem("botsanddoxes", true);
function tryclaim(n){
	let sub = 4 + (n%10 - 4)/2
	let add = 6 - (n%10 - 4)/2
	console.log((n-1) + "" + (document.querySelector("#a" + (n-1)).style.backgroundColor ==  "rgb(117, 117, 117)"));
	if (document.querySelector("#a" + (n-1)).style.backgroundColor ==  "rgb(117, 117, 117)" &&
		document.querySelector("#a" + (n+1)).style.backgroundColor ==  "rgb(117, 117, 117)" &&
		document.querySelector("#a" + (n-sub)).style.backgroundColor ==  "rgb(117, 117, 117)" &&
		document.querySelector("#a" + (n+add)).style.backgroundColor ==  "rgb(117, 117, 117)"){
		let entry = turn ? "o" : "x";
		document.querySelector("#a" + n.toString()).innerHTML += `<div class="${entry}"></div>`;
		return true;
	}
	return false;

}

function clicked(id){
	let elem = document.querySelector("#" + id);
	if (elem.style.backgroundColor == "#757575"){
		return;
	}
	elem.style.backgroundColor = "#757575";
	let intid = parseInt(id.substring(1));
	if(intid%10 < 3){
		let claimed = false;
		if (intid > 2) {
			claimed = claimed | tryclaim(intid - 6 + (intid%10));
		}
		if (intid < 29) {
			claimed = claimed | tryclaim(intid + (intid%10) + 4);
		}
		if (claimed){
			turn = !turn;
		}
	}
	else {
		let claimed = false;
		if (intid % 10 > 3) {
			claimed = claimed | tryclaim(intid - 1);
		}
		if (intid % 10 < 9) {
			claimed = claimed | tryclaim(intid + 1);
		}
		if (claimed){
			turn = !turn;
		}
	}
	turn = !turn;
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
