let m;
t = p = 0;
H = 500;
draw = () => {
  t++ ||
    (createCanvas((W = 720), W, WEBGL),
    (m = createGraphics(H, H)),
    m.background(0));
  m.textSize(35);
  m.fill(255);
  m.translate(10, H / 2);
  m.text('#つぶやきProcessing #p5js', -10, -10);
  m.text('#minacoding Day 15', 20, 40);
  texture(m);
  rotateY(t * -0.01);
  noStroke();
  sphere(250);
};
