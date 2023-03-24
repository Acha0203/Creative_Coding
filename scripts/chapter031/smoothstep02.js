function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < width; i++) {
    const t = i / width;

    fill(t * 255, 0, 0);
    rect(i, 0, 1, height / 2);

    fill(smoothstep(t) * 255, 0, 0);
    rect(i, height / 2, 1, height / 2);
  }
}

function smoothstep(x) {
  return x * x * (3 - 2 * x);
}
