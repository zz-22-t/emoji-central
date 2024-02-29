let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(400, 400,);
  
}

function draw() {

  background;
  //face

  fill("#ffd800");
  ellipse(200, 200, 300, 300);

  fill("white");
  ellipse(150, 150, 70, 70);
  ellipse(250, 150, 70, 70);

  //eyes
  fill("brown");

  ellipse(165, 140, 30, 30);
  ellipse(265, 140, 30, 30);
  
  

  //mouth
  strokeWeight(7);
  line(160, 280, 240, 280);

  let t = frameCount / 100; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(1); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function () {
    
    ellipse(this.posX, this.posY, this.size);
  };
}
