const NUMBER_OF_DRUNKARDS = 20000;
const SPHERE_SIZE = 20;
const AREA_RADIUS = 500;
const BATCH_SIZE = 20;
let number = 0;
let drunkards = [];
let collapsedDrunkardsX = [];
let collapsedDrunkardsY = [];
let collapsedDrunkardsZ = [];
let collapsedDrunkardsColor = [];
let nextBatchIndex = 0;
let activeDrunkards = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  noStroke();

  for (let i = 0; i < NUMBER_OF_DRUNKARDS; i++) {
    drunkards.push(new Drunkard());
  }

  // 中央に行き倒れを配置する
  drunkards[0].x = 0;
  drunkards[0].y = 0;
  drunkards[0].z = 0;
  drunkards[0].collapse();

  activateNextBatch();
}

// 次のBATCH_SIZE人を新しいバッチとして起動する
function activateNextBatch() {
  if (nextBatchIndex >= drunkards.length) {
    activeDrunkards = [];
    return;
  }

  const end = min(nextBatchIndex + BATCH_SIZE, drunkards.length);

  activeDrunkards = drunkards.slice(nextBatchIndex, end);
  nextBatchIndex = end;
}

function draw() {
  clear();
  orbitControl();
  directionalLight(0, 0, 100, 0, 2, 0);
  directionalLight(80, 30, 30, 0, -1, 0);

  // 倒れて動かなくなった酔っ払いは背景クリアのたびに消えるので、毎フレーム描き直す
  for (let i = 0; i < collapsedDrunkardsX.length; i++) {
    drawDrunkard(
      collapsedDrunkardsX[i],
      collapsedDrunkardsY[i],
      collapsedDrunkardsZ[i],
      collapsedDrunkardsColor[i],
    );
  }

  for (let i = 0; i < activeDrunkards.length; i++) {
    activeDrunkards[i].judge();

    if (!activeDrunkards[i].collapsed && !activeDrunkards[i].missing) {
      activeDrunkards[i].randomWalk();
    }
  }

  // 現在のバッチが全員停止したら次のバッチを起動する
  if (activeDrunkards.length > 0 && activeDrunkards.every((d) => d.collapsed || d.missing)) {
    activateNextBatch();
  }
}

function drawDrunkard(x, y, z, color) {
  push();
  fill(color);
  translate(x, y, z);
  sphere(SPHERE_SIZE);
  pop();
}

class Drunkard {
  constructor() {
    const startingPosition = this.getStartingPosition();

    this.x = startingPosition.x; // 現在地のX座標
    this.y = startingPosition.y; // 現在地のY座標
    this.z = startingPosition.z; // 現在地のZ座標
    this.number = ++number; // 何人目の酔っ払いか
    this.collapsed = false; // 倒れたかどうかのフラグ
    this.missing = false; // 行方不明になったかどうかのフラグ

    const colorValue = map(this.number, 0, NUMBER_OF_DRUNKARDS, 30, 100);

    // 各酔っ払いの色
    this.color = color(90 + (this.number % 150), colorValue, colorValue);
  }

  getStartingPosition() {
    const direction = p5.Vector.random3D();

    return {
      x: direction.x * AREA_RADIUS,
      y: direction.y * AREA_RADIUS,
      z: direction.z * AREA_RADIUS,
    };
  }

  // 行方不明になったかどうかを判定する
  isMissing() {
    if (
      this.x < -AREA_RADIUS ||
      this.x > AREA_RADIUS ||
      this.y < -AREA_RADIUS ||
      this.y > AREA_RADIUS ||
      this.z < -AREA_RADIUS ||
      this.z > AREA_RADIUS
    ) {
      this.missing = true;
    }
  }

  // 他の酔っ払いに躓いて倒れたかどうかを判定する
  hasCollapsed() {
    for (let i = 0; i < collapsedDrunkardsX.length; i++) {
      const distance = dist(
        this.x,
        this.y,
        this.z,
        collapsedDrunkardsX[i],
        collapsedDrunkardsY[i],
        collapsedDrunkardsZ[i],
      );

      if (distance <= SPHERE_SIZE) {
        this.collapse();

        return true;
      }
    }

    return false;
  }

  // 中心に引き寄せられつつ、ランダムな方向にふらふら進む
  randomWalk() {
    let randomFactor = random();

    if (randomFactor < 0.3) {
      // 中心に引き寄せられる
      const centerX = 0;
      const centerY = 0;
      const centerZ = 0;

      const dx = centerX - this.x;
      const dy = centerY - this.y;
      const dz = centerZ - this.z;

      const distance = sqrt(dx * dx + dy * dy + dz * dz);

      if (distance > 0) {
        this.x += (dx / distance) * random(0.5, 1.5);
        this.y += (dy / distance) * random(0.5, 1.5);
        this.z += (dz / distance) * random(0.5, 1.5);
      }
    } else {
      // ランダムな方向にふらふら進む
      randomFactor = random();

      if (randomFactor < 0.33) {
        this.x += random([-5, 5]);
      } else if (randomFactor < 0.66) {
        this.y += random([-5, 5]);
      } else {
        this.z += random([-5, 5]);
      }
    }

    drawDrunkard(this.x, this.y, this.z, this.color);
  }

  // 酔っ払いが躓いて倒れた座標を記録する
  collapse() {
    collapsedDrunkardsX.push(this.x);
    collapsedDrunkardsY.push(this.y);
    collapsedDrunkardsZ.push(this.z);
    collapsedDrunkardsColor.push(this.color);

    this.collapsed = true;
  }

  judge() {
    if (this.collapsed) {
      return;
    }

    // 行方不明になったかどうかを判定する
    this.isMissing();

    // 他の酔っ払いに躓いて倒れたかどうかを判定する
    this.hasCollapsed();

    if (this.number > NUMBER_OF_DRUNKARDS) {
      console.log('Completed!');
    }
  }
}

// #minacoding 2026 June 30th, Free
// "Drunkard Random Walk Bonsai"
// Drunkards are wandering around in a 3D space.
// When a drunkard bumps into another drunkard who has fallen down,
// he also collapses on the spot and falls asleep.
// After many hours, take a look at the screen.
// The drunkards must have created mysterious coral-like shapes.
// You can rotate the viewpoint by dragging the left mouse button,
// zoom by using the wheel, and pan by dragging the mouse right (or with two fingers).
// This sketch was programmed with reference to the Nikkei Science supplement "Computer Recreation II" (written by A. K. Dewdney). Thank you.
// 「酔っ払いのランダムウォーク盆栽」
// 3D空間の中を「酔っ払い」達が千鳥足で彷徨っています。
// 倒れている他の酔っ払いにぶつかると、その酔っ払いもその場で倒れ込んで爆睡してしまいます。
// 何時間も経ってから、画面を見てみましょう。
// 酔い潰れた酔っ払い達によって、珊瑚のような不思議な形が出来上がっていることでしょう。
// なお、マウス左ドラッグで視点回転、ホイールでズーム、右ドラッグ（または2本指）でパンができます。
// このスケッチは日経サイエンス別冊『コンピューター・レクリエーション II 遊びの探索』（A. K. デュードニー著）を参考にしてプログラムしました。
