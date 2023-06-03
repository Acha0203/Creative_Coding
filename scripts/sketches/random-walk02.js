const s = 8;
const colors = [
  '#618355',
  '#77986a',
  '#87a97c',
  '#a5c99a',
  '#bfe1b9',
  '#d9f5db',
  '#bfe1b9',
  '#a5c99a',
  '#87a97c',
  '#77986a',
];
let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1);
  setWalker();
}

function draw() {
  background(0, 10);

  for (let i = 0; i < width; i++) {
    walk(walker, i);
  }

  setWalker();
}

function setWalker() {
  const x = random(width);
  const y = random(height);

  walker = { x, y };
}

function walk(walker, i) {
  let x = walker.x + random([-s, s]);
  let y = walker.y + random([-s, s]);

  stroke(colors[i % 10]);
  line(x, y, walker.x, walker.y);

  walker.x = x;
  walker.y = y;
}
