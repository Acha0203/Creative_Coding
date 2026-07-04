t = G = B = 0;
N = 100;
W = 500;
g = 0.01;
b = g / 2;
n = 0.04;

draw = (_) => {
  t++ || (createCanvas(W, W), noStroke(), blendMode(DIFFERENCE));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      G = sin(TAU * noise(i * g, j * g, t * n));
      B = sin(TAU * noise(i * b, j * b, t * n));
      fill(0, G * N * 2, B * N * 2);
      rect(5 * i, 5 * j, 5);
    }
  }
};
// #つぶやきProcessing #p5js
