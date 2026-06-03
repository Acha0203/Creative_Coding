let img;

function preload() {
  img = loadImage('/assets/images/flow-field-03-lg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
}

function draw() {
  let angle = frameCount * 0.01;

  background(0);
  blendMode(ADD);

  texture(img);
  rotateY(angle);

  Array.from({ length: 12 }, (_, i) => 12 - i).forEach((r) => {
    tint(frameCount % (r * 30), 90, 90);
    cylinder(frameCount % (r * 90), 200, 90, 1, 0, 0);
  });
}

// #minacoding 2026 June 4th, Castle

// At the fyrst Gate, now art thou in,
// Of the Phylosophers Castle where they dwell;
// Proceede wysely that you may wyne
// In at mo Gates of that Castell,
// Whych Castle is round as any Bell:
// And Gates hath Eleven yet mo,
// One ys conquered, now to the second go.
