t = 0;
s = 0.005;
draw = () => {
  t || (createCanvas((W = 500), W), colorMode(HSB), noStroke());
  t += s;
  blendMode(BLEND);
  background(0, 0.1);
  blendMode(ADD);
  for (r = 0; r < 15; r += s) {
    fill(230, 90, 50, 0.2);
    circle(
      tan(r * 2 + t) * 300 + W / 5,
      sin(r * 7 + t + r / noise(2, 6)) * sin(r * 2 + t + r) * 200 + W / 2,
      20 * sin(r * 9 - t * 9)
    );
  }
};
// #つぶやきProcessing #p5js #minacoding Day 13: なにか新たな技術を用いてコードを書いてください。新たな関数や難しい技術などなんでも良いです。
// #dailycodingseed blendMode()
