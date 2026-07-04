function setup() {
  createCanvas((W = 500), W);
  colorMode(RGB);
  noStroke();
}

const N = 255;

function draw() {
  background(0);
  blendMode(DIFFERENCE);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // let pNoiseR = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      let pNoiseG = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      let pNoiseB = sin(TAU * noise(i * 0.005, j * 0.005, frameCount * 0.04));
      // let pNoiseH1 = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      // let pNoiseH2 = sin(TAU * noise(i * 0.005, j * 0.005, frameCount * 0.04));
      // let pNoiseS = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      // let pNoiseB = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      // fill(pNoiseH1 * 360, 100, 100);
      // fill(pNoiseH2 * 100, 100, 50);
      // fill(100 + pNoiseR * 255, 0, 50);
      fill(0, pNoiseG * N, pNoiseB * N);
      rect((W / N) * i, (W / N) * j, W / N);
    }
  }
}
