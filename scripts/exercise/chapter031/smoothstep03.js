let ratio;
let a, b;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x1 = getR();
  x2 = width - getR();
  reset();
}

function reset() {
  ratio = -0.2;
}

function smoothstep(x) {
  return x * x * (3 - 2 * x);
}

function draw() {
  frameRate(60);
  clear();

  const nr = max(min(ratio, 1), 0);
  a = lerp(x1, x2, nr);
  b = lerp(x1, x2, smoothstep(nr));

  circle(a, height / 3, getR() * 2);
  circle(b, (height / 3) * 2, getR() * 2);

  ratio += 0.005;
  if (ratio >= 1.2) {
    reset();
  }
}

function getR() {
  return map(width, 0, 750, 0, 25);
}
