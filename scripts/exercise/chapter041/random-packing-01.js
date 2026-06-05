let circles;
const maxR = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);

  circles = [];
}

function draw() {
  let x, y;
  let r = 1;

  let i = 0;
  do {
    x = random(width);
    y = random(height);

    i++;
    if (i > 1000) {
      return;
    }
  } while (!check(x, y, r));

  while (r < maxR && check(x, y, r)) {
    r++;
  }
  r--;

  circle(x, y, r * 2);
  circles.push({ x, y, r });
}

function check(x, y, r) {
  let ok = true;
  circles.forEach((c) => {
    if (dist(x, y, c.x, c.y) < r + c.r) {
      ok = false;
    }
  });

  return ok;
}
