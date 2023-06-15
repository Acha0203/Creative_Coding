let x = 0;
let y = 0;
const n = 30;

function setup() {
  createCanvas(600, 600);
  background(150, 255, 200);
  colorMode(HSB);
  blendMode(MULTIPLY);

  for (let i = 0; i < height; i++) {
    stroke(40, i / height * 50, 100 - (i / height) * 50);
    rect(0, i, width, 1);
  }

  for (let i = 0; i < n; i++) {
    let left = random(-200, 300);
    let right = left + random(400, 600);
    let bottom = height + random(0, 100);
    let top = 600 - (right - left);
    let direction = Math.round(random(-1, 1));
    for (let j = 0; j < 2e5; j++) {
      drawPoint(
        Math.floor(j / 2e3 / (n - i)),
        left,
        right,
        bottom,
        top,
        direction
      );
      nextPoint();
    }
  }
}

//range −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983.
function drawPoint(c, left, right, bottom, top, direction) {
  stroke(150, 50 + c, 100 - c);
  let px = map(x, -2.182 * direction, 2.6558 * direction, left, right);
  let py = map(y, 0, 9.9983, bottom, top);
  point(px, py);
}

function nextPoint() {
  let nextX;
  let nextY;

  let r = random(1);

  if (r < 0.01) {
    //1
    nextX = 0;
    nextY = 0.16 * y;
  } else if (r < 0.86) {
    //2
    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    //3
    nextX = 0.2 * x + -0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  } else {
    //4
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }

  x = nextX;
  y = nextY;
}

function drawFern(left, right, bottom, top) {
  for (let i = 0; i < 2e5; i++) {
    drawPoint(Math.floor(i / 2e3), left, right, bottom, top);
    nextPoint();
  }
}

// function draw() {
//   for (let i = 0; i < 1000; i++) {
//     drawPoint(Math.floor(i / 10));
//     nextPoint();
//   }
// }
