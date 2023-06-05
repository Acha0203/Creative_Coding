function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
}

function draw() {
  let step = frameCount % 20;
  background(255, 0.1);
  applyMatrix(1 / step, 0, 0, 1 / step, random(width), random(height));
  for (let r = PI / 3; r < PI; r += PI / 3) {
    push();
    rotate(r - PI);
    for (let i = 0; i < 40; i++) {
      fill(frameCount % 360, 100 - i * 2, 90);
      ellipse(200 - i * 5, 0, 240 - i * 6, 200 - i * 5);
    }
    pop();
  }
}
// #つぶやきProcessing #p5js #dailycodingseed #minacoding
// 感謝をテーマに作品を作ってください。作成したら、感謝したい相手に見せてください。
