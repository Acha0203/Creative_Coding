t = 0;
draw = () => {
  t++ || createCanvas((W = 500), W);
  
  const layer = createGraphics(width, height);
  layer.background(255);
  layer.textSize(300);
  layer.text('😸', 100, 350);
  image(layer, 0, 0);
};
