function preload() {
  img = loadImage("Derpy Doggo.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0);
  image(img, -150, -60);
  
  var a = map(mouseX, mouseY, width, 2, 20);
  
  filter(POSTERIZE, a)
}