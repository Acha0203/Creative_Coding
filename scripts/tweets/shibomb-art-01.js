// 2023/06/30
// #minacoding Free Theme
// #dailycodingseed mouseWheel
// https://p5js-i18n-ja.pages.dev/ja/reference/#/p5/mouseWheel
//

const COLORS = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
];

const positiveEmojis = [
  "😊",
  "😄",
  "🌟",
  "🎉",
  "🌞",
  "💖",
  "🙌",
  "👍",
  "🥳",
  "🤩",
  "😁",
  "✨",
  "🎊",
  "🌈",
  "💕",
  "🎶",
  "😍",
  "😀",
  "💫",
  "🥳",
  "💗",
  "🎁",
  "🙏",
  "🔥",
  "🤗",
  "😆",
  "💯",
  "🥰",
  "😎",
  "😘",
];

// --------------------
// Object
// --------------------

class MyAbstract {
  constructor(x, y, props) {
    this.srcpos = createVector(x, y);
    this.pos = this.srcpos.copy();
    this.props = props;

    this.init();
  }

  init() {
    this.t = 0;
  }

  get thanksforever() {
    return (
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height
    );
  }

  update() {
    this.t++;
  }

  display() {}
}

class MyObject extends MyAbstract {
  init() {
    super.init();
    this.jump = 0;
    this.emoji = random(positiveEmojis);
    this.emojiTime = 0
  }
  update() {
    super.update();
    this.srcpos.x += this.props.deltaX;
    this.srcpos.y += this.props.deltaY;

    if (random(0, 100) < 1) {
      this.props.deltaX *= -1;
    }
    if (random(0, 100) < 1) {
      this.props.deltaY *= -1;
    }
    if (random(0, 1000) < 1) {
      this.emoji = random(positiveEmojis);
      this.emojiTime = this.t + 300
    }

    this.pos = this.pos.lerp(this.srcpos, 0.01);
    this.jump = -sin(radians((this.t * 10) % 180)) * 10;
  }

  predisplay() {
    noStroke();
    fill(0, 40 + this.jump * 2);
    ellipse(this.pos.x, this.pos.y + 20, 10, 4);
  }

  display() {
    noStroke();
    fill(this.props.color);

    circle(this.pos.x, this.pos.y + this.jump, 20);
    rect(this.pos.x, this.pos.y + 10 + this.jump, 10, 20);

    if (this.emojiTime > this.t ) {
      textAlign(CENTER);
      textSize(20);
      text(this.emoji, this.pos.x + 20, this.pos.y - 20);
    }
  }
}

// --------------------
// main
// --------------------

let objs = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  initialize();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initialize();
}

function initialize() {
  objs = [];
  rectMode(CENTER);
}

function draw() {
  background(255);

  for (const obj of objs) {
    obj.update();
  }

  objs.sort((a, b) => a.pos.y - b.pos.y);

  for (const obj of objs) {
    obj.predisplay();
  }

  for (const obj of objs) {
    obj.display();
  }

  objs = objs.filter((obj) => !obj.thanksforever);
}

let oldFrameCount = 0;
function mouseWheel(event) {
  // print(event);
  // pos += event.delta;

  if (oldFrameCount + 1 >= frameCount) return false;

  objs.push(
    new MyObject(
      mouseX + random(-event.deltaX, event.deltaX),
      mouseY + random(-event.deltaY, event.deltaY),
      {
        deltaX: event.deltaX % 90,
        deltaY: event.deltaY % 90,
        color: random(COLORS),
      }
    )
  );

  oldFrameCount = frameCount;

  return false;
}
