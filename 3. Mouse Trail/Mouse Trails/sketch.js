let trail = []

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke('black');
  strokeWeight(4);
  trail.push(createVector(mouseX,mouseY))
  
  if (trail.length > 50) {
    trail.shift();
  }
  
  for (let i = 0; i < trail.length; i++) {
    const curr = trail[i]
    circle(curr.x, curr.y, i*1.5)
  }
}