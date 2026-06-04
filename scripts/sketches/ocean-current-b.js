t=0
draw=_=>{t||(createCanvas(W=720,W),colorMode(HSB),noStroke(),h=240,H=360,B=blendMode)
t+=.01
B(BLEND)
background(h,h,20,.1)
B(ADD)
for(r=0;r<30;r+=.1){fill(h+r,s=8*r,s,.2)
ellipse(tan(r*2+t)*H+H,sin(t+r/noise(3,9))*sin(r*3+t)*h+H,15,5)}}

// #つぶやきProcessing #p5js
// #minacoding 2026 June 5th, Sea
// An image of an ocean current or a school of fish.