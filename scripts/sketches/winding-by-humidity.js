const frequency = 5;
const animDuration = 60; // 約1秒（60fps想定）でフルの波形に到達
const hairDiameter = 5;
const numbersOfHair = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  const progress = 1 - abs((frameCount % (2 * animDuration)) / animDuration - 1);
  const baseColorR = 0;
  const baseColorG = 0;
  const baseColorB = 0;

  background(baseColorR, baseColorG, baseColorB);

  let endColorR = 30;
  let endColorG = 0;
  let endColorB = 150;
  let startX = width / 2 - numbersOfHair * hairDiameter;

  drawHair(startX, progress, baseColorR, baseColorG, baseColorB, endColorR, endColorG, endColorB);

  startX = width / 2;
  endColorR = 60;
  endColorG = 20;
  endColorB = 200;

  drawHair(startX, progress, endColorR, endColorG, endColorB, baseColorR, baseColorG, baseColorB);
}

function amountOfColorChange(startColor, endColor) {
  return (endColor - startColor) / numbersOfHair;
}

function drawHair(
  startX,
  progress,
  startColorR,
  startColorG,
  startColorB,
  endColorR,
  endColorG,
  endColorB,
) {
  const redValue = amountOfColorChange(startColorR, endColorR);
  const greenValue = amountOfColorChange(startColorG, endColorG);
  const blueValue = amountOfColorChange(startColorB, endColorB);

  for (let i = 0; i < numbersOfHair; i++) {
    let x = startX + hairDiameter * i;
    let colorR = startColorR + redValue * i;
    let colorG = startColorG + greenValue * i;
    let colorB = startColorB + blueValue * i;

    fill(colorR, colorG, colorB);
    drawOneHair(x, progress, colorR, colorG, colorB);
  }
}

function drawOneHair(startX, progress) {
  for (let i = 1; i < height; i++) {
    circle(
      startX + width * (i * 0.0002) * sin((i * frequency * TAU) / height) * progress,
      i,
      hairDiameter,
    );
  }
}

// #minacoding 2026 June 12th, Rainy
// Our hair gets winding during the rainy season...
