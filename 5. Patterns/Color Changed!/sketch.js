function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for(let i=0; i < 8; i++){
    fill(40*i, 100, 90);
    rect(0, 0, 45, 400);
    translate(50, 0);
  }
}