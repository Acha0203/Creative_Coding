function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(0, 0.1);

  let direction = 1;
  let i = 1;
  let hz = 660;

  while (i < 7) {
    let n = i * i + 7;
    let m = hz / i;
    for (let r = 0; r < TAU; r += PI / n) {
      let angle = r + noise(frameCount / m) * n * direction;
      let length = noise(frameCount / 50) * m;
      let x = tan(cos(angle)) * length + width / 2;
      let y = tan(sin(angle)) * length + height / 2;
      fill(frameCount % (hz / 2), 50, hz);
      circle(x, y, length / 20);
      direction = -direction;
    }
    i++;
  }
}

// #minacoding 2026 June 2nd, Music
// Coded while listening to the string Sextet by Brahms.
// 'hz' is the frequency of the E string of a stringed instrument.