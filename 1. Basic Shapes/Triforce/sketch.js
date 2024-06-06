function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("navy");
  const nc = color("white");
  const nctw = color("black");
  const pc = color("red")
  const pctw = color("yellow");
  const pctr = color("brown");
  const pcfr = color("blue")
  fill(pc);
  circle(200,200, 100)
  fill(pctw);
  triangle(200, 130, 150, 200, 250, 200);
  triangle(200, 270, 150, 200, 250, 200);
  fill(pctr);
  rect(120, 175, 160, 50);
  fill(nc);
  rect(10, 0, 100, 400);
  rect(290, 0, 100, 400);
  fill(pc)
  ellipse(60, 200, 40, 40)
  ellipse(340, 200, 40, 40)
  fill(nc)
  ellipse(200, 200, 40, 40)
  fill(pcfr)
  ellipse(340, 70, 40, 40)
  ellipse(60, 70, 40, 40)
  fill(pctw)
  ellipse(60, 330, 40, 40)
  ellipse(340, 330, 40, 40)
}