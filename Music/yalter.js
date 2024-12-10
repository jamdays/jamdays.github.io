let readings = {
	0: [["TITLE"],
		["quote"],
		["COMMENTARY"],],
	1: [[],
		[],
		[]], 
	2: [[],
		[],
		[]],
	3: [[],
		[],
		[]],
	4: [[],
		[],
		[]], 
	5: [[],
		[],
		[]], 
	6: [[],
		[],
		[]]
};
let types = ["cup", "book", "plate"];
document.querySelector("#cup").addEventListener("click", function(){popup("cup");});
document.querySelector("#book").addEventListener("click", function(){popup("book")});
document.querySelector("#plate").addEventListener("click", function(){popup("plate")});
let inner = {"cup": "", "book": "", "plate": ''};
for (let i = 0; i < 10; i++){
	let left = Math.floor(Math.random()*200);
	let tp = Math.floor(Math.random()*200) - 78*i;
	let pos = `position: relative; left:${left}px; top:${tp}px;`
	let rotate = Math.floor(Math.random()*360);
	inner["plate"] += `<div id="scb${i}" class="sm-cd-border" style="${pos} rotate:${rotate}deg"><div id="sc${i}" class="sm-cd"></div></div>`;
}
let text = "            YEEZUS by  Kanye West       "
for (let i = 0; i < text.length; i++){
	let rotate = Math.floor(Math.random()*90) - 45;
	inner["cup"] += `<div class="letter" style="rotate:${rotate}deg">${text[i]}</div>`;
}
let day = 0;
let reading = readings[day];
inner["book"] += `<div class="leftpage"><div class="title">${reading[0]}</div><hr>${reading[1]}</div><div class="rightpage">${reading[2]}</div>`


let body = document.querySelector("body");
function popup(type){
	for (let i = 0; i < types.length; i++){
		if (document.querySelector(`#${types[i]}popup`)){
			return;
		}
	}
	if (!document.querySelector(`#${type}popup`)){
		body.innerHTML += `<div id="${type}up"class="popup" style="top:${screen.height/2 + Math.random()*50 -225}px; left:${screen.width/2 + Math.random()*50 -225}px;"><div id="${type}x"class="x">X</div><div id="${type}popup">${inner[type]}</div></div>`;
		document.querySelector(`#${type}x`).addEventListener("click", function(){
			inner[type] = document.querySelector(`#${type}popup`).innerHTML;
			document.querySelector(`#${type}up`).remove();
		});
		if (type == "plate"){

			for (let i = 0; i < 10; i++){
				document.querySelector(`#sc${i}`).addEventListener("click", function(){document.querySelector(`#scb${i}`).style.visibility= "hidden"; sessionStorage.setItem("hasCD", true); }); 
			}
	}
	}
	document.querySelector("#cup").addEventListener("click", function(){popup("cup");});
	document.querySelector("#book").addEventListener("click", function(){popup("book")});
	document.querySelector("#plate").addEventListener("click", function(){popup("plate")});
}
