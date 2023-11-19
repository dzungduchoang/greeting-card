let wrapper = document.getElementById('wrapper');
let canvas;
let w = wrapper.clientWidth;
let h = wrapper.clientHeight;

let fireworks = [];
let gravity;
let angle = 0;

function setup() {
    canvas = createCanvas(w, h);
    canvas.parent(wrapper);
    canvas.position(0, 0);
    canvas.style("inset", 0);
    canvas.style('z-index', '-999');
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
}

function draw() {
    if (w != wrapper.clientWidth || h != wrapper.clientHeight) {
        w = wrapper.clientWidth;
        h = wrapper.clientHeight;
        resizeCanvas(w, h);
    }
    if (active) {
        colorMode(RGB);
        background(0, 25);
        if (random(1) < 0.03) {
            fireworks.push(new Firework());
        }
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();
            if (fireworks[i].done()) {
                fireworks.splice(i, 1);
            }
        }
    }
}