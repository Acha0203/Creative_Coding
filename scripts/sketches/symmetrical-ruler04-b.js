t = 0
d = 5
draw = _ => {
  t++ || (createCanvas(W = 720, W), colorMode(HSB), noStroke(), F = 360, B = blendMode)
  B(BLEND)
  background(0, .05)
  B(ADD)

  for (r = 0; r < TAU; r += PI / 8) {
    a = r + (cos(t / 50) / 3) * d
    l = noise(t / 90) * F
    x = tan(cos(a)) * l + F
    y = tan(sin(a)) * l + F
    fill(color((t % F) * r * .1, 80 + r, r))
    circle(x, y, l)
    d = -d
  }
}
