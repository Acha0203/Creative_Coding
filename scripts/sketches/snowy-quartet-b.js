let i
t=0
preload=_=>{i=loadImage('i.png')}
draw=_=>{t++||(createCanvas(W=720,W,WEBGL),noStroke(),blendMode(ADD),H=push,P=pop,B=box,X=rotateX,Y=rotateY)
a=t*-.01
background(0)
texture(i)
Y(a)
H()
X(a)
B(W/4)
Y(a)
B(W/2)
H()
Y(a)
X(a)
B(W*(2/3))
P()
P()
B(W)}

// #つぶやきProcessing #p5js
// #minacoding 2026 June 3rd, Image