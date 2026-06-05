let prevX, prevY, prevR;

function setup() {
  createCanvas(windowWidth, windowHeight);

  prevX = width / 2;
  prevY = height / 2;
  prevR = min(width, height) / 2;
}

function draw() {
  if (mouseX <= 0 || mouseX >= width || mouseY <= 0 || mouseY >= height) {
    return;
  }

  const d = dist(mouseX, mouseY, prevX, prevY);
  if (d > prevR) {
    const r = d - prevR;
    circle(mouseX, mouseY, r * 2);

    prevR = r;
    prevX = mouseX;
    prevY = mouseY;
  }
}
