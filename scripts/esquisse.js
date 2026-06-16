t = 0
w = 360
draw = _ => {
  t || (createCanvas(W = 720, W), colorMode(HSB), noStroke(), B = blendMode, S = sin)
  t += .01
  B(BLEND)
  background(0, .1)
  B(ADD)
  translate(W * .01 * S(PI * t), W * .01 * S(PI * t))
  rotate(t)
  for (r = 0; r < 48; r += .1) {
    fill(((t * 90) % 200) + r * 2, r * 2, r * 2, .2)
    ellipse(tan(r * 2 + t) * w + w, S(t + r / noise(3, 9)) * S(r * 5 + t) * w + w, 24, 8)
  }
}

// #つぶやきProcessing #p5js
// #minacoding 2026 June 15th, Rotation
