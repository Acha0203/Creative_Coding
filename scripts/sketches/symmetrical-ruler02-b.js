t = 0;
draw = () => {
  t++ || (createCanvas((W = 600), W), colorMode(HSB), noFill(), (F = 300));
  background(0, 0.03);

  var d = 5;
  for (var r = 0; r < TAU; r += PI / 8) {
    var a = r + (sin(t / 50) / 3) * d;
    var l = noise(t / 100) * F;
    var x = cos(a) * l + F;
    var y = sin(a) * l + F;
    stroke((t % F) + d, 50 + d, 100);
    circle(x, y, t % F);
    d = -d;
  }
};
