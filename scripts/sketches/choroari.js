const CELL_SIZE = 10;

let choroari;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();

  choroari = new Choroari(
    Math.floor(width / (2 * CELL_SIZE)),
    Math.floor(height / (2 * CELL_SIZE)),
  );
}

function draw() {
  choroari.action();
}

class Choroari {
  constructor(startX, startY) {
    this.x = startX; // 現在地のX座標
    this.y = startY; // 現在地のY座標
    this.direction = 0; // 向いている方向。上は0、左は1、下は2、右は3
  }

  // 現在地のセルの色を読み取る
  readColor(density) {
    let index = 4 * (this.y * CELL_SIZE * density * width * density + this.x * CELL_SIZE * density);

    return { redValue: pixels[index], greenValue: pixels[index + 1], blueValue: pixels[index + 2] };
  }

  // 現在地のセルの色を指定した色に変える
  changeColor(density, { redValue, greenValue, blueValue }) {
    loadPixels();

    for (let i = 0; i < CELL_SIZE * density; i += 1) {
      for (let j = 0; j < CELL_SIZE * density; j += 1) {
        let index =
          4 *
          ((this.y * CELL_SIZE * density + j) * width * density +
            (this.x * CELL_SIZE * density + i));

        pixels[index] = redValue;
        pixels[index + 1] = greenValue;
        pixels[index + 2] = blueValue;
      }
    }

    updatePixels();
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
    loadPixels();

    let density = pixelDensity();
    const color = this.readColor(density);

    // 白の場合
    if (this.isWhite(color)) {
      // セルを赤に塗る
      this.changeColor(density, { redValue: 255, greenValue: 0, blueValue: 0 });
      // 右を向く
      this.direction = (this.direction + 3) % 4;

      // 赤の場合
    } else if (this.isRed(color)) {
      // セルを緑に塗る
      this.changeColor(density, { redValue: 0, greenValue: 255, blueValue: 0 });
      // 右を向く
      this.direction = (this.direction + 3) % 4;

      // 緑の場合
    } else if (this.isGreen(color)) {
      // セルを青に塗る
      this.changeColor(density, { redValue: 0, greenValue: 0, blueValue: 255 });
      // 左を向く
      this.direction = (this.direction + 1) % 4;

      // 青の場合
    } else if (this.isBlue(color)) {
      // セルを白に塗る
      this.changeColor(density, { redValue: 255, greenValue: 255, blueValue: 255 });
      // 左を向く
      this.direction = (this.direction + 1) % 4;
    }

    // 現在向いている方向に1セル進む
    this.move();
  }

  isRed({ redValue, greenValue, blueValue }) {
    return redValue === 255 && greenValue === 0 && blueValue === 0;
  }

  isGreen({ redValue, greenValue, blueValue }) {
    return redValue === 0 && greenValue === 255 && blueValue === 0;
  }

  isBlue({ redValue, greenValue, blueValue }) {
    return redValue === 0 && greenValue === 0 && blueValue === 255;
  }

  isWhite({ redValue, greenValue, blueValue }) {
    return redValue === 255 && greenValue === 255 && blueValue === 255;
  }
}

// #minacoding 2026 June 16th, Glitch
// Choroari is a simulator of a 2-dimensional 1-state Turing machine.
// It reads the color of the cells on the plane and moves as follows:
// - If the cell is white, paint it red and move it to the right.
// - If the cell is red, paint it green and move it to the right.
// - If the cell is green, paint it blue and move it to the left.
// - If the cell is blue, paint it white and move it to the left.
// By clicking on the screen, you can randomly drop small white, red, green, or blue squares onto the plane.
// Choroari draw a symmetrical pattern if all initial cells are white.
// If you drop various squares, what will happen to the trajectory of Choroari?
//
// 2次元1状態チューリングマシンのシミュレーター「チョロアリ」です。
// 平面上のセルの色を読み取り、次のように動きます。
// - セルが白なら、赤に塗って右に移動
// - セルが赤なら、緑に塗って右に移動
// - セルが緑なら、青に塗って左に移動
// - セルが青なら、白に塗って左に移動
// 画面をクリックすると、平面上にランダムで白、赤、緑、青の小さな四角形を投下することができます。
// チョロアリは初期のセルがすべて白なら上下対称の模様を描きますが、
// あなたが様々な四角形を投下すると、チョロアリの軌跡はどうなるでしょう？
