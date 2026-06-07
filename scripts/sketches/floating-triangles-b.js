t=0
r=360
draw=_=>{t++||(createCanvas(W=720,W),colorMode(HSB),noFill(),strokeWeight(2))
background(0,.1)
a=0
translate(t%W,t%W)
rotate((t*TAU)/r)
for(i=0;i<r;i+=5){stroke(t%(r-i),60,90)
w=W/4
h=w*sqrt(3)
a+=i
rotate(((t*PI*.1)/r)*a)
triangle(-w,y=-h/3,w,y,0,h*2/3)
scale(.8)}}

// #つぶやきProcessing #p5js
// #minacoding 2026 June 8th, Triangle
