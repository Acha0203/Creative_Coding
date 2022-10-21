let x1, x2, x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  x1 = 30;
  x2 = width - 30;
  x = x1;
  y = height / 2;
}

function draw() {
  x++;
  if (x >= x2) {
    x = x1;
  }

  clear();

  noStroke();
  fill(240);
  text(x1, x1, y - 65);
  text(x2, x2, y - 65);
  text(x, x, y - 65);
  text(norm(x, x1, x2).toFixed(2), x, y + 65);
  text(0, x1, y + 65);
  text(1, x2, y + 65);

  stroke(240);
  noFill();
  line(x1, y - 45, x1, y - 25);
  line(x2, y - 45, x2, y - 25);
  line(x, y - 45, x, y - 25);
  line(x, y + 45, x, y + 25);
  line(x1, y + 45, x1, y + 25);
  line(x2, y + 45, x2, y + 25);

  stroke(240);
  noFill();
  line(x1, y, x2, y);

  stroke(240);
  fill("#292a33");
  circle(x, y, 20);
}

Resources;
