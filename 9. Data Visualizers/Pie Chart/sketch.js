let table;

function preload() {
  table = loadTable('Random data 1.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  
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
  var diameter = 250;
  var lastAngle= 0;

  for (var i= 0; i< 6; i++) {
    var n = table.getNum(i, "Score");
    var c = (i*20);
    var v = table.getNum(i, "Average Grade")
    
    fill(v, 100, c);

    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(n));

    lastAngle += radians(n);
  }
}