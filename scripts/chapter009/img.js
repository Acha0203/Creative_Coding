let img;

function preload() {
  img = loadImage('images/Mandelbrot_test.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  const w = width;
  const h = img.height * (width / img.width);
  image(img, 0, (height - h) / 2, w, h);
}
