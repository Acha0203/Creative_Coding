t = 0;
N = 100;
W = 500;

draw = (_) => {
  t++ ||
    (createCanvas(W, W),
    colorMode(HSB),
    noStroke(),
    background('#つぶやきProcessing #p5js'));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let p = sin(TAU * noise(i * 0.01, j * 0.01, t * 0.04));
      fill(p * 360, N, N);
      rect((W / N) * i, (W / N) * j, W / N);
    }
  }
};
