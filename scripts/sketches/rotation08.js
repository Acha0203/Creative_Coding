const SHAPE_COUNT = 40;
const springing = 0.0009;
const damping = 0.98;

let screenDiagonal = 0.0;
let permissionGranted = false;

let shapes = [];

class Shape {
  constructor(direction) {
    this.direction = direction;
    this.centerX = random(width);
    this.centerY = random(height);
    this.radius = random(20, 70);
    this.nodes = floor(random(3, 8));
    this.rotAngle = random(360);
    this.accelX = 0;
    this.accelY = 0;
    this.organicConstant = 1.0;

    // 上方向グループ: -90〜90度（上半分）、下方向グループ: 90〜270度（下半分）
    this.targetAngle = direction === 'up' ? random(-90, 90) : random(90, 270);

    this.nodeStartX = new Array(this.nodes).fill(0);
    this.nodeStartY = new Array(this.nodes).fill(0);
    this.nodeX = new Array(this.nodes).fill(0);
    this.nodeY = new Array(this.nodes).fill(0);
    this.angle = Array.from({ length: this.nodes }, () => random(360));
    this.frequency = Array.from({ length: this.nodes }, () => random(5, 12));

    this._initColors();
  }

  _initColors() {
    let hue;

    if (this.direction === 'up') {
      hue = random(110, 200);
    } else {
      hue = random(210, 300);
    }

    const brightness = random(30, 80);

    this.color = color(hue, 70, brightness);
  }

  draw() {
    for (let i = 0; i < this.nodes; i++) {
      this.nodeStartX[i] = this.centerX + cos(this.rotAngle) * this.radius;
      this.nodeStartY[i] = this.centerY + sin(this.rotAngle) * this.radius;
      this.rotAngle += 360.0 / this.nodes;
    }

    curveTightness(this.organicConstant);
    fill(this.color);
    noStroke();

    beginShape();

    for (let i = 0; i < this.nodes; i++) {
      curveVertex(this.nodeX[i], this.nodeY[i]);
    }

    endShape(CLOSE);
  }

  move() {
    const a = rotationZ + this.targetAngle;
    const targetX = constrain(width / 2 + screenDiagonal * sin(a), 0, width);
    const targetY = constrain(height / 2 - screenDiagonal * cos(a), 0, height);

    const dx = (targetX - this.centerX) * springing;
    const dy = (targetY - this.centerY) * springing;

    this.accelX += dx;
    this.accelY += dy;
    this.centerX += this.accelX;
    this.centerY += this.accelY;
    this.accelX *= damping;
    this.accelY *= damping;

    this.organicConstant = constrain(1 - (abs(this.accelX) + abs(this.accelY)) * 0.1, 0, 1);

    for (let i = 0; i < this.nodes; i++) {
      this.nodeX[i] = this.nodeStartX[i] + sin(this.angle[i]) * (this.accelX * 2);
      this.nodeY[i] = this.nodeStartY[i] + sin(this.angle[i]) * (this.accelY * 2);
      this.angle[i] += this.frequency[i];
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  angleMode(DEGREES);

  buildPermissionOverlay();

  screenDiagonal = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));

  for (let i = 0; i < SHAPE_COUNT; i++) {
    shapes.push(new Shape(i < SHAPE_COUNT / 2 ? 'up' : 'down'));
  }
}

function draw() {
  blendMode(BLEND);
  background(0, 10);
  blendMode(HARD_LIGHT);

  for (const s of shapes) {
    s.move();
    s.draw();
  }
}

function buildPermissionOverlay() {
  const overlay = createDiv('');

  overlay.id('permission-overlay');
  overlay.style('position', 'fixed');
  overlay.style('inset', '0');
  overlay.style('display', 'flex');
  overlay.style('flex-direction', 'column');
  overlay.style('align-items', 'center');
  overlay.style('justify-content', 'center');
  overlay.style('gap', '32px');
  overlay.style('background', 'rgba(0,0,0,0.75)');
  overlay.style('z-index', '9999');
  overlay.style('padding', '32px');
  overlay.style('box-sizing', 'border-box');

  const msg = createP('To run this sketch, you need to allow access to the sensor.');

  msg.parent(overlay);
  msg.style('color', '#fff');
  msg.style('font-size', '18px');
  msg.style('text-align', 'center');
  msg.style('margin', '0');
  msg.style('max-width', '320px');
  msg.style('line-height', '1.6');

  const btnRow = createDiv('');

  btnRow.parent(overlay);
  btnRow.style('display', 'flex');
  btnRow.style('gap', '16px');

  const btnStyles = (el) => {
    el.style('font-size', '16px');
    el.style('padding', '12px 28px');
    el.style('border', 'none');
    el.style('border-radius', '8px');
    el.style('cursor', 'pointer');
  };

  const btnOk = createButton('OK');

  btnOk.parent(btnRow);
  btnOk.style('background', '#fff');
  btnOk.style('color', '#000');
  btnStyles(btnOk);
  btnOk.mousePressed(() => {
    removeOverlay();
    requestAccess();
  });

  const btnDeny = createButton("Don't Allow");

  btnDeny.parent(btnRow);
  btnDeny.style('background', '#333');
  btnDeny.style('color', '#fff');
  btnStyles(btnDeny);
  btnDeny.mousePressed(removeOverlay);
}

function removeOverlay() {
  const overlay = select('#permission-overlay');

  if (overlay) overlay.remove();
}

function requestAccess() {
  if (
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function'
  ) {
    DeviceOrientationEvent.requestPermission()
      .then((permissionState) => {
        if (permissionState === 'granted') {
          permissionGranted = true;
        }
      })
      .catch(console.error);
  } else {
    permissionGranted = true;
  }
}

// #minacoding 2026 June 25th, Mobile View
// Rotating your smartphone will move the polygons according to the movements.
// スマートフォンを上下左右にぐるぐる回すと、その動きに合わせて多角形が動きます。
