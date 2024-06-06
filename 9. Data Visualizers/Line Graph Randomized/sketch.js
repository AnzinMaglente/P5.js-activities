var colors;
var H = 400;
function setup() {
  createCanvas(560, H);
  colors = d3.range(H).map(i => d3.interpolateWarm(norm(i, 0, H)))
}

function draw() {
  background(0);
  noFill();
  stroke(255);

  beginShape();
  for (var x = 0; x < width; x++) {
	var nx = map(x, 0, width, 0, 10);
	var y = height * noise(nx);
    stroke(colors[Math.floor(map(y, H, 10, H, 0))] );
	vertex(x, y);
  }
  endShape();
}