const NOTES = [
["Outro 1", 
"Can they just end the outro at the good part. <br> I go to sleep to this album and this wakes me up every time <br> and its annoying"],
["Fu-Gee-La", 
'Lyrics are so good on this song. Honestly dont have much deep stuff to say about this album, its mostly here for the lyrics, singing, and production'],
["The Beast", 
"The worst song on the album. Just a weird skit, sorta funny but annoying asf."],
["Red Intro", 
"I don't want to be owned"], 
["Outro 2", 
"Best outro out of any album I've heard, it sounds like its real, not just trying to be deep, and it hits. Its the dogs you gotta worry about. I know who the dogs are. Not gonna be kicked by them one more time"],
["Manifest", 
"Sorry to my first girlfriend, I think of her every time I hear lauryn's verse <br> White ppl are judas. Also I didn't know who Halie Selassie was until my mom told me"],
]

const QUOTES = [
"I sit 90 degrees underneath palm trees",
"Stevie wonder sees crack babies",
"These corporations, these stores, they try to rob me",
"It was me, Jesus Christ, and Haile Selassie",
"It's easy to kill niggas 'cause they look like you"
]

let k = Math.random()
let quote_probs = [.95, .9, .8, .4, 0];
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
	if (Math.random() > .8){
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
