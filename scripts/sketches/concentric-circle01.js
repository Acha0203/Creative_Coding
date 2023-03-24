let colors = [
  '#d9ed92',
  '#b5e48c',
  '#99d98c',
  '#76c893',
  '#52b69a',
  '#34a0a4',
  '#168aad',
  '#1a759f',
  '#1e6091',
  '#184e77',
];

function setup() {
  createCanvas((w = 720), w);
  colorMode(HSB);
  background(random(colors));
  noFill();

  for (let i = 0; i < 15; i++) {
    push();
    translate(random(-150, w + 150), random(-150, w + 150));
    circles_draw(random(50, 450), random(3, 30));
    pop();
  }
}

function circles_draw(max_size, step_size) {
  let c_size = 0;
  while (c_size < max_size) {
    strokeWeight(random(1, 8));
    stroke(random(colors) + 'D0');
    if (random() < 0.2) {
      circle(0, 0, c_size);
    } else {
      arc(0, 0, c_size, c_size, random(TAU), random(TAU));
    }
    c_size += step_size;
  }
}
