let m;
t = p = 0;
h = 500;
r = 250;
draw = () => {
  t++ ||
    (createCanvas((w = 720), w, WEBGL),
    (m = createGraphics(h, h)),
    (T = m.text),
    m.background(0));
  m.textSize(35);
  m.fill(r);
  m.translate(10, h / 2);
  T('#つぶやきProcessing', -10, -10);
  T('#minacoding', 20, 40);
  texture(m);
  rotateY(t * -0.01);
  noStroke();
  sphere(r);
};
