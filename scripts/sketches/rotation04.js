n = 30;
s = 1.1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  clear();
  normalMaterial();
  translate(-1 * (width / 2), -1 * (height / 2), -250);

  for (let i = 0; i < n; i++) {
    scale(s);
    translate(i * 2, i * 2, 0);
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    plane(50);
  }
}
