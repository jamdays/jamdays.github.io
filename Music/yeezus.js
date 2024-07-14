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
document.querySelector("#cup").addEventListener("click", function(){popup("cup");});
document.querySelector("#book").addEventListener("click", function(){popup("book")});
document.querySelector("#plate").addEventListener("click", function(){popup("plate")});
let inner = {"cup": "", "book": "", "plate": ''};
for (let i = 0; i < 10; i++){
	let left = Math.floor(Math.random()*200);
	let tp = Math.floor(Math.random()*200) - 78*i;
	let pos = `position: relative; left:${left}px; top:${tp}px;`
	let rotate = Math.floor(Math.random()*360);
	inner["plate"] += `<div class="sm-cd-border" style="${pos} rotate:${rotate}deg"><div class="sm-cd"></div></div>`;
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
	console.log("HELLO");
	if (!document.querySelector(`#${type}popup`)){
		body.innerHTML += `<div id="${type}up"class="popup" style="top:${screen.height/2 + Math.random()*50 -225}px; left:${screen.width/2 + Math.random()*50 -225}px;"><div id="${type}x"class="x">X</div><div id="${type}popup">${inner[type]}</div></div>`;
		document.querySelector(`#${type}x`).addEventListener("click", function(){document.querySelector(`#${type}up`).remove();});
	}
	if (!document.querySelector('#cuppopup')){
		document.querySelector("#cup").addEventListener("click", function(){popup("cup");});
	}
	else {
		document.querySelector(`#cupx`).addEventListener("click", function(){
			document.querySelector(`#cupup`);
			document.querySelector("#cup").addEventListener("click", function(){popup("cup");});
		});
	}
	if (!document.querySelector('#bookpopup')){
		document.querySelector("#book").addEventListener("click", function(){popup("book")});
	}
	else {
		document.querySelector(`#bookx`).addEventListener("click", function(){
			document.querySelector(`#bookup`);
			document.querySelector("#book").addEventListener("click", function(){popup("book")});
		});
	}
	if (!document.querySelector('#platepopup')){
		document.querySelector("#plate").addEventListener("click", function(){popup("plate")});
	}
	else {
		document.querySelector(`#platex`).addEventListener("click", function(){
			document.querySelector(`#plateup`);
			document.querySelector("#plate").addEventListener("click", function(){popup("plate")});
		});
	}


}
