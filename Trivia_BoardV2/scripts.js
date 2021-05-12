
$(function() {
    console.log("ready!");

    $.get('jeoPARTY.txt', function(data) {
        console.log(data);
     }, 'text');


    $(".game-button").click(function(){

        $(".board").toggle();
        $(".clue").toggle();
    });

    $(".clue").click(function(){

        $(".board").toggle();
        $(".clue").toggle();
    });

});