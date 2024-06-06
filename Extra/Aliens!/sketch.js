var col= (179, 217, 255, 196);
var c= 130;
var d= 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  col, c, d = mouseX/4; 
  background(d,c, col);
  
  noStroke();
  
  const nc = color('white')
  const nctw = color('black')
  const pc = color('green')
  const pctw = color('lightblue')
  const pctr = color('lightgrey')
  
  fill(nc)
  
  ellipse(mouseX - 206, 186, 100, 55);
  ellipse(mouseX - 160, 175, 120, 75);
  ellipse(mouseX - 150, 195, 120, 75);
  
  ellipse(mouseX + 56, 36, 100, 55);
  ellipse(mouseX + 120, 46, 120, 75);
  ellipse(mouseX + 63, 63, 150, 85);
  ellipse(mouseX + 150, 83, 85, 45);
  
  ellipse(mouseX + 270, 160, 120, 55);
  ellipse(mouseX + 310, 146, 150, 75);
  ellipse(mouseX + 350, 170, 170, 85);
  
  fill(pc)
  ellipse(200, 400, 450, 165);
  fill(pctw)
  ellipse(275, 377, 260, 80)
  
  fill(nctw)
  ellipse(mouseX - 130, 255, 5, 3)
  ellipse(mouseX - 110, 260, 5, 3)
  ellipse(mouseX - 105, 240, 5, 3)
  ellipse(mouseX - 90, 256, 5, 3).
  ellipse(mouseX - 100, 276, 5, 3)
  ellipse(mouseX - 125, 266, 5, 3)
  
  fill(pctr)
  ellipse(mouseX, mouseY, 60, 20)
  fill(pctw)
  ellipse(mouseX, mouseY - 10, 30, 20)
}