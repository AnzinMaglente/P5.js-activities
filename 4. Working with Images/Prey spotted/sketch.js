let img;

function preload() {
  img = loadImage("owl.jpg")
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0);
  image(img, -400, -300);
  tint(mouseY, mouseX, mouseX)
}