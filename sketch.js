var backimg;
var player,playerimg;
var score=0;
var bs;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var coin,shark;
var sharki,coini;
var coing,sharkg;
var reset
var goi;

function preload(){
  backimg=loadImage("background.jpg")
  playerimg=loadImage("player.png")
  bs=loadSound("bs.wav")
  sharki=loadImage("shark.png")
  coini=loadImage("coin.png")
  goi=loadImage("game over.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  player=createSprite(windowWidth-1210,windowHeight-95,20,20);
  player.addImage(playerimg)
  player.scale=0.25
 // player.debug=true
  player.setCollider("circle",0,0,160)
  coing= new Group();
  sharkg= new Group();
  score=0
}

function draw() {
  background(backimg)
  if (gameState===PLAY){ 
  if(keyDown("UP_ARROW")){
    player.y=player.y-3
  }
  if(keyDown("DOWN_ARROW")){
    player.y=player.y+3
  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-3
  }
  
  if(World.frameCount%80===0){
    shark =createSprite(displayWidth-450,Math.round(random(450,600)),20,20)
  shark.velocity.x=-2
  shark.velocityX = -(6 + 3*score/100);
  shark.lifetime = 500;
  shark.addImage(sharki)
  shark.scale=0.2
  //shark.debug=true
  shark.setCollider("circle",0,0,160)
  sharkg.add(shark)
  }

  if(World.frameCount%50===0){
     coin =createSprite(displayWidth-370,Math.round(random(450,550)),20,20)
  coin.velocity.x=-3
  coin.velocityX = -(5 + 3*score/100);
  coin.lifetime = 500;
  coin.addImage(coini)
  coin.scale=0.25
  //coin.debug=true
  coin.setCollider("circle",0,0,125)
  coing.add(coin)
  }

  if(coing.isTouching(player)){
    score = score+1
    coing.destroyEach();
  }

  if(sharkg.isTouching(player)){
    gameState=END
  }

  if(score===50){
    gameState=END 
  }


  fill("black")
textSize(30)
text("COINS:"+score,windowWidth-250,windowHeight-600)
}

else if(gameState===END){
  coing.destroyEach();
  sharkg.destroyEach();
  var go=createSprite(windowWidth-500,windowHeight-300,20,20)
  go.addImage(goi)
  go.scale=0.5
  fill("black")
  textSize(30)
  text("COINS SCORED ="+ score,windowWidth-500,windowHeight-600)
   
}
  drawSprites()
}


