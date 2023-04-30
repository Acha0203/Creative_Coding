function setup() {
  createCanvas((W = 700), W);
  background(0);
  blendMode(ADD);

  let draw_scale = 100;

  let x_now = 0.1;
  let y_now = 0.1;

  let a = -1.5,
    b = 1.8,
    c = -1.8,
    d = -0.4;

  translate(W / 2, W / 2);

  for (let i = 0; i < 1e5; i++) {
    x_next = sin(a * y_now) + c * cos(a * x_now);
    y_next = sin(b * x_now) + d * cos(b * y_now);

    stroke(0, 100, 100, 100);
    point(x_next * draw_scale, y_next * draw_scale);

    x_now = x_next;
    y_now = y_next;
  }
}
