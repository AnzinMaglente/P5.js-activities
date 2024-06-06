function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightblue');
  
  for(let y = 10; y < 400; y += 70){
    if (y%6 == 0){
        fill('blue')
      }
    else {
      fill('red')
    }
    for(let x = 10; x < 400; x += 60){
      circle(x+10, y+15, 40);
    }
  }
}