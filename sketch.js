var database, backgrounfimg, playercount, form, player, game
var gamestate=0

function setup(){

createCanvas(500,500);
database=firebase.database();
game= new Game
game.getState();
game.start();

}

function draw(){

}