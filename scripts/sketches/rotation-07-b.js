t=0
w=360
draw=_=>{t||(createCanvas(W=720,W),colorMode(HSB),noStroke(),B=blendMode,S=sin)
t+=.01
B(BLEND)
background(0,.1)
B(ADD)
translate(x=7.2*S(PI*t),x)
rotate(t)
for(r=0;r<48;r+=.1){fill(((t*90)%200)+(R=r*2),R,R,.2)
ellipse(tan(R+t)*w+w,S(t+r/noise(3,9))*S(r*5+t)*w+w,24,8)}}

// #つぶやきProcessing #p5js
// #minacoding2026 June 15th, Rotation
