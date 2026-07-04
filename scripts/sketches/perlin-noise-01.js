function setup() {
  createCanvas((w = 720), w);
  colorMode(HSB);
  fill(100);
  noStroke();
  frameRate(24);
}

let N = 100;

function draw() {
  background(0);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      let esize_x =
        1.2 *
        (w / N) *
        sin(
          frameCount * 0.1 +
            i * 0.1 +
            2.5 * TAU * noise(i * 0.1, j * 0.1, frameCount * 0.004)
        );
      let esize_y =
        1.2 *
        (w / N) *
        sin(
          frameCount * 0.12 +
            j * 0.5 +
            2.5 * TAU * noise(i * 0.1, j * 0.1, frameCount * 0.006)
        );
      rect((w / N) * i, (w / N) * j, esize_x, esize_y);
    }
  }
}
