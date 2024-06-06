let img;

function preload() {
  img = loadImage("Angry-Gatito.jpeg");
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0);
  image(img, 40, 190);
  filter(INVERT)
  image(img, 40, 0);
}