const colors = ['#22577a', '#3873a5', '#5799cc', '#8099ed', '#a7ccf9'];
const n = 50;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  for (let i = 0; i < n; i++) {
    circles.push({
      x: random(0, width),
      y: random(0, height),
      diameter: 2,
      maxSize: random(50, 300),
      c1: color(random(colors)),
      c2: color(random(colors)),
    });
  }
}

function draw() {
  background(14, 57, 92, 10);

  for (let i = 0; i < n; i++) {
    let m = map(circles[i].diameter, 0, circles[i].maxSize, 0, 1);
    let c3 = lerpColor(circles[i].c1, circles[i].c2, m);

    circles[i].diameter =
      circles[i].diameter > circles[i].maxSize
        ? 0
        : circles[i].diameter + (frameCount % circles[i].maxSize);

    stroke(c3);
    circle(circles[i].x, circles[i].y, circles[i].diameter);
  }
}
