let rows = document.getElementsByClassName("row");
for (let r = 0; r < rows.length; r++){
	for (let c = 0; c < rows.length; c++){
		rows[r].innerHTML += (r == 5 && c == 5) ? `<div class="cell" id="(${r},${c})"><div id="cat"><div class="forehead"></div>&#9673 _ &#9673<br/> </div></div>` : `<div class="cell" id="(${r},${c})"></div>`;
	}
	if (r % 2 == 0){
		rows[r].style.width = "600px";
	}
}
