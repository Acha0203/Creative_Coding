function setup() {
  createCanvas(windowWidth, windowHeight);

  loadPixels();

  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] = 0; // 赤
    pixels[i + 1] = 0; // 緑
    pixels[i + 2] = 255; // 青
    pixels[i + 3] = 255; // 透明度
  }

  updatePixels();
}
