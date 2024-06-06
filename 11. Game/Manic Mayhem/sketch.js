//References:
//for Mouse Click: https://editor.p5js.org/sarahriazati/sketches/fwfkAlo2D

var screen = 0;
var speed = 2;
var score = 0;
var life = 3;
let timer;
var Done = false;
var drops = [];
var rectSpeed = 2;
var rectWidth = 100;
var rectY = 300;
var rectX = 280;
var umbrella;
var start;
var fishText = "Start?";
var fishX;
var fishY;
var Fishing;
var fishCount;
var window1;
var window2;
var window3;
var windowcolor1;
var windowcolor2;
var windowcolor3;
var fire1;
var fire2;
var fire3;
var fireCount1;
var fireCount2;
var fireCount3;
var pointincrease;

function setup() {
  createCanvas(640, 510);
  p = createVector(random(width), 200);
  Fishing = createButton(fishText);
  start = createButton("Start Game");
}

function draw() {
  if(screen == 0){
    startScreen();
  }else if(screen == 1){
    endScreen();
  }
  
  else if(screen==2){
  	game1Int();
  }
  else if(screen==5){
  	game1Start();
  }	 
  
  else if(screen==3){
  	game2Int();
  }
  else if(screen==6){
  	game2Start();
  }	 
  
  else if(screen==4){
  	game3Int();
  }
  else if(screen==7){
  	game3Start();
  }	 
}

function startScreen(){
  clear();
  background('orange')
  fill('white')
  textAlign(LEFT);
  textSize(40);
  text("Manic Mayhem", 50, 230);
  textSize(20);
  text("Click here to start!", 50, 280);
  reset();
  Fishing.hide();
  start.hide();
}

//--------------------------------------------------------------------

function game1Int(){
  clear();
  background('white');
  fill('black');
  textSize(25);
  text('Avoid The Rain', 30, 100);
  textSize(17);
  text('Make sure your mouse stays under the umbrella.', 30, 180);
  text("The person who has the umbrella will move from right to left.", 30, 230);
  text("Be sure to keep up!.", 30, 280);
  textSize(19)
  text("Click anywhere to start!", 30, 350);
  textSize(18);
  text('Current Score: ' + score, 30, 460);
  text('Current Lives: ' + life, 470, 460);
  timer = 8;
  Done = false;
  rectX = 280;
  startGame = false; 
}

function game1Start(){
  clear();
  background('black');
  textSize(25);
  stroke(10);
  fill('white');
  text('Avoid The Rain', 230, 50);
  text(timer, 310, 490);
  textSize(18);
  text('Current Score: ' + score, 10, 490);
  text('Current Lives: ' + life, 500, 490);
  fill("white");
  umbrella = rect(rectX, rectY, rectWidth, 20);
  start.show();
  start.mouseClicked(Go);
  start.size(100,60);
  start.style("font-family", "Bodoni");
  start.style("font-size", "16px");
  
  if (startGame == false){
    start.position(280,350);
    startGame = true;
  }
  
  let pointslimit = score/4;
  
  if (Done == true){
    start.hide();
    rectX += rectSpeed;
    if (rectX+100 < mouseX || rectX > mouseX || mouseY < 300) {
      life--;
      if (life == 0){
        screen=1;
      }else{
        screen = int(random(2, 5));
      }
    }
  
    if (rectX > width-200) {
      rectSpeed = -2-pointslimit;
    } else if (rectX < 100) {
      rectSpeed = 2+pointslimit;
    } else if (Done == false) {
      rectSpeed = 2+pointslimit;
      Done = true;
    }
  }
  
  for (let i = 0; i < 5; i++){
    drops.push(new Drop(random(width), 0, 0));
  }
  
  for (let d of drops){
    d.show();
    d.update();
  }
  
  if (frameCount % 60 == 0 && timer > 0 && Done) {
    timer--;
  }
  if (timer == 0) {
    score++;
    screen=int(random(2, 5));
  }
}

class Drop{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(0, random(8, 11));
    this.length = random(20, 40);
    this.strength = random(255);
  }
  show(){
    stroke(255, this.strength);
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.length);
  }
  
  update(){
    this.pos.add(this.vel);
    if (this.pos.y > height + 100){
      drops.shift();
    }
  }
}

//--------------------------------------------------------------------

function game2Int(){
  clear();
  background('white');
  fill('black');
  textSize(25);
  text('Reeling It In!', 30, 100);
  textSize(17)
  text('Get ready to fish! Repeatly click your left mouse button to the reel button win!', 30, 180);
  text("You recently caught a fish, and now it's time to reel it in.", 30, 230);
  text("Don't let the fish get away. They move the button across the screen", 30, 280);
  textSize(19);
  text("Click anywhere to start!", 30, 350);
  textSize(18);
  text('Current Score: ' + score, 30, 460);
  text('Current Lives: ' + life, 470, 460);
  timer = 8;
  Done = false;
  fishText = "Start?";
  fishingStart = false;
  fishCount = 0;
}

function game2Start(){
  clear();
  background('black');
  fill('white');
  textSize(25);
  text('Reeling It In!', 258, 50);
  text(timer, 310, 490);
  textSize(18);
  text('Current Score: ' + score, 10, 490);
  text('Current Lives: ' + life, 500, 490);
  Fishing.show();
  Fishing.mouseClicked(moveButton);
  Fishing.size(100,60);
  Fishing.style("font-family", "Bodoni");
  Fishing.style("font-size", "26px");
  stroke('white')
  strokeWeight(2)
  line(0, 200, 120, 150)
  line(120, 150, 650, 300)
  strokeWeight(0)
  if (fishingStart == false){
    Fishing.position(280,250);
    fishingStart = true;
  }
  
  if (frameCount % 60 == 0 && timer > 0 && Done==true) {
    timer --;
  }
  if (timer == 0) {
    Fishing.hide();
    life--;
    if (life == 0){
      screen = 1;
    }else {
      screen=int(random(2, 5));
    }
  }
}

function moveButton() {
  Done=true;
  fishText = "Reel in!";
  Fishing.html(fishText);
  Fishing.position (random(30, 310), random(280, 410));
  fishCount ++;
  if (fishCount == 6+score){
    score++;
    screen=int(random(2, 5));
    Fishing.hide();
  }
}

//--------------------------------------------------------------------

function game3Int(){
  clear();
  background('white')
  fill('black')
  textSize(25);
  text('Fire Fight', 30, 100);
  textSize(17);
  text('Fight the fire! Save the building. You are tasked to extinguish the danger.', 30, 180);
  text('Hover over the burning windows to reduce the level of fire inside each room.', 30, 230);
  text("However, be careful with the other fires, don't let it go to high!", 30, 280);
  text("Priority List:", 30, 325);
  text("Yellow = Low   |   Orange = Medium   |   Red = High", 30, 350);
  textSize(19);
  text("Click anywhere to start", 30, 400);
  textSize(18);
  text('Current Score: ' + score, 30, 460);
  text('Current Lives: ' + life, 470, 460);
  startGame = false;
  Done = false;
  fireCount1 = 5;
  fireCount2 = 5;
  fireCount3 = 5;
  windowcolor1 = color('orange');
  windowcolor2 = color('orange');
  windowcolor3 = color('orange');
  pointincrease = score*2;
  timer = 10 + pointincrease;
}

function game3Start(){
  clear();
  background('black');
  fill('white');
  textSize(25);
  text('Fire Fight', 270, 50);
  fill(windowcolor1);
  window1 = rect(55, 150, 150, 200, 15, 15, 0, 0);
  fill(windowcolor2);
  window2 = rect(245, 150, 150, 200, 15, 15, 0, 0);
  fill(windowcolor3);
  window3 = rect(435, 150, 150, 200, 15, 15, 0, 0);
  fill('white');
  
  text(timer, 310, 490);
  textSize(18);
  text('Current Score: ' + score, 10, 490);
  text('Current Lives: ' + life, 500, 490);
  
  if (Done ==true){
    if ((mouseX>55) && (mouseX<55+150) && (mouseY>150) && (mouseY<150+200)){
      fire1 = true;
      fire2 = false;
      fire3 = false;
      if (frameCount % 45 == 0 && timer > 0 && Done==true) {
        fireCount1++;
      }
    }else if ((mouseX>245) && (mouseX<250+150) && (mouseY>150) && (mouseY<150+200)){
      fire2 = true;
      fire1 = false;
      fire3 = false;
      if (frameCount % 45 == 0 && timer > 0 && Done==true) {
        fireCount2++;
      }
    }else if ((mouseX>435) && (mouseX<435+150) && (mouseY>150) && (mouseY<150+200)){
      fire3 = true;
      fire1 = false;
      fire2 = false;
      if (frameCount % 45 == 0 && timer > 0 && Done==true) {
        fireCount3++;
      }
    }else {
      fire1 = false;
      fire2 = false;
      fire3 = false;
    }
  }
  
  if (fireCount1 == 4 || fireCount1 == 5) {
    windowcolor1 = color('orange');
  } else if (fireCount1 == 3) {
    windowcolor1 = color('red');
  } else if (fireCount1 == 6) {
    windowcolor1 = color('yellow');
  }
  
  if (fireCount2 == 4 || fireCount2 == 5) {
    windowcolor2 = color('orange');
  } else if (fireCount2 == 3) {
    windowcolor2 = color('red');
  } else if (fireCount2 == 6) {
    windowcolor2 = color('yellow');
  }
  
  if (fireCount3 == 4 || fireCount3 == 5) {
    windowcolor3 = color('orange');
  } else if (fireCount3 == 3) {
    windowcolor3 = color('red');
  } else if (fireCount3 == 6) {
    windowcolor3 = color('yellow');
  }
  
  start.mouseClicked(Go);
  start.size(100,60);
  start.style("font-family", "Bodoni");
  start.style("font-size", "16px");
  
  if (startGame == false){
    start.show()
    start.position(270,200);
    startGame = true;
  }
  
  if (frameCount % 90 == 0 && timer > 0 && Done==true) {
    start.hide();
    if (fire1 == true){
      fireCount2 --;
      fireCount3 --;
    } else if (fire2 == true){
      fireCount1 --;
      fireCount3 --;
    } else if (fire3 == true){
      fireCount1 --;
      fireCount2 --;
    } else {
      fireCount1 --;
      fireCount2 --;
      fireCount3 --;
    }
  }
  
  if (timer == 0){
    score++;
    screen=int(random(2, 5));
  }else if (fireCount1 == 0 || fireCount2 == 0 || fireCount3 == 0){
    life--;
    if (life == 0){
        screen=1;
      }else{
        screen = int(random(2, 5));
      }
    }
  
  if (frameCount % 60 == 0 && timer > 0 && Done==true) {
    timer --;
  }
}

function reduceFire1(){
  if (frameCount % 60 == 0 && timer > 0 && Done==true) {
    fireCount1++;
  }
  fire1 = true;
}

//--------------------------------------------------------------------

function endScreen(){
        clear();
		background(150);
        textSize(12);
		textAlign(CENTER);
		text('GAME OVER', width / 2, height / 2);
        text("SCORE = " + score, width / 2, height / 2 + 20);
		text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed(){
  //Selects a random game
  if(screen==0){
  	screen=int(random(2, 5));
  }
  
  //Instructions to Game
  else if(screen==2){
  	screen=5; //Avoid The Rain
  }else if(screen==3){
  	screen=6; //Reeling It In!
  }else if(screen==4){
  	screen=7; //Fire Fight
  }else if(screen==1){
  	screen=0; //Game Over
  }
}

function reset(){
  score=0;
  life=3;
}

function Go() {
  Done=true;
  start.hide();
}