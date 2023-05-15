t=a=l=x=y=0,d=1,w=300,H=100
draw=()=>{t++||(createCanvas(W=600,W),colorMode(HSB),noStroke())
background(0,0.05)
C(6,200,0.1)
C(10,w,2)}
C=(n,m,o)=>{fill((t+n*3)%(w),H,H)
for(let r=0;r<TAU;r+=PI/n){
a=r+sin(t/50)*o*d
l=noise(t/H)*m
x=cos(a)*l+w
y=sin(a)*l+w
circle(x,y,l/20)
d=-d}}
// #つぶやきProcessing #p5js
