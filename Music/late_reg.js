const NOTES = [
["", ""],
["", ""],
["", ""],
["", ""],
["", ""],
["", ""],
["", ""],
["", ""],
["", ""]
]

document.getElementsByClassName


function dragDrop(el){
	if (parseInt(el.id[1]) != turn){
		return;
	}
	let rect = el.getBoundingClientRect();
	offset = [rect.left - event.clientX, rect.top - event.clientY];
	body.onmouseup = function(){drop(el)};
	body.onmousemove = function(){drag(el, offset)};
}

function drag(el, offset){
	el.style.left = (event.clientX + window.scrollX + offset[0]) + "px";
	el.style.top = (event.clientY + window.scrollY + offset[1]) +"px";
}

function drop(el){
	let cells = document.getElementsByClassName("cell");
	let rect = el.getBoundingClientRect();
	for (let i = 0; i < cells.length; i++){
		let cell = cells[i].getBoundingClientRect();
		if (Math.abs(rect.left - cell.left) < 20 && Math.abs(rect.top - cell.top) < 20){
			place(el.id, Math.floor(parseInt(cells[i].id)/20), parseInt(cells[i].id)%20);
		}
	}
	body.onmouseup = null;
	body.onmousemove = null;
}
