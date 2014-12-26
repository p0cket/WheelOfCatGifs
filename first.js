function getCats(i) {
	if (theCatGif == false){
	}
	else{
		document.getElementById("mainGif").src = catGif;
		console.log("You replaced the cat gif");
	}

}

function showNewCats(newCats) {
	document.getElementById("mainGif").src = newCats;
//  document.getElementById("mainGif").src = encodeURIComponent("newCats");
	console.log("you showed a new cat gif");
}

function requestNewCatGifs() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "/thecatgif", true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			// RESPONSE
			var resp = xhr.responseText;
			alert(resp);
			// manipulation of response
			// var ourCatResp = resp.split(":");
			theCatGif = resp;
			console.log(theCatGif);
			showNewCats(theCatGif);
			

		}
	}
	xhr.send();
}

// function showScore(count1, count2) {
// 	document.getElementById("resultsCount1").textContent = count1;
// 	document.getElementById("resultsCount2").textContent = count2;
// 	console.log("you gotted this post");
//     $("#thisDialog").dialog("open");
// }

window.onload = function() {
	var theCatGif = document.getElementById("mainGif").src = "http://i427.photobucket.com/albums/pp355/NyackBosco/music/dj-cat.gif";
}