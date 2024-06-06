let table;

function preload() {
  table = loadTable('Random Data 2.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  print(table.getColumn('name'));

  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }
}

function draw() {
  background(220);
  for (var i= 0; i < 6; i++) {
    fill ('Blue');
    drawEllipses()
    drawLines()
  }
  for (var k = 0; k < 6; k++) {
    fill ('red');
    drawEllipses2()
    drawLines2()
  }
}

function drawEllipses(){
  noStroke();
    
  for(let i = 0; i < table.getRowCount(); i++){
    let x = i * (width / (table.getRowCount()-1));
    let y = table.getNum(i, "Investment 1");
    ellipse(x, y, 7);
  }
}

function drawEllipses2(){
  noStroke();
    
  for(let i = 0; i < table.getRowCount(); i++){
    let x = i * (width / (table.getRowCount()-1));
    let y = table.getNum(i, "Investment 2");
    ellipse(x, y, 7);
  }
}

function drawLines(){
  stroke('blue');
 // draw lines
  let px = 0;
  let py = table.getNum(0, "Investment 1");
  for(let i =0; i < table.getRowCount(); i++){
    let x = i * (width / (table.getRowCount()-1));
    let y = table.getNum(i, "Investment 1");
    line(px, py, x, y);
    
    px = x;
    py = y;
    } 
  }

function drawLines2(){
  stroke('red');
 // draw lines
  let px = 0;
  let py = table.getNum(0, "Investment 2");
  for(let i =0; i < table.getRowCount(); i++){
    let x = i * (width / (table.getRowCount()-1));
    let y = table.getNum(i, "Investment 2");
    line(px, py, x, y);
    
    px = x;
    py = y;
    } 
  }