// Get the modal
var modal = document.getElementById("WASDmodal");
var modal2 = document.getElementById("arrowKeysmodal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var toggle = document.getElementById("toggleButton");

var letterblock = document.getElementById('block');
var arrowblock = document.getElementById('block2');


/*toggle.onclick = function () {
//if(!playerEncounter()) {
	if (modal.style.display === "block") {
		modal.style.display = "none"
		modal2.style.display = "none"
	//if(playerEncounter)
		if (letterblock.style.display && arrowblock.style.display === "none") {
			letterblock.style.display = "block"
			arrowblock.style.display = "block"
		} else {
		//} else if(!playerEncounter) {
			letterblock.style.display === "none"
			arrowblock.style.display === "none"
		}
//}
	} else {
		//} else if(playerEncounter()) {
		modal.style.display = "block"
		modal2.style.display = "block"
		letterblock.style.display = "none"
		arrowblock.style.display = "none"
	}


}*/
/*if(playerEncounter()) {
	modal.style.display = "block";
	modal2.style.display = "block";
}
if(!playerEncounter()){
	modal.style.display = "none";
	modal2.style.display = "none";
}*/
toggle.onclick = function () {
	//if(playerEncounter()){
//$("#toggleButton").attr("disabled", true);
	//}
	//else{
		//$("#toggleButton").attr("disabled", false);
	document.location.reload(true);
	window.location.href = 'index.html';
//}
}


var info = document.getElementById('infoModal');

// Get the button that opens the modal
var btn = document.getElementById("info");



// When the user clicks the button, open the modal 
window.onload = function () {
	generateGame();
	info.style.display = "block";
	$(".grid-container").css("filter", "blur(20px)");
	$("#myProgress").css("filter", "blur(10px)");
	$("#myPro").css("filter", "blur(10px)");
	$("#toggleButton").css("filter", "blur(5px)");
	$("#playerOne").css("filter", "blur(2px)");
	$("#playerTwo").css("filter", "blur(2px)");
	$("#weaponDisplay").css("filter", "blur(2px)");
	$("#weaponDisplay2").css("filter", "blur(2px)");
	$("#rest").css("filter", "blur(2px)");
	$("#rest2").css("filter", "blur(2px)");
	$("#arrowKeysmodal").css("filter", "blur(2px");
	$("#WASDmodal").css("filter", "blur(2px");
	$("#playerOneTurn").css("color","rgba(255, 19, 24, 0.55)").css("textShadow","1px 1px white");
	$("#playerTwoTurn").css("display","block").css("color","rgba(0, 118, 255, 0.57)").css("textShadow","1px 1px white");
	//document.getElementsByClassName("grid-container box").style.filter = "";
	//filter: blur(8px);
}

btn.onclick = function () {
	info.style.display = "block";
	$(".grid-container").css("filter", "blur(20px)");
	$("#myProgress").css("filter", "blur(10px)");
	$("#myPro").css("filter", "blur(10px)");
	$("#toggleButton").css("filter", "blur(5px)");
	$("#playerOne").css("filter", "blur(2px)");
	$("#playerTwo").css("filter", "blur(2px)");
	$("#weaponDisplay").css("filter", "blur(2px)");
	$("#weaponDisplay2").css("filter", "blur(2px)");
	$("#rest").css("filter", "blur(2px)");
	$("#rest2").css("filter", "blur(2px)");
	$("#arrowKeysmodal").css("filter", "blur(2px");
	$("#WASDmodal").css("filter", "blur(2px");
	//document.getElementsByClassName("grid-container box").style.filter = "";
	//filter: blur(8px);
	$("#playerOneTurn").css("color","rgba(255, 19, 24, 0.55)").css("textShadow","1px 1px white");
	$("#playerTwoTurn").css("display","block").css("color","rgba(0, 118, 255, 0.57)").css("textShadow","1px 1px white");
}

$("#close").on("click", function (event) {
	
	//if (event.target == info) {
		info.style.display = "none";
		//generateGame();
		//$("document.body").css("filter", "blur(0px)");
		$(".grid-container").css("filter", "blur(0px)");
		$("#myProgress").css("filter", "blur(0px)");
		$("#myPro").css("filter", "blur(0px)");
		$("#toggleButton").css("filter", "blur(0px)");
		$("#playerOne").css("filter", "blur(0px)");
		$("#playerTwo").css("filter", "blur(0px)");
		$("#weaponDisplay").css("filter", "blur(0px)");
		$("#weaponDisplay2").css("filter", "blur(0px)");
		$("#rest").css("filter", "blur(0px)");
		$("#rest2").css("filter", "blur(0px)");
		$("#arrowKeysmodal").css("filter", "blur(0px");
		$("#WASDmodal").css("filter", "blur(0px");

		if(playerTurn){
		   $("#playerOneTurn").css("color","green").css("textShadow","");
		   $("#playerTwoTurn").css("display","block").css("color","white").css("textShadow","");
		//document.getElementsByClassName("grid-container box").style.filter = "";
		}
		else if(!playerTurn){
		   $("#playerOneTurn").css("color","white").css("textShadow","");
		   $("#playerTwoTurn").css("display","block").css("color","green").css("textShadow","");
		}
	//}
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	
	if (event.target == info) {
		info.style.display = "none";
		//generateGame();
		//$("document.body").css("filter", "blur(0px)");
		$(".grid-container").css("filter", "blur(0px)");
		$("#myProgress").css("filter", "blur(0px)");
		$("#myPro").css("filter", "blur(0px)");
		$("#toggleButton").css("filter", "blur(0px)");
		$("#playerOne").css("filter", "blur(0px)");
		$("#playerTwo").css("filter", "blur(0px)");
		$("#weaponDisplay").css("filter", "blur(0px)");
		$("#weaponDisplay2").css("filter", "blur(0px)");
		$("#rest").css("filter", "blur(0px)");
		$("#rest2").css("filter", "blur(0px)");
		$("#arrowKeysmodal").css("filter", "blur(0px");
		$("#WASDmodal").css("filter", "blur(0px");

		if(playerTurn){
		   $("#playerOneTurn").css("color","green").css("textShadow","");
		   $("#playerTwoTurn").css("display","block").css("color","white").css("textShadow","");
		//document.getElementsByClassName("grid-container box").style.filter = "";
		}
		else if(!playerTurn){
		   $("#playerOneTurn").css("color","white").css("textShadow","");
		   $("#playerTwoTurn").css("display","block").css("color","green").css("textShadow","");
		}
	}
}

