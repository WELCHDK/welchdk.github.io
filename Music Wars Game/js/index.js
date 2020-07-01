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


// players
const player1 = {
	position: {},
	currentWeapon: quarter,
	//isDefending: false
};

const player2 = {
	position: {},
	currentWeapon: quarter,
	//isDefending: false
};

// Generate random numbers
const generateRandomNum = () => Math.floor(Math.random() * 10);

// Generate grid with blocks
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		$('.grid-container').append('<div class="grid-item" data-y=' + i + ' data-x=' + j + '></div>');
	}
}

//Displays elements on the board
function generate(func, times) {
	for (let i = 0; i < Number(times); i++) {
		func();
	}
}
//Helps blocks, weapons and players find an available aquare in the board
function placeElements(className) {
	const random_x = generateRandomNum();
	const random_y = generateRandomNum();
	$('.grid-item').each(function () {
		const element = $(this);
		if (this.dataset['x'] == random_x && this.dataset['y'] == random_y) {
			if (!(this.classList.contains("unavailable"))) {
				element.addClass(className);
				element.addClass("unavailable");
				// updates the players' position values
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
				// Function calls itself until it finds an open space
				placeElements(className);
			}
		}
	});
}


function generateGame() {
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
	movePlayer(player1);
	movePlayer(player2);
	pathHighlight();
	weaponDisplay(player1);
	weaponDisplay(player2);
}

function playerOneHighlight() {
	document.getElementById('playerOneTurn').style.color = "green";
	document.getElementById('playerTwoTurn').style.color = "white";
	//$('#aKey, #dKey').css("backgroundColor", "rgba(255, 19, 24, 0.55)");
}

function playerTwoHighlight() {
	document.getElementById('playerOneTurn').style.color = "white";
	document.getElementById('playerTwoTurn').style.color = "green";
	//$('#left, #right').css("backgroundColor", "rgba(0, 118, 255, 0.57)");
}


// Variable to check player movements
let playerTurn = true;

function pathHighlight() {
	if (playerTurn) {
		possiblePath(player1);
		$('.player-1').click(function () {
			$('.possible').css("background-color", "rgba(0, 255, 0, 0.6)");
		});
		playerOneHighlight();
	} else {
		possiblePath(player2);
		$('.player-2').click(function () {
			$('.possible').css("background-color", "rgba(0, 255, 0, 0.6)");
		});
		playerTwoHighlight();
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


function playerEncounter() {
	getPlayerPosition();
	const xPosition = Math.abs(Number(player1.position.x) - Number(player2.position.x));
	const yPosition = Math.abs(Number(player2.position.y) - Number(player1.position.y));
	return (((xPosition == 0) && (yPosition == 1)) ||
		((yPosition == 0) && (xPosition == 1))
	)
}