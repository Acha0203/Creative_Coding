t = 0;
arcs = [];
colors = [
  '#fbf8cc',
  '#fde4cf',
  '#ffcfd2',
  '#f1c0e8',
  '#cfbaf0',
  '#a3c4f3',
  '#90dbf4',
  '#8eecf5',
  '#98f5e1',
  '#b9fbc0',
];
draw = () => {
  t++ || (createCanvas(windowWidth, windowHeight), noFill());
  background(137, 157, 255, 30);
  const x = random(width);
  const y = random(height);
  const n = random(width / 50);
  let r = random(1, 20);

  for (i = 0; i < n; i++) {
    let s = random(1, 20);
    arcs[i] = { x: x, y: y, r: r, s: s, c: colors[i % 10] };
    r += s * 2;
  }

  arcs.forEach((a) => {
    stroke(color(a.c));
    strokeWeight(a.s);
    arc(a.x, a.y, a.r, a.r, random(TAU), random(TAU));
  });
};

// #つぶやきProcessing #p5勉強会
