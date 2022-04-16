var trex, trex_running, edges;
var groundImage;
var ground
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
createCanvas(600,200);
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
edges = createEdgeSprites();
//Here we add scale and position to T-Rex sprite
trex.scale = 0.5;
trex.x = 50
//Creating ground(Note:Everything is considered a sprite)
ground=createSprite(300,180,600,20)
ground.x=ground.width/2
ground.addImage(groundImage)
}
function draw(){
//set background color 
background("white");
//logging the y position of the trex
console.log(trex.y)
//jump when space key is pressed
if(keyDown("space")){
trex.velocityY = -10;
}
//Velocity of sprites for movement
trex.velocityY = trex.velocityY + 0.5;
ground.velocityX=-2
if(ground.x<0){
ground.x=ground.width/2
}
//stop trex from falling down
trex.collide(ground)
drawSprites();
}