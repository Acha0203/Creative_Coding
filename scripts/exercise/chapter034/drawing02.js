const maxWeight = 20;
let prev, prevDist, weight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  prev = createVector();
  prevDist = 0;
  weight = 0;
}

function draw() {
  if (mouseIsPressed) {
    const d = dist(prev.x, prev.y, mouseX, mouseY);
    if (prevDist < d) {
      weight = min(weight + 1, maxWeight);
    } else if (d < 0.1) {
      weight = 0;
    } else {
      weight--;
    }

    prevDist = 0;
    strokeWeight(weight);
    line(prev.x, prev.y, mouseX, mouseY);
  } else {
    weight = 0;
    prevDist = 0;
  }

  prev.x = mouseX;
  prev.y = mouseY;
}
