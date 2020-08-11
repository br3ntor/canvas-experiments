!function(t){var i={};function e(s){if(i[s])return i[s].exports;var h=i[s]={i:s,l:!1,exports:{}};return t[s].call(h.exports,h,h.exports,e),h.l=!0,h.exports}e.m=t,e.c=i,e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(e.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var h in t)e.d(s,h,function(i){return t[i]}.bind(null,h));return s},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=0)}([function(t,i,e){"use strict";function s(t,i){return{x:t.x*Math.cos(i)-t.y*Math.sin(i),y:t.x*Math.sin(i)+t.y*Math.cos(i)}}function h(t,i){const e=t.velocity.x-i.velocity.x,h=t.velocity.y-i.velocity.y;if(e*(i.x-t.x)+h*(i.y-t.y)>=0){const e=-Math.atan2(i.y-t.y,i.x-t.x),h=t.mass,o=i.mass,n=s(t.velocity,e),r=s(i.velocity,e),a={x:n.x*(h-o)/(h+o)+2*r.x*o/(h+o),y:n.y},l={x:r.x*(h-o)/(h+o)+2*n.x*o/(h+o),y:r.y},c=s(a,-e),d=s(l,-e);t.velocity.x=c.x,t.velocity.y=c.y,i.velocity.x=d.x,i.velocity.y=d.y}}function o(t,i){return Math.floor(Math.random()*(i-t+1)+t)}function n(){return"#"+Math.floor(16777215*Math.random()).toString(16)}function r(t,i,e,s){let h=e-t,o=s-i;return Math.sqrt(Math.pow(h,2)+Math.pow(o,2))}e.r(i);class a{constructor(t,i,e,s,h,o,n=!0){this.x=t,this.y=i,this.xSpeed=h,this.ySpeed=o,this.velocity={x:this.xSpeed,y:this.ySpeed},this.radius=e,this.color=s,this.mass=1,this.opacity=.2,this.wallCollision=n}draw(){p.beginPath(),p.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),p.lineWidth=2,p.fillStyle=this.color,p.save(),p.globalAlpha=this.opacity,p.fill(),p.restore(),p.strokeStyle=this.color,p.stroke()}update(t,i){this.draw();for(let i=0;i<t.length;i++){if(this===t[i])continue;r(this.x,this.y,t[i].x,t[i].y)-this.radius-t[i].radius<0&&(h(this,t[i]),this.opacity=.6,t[i].opacity=.6)}if(this.opacity>.02&&(this.opacity-=.02,this.opacity=Math.max(0,this.opacity)),this.wallCollision){const t=j?105:0;(this.x-this.radius<=t||this.x+this.radius>=innerWidth)&&(this.velocity.x=-this.velocity.x),(this.y-this.radius<=0||this.y+this.radius>=innerHeight)&&(this.velocity.y=-this.velocity.y)}else this.x-this.radius>innerWidth&&(this.x=0-this.radius),this.x+this.radius<0&&(this.x=innerWidth+this.radius),this.y-this.radius>innerHeight&&(this.y=0-this.radius),this.y+this.radius<0&&(this.y=innerHeight+this.radius);r(this.x,this.y,i.x,i.y)-this.radius-i.radius<=0&&(this.opacity=1,cancelAnimationFrame(b),y(),setTimeout(()=>{alert("You lose"),d(),u()})),this.x+=this.velocity.x,this.y+=this.velocity.y}}class l{constructor(t,i,e,s){this.x=t,this.y=i,this.speed=3,this.radius=e,this.color=s}draw(){p.beginPath(),p.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),p.fillStyle=this.color,p.fill()}update(t){this.draw();const i=w.x-this.x,e=w.y-this.y,s=Math.atan2(e,i),h=Math.cos(s)*this.speed,o=Math.sin(s)*this.speed;(Math.abs(i)>2||Math.abs(e)>2)&&(t&&this.x+this.radius>=95&&i>2?this.x=95-this.radius:this.x+=h,this.y+=o)}}class c{constructor(t,i,e,s){this.x=t,this.y=i,this.width=e,this.height=s,this.fill=!1}draw(){!0===this.fill?(p.fillStyle="#7bf977",p.fillRect(this.x,this.y,this.width,this.height),cancelAnimationFrame(b),setTimeout(()=>{alert(`You beat level ${S+1}!`),S<E.length-1?S+=1:S=0,d(),u()})):(p.strokeStyle="#7bf977",p.strokeRect(this.x,this.y,this.width,this.height))}update(t){this.draw(),t.x-t.radius>this.x&&t.y-t.radius>this.y&&t.y+t.radius<this.y+this.height?this.fill=!0:this.fill=!1}}function d(){m=[],v=null,j=!0,M=null,m=function(t){const i=[],e=t.objects();for(let s=0;s<e;s++){const e=t.radius();let h=t.x(e,105),o=t.y(e);const n=t.xSpeed(),l=t.ySpeed(),c=t.color();if(0!==s){let s=0;for(let n=0;n<i.length;n++){if(s>100){console.log("Not enough space for circles!");break}r(h,o,i[n].x,i[n].y)-e-i[n].radius<0&&(h=t.x(e,105),o=t.y(e),n=-1,s++)}}i.push(new a(h,o,e,c,n,l,t.wallCollision))}return i}(E[S]);const t=o(30,70),i=o(30,f.height-30);v=new l(t,i,30,"red");const e=f.width-100,s=f.height/2-80;return M=new c(e,s,100,160),"Initialized game objects."}function u(){b=requestAnimationFrame(u),p.clearRect(0,0,f.width,f.height),M.update(v),!0===j?(p.beginPath(),p.moveTo(100,0),p.lineTo(100,f.height),p.lineWidth=10,p.strokeStyle="#eeeeee",p.stroke(),y()):m.forEach(t=>{t.update(m,v)}),v.update(j)}function y(){m.forEach(t=>{t.draw()})}function x(){return Math.floor(innerHeight/100+innerWidth/200)}const f=document.getElementById("canvas"),p=f.getContext("2d");f.width=innerWidth,f.height=innerHeight,f.style.background="#0c0c0c";const g=["#2185C5","#7ECEFD","#FFF6E5","#FF7F66"];let m,v,M,b,w={x:30,y:innerHeight/2},S=0,j=!0;const E=[{objects:()=>x(),radius:()=>60*Math.random()+15,x:(t,i)=>o(t+i,f.width-t),y:t=>o(t,f.height-t),xSpeed:()=>5*(Math.random()-.5),ySpeed:()=>5*(Math.random()-.5),color:()=>n()},{wallCollision:!1,objects:()=>x()+10,radius:()=>30,x:(t,i)=>o(t+i,f.width-t),y:t=>o(t,f.height-t),ySpeed:()=>8*(Math.random()-.5),xSpeed:()=>1*(Math.random()-.5),color:()=>function(t){return t[Math.floor(Math.random()*t.length)]}(g)},{objects:()=>x()+20,radius:()=>10,x:(t,i)=>o(t+i,f.width-t),y:t=>o(t,f.height-t),xSpeed:()=>3,ySpeed:()=>0,color:()=>`hsl(${o(0,360)}deg 100% 50%)`},{objects:()=>x()-5,radius:()=>100,x:(t,i)=>o(t+i,f.width-t),y:t=>o(t,f.height-t),xSpeed:()=>2*(Math.random()-.5),ySpeed:()=>2*(Math.random()-.5),color:()=>n()}];addEventListener("mousemove",t=>{w.x=t.clientX,w.y=t.clientY}),addEventListener("resize",t=>{f.width=innerWidth,f.height=innerHeight,d()}),addEventListener("click",t=>{r(t.clientX,t.clientY,v.x,v.y)<v.radius&&(j=!1)}),addEventListener("contextmenu",t=>{t.preventDefault(),d()}),d(),u()}]);