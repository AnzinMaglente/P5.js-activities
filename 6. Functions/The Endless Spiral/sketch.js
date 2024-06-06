let angle = 0; 
let speed = 0.05; 
let numArms = 4; 
  
function setup() { 
  createCanvas(250, 250); 
  noFill(); 
} 
  
function draw() { 
  background('white'); 
  translate(width / 2, height / 2); 
  for (let i = 0; i < numArms; i++) { 
    rotate(-10 / numArms); 
    spiralArm(200); 
  } 
  angle += speed; 
} 
  
function spiralArm(len) { 
  stroke(0); 
  strokeWeight(2); 
  beginShape(); 
  for (let i = 0; i < 200; i++) { 
    let r = map(i, 0, 200, 0, len); 
    let theta = map(i, 0, 200, 0, TWO_PI) + angle; 
    let x = r * cos(theta); 
    let y = r * sin(theta); 
    vertex(x, y); 
  } 
  endShape(); 
} 