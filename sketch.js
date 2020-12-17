var fixedrectangle,movingrectangle;

function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400, 200, 50, 50);
  movingrectangle=createSprite(500, 200, 100, 50);
  fixedrectangle.shapeColor="Green"
  movingrectangle.shapeColor="Green"
  fixedrectangle.debug=true;
  movingrectangle.debug=true;
}

function draw() {
  background(180);  
  movingrectangle.x=mouseX
  movingrectangle.y=mouseY

  if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2&&
    movingrectangle.y-fixedrectangle.y<fixedrectangle.height/2+movingrectangle.height/2&&
    fixedrectangle.y-movingrectangle.y<fixedrectangle.height/2+movingrectangle.height/2){
    fixedrectangle.shapeColor="Blue"
  movingrectangle.shapeColor="Blue"

  }
  else{
    fixedrectangle.shapeColor="Green"
  movingrectangle.shapeColor="Green"
  }
  drawSprites();
}