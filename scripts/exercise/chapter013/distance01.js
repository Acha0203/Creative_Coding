let maxDist;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxDist = dist(0, 0, width, height);
}

function draw() {
  clear();

  const n = 30;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const tx = (width / (n - 1)) * x;
      const ty = (height / (n - 1)) * y;

      const d = dist(mouseX, mouseY, tx, ty);
      const nd = map(d, 0, maxDist, 0, 60);
      circle(tx, ty, nd);
    }
  }
}
