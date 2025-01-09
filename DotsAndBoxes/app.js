function claim(){

}

function clicked(id){
	let elem = document.querySelector("#" + id);
	if (elem.style.backgroundColor == "#757575"){
		return;
	}
	let intid = parseInt(id.substring(1));
	if(intid%10 < 3){
		if (intid > 3) {

		}
		if (intid < 29) {

		}
	}
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
