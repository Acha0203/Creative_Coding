function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  const yn = 60;
  const xn = 60;

  for (let y = 0; y < yn; y++) {
    for (let x = 0; x < xn; x++) {
      const tx = (width / (xn - 1)) * x;
      const ty = (height / (yn - 1)) * y;

      const r = map(tx, 0, width, 0, 255);
      const g = map(ty, 0, height, 0, 255);
      fill(r, g, 0);
      circle(tx, ty, 15);
    }
  }
}
