const CellType = {
  None: 0,
  Wall: 1,
};

const chipWidth = 8;
const chipHeight = 8;
const tileWidth = 40;
const tileHeight = 40;
const cellWidth = 4;
const cellHeight = 5;
let chip;
let map;

function preload() {
  chip = loadImage('images/4.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();

  map = [];
  for (let i = 0; i < cellWidth * cellHeight; i++) {
    map[i] = random([CellType.None, CellType.Wall]);
  }

  for (let y = 0; y < cellHeight; y++) {
    for (let x = 0; x < cellWidth; x++) {
      if (getCell(x, y) === CellType.Wall) {
        updateTile(x, y);
      }
    }
  }
}

function getCell(x, y) {
  return map[y * cellWidth + x];
}

function updateTile(x, y) {
  let index = 0;
  if (0 <= y - 1 && getCell(x, y - 1) === CellType.Wall) {
    index += 1;
  }
  if (x + 1 < cellWidth && getCell(x + 1, y) === CellType.Wall) {
    index += 2;
  }
  if (y + 1 < cellHeight && getCell(x, y + 1) === CellType.Wall) {
    index += 4;
  }
  if (0 <= x - 1 && getCell(x - 1, y) === CellType.Wall) {
    index += 8;
  }

  copy(
    chip,
    index * chipWidth,
    0,
    chipWidth,
    chipHeight,
    x * tileWidth,
    y * tileHeight,
    tileWidth,
    tileHeight
  );
}
