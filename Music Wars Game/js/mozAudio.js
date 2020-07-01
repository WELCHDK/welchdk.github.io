//Mozart wins audio

var ma = document.getElementById("mozAudio"); 
var mozDiv = document.getElementById("moz");
var mozWins = document.getElementById("mozart");
//var mozText = document.getElementById("mozart");
//function playAudio() { 
mozDiv.addEventListener('mouseover', mozAudio, false);
mozDiv.addEventListener('click', mozAudio, false);

function mozAudio(event) {
    ma.play();
}
/*mozDiv.addEventListener("mouseover", function() {
  x.play()
} );*/

mozDiv.addEventListener("mouseout", function() {
  ma.pause();
});
mozDiv.addEventListener("mouseenter", function() {
  mozWins.style.fontSize = "85px";
  mozWins.style.cursor = "pointer";
  //mozWins.style.filter("blur", "5px");
  //mozWins.style.boxShadow = "5px 10px 8px #888888";
});
/*document.getElementById("moz").addEventListener("mouseover", function() {
  mozWins.style.color = "white";
} )




//var elem = document.getElementById('first');*/


