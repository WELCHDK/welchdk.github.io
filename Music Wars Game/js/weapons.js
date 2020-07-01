// Check if there are any weapons in the path
function weaponChecker(block, player) {
	checkSmallerX(block, player);
	checkSmallerY(block, player);
	checkLargerX(block, player);
	checkLargerY(block, player);
}

//if a weapon is landed on or passed over
//the old weapon is placed in the new weapon's place
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

function handleWeapon(element, player) {
	weaponChange(element, player);
}