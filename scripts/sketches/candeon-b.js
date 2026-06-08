t = 0
c = 90

draw = _ => {
  t++ || (createCanvas(W = 720, W), colorMode(HSB), B = blendMode, R = random, V = vertex, L = lerp)
  clear()
  B(BLEND)
  background(0, .5)
  B(ADD)
  stroke(c * 2, c, c)

  if (R() < .05) {
    noFill()
    beginShape()
    strokeWeight(R(2, 5))
    x = R(0, W)
    V(x, 0)

    for (i = 1; i < 18; i++) {
      n = i / 18
      w = sin(n * PI) * 30
      V(L(x, x, n) + map(noise(t * .1, i), 0, 1, -w, w), L(0, W, n) + R(-9, 9))
    }

    V(x, W)
    endShape()

    push()
    noStroke()

    a = R(W / 9, W / 5)

    for (r = 0; r < a; r++) {
      fill(c * 2, c, c - r * (c / a), .01)
      circle(x, W, r)
    }

    pop()
  }
}

// #minacoding 2026 June 9th, Magic
// I created this based on the image of Candeon, the magic from the original FC version of Megami Tensei.
