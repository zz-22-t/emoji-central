function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(211, 211, 211);

 noStroke();
  fill(0)
text(mouseX+","+ mouseY, 20,20)
  
//face fill
fill(250, 190, 0);ellipse(200,200,400);

//tears  
fill(90, 124, 200); rect(75, 165, 75, 190); 
rect(250, 165, 75, 190);
triangle(250, 335, 325, 353, 250, 392);
 push()//Tear Edge Bottom Left
  angleMode(DEGREES);
  rotate(355.1);
  arc(247, 341, 121,121,40,121, HALF_PI, PI);  pop()
  
//end Tears

//Eyes

//left eyebrow
push(); // Start a new drawing state
translate(100, 100);
angleMode(DEGREES);
rotate(145);
fill(169, 111, 45); ellipse(0,0, 100, 20); 

pop();

//left bottom tear help me
push(); // 
fill(90, 124, 200);
translate(115, 370);
angleMode(DEGREES);
rotate(-152);
ellipse(0,0, 78, 20); 
pop();

//right eyebrow
push(); // 
fill(0, 0, 0);
translate(300, 100);
angleMode(DEGREES);
rotate(-145);
fill(169, 111, 45);ellipse(0,0, 100, 20); 
pop(); 

//right eye
push(); // 
translate(120, 160);
fill(169, 111, 45);
ellipse(0,0, 100, 20); 
pop();
 
//left eye
push();
translate(280,160);
fill(169, 111, 45);
ellipse(0,0, 100, 20); 
pop()

///Outter Mouth
push(); 
translate(200,300);
fill(0, 0, 0);
ellipse(0,0, 75,100); 
pop();

//Inner Mouth
push(); 
translate(200,295);
fill(255,255,255);
ellipse(0,0, 55,80); 
pop();
 
  
}
