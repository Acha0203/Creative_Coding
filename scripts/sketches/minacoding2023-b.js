t = 0;
m = 'minacoding2023';
n = 99;
T = 360;

draw = (_) => {
  t++ || (createCanvas((w = 720), w), noStroke());
  background(0, 10);
  textSize(72);
  fill(255);

  for (i = 0; i < 14; i++) {
    push();
    translate(cos((r = 0.45 * i)) * 240 + T, sin(r) * 240 + T);
    rotate(0.45 * i + HALF_PI + tan(t / n));
    text(m[i], 0, 0);
    pop();
  }
};

// #つぶやきProcessing #p5js
// #minacoding Day 30: フリーテーマ
// #dailycodingseed: text()
