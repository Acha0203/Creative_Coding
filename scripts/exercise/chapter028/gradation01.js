function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let x = 0; x < width; x++) {
    // fill(map(x, 0, width, 0, 255), 0, 0);
    fill(map(x, 0, width, 255, 0), 0, 0);
    rect(x, 0, 1, height);
  }
}
