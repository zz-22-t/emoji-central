let img0;

function preload() {
  img0 = loadImage("smile_2.png");
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  //face
  fill('yellow')
  noStroke()
  ellipse(200,200,300,300);
  
  //eyes
  fill('black')
  ellipse(150,250,20,40);
  ellipse(250,250,20,40);
  
  //mouth
  //stroke(0)
  //strokeWeight(3)
  //noFill()
  //ellipse(200,150,40,40);
  //line(275, 150, 125, 150 );
  //fill(255, 255, 0);
  //arc(200, 200, 200, 200, PI, TWO_PI);
  //rotate(180);
  image(img0, 120, 110, 150, 60);
  
}
