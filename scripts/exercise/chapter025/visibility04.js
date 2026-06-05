const n = 30;
let arrows;

function setup() {
  createCanvas(windowWidth, windowHeight);

  arrows = [];
  for (let i = 0; i < n; i++) {
    const x = random(width);
    const y = random(height);
    const vx = random([-2, 2]);
    const vy = random([-2, 2]);

    arrows.push({ x, y, vx, vy });
  }
}

function draw() {
  clear();

  for (let arrow of arrows) {
    arrow.x += arrow.vx;
    arrow.y += arrow.vy;

    if (arrow.x < 0) {
      arrow.x = 0;
      arrow.vx *= -1;
    } else if (arrow.x >= width) {
      arrow.x = width - 1;
      arrow.vx *= -1;
    }

    if (arrow.y < 0) {
      arrow.y = 0;
      arrow.vy *= -1;
    } else if (arrow.y >= height) {
      arrow.y = height - 1;
      arrow.vy *= -1;
    }

    translate(arrow.x, arrow.y);
    scale(0.3);
    rotate(atan2(arrow.vy, arrow.vx));
    drawArrow();
    resetMatrix();
  }
}

function drawArrow() {
  beginShape();
  vertex(-40, -20);
  vertex(30, -20);
  vertex(30, -50);
  vertex(90, 0);
  vertex(30, 50);
  vertex(30, 20);
  vertex(-40, 20);
  endShape();
}
