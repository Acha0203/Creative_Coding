t=0
d=1
draw=_=>{t++||(createCanvas(W=660,W),colorMode(HSB),noStroke(),w=W/2)
background(0,.1)
i=1
while(i<7){n=i*i+7
m=W/i
for(let r=0;r<TAU;r+=PI/n){a=r+noise(t/m)*n*d
l=noise(t/50)*m
x=tan(cos(a))*l+w
y=tan(sin(a))*l+w
fill(t%w,50,W)
circle(x,y,l/20)
d=-d}i++}}

// #つぶやきProcessing #p5js
// #minacoding 2026 June 2nd, Music
// Coded while listening to the string Sextet by Brahms.
