var seaImage  ;
var sea;
var ship;

function preload(){
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
   sea.addImage(seaImg);
  
   sea.scale=0.3;

  ship = createSprite(100,200,50,30);
  ship.addAnimation("ship10",shipImg1);
  ship.scale=0.25;

 
}

function draw() {
  background("blue");

  sea.velocityX = -5;

  if (sea.x < 0){
    sea.x = sea.width/8;
  }
 drawSprites();
}