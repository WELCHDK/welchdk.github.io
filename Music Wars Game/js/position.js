function movePlayer(player) {
	$('.grid-item').click(function () {
		pathHighlight();
		const element = $(this);
		const block = this;
		// Make sure desired path is within distance
		if (element.hasClass("possible")) {

			if (player === player2) {
				playerTwoHighlight();

				$('.player-2').click(function () {
					$('.possible').css("background-color", "rgba(0, 255, 0, 0.6)");
				});
				document.getElementById("rest").style.display = "none";

				if (!playerTurn) {
					playerOneHighlight();

					weaponChecker(block, player);
					handleWeapon(element, player);
					playerReset("player-2");
					element.addClass("player-2");
					handleFight();
					playerTurn = !playerTurn;
				}
			}


			if (player === player1) {
				playerOneHighlight();
				$('.player-1').click(function () {
					$('.possible').css("background-color", "rgba(0, 255, 0, 0.6)");
				});

				document.getElementById("rest2").style.display = "none";
				if (playerTurn) {

					weaponChecker(block, player);
					handleWeapon(element, player);
					playerReset("player-1");
					element.addClass("player-1");
					handleFight();
					playerTurn = !playerTurn;

				}
			}

		}

	});
}

function getPlayerPosition() {
	$('.grid-item').each(function () {
		const element = $(this);

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


function playerReset(player) {
	$('.grid-item').each(function () {
		const element = $(this);
		element.removeClass(player);
		element.removeClass("possible");
		$('#aKey, #dKey, #left, #right').attr("disabled", false);
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
		}
	});
	$('.grid-item').each(function () {
		const element = $(this);
		const block = this;
		// value with larger X
		if (isInDistance(player, block) && (block.dataset['x'] > player.position.x)) {
			//removing inDistance allows for diagonal movement 
			//if((block.dataset['x'] > player.position.x)){
			if (squareOccupied(element)) {
				occupiedObject = this;
				$('.possible').each(function () {
					const element = $(this);
					const block = this;

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

					if (block.dataset['y'] < occupiedObject.dataset['y']) {
						//  console.log("block y is less than player y");
						//alert("up");
						element.removeClass("possible");
					}
				})
			}
		}
	})

	//removes color when tile outside of possible path is clicked
	$('.grid-item').each(function () {
		$('.possible').css("background-color", "");
	});


}
//if tiles have a block or player class, movement is not possible
function isInDistance(player, block) {
	const firstCondition = (Math.abs(block.dataset['x'] - player.position.x) < 4) &&
		(block.dataset['y'] === player.position.y);
	const secondCondition = (Math.abs(block.dataset['y'] - player.position.y) < 4) &&
		(block.dataset['x'] === player.position.x);
	return (firstCondition || secondCondition);
}


// Check if there is a weapon on the player's left
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
					weaponChange(element, player);;
				}
			}
		})
	}
}

// Check if there is a weapon on the player's right
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

// Check if there is a weapon below the player
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

// Check if there is a weapon above the player
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