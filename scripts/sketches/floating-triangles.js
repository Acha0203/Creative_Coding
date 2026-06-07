function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(0, 0.1);

  let angle = 0;

  translate(frameCount % width, frameCount % height);
  rotate((frameCount * TAU) / 360);

  for (let i = 0; i < 360; i += 5) {
    stroke(frameCount % (360 - i), 60, 90);

    const oneSide = width * 0.5;
    const altitude = (oneSide / 2) * sqrt(3);
    const x1 = -oneSide / 2;
    const y1 = -altitude / 3;
    const x2 = oneSide / 2;
    const y2 = y1;
    const x3 = 0;
    const y3 = (altitude * 2) / 3;

    angle += i;
    rotate(((frameCount * PI * 0.1) / 360) * angle);
    triangle(x1, y1, x2, y2, x3, y3);
    scale(0.8);
  }
}

// #minacoding 2026 June 8th, Triangle
