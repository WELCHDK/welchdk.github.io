//Player encounter/fight function
function handleFight() {
	if (playerEncounter()) {
		$("#toggleButton").css("color", "green");
		$('.possible').css("background-color", "");
		$('.grid-item').each(function () {
			$('.grid-item').off();
			$('.possible').css("background-color", "");
		});

		/*if(player===player1){
			playerOneKeysDisplay();
		}
		else if(player===player2){
			playerTwoKeysDisplay();
		}

		*/

		function playerOneKeysDisplay() {
			$("#WASDmodal").css("display", "block");
			$("#block").css("display", "none");

			$("#arrowKeysmodal").css("display", "none");
			$("#block2").css("display", "block");
		}


		function playerTwoKeysDisplay() {
			$("#arrowKeysmodal").css("display", "block");
			$("#block2").css("display", "none");

			$("#WASDmodal").css("display", "none");
			$("#block").css("display", "block");
		}


		const oneAttacks = document.getElementById('aKey');
		const twoAttacks = document.getElementById('left');
		const oneDefends = document.getElementById('dKey');
		const twoDefends = document.getElementById('right');

		if (!playerTurn) {
			playerOneKeysDisplay();
			$('#aKey, #dKey').attr("disabled", false).css("backgroundColor", "rgba(255, 19, 24, 0.55)");
			$('#left, #right').css("color", "");
		}

		oneAttacks.onclick = function () {
			playerReset(player1);
			meterHealth();
			proMeter();
			proBar.value -= player1.currentWeapon.damage;
			$('#aKey, #dKey').attr("disabled", true).css("backgroundColor", "");

			playerTwoHighlight();
			playerTwoKeysDisplay();
			$('#left, #right').css("backgroundColor", "rgba(0, 118, 255, 0.57)");
		}

		oneDefends.onclick = function () {
			playerReset(player1);
			meterHealth();
			progressMeter();

			backBar.value -= player2.currentWeapon.damage / 2;
			$('#dKey, #aKey').attr("disabled", true).css("backgroundColor", "");

			playerTwoHighlight();
			playerTwoKeysDisplay();
			$('#left, #right').css("backgroundColor", "rgba(0, 118, 255, 0.57)");
		}

		if (playerTurn) {
			playerTwoKeysDisplay();
			$('#left, #right').attr("disabled", false).css("backgroundColor", "rgba(0, 118, 255, 0.57)");
			$('#aKey, #dKey').css("color", "");
		}

		twoAttacks.onclick = function () {
			playerReset(player2);
			meterHealth();
			progressMeter();
			backBar.value -= player2.currentWeapon.damage;
			$('#left, #right').attr("disabled", true).css("backgroundColor", "");

			playerOneHighlight();
			playerOneKeysDisplay();
			$('#aKey, #dKey').css("backgroundColor", "rgba(255, 19, 24, 0.55)");

		}

		twoDefends.onclick = function () {
			playerReset(player2);
			meterHealth();
			proMeter();
			proBar.value -= player1.currentWeapon.damage / 2;
			$('#right, #left').attr("disabled", true).css("backgroundColor", "");
			//$('#left').attr("disabled", true).css("backgroundColor", "");

			playerOneHighlight();
			playerOneKeysDisplay();
			$('#aKey, #dKey').css("backgroundColor", "rgba(255, 19, 24, 0.55)");
		}
	} else if (!playerEncounter()) {
		$("#toggleButton").css("color", "").attr("disabled", false);
		$("#WASDmodal, #arrowKeysmodal").css("display", "none");
		$("#block, #block2").css("display", "block");
		$('#right, #left, #dKey, #aKey').attr("disabled", true);
	}
}
//Health percentage/ player status
function meterHealth() {
	handleFight();
	if (backBar.value <= 0) {
		backBar.value = 0;
		!playerEncounter;
		//$("#toggleButton").attr("disabled", false);
		window.open('beethoven.html', "_self");
		/*window.onload = function(){
			$("#toggleButton").attr("disabled", false);
		}*/
		//$("#toggleButton").attr("disabled", false);
	}

	if (proBar.value <= 0) {
		proBar.value = 0;
		!playerEncounter;
		window.open('mozart.html', "_self");
		/*window.onload = function(){
			$("#toggleButton").attr("disabled", false);
		}*/

	}
}