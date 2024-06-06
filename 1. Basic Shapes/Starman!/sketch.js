function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("darkred")
  const rec = color("#EBBF0D");
  const elp = color("white");
  const trione = color ("black")
  fill(rec);
  noStroke();
  rect(20, 20, 360, 360, 20)
  fill(elp);
  stroke(4);
  ellipse(200, 200, 300, 300)
  fill(trione)
  noStroke();
  triangle(190, 145, 270, 67, 260, 180)
  triangle(260, 180, 345, 240, 260, 250)
  triangle(260, 250, 260, 340, 190, 270)
  triangle(190, 270, 90, 300, 140, 210)
  triangle(140, 210, 80, 110, 190, 145)
  ellipse(190, 190, 20, 20)
  ellipse(240, 210, 20, 20)
  triangle(180, 240, 210, 250, 210, 220)
}