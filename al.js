function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
   let c0= color(108,65,9); //stroke color
  
  //face
  noStroke();
  fill(255, 219, 86);
  ellipse(200,200,300,300);
  
  //eye1
  fill(157, 97, 22);
  stroke(c0);
  strokeWeight(2);
  ellipse(150, 170 ,45);
  
  //eye2
  strokeWeight(2);
  stroke(c0);
  fill(157,97,22);
  ellipse(width-150, 170, 45);
  
  
  //eye cut
  fill(255, 219, 86);
  noStroke();
  ellipse(150,190,45);
  ellipse(width-150, 190, 45);
  
  //mouth
  strokeWeight(5);
  stroke(c0);
  noFill();
  arc(200,150,220,290, QUARTER_PI, PI-QUARTER_PI);
  
  
  //tounge
  noStroke();
  fill(252, 126, 197);
  ellipse(200, 320, 65);
  fill(252,126,197);
  rect(170.5, 280, 60, 50);
  
  //tounge line
  strokeWeight(2);
  stroke(166, 35, 57);
  line(200, 280, 200, 330);
