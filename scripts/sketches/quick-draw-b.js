t=0
draw=_=>{t++||(createCanvas(W=720,W),colorMode(HSB),noFill(),B=blendMode,C=circle)
B(BLEND)
background(0,.05)
B(ADD)
x=y=W/2
r=1
for(i=0;i<x;i++){stroke((t+i)%90,(t+i)%50,(t+i)%50,.1)
C(x-r,y,r*2)
C(x+r,y,r*2)
r+=5}}

// #つぶやきProcessing #p5js
// #minacoding 2026 June 18th, Quick
