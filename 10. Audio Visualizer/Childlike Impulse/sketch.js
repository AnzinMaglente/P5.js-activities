var song, vol, amp, x, y, r;

var volHistory = Array(360).fill(0)

function preload() {
  song = loadSound("Burgundy - All Night cut.mp3")
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  song.play();
  amp = new p5.Amplitude();
}


function draw() {
  background(220);
  vol = amp.getLevel();
  volHistory.push(vol);
  fill('rgb(67,30,144)')
  translate(width/2, height/2)
  beginShape();
  for (var i = 0; i < 360; i++){
    r = map(volHistory[i], 0, 1, 10, 350);
    x = r * cos(i)
    y = r * sin(i)
    vertex(x, y)
  }
  endShape();
  
  fill('rgb(38,21,126)')
  beginShape();
  for (i = 0; i < 360; i++){
    r = map(volHistory[i], 0, 1,10, 280);
    x = r * cos(i)
    y = r * sin(i)
    vertex(x, y)
  }
  endShape();
  
  fill('rgb(27,10,119)')
  beginShape();
  for (i = 0; i < 360; i++){
    r = map(volHistory[i], 0, 1,10, 190);
    x = r * cos(i)
    y = r * sin(i)
    vertex(x, y)
  }
  endShape();
  
  fill('rgb(5,5,87)')
  beginShape();
  for (i = 0; i < 360; i++){
    r = map(volHistory[i], 0, 1,10, 100);
    x = r * cos(i)
    y = r * sin(i)
    vertex(x, y)
  }
  endShape();
  
  if (volHistory.length > width){
    volHistory.splice(0, 1);
  }
}