var img, x, y ;
function preload() {
  img = loadImage('koala.jpeg');
  
}

function setup() {
  createCanvas(350, 220);
}

function draw() {
  background(0);
  x = mouseX ;
  y = mouseY ;
  image(img, 0, 0)
  var c  = get(x, y)
  fill(c)
  ellipse(x, y, 20, 20)
}