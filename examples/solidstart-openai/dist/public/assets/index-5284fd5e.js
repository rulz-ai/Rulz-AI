import{g as r,a,i as l,e as x,b as E,d as N,t as s}from"./entry-client-e2f3eefd.js";import{a as I}from"./index-0b421805.js";const L=s('<div class="flex flex-col w-full max-w-md py-24 mx-auto stretch"><!#><!/><!#><!/><!#><!/><form><input class="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl" placeholder="Say something...">'),M=s('<pre class="p-4 text-sm bg-gray-100">'),k=s('<div class="fixed top-0 left-0 w-full p-4 text-center bg-red-500 text-white">');function R(){const{completion:g,input:_,setInput:$,handleSubmit:f,error:i,data:o}=I(),b=e=>{$(e.target.value)};return(()=>{const e=r(L),h=e.firstChild,[c,S]=a(h.nextSibling),w=c.nextSibling,[d,v]=a(w.nextSibling),y=d.nextSibling,[m,C]=a(y.nextSibling),u=m.nextSibling,p=u.firstChild;return l(e,(()=>{const n=x(()=>!!o());return()=>n()&&(()=>{const t=r(M);return l(t,()=>JSON.stringify(o(),null,2)),t})()})(),c,S),l(e,(()=>{const n=x(()=>!!i());return()=>n()&&(()=>{const t=r(k);return l(t,()=>i()?.message),t})()})(),d,v),l(e,g,m,C),E(u,"submit",f),p.addEventListener("change",b),N(()=>p.value=_()),e})()}export{R as default};
