const NOTES = [
["Drive Slow", "Yeah, sometimes life just isn't something to rush through\nBut since I'm not like that I'm not gonna quote Ferris Bueller to get that\n It wasn't a good movie, I've seen it a million times, but even worse \nIn Real life\nBack to the song though, it really makes you feel like you wanna take a drive and blast it on the speakers\njust driving slow"],
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

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const notes = document.getElementsByClassName("note");
for (let i = 0; i < notes.length; i++){
	dragElement(notes[i]);
}
