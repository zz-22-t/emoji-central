function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background('rgb(245,243,252)');
  // face
  fill('rgb(255,215,0)');
  ellipse(200,200,300,300);
  
  // eyes
  fill('rgb(109,71,58)')
  ellipse(145,170,30,35);
  
  ellipse(255,170,30,35);
  
  
  // mouth
  fill('white')
  noStroke();
  rect(125,225,150,50);
  ellipse(125,250,50,50);
  // arc(50, 50, 50, 50, 0, PI, OPEN);
  // arc(posX, posY , sizeW, sizeH, angle + 90, angle - 90);
  // drawArc(width/2, height/2, width/4, PI/2+r, 3 * PI / 2+r);
  ellipse(275,250,50,50);
  fill('lightgrey');
  rect(135,225,5,50);
  rect(178,225,5,50);
  rect(222,225,5,50);
  rect(265,225,5,50);
  rect(100,248,200,5);

  //ellipse(200,250,150,50);
}
