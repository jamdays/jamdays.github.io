document.querySelector(".cdplayer").addEventListener("click", function(){cdplay();});


function cdplay(){
	if (sessionStorage.getItem("hasCD") == "true"){
		document.querySelector("video").src = "holybaby.mp4";
	}
}


