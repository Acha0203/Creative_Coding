function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();

  for (let i = 0; i < 6; i++) {
    snowCrystal(width / 2, height / 2, 300, 6, (PI / 3) * i);
  }
}

function snowCrystal(x, y, baseLength, branchWeight, angle) {
  // base case
  if (baseLength < 5) {
    return;
  }

  const nextLength = baseLength / 2.5;
  const nextWeight = Math.max(branchWeight - 1, 1);

  push();
  translate(x, y);
  rotate(angle);
  strokeWeight(branchWeight);
  stroke(200, 0, 100);
  line(0, 0, 0, -baseLength);

  push();
  translate(0, -nextLength * 1.2);

  for (let i = -1; i <= 1; i += 2) {
    push();
    rotate((PI / 3) * i);

    snowCrystal(0, 0, nextLength, nextWeight);

    pop();
  }

  pop();

  snowCrystal(0, 0, nextLength, nextWeight);
  snowCrystal(0, -nextLength * 1.5, nextLength, nextWeight);

  pop();
}

