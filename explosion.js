/** class Explosion {
  constructor(pos, hue) {
    this.pos = createVector(pos);
    this.particles = [];
    let numpart = floor(random(30, 60));
    for (var i = 0; i < numpart; i++) {
      this.particles.push(new Particle(this.pos, hue));
    }
  }
  checkDeath() {
    if (this.particles.length <= 1) {
      return true;
    } else {
      return false;
    }
  }
  run() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].run();
    }
  }
} **/

class Particle extends Firework {
  constructor(pos, hue) {
    super(); //only adds an acceleration stat , necessary for super function calling
    this.acc = createVector(0,0);
    this.pos = pos;
    this.vel = p5.Vector.random2D().mult(10);
    //for the style
    this.hue = hue;
    this.radius = 2;
    this.life = 300;
  }
  checkDeath() { //if dead die
    if (this.life < 300) {
      return true;
    } else {
      return false;
    }
  }
  draw() { //draws the brightness as a mapped function of life value
    fill(this.hue, 180, map(this.life,0,300,0,255));
    ellipse(this.pos.x, this.pos.y, this.radius);
  }
}
