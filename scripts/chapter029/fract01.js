const n = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  for (let x = 0; x < width; x++) {
    const ratio = fract((x / width) * n);
    stroke(ratio * 255, 255, 255);
    rect(x, 0, 1, height);
  }
}
