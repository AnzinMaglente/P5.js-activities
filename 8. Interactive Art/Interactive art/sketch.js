const words = [];
var sound;

function preload () {
  sound = loadSound("meatballparade.mp3");
  font = loadFont('8bit.ttf');
}

function setup() {
  sound.play();
  createCanvas(600, 400);
  const str = "Welcome to Bathspa University!";
  const wordsStr = str.split(' ');
  textFont(font,40);
  textLeading(30);
  let x = 15
  let y = height/2
  fill(255)
  for (let i = 0; i < wordsStr.length; i++) {
    const wordStr = wordsStr[i];
    const wordStrWidth = textWidth(wordStr);
    const word = new Word(wordStr, x, y, i);
    words.push(word);
    x = x + wordStrWidth + textWidth(' ');
    const nextWordStrWidth = textWidth(wordsStr[i+1]) || 0
    if (x > width - nextWordStrWidth) {
      y += 45 // line height, sort of
      x = 20 // reset x position
    }
  }
}

function draw() {
  clear();
  textSize(40);
  for (let i = 0; i < words.length; i++) {
    const word = words[i] // retrieve word object
    word.update()
    word.display()
  }
  fill('white')
  textSize(15)
  text('Press z to continue, press x to redo',0,400)
}

function keyPressed() {
  if (key === 'z') {
    for (let word of words) word.spread()
    for (let word of words) word.colorchange()
  } else if (key === 'x') {
    for (let word of words) word.reset()
  }
}

class Word {
  constructor(word, x, y, idx) {
  this.word = word
  this.x = x
  this.y = y
  // target position is the same as current position at start
  this.tx = this.x
  this.ty = this.y
  // original position
  this.origx = this.x
  this.origy = this.y
  this.idx = idx
  this.fcolor = color(random(366), random(366), random(366))
}
  
  reset() {
    this.tx = this.origx;
    this.ty = this.origy;
  }
  spread() {
    this.tx = random(200);
    this.ty = random(height);
  }
  update() {
    // move towards the target by 10% each time
    this.x = lerp(this.x, this.tx, 0.1);
    this.y = lerp(this.y, this.ty, 0.1);
  }
  colorchange() {
    this.fcolor = color(random(366), random(366), random(366))
  }
  display() {
    fill(this.fcolor)
    noStroke()
    text(this.word, this.x, this.y)
  }
}

var Snow = {
  el: "#snow", 
  density: 10000, // higher = fewer bits
  maxHSpeed: 5, // How much do you want them to move horizontally
  minFallSpeed: 2,
  canvas: null,
  ctx: null, 
  particles: [],
  colors: [],
  mp: 1,
  quit: false,
  init(){
    this.canvas = document.querySelector(this.el);
    this.ctx = this.canvas.getContext("2d");
    this.reset();
    requestAnimationFrame(this.render.bind(this));
    window.addEventListener("resize", this.reset.bind(this));
  },
  reset(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.particles = [];
    this.mp = Math.ceil(this.w * this.h / this.density);
    for(var i = 0; i < this.mp; i++)
    {
      var size = Math.random()*4+5;
      this.particles.push({
        x: Math.random()*this.w, //x-coordinate
        y: Math.random()*this.h, //y-coordinate
        w: size,
        h: size,
        vy: this.minFallSpeed + Math.random(), //density
        vx:(Math.random()*this.maxHSpeed) - this.maxHSpeed/2,
        fill: "#ffffff",
        s: (Math.random() * 0.2) - 0.1
      });
    }
  },
  
  render(){
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.particles.forEach((p,i) => {
      p.y += p.vy;
      p.x += p.vx;
      this.ctx.fillStyle = p.fill;
      this.ctx.fillRect(p.x, p.y, p.w, p.h);
      if(p.x > this.w+5 || p.x < -5 || p.y > this.h){
        p.x = Math.random()*this.w;
        p.y = -10;
      }
    });
    if(this.quit){
      return;
    }
    requestAnimationFrame(this.render.bind(this));
  },
  destroy(){
    this.quit = true;
  }
  
};

var confetti = Snow.init();
