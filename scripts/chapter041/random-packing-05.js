const maxSize = 50;
let rects;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rects = [];

  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
}

function draw() {
  let x, y;
  let size = 1;

  let i = 0;
  do {
    x = floor(random(width));
    y = floor(random(height));

    i++;
    if (i > 1000) {
      return;
    }
  } while (!check(x, y, size, size));

  while (size < maxSize && check(x, y, size, size)) {
    size++;
  }
  if (size > 1) {
    size--;
  }

  rect(x, y, size, size);
  rects.push({ x, y, w: size, h: size });
}

function check(x, y, w, h) {
  let ret = true;

  for (const r of rects) {
    const a = x + w - 1 >= r.x;
    const b = x <= r.x + r.w - 1;
    const c = y + h - 1 >= r.y;
    const d = y <= r.y + r.h - 1;

    if (a && b && c && d) {
      ret = false;
      break;
    }
  }

  return ret;
}
