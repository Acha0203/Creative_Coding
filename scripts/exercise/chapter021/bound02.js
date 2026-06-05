let a, b, c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();

  a = Ball.create();
  b = Ball.create();

  c = { r: random(255), g: random(255), b: random(255) };
}

function draw() {
  Ball.update(a);
  Ball.update(b);

  c.r += random([-2, 2]);
  c.g += random([-2, 2]);
  c.b += random([-2, 2]);

  c.r = constrain(c.r, 0, 255);
  c.g = constrain(c.g, 0, 255);
  c.b = constrain(c.b, 0, 255);

  stroke(c.r, c.g, c.b, 100);
  line(a.x, a.y, b.x, b.y);
}

const Ball = {
  create: () => {
    const x = random(0, width);
    const y = random(0, height);
    const vx = random(-3, 3);
    const vy = random(-3, 3);

    return { x, y, vx, vy };
  },

  update: (ball) => {
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x <= 0) {
      ball.x = 0;
      ball.vx *= -1;
    } else if (ball.x >= width - 1) {
      ball.x = width - 1;
      ball.vx *= -1;
    }

    if (ball.y <= 0) {
      ball.y = 0;
      ball.vy *= -1;
    } else if (ball.y >= height - 1) {
      ball.y = height - 1;
      ball.vy *= -1;
    }
  },
};
