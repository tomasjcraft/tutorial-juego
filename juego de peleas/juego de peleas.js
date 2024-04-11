var tobbycraft, tobbycraft1img,tobbycraft2img,tobbycraft4img,tobbycraft5img
var tierras,tierrasimg
var cuchillo1,cuchillo2,cuchillo3,cuchillo1img,cuchillo2img,cuchillo3img
var donnyviejo,donnyviejoimg
var vida
var formulario;
var gameState = 0



function preload(){
  backgroundImage = loadImage("assets/inicio_de_juego2.png")
  tobbycraft1img=loadImage("assets/tobby prime.png")
  tobbycraft2img=loadImage("assets/tobbycraft golpe1.png")
  tobbycraft3img=loadImage("assets/tobbycraft golpe2.png")
  tobbycraft4img=loadImage("assets/tobbycraft golpe3.png")
  tobbycraft5img=loadImage("assets/tobby lansando cuchillo.png")
  tierrasimg=loadImage("assets/tierras.png")
  cuchillo1img=loadImage("assets/cuchillo.png")
  cuchillo2img=loadImage("assets/cuchillo.png")
  cuchillo3img=loadImage("assets/cuchillo.png")
  donnyviejoimg=loadImage("assets/donny viejo.png")
  
}


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  formulario = new Form();
  tobbycraft=createSprite(200, 700, 25, 50)
  tobbycraft.addImage("1",tobbycraft1img)
  tobbycraft.addImage("2",tobbycraft2img)
  tobbycraft.addImage("3",tobbycraft3img)
  tobbycraft.addImage("4",tobbycraft4img)
  tobbycraft.addImage("5",tobbycraft5img)
  tobbycraft.scale=2,0
  donnyviejo=createSprite(600, 670, 25, 50)
  donnyviejo.addImage(donnyviejoimg)
  donnyviejo.scale=2,0
  
  
  tierras=createSprite(400, 800, 800,50)
  tierras.addImage(tierrasimg)
  tierras.scale=10,0
  cuchillo1=createSprite(200,200,20,20)
  cuchillo1.addImage(cuchillo1img)
  cuchillo1.scale=2,0
  cuchillo2=createSprite(200,200,20,20)
  cuchillo2.addImage(cuchillo2img)
  cuchillo2.scale=2,0
  cuchillo3=createSprite(200,200,20,20)
  cuchillo3.addImage(cuchillo3img)
  cuchillo3.scale=2,0
  
  vida=100
  
}

function draw(){
  background(backgroundImage);
  camera.position.x=tobbycraft.position.x;
  text("vida"+ vida,300,30)
  if (gameState==0){
    
    formulario.displey();
  }
  else if(gameState==1){


  if(keyDown("d")){
    tobbycraft.x=tobbycraft.x+=10
  }  

  if(keyDown("w")){
    tobbycraft.y=tobbycraft.y-=10
  }  

  if(keyDown("a")){
    tobbycraft.x=tobbycraft.x-=10
  }  

  if(keyDown("s")){
    tobbycraft.y=tobbycraft.y+=10
  }
  if(keyWentDown("1")){
    tobbycraft.changeAnimation("2",tobbycraft2img)
  }
  else if(keyDown("1")){
    setTimeout(function(){
      tobbycraft.changeAnimation("1",tobbycraft1img)
     }, 1500)
  }

  if(keyWentDown("2")){
    tobbycraft.changeAnimation("3",tobbycraft3img)
  }
  else if(keyDown("2")){
    setTimeout(function(){
      tobbycraft.changeAnimation("1",tobbycraft1img)
     }, 1500)
  }

  if(keyWentDown("3")){
    tobbycraft.changeAnimation("4",tobbycraft4img)
  }
  else if(keyDown("3")){
    setTimeout(function(){
      tobbycraft.changeAnimation("1",tobbycraft1img)
     }, 1500)
  }

  if(keyWentDown("4")){
    tobbycraft.changeAnimation("5",tobbycraft5img)
    cuchillo1.y=tobbycraft.y;
    cuchillo1.x=tobbycraft.x;
    cuchillo1.velocityX=5;
    cuchillo1.velocityY=-2;
    cuchillo2.y=tobbycraft.y;
    cuchillo2.x=tobbycraft.x;
    cuchillo2.velocityX=5;
    cuchillo3.y=tobbycraft.y;
    cuchillo3.x=tobbycraft.x;
    cuchillo3.velocityX=5;
    cuchillo3.velocityY=2;
  }
  else if(keyDown("4")){
    setTimeout(function(){
      tobbycraft.changeAnimation("1",tobbycraft1img)
     }, 1500)
  }
  tobbycraft.velocityY = tobbycraft.velocityY + 0.4
  tobbycraft.collide(tierras)
  tobbycraft.collide(donnyviejo)

  donnyviejo.velocityY = donnyviejo.velocityY + 0.4
  donnyviejo.collide(tierras)
  drawSprites()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

