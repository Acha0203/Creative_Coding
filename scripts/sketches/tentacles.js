t = angle = length = x = y = z = 0;

drawSphere = (n, m) => {
  for (r = 0; r < TAU; r += PI / n) {
    angle = r + noise(frameCount / 90) * 0.2;
    length = noise(frameCount / 90) * m;
    x = cos(angle) * length;
    y = sin(angle) * length;
    z = tan(angle) * length;
    push();
    translate(x, y, z);
    sphere(m / 30);
    pop();
  }
};

draw = () => {
  t++ || (createCanvas(windowWidth, windowHeight, WEBGL), noStroke());
  background(0);
  blendMode(ADD);
  lights();
  for (i = 1; i < 10; i++) {
    rotateZ(t * 0.005);
    drawSphere(i * 10, i * 100);
  }
};
