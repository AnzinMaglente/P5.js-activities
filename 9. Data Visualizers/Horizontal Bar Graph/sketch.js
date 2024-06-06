var numbers = [70, 50, 25, 65, 80, 65, 100, 80]

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(220);
  translate(0,15);
  for (var i = 0; i<numbers.length; i++){
    var n = numbers[i];
    fill(n*2,n*0.2,100);
    
    rect(0,i*50,n,20);
  }
}