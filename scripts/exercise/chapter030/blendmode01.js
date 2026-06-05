function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  blendMode(ADD);

  fill(255, 0, 0);
  circle(width / 4 - 25, height / 4, 100);

  fill(0, 255, 0);
  circle(width / 4 + 25, height / 4, 100);

  blendMode(MULTIPLY);

  fill(255, 0, 0);
  circle((width / 4) * 2 - 25, height / 4, 100);

  fill(0, 255, 0);
  circle((width / 4) * 2 + 25, height / 4, 100);

  blendMode(SCREEN);

  fill(255, 0, 0);
  circle((width / 4) * 3 - 25, height / 4, 100);

  fill(0, 255, 0);
  circle((width / 4) * 3 + 25, height / 4, 100);

  blendMode(OVERLAY);

  fill(255, 0, 0);
  circle(width / 4 - 25, (height / 4) * 2, 100);

  fill(0, 255, 0);
  circle(width / 4 + 25, (height / 4) * 2, 100);

  blendMode(DARKEST);

  fill(255, 0, 0);
  circle((width / 4) * 2 - 25, (height / 4) * 2, 100);

  fill(0, 255, 0);
  circle((width / 4) * 2 + 25, (height / 4) * 2, 100);

  blendMode(LIGHTEST);

  fill(255, 0, 0);
  circle((width / 4) * 3 - 25, (height / 4) * 2, 100);

  fill(0, 255, 0);
  circle((width / 4) * 3 + 25, (height / 4) * 2, 100);

  blendMode(DIFFERENCE);

  fill(255, 0, 0);
  circle(width / 4 - 25, (height / 4) * 3, 100);

  fill(0, 255, 0);
  circle(width / 4 + 25, (height / 4) * 3, 100);

  blendMode(EXCLUSION);

  fill(255, 0, 0);
  circle((width / 4) * 2 - 25, (height / 4) * 3, 100);

  fill(0, 255, 0);
  circle((width / 4) * 2 + 25, (height / 4) * 3, 100);

  // blendMode(REMOVE);

  // fill(255, 0, 0);
  // circle((width / 4) * 3 - 25, (height / 4) * 3, 100);

  // fill(0, 255, 0);
  // circle((width / 4) * 3 + 25, (height / 4) * 3, 100);
}
