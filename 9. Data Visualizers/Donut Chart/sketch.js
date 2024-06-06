var numbers = [20, 50, 40, 30, 100, 90, 30];
function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(220);
  var diameter = 250;
  var lastAngle= 0;

  for (var i= 0; i< numbers.length; i++) {
    var n = numbers[i];
    var c = map(n, 0, max(numbers), 0, 100);
    var v = 360*noise(1)
    
    fill(v, 100, c);

    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(n));

    lastAngle += radians(n);
  }
  fill("white")
  circle(200, 200, 150)
}