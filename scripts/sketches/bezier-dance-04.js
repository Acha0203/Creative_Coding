function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();
}

function draw() {
  background(0, 0.05);

  for (let i = 0; i < 9; i++) {
    const steps = Math.max(width, height) / 20;

    for (let j = 1; j <= steps; j++) {
      const numberToFill = j / steps;
      const x = getBezierPoint(width, i, numberToFill, 0, 1, 2, 3);
      const y = getBezierPoint(height, i, numberToFill, 4, 5, 6, 7);

      stroke((frameCount + j * i) % 360, 90, 90, 0.1);
      circle(x, y, j * 1.5);
    }
  }
}

function getBezierCoordinate(canvasSize, n, i) {
  return canvasSize * noise(frameCount / 40, n * 9 + i);
}

function getBezierPoint(canvasSize, i, numberToFill, x1, x2, x3, x4) {
  return bezierPoint(
    getBezierCoordinate(canvasSize, x1, i),
    getBezierCoordinate(canvasSize, x2, i),
    getBezierCoordinate(canvasSize, x3, i),
    getBezierCoordinate(canvasSize, x4, i),
    numberToFill,
  );
}

// #minacoding 2026 June 7th, Energetic
