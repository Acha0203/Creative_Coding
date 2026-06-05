I=40
t=0
draw=_=>{t||(createCanvas(W=720,W),colorMode(HSB),noStroke())
background(0,.05)
t+=.5
for(i=1;i<18;i++){x=(t+i*I)%W
y=W/2+W*sin(((x+(i/noise(I)))*8*TAU)/W)*.3
fill(t%(i*I),90,90,.2)
circle(x,y,I*sin(i))}}

// #つぶやきProcessing #p5js
// #minacoding 2026 June 6th, Place
// I coded this on p5.js Web Editor.