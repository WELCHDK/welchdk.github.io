$("#game_logo").on("click", function(){
    window.location.href = 'Music Wars Game/index.html';
});
$("#quote_logo").on("click", function(){
    window.location.href = 'Quote Generator/index.html';
});
$("#boff_logo").on("click", function(){
    window.location.href = 'Film Festival/index.html';
});
$("#reviews_logo").on("click", function(){
    window.location.href = 'Reviews/index.html';
});
$("#reviews_logo, #boff_logo, #quote_logo, #game_logo").on("mouseover", function(){
    $(this).css("border", "5px solid white");
    //$(!this).css("opacity","0.5");
});
$("#reviews_logo, #boff_logo, #quote_logo, #game_logo").on("mouseout", function(){
    $(this).css("border", "none");
});