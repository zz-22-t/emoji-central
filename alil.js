function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(300);
  let e_X1 = map(mouseX, 0, 400, 120, 132)
  let e_X2 = map(mouseX, 0, 400, 263, 275)

  //face
  fill("gold");
  strokeWeight(5);
  ellipse(200, 200, 300, 300);

  //mouth
  noFill();
  strokeWeight(10);
  line(165, 300, 235, 300);
  
  //eyes
  fill("white");
  strokeWeight(5);
  ellipse(126, 200, 105, 105);
  ellipse(269, 200, 105, 105);

  //pupils
  fill("black");
  ellipse(e_X1, 168, 32, 32);
  ellipse(e_X2, 168, 32, 32);
 
}

