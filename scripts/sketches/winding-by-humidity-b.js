t=0
draw=_=>{t++||(createCanvas(W=720,W),noStroke(),H=(X,r,b,R,B)=>{for(i=0;i<30;i++){x=X+5*i;fill(r+(R-r)/30*i,0,b+(B-b)/30*i);for(j=1;j<W;j++){circle(x+W*(j*0.0002)*sin((j*5*TAU)/W)*(1-abs((t%120)/60-1)),j,5)}}})
background(0)
H(210,0,0,30,150)
H(W/2,60,200,0,0)}

// #minacoding 2026 June 12th, Rainy
// Our hair gets winding during the rainy season...
