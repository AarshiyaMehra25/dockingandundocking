var iss,spacecraft,hadDocked;
var bgImg;

function preload(){
  bgImg=loadImage("images/spacebg.jpg");
  iss_img = loadImage("images/iss.png");
  spacecraft1_img = loadImage("images/spacecraft1.png");
  spacecraft2_img = loadImage("images/spacecraft2.png");
  spacecraft3_img = loadImage("images/spacecraft3.png");
  spacecraft4_img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(1200,600);
  iss=createSprite(400,200,10,10);
  iss.addImage("iss_img",iss_img);
  spacecraft=createSprite(385,420,10,10);
  spacecraft.addImage("spacecraft1_img",spacecraft1_img);
  spacecraft.addImage("spacecraft2_img",spacecraft2_img);
  spacecraft.addImage("spacecraft3_img",spacecraft3_img);
  spacecraft.addImage("spacecraft4_img",spacecraft4_img);
  spacecraft.scale=0.3;
  
}

function draw() {
  background(bgImg);
  if(keyDown("up_arrow")){
    spacecraft.y=spacecraft.y-5;
    spacecraft.changeImage("spacecraft2_img",spacecraft2_img);
  }
  if(keyDown("down_arrow")){
    spacecraft.y=spacecraft.y+5;
    spacecraft.changeImage("spacecraft1_img",spacecraft1_img);
  }
  
  if(keyDown("left_arrow")){
    spacecraft.x=spacecraft.x-5;
    spacecraft.changeImage("spacecraft3_img",spacecraft3_img);
  }
  
  if(keyDown("right_arrow")){
    spacecraft.x=spacecraft.x+5;
    spacecraft.changeImage("spacecraft4_img",spacecraft4_img);
  }
  hit();
  drawSprites();
}

function hit(){
  if(spacecraft.isTouching(iss)){
    hasDocked=true;
    textSize(25);
    fill("white");
    text("Docking succesful!",500,500);
  }
}