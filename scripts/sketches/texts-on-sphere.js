let m;
t = p = 0;
h = 500;
r = 250;
s = 30;
draw = () => {
  t++ ||
    (createCanvas((w = 720), w, WEBGL),
    (m = createGraphics(h, h)),
    (T = m.text),
    m.background(0, s));
  m.textSize(24);
  m.translate(0, r);
  m.fill(r);
  T('#つぶやきProcessing #p5js', 0, -s);
  T('#minacoding Day 15', r, s);
  texture(m);
  noStroke();
  rotateY(t * -0.01);
  sphere(r);
};

keyPressed = () => {
  if (key === 's') {
    saveGif('texts-on-sphere', 10);
  }
};
