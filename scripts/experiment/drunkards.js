const CELL_SIZE = 10;
const NUMBER_OF_DRUNKARDS = 1000;
const COLOR_OF_FIRST_DRUNKARD = 20;
const COLOR_OF_LAST_DRUNKARD = 255;
let circleRadius;
let drunkards = [];
let collapsedDrunkardsX = [];
let collapsedDrunkardsY = [];
let collapsedDrunkardsColor = [];
let density = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  loadPixels();
  density = pixelDensity();

  circleRadius = min(width, height) / 3;
  for (let i = 0; i < 50; i++) {
    drunkards.push(new Drunkard());
  }

  // 画面中央に十字型の行き倒れを配置する（Drunkardの移動グリッドに揃える）
  const centerX = round(width / 2 / CELL_SIZE) * CELL_SIZE;
  const centerY = round(height / 2 / CELL_SIZE) * CELL_SIZE;

  drunkards[0].collapse(centerX, centerY, COLOR_OF_FIRST_DRUNKARD);
  drunkards[0].collapse(centerX - CELL_SIZE, centerY, COLOR_OF_FIRST_DRUNKARD);
  drunkards[0].collapse(centerX + CELL_SIZE, centerY, COLOR_OF_FIRST_DRUNKARD);
  drunkards[0].collapse(centerX, centerY - CELL_SIZE, COLOR_OF_FIRST_DRUNKARD);
  drunkards[0].collapse(centerX, centerY + CELL_SIZE, COLOR_OF_FIRST_DRUNKARD);
}

function draw() {
  background(0);
  noFill();
  stroke(100, 100, 100);
  circle(width / 2, height / 2, circleRadius * 2);

  // 倒れて動かなくなったドットは背景クリアのたびに消えるので、毎フレーム描き直す
  for (let i = 0; i < collapsedDrunkardsX.length; i++) {
    drunkards[0].changeColor(
      collapsedDrunkardsX[i],
      collapsedDrunkardsY[i],
      collapsedDrunkardsColor[i],
    );
  }

  for (let i = 0; i < drunkards.length; i++) {
    drunkards[i].judge();
    drunkards[i].randomWalk();
  }
}

class Drunkard {
  constructor() {
    const startingPosition = this.getStartingPosition();

    this.x = startingPosition.x; // 現在地のX座標
    this.y = startingPosition.y; // 現在地のY座標
    this.number = 1; // 何人目の酔っ払いか

    const colorValue = map(
      this.number,
      1,
      NUMBER_OF_DRUNKARDS,
      COLOR_OF_FIRST_DRUNKARD,
      COLOR_OF_LAST_DRUNKARD,
    );

    // 各酔っ払いの色
    this.color = color(colorValue, COLOR_OF_FIRST_DRUNKARD, COLOR_OF_FIRST_DRUNKARD);
  }

  getStartingPosition() {
    const angle = random(TWO_PI);
    const x = round((width / 2 + circleRadius * cos(angle)) / CELL_SIZE) * CELL_SIZE;
    const y = round((height / 2 + circleRadius * sin(angle)) / CELL_SIZE) * CELL_SIZE;

    return { x, y };
  }

  // 行方不明になったかどうかを判定する
  isMissing() {
    const circleRadiusToThePowerOf2 = circleRadius * circleRadius;
    const dx = this.x - width / 2;
    const dy = this.y - height / 2;
    const distanceToThePowerOf2 = dx * dx + dy * dy;

    return distanceToThePowerOf2 > circleRadiusToThePowerOf2;
  }

  // 他の酔っ払いに躓いて倒れたかどうかを判定する
  isCollapsed() {
    for (let i = 0; i < collapsedDrunkardsX.length; i++) {
      if (
        (this.x - CELL_SIZE == collapsedDrunkardsX[i] && this.y == collapsedDrunkardsY[i]) ||
        (this.x + CELL_SIZE == collapsedDrunkardsX[i] && this.y == collapsedDrunkardsY[i]) ||
        (this.y - CELL_SIZE == collapsedDrunkardsY[i] && this.x == collapsedDrunkardsX[i]) ||
        (this.y + CELL_SIZE == collapsedDrunkardsY[i] && this.x == collapsedDrunkardsX[i])
      ) {
        return true;
      }
    }

    return false;
  }

  // 指定したセルの色を変える
  changeColor(x, y, color) {
    loadPixels();

    for (let i = 0; i < CELL_SIZE * density; i += 1) {
      for (let j = 0; j < CELL_SIZE * density; j += 1) {
        let index = 4 * ((y * density + j) * width * density + (x * density + i));

        pixels[index] = red(color);
        pixels[index + 1] = green(color);
        pixels[index + 2] = blue(color);
      }
    }

    updatePixels();
  }

  // ランダムな方向にふらふら進む
  randomWalk() {
    const randomFactor = random();

    if (randomFactor < 0.25) {
      this.x += CELL_SIZE;
    } else if (randomFactor < 0.5) {
      this.x -= CELL_SIZE;
    } else if (randomFactor < 0.75) {
      this.y += CELL_SIZE;
    } else {
      this.y -= CELL_SIZE;
    }

    noStroke();
    fill(this.color);
    square(this.x, this.y, CELL_SIZE);
  }

  // 新しい酔っ払いを生成する
  updateDrunkard() {
    const startingPosition = this.getStartingPosition();

    this.number++;
    this.x = startingPosition.x;
    this.y = startingPosition.y;

    const colorValue = map(
      this.number,
      1,
      NUMBER_OF_DRUNKARDS,
      COLOR_OF_FIRST_DRUNKARD,
      COLOR_OF_LAST_DRUNKARD,
    );

    this.color = color(colorValue, COLOR_OF_FIRST_DRUNKARD, COLOR_OF_FIRST_DRUNKARD);
  }

  // 酔っ払いが躓いて倒れた座標を記録し、
  // その座標のセルの色を変える
  collapse(x, y, color) {
    collapsedDrunkardsX.push(x);
    collapsedDrunkardsY.push(y);
    collapsedDrunkardsColor.push(color);
    this.changeColor(x, y, color);
  }

  judge() {
    // 行方不明になった場合
    if (this.isMissing()) {
      this.generateNewDrunkard();
    }

    // 他の酔っ払いに躓いて倒れた場合
    if (this.isCollapsed()) {
      this.collapse(this.x, this.y, this.color);
      this.generateNewDrunkard();
    }
  }

  generateNewDrunkard() {
    if (this.number < NUMBER_OF_DRUNKARDS) {
      this.updateDrunkard();
      this.randomWalk();
    } else {
      console.log('Completed!');
    }
  }
}
