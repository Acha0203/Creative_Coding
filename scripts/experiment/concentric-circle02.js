function setup() {
  createCanvas((W = 800), W);
  t = 0;
  noFill(`#つぶやきProcessing #p5勉強会`);
  A = [random];
  for (let i = 69; i >= 0; i--) {
    A[i] = { i, d: i * 16, a: random(6) };
  }
}

function draw() {
  t += 0.01;
  background(`#025`);
  for ({ i, d, a } of A) {
    strokeWeight(i % 35);
    stroke(['#8cf', W, '#fe6'][i % 3]);
    arc(
      W / 2,
      W / 2,
      d,
      d,
      (s = i + t * (1 - (i % 2) * 2)),
      s + 0.01 + a * cos(i / 99 + t) ** 4
    );
  }
}
