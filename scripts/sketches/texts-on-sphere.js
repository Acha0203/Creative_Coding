let m;
t = 0;
draw = () => {
  t++ ||
    (createCanvas((w = 720), w, WEBGL),
    background(0),
    (m = createGraphics((h = 500), h)),
    (T = m.text),
    m.background(0, (s = 30)));
  m.textSize(26);
  m.translate(0, (r = 250));
  m.fill(r);
  T('#つぶやきProcessing', 0, -s);
  T('#minacoding #p5js', r, s);
  texture(m);
  noStroke();
  rotateY(tan(t * -0.01));
  sphere(r);
};

// #minacoding Day 15 文字を使ったコードを書いてください。
// #dailycodingseed texture()

keyPressed = () => {
  if (key === 's') {
    saveGif('texts-on-sphere', 5);
  }
};
