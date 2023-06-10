drawEars = (d) => {
  triangle(
    width / 2 - 90 * d,
    height / 2 - 180,
    width / 2 - 120 * d,
    height / 2 - 70,
    width / 2 - 20 * d,
    height / 2 - 100
  );
};

drawWhiskers = (x, y, d) => {
  line(x - 100 * d, y + 30, x - 50 * d, y + 50);
  line(x - 100 * d, y + 60, x - 50 * d, y + 60);
  line(x - 100 * d, y + 90, x - 50 * d, y + 70);
};

setup = () => {
  createCanvas(windowWidth, windowHeight);
};

draw = () => {
  let x = width / 2;
  let y = height / 2;

  x += floor(movedX / 2);
  y += floor(movedY / 2);

  clear();
  background(255);
  noStroke();
  fill(0);
  ellipse(width / 2, height / 2, 300, 250);
  drawEars(1);
  drawEars(-1);
  fill(50);
  circle(x - 70, y, 50);
  circle(x + 70, y, 50);
  rect(x - 2, y + 30, 4, 40);
  rect(x - 20, y + 70, 40, 4);
  ellipse(x, y + 40, 30, 20);
  fill(255);
  circle(x - 60, y - 10, 9);
  circle(x + 80, y - 10, 9);
  stroke(50);
  drawWhiskers(x, y, 1);
  drawWhiskers(x, y, -1);
};
// #p5js #dailycodingseed #minacoding Day 8
