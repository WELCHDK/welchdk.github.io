var backBar = document.getElementById("myProgress");
//var bar = document.getElementById("myBar");
function progressMeter() {
 //backBar.value -= 10;
  //backBar.value -= 10;
//
   //backBar.value -= player2.currentWeapon.damage;
  	if (backBar.value >= 75){
    backBar.style.backgroundColor = "rgba(0,255,0, 0.9)";
    }
   else if (backBar.value >= 50){
    backBar.style.backgroundColor = "rgba(255,255,0, 0.8)";
    }
    else if (backBar.value >= 25){
    backBar.style.backgroundColor = "orange";
    }
  	else if (backBar.value >= 0){
    backBar.style.backgroundColor = "rgba(255,0,0,0.7)";
    }
}


//var bar = document.getElementById("myBar");
var proBar = document.getElementById("myPro");
function proMeter() {
	
 //backBar.value -= 10;
  //proBar.value -= 5;
  //proBar.value -= player1.currentWeapon.damage;
  
  	if (proBar.value >= 75){
    proBar.style.backgroundColor = "rgba(0,255,0, 0.9)";
    }
   else if (proBar.value >= 50){
    proBar.style.backgroundColor = "rgba(255,255,0, 0.8)";
    }
    else if (proBar.value >= 25){
    proBar.style.backgroundColor = "orange";
    }
  	else if (proBar.value >= 0){
    proBar.style.backgroundColor = "rgba(255,0,0,0.7)";
    }
}