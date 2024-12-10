const kStandardCubes = [
"AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS",
"AOOTTW", "CIMOTU", "DEILRX", "DELRVY",
"DISTTY", "EEGHNW", "EEINSU", "EHRTVW",
"EIOSST", "ELRTTY", "HIMNQU", "HLNNRZ"
];


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
	let cells = document.getElementsByClassName("cell");
	let rect = el.getBoundingClientRect();
	body.onmouseup = null;
	body.onmousemove = null;
}
const body = document.getElementsByTagName("body")[0]; 
let dictionary = new Set(words);
let used = new Set();
let n = kStandardCubes.length;
let albums2024 = [6, "<br>Best Albums of 2024 <br> 1. BLUE LIPS <br> 2. gnx <br> 3. #RICHAXXHATIAN or KOTMS V 2 idk"];
let albums2016 = [7, "<br>Best Albums of 2016 <br> 1. TLOP <br> 2. Blank Face <br> 3. Still Brazy <br> Honorable Mentions: FLYGOD and Atrocity Exhibition"];
let hiddenfile = [1, "<br>Sweet Robbery, On That Time, She Wish She Was"];
let farmsBurner = [2, "<br>Fun game in progress <br> open weather api pulls"];
let website = [1, '<a href="https://jamdays.github.io/">#1</a>'];
let jabberwocky = [4, "'Twas brillig and the slithy toves <br> Did gyre and gimble in the wabe; <br> All mimsy were the borgoves, <br> and the mome raths outgrabe"];
let tygertyger = [4, "Tyger Tyger, burning bright <br> In the forests of the night <br> What immortal hand or eye, <br> could frame thy fearful symmetry?"];
let euclid = [1, "Euclid alone has looked on beauty bare."];
let linearAlgebra = [2, "Row Reduction is better than Induction <br> Induction doesn't solve lights out"];
let multivariable = [1, "Saddle Pringle"];
let csc240 = [2, "Learned ok amount, but not worth the work <br> and questions were often not related to the material"];
let mat244 = [1, "JSON Beef ken lunch"];
let csc258 = [1, "Fun"];
let mat157 = [1, "Fun"];
let goodish = [1, "MAT224, CSC207, MAT344"];
let lightsout = [1, '<a href="../LightsOut/index.html">Lights Out</a>'];
let cattrap = [1, '<a href="../CatTrap/index.html">Cat Trap Game</a>'];
let recommended = [2, "Coup, Resistance, <br> Extreme Tux Racer"];
let green = [1, "Green"]
let flip = [1, "Flip"]
let single = [1, "Single"]
let use = [1, "list files - all at"]
let where = [1, "home"]
let lyrics = [5, "They don't wanna see the wanted man, <br> coming through with the gun in hand <br> <br> Rap been so good to me <br> I hope it gets me cancelled"]
let Albums2016 = {'"The Life of Pablo"':{}, '"untitled unmastered"':{}, '"Blank Face LP"':{"words.txt": use}, '"Atrocity Exhibition"':{}, "FLYGOD":{}, '"Still Brazy"':{"word.txt": single}};
let Other = {"4:44":{}, "DAMN.":{}, "Die Lit":{}, "TA13OO":{}, "DAYTONA":{}, '"KIDS SEE GHOSTS"': {}, "ye":{}, '"Victory Lap"':{}, "Redemption":{}, '"Hiding Places"':{}, '"All My Heros Are Cornballs"':{"word.txt": where}, '"Whole Lotta Red"':{"word.txt": flip}};
let Downloads = {"Southernplayalisticcadillacmuzik": {}, "Illmatic": {}, '"Mystic Stylez"':{"word.txt": flip}, '"Me Against The World"':{}, '"The Don Killuminati"':{}, '"All Eyez On Me"':{}, '"ATLiens"':{}, '"The Score"':{}, 
'"Its Dark and Hell is Hot"':{}, "Aquemini":{}, '"The Miseducation of Lauryn Hill"':{}, '"Things Fall Apart"':{}};
let School = {"UofT": {'"Trash Classes"': {"MAT244.txt": mat244, "CSC240.txt": csc240} , '"Good Classes"': {"mat157.txt": mat157 , "csc258.txt": csc258}, "goodish.txt": goodish}, 
"Gorman": {"Poems": {"TygerTyger.txt": tygertyger, "EuclidAlone.txt": euclid , "Jabberwocky.txt": jabberwocky}, "LinearAlgebra.txt": linearAlgebra, "Multi.txt": multivariable}}; 
let Projects = {"FarmsBurner.txt" : farmsBurner, "Website.txt": website};
let dirs = {"~": {"Documents":{School, Projects, Other}, 
		"Games":{'"Fun Games"': {"recommended.txt": recommended, ".trash": {"cattrap.txt": cattrap}}, ".badgames":{"lightsout.txt": lightsout}}, 
		Downloads, 
		"Music":{"albums2024.txt":albums2024, "albums2016.txt": albums2016, "lyrics.txt": lyrics, Albums2016}, 
		".Hidden":{"hiddenfile.txt": hiddenfile}}};
let pwd = ["~"];
var i, temp;
while (n-1){
	i = Math.floor(Math.random()*n);
	temp = kStandardCubes[n-1];
	kStandardCubes[n-1] = kStandardCubes[i];
	kStandardCubes[i] = temp;
	n--;
}

let letters = kStandardCubes.map(dice => dice[Math.floor(Math.random()*6)]);

const cells = document.querySelectorAll(".cell");

for (let i = 0; i < cells.length; i++){
	if (letters[i] == 'Q'){
		letters[i] = 'Qu'
	}
	cells[i].innerHTML = letters[i];
	
}

let paper = document.getElementsByClassName("paper");
let paper_count = 0;
let input = document.getElementById("wordGuess");
let space_used = 0;

function lsa(pwd, idx, dir) {
	if (idx < pwd.length){
		if(pwd[idx] in dir){
			return lsa(pwd, idx + 1, dir[pwd[idx]]);
		}
	}
	let out = ""; 
	for (let i = 0; i < Object.keys(dir).length; i++){
		out += Object.keys(dir)[i] + " ";
	}
	space_used += Math.ceil(out.length / 32)
	console.log(space_used)
	return out;
	
}

function ls(pwd, idx, dir) {
	if (idx < pwd.length){
		if(pwd[idx] in dir){
			return ls(pwd, idx + 1, dir[pwd[idx]]);
		}
	}
	let out = ""; 
	for (let i = 0; i < Object.keys(dir).length; i++){
		if (Object.keys(dir)[i][0] != "."){
			out += Object.keys(dir)[i] + " ";
		}
	}
	space_used += Math.ceil(out.length / 32)
	return out;
	
}
function cat(pwd, idx, dir, file){
	if (idx < pwd.length){
		if(pwd[idx] in dir){
			return cat(pwd, idx + 1, dir[pwd[idx]], file);
		}
	}
	if (file in dir && file.includes(".txt")){
		return dir[file];
	}
	else {
		throw ReferenceError;
	}
}
function cd(pwd, idx, dir, new_dir) {
	if (new_dir[0] == ".."){
		if (pwd.length > 1){
			pwd.pop()
		}
		new_dir.shift();
		return cd(pwd, idx, dir, new_dir);
	}
	if (idx < pwd.length){
		if(pwd[idx] in dir){
			return cd(pwd, idx + 1, dir[pwd[idx]], new_dir);
		}
	}
	let dirdir = dir;
	for (let i = 0; i < new_dir.length; i++){
		if (!(new_dir[i] in dirdir) || new_dir[i].includes(".txt")){
			throw ReferenceError;
		}
		dirdir = dirdir[new_dir[i]];
	}
	for (let i = 0; i < new_dir.length; i++){
		pwd.push(new_dir[i]);
	}
	return;
	
}
function printwd(arr){
	let out = "";
	for (let i = 0; i < arr.length; i++){
		out += "/" + arr[i];
	}
	return out;
}

function checkWord() {
	let userInput = document.querySelector("#wordGuess").value;
	if (userInput == "ls -a"){
		space_used += 1;
		paper[paper_count].innerHTML += userInput + "<br>" ;
		paper[paper_count].innerHTML += lsa(pwd, 0, dirs) + "<br>" ;
		
		
	}
	if (userInput == "ls"){
		space_used += 1;
		paper[paper_count].innerHTML += userInput + "<br>" ;
		paper[paper_count].innerHTML += ls(pwd, 0, dirs) + "<br>" ;
		
		
	}
	if (userInput.indexOf("cd ") == 0){
		try {
			cd(pwd, 0, dirs, userInput.substring(3).split("/"));
			space_used += 1;
			paper[paper_count].innerHTML += userInput + "<br>" ;
		}
		catch (ReferenceError) { 
		}
		
	}
	if (userInput.indexOf("cat ") == 0){
		try {
			let out = cat(pwd, 0, dirs, userInput.substring(4));
			space_used += out[0] + 1;
			paper[paper_count].innerHTML += userInput + "<br>" ;
			paper[paper_count].innerHTML += out[1] + "<br>";
		}
		catch (ReferenceError) { 
		}
		
	}
	if (userInput == "pwd"){
		space_used += 2;
		paper[paper_count].innerHTML += "pwd" + "<br>" ;
		paper[paper_count].innerHTML += printwd(pwd) + "<br>";
	}
	if (isValid(userInput) && dictionary.has(userInput.toLowerCase()) && !used.has(userInput.toLowerCase())){
		paper[paper_count].innerHTML += userInput + "<br>" ;
		used.add(userInput.toLowerCase());
	}
	if ((used.size + space_used) > (paper_count*20 + 20)){
		let k = paper_count;
		paper[k].style.position = "absolute";
		paper[k].style.rotate = "0deg";
		paper[k].style.left = "50px"; 
		paper[k].style.borderTop = "solid";
		paper[k].style.top += `${400 + 28*paper_count}px`;
		let section = document.getElementsByTagName("section")[0];
		section.innerHTML += "<div class='paper'></div>"; 
		for (let i = 0; i < k+1; i++){
			let idx = i;
			paper[idx].onmousedown = function(){dragDrop(paper[idx]);};
		}
		paper_count++;
	}
	document.querySelector("#wordGuess").value = "";
}

input.addEventListener("keypress", function(event){
	if (event.key === "Enter"){
		checkWord();
	}
});
function isValid(a){
	if (a.length < 3)
		return false;
	let queue = [];
	let used = "";
	for (let i = 0; i < cells.length; i++){
		if (letters[i].length > 1 && 
			letters[i].toLowerCase() === a.substring(0, 2).toLowerCase()){
			queue.push(i);
		}
		if(letters[i].toLowerCase() === a[0].toLowerCase()){
			queue.push(i);
		}
		used += "0";
	}
	console.log(queue[0]);
	result = false;
	for (let i = 0; i < queue.length; i++){
		if (letters[queue[i]].length > 1){
			result = result || isAdjacent(queue[i], a.substring(2),	
				used.substring(0, queue[i]) + "1" + used.substring(queue[i] + 1));
		}
		else
			result = result || isAdjacent(queue[i], a.substring(1), 
				used.substring(0, queue[i]) + "1" + used.substring(queue[i] + 1));


	}
	return result;
}

function isAdjacent(i, b, used){
	// I don't like hard coding this in! Please let me know if there is a good way to know
	// valid adjacencies without using a 2d array!
	used = used.substring(0, i) + "1" + used.substring(i+1);
	if (b.length == 0) {
		return true
	}
	let adjacencies = [4, -4, 1, -1, 5, -5, 3, -3];
	if (i%4 == 3)
		adjacencies = [4, -4, -1, -5, 3];
	else if ( i%4 == 0)
		adjacencies = [4, -4, 1, 5, -3];
	let result = false;
	for (let j = 0; j < adjacencies.length; j++){
		let x = i + adjacencies[j];
		if ( x > -1 && x < cells.length && letters[x].length > 1 && used[x] != "1" &&
			letters[x].toLowerCase() === b.substring(0, 2).toLowerCase()){
			console.log("Qu Block");
			result = result || isAdjacent(x, b.substring(2), used);
		}
		else {
			result = result || 
				(x > -1 && x < cells.length && used[x] != "1" &&
					b[0].toLowerCase() == letters[x].toLowerCase() 
					&& isAdjacent(x, b.substring(1), used));
		}
	}
	return result; 
}


