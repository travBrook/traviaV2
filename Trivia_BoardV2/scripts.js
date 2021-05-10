$(function() {
    console.log( "ready!" );

    $(".game-button").click(function(){

        $(".board").toggle();
        $(".clue").toggle();
    });

    $(".clue").click(function(){

        $(".board").toggle();
        $(".clue").toggle();
    });

});