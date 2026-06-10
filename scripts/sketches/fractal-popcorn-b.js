t=0
w=360
draw=_=>{t||(createCanvas(W=720,W),colorMode(HSB),noStroke(),noLoop(),C=(x,y)=>x-0.05*sin(y+tan(3*y)),D=i=>-6+0.24*i)
background(0)
translate(w,w)
for(j=1;j<=50;j++){for(k=1;k<=50;k++){x=D(j)
y=D(k)
for(n=0;n<50;n++){X=C(x,y)
Y=C(y,x)
x=X
y=Y
fill((j*k+n)%w,90,n*2,0.5)
circle(x*150,y*150,5)}}}}

// Fractal Popcorn
// This code is based on 'Computer Recreation IV' by A. K. Dewdney.
