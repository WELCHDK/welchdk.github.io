	//Beethoven wins audio
var ba = document.getElementById("beetAudio"); 
var beetDiv = document.getElementById("beet");
var beetWins = document.getElementById("beetWins");

/*document.onload = function(event){
  ba.play();
}*/
beetDiv.addEventListener('mouseover', beetAudio, false);
beetDiv.addEventListener('click', beetAudio, false);

/*function beetAudio(){
  ba.play();
}*/
function beetAudio(event) {
    ba.play();
}
/*mozDiv.addEventListener("mouseover", function() {
  x.play()
} );*/

beetDiv.addEventListener("mouseout", function() {
  ba.pause()
});
beetDiv.addEventListener("mouseenter", function() {
  beetWins.style.fontSize = "85px";
  beetWins.style.cursor = "pointer";
});
