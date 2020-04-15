var fixedrect, movingRect,rect1,rect2,rect3,rect4,edges;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 80);
  fixedrect.shapeColor = "green";
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  
  rect1=createSprite(200,200,10,50);
 rect2=createSprite(700,200,60,5);
  rect3=createSprite(300,100,10,90);
  rect4=createSprite(300,700,90,10)
  movingRect.velocityY = -5;
  fixedrect.velocityY = +5;
  rect1.velocityX=+5;
  rect2.velocityX=-5;
  rect3.velocityY=+3;
  rect4.velocityY=-3;
  rect1.shapeColor="blue"
  rect2.shapeColor="yellow"
  rect3.shapeColor="white"
  rect4.shapeColor="red"
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedrect);
bounceOff(rect1,rect2);
bounceOff(rect3,rect4);
bounceOff(rect1,movingRect);
bounceOff(rect1,fixedrect);
rect1.debug=true;
edges=createEdgeSprites();
rect1.bounceOff(edges);
rect2.bounceOff(edges);
rect3.bounceOff(edges);
rect4.bounceOff(edges);
fixedrect.bounceOff(edges);
movingRect.bounceOff(edges);
  drawSprites();
}
