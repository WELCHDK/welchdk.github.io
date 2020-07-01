// weapons

class Weapon {
	constructor(name, damage, className, image) {
		this.name = name;
		this.damage = damage;
		this.className = className;
		this.image = image;
	}
}

var quarter = new Weapon("quarter note", 10, "weapon-1", "quarter.png");
var eighth = new Weapon("eighth note", 5, "weapon-2", "eighth.png");
var half = new Weapon("half note", 20, "weapon-3", "half.png");
var whole = new Weapon("whole note", 40, "weapon-4", "whole.png");
var keyblack = new Weapon("keyblack", 15, "block", "black.png");


// Generate random numbers
const generateRandomNum = () => Math.floor(Math.random() * 10);

// Generate grid with blocks
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		$('.grid-container').append('<div class="grid-item" data-y=' + i + ' data-x=' + j + '></div>');

		//$('#boardContainer').append('<div class="canvas"</div>');
	}
}

// Iterates different elements to display them on the board
function generate(func, times) {
	for (let i = 0; i < Number(times); i++) {
		func();
	}
}
// This functions helps blocks, weapons and players find an available aquare in the board
function placeElements(className) {
	const random_x = generateRandomNum();
	const random_y = generateRandomNum();
	$('.grid-item').each(function () {
		const element = $(this);
		if (this.dataset['x'] == random_x && this.dataset['y'] == random_y) {
			if (!(this.classList.contains("unavailable"))) {
				element.addClass(className);
				element.addClass("unavailable");
				// updates the position values to the player objects
				if (className === "player-1") {
					player1.position.x = this.dataset['x'];
					player1.position.y = this.dataset['y'];
				} else if (className === "player-2") {
					player2.position.x = this.dataset['x'];
					player2.position.y = this.dataset['y'];
				} else if (className === "weapon-1" ||
					className === "weapon-2" ||
					className === "weapon-3" ||
					className === "weapon-4") {
					element.addClass("weapon");
				}
				if (playerEncounter()) {
					console.log("Early Encounter");
					playerReset(className);
					placeElements(className);
				}
			} else {
				// Function calls itself recursively to find an open space
				placeElements(className);
			}
		}
	});
}


function generateGame() {
	//reset();
	// Anonymous functions
	generate(function () {
		placeElements("block");
	}, 20);
	generate(function () {
		placeElements("weapon-1")
	}, 1);
	generate(function () {
		placeElements("weapon-2");
	}, 1);
	generate(function () {
		placeElements("weapon-3");
	}, 1);
	generate(function () {
		placeElements("weapon-4");
	}, 1);
	generate(function () {
		placeElements("keyblack");
	}, 8);
	generate(function () {
		placeElements("player-1");
	}, 1);
	generate(function () {
		placeElements("player-2");
	}, 1);
	//movePlayer(player1);
	//movePlayer(player2);
	pathHighlight();
	weaponDisplay(player1);
	weaponDisplay(player2);

}

// Event handlers
//$('.close').click(generateGame);
//window.onload = generateGame;

function playerOneHighlight() {
	document.getElementById('playerOneTurn').style.color = "green";
	document.getElementById('playerTwoTurn').style.color = "white";
}

function playerTwoHighlight() {
	document.getElementById('playerOneTurn').style.color = "white";
	document.getElementById('playerTwoTurn').style.color = "green";

}


/*=================================== Player Movements ================================== */
// Variable to check movements
//let playerTurn = true;
//document.getElementById('playerOne').style.color = "green";

function pathHighlight() {
	//if (!fightMode) {
	if (playerTurn) {
		possiblePath(player1);
		$('.player-1').on('click', function () {
			$('.possible').css("background-color", "rgba(0, 255, 0, 0.6)");
		});
		/*$('.player-2').click(function (event) {
				event.preventDefault();
			//$('.possible').css("background-color", "white");
		});*/


		//playerOneHighlight();
		/* $('.player-1').mouseover(function(){
    $('.possible').css("background-color", "blue");
	});
		  $('.player-1').mouseleave(function(){
    $('.possible').css("background-color", "white");
	});*/

	} else {
		possiblePath(player2);
		$('.player-2').on('click', function () {
			$('.possible').css("background-color", "rgba(0, 255, 0, 0.6)");
		});
		/*$('.player-1').click(function (event) {
					event.preventDefault();
				//$('.possible').css("background-color", "white");
			});*/
		//playerTwoHighlight();

		/*  $('.player-2').mouseover(function(){
    $('.possible').css("background-color", "red");
	});
		  $('.player-2').mouseleave(function(){
    $('.possible').css("background-color", "white");
	});*/
	}
	//}
}
function moveDisabled(){
	$('.grid-item').on('click', function () {
		 $('.grid-item').off('click');
		 $('.player-1').off('click');
		 $('.player-2').off('click');
			$('.possible').css("background-color", "");
		});
	/*$('.grid-item').on('click', function () {
		$('.grid-item').off('click');
			$('.possible').css("background-color", "");
		});*/
		

   
     
     //  $('.grid-item').off('click');
     // movePlayer(player) = false;
     
      //document.getElementById("myDIV").removeEventListener("mousemove", myFunction);

}
function movePlayer(player) {
	/*if(playerEncounter){*/
		//moveDisabled();
		//return false;
		//preventDefault();
	//}

	//else {*/
	//fightMode = false;
	//if(!playerEncounter){
	$('.grid-item').on('click', function () {
		pathHighlight();
		const element = $(this);
		const block = this;
		// Make sure is within distance
		if (element.hasClass("possible")) {

			if (player === player2) {
				playerTwoHighlight();

				$('.player-2').on('click', function () {
					$('.possible').css("background-color", "rgba(0, 255, 0, 0.6)");
				});
				/*$('.player-1').click(function () {
						return false;
					});*/


				/*$('.player-1').click(function (event) {
					event.preventDefault();
					//$('.possible').css("background-color", "white");
				});*/



				//document.getElementById('playerOne').style.color = "green";
				//document.getElementById('playerTwo').style.color = "white";
				//playerOneHighlight();

				document.getElementById("rest").style.display = "none";
				if (!playerTurn) {
					playerOneHighlight();
					//console.log('Player-2 turn');
					/*  $('.player-1').click(function(event){
						event.preventDefault();
					  });*/

					// foot.play();
					weaponChecker(block, player);
					handleWeapon(element, player);
					playerReset("player-2");
					element.addClass("player-2");
					//$( "#2-player-turn" ).css( "display", "none" );
					//$( "#1-player-turn" ).css( "display", "block" );
					//handleFight();
					playerTurn = !playerTurn;
					//displayStats(player);
				}
			}


			if (player === player1) {
				playerOneHighlight();
					$('.player-1').on('click', function () {
					$('.possible').css("background-color", "rgba(0, 255, 0, 0.6)");
				});


				/*$('.player-2').click(function () {
					return false;
					//console.log('Not player-2 turn');
				});*/
				/*$('.player-2').click(function (event) {
					event.preventDefault();
					//$('.possible').css("background-color", "white");
				});*/
				document.getElementById("rest2").style.display = "none";
				if (playerTurn) {

					/* $('.player-2').click(function(event){
				event.preventDefault();
			  });*/

					//foot.play();
					weaponChecker(block, player);
					handleWeapon(element, player);
					playerReset("player-1");
					element.addClass("player-1");
					// $( "#1-player-turn" ).css( "display", "none" );
					//$( "#2-player-turn" ).css( "display", "block" );
					//handleFight();
					playerTurn = !playerTurn;
					//displayStats(player);
				}
			}

		}
		// $('.grid-item').each(pathHighlight);

	});
}
//}
	/*else {
		movePlayer() = false;
		preventDefault();
	}
}*/

function getPlayerPosition() {
	$('.grid-item').each(function () {
		const element = $(this);
		// I take the coordinates of the
		if (element.hasClass("player-1")) {
			player1.position.x = this.dataset['x'];
			player1.position.y = this.dataset['y'];
		}
		if (element.hasClass("player-2")) {
			player2.position.x = this.dataset['x'];
			player2.position.y = this.dataset['y'];
		}
	});
}

/*=================================== Handle Weapons ================================== */
function playerReset(player) {
	$('.grid-item').each(function () {
		const element = $(this);
		element.removeClass(player);
		element.removeClass("possible");
		$('#aKey').attr("disabled", false);
		$('#dKey').attr("disabled", false);
		$('#left').attr("disabled", false);
		$('#right').attr("disabled", false);


		//playerOneHighlight();
		/*if (player === player1){
			
		document.getElementById("rest2").style.display = "none";
		}
		else if (player === player2){
		document.getElementById("rest").style.display = "none";
		}*/
	});
}

function squareOccupied(element) {
	return (
		element.hasClass("block") ||
		element.hasClass("player-1") ||
		element.hasClass("player-2")
	);
}

function possiblePath(player) {
	$('.grid-item').each(function () {
		const element = $(this);
		const block = this;
		if (isInDistance(player, block) && !squareOccupied(element)) {
			element.addClass("possible");
			/*$('.player-1').click(function(){
				$('.possible').css("background-color", "blue");
			});
			$('.player-2').click(function(){
				$('.possible').css("background-color", "red");
			});*/

		}
	});
	$('.grid-item').each(function () {
		const element = $(this);
		const block = this;
		// value larger with larger X
		if (isInDistance(player, block) && (block.dataset['x'] > player.position.x)) {


			//removing inDistance allows for diagonal movement 
			//if((block.dataset['x'] > player.position.x)){
			if (squareOccupied(element)) {
				occupiedObject = this;
				$('.possible').each(function () {
					const element = $(this);
					const block = this;

					/* $('.player-1').click(function(){
						$('.possible').css("background-color", "blue");
					});
					$('.player-2').click(function(){
						$('.possible').css("background-color", "red");
					});*/
					if (block.dataset['x'] > occupiedObject.dataset['x']) {
						//	console.log("block x is greater than player x");
						element.removeClass("possible");
					}
				});
			}
		}
		// value with lower X
		if (isInDistance(player, block) && (block.dataset['x'] < player.position.x)) {

			if (squareOccupied(element)) {
				occupiedObject = this;
				$('.possible').each(function () {
					const element = $(this);
					const block = this;

					/* $('.player-1').click(function(){
						$('.possible').css("background-color", "blue");
					});
					$('.player-2').click(function(){
						$('.possible').css("background-color", "red");
					});*/
					if (block.dataset['x'] < occupiedObject.dataset['x']) {
						//console.log("block x is less than player x");
						element.removeClass("possible");
					}
				});
			}
		}
		// value with higher y
		if (isInDistance(player, block) && (block.dataset['y'] > player.position.y)) {

			if (squareOccupied(element)) {
				occupiedObject = this;
				$('.possible').each(function () {
					const element = $(this);
					const block = this;

					/* $('.player-1').click(function(){
						$('.possible').css("background-color", "blue");
					});
					$('.player-2').click(function(){
						$('.possible').css("background-color", "red");
					});*/
					if (block.dataset['y'] > occupiedObject.dataset['y']) {
						//console.log("block y is greater than player y");	
						element.removeClass("possible");
					}
				});
			}
		}
		// value with lower y
		if (isInDistance(player, block) && (block.dataset['y'] < player.position.y)) {

			if (squareOccupied(element)) {
				occupiedObject = this;
				$('.possible').each(function () {
					const element = $(this);
					const block = this;

					/*  $('.player-1').click(function(){
				$('.possible').css("background-color", "blue");
			});
			$('.player-2').click(function(){
				$('.possible').css("background-color", "red");
			});*/
					if (block.dataset['y'] < occupiedObject.dataset['y']) {
						//  console.log("block y is less than player y");
						//alert("up");
						element.removeClass("possible");
					}
				})
			}
		}
	})


	$('.grid-item').each(function () {
		$('.possible').css("background-color", "");
		//document.getElementById('playerTwo').style.color = "white";
	});


}
// I need to reference all the elements that are "inDistance"
// To determine if they have block or player class, if they do
// movement is not possible
function isInDistance(player, block) {
	const firstCondition = (Math.abs(block.dataset['x'] - player.position.x) < 4) &&
		(block.dataset['y'] === player.position.y);
	const secondCondition = (Math.abs(block.dataset['y'] - player.position.y) < 4) &&
		(block.dataset['x'] === player.position.x);
	return (firstCondition || secondCondition);
	// $('.grid-item').each(pathHighlight);
}

// Check if there are any weapons in the path
function weaponChecker(block, player) {
	checkSmallerX(block, player);
	checkSmallerY(block, player);
	checkLargerX(block, player);
	checkLargerY(block, player);
}

// Check if there is a weapon left of the player
function checkSmallerX(block, player) {
	if (block.dataset['x'] < player.position.x) {
		$('.possible').each(function () {
			const element = $(this);
			const innerBlock = this;
			if ((innerBlock.dataset['x'] < player.position.x) &&
				(innerBlock.dataset['y'] == player.position.y) &&
				innerBlock.dataset['x'] > block.dataset['x']) {
				if (element.hasClass("weapon") ||

					element.hasClass("keyblack")) {
					weaponChange(element, player);
				}
			}
		})
	}
}

// Check if there is a weapon right of the player
function checkLargerX(block, player) {
	if (block.dataset['x'] > player.position.x) {
		$('.possible').each(function () {
			const element = $(this);
			const innerBlock = this;
			if ((innerBlock.dataset['x'] > player.position.x) &&
				(innerBlock.dataset['y'] == player.position.y) &&
				(innerBlock.dataset['x'] < block.dataset['x'])) {
				if (element.hasClass("weapon") ||

					element.hasClass("keyblack")) {
					weaponChange(element, player);
				}
			}
		})
	}
}

// Check if there is a weapon under the player
function checkSmallerY(block, player) {
	if (block.dataset['y'] < player.position.y) {
		$('.possible').each(function () {
			const element = $(this);
			const innerBlock = this;
			if ((innerBlock.dataset['y'] < player.position.y) &&
				(innerBlock.dataset['x'] == player.position.x) &&
				innerBlock.dataset['y'] > block.dataset['y']) {
				if (element.hasClass("weapon") ||

					element.hasClass("keyblack")) {
					weaponChange(element, player);
				}
			}
		})
	}
}

// Check if there is a weapon over the player
function checkLargerY(block, player) {
	if (block.dataset['y'] > player.position.y) {
		$('.possible').each(function () {
			const element = $(this);
			const innerBlock = this;
			if ((innerBlock.dataset['y'] > player.position.y) &&
				(innerBlock.dataset['x'] == player.position.x) &&
				innerBlock.dataset['y'] < block.dataset['y']) {
				if (element.hasClass("weapon") ||

					element.hasClass("keyblack")) {
					weaponChange(element, player);
				}
			}
		})
	}
}

var eighthNote = document.getElementById("eighth");
var quarterNote = document.getElementById("quarter");
var halfNote = document.getElementById("half");
var wholeNote = document.getElementById("whole");
var eNote = document.getElementById("enote");
var qNote = document.getElementById("qnote");
var hNote = document.getElementById("hnote");
var wNote = document.getElementById("wnote");


// If there is a weapon, handle it by removing the class and replacing it
// with the current one of the player
function weaponChange(element, player) {
	let playerWeapon = player.currentWeapon;
	let damage = this.damage;
	if (element.hasClass("weapon-1")) {
		element.removeClass("weapon-1");
		element.addClass(playerWeapon.className);
		player.currentWeapon = quarter;
		weaponDisplay(player);
		quarter.damage = 10;

	} else if (element.hasClass("weapon-2")) {
		element.removeClass("weapon-2");
		element.addClass(playerWeapon.className);
		player.currentWeapon = eighth;
		weaponDisplay(player);
		eighth.damage = 5;

	} else if (element.hasClass("weapon-3")) {
		element.removeClass("weapon-3");
		element.addClass(playerWeapon.className);
		player.currentWeapon = half;
		weaponDisplay(player);
		half.damage = 20;

	} else if (element.hasClass("weapon-4")) {
		element.removeClass("weapon-4");
		element.addClass(playerWeapon.className);
		player.currentWeapon = whole;
		weaponDisplay(player);
		whole.damage = 40;

	} else if (element.hasClass("keyblack")) {
		//keyblack.damage = 15;
		if (player === player1) {
			document.getElementById("rest").style.display = "block"
			document.getElementById("myProgress").value -= 15;
			progressMeter();
			meterHealth();
		} else if (player === player2) {
			document.getElementById("rest2").style.display = "block"
			document.getElementById("myPro").value -= 15;
			proMeter();
			meterHealth();
		}
		element.removeClass("keyblack");

	}

}


function weaponDisplay(player) {
	if (player === player1) {

		if (player.currentWeapon == eighth) {
			eighthNote.style.display = "block";
		} else {
			eighthNote.style.display = "none";
		}

		if (player.currentWeapon == quarter) {
			quarterNote.style.display = "block";
		} else {
			quarterNote.style.display = "none";
		}
		if (player.currentWeapon == half) {
			halfNote.style.display = "block";
		} else {
			halfNote.style.display = "none";
		}
		if (player.currentWeapon == whole) {
			wholeNote.style.display = "block";
		} else {
			wholeNote.style.display = "none";
		}


	}
	if (player === player2) {
		if (player.currentWeapon == eighth) {
			eNote.style.display = "block";
		} else {
			eNote.style.display = "none";
		}

		if (player.currentWeapon == quarter) {
			qNote.style.display = "block";
		} else {
			qNote.style.display = "none";
		}
		if (player.currentWeapon == half) {
			hNote.style.display = "block";
		} else {
			hNote.style.display = "none";
		}
		if (player.currentWeapon == whole) {
			wNote.style.display = "block";
		} else {
			wNote.style.display = "none";
		}

	}
}

/*============================= Player Encounters  and fighting ============================= */
//let fightMode = false;

function handleWeapon(element, player) {
	weaponChange(element, player);
}
// What happens when players encounter each other
function playerEncounter() {
	getPlayerPosition();
		//moveDisabled();
		//$(".grid-item").css("display","none");


	const xPosition = Math.abs(Number(player1.position.x) - Number(player2.position.x));
	const yPosition = Math.abs(Number(player2.position.y) - Number(player1.position.y));
	return (((xPosition == 0) && (yPosition == 1)) ||
		((yPosition == 0) && (xPosition == 1))
	)
		//moveDisabled();
//$('.grid-container').css("backgroundColor", "black");
//		$('.grid-item').css("backgroundColor", "black");
}


// Logic to take care of the turns
function handleFight() {
	if (playerEncounter()) {
		moveDisabled();
		//$('.grid-container').attr("disabled", true);
		//$('.grid-container').css("backgroundColor", "black");
		//$('.grid-item').css("backgroundColor", "black");
		//fightMode = true;
		//	movePlayer(player1) = false;
		//movePlayer(player2) = false;
				//$('.grid-item').each(function() {
	//$('.player-1').attr("disabled", true);
	//$('.player-2').attr("disabled", true);
	//});
		$("#toggleButton").css("color","green");
		$("#WASDmodal").css("display","block");
		$("#arrowKeysmodal").css("display","block");
		//$("#aKey").css("display","block");
		//$("#dKey").css("display","block");
		//$("#left").css("display","block");
		//$("#right").css("display","block");
		$("#block").css("display","none");
		$("#block2").css("display","none");


		/*if(!playerTurn){
			playerReset(player1);
		}
		if(playerTurn){
			playerReset(player2);
		}
		*/

		const oneAttacks = document.getElementById('aKey');
		const twoAttacks = document.getElementById('left');
		const oneDefends = document.getElementById('dKey');
		const twoDefends = document.getElementById('right');

		if (!playerTurn) {
			
			//}
			$('#aKey').attr("disabled", false).css("backgroundColor","rgba(255, 19, 24, 0.55)");
			$('#dKey').attr("disabled", false).css("backgroundColor", "rgba(255, 19, 24, 0.55)");
			$('#left').css("color","");
			$('#right').css("color", "");
			//$('#left').attr("disabled", true);
			//$('#right').attr("disabled", true);
}
			oneAttacks.onclick = function () {
				playerReset(player1);
				//$('#aKey').on('click', function(){	
				meterHealth();
				proMeter();
				proBar.value -= player1.currentWeapon.damage;
				$('#aKey').attr("disabled", true).css("backgroundColor","");
				$('#dKey').attr("disabled", true).css("backgroundColor","");

				playerTwoHighlight();
				$('#left').css("backgroundColor","rgba(0, 118, 255, 0.57)");
				$('#right').css("backgroundColor","rgba(0, 118, 255, 0.57)");
			}

			//$('#aKey').attr("disabled", false);
			oneDefends.onclick = function () {
				playerReset(player1);
				//$('#dKey').on('click', function(){
				//defendFunc();
				meterHealth();
				//player1.isDefending = true;
				progressMeter();

				backBar.value -= player2.currentWeapon.damage / 2;
				$('#dKey').attr("disabled", true).css("backgroundColor","");
				$('#aKey').attr("disabled", true).css("backgroundColor","");

				playerTwoHighlight();
				$('#left').css("backgroundColor","rgba(0, 118, 255, 0.57)");
				$('#right').css("backgroundColor","rgba(0, 118, 255, 0.57)");
			//}
		}
		//$('#dKey').attr("disabled", false);
		if (playerTurn) {
			//if(movePlayer(player2)){
				//fightMode = false;
			
			//}
			$('#left').attr("disabled", false).css("backgroundColor","rgba(0, 118, 255, 0.57)");
			$('#right').attr("disabled", false).css("backgroundColor","rgba(0, 118, 255, 0.57)");
			$('#aKey').css("color","");
			$('#dKey').css("color","");
			//$('#aKey').attr("disabled", true);
			//$('#dKey').attr("disabled", true);
}
			twoAttacks.onclick = function () {
				playerReset(player2);
				//$('#left').on('click', function(){
				meterHealth();
				progressMeter();
				backBar.value -= player2.currentWeapon.damage;
				$('#left').attr("disabled", true).css("backgroundColor","");
				$('#right').attr("disabled", true).css("backgroundColor","");

				playerOneHighlight();
				$('#aKey').css("backgroundColor", "rgba(255, 19, 24, 0.55)");
				$('#dKey').css("backgroundColor", "rgba(255, 19, 24, 0.55)");
			}
			//$('#left').attr("disabled", false);
			twoDefends.onclick = function () {
				playerReset(player2);
				//$('#right').on('click', function(){
				//defendFunc();
				meterHealth();
				//player2.isDefending = true;
				proMeter();
				proBar.value -= player1.currentWeapon.damage / 2;
				$('#right').attr("disabled", true).css("backgroundColor","");
				$('#left').attr("disabled", true).css("backgroundColor","");

				playerOneHighlight();
				$('#aKey').css("backgroundColor", "rgba(255, 19, 24, 0.55)");
				$('#dKey').css("backgroundColor", "rgba(255, 19, 24, 0.55)");
			}
			//getPlayerPosition();


			//$('#right').attr("disabled", false);
		}
		//*/
		//playerReset(player1);
		//playerReset(player2);
		else if(!playerEncounter()) {
		
		$("#toggleButton").css("color","");
		$("#WASDmodal").css("display","none");
		$("#arrowKeysmodal").css("display","none");
		//$("#aKey").css("display","none");
		//$("#dKey").css("display","none");
		//$("#left").css("display","none");
		//$("#right").css("display","none");
		$("#block").css("display","block");
		$("#block2").css("display","block");
		//fightMode = false;

		//$("#toggleButton").attr("disabled", true);
		$('#right').attr("disabled", true);
		$('#left').attr("disabled", true);
		$('#dKey').attr("disabled", true);
		$('#aKey').attr("disabled", true);
	}

	}
	/*else {
		fightMode = false;
		}
	*/
	/*if(movePlayer(player2) || movePlayer(player1)){
		fightMode = false;
			}*/
//}

// Logic to take care of the attacks
function meterHealth() {

	handleFight();

	if (backBar.value <= 0) {
		backBar.value = 0;

		window.open('new Beethoven.html', "_self");
		//beetAudio();


	}
	//if (player2.health <= 0 ) {
	if (proBar.value <= 0) {
		proBar.value = 0;

		window.open('mozart.html', "_self");
		//ma.play();
	}
}