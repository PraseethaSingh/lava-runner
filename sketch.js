var database, gameState = 0;
var game,form,playerCount,player,allPlayers;
var characters,character1,character2,background1,characterimg1,characterimg2;


function preload(){
    background1 = loadImage("images/background.png")
    characterimg1 = loadAnimation("images/boyRun1.png","images/boyRun2.png")
    characterimg2 = loadAnimation("images/Run1.png","images/Run2.png")

}
function setup(){
   
createCanvas(displayWidth-20,displayHeight-40);
database = firebase.database();
game = new Game();
game.getState();
game.begin();

}

function draw(){
//background(background1)
console.log(playerCount)
if (playerCount === 2){
    game.update(1)
}
if (gameState === 1){
    
    console.log("game.play reached")
    game.play()
}


}
