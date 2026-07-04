t=0
draw=_=>{t++||(createCanvas(W=720,W),colorMode(HSB),noStroke())
background(0,.05)
for(i=0;i<9;i++){F=n=>W*noise(t/40,n*9+i)
s=W/20
for(j=1;j<=s;j++){B=(a,b,c,d)=>bezierPoint(F(a),F(b),F(c),F(d),j/s)
x=B(0,1,2,3)
y=B(4,5,6,7)
fill((t+j*i)%360,90,90,.03)
circle(x,y,j)}}}

// #minacoding 2026 June 7th, Energetic
