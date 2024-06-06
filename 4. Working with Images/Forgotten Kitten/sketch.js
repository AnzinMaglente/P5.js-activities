let img;

function preload() {
  img = loadImage("missing-gatito.jpeg");
}

function setup() {
  createCanvas(300, 220);
  background(0);
}

function draw() {
  background(0);
  image(img, 0, 0);
  filter(BLUR, mouseX-60)
}