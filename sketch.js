var fw, gravity;
var fireworks = [];
var particles = [];

function setup() {
  createCanvas(400, 600);
  colorMode(HSB);
  noStroke();
  gravity = createVector(0, 0.5);
}

function draw() {
  background(5);

  //creates new Fireworks
  if (fireworks.length < 4 && random() < .1) {
    fireworks.push(new Firework);
  }

  //loops through all the fireworks
  for (var i = 0; i < fireworks.length; i++) {
    fireworks[i].run(); //runs them
    //checks to see if they're dead
    if (fireworks[i].checkDeath()) {
      for (var j = 0; j < 25; j++) {
        //on death creates 25 particles
        particles.push(new Particle(fireworks[i].pos, fireworks[i].hue));
        }
        //removes the deceased firework
        fireworks.splice(i, 1);
      }
    }
    //loops through all the particles
    for(var i = 0; i < particles.length; i++){
      particles[i].run();
      //checks to see if they're dead and removes them
      if(particles[i].checkDeath()){
        particles.splice(i,1);
      }
    }
  }
