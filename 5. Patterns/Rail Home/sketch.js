function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#795C34');
  
  for(let i=0; i < 2; i++){
    fill('#EEE4B1')
    rect(0, 20, 400, 55)
    translate(0, 300)
  }
  
  translate(0, -600)
  
  for(let i=0; i < 2; i++){
    fill('white')
    rect(0, 30, 400, 35)
    translate(0, 300)
  }
  
  translate(0, -600)
  
  for(let i=0; i < 5; i++){
    fill('#8C6A5D')
    rect(25, 75, 50, 245)
    translate(100,0)
  }
  
  translate(-500, 0)
  
  for(let x = 50; x < 300; x += 60){
    fill(20+x, 30+x, 60+x);
    noStroke();
    triangle(x-30, 180, x, 120, x+30, 180);
    triangle(x-30, 218, x, 280, x+30, 218);
    triangle(x, 166, x-105, 200, x, 233);
    triangle(x, 166, x+105, 200, x, 233);
    stroke(2);
    circle(x, 200, 70);
    translate(15,0);
  }
}