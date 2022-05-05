var girl, boy
var girlImg, boyImg
var monster, monsterImg
var sword, swordImg
var bg, bg2
var bgImg, bg2Img
var player
var gameState=0

function preload(){
girlImg = loadAnimation("./assets/g1.jpg","./assets/g2.jpg","./assets/g3.jpg","./assets/g4.jpg","./assets/g5.jpg","./assets/g6.jpg","./assets/g7.jpg","./assets/g8.jpg","./assets/g9.jpg","./assets/g10.jpg","./assets/g11.jpg","./assets/g12.jpg","./assets/g13.jpg","./assets/g14.jpg",)

boyImg = loadAnimation("./assets/boy 1.jpg", "./assets/boy 2.jpg","./assets/boy 3.jpg","./assets/boy 4.jpg", "./assets/boy 5.jpg","./assets/boy 6.jpg","./assets/boy 7.jpg", "./assets/boy 8.jpg","./assets/boy 9.jpg", "./assets/boy 10.jpg")

swordImg = loadImage("./assets/sword.jpg")

monsterImg = loadAnimation("./assets/m1.jpg","./assets/m2.jpg","./assets/m3.jpg","./assets/m4.jpg","./assets/m5.jpg","./assets/m6.jpg","./assets/m7.jpg",)

bgImg = loadImage("./assets/bg.jpg")
bg2Img= loadImage("./assets/bg2.jpg")
}


function setup(){
createCanvas(800,800)





}

function draw() {
  
  

  if(gameState===0){
   background(bgImg);
    
    boyButton = createButton("Boy");
    girlButton = createButton("Girl");
    titleImg = createImg("./assets/title.png", "game title");
    greeting = createElement("h2");

    
    boyButton.position(width / 2 - 90, height / 2 - 20);
    girlButton.position(width / 2 + 90, height / 2 - 20);
    greeting.position(width / 2 - 300, height / 2 - 100);

    boyButton.mousePressed(boy)
    girlButton.mousePressed(girl)

}
}

function boy(){
    gameState=1
    player = createSprite(100,100)
    player.addAnimation(boyImg)
    
 }

 function girl(){
    gameState=1
    player = createSprite(100,100)
    player.addAnimation(girlImg)
    
 }
