function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB);

  const yn = 60;
  const xn = 60;
  const maxDist = dist(0, 0, width / 2, height / 2);

  for (let y = 0; y < yn; y++) {
    for (let x = 0; x < xn; x++) {
      const tx = (width / (xn - 1)) * x;
      const ty = (height / (yn - 1)) * y;

      const d = dist(tx, ty, width / 2, height / 2);
      const h = map(d, 0, maxDist, 0, 240);
      fill(h, 255, 255);
      circle(tx, ty, 15);
    }
  }
}
