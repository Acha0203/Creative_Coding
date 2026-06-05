const n = 300;
let x, y, hist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  x = width / 2;
  hist = [];
}

function draw() {
  clear();

  noStroke();
  fill(240);

  y = height / 2 + sin(frameCount / 20) * 100;
  hist.push({ x, y });

  if (hist.length > n) {
    hist.shift();
  }

  rect(x, y, 20, 20);

  stroke(240);
  noFill();

  let prev = hist[0];
  for (let i = 0; i < hist.length; i++) {
    const cur = hist[i];
    line(prev.x, prev.y, cur.x, cur.y);
    cur.x--; // 軌跡のx座標を毎回減らして左に移動させる
    prev = cur;
  }
}
