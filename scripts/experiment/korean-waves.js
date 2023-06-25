t = R = r = 0;
W = [0, 210, 420, 630, 840];

draw = () => {
  t++ || (createCanvas((w = 720), w), colorMode(HSL), noFill());
  background(0);
  for (let i = 1; i < 9; i++) {
    scale(1.2);
    for (let j = 0; j < 5; j++) {
      D(W[j], i * 30);
      W[j] += 0.1;
      if (W[0] > 105) W = [-105, 105, 315, 525, 735];
    }
  }
};

D = (x, y) => {
  for (i = 0; i < 3; i++) {
    R = 210 - i * 50;
    stroke(w, w, w);
    arc(x, y, R, R, PI, TAU);
    for (j = 0; j < 25; j += 4) {
      r = 200 - i * 50 - j;
      stroke((t % 120) + i * 20 + (x % 40) * (y % 7), 70, 80 - j / 2);
      arc(x, y, r, r, PI, TAU);
    }
  }
};
