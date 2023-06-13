t = angle = length = x = y = z = 0;

drawSphere = (n, m) => {
  for (r = 0; r < TAU; r += PI / n) {
    angle = r + noise(frameCount / 90) * 0.2;
    length = noise(frameCount / 90) * m;
    x = cos(angle) * length;
    y = sin(angle) * length;
    z = tan(angle) * length;
    push();
    fill(50 + angle * 30, 100 + angle * 100, 100 + angle * 150);
    translate(x, y, z);
    sphere(m / 30);
    pop();
  }
};

draw = () => {
  t++ || (createCanvas(windowWidth, windowHeight, WEBGL), noStroke());
  clear();
  directionalLight(255, 255, 255, 0, 1, 0);
  directionalLight(150, 100, 100, 0, -1, 0);

  for (i = 1; i < 10; i++) {
    rotateZ(t * 0.005);
    drawSphere(i * 10, i * 100);
  }
};

//#つぶやきProcessing #p5js #dailycodingseed
