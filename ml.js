function setup() {
  createCanvas(400, 400)
}

function draw() {
  //background
  background(220)
  
  //shading circle orange
  noStroke()
  fill(255,182,85)
  ellipse(200,200,350)  
  
  noStroke()
  fill(255,195,85)
  ellipse(200,200,335)
  
  noStroke()
  fill(255,208,85)
  ellipse(200,200,320)
  
  noStroke()
  fill(255,215,85)
  ellipse(200,200,305)
  
  noStroke()
  fill(255,220,85)
  ellipse(200,200,290)
  
  //base circle yellow
  noStroke()
  fill(255,226,107)
  ellipse(200,200,275)
  
  
  //mouth
  fill(132, 88, 37)
  ellipse(200, 225, 210)
  
  //mouth mask
  fill(255,226,107)
  ellipse(200, 220, 250, 100)
  
  fill(255,226,107)
  ellipse(200, 180, 250, 180)
  
  //left eye
  fill(132, 88, 37)
  beginShape();
  vertex(105, 130)
  vertex(185, 180)
  vertex(105, 230)
  vertex(145, 180)
  endShape()
  
  //right eye
  fill(132, 88, 37)
  beginShape();
  vertex(295, 130)
  vertex(215, 180)
  vertex(295, 230)
  vertex(255, 180)
  endShape()
  
  //tounge
  fill(236, 108, 189)
  ellipse(200, 345, 85)
  
  fill(236, 108, 189)
  rect(157.5, 280, 85, 65)
  
  //tounge mask
  fill(132, 88, 37)
  ellipse(200, 280, 100, 15)
  
  //tounge line
  strokeWeight(3)
  stroke(132, 88, 37)
  line(200, 280, 200, 350)
  
  stroke(146, 64, 38)
  line(200, 320, 200, 350)
  
  /*
  //coordinate indicator
  fill(0)
  noStroke()
  text(mouseX + "," + mouseY, 20, 20)
  */
  
  
