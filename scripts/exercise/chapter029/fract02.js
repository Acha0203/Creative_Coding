function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const rx = fract((x / width) * 10);
      const ry = fract((y / width) * 10);
      const c = [rx * 255, ry * 255, 255];
      setPixel(x, y, c);
    }
  }

  updatePixels();
}

function setPixel(x, y, c) {
  const i = (y * width + x) * 4;
  pixels[i + 0] = c[0];
  pixels[i + 1] = c[1];
  pixels[i + 2] = c[2];
}
