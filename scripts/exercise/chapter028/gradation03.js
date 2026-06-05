function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // const c = [(x / width) * 255, 0, (y / height) * 255];
      const c = [(y / height) * 255, (x / width) * 255, (x / width) * 255];
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
