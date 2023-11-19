function Firework() {
    this.hue = random(255);
    this.firework = new Particle(random(width), height, this.hue, true);
    this.exploded = false;
    this.particles = [];

    this.done = function () {
        if (this.exploded && this.particles.length === 0) {
            return true;
        }
        return false;
    }

    this.update = function () {
        if (!this.exploded) {
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            } else {
                this.firework.applyForce(gravity);
                this.firework.update();
            }
        }
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update();
            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
    }

    this.explode = function () {
        for (let i = 0; i < random(50, 100); i++) {
            let p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hue, false);
            this.particles.push(p);
        }
    }

    this.show = function () {
        if (!this.exploded) {
            this.firework.show();
        }
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].show();
        }
    }
}

function Particle(x, y, hue, firework) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifetime = 255;
    this.hue = hue;
    if (this.firework) {
        this.vel = createVector(0, random(-height / 50, -height / 60));
    } else {
        let hx = 16 * pow(sin(angle), 3);
        let hy = -1 * (13 * cos(angle) - 5 * cos(2 * angle) - 2 * cos(3 * angle) - cos(4 * angle))
        this.vel = createVector(hx, hy);
        angle += 1;
    }
    this.acc = createVector(0, 0);

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.update = function () {
        if (!this.firework) {
            this.vel.mult(0.85);
            this.lifetime -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.done = function () {
        if (this.lifetime < 0) {
            return true;
        }
        return false;
    }

    this.show = function () {
        colorMode(HSB);
        if (!this.firework) {
            strokeWeight(2);
            stroke(this.hue, 255, 255, this.lifetime);
        } else {
            strokeWeight(4);
            stroke(this.hue, 255, 255);
        }
        point(this.pos.x, this.pos.y);
    }
}