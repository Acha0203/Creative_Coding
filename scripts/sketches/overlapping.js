function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  clear();
  if (keyIsPressed) {
    fill(150);
    blendMode(OVERLAY);
  } else {
    fill(255);
    blendMode(DIFFERENCE);
  }
  var direction = 1;
  for (var r = 0; r < TAU; r += PI / 8) {
    var angle = r + (sin(frameCount / 50) / 3) * direction;
    var length = noise(frameCount / 100) * 360;
    var x = cos(angle) * length + width / 2;
    var y = sin(angle) * length + height / 2;
    circle(x, y, frameCount % 360);
    direction = -direction;
  }
}
// #つぶやきProcessing #p5js #dailycodingseed
