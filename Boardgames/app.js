let li = document.querySelector("#dots");
let D = document.querySelector("#D");
let B = document.querySelector("#B");
let dplaced = false;
let bplaced = false;
B.addEventListener("mousedown", function(){dragDrop(B)});
D.addEventListener("mousedown", function(){dragDrop(D)});
const body = document.getElementsByTagName("body")[0]; 
let dots = li.getBoundingClientRect();
D.style.left = dots.left + "px";
D.style.top = (dots.top - 16) + "px";
B.style.left = (dots.left + 86) + "px";
B.style.top = (dots.top - 16) + "px";

function dragDrop(el){
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
	let rect = el.getBoundingClientRect();
	if (el.id == "B"){
		let inrange = (Math.abs(rect.left - dots.left) < 5) && (Math.abs(rect.top - dots.top + 16) < 5)
		if (dplaced){
			if (inrange){
				li.innerHTML = "<a href=./botsanddoxes.html>Bots and Doxes</a>";
				document.getElementById("B").remove();
				bplaced = true;
			}
		}
		else {
			if (inrange){
				li.innerHTML = "Bots and &nbsp;oxes";
				document.getElementById("B").remove();
				bplaced = true;
			}

		}
	}
	else if (el.id == "D"){
		let inrange = (Math.abs(rect.left - (dots.left + 86)) < 5) && (Math.abs(rect.top - dots.top + 16) < 5)
		if (bplaced){
			if (inrange){
				li.innerHTML = "<a href=./botsanddoxes.html>Bots and Doxes</a>";
				document.getElementById("D").remove();
				dplaced = true;
			}
		}
		else {
			if (inrange){
				li.innerHTML = "&nbsp;ots and Doxes";
				document.getElementById("D").remove();
				dplaced = true;
			}

		}
	}
	body.onmouseup = null;
	body.onmousemove = null;
}

