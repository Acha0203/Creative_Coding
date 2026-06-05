let img, images;

function preload() {
  img = loadImage('images/0.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  imageMode(CENTER);

  images = [];
  for (let i = 0; i < 5; i++) {
    images.push({ x: 0, y: 0 });
  }
}

function draw() {
  clear();

  for (let i = 0; i < images.length; i++) {
    const cur = images[i];
    if (i === 0) {
      cur.x = mouseX;
      cur.y = mouseY;
    } else {
      const prev = images[i - 1];
      cur.x = cur.x + (prev.x - cur.x) / 10;
      cur.y = cur.y + (prev.y - cur.y) / 10;
    }

    image(img, cur.x, cur.y, img.width, img.height);
  }
}
