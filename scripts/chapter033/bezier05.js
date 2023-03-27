let pos, t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(240);
  noFill();

  pos = [
    { x: 0, y: height },
    { x: width / 3, y: 0 },
    { x: (width / 3) * 2, y: height },
    { x: width, y: 0 },
  ];

  t = 0;
}

function draw() {
  clear();
  bezier(
    pos[0].x,
    pos[0].y,
    pos[1].x,
    pos[1].y,
    pos[2].x,
    pos[2].y,
    pos[3].x,
    pos[3].y
  );

  const x = bezierPoint(pos[0].x, pos[1].x, pos[2].x, pos[3].x, t);
  const y = bezierPoint(pos[0].y, pos[1].y, pos[2].y, pos[3].y, t);
  fill('#292a33');
  circle(x, y, 15);

  t += 0.002;
  t %= 1;
}
