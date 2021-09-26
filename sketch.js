var player, playerImg
var ground, groundImg
var roof, roofImg
function preload(){
  playerImg = loadImage("Sprites/player.PNG")
  //groundImg = loadImage("Sprites/sprite_0.png")
  groundImg = loadImage("se3.png")
}

function setup(){
  createCanvas(1000, 800)
  player = createSprite(100, 500, 20, 20)
  player.addImage(playerImg)

  player.scale = 0.1

  ground = createSprite(500, 280, 1200, 25)
  ground.addImage(groundImg)
  ground.scale = 4

  
  roof = createSprite(500, 20, 1200, 25)
}

function draw(){
  background("turquoise")
  
  ground.velocityX =ground.velocityX + -0.2
  if (ground.x < 0){
    ground.x = ground.width/1.5
    roof.x = roof.width/1.5
  }
  player.collide(ground)
  

   var x = Math.round(random(1, 10 ))

  /*if (x<2.5){
    player.velocityY = player.velocityY-2
  }
  if (x>2.5 && x<5){
    player.velocityY = player.velocityY-1
  }

  if (x<2.5){
    player.velocityY = player.velocityY-1
  }

  if (x>5 && x<7.5){
    player.velocityY = player.velocityY+1
  }

  if (x>7.5){
    player.velocityY = player.velocityY+2
  }
  if (keyDown(UP_ARROW)){
    player.velocityY = -5
  }

  if (keyDown(DOWN_ARROW)){
    player.velocityY = 5
  }*/
  //player.velocityY = player.velocityY+0.8

  console.log(player.y)
  drawSprites()
}