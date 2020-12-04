function setup() {
  createCanvas(1700,800);
 fixedRect = createSprite(600, 400, 50, 80);
 fixedRect.shapeColor = "red";
 movingRect = createSprite(400, 200, 80, 30); 
 movingRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x=world.mouseX;
  fixedRect.y=world.mouseY;
  drawSprites();
}