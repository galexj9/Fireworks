class Firework {
  constructor() {
    //physics stats
    this.pos = createVector(random(width), height - 10);
    this.vel = createVector(0, -random(12,18));
    this.acc = createVector(0, 0);
    //for the aesthetic
    this.hue = random(255);
    this.radius = 4;
    this.life = 0;
  }
  run() {
    //cause writing both update and draw is too much, why aren't they one function? IDK!!
    this.update();
    this.draw();
  }
  draw() { //supposed to draw things where they are but is sometimes just a little bitch
    fill(this.hue, 180, 200);
    ellipse(this.pos.x, this.pos.y, this.radius);
  }

  update() {
    this.life -= 0.5;  //this is just for the particles that super this
    //physics
    this.applyForce(gravity);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //clears out the acceleration
  }
  applyForce(force) { //why is this even a serpate function???? no one knows.
    this.acc.add(force);
  }

  checkDeath() { //no pulse
    if (this.vel.y > 2 ) {
      return true;
    } else {
      return false;
    }
  }
}
