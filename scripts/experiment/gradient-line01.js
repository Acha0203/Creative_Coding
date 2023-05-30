function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(0);
  drawLine();
}

function drawLine() {
  const srcV = createVector(0, windowHeight / 2);
  const destV = createVector(windowWidth, windowHeight / 2);

  for (let i = 0; i < 0.9; i = i + 0.1) {
    const pos1 = p5.Vector.lerp(srcV, destV, i);
    const pos2 = p5.Vector.lerp(srcV, destV, i + 0.1);

    const c = lerpColor(color('#277da1'), color('#f3722c'), i);

    strokeWeight(2);
    stroke(c);
    line(pos1.x, pos1.y, pos2.x, pos2.y);
  }
}
