function setup() {
  createCanvas((w = 800), w);
  background(255);

  let draw_scale = 100;

  let x_now = 0.1;
  let y_now = 0.1;

  let a = -1.5,
    b = 1.8,
    c = -1.8,
    d = -0.4;

  translate(w / 2, w / 2);

  for (let i = 0; i < 100000; i++) {
    x_next = sin(a * y_now) + c * cos(a * x_now);
    y_next = sin(b * x_now) + d * cos(b * y_now);

    stroke(0, 100, 100);
    point(x_next * draw_scale, y_next * draw_scale);

    x_now = x_next;
    y_now = y_next;
  }
}
