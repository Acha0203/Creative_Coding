t = 0;

draw = () => {
  t++ ||
    (createCanvas((w = 500), w),
    noFill(),
    rectMode(CENTER),
    colorMode(HSB),
    (R = random));

  background(0, 0.05);

  x = R(w);
  y = R(w);
  n = R(10, 90);
  d = R(10, 200);

  for (i = 0; i < n; i++) {
    translate(x, y);
    stroke(i / 2, w, i * 2);
    rotate((PI / 30) * i * t);
    square(0, 0, d);
    resetMatrix();
  }
};

// #つぶやきProcessing #p5js
// #minacoding Day 26: randomを使って作品を作ってください。
// #dailycodingseed rectMode()
