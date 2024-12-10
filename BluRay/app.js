let channels = ["cyberchase.mp4", "fetch.mp4"];
let currchannel = 0;

function cdplay(){
	if (sessionStorage.getItem("hasHBCD") == "true"){
		document.querySelector("video").src = "holybaby.mp4";
	}
}

function changechannel(i){
	currchannel = (currchannel + i)% channels.length
	document.querySelector("video").src = channels[currchannel];
}

let types = ["basket1", "basket2", "basket3", "remote"];
document.querySelector("#tvbaskethandle1").addEventListener("click", function(){popup("basket1");});
document.querySelector("#tvbaskethandle2").addEventListener("click", function(){popup("basket2")});
document.querySelector("#tvbaskethandle3").addEventListener("click", function(){popup("basket3")});
document.querySelector(".remote").addEventListener("click", function(){popup("remote")});
document.querySelector(".cdplayer").addEventListener("click", function(){cdplay();});
let inner = {"basket1": "", "basket2": "", "basket3": '', "remote": ''};
inner["basket1"] = "<div class='sm-cd-border'><div class='sm-cd'></div></div>";
inner["basket2"] = "";
inner["basket3"] = "<div class='paper'>Funny Joke Below: <br> <br> Where is the best place to see shells? <br> <br> Oggle Each</div>";
inner["remote"] = "<div class='remotecontrol'><div id='chup'>\u25B3</div><div>ch</div><div id='chdn'>\u25BD</div></div>"; 


let body = document.querySelector("body");
function popup(type){
	for (let i = 0; i < types.length; i++){
		if (document.querySelector(`#${types[i]}popup`)){
			return;
		}
	}
	if (!document.querySelector(`#${type}popup`)){
		body.innerHTML += `<div id="${type}up"class="popup" style="top:${screen.height/2 + Math.random()*50 + 50}px; left:${screen.width/2 + Math.random()*50 -225}px;"><div id="${type}x"class="x">X</div><div id="${type}popup">${inner[type]}</div></div>`;
		document.querySelector(`#${type}x`).addEventListener("click", function(){
			inner[type] = document.querySelector(`#${type}popup`).innerHTML;
			document.querySelector(`#${type}up`).remove();
		});
		if (type == "remote"){
			document.querySelector("#chup").addEventListener("click", function(){changechannel(1);});
			document.querySelector("#chdn").addEventListener("click", function(){changechannel(1);});
		}
		else if (type == "basket1"){
			document.querySelector('.sm-cd-border').addEventListener("click", function(){document.querySelector('.sm-cd-border').style.visibility = "hidden"});
			sessionStorage.setItem("hasHBCD", true);
		}
		else if (type == "basket2"){
		}
		else if (type == "basket3"){
		}
			
	}
	document.querySelector("#tvbaskethandle1").addEventListener("click", function(){popup("basket1");});
	document.querySelector("#tvbaskethandle2").addEventListener("click", function(){popup("basket2")});
	document.querySelector("#tvbaskethandle3").addEventListener("click", function(){popup("basket3")});
	document.querySelector(".remote").addEventListener("click", function(){popup("remote")});
	document.querySelector(".cdplayer").addEventListener("click", function(){cdplay();});
}

