var playerCount, gameState=0
var form, player, game
var database,position
var allPlayers

function setup(){
    database = firebase.database();

    game = new Game()
    game.getState()
    game.start()
    
}

function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState ==1){
        clear();
        game.play();
    }
}


