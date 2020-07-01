// Get the modal
var modal = document.getElementById("WASDmodal");
var modal2 = document.getElementById("arrowKeysmodal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var toggle = document.getElementById("toggleButton");

var letterblock = document.getElementById('block');
var arrowblock = document.getElementById('block2');

/*if(playerEncounter()){
	$("#toggleButton").attr("disabled", true);
	}
	else if((backBar.value > 0 && proBar.value <= 0) 
		|| (proBar.value > 0 && backBar.value <=0)) {
	$("#toggleButton").attr("disabled", false);}*/

toggle.onclick = function () {
	/*if(playerEncounter()){
	"#toggleButton").attr("disabled", true);
		//preventDefault();
	/*}
	else if(proBar.value <= 0 || backBar.value <= 0){
	/*else if((backBar.value > 0 && proBar.value <= 0) 
		|| (proBar.value > 0 && backBar.value <=0)) {
	$("#toggleButton").attr("disabled", false);*/
	document.location.reload(true);
	window.location.href = 'index.html';
	/*}
	else{document.location.reload(true);
	window.location.href = 'index.html';}*/
//}
}


var info = document.getElementById('infoModal');

// Get the button that opens the modal
var btn = document.getElementById("info");

function blurBackground() {
	$(".grid-container").css("filter", "blur(20px)");
	$("#myProgress, #myPro").css("filter", "blur(10px)");
	$("#toggleButton").css("filter", "blur(5px)");
	$("#playerOne, #playerTwo, #weaponDisplay, #weaponDisplay2, #rest, #rest2, #arrowKeysmodal, #WASDmodal").css("filter", "blur(2px)");

	$("#playerOneTurn").css("color", "rgba(255, 19, 24, 0.55)").css("textShadow", "1px 1px white");
	$("#playerTwoTurn").css("display", "block").css("color", "rgba(0, 118, 255, 0.57)").css("textShadow", "1px 1px white");
}

function backgroundReset() {
	$(".grid-container").css("filter", "blur(0px)");
	$("#myProgress, #myPro").css("filter", "blur(0px)");
	$("#toggleButton").css("filter", "blur(0px)");
	$("#playerOne, #playerTwo, #weaponDisplay, #weaponDisplay2, #rest, #rest2, #arrowKeysmodal, #WASDmodal").css("filter", "blur(0px)");

	if (playerTurn) {
		$("#playerOneTurn").css("color", "green").css("textShadow", "");
		$("#playerTwoTurn").css("display", "block").css("color", "white").css("textShadow", "");
	} else if (!playerTurn) {
		$("#playerOneTurn").css("color", "white").css("textShadow", "");
		$("#playerTwoTurn").css("display", "block").css("color", "green").css("textShadow", "");
	}

}

// When the user clicks the button, open the modal 
window.onload = function () {
	generateGame();
	info.style.display = "block";
	blurBackground();
}

btn.onclick = function () {
	info.style.display = "block";
	blurBackground();
}
// When the user clicks the close span or anywhere outside of the modal, close it
$("#close").on("click", function () {
	info.style.display = "none";
	backgroundReset();
});


window.onclick = function (event) {
	if (event.target == info) {
		info.style.display = "none";
		backgroundReset();
	}
}