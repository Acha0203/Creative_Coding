t = s = 0;
draw = () => {
  t++ || (createCanvas((W = 720), W), colorMode(HSB), noStroke(), (R = random));
  s = t % 20;
  background(W, 0.1);
  applyMatrix(1 / s, 0, 0, 1 / s, R(W), R(W));
  for (let r = PI / 3; r < PI; r += PI / 3) {
    push();
    rotate(r - PI);
    for (let i = 0; i < 40; i++) {
      fill(t % W, 100 - i * 2, 90);
      ellipse(200 - i * 5, 0, 240 - i * 6, 200 - i * 5);
    }
    pop();
  }
};
// #つぶやきProcessing #p5js #dailycodingseed #minacoding
// 感謝をテーマに作品を作ってください。作成したら、感謝したい相手に見せてください。
