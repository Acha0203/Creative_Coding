let t = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB)
  noStroke()
}

function draw() {
  t += 0.5
  blendMode(BLEND)
  background(0, 0.5)
  blendMode(ADD)
  for (y = 0; y <= height; y += 9) {
    for (x = 0; x <= width; x += 9) {
      fill(
        (H = (noise(x, y, t) * width) % 270),
        H - 80,
        H,
        (T = tan(noise(x / width, y / height) * 99 + t))
      )
      circle(x, y, 5 / T)
    }
  }
}

// #つぶやきProcessing #genuary
// #genuary6 Screensaver
