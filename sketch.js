var ground;
var trex ,trex_running;
function preload(){

trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");

  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,150,50,50);
  trex.addAnimation("running",trex_running);

  ground=createSprite(300,150,600,10);
  
 
}

function draw(){
  background("White")
  
  if (keyDown ("space") ) {
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(ground);

drawSprites();
}
