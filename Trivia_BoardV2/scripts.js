
$(function() {
    console.log("ready!");

    let map = new Map();

    $.get('jeoPARTY.txt', function(data) {
        console.log(data);
    }, 'text');

    $.get('show.txt', function(data) {
        
        var lines = data.split("\n");
        categories = lines[0].substring(1,lines[0].length-1).split(",");
        //Set categories
        for(var i = 0; i < 6; i++){
            theCatIDNum = i+1;
            if(i == 0)
                document.getElementById("cat"+theCatIDNum.toString()).innerHTML = categories[i].substring(1, categories[i].length-1);
            else
                document.getElementById("cat"+theCatIDNum.toString()).innerHTML = categories[i].substring(2, categories[i].length-1);
        }
        
        //Make clues dictionary
        for (var i = 1, len = lines.length; i < len; i++) {
            line = lines[i].split(" 8==D ");
            map.set([parseInt(line[0]), parseInt(line[1])].toString(), line[3]);
        }

    }, 'text');   

    //When a game button tile is clicked ...
    $(".tile").click(function(){

        //show the right clue ...
        var tileID = $(this).attr('data-tileID');
        theIDKey = tileID.split(",");
        var clue = map.get([parseInt(theIDKey[0]), parseInt(theIDKey[1])].toString());
        document.getElementById("daClue").innerHTML = clue;

        //and empty the button text
        $(this).children("button.game-button").text("");
    })

    $(".game-button").click(function(){
        $("#board").toggle();
        $(".clue").toggle();
    });

    $(".clue").click(function(){

        $("#board").toggle();
        $(".clue").toggle();
    });

});