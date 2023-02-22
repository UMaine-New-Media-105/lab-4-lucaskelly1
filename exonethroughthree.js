function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");

  addTriangle(20, 30, 50, 60, 200, 50);
  myEllipse(100, 300, 60);
  addShape(80, 110, 0.4);
  creeperJupiter()
}

function addTriangle(x1, y1, x2, y2, x3, y3, myColor) {
  fill(120, 100, 20);
  triangle(x1, y1, x2, y2, x3, y3);
}
function myEllipse(x, y, w, h) {
  fill(300, 100, 20);
  ellipse(x, y, w, h);
}

function addShape(x, y, size, myColor) {
  push();
  translate(x, y);
  scale(size);
  noStroke();

  beginShape();

  //Points for shape
  fill(50, 100, 20);
  vertex(0, 0);
  vertex(0, 250);
  vertex(200, 100);
  vertex(130, 225);
  vertex(300, 75);
  vertex(30, 100);
  vertex(20, 60);
  vertex(25, 10);
  endShape(CLOSE);
  pop();
}

function addCreeper(x,y,size) {
push();
  translate(x,y);
  scale(size);
  fill(0, 200, 0);

  if (mouseIsPressed > 0) {
    fill(0, 50, 0);
  } else {
    fill(0, 200, 0);
  }
  scale(.25)
  rect(0, 0, 500, 500);

  fill("black");
  
  rect(75, 75, 110, 110);
  rect(300, 75, 110, 110);
  rect(185, 180, 115, 200);
  rect(125, 250, 75, 200);
  rect(290, 250, 75, 200);
pop ();
  


}

function addplanet(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  noStroke();
  
  fill("lime");
  ellipse(50, 50, 100);
  // Northern latitude.
  fill("green");
  arc(50, 50, 100, 100, 200, -20, OPEN);
  // Southern latitude.
  fill("cyan");
  arc(50, 50, 100, 100, 30, 150, OPEN);
  // North pole.
  fill("yellow");
  arc(50, 50, 100, 100, 240, -60, OPEN);
  // South pole.
  fill("white");
  arc(50, 50, 100, 100, 60, 120, OPEN);
  pop();
}

function creeperJupiter(){
   
  if (mouseIsPressed > 0) {
    addCreeper(230,100,1);
  } else {
  addplanet(230, 100, 1.3);
  }
}
