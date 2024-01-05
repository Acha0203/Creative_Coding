t = 0
draw = () => {
  t || (createCanvas((W = 720), W), colorMode(HSB), noStroke(), (B = blendMode))
  t += 0.5
  B(BLEND)
  background(0, 0.5)
  B(ADD)
  for (y = 0; y <= W; y += 9) {
    for (x = 0; x <= W; x += 9)
      fill(
        (H = (noise(x, y, t) * W) % 270),
        H - 80,
        H,
        (T = tan(noise(x / W, y / W) * 99 + t))
      ) + circle(x, y, 5 / T)
  }
}

// #つぶやきProcessing #genuary
// #genuary6 Screensaver
