function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  loadPixels();

  const maxD = dist(0, 0, 0.5, 0.5);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const rx = fract((x / width) * 10);
      const ry = fract((y / width) * 10);
      const d = dist(0.5, 0.5, rx, ry);
      const c = map(d, 0, maxD, 0, 255);
      const p = [c, c, c];
      setPixel(x, y, p);
    }
  }

  updatePixels();
}

function setPixel(x, y, p) {
  const i = (y * width + x) * 4;
  pixels[i + 0] = p[0];
  pixels[i + 1] = p[1];
  pixels[i + 2] = p[2];
}
