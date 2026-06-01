t=0
d=1
draw=_=>{t++||(createCanvas(W=660,W),colorMode(HSB),noStroke(),w=W/2)
background(0,.1)
i=1
h=W
while(i<7){n=i*i+7
h=h/2
for(r=0;r<TAU;r+=PI/n){a=r+noise(t/h)*n*d
l=noise(t/50)*h
x=tan(cos(a))*l+w
y=tan(sin(a))*l+w
fill(t%h,50,h)
circle(x,y,l/20)
d=-d}i++}}

// #つぶやきProcessing #p5js
// #minacoding 2026 June 2nd, Music
// Coded while listening to the String Sextet by Brahms.