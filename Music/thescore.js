const NOTES = [
["Intro", 
""],
["Ready or Not", 
""], 
["Fu-Gee-La", 
''],
["Killing me Softly", 
""],
["The Mask", 
""],
["Outro", 
""]
]

const QUOTES = [
"Can't worry 'bout what another nigga think <br> Now that's liberation and, baby, I want it",
"The common denominator, the nigga numerator <br> Never know who the hater, niggas cater to your ego <br> I'm sorry like Atari whose the cousin to Coleco <br> Vision caught a RICO",
"Hold on be strong",
"So sleepy, playin' safe in cyberspace",
"Digital good time, digital good time"
]

let k = Math.random()
let quote_probs = [.99, .97, .87, .4, 0];
for (let i = 0; i < quote_probs.length; i++){
	if (k > quote_probs[i]){
		k = (quote_probs.length -1 - i);
		break;
	}
}

document.querySelector("#quote").innerHTML = `"${QUOTES[k]}"`;
const notes = document.getElementsByClassName("note");

const body = document.getElementsByTagName("body")[0];
k = 0;
for (let i = 0; i < notes.length; i++){
	let prev_k = k;
	let note = notes[i];
	if (Math.random() > .9){
		k++;
	}
	let rando = Math.random();
	console.log(screen.height);
	notes[i].style.top = Math.floor(Math.random()*50 + screen.height/2) + 'px';
	notes[i].style.left = Math.floor(Math.random()*50 + (screen.width/5)*(i+1))+ 'px';
	notes[i].innerHTML = `<h3 class="whiteboardtext">${NOTES[prev_k][0]}</h3><b>${NOTES[prev_k][1]}</b>`;
	notes[i].addEventListener("mousedown", function(){dragDrop(note);});
	k++;
}


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
	body.onmouseup = null;
	body.onmousemove = null;
}
