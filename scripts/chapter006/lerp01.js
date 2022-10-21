const space = 20;
let a, b, t;

function setup() {
  createCanvas(windowWidth, windowHeight);

  a = { x: space, y: space };
  b = { x: width - space, y: height - space };

  textAlign(CENTER, CENTER);
  t = 0;
}

function draw() {
  t += 0.005;
  t %= 1;

  clear();

  stroke(240);
  noFill();
  line(a.x, a.y, b.x, b.y);

  stroke(240);
  fill('#292a33');
  circle(lerp(a.x, b.x, t), lerp(a.y, b.y, t), 10);

  noStroke();
  fill(240);
  text('t = ' + t.toFixed(2), width / 2, space * 2);
  text('a', space, space * 2);
  text('b', width - space, height - space * 2);
}
