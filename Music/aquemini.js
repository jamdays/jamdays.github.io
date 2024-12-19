const NOTES = [
["On sight", 
"First time I listened to the album I didn't like it, but it just gets better every time"],
["Bound 2", 
"Yeah Bound 2 falling in love, I mean true, but that's definitely not what this song is about"],
["I am a God", 
'"Would it be better if I had a song that said I am a nigga?" I mean thats what kanye says about the song but idk'],
["Im In It", 'Kanye thinks he is a rap-lic priest'],
["Bound 2 2", "Rip kanye and kim fr at least they got divorced to live happier lives instead of ---- and ---- who just decided to suffer instead"],
["Blood on the leaves", "Yeah I lowkey wrote way too daring stuff on some other reviews, but this one is not about to get that blessing"]
]

const QUOTES = [
"Memories don't live like people do <br> they always rmember you",
"I keep it 300, like the Romans <br> 300 bitches where the Trojans?",
"Uh, they be ballin in the D League <br> Uh, I be speaking swaghili",
"They prolly all in the Hamptons <br> Braggin' bout what they made <br> Fuck you and your hampton house <br> I'll fuck your hampton spouse",
"I know that we the new slaves <br> y'all niggas can't fuck with me"
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
	if (Math.random() > .8){
		if (Math.random() > .5){
			k++;
		}
		k++;
	}
	let rando = Math.random();
	console.log(screen.height);
	notes[i].style.top = Math.floor(Math.random()*50 + screen.height/2) + 'px';
	notes[i].style.left = Math.floor(Math.random()*50 + (screen.width/5)*(i+1))+ 'px';
	notes[i].innerHTML = `<h3 class="whiteboardtext">${NOTES[prev_k + Math.floor(rando*(k-prev_k))][0]}</h3><b>${NOTES[prev_k + Math.floor(rando*(k-prev_k))][1]}</b>`;
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
