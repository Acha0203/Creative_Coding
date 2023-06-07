t = x = y = a = angle = size = 0;

draw = () => {
  t++ || (createCanvas(windowWidth, windowHeight), noStroke());

  if (t % 5 === 0) {
    for (i = 0; i < height; i++) {
      fill(30, 30, map(i, 0, height, 100, 200));
      rect(0, i, width, 1);
    }

    for (i = 0; i < floor(height / 50); i++) {
      x = 0;
      y = i * 50;

      fill(random(50, 100), random(100, 150), 255, random(0, 10));
      size = random(i * 5, 50 + i * 5);

      while (x < width) {
        circle(x, y, size);

        a = random(5, 10);
        angle = t * random(0.01, 0.1) + random(PI);
        x += a * abs(sin(angle));
        y += a * cos(angle);
        t++;
      }
    }
  }
};
// #p5js #p5勉強会 #minacoding Day 9
