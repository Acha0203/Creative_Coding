const gap = 50; // 草の間隔
const bladeWidth = 8; // 草の横幅（太さ）
const bladeLength = 500; // 草の長さ
const numSegments = 200; // 草のなめらかさ
let grasses = [];
let windStrength = 0;
let prevMouseX = 0;
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noFill();

  const hNumbers = width / (bladeWidth + gap);
  const vNumbers = height / (bladeWidth + gap);
  const noiseScale = 0.4;
  const maxOffset = (bladeWidth + gap) * 3;

  for (let y = 0; y < vNumbers; y++) {
    for (let x = 0; x < hNumbers; x++) {
      const tx = (width / (hNumbers - 1)) * x + width * 0.05;
      const ty = (height / (vNumbers - 1)) * y + height * 0.3;
      const nx = x * noiseScale;
      const ny = y * noiseScale;
      const offsetX = (noise(nx, ny) - 0.5) * maxOffset * 2;
      const offsetY = (noise(nx + 100, ny + 100) - 0.5) * maxOffset * 2;
      grasses.push({ x: tx + offsetX, y: ty + offsetY, ix: x, iy: y });
    }
  }
}

function draw() {
  background(0);

  const dx = mouseX - prevMouseX;
  windStrength = lerp(windStrength, dx * 0.03, 0.05);
  prevMouseX = mouseX;

  drawGrass();
  t += 0.015;
}

function drawGrass() {
  for (let g of grasses) {
    drawBlade(g.x, g.y, g.ix, g.iy);
  }
}

function drawBlade(bx, by, ix, iy) {
  // cos(-3PI/4) = -0.707 (left), sin(-3PI/4) = -0.707 (up in p5.js)
  const restAngle = -(HALF_PI + QUARTER_PI) + 0.5;
  const segLen = bladeLength / numSegments;
  // それぞれの草が微妙にずれたタイミングで揺れるようにする
  // fieldPhaseは草ごとの位置に基づくオフセット
  const fieldPhase = bx * 0.005 + by * 0.003;

  const hue = map(noise(ix * 50, iy * 50), 0, 1, 70, 230);
  strokeWeight(bladeWidth);
  noFill();

  let x = bx;
  let y = by;

  const pts = [[x, y]];

  for (let s = 0; s < numSegments; s++) {
    const progress = (s + 1) / numSegments;
    const bend = windStrength * progress * progress;
    const sway = sin(t + fieldPhase) * 0.2 * progress;
    const angle = restAngle + bend + sway;
    x += cos(angle) * segLen;
    y += sin(angle) * segLen;
    pts.push([x, y]);
  }

  for (let i = 0; i < pts.length - 1; i++) {
    const midY = (pts[i][1] + pts[i + 1][1]) / 2;
    const sb = map(i, 0, pts.length, 0, 100);
    stroke(hue, sb, sb, 0.1);
    line(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
  }
}

// #minacoding 2026 June 11th, Green
// Moving your mouse on the screen will bring the wind to the grassland.
// 画面上でマウスを動かすと草原に風が吹きます。
