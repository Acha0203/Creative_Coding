let v;
let av;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(18);
  textAlign(CENTER, CENTER);
  noStroke();
  fill('#f0f0f0');
  v = av = 10000;
}

function draw() {
  clear();

  const dv = v - av;
  av += dv / 20;

  text(av.toFixed(0), width / 2, height / 2);
}

function mouseClicked() {
  v = random(0, 10000);
}
