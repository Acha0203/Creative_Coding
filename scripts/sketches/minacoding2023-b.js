t = 0;
m = 'minacoding2023';
n = 99;
T = 360;

draw = (_) => {
  t++ || (createCanvas((w = 720), w), noStroke());
  background(0, 10);
  textSize(72);

  for (i = 0; i < 14; i++) {
    push();
    translate(cos((r = 0.45 * i)) * 240 + T, sin(r) * 240 + T);
    rotate(r + HALF_PI + tan(t / n));
    fill(255);
    text(m[i], 0, 0);
    pop();
  }
};

// #つぶやきProcessing #p5js
// #minacoding Day 30: フリーテーマ
// #dailycodingseed: text()

keyPressed = () => {
  if (key === 's') {
    saveGif('minacoding2023-b', 5);
  }
};
