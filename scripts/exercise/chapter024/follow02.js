const maxNum = 30;
const speed = 4;
let circles = [];
let dy = 250;
let direction = 1;

function setup() {
  createCanvas((W = 500), W);
  noFill();
  stroke(240);

  circles = [];
  for (let i = 0; i < maxNum; i++) {
    const circle = { x: W / 2, y: W / 2, radius: 60 + i * 12 };
    circles.push(circle);
  }
}

function draw() {
  clear();
  const max = random(250, 500);
  const min = random(0, 250);

  dy += direction * speed;
  if (dy >= max) {
    dy = max - 1;
    direction *= -1;
  }
  if (dy <= min) {
    dy = min + 1;
    direction *= -1;
  }

  circles.forEach((circle, i) => {
    if (i === 0) {
      circle.y += (dy - circle.y) / speed;
    } else {
      const prev = circles[i - 1];
      circle.y += (prev.y - circle.y) / speed;
    }
    ellipse(circle.x, circle.y, circle.radius, circle.radius / 2);
  });
}
