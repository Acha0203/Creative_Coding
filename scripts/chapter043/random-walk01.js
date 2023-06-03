const iterations = 240;
const n = 3;
const s = 10;
const colors = [
  '#18355',
  '#87986a',
  '#97a97c',
  '#b5c99a',
  '#cfe1b9',
  '#e9f5db',
];
let walkers;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1);
  setWalkers();
}

function draw() {
  background(0, 20);

  for (let i = 0; i < iterations; i++) {
    for (const walker of walkers) {
      walk(walker, i);
    }
  }

  setWalkers();
}

function setWalkers() {
  walkers = [];
  for (let i = 0; i < n; i++) {
    const x = random(width);
    const y = random(height);

    walkers.push({ x, y });
  }
}

function walk(walker, i) {
  let x = walker.x + random([-s, s]);
  let y = walker.y + random([-s, s]);

  stroke(colors[Math.floor(i / 40)]);
  line(x, y, walker.x, walker.y);

  walker.x = x;
  walker.y = y;
}
