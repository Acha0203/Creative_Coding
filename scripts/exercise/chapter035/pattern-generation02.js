const w = 5;
const h = 10;
const cellSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  const img = createImage(w, h);
  img.loadPixels();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < ceil(w / 2); x++) {
      if (random() < 0.5) {
        img.set(x, y, color(255, 255, 255));
      }
    }
  }

  img.updatePixels();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < floor(w / 2); x++) {
      const pixel = img.get(x, y);
      img.set(w - x - 1, y, pixel);
    }
  }

  img.updatePixels();
  image(img, 10, 10, w * cellSize, h * cellSize);
}
