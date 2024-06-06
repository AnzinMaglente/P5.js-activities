var bubbles = [];
var value = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var Bubble = (function () {

    function Bubble(pos, vel, col, radius) {
        this.pos = pos;
        this.vel = vel;
        this.col = col;
        this.radius = radius;
    }

    Bubble.prototype.show = function () {
        noStroke();
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }

    Bubble.prototype.update = function () {
        this.pos.add(this.vel);
    }

    return Bubble;
    
})();

function mousePressed() {
    const pos = createVector(mouseX, mouseY) // x, y    
    const vel = createVector(random(-4,4),
                             random(-4,4));
    const col = (color(
        random(0,255),
        random(0,255),
        random(0,255)
    ));
    const radius = random(50,150);

    bubbles.push(
        new Bubble(pos,vel,col,radius)
    );
}

function draw() {
  valueincrease();
  
  background(value, 100, 100);
  
  bubbles.forEach((bubble) => {
        bubble.update();
        bubble.show();
    });
}

function valueincrease() {
  value += 1;

  if (value > 360) {
    value = 0;
  }
}