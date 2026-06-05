const speed = 0.01;
let circles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(240);

  circles = [];
  for (let i = 0; i < 10; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      angle: random(-PI, PI),
    });
  }
}

function draw() {
  clear();

  circles.forEach((c) => {
    let angle = atan2(mouseY - c.y, mouseX - c.x);
    let ld, rd;
    if (angle < c.angle) {
      ld = c.angle - angle;
      rd = angle + TAU - c.angle;
    } else {
      rd = angle - c.angle;
      ld = c.angle - (angle - TAU);
    }

    if (ld < rd) {
      c.angle -= min(speed, ld);
    } else {
      c.angle += min(speed, rd);
    }

    if (c.angle > PI) {
      c.angle -= TAU;
    }

    translate(c.x, c.y);
    rotate(c.angle);
    line(0, 0, 10000, 0);
    fill('#292a33');
    circle(0, 0, 20);
    resetMatrix();
  });
}
