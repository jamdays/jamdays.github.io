const NOTES = [
["Drive Slow", 
"It's just something about it <br> I mean you just have to take life slow <br> Just know it's not important"],
["Heard Em Say", 
"I mean this song isn't actually about hard work It's about something else I mean racism obviously but I mean still something more than that It's just that the chorus makes it sound like its about hard work"],
["Roses", 
"We the roses. Idk if that's true for me. But it is a big contrast with the rest of the album. In some ways. A lot of the album is about leaving behind home and not in a sad way But this is about coming back to it but I guess just to say goodbye again"],
["Gone", '"My dog worked at Taco Bell, hooked us up plural Fired a week later the manager count the churros" <br> Reminds me of the bowling alley I used to work at. So yeah, its basically me, except I wasnt fired and there were no churros, so it basically isnt me'],
["Bring Me Down", "Classic Kanye Persecution Complex. I think it's like now that he says all that racist stuff you can easily hear it in his early music, I mean not against jewish people but just sort of people in general"],
["Crack Music", "Crack has never even remotely touched my life, well I mean except through tv and stuff. But I mean it is what the song is about, but it's also about how I blame white people for all my problems"],
["Late Registration", "This used to be my favorite album, for a long time too. It just reminded me of everything I didn't like in a way I liked and makes me feel like I'm in control or something deep like that"],
["Gold Digger", `"And when you get on, he'll leave yo' ass for a white girl". I mean true. The symbol of white women I guess I saw too many movies when I was little especially racist ones I guess`],
["My Way Home", "Sometimes this is just like how you feel, like you gotta leave shit behind but more than that too like you don't wanna go back idk I mean it's just frustrating cause you owe them so much but I mean also you always wanna leave and not come back"],
["Skit No.4", "Yes. Kanye predicted among us. But really it just is what I learned from growing up in a nice white school with nice white people, I thought I was white but I guess nice white people have something to say about that. I mean the skit is just true fr"],
]

const QUOTES = [
"Pretending he's with us, he's not one of us",
"Don't rush to get grown, drive slow homie",
"And I heard em say <br> nothings ever promised tommorow today",
"How we stop the black panthers? <br> Ronald Reagan cooked up an answer",
"Might not be such a bad idea if I never, never went home again"
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
