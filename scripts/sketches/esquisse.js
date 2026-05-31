function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  noFill();
}

function draw() {
  clear();
  stroke(0, frameCount % 255, 255);

  let angle1 = frameCount * 0.1;
  let angle2 = frameCount * 0.2;

  for (let z = 240; z > -240; z -= 2) {
    for (let x = -240; x < 240; x += 2) {
      let q = sqrt(x * x + z * z) / 60;
      let y = (50 * sin(q * PI)) / q;
      let ya = y * cos(angle1) - z * sin(angle1);
      let xa = x * cos(angle2) - (y * sin(angle1) + z * cos(angle1)) * sin(angle2);
      point(width / 2 + xa * cos(0) - ya * sin(0), height / 2 + xa * sin(0) + ya * cos(0));
    }
  }
}

// #p5js #minacoding Day 27: 3Dなコードを書いてください。3Dに見える作品でも構いません。

keyPressed = () => {
  if (key === 's') {
    saveGif('sombrero', 5);
  }
};
