import{E as J,C as an}from"./constant-2fe7eae5-45b4460e.js";import{am as tn,an as V,ao as H,ap as rn,aq as l,al as on,ar as k,as as $,at as un,au as y,av as cn,aw as sn,ax as yn}from"./mermaid.esm.min-6588eb75.js";function en(i){return i.innerRadius}function fn(i){return i.outerRadius}function ln(i){return i.startAngle}function mn(i){return i.endAngle}function pn(i){return i&&i.padAngle}function xn(i,h,S,O,v,d,K,r){var o=S-i,n=O-h,p=K-v,a=r-d,u=a*o-p*n;if(!(u*u<l))return u=(p*(h-d)-a*(i-v))/u,[i+u*o,h+u*n]}function U(i,h,S,O,v,d,K){var r=i-S,o=h-O,n=(K?d:-d)/k(r*r+o*o),p=n*o,a=-n*r,u=i+p,e=h+a,f=S+p,X=O+a,s=(u+f)/2,b=(e+X)/2,x=f-u,m=X-e,R=x*x+m*m,z=v-d,w=u*X-f*e,A=(m<0?-1:1)*k(yn(0,z*z*R-w*w)),I=(w*m-x*A)/R,g=(-w*x-m*A)/R,D=(w*m+x*A)/R,T=(-w*x+m*A)/R,t=I-s,c=g-b,N=D-s,P=T-b;return t*t+c*c>N*N+P*P&&(I=D,g=T),{cx:I,cy:g,x01:-p,y01:-a,x11:I*(v/z-1),y11:g*(v/z-1)}}function vn(){var i=en,h=fn,S=J(0),O=null,v=ln,d=mn,K=pn,r=null;function o(){var n,p,a=+i.apply(this,arguments),u=+h.apply(this,arguments),e=v.apply(this,arguments)-rn,f=d.apply(this,arguments)-rn,X=un(f-e),s=f>e;if(r||(r=n=an()),u<a&&(p=u,u=a,a=p),!(u>l))r.moveTo(0,0);else if(X>on-l)r.moveTo(u*V(e),u*H(e)),r.arc(0,0,u,e,f,!s),a>l&&(r.moveTo(a*V(f),a*H(f)),r.arc(0,0,a,f,e,s));else{var b=e,x=f,m=e,R=f,z=X,w=X,A=K.apply(this,arguments)/2,I=A>l&&(O?+O.apply(this,arguments):k(a*a+u*u)),g=$(un(u-a)/2,+S.apply(this,arguments)),D=g,T=g,t,c;if(I>l){var N=cn(I/a*H(A)),P=cn(I/u*H(A));(z-=N*2)>l?(N*=s?1:-1,m+=N,R-=N):(z=0,m=R=(e+f)/2),(w-=P*2)>l?(P*=s?1:-1,b+=P,x-=P):(w=0,b=x=(e+f)/2)}var Z=u*V(b),_=u*H(b),C=a*V(R),E=a*H(R);if(g>l){var L=u*V(x),M=u*H(x),W=a*V(m),B=a*H(m),Q;if(X<tn&&(Q=xn(Z,_,W,B,L,M,C,E))){var F=Z-Q[0],G=_-Q[1],j=L-Q[0],Y=M-Q[1],q=1/H(sn((F*j+G*Y)/(k(F*F+G*G)*k(j*j+Y*Y)))/2),nn=k(Q[0]*Q[0]+Q[1]*Q[1]);D=$(g,(a-nn)/(q-1)),T=$(g,(u-nn)/(q+1))}}w>l?T>l?(t=U(W,B,Z,_,u,T,s),c=U(L,M,C,E,u,T,s),r.moveTo(t.cx+t.x01,t.cy+t.y01),T<g?r.arc(t.cx,t.cy,T,y(t.y01,t.x01),y(c.y01,c.x01),!s):(r.arc(t.cx,t.cy,T,y(t.y01,t.x01),y(t.y11,t.x11),!s),r.arc(0,0,u,y(t.cy+t.y11,t.cx+t.x11),y(c.cy+c.y11,c.cx+c.x11),!s),r.arc(c.cx,c.cy,T,y(c.y11,c.x11),y(c.y01,c.x01),!s))):(r.moveTo(Z,_),r.arc(0,0,u,b,x,!s)):r.moveTo(Z,_),!(a>l)||!(z>l)?r.lineTo(C,E):D>l?(t=U(C,E,L,M,a,-D,s),c=U(Z,_,W,B,a,-D,s),r.lineTo(t.cx+t.x01,t.cy+t.y01),D<g?r.arc(t.cx,t.cy,D,y(t.y01,t.x01),y(c.y01,c.x01),!s):(r.arc(t.cx,t.cy,D,y(t.y01,t.x01),y(t.y11,t.x11),!s),r.arc(0,0,a,y(t.cy+t.y11,t.cx+t.x11),y(c.cy+c.y11,c.cx+c.x11),s),r.arc(c.cx,c.cy,D,y(c.y11,c.x11),y(c.y01,c.x01),!s))):r.arc(0,0,a,R,m,s)}if(r.closePath(),n)return r=null,n+""||null}return o.centroid=function(){var n=(+i.apply(this,arguments)+ +h.apply(this,arguments))/2,p=(+v.apply(this,arguments)+ +d.apply(this,arguments))/2-tn/2;return[V(p)*n,H(p)*n]},o.innerRadius=function(n){return arguments.length?(i=typeof n=="function"?n:J(+n),o):i},o.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:J(+n),o):h},o.cornerRadius=function(n){return arguments.length?(S=typeof n=="function"?n:J(+n),o):S},o.padRadius=function(n){return arguments.length?(O=n==null?null:typeof n=="function"?n:J(+n),o):O},o.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:J(+n),o):v},o.endAngle=function(n){return arguments.length?(d=typeof n=="function"?n:J(+n),o):d},o.padAngle=function(n){return arguments.length?(K=typeof n=="function"?n:J(+n),o):K},o.context=function(n){return arguments.length?(r=n??null,o):r},o}export{vn as h};
