var fixedRect, movingRect,abc;
var box1, box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(900, 400, 50, 30);
  box2 = createSprite(900, 700, 80, 30);
  box1.velocityY = 1;
  box2.velocityY = -1;
  movingRect.velocityY = 1;
  fixedRect.velocityY = -1;
}

function draw() {
  background(0,0,0);  
 //box1.x = World.mouseX;
 //box1.y = World.mouseY;

  if(isTouching(box1, box2)){
    box1.shapeColor = "red";
    box2.shapeColor = "red";
  }else{
    box1.shapeColor = "green";
    box2.shapeColor = "green";
  }

  bounceOff(box1, box2);

bounceOff(movingRect, fixedRect);

  abc = addition();

  drawSprites();
}

