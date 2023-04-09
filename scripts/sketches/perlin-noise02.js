function setup() {
  createCanvas((w = 500), w);
  colorMode(HSB);
  noStroke();
}

const N = 100;

function draw() {
  background(0);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // let pNoiseR = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      // let pNoiseG = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      // let pNoiseB = sin(TAU * noise(i * 0.005, j * 0.005, frameCount * 0.04));
      let pNoiseH1 = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      // let pNoiseH2 = sin(TAU * noise(i * 0.005, j * 0.005, frameCount * 0.04));
      // let pNoiseS = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      // let pNoiseB = sin(TAU * noise(i * 0.01, j * 0.01, frameCount * 0.04));
      fill(pNoiseH1 * 360, 100, 100);
      // fill(pNoiseH2 * 100, 100, 50);
      // fill(100 + pNoiseR * 255, 0, 50);
      // fill(50, 0, 100 + pNoiseB * 255, 128);
      rect((w / N) * i, (w / N) * j, w / N);
    }
  }
}
