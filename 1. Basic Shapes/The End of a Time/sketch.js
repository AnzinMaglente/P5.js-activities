function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  const nc = color("white")
  const nctw = color("black")
  const nctr = color("darkgray")
  const pc = color("red")
  const pctw = color("darkred")
  const pctr = color("rgb(218,18,18)")
  fill(nc);
  stroke(3);
  triangle(200, 50, 50, 300, 350, 300)
  fill(pc);
  ellipse(200, 150, 60, 40)
  fill(pctw)
  ellipse(200, 150, 30, 40)
  fill(nctw);
  ellipse(200, 150, 10, 20)
  noStroke();
  fill(pctr);
  triangle(105, 270, 170, 155, 210, 170);
  triangle(300, 270, 230, 155, 190, 170);
  triangle(106, 270, 300, 270, 200, 170);
  ellipse(202, 270, 193, 50);
  fill(nc);
  stroke(2);
  rect(180, 80, 20, 5)
  rect(210, 80, 10, 5)
  rect(196, 90, 30, 5)
  rect(168, 100, 20, 5)
  rect(200, 100, 10, 5)
  rect(223, 100, 10, 5)
  rect(213, 110, 15, 5)
  rect(173, 110, 30, 5)
  rect(233, 120, 10, 5)
  rect(193, 120, 20, 5)
  rect(158, 120, 20, 5)
  rect(223, 130, 15, 5)
  rect(150, 130, 15, 5)
  rect(243, 140, 15, 5)
  rect(143, 140, 5, 5)
  rect(162, 140, 10, 5)
  rect(155, 150, 15, 5)
  rect(230, 150, 20, 5)
  fill(nctw)
  ellipse(200, 250,110, 50)
  fill(pctw)
  ellipse(200, 250, 110, 40)
  fill(pc)
  ellipse(200, 259, 95, 20)
  fill(nc)
  rect(175, 40, 50, 50)
  ellipse(200, 100, 120, 20)
}