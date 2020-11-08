var Ground, GroundImg;

var player,edges;
function preload() {

  GroundImg = loadImage("Images/ground.png")
  


}
function setup() {
  createCanvas(displayWidth, displayHeight - 100);

  Ground = createSprite(200, displayHeight - 90, displayWidth - 800, 70);
  Ground.scale = 0.7
  Ground.addImage(GroundImg);
  Ground.setCollider("rectangle", -40, 0, Ground.width , Ground.height + 100)
  Ground.debug = true
  edges= createEdgeSprites()

  player = createSprite(200, displayHeight - 360, 40, 70);
}

function draw() {
  background("lightblue");
  drawSprites();

  if (keyDown("right")) {

    player.x = player.x + 5

  }

  if (keyDown("left")) {

    player.x = player.x - 5

  }

  if (keyDown("space")) {

    player.velocityY = -10

  }

  player.velocityY = player.velocityY + 0.8;
  player.collide(Ground)
  player.collide(edges[0])
  player.collide(edges[2])
}