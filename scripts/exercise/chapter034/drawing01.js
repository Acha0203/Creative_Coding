let prev;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  prev = { x: 0, y: 0 };
}

function draw() {
  if (mouseIsPressed) {
    const d = dist(prev.x, prev.y, mouseX, mouseY);
    const n = d / 2;
    for (let i = 0; i < n; i++) {
      const t = i / n;
      const x = lerp(prev.x, mouseX, t);
      const y = lerp(prev.y, mouseY, t);
      circle(x, y, 10);
    }
  }

  prev.x = mouseX;
  prev.y = mouseY;
}
