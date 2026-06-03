let i
t=0
n=90
preload=_=>{i=loadImage('i.png')}
draw=_=>{t++||(createCanvas(n*8,n*8,WEBGL),colorMode(HSB))
a=t*-.01
background(0)
blendMode(ADD)
texture(i)
rotateY(a)
Array.from({length:12},(_,i)=>1+i).forEach((r)=>{tint(t%(r*30),n,n)
cylinder(t%(r*n),200,n,1,0,0)})}
// #つぶやきProcessing #p5js
// #minacoding 2026 June 4th, Castle
