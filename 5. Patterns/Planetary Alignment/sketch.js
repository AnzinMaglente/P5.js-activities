function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (let i=0; i<7; i++) {
    fill(30*i, 20, i+70);
    translate(p5.Vector.fromAngle(millis() / 500, 30));
    circle(80, 150, 200/i)
    translate(40,20)
    }
}