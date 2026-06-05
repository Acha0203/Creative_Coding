let prevR, nextR, d, t;

function setup() {
  createCanvas(windowWidth, windowHeight);

  d = 200;
  reset();
}

function reset() {
  prevR = d;
  nextR = random(20, 400);
  t = 0;
}

function draw() {
  t += 0.01;

  // イージング後の余韻を持たせるため、すぐにはリセットしない
  if (t >= 1.4) {
    reset();
    return;
  }

  // t = 1.0 でイージング終了なので、t > 1.0 の場合は画面を更新しない
  if (t > 1.0) {
    return;
  }

  clear();
  d = lerp(prevR, nextR, easeInOutBack(t));
  circle(width / 2, height / 2, d);
}

function easeInOutBack(t) {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;

  return t < 0.5 ? (pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2 : (pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
}