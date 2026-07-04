// x=(1+sin(1πu)sin(1πv))sin(4πv)
// y=(1+sin(1πu)sin(1πv))cos(4πv)
// z=cos(1πu)sin(1πv)+4v-2
// 0≦u≦1
// 0≦v≦1
function setup() {
  createCanvas(800, 800, WEBGL);
  ortho(-width / 2, width / 2, -height / 2, height / 2, -5000, 5000);
}

function draw() {
  background(0);

  let scl = 100;
  orbitControl();
  for (let v = 0; v < 1; v += 1 / 100) {
    for (let u = 0; u < 1; u += 1 / 100) {
      let x = (1 + sin(1 * PI * u) * sin(1 * PI * v)) * sin(4 * PI * v);
      let y = (1 + sin(1 * PI * u) * sin(1 * PI * v)) * cos(4 * PI * v);
      let z = cos(1 * PI * u) * sin(1 * PI * v) + 4 * v - 2;

      x *= scl;
      y *= scl;
      z *= scl;

      push();
      translate(x, y, z);
      box(10);
      pop();
    }
  }
}
