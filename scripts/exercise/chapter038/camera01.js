let img, cam, imgX, imgY, screenWidth, screenHeight, s, obj, vx, vy;

function preload() {
  img = loadImage('images/Mandelbrot_test.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cam = Camera.create(0, 0, 300, 300);

  imgX = 100;
  imgY = 100;

  screenWidth = img.width;
  screenHeight = img.height;

  s = 0.3;

  obj = { x: 100, y: 100 };
  vx = 1;
  vy = 1;
  Camera.setTarget(cam, obj);
}

function draw() {
  clear();

  const sx = cam.x - imgX;
  const sy = cam.y - imgY;
  const sw = cam.width;
  const sh = cam.height;
  const dx = 0;
  const dy = 0;
  const dw = sw;
  const dh = sh;
  copy(img, sx, sy, sw, sh, dx, dy, dw, dh);

  push();
  strokeWeight(4);
  stroke(240);
  noFill();
  rect(0, 0, cam.width, cam.height);
  pop();

  if (mouseIsPressed) {
    if (mouseX < width / 2) {
      cam.x--;
    } else {
      cam.x++;
    }
  }

  Camera.update(cam);
  obj.x += vx;
  obj.y += vy;
  if (obj.x < 0) {
    obj.x = 0;
    vx *= -1;
  }
  if (obj.x >= screenWidth) {
    obj.x = screenWidth - 1;
    vx *= -1;
  }
  if (obj.y < 0) {
    obj.y = 0;
    vy *= -1;
  }
  if (obj.y >= screenHeight) {
    obj.y = screenHeight - 1;
    vy *= -1;
  }

  translate(width / 2, 0); // ミニマップを描画する座標
  scale(s); // 縮小比率
  stroke(240);
  noFill();
  rect(0, 0, screenWidth, screenHeight);
  image(img, imgX, imgY);
  stroke(255, 0, 0);
  rect(cam.x, cam.y, cam.width, cam.height);
  fill(255, 0, 0);
  circle(obj.x, obj.y, 20);
  resetMatrix();
}

const Camera = {
  create: function (x, y, width, height) {
    return { x, y, width, height };
  },

  setTarget: function (cam, obj) {
    cam.obj = obj;
  },

  update: function (cam) {
    cam.x = obj.x - cam.width / 2;
    cam.y = obj.y - cam.height / 2;

    if (cam.x < 0) {
      cam.x = 0;
    }
    if (cam.x + cam.width >= screenWidth) {
      cam.x = screenWidth - cam.width - 1;
    }
    if (cam.y < 0) {
      cam.y = 0;
    }
    if (cam.y + cam.height >= screenHeight) {
      cam.y = screenHeight - cam.height - 1;
    }
  },
};
