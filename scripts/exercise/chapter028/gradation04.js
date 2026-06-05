function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, width, height, 1);
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      // 色相と彩度の最大値を(width, height)にしているので(x, y)と直接指定できる
      const c = color(x, y, 1);
      setPixel(x, y, [red(c), green(c), blue(c)]);
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
