function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  const yn = 60;
  const xn = 60;

  for (let y = 0; y < yn; y++) {
    for (let x = 0; x < xn; x++) {
      const tx = (width / (xn - 1)) * x;
      const ty = (height / (yn - 1)) * y;

      const dx = abs(tx - width / 2);
      const dy = abs(ty - height / 2);

      const r = map(dx, 0, width / 2, 0, 255);
      const b = map(dy, 0, height / 2, 0, 255);
      fill(r, 0, b);
      circle(tx, ty, 15);
    }
  }
}
