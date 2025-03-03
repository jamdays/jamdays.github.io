if (sessionStorage.getItem("connectsix") == "true"){
	document.querySelector("#connectsix").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("connectseven") == "true"){
	document.querySelector("#connectseven").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("connectdraw") == "true"){
	document.querySelector("#connectdraw").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("connectup") == "true"){
	document.querySelector("#connectup").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("tvman") == "true"){
	document.querySelector("#tvman").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("lightsout") == "true"){
	document.querySelector("#lightsout").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("freediddy") == "true"){
	document.querySelector("#freediddy").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("terminal") == "true"){
	document.querySelector("#terminal").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("blocki") == "true"){
	document.querySelector("#bloki").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("wallbuster") == "true"){
	document.querySelector("#wallbuster").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("XXX") == "true"){
	document.querySelector("#XXX").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("sigma") == "true"){
	document.querySelector("#sigma").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("bluewin") == "true" || sessionStorage.getItem("purplewin") == "true"){
	document.querySelector("#hex").style += "opacity: .9; background-color: white;"
}
if (sessionStorage.getItem("botsanddoxes") == "true" || sessionStorage.getItem("purplewin") == "true"){
	document.querySelector("#botsanddoxes").style += "opacity: .9; background-color: white;"
}
if (albms()){
	document.querySelector("#crazyeights").style += "opacity: .9; background-color: white;"
}


function albms(){
	let albums = ["late registration", "yeezus", "aquemini", "kids see ghosts", "the score", "the eminem show", "good kid maad city", "808s and heartbreak", "my beautiful dark twisted fantasy"];

	for (let i = 0; i < albums.length; i++){
		if (sessionStorage.getItem(album) == "true"){
			return true;
		}
	}
	return false;
}
