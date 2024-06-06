var numFrames = 8;
var frame = 0;
var images = new Array(numFrames);

function preload() {
  images[0] = loadImage("1-osha.png");
  images[1] = loadImage("2-osha.png");
  images[2] = loadImage("3-osha.png");
  images[3] = loadImage("4-osha.png");
  images[4] = loadImage("5-osha.png");
  images[5] = loadImage("4-osha.png");
  images[6] = loadImage("3-osha.png");
  images[7] = loadImage("2-osha.png");
}

function setup() {
  createCanvas(400, 400);
  frameRate(16);
  background(255);
}

function draw() {
  background(255);
  frame++;
  if (frame == numFrames) frame = 0;
  image(images[frame], mouseX-50, mouseY-200);
}