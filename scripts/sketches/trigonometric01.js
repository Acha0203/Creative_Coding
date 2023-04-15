function setup() {
  createCanvas((W = 600), W);
  let col_pat = [
    '03045e',
    '023e8a',
    '0077b6',
    '0096c7',
    '00b4d8',
    '48cae4',
    '90e0ef',
    'ade8f4',
    'caf0f8',
  ];
  background('#' + random(col_pat));

  for (let i = 0; i < 10; i++) {
    let x = 0;
    let y = random(W);
    let t = 0;

    let lx = random(1, 10);
    let rx = random(0.01, 0.3);
    let ofx = random(PI);

    let ly = random(1, 10);
    let ry = random(0.01, 0.3);
    let ofy = random(PI);

    // stroke('#' + random(col_pat) + '60');
    noStroke();
    fill('#' + random(col_pat) + '10');

    let csize = random(30, 80);

    while (x < W) {
      circle(x, y, csize);
      x = x + lx * abs(sin(t * rx + ofx));
      y = y + ly * cos(t * ry + ofy);

      t = t + 1;
    }
  }
}
