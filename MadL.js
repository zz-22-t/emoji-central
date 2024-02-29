function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
        stroke('rgb(61,32,11)')
  //face
          fill('rgb(161,110,24)')
      noStroke();
  ellipse(200,200,300,300); //base
          fill('rgb(175,120,27)')
    ellipse(200,200,290,290);// gradiant1 
          fill('rgb(189,129,28)')
      ellipse(200,200,280,280); //gradiant2
          fill('rgb(202,138,31)')
          ellipse(200, 200, 270, 270); //gradiant3
  
  
  
  
  //light brown part for the monkey
          noStroke(0)
             fill('rgb(241,199,140)'); 
          //for the eyes
      ellipse(260,180,140,150) //right eye
      ellipse(140,180,140,150) //left eye
          //for the mouth
      ellipse(200,280,140,138)
      
  
  //eyes 
      fill('rgb(15,15,15)');
  ellipse(150,180,35,55);
  ellipse(250,180,35,55);
  
  //nose
  ellipse(210,240,10,10); //left
  ellipse(190,240,10,10); //right
  
  //mouth
         fill('rgb(233,131,149)')
      stroke('rgb(212,109,127)')
    arc(200, 280,110,80,0,PI);
 
  //earsfill('rgb(189,133,39)')ellipse(70,70,118,110); //left ear
  
  //hear no evil hands
        
      noStroke()
     fill('rgb(243,206,154)');
    rotate(radians(5)); //left
  ellipse(50, 140, 70, 160); //left hand
    rotate(radians(-5));
  ellipse(360,140,70,160); //right hand

        fill('rgb(189,133,39)');
      noStroke()
    translate(20, 0);
  rotate(radians(10));
  rect(20, 200, 60, 250, 20); //left arm
  
 // translate(90,-100)
  rotate(radians(-15));
  rect(290, 230, 60, 250, 20); //right arm
  
  
}
