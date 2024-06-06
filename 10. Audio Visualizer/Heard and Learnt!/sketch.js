var song, vol, amp, button, y;

var volHistory = [];

function preload() {
  song = loadSound("massobeats - gingersweet cut.mp3")
}

function toggleSong() {
  if (song.isPlaying()){
    song.pause();
  }else {
    song.play();
  }
}

function setup() {
  createCanvas(400, 400);
  song.play();
  button = createButton("Toggle");
  button.mousePressed(toggleSong);
  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  vol = amp.getLevel();
  volHistory.push(vol);
  noFill();
  stroke(255)
  strokeWeight(1)
  beginShape();
  for (var i = 0; i < volHistory.length; i++){
    y = map(volHistory[i], 0, 1, height, 0);
    vertex(i, y)
  }
  endShape();
  strokeWeight(3)
  for (i = 0; i < volHistory.length; i++){
    y = map(volHistory[i], 0, 1, height, 0)/1.5;
    point(i, y);
  }
  
  if (volHistory.length > width){
    volHistory.splice(0, 1);
  }
}