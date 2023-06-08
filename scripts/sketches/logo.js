let logo;
t = 0;
preload = () => {
  logo = loadModel('assets/3d-data/hiroya-web-studio-logo.obj', true);
};

draw = () => {
  t++ || createCanvas((W = 500), W, WEBGL);
  background(0);
  scale(1.5);
  rotateY(frameCount * 0.01);
  normalMaterial();
  model(logo);
};
// #つぶやきProcessing #p5js #dailycodingseed
