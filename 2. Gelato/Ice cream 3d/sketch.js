function setup() {
  createCanvas(400, 400, WEBGL);
  stroke(0);
}

function draw() {
  background("blue");
  orbitControl();
  pc = color("pink");
  pctw = color ("white")
  pctr = color("cyan")
  pcfr = color("brown");
  pcfi = color("red")
  pcsi = color("rgb(228,215,114)");
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  
  
  //Base of Icecream
  fill(pcsi);
  stroke(3)
  translate(0, 65);
  cone(40, 100);
  fill(pctw);
  noStroke();
  translate(0, -65);
  sphere(40);
  fill(pc);
  translate(0, -35);
  sphere(40);
  fill(pctr);
  translate(0, -35);
  sphere(40);
  
  //Toppings
  fill(pcfi);
  translate(16, -43);
  sphere(14);
  fill(pcfr)
  translate(5, -13);
  rotate(20)
  cylinder(2,10);
  translate(30, 5);
  rotate(60);
  cylinder(2,10);
  translate(30, 5);
  rotate(60);
  cylinder(2,10);
  translate(40, 20, -35);
  rotate(100);
  cylinder(2,10);
  translate(-5, 30, 12);
  rotate(200);
  cylinder(2,10);
  translate(-5, 30, 12);
  rotate(200);
  cylinder(2,10);
  translate(35, 20, -25)
  rotate(100)
  cylinder(2,10);
  translate(-5, 10, -3);
  rotate(100);
  cylinder(2,10);
  translate(-55, 0, 10);
  rotate(100);
  cylinder(2,10);
  translate(30, 30, 60);
  rotate(100);
  cylinder(2,10);
  translate(30, 30, 5);
  rotate(100);
  cylinder(2,10);
  translate(0, 5);
  rotate(100);
  cylinder(2,10);
  translate(30, 10);
  rotate(100);
  cylinder(2,10);
  translate(35, -40, -20);
  rotate(100);
  cylinder(2,10);
  translate(0, -34, -30);
  rotate(100);
  cylinder(2,10);
}