function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // let eyeDiameter=

}

// let eyeCenterX=mouseX-200;


function draw() {
  background('blue');

  hair();

  // head
  fill('yellow');
  noStroke();
  ellipse(200, 200, 350);


  // left eye
  eyes(-80, 30, 60, 25);
  // right eye
  eyes(60, -20, 80, 45);

  mouth();





  text(mouseX + ',' + mouseY, 20, 20);
}

function eyes(x, y, eyeBallSize, pupilSize) {




  let d = dist(x, y, mouseX - 200, mouseY - 150);
  let pupilColor = 'black';
  let eyeColor = 'white';
  if (d < eyeBallSize) {
    pupilColor = 'orange';
    eyeColor='purple';

  }


  push();
  translate(200, 150);

  strokeWeight(3);
  stroke('blue');
  fill(eyeColor);
  ellipse(x, y, eyeBallSize);


  translate(x, y);
  rotate(mouseX);

  fill(pupilColor);
  noStroke();
  ellipse(0, 15, pupilSize);


  pop();


}

function mouth(){
    stroke('pink')
    fill('brown')
    strokeWeight(5);
  
    push();
    translate(220,250);
    rotate(-20);
    // arc(250, 300, 150, 150, 180, PI, CHORD);

    // bottom lip
    arc(0, 0, 150, 150, 0, 180, CHORD);

    if (mouseY<250){
      tongue(30,30,40); 
    } else{
      tongue(100,100,120)
    }



    // top lip
    stroke('pink')
    strokeWeight(4);
    arc(0,0,150,50,0,180);


    // mask
    noStroke()
    fill('yellow')
    ellipse(0,-2,150,50)

    pop()
  
}

function tongue(rectHeight,circleHeight,lineHeight){
  // tongue
  fill('orange');
  noStroke();
  rect(-40,0,80,rectHeight);
  arc(0,circleHeight,80,80,0,180);

  // tongue mark
  stroke('brown');
  strokeWeight(4);
  line(0,20,0,lineHeight);


}

function hair(){
  fill('brown');
  stroke('orange');

  // left ear
  beginShape()
  vertex(30,163);
  vertex(10,108);
  vertex(40,130)
  endShape()

  // right ear
  beginShape();
  vertex(297,55);
  vertex(265,6);
  vertex(262,38);
  endShape();
}





