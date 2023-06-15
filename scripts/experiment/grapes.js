setup = () => {
  createCanvas((W = 500), W);
  colorMode(HSB);
  background(255);
  noStroke();

  // translate(t % W, 0);
  for (let i = 0; i < 40; i++) {
    push();
    applyMatrix(1 - 0.005 * i, 0, 0, 1 - 0.005 * i, random(180), random(180));
    drawGrapes(W / 2, W / 2);
    pop();
  }
  // drawGrapes(0, W / 2 - 120);
  // drawIce(0, W / 2 - 8, 50, true);
};

drawGrapes = (x, y) => {
  push();
  translate(x, y);
  for (let i = 0; i < 20; i++) {
    fill(100, 100 - i * 4, 60 + i * 2);
    circle(i, -0.5 * i, 80 - i * 4);
    // triangle(x, y, x - 50 + i * 5, y - 220, x + 50, y - 220)
  }
  pop();
};
// #つぶやきProcessing #p5js #minacoding
