t = 0;
arcs = [];
colors = [
  '#d8f3dc',
  '#b7e4c7',
  '#95d5b2',
  '#74c69d',
  '#52b788',
  '#40916c',
  '#2d6a4f',
  '#1b4332',
  '#081c15',
];

draw = () => {
  t++ || (createCanvas(windowWidth, windowHeight), noFill());
  background(8, 28, 21, 30);
  const x = random(width);
  const y = random(height);
  const n = random(height / 50);
  let d = random(1, 20);

  for (i = 0; i < n; i++) {
    const s = random(1, 20);
    arcs[i] = { x: x, y: y, d: d, s: s, c: colors[i % 9] };
    d += s * 2;
  }

  arcs.forEach((a) => {
    stroke(color(a.c + '80'));
    strokeWeight(a.s);
    arc(a.x, a.y, a.d, a.d, random(TAU), random(TAU));
  });
};

// #p5勉強会
