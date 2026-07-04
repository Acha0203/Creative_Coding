const CELL_SIZE = 10;
const COLOR_1 = { redValue: 0, greenValue: 0, blueValue: 0 };
const COLOR_2 = { redValue: 0, greenValue: 0, blueValue: 64 };
const COLOR_3 = { redValue: 0, greenValue: 50, blueValue: 128 };
const COLOR_4 = { redValue: 0, greenValue: 100, blueValue: 255 };

let choroari;
let density;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(COLOR_1.redValue, COLOR_1.greenValue, COLOR_1.blueValue);
  noStroke();

  loadPixels();
  density = pixelDensity();

  choroari = new Choroari(
    Math.floor(width / (2 * CELL_SIZE)),
    Math.floor(height / (2 * CELL_SIZE)),
    density,
  );
}

function draw() {
  choroari.action();
}

class Choroari {
  constructor(startX, startY, density) {
    this.x = startX; // 現在地のX座標
    this.y = startY; // 現在地のY座標
    this.direction = 0; // 向いている方向。上は0、左は1、下は2、右は3
    this.density = pixelDensity(); // ピクセル密度
  }

  // 現在地のセルの色を読み取る
  readColor() {
    let index =
      4 *
      (this.y * CELL_SIZE * this.density * width * this.density +
        this.x * CELL_SIZE * this.density);

    let color = {
      redValue: pixels[index],
      greenValue: pixels[index + 1],
      blueValue: pixels[index + 2],
    };

    return color;
  }

  // 現在地のセルの色を指定した色に変える
  changeColor(color) {
    applyColor(this.x, this.y, this.density, color);
  }

  // 現在向いている方向に1セル進む
  move() {
    const gridWidth = Math.floor(width / CELL_SIZE);
    const gridHeight = Math.floor(height / CELL_SIZE);

    if (this.direction === 0) {
      this.y--;

      // Y座標が画面外になったらY座標=0にワープ
      if (this.y < 0) {
        this.y = gridHeight - 1;
      }
    }

    if (this.direction === 1) {
      this.x--;

      if (this.x < 0) {
        this.x = gridWidth - 1;
      }
    }

    if (this.direction === 2) {
      this.y++;

      if (this.y >= gridHeight) {
        this.y = 0;
      }
    }

    if (this.direction === 3) {
      this.x++;

      if (this.x >= gridWidth) {
        this.x = 0;
      }
    }
  }

  // 読み取った色に応じて行動する
  action() {
    const color = this.readColor();

    // COLOR_1の場合
    if (this.isColor1(color)) {
      // セルをCOLOR_2に塗る
      this.changeColor(COLOR_2);
      // 右を向く
      this.direction = (this.direction + 3) % 4;

      // COLOR_2の場合
    } else if (this.isColor2(color)) {
      // セルをCOLOR_3に塗る
      this.changeColor(COLOR_3);
      // 右を向く
      this.direction = (this.direction + 3) % 4;

      // COLOR_3の場合
    } else if (this.isColor3(color)) {
      // セルをCOLOR_4に塗る
      this.changeColor(COLOR_4);
      // 左を向く
      this.direction = (this.direction + 1) % 4;

      // COLOR_4の場合
    } else if (this.isColor4(color)) {
      // セルをCOLOR_1に塗る
      this.changeColor(COLOR_1);
      // 左を向く
      this.direction = (this.direction + 1) % 4;
    }

    // 現在向いている方向に1セル進む
    this.move();
  }

  isColor1({ redValue, greenValue, blueValue }) {
    return (
      redValue === COLOR_1.redValue &&
      greenValue === COLOR_1.greenValue &&
      blueValue === COLOR_1.blueValue
    );
  }

  isColor2({ redValue, greenValue, blueValue }) {
    return (
      redValue === COLOR_2.redValue &&
      greenValue === COLOR_2.greenValue &&
      blueValue === COLOR_2.blueValue
    );
  }

  isColor3({ redValue, greenValue, blueValue }) {
    return (
      redValue === COLOR_3.redValue &&
      greenValue === COLOR_3.greenValue &&
      blueValue === COLOR_3.blueValue
    );
  }

  isColor4({ redValue, greenValue, blueValue }) {
    return (
      redValue === COLOR_4.redValue &&
      greenValue === COLOR_4.greenValue &&
      blueValue === COLOR_4.blueValue
    );
  }
}

function applyColor(x, y, density, { redValue, greenValue, blueValue }) {
  loadPixels();

  for (let i = 0; i < CELL_SIZE * density; i += 1) {
    for (let j = 0; j < CELL_SIZE * density; j += 1) {
      let index =
        4 * ((y * CELL_SIZE * density + j) * width * density + (x * CELL_SIZE * density + i));

      pixels[index] = redValue;
      pixels[index + 1] = greenValue;
      pixels[index + 2] = blueValue;
    }
  }

  updatePixels();
}

function mouseClicked() {
  const cx = Math.floor(mouseX / CELL_SIZE);
  const cy = Math.floor(mouseY / CELL_SIZE);
  const randomValue = random();

  let color = COLOR_1;

  if (randomValue > 0.25 && randomValue <= 0.5) {
    color = COLOR_2;
  } else if (randomValue > 0.5 && randomValue <= 0.75) {
    color = COLOR_3;
  } else if (randomValue > 0.75) {
    color = COLOR_4;
  }

  applyColor(cx, cy, density, color);
}

// #minacoding 2026 June 16th, Glitch
// Choroari is a simulator of a 2-dimensional 1-state Turing machine.
// It reads the color of the cells on the plane and moves as follows:
// - If the cell is COLOR_1, paint it COLOR_2 and move it to the right.
// - If the cell is COLOR_2, paint it COLOR_3 and move it to the right.
// - If the cell is COLOR_3, paint it COLOR_4 and move it to the left.
// - If the cell is COLOR_4, paint it COLOR_1 and move it to the left.
// By clicking on the screen, you can randomly drop COLOR_1, COLOR_2, COLOR_3, or COLOR_4 dots onto the plane.
// Choroari draw a symmetrical pattern if all initial cells are COLOR_1.
// Let's try to break the trajectory of Choroari by dropping dots here and there.
//
// 2次元1状態チューリングマシンのシミュレーター「チョロアリ」です。
// 平面上のセルの色を読み取り、次のように動きます。
// - セルがCOLOR_1なら、COLOR_2に塗って右に移動
// - セルがCOLOR_2なら、COLOR_3に塗って右に移動
// - セルがCOLOR_3なら、COLOR_4に塗って左に移動
// - セルがCOLOR_4なら、COLOR_1に塗って左に移動
// 画面をクリックすると、平面上にランダムでCOLOR_1、COLOR_2、COLOR_3、COLOR_4のドットを投下することができます。
// チョロアリは初期のセルがすべて同じ色なら上下対称の模様を描きます。
// 彼方此方にドットを投下して、チョロアリの軌跡を崩してみましょう。
