var jf=Object.defineProperty;var kl=Object.getOwnPropertySymbols;var Xf=Object.prototype.hasOwnProperty,Yf=Object.prototype.propertyIsEnumerable;var Gl=(i,e,t)=>e in i?jf(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Wl=(i,e)=>{for(var t in e||(e={}))Xf.call(e,t)&&Gl(i,t,e[t]);if(kl)for(var t of kl(e))Yf.call(e,t)&&Gl(i,t,e[t]);return i};const Zf=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};Zf();function Xa(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const Jf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$f=Xa(Jf);function qu(i){return!!i||i===""}function Ya(i){if(Oe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=yt(n)?ed(n):Ya(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(yt(i))return i;if(Et(i))return i}}const Kf=/;(?![^(]*\))/g,Qf=/:(.+)/;function ed(i){const e={};return i.split(Kf).forEach(t=>{if(t){const n=t.split(Qf);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Za(i){let e="";if(yt(i))e=i;else if(Oe(i))for(let t=0;t<i.length;t++){const n=Za(i[t]);n&&(e+=n+" ")}else if(Et(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Je={},Wi=[],jt=()=>{},td=()=>!1,nd=/^on[^a-z]/,ro=i=>nd.test(i),Ja=i=>i.startsWith("onUpdate:"),vt=Object.assign,$a=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},id=Object.prototype.hasOwnProperty,He=(i,e)=>id.call(i,e),Oe=Array.isArray,Pr=i=>so(i)==="[object Map]",rd=i=>so(i)==="[object Set]",Be=i=>typeof i=="function",yt=i=>typeof i=="string",Ka=i=>typeof i=="symbol",Et=i=>i!==null&&typeof i=="object",ju=i=>Et(i)&&Be(i.then)&&Be(i.catch),sd=Object.prototype.toString,so=i=>sd.call(i),od=i=>so(i).slice(8,-1),ad=i=>so(i)==="[object Object]",Qa=i=>yt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Vs=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oo=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},ld=/-(\w)/g,Ji=oo(i=>i.replace(ld,(e,t)=>t?t.toUpperCase():"")),cd=/\B([A-Z])/g,tr=oo(i=>i.replace(cd,"-$1").toLowerCase()),Xu=oo(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ao=oo(i=>i?`on${Xu(i)}`:""),Ws=(i,e)=>!Object.is(i,e),Co=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},qs=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},ud=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let ql;const hd=()=>ql||(ql=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let tn;class fd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&tn&&(this.parent=tn,this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){tn=this}off(){tn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function dd(i,e=tn){e&&e.active&&e.effects.push(i)}const el=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Yu=i=>(i.w&Wn)>0,Zu=i=>(i.n&Wn)>0,pd=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Wn},md=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Yu(r)&&!Zu(r)?r.delete(i):e[t++]=r,r.w&=~Wn,r.n&=~Wn}e.length=t}},va=new WeakMap;let Er=0,Wn=1;const ya=30;let qt;const oi=Symbol(""),ba=Symbol("");class tl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,dd(this,n)}run(){if(!this.active)return this.fn();let e=qt,t=Bn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qt,qt=this,Bn=!0,Wn=1<<++Er,Er<=ya?pd(this):jl(this),this.fn()}finally{Er<=ya&&md(this),Wn=1<<--Er,qt=this.parent,Bn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qt===this?this.deferStop=!0:this.active&&(jl(this),this.onStop&&this.onStop(),this.active=!1)}}function jl(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Bn=!0;const Ju=[];function nr(){Ju.push(Bn),Bn=!1}function ir(){const i=Ju.pop();Bn=i===void 0?!0:i}function Ft(i,e,t){if(Bn&&qt){let n=va.get(i);n||va.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=el()),$u(r)}}function $u(i,e){let t=!1;Er<=ya?Zu(i)||(i.n|=Wn,t=!Yu(i)):t=!i.has(qt),t&&(i.add(qt),qt.deps.push(i))}function Mn(i,e,t,n,r,s){const o=va.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Oe(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Oe(i)?Qa(t)&&a.push(o.get("length")):(a.push(o.get(oi)),Pr(i)&&a.push(o.get(ba)));break;case"delete":Oe(i)||(a.push(o.get(oi)),Pr(i)&&a.push(o.get(ba)));break;case"set":Pr(i)&&a.push(o.get(oi));break}if(a.length===1)a[0]&&Ma(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ma(el(l))}}function Ma(i,e){for(const t of Oe(i)?i:[...i])(t!==qt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gd=Xa("__proto__,__v_isRef,__isVue"),Ku=new Set(Object.getOwnPropertyNames(Symbol).map(i=>Symbol[i]).filter(Ka)),xd=nl(),_d=nl(!1,!0),vd=nl(!0),Xl=yd();function yd(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=We(this);for(let s=0,o=this.length;s<o;s++)Ft(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(We)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){nr();const n=We(this)[e].apply(this,t);return ir(),n}}),i}function nl(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Bd:ih:e?nh:th).get(n))return n;const o=Oe(n);if(!i&&o&&He(Xl,r))return Reflect.get(Xl,r,s);const a=Reflect.get(n,r,s);return(Ka(r)?Ku.has(r):gd(r))||(i||Ft(n,"get",r),e)?a:gt(a)?!o||!Qa(r)?a.value:a:Et(a)?i?rh(a):sl(a):a}}const bd=Qu(),Md=Qu(!0);function Qu(i=!1){return function(t,n,r,s){let o=t[n];if(zr(o)&&gt(o)&&!gt(r))return!1;if(!i&&!zr(r)&&(sh(r)||(r=We(r),o=We(o)),!Oe(t)&&gt(o)&&!gt(r)))return o.value=r,!0;const a=Oe(t)&&Qa(n)?Number(n)<t.length:He(t,n),l=Reflect.set(t,n,r,s);return t===We(s)&&(a?Ws(r,o)&&Mn(t,"set",n,r):Mn(t,"add",n,r)),l}}function wd(i,e){const t=He(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Mn(i,"delete",e,void 0),n}function Sd(i,e){const t=Reflect.has(i,e);return(!Ka(e)||!Ku.has(e))&&Ft(i,"has",e),t}function Td(i){return Ft(i,"iterate",Oe(i)?"length":oi),Reflect.ownKeys(i)}const eh={get:xd,set:bd,deleteProperty:wd,has:Sd,ownKeys:Td},Ed={get:vd,set(i,e){return!0},deleteProperty(i,e){return!0}},Ad=vt({},eh,{get:_d,set:Md}),il=i=>i,ao=i=>Reflect.getPrototypeOf(i);function rs(i,e,t=!1,n=!1){i=i.__v_raw;const r=We(i),s=We(e);e!==s&&!t&&Ft(r,"get",e),!t&&Ft(r,"get",s);const{has:o}=ao(r),a=n?il:t?ll:al;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function ss(i,e=!1){const t=this.__v_raw,n=We(t),r=We(i);return i!==r&&!e&&Ft(n,"has",i),!e&&Ft(n,"has",r),i===r?t.has(i):t.has(i)||t.has(r)}function os(i,e=!1){return i=i.__v_raw,!e&&Ft(We(i),"iterate",oi),Reflect.get(i,"size",i)}function Yl(i){i=We(i);const e=We(this);return ao(e).has.call(e,i)||(e.add(i),Mn(e,"add",i,i)),this}function Zl(i,e){e=We(e);const t=We(this),{has:n,get:r}=ao(t);let s=n.call(t,i);s||(i=We(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Ws(e,o)&&Mn(t,"set",i,e):Mn(t,"add",i,e),this}function Jl(i){const e=We(this),{has:t,get:n}=ao(e);let r=t.call(e,i);r||(i=We(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Mn(e,"delete",i,void 0),s}function $l(){const i=We(this),e=i.size!==0,t=i.clear();return e&&Mn(i,"clear",void 0,void 0),t}function as(i,e){return function(n,r){const s=this,o=s.__v_raw,a=We(o),l=e?il:i?ll:al;return!i&&Ft(a,"iterate",oi),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function ls(i,e,t){return function(...n){const r=this.__v_raw,s=We(r),o=Pr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?il:e?ll:al;return!e&&Ft(s,"iterate",l?ba:oi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Sn(i){return function(...e){return i==="delete"?!1:this}}function Cd(){const i={get(s){return rs(this,s)},get size(){return os(this)},has:ss,add:Yl,set:Zl,delete:Jl,clear:$l,forEach:as(!1,!1)},e={get(s){return rs(this,s,!1,!0)},get size(){return os(this)},has:ss,add:Yl,set:Zl,delete:Jl,clear:$l,forEach:as(!1,!0)},t={get(s){return rs(this,s,!0)},get size(){return os(this,!0)},has(s){return ss.call(this,s,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:as(!0,!1)},n={get(s){return rs(this,s,!0,!0)},get size(){return os(this,!0)},has(s){return ss.call(this,s,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:as(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=ls(s,!1,!1),t[s]=ls(s,!0,!1),e[s]=ls(s,!1,!0),n[s]=ls(s,!0,!0)}),[i,t,e,n]}const[Ld,Rd,Pd,Id]=Cd();function rl(i,e){const t=e?i?Id:Pd:i?Rd:Ld;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(He(t,r)&&r in n?t:n,r,s)}const Dd={get:rl(!1,!1)},Fd={get:rl(!1,!0)},Nd={get:rl(!0,!1)},th=new WeakMap,nh=new WeakMap,ih=new WeakMap,Bd=new WeakMap;function Od(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zd(i){return i.__v_skip||!Object.isExtensible(i)?0:Od(od(i))}function sl(i){return zr(i)?i:ol(i,!1,eh,Dd,th)}function Ud(i){return ol(i,!1,Ad,Fd,nh)}function rh(i){return ol(i,!0,Ed,Nd,ih)}function ol(i,e,t,n,r){if(!Et(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=zd(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function qi(i){return zr(i)?qi(i.__v_raw):!!(i&&i.__v_isReactive)}function zr(i){return!!(i&&i.__v_isReadonly)}function sh(i){return!!(i&&i.__v_isShallow)}function oh(i){return qi(i)||zr(i)}function We(i){const e=i&&i.__v_raw;return e?We(e):i}function ah(i){return qs(i,"__v_skip",!0),i}const al=i=>Et(i)?sl(i):i,ll=i=>Et(i)?rh(i):i;function Hd(i){Bn&&qt&&(i=We(i),$u(i.dep||(i.dep=el())))}function Vd(i,e){i=We(i),i.dep&&Ma(i.dep)}function gt(i){return!!(i&&i.__v_isRef===!0)}function kd(i){return gt(i)?i.value:i}const Gd={get:(i,e,t)=>kd(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return gt(r)&&!gt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function lh(i){return qi(i)?i:new Proxy(i,Gd)}class Wd{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new tl(e,()=>{this._dirty||(this._dirty=!0,Vd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=We(this);return Hd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qd(i,e,t=!1){let n,r;const s=Be(i);return s?(n=i,r=jt):(n=i.get,r=i.set),new Wd(n,r,s||!r,t)}function On(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){lo(s,e,t)}return r}function zt(i,e,t,n){if(Be(i)){const s=On(i,e,t,n);return s&&ju(s)&&s.catch(o=>{lo(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(zt(i[s],e,t,n));return r}function lo(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){On(l,null,10,[i,o,a]);return}}jd(i,t,r,n)}function jd(i,e,t,n=!0){console.error(i)}let js=!1,wa=!1;const It=[];let vn=0;const Ir=[];let Ar=null,Oi=0;const Dr=[];let Dn=null,zi=0;const ch=Promise.resolve();let cl=null,Sa=null;function Xd(i){const e=cl||ch;return i?e.then(this?i.bind(this):i):e}function Yd(i){let e=vn+1,t=It.length;for(;e<t;){const n=e+t>>>1;Ur(It[n])<i?e=n+1:t=n}return e}function uh(i){(!It.length||!It.includes(i,js&&i.allowRecurse?vn+1:vn))&&i!==Sa&&(i.id==null?It.push(i):It.splice(Yd(i.id),0,i),hh())}function hh(){!js&&!wa&&(wa=!0,cl=ch.then(ph))}function Zd(i){const e=It.indexOf(i);e>vn&&It.splice(e,1)}function fh(i,e,t,n){Oe(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),hh()}function Jd(i){fh(i,Ar,Ir,Oi)}function $d(i){fh(i,Dn,Dr,zi)}function ul(i,e=null){if(Ir.length){for(Sa=e,Ar=[...new Set(Ir)],Ir.length=0,Oi=0;Oi<Ar.length;Oi++)Ar[Oi]();Ar=null,Oi=0,Sa=null,ul(i,e)}}function dh(i){if(Dr.length){const e=[...new Set(Dr)];if(Dr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((t,n)=>Ur(t)-Ur(n)),zi=0;zi<Dn.length;zi++)Dn[zi]();Dn=null,zi=0}}const Ur=i=>i.id==null?1/0:i.id;function ph(i){wa=!1,js=!0,ul(i),It.sort((t,n)=>Ur(t)-Ur(n));const e=jt;try{for(vn=0;vn<It.length;vn++){const t=It[vn];t&&t.active!==!1&&On(t,null,14)}}finally{vn=0,It.length=0,dh(),js=!1,cl=null,(It.length||Ir.length||Dr.length)&&ph(i)}}function Kd(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||Je;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||Je;f?r=t.map(d=>d.trim()):h&&(r=t.map(ud))}let a,l=n[a=Ao(e)]||n[a=Ao(Ji(e))];!l&&s&&(l=n[a=Ao(tr(e))]),l&&zt(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,zt(c,i,6,r)}}function mh(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Be(i)){const l=c=>{const u=mh(c,e,!0);u&&(a=!0,vt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(n.set(i,null),null):(Oe(s)?s.forEach(l=>o[l]=null):vt(o,s),n.set(i,o),o)}function co(i,e){return!i||!ro(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(i,e[0].toLowerCase()+e.slice(1))||He(i,tr(e))||He(i,e))}let an=null,gh=null;function Xs(i){const e=an;return an=i,gh=i&&i.type.__scopeId||null,e}function Qd(i,e=an,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&ac(-1);const s=Xs(e),o=i(...r);return Xs(s),n._d&&ac(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function Lo(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:x}=i;let b,p;const m=Xs(i);try{if(t.shapeFlag&4){const M=r||n;b=sn(u.call(M,M,h,s,d,f,g)),p=l}else{const M=e;b=sn(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),p=e.props?l:ep(l)}}catch(M){Fr.length=0,lo(M,i,1),b=zn(yn)}let P=b;if(p&&x!==!1){const M=Object.keys(p),{shapeFlag:C}=P;M.length&&C&7&&(o&&M.some(Ja)&&(p=tp(p,o)),P=fi(P,p))}return t.dirs&&(P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition&&(P.transition=t.transition),b=P,Xs(m),b}const ep=i=>{let e;for(const t in i)(t==="class"||t==="style"||ro(t))&&((e||(e={}))[t]=i[t]);return e},tp=(i,e)=>{const t={};for(const n in i)(!Ja(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function np(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Kl(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!co(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Kl(n,o,c):!0:!!o;return!1}function Kl(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!co(t,s))return!0}return!1}function ip({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const rp=i=>i.__isSuspense;function sp(i,e){e&&e.pendingBranch?Oe(i)?e.effects.push(...i):e.effects.push(i):$d(i)}function op(i,e){if(ft){let t=ft.provides;const n=ft.parent&&ft.parent.provides;n===t&&(t=ft.provides=Object.create(n)),t[i]=e}}function Ro(i,e,t=!1){const n=ft||an;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Be(e)?e.call(n.proxy):e}}const Ql={};function Po(i,e,t){return xh(i,e,t)}function xh(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=Je){const a=ft;let l,c=!1,u=!1;if(gt(i)?(l=()=>i.value,c=sh(i)):qi(i)?(l=()=>i,n=!0):Oe(i)?(u=!0,c=i.some(qi),l=()=>i.map(p=>{if(gt(p))return p.value;if(qi(p))return Hi(p);if(Be(p))return On(p,a,2)})):Be(i)?e?l=()=>On(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),zt(i,a,3,[f])}:l=jt,e&&n){const p=l;l=()=>Hi(p())}let h,f=p=>{h=b.onStop=()=>{On(p,a,4)}};if(Hr)return f=jt,e?t&&zt(e,a,3,[l(),u?[]:void 0,f]):l(),jt;let d=u?[]:Ql;const g=()=>{if(!!b.active)if(e){const p=b.run();(n||c||(u?p.some((m,P)=>Ws(m,d[P])):Ws(p,d)))&&(h&&h(),zt(e,a,3,[p,d===Ql?void 0:d,f]),d=p)}else b.run()};g.allowRecurse=!!e;let x;r==="sync"?x=g:r==="post"?x=()=>Ct(g,a&&a.suspense):x=()=>{!a||a.isMounted?Jd(g):g()};const b=new tl(l,x);return e?t?g():d=b.run():r==="post"?Ct(b.run.bind(b),a&&a.suspense):b.run(),()=>{b.stop(),a&&a.scope&&$a(a.scope.effects,b)}}function ap(i,e,t){const n=this.proxy,r=yt(i)?i.includes(".")?_h(n,i):()=>n[i]:i.bind(n,n);let s;Be(e)?s=e:(s=e.handler,t=e);const o=ft;$i(this);const a=xh(r,s.bind(n),t);return o?$i(o):li(),a}function _h(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Hi(i,e){if(!Et(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),gt(i))Hi(i.value,e);else if(Oe(i))for(let t=0;t<i.length;t++)Hi(i[t],e);else if(rd(i)||Pr(i))i.forEach(t=>{Hi(t,e)});else if(ad(i))for(const t in i)Hi(i[t],e);return i}function lp(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hl(()=>{i.isMounted=!0}),wh(()=>{i.isUnmounting=!0}),i}const Nt=[Function,Array],cp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},setup(i,{slots:e}){const t=Zp(),n=lp();let r;return()=>{const s=e.default&&yh(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const x of s)if(x.type!==yn){o=x;break}}const a=We(i),{mode:l}=a;if(n.isLeaving)return Io(o);const c=ec(o);if(!c)return Io(o);const u=Ta(c,a,n,t);Ea(c,u);const h=t.subTree,f=h&&ec(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const x=g();r===void 0?r=x:x!==r&&(r=x,d=!0)}if(f&&f.type!==yn&&(!ri(c,f)||d)){const x=Ta(f,a,n,t);if(Ea(f,x),l==="out-in")return n.isLeaving=!0,x.afterLeave=()=>{n.isLeaving=!1,t.update()},Io(o);l==="in-out"&&c.type!==yn&&(x.delayLeave=(b,p,m)=>{const P=vh(n,f);P[String(f.key)]=f,b._leaveCb=()=>{p(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=m})}return o}}},up=cp;function vh(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Ta(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:x,onAppear:b,onAfterAppear:p,onAppearCancelled:m}=e,P=String(i.key),M=vh(t,i),C=(D,$)=>{D&&zt(D,n,9,$)},N={mode:s,persisted:o,beforeEnter(D){let $=a;if(!t.isMounted)if(r)$=x||a;else return;D._leaveCb&&D._leaveCb(!0);const ce=M[P];ce&&ri(i,ce)&&ce.el._leaveCb&&ce.el._leaveCb(),C($,[D])},enter(D){let $=l,ce=c,ie=u;if(!t.isMounted)if(r)$=b||l,ce=p||c,ie=m||u;else return;let B=!1;const E=D._enterCb=A=>{B||(B=!0,A?C(ie,[D]):C(ce,[D]),N.delayedLeave&&N.delayedLeave(),D._enterCb=void 0)};$?($(D,E),$.length<=1&&E()):E()},leave(D,$){const ce=String(i.key);if(D._enterCb&&D._enterCb(!0),t.isUnmounting)return $();C(h,[D]);let ie=!1;const B=D._leaveCb=E=>{ie||(ie=!0,$(),E?C(g,[D]):C(d,[D]),D._leaveCb=void 0,M[ce]===i&&delete M[ce])};M[ce]=i,f?(f(D,B),f.length<=1&&B()):B()},clone(D){return Ta(D,e,t,n)}};return N}function Io(i){if(uo(i))return i=fi(i),i.children=null,i}function ec(i){return uo(i)?i.children?i.children[0]:void 0:i}function Ea(i,e){i.shapeFlag&6&&i.component?Ea(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function yh(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===rn?(o.patchFlag&128&&r++,n=n.concat(yh(o.children,e,a))):(e||o.type!==yn)&&n.push(a!=null?fi(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function bh(i){return Be(i)?{setup:i,name:i.name}:i}const Aa=i=>!!i.type.__asyncLoader,uo=i=>i.type.__isKeepAlive;function hp(i,e){Mh(i,"a",e)}function fp(i,e){Mh(i,"da",e)}function Mh(i,e,t=ft){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(ho(e,n,t),t){let r=t.parent;for(;r&&r.parent;)uo(r.parent.vnode)&&dp(n,e,t,r),r=r.parent}}function dp(i,e,t,n){const r=ho(e,i,n,!0);Sh(()=>{$a(n[e],r)},t)}function ho(i,e,t=ft,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;nr(),$i(t);const a=zt(e,t,i,o);return li(),ir(),a});return n?r.unshift(s):r.push(s),s}}const wn=i=>(e,t=ft)=>(!Hr||i==="sp")&&ho(i,e,t),pp=wn("bm"),hl=wn("m"),mp=wn("bu"),gp=wn("u"),wh=wn("bum"),Sh=wn("um"),xp=wn("sp"),_p=wn("rtg"),vp=wn("rtc");function yp(i,e=ft){ho("ec",i,e)}let Ca=!0;function bp(i){const e=Eh(i),t=i.proxy,n=i.ctx;Ca=!1,e.beforeCreate&&tc(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:x,deactivated:b,beforeDestroy:p,beforeUnmount:m,destroyed:P,unmounted:M,render:C,renderTracked:N,renderTriggered:D,errorCaptured:$,serverPrefetch:ce,expose:ie,inheritAttrs:B,components:E,directives:A,filters:V}=e;if(c&&Mp(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const U in o){const oe=o[U];Be(oe)&&(n[U]=oe.bind(t))}if(r){const U=r.call(t,t);Et(U)&&(i.data=sl(U))}if(Ca=!0,s)for(const U in s){const oe=s[U],de=Be(oe)?oe.bind(t,t):Be(oe.get)?oe.get.bind(t,t):jt,K=!Be(oe)&&Be(oe.set)?oe.set.bind(t):jt,Q=tm({get:de,set:K});Object.defineProperty(n,U,{enumerable:!0,configurable:!0,get:()=>Q.value,set:me=>Q.value=me})}if(a)for(const U in a)Th(a[U],n,t,U);if(l){const U=Be(l)?l.call(t):l;Reflect.ownKeys(U).forEach(oe=>{op(oe,U[oe])})}u&&tc(u,i,"c");function O(U,oe){Oe(oe)?oe.forEach(de=>U(de.bind(t))):oe&&U(oe.bind(t))}if(O(pp,h),O(hl,f),O(mp,d),O(gp,g),O(hp,x),O(fp,b),O(yp,$),O(vp,N),O(_p,D),O(wh,m),O(Sh,M),O(xp,ce),Oe(ie))if(ie.length){const U=i.exposed||(i.exposed={});ie.forEach(oe=>{Object.defineProperty(U,oe,{get:()=>t[oe],set:de=>t[oe]=de})})}else i.exposed||(i.exposed={});C&&i.render===jt&&(i.render=C),B!=null&&(i.inheritAttrs=B),E&&(i.components=E),A&&(i.directives=A)}function Mp(i,e,t=jt,n=!1){Oe(i)&&(i=La(i));for(const r in i){const s=i[r];let o;Et(s)?"default"in s?o=Ro(s.from||r,s.default,!0):o=Ro(s.from||r):o=Ro(s),gt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function tc(i,e,t){zt(Oe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Th(i,e,t,n){const r=n.includes(".")?_h(t,n):()=>t[n];if(yt(i)){const s=e[i];Be(s)&&Po(r,s)}else if(Be(i))Po(r,i.bind(t));else if(Et(i))if(Oe(i))i.forEach(s=>Th(s,e,t,n));else{const s=Be(i.handler)?i.handler.bind(t):e[i.handler];Be(s)&&Po(r,s,i)}}function Eh(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Ys(l,c,o,!0)),Ys(l,e,o)),s.set(e,l),l}function Ys(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Ys(i,s,t,!0),r&&r.forEach(o=>Ys(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=wp[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const wp={data:nc,props:ni,emits:ni,methods:ni,computed:ni,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:ni,directives:ni,watch:Tp,provide:nc,inject:Sp};function nc(i,e){return e?i?function(){return vt(Be(i)?i.call(this,this):i,Be(e)?e.call(this,this):e)}:e:i}function Sp(i,e){return ni(La(i),La(e))}function La(i){if(Oe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function wt(i,e){return i?[...new Set([].concat(i,e))]:e}function ni(i,e){return i?vt(vt(Object.create(null),i),e):e}function Tp(i,e){if(!i)return e;if(!e)return i;const t=vt(Object.create(null),i);for(const n in e)t[n]=wt(i[n],e[n]);return t}function Ep(i,e,t,n=!1){const r={},s={};qs(s,fo,1),i.propsDefaults=Object.create(null),Ah(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Ud(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Ap(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=We(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(co(i.emitsOptions,f))continue;const d=e[f];if(l)if(He(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=Ji(f);r[g]=Ra(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Ah(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!He(e,h)&&((u=tr(h))===h||!He(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Ra(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!He(e,h)&&!0)&&(delete s[h],c=!0)}c&&Mn(i,"set","$attrs")}function Ah(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Vs(l))continue;const c=e[l];let u;r&&He(r,u=Ji(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:co(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=We(t),c=a||Je;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Ra(r,l,h,c[h],i,!He(c,h))}}return o}function Ra(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=He(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Be(l)){const{propsDefaults:c}=r;t in c?n=c[t]:($i(r),n=c[t]=l.call(null,e),li())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===tr(t))&&(n=!0))}return n}function Ch(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Be(i)){const u=h=>{l=!0;const[f,d]=Ch(h,e,!0);vt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,Wi),Wi;if(Oe(s))for(let u=0;u<s.length;u++){const h=Ji(s[u]);ic(h)&&(o[h]=Je)}else if(s)for(const u in s){const h=Ji(u);if(ic(h)){const f=s[u],d=o[h]=Oe(f)||Be(f)?{type:f}:f;if(d){const g=oc(Boolean,d.type),x=oc(String,d.type);d[0]=g>-1,d[1]=x<0||g<x,(g>-1||He(d,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function ic(i){return i[0]!=="$"}function rc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function sc(i,e){return rc(i)===rc(e)}function oc(i,e){return Oe(e)?e.findIndex(t=>sc(t,i)):Be(e)&&sc(e,i)?0:-1}const Lh=i=>i[0]==="_"||i==="$stable",fl=i=>Oe(i)?i.map(sn):[sn(i)],Cp=(i,e,t)=>{const n=Qd((...r)=>fl(e(...r)),t);return n._c=!1,n},Rh=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Lh(r))continue;const s=i[r];if(Be(s))e[r]=Cp(r,s,n);else if(s!=null){const o=fl(s);e[r]=()=>o}}},Ph=(i,e)=>{const t=fl(e);i.slots.default=()=>t},Lp=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=We(e),qs(e,"_",t)):Rh(e,i.slots={})}else i.slots={},e&&Ph(i,e);qs(i.slots,fo,1)},Rp=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=Je;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(vt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Rh(e,r)),o=e}else e&&(Ph(i,e),o={default:1});if(s)for(const a in r)!Lh(a)&&!(a in o)&&delete r[a]};function $n(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(nr(),zt(l,t,8,[i.el,a,i,e]),ir())}}function Ih(){return{app:null,config:{isNativeTag:td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pp=0;function Ip(i,e){return function(n,r=null){Be(n)||(n=Object.assign({},n)),r!=null&&!Et(r)&&(r=null);const s=Ih(),o=new Set;let a=!1;const l=s.app={_uid:Pp++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:nm,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Be(c.install)?(o.add(c),c.install(l,...u)):Be(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=zn(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ml(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Pa(i,e,t,n,r=!1){if(Oe(i)){i.forEach((f,d)=>Pa(f,e&&(Oe(e)?e[d]:e),t,n,r));return}if(Aa(n)&&!r)return;const s=n.shapeFlag&4?ml(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===Je?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(yt(c)?(u[c]=null,He(h,c)&&(h[c]=null)):gt(c)&&(c.value=null)),Be(l))On(l,a,12,[o,u]);else{const f=yt(l),d=gt(l);if(f||d){const g=()=>{if(i.f){const x=f?u[l]:l.value;r?Oe(x)&&$a(x,s):Oe(x)?x.includes(s)||x.push(s):f?(u[l]=[s],He(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,He(h,l)&&(h[l]=o)):gt(l)&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Ct(g,t)):g()}}}const Ct=sp;function Dp(i){return Fp(i)}function Fp(i,e){const t=hd();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=jt,cloneNode:g,insertStaticContent:x}=i,b=(y,T,I,F=null,k=null,Y=null,te=!1,ee=null,v=!!T.dynamicChildren)=>{if(y===T)return;y&&!ri(y,T)&&(F=Me(y),he(y,k,Y,!0),y=null),T.patchFlag===-2&&(v=!1,T.dynamicChildren=null);const{type:_,ref:z,shapeFlag:H}=T;switch(_){case dl:p(y,T,I,F);break;case yn:m(y,T,I,F);break;case Do:y==null&&P(T,I,F,te);break;case rn:A(y,T,I,F,k,Y,te,ee,v);break;default:H&1?N(y,T,I,F,k,Y,te,ee,v):H&6?V(y,T,I,F,k,Y,te,ee,v):(H&64||H&128)&&_.process(y,T,I,F,k,Y,te,ee,v,ye)}z!=null&&k&&Pa(z,y&&y.ref,Y,T||y,!T)},p=(y,T,I,F)=>{if(y==null)n(T.el=a(T.children),I,F);else{const k=T.el=y.el;T.children!==y.children&&c(k,T.children)}},m=(y,T,I,F)=>{y==null?n(T.el=l(T.children||""),I,F):T.el=y.el},P=(y,T,I,F)=>{[y.el,y.anchor]=x(y.children,T,I,F,y.el,y.anchor)},M=({el:y,anchor:T},I,F)=>{let k;for(;y&&y!==T;)k=f(y),n(y,I,F),y=k;n(T,I,F)},C=({el:y,anchor:T})=>{let I;for(;y&&y!==T;)I=f(y),r(y),y=I;r(T)},N=(y,T,I,F,k,Y,te,ee,v)=>{te=te||T.type==="svg",y==null?D(T,I,F,k,Y,te,ee,v):ie(y,T,k,Y,te,ee,v)},D=(y,T,I,F,k,Y,te,ee)=>{let v,_;const{type:z,props:H,shapeFlag:X,transition:W,patchFlag:fe,dirs:pe}=y;if(y.el&&g!==void 0&&fe===-1)v=y.el=g(y.el);else{if(v=y.el=o(y.type,Y,H&&H.is,H),X&8?u(v,y.children):X&16&&ce(y.children,v,null,F,k,Y&&z!=="foreignObject",te,ee),pe&&$n(y,null,F,"created"),H){for(const w in H)w!=="value"&&!Vs(w)&&s(v,w,null,H[w],Y,y.children,F,k,Te);"value"in H&&s(v,"value",null,H.value),(_=H.onVnodeBeforeMount)&&en(_,F,y)}$(v,y,y.scopeId,te,F)}pe&&$n(y,null,F,"beforeMount");const L=(!k||k&&!k.pendingBranch)&&W&&!W.persisted;L&&W.beforeEnter(v),n(v,T,I),((_=H&&H.onVnodeMounted)||L||pe)&&Ct(()=>{_&&en(_,F,y),L&&W.enter(v),pe&&$n(y,null,F,"mounted")},k)},$=(y,T,I,F,k)=>{if(I&&d(y,I),F)for(let Y=0;Y<F.length;Y++)d(y,F[Y]);if(k){let Y=k.subTree;if(T===Y){const te=k.vnode;$(y,te,te.scopeId,te.slotScopeIds,k.parent)}}},ce=(y,T,I,F,k,Y,te,ee,v=0)=>{for(let _=v;_<y.length;_++){const z=y[_]=ee?Fn(y[_]):sn(y[_]);b(null,z,T,I,F,k,Y,te,ee)}},ie=(y,T,I,F,k,Y,te)=>{const ee=T.el=y.el;let{patchFlag:v,dynamicChildren:_,dirs:z}=T;v|=y.patchFlag&16;const H=y.props||Je,X=T.props||Je;let W;I&&Kn(I,!1),(W=X.onVnodeBeforeUpdate)&&en(W,I,T,y),z&&$n(T,y,I,"beforeUpdate"),I&&Kn(I,!0);const fe=k&&T.type!=="foreignObject";if(_?B(y.dynamicChildren,_,ee,I,F,fe,Y):te||de(y,T,ee,null,I,F,fe,Y,!1),v>0){if(v&16)E(ee,T,H,X,I,F,k);else if(v&2&&H.class!==X.class&&s(ee,"class",null,X.class,k),v&4&&s(ee,"style",H.style,X.style,k),v&8){const pe=T.dynamicProps;for(let L=0;L<pe.length;L++){const w=pe[L],ne=H[w],re=X[w];(re!==ne||w==="value")&&s(ee,w,ne,re,k,y.children,I,F,Te)}}v&1&&y.children!==T.children&&u(ee,T.children)}else!te&&_==null&&E(ee,T,H,X,I,F,k);((W=X.onVnodeUpdated)||z)&&Ct(()=>{W&&en(W,I,T,y),z&&$n(T,y,I,"updated")},F)},B=(y,T,I,F,k,Y,te)=>{for(let ee=0;ee<T.length;ee++){const v=y[ee],_=T[ee],z=v.el&&(v.type===rn||!ri(v,_)||v.shapeFlag&70)?h(v.el):I;b(v,_,z,null,F,k,Y,te,!0)}},E=(y,T,I,F,k,Y,te)=>{if(I!==F){for(const ee in F){if(Vs(ee))continue;const v=F[ee],_=I[ee];v!==_&&ee!=="value"&&s(y,ee,_,v,te,T.children,k,Y,Te)}if(I!==Je)for(const ee in I)!Vs(ee)&&!(ee in F)&&s(y,ee,I[ee],null,te,T.children,k,Y,Te);"value"in F&&s(y,"value",I.value,F.value)}},A=(y,T,I,F,k,Y,te,ee,v)=>{const _=T.el=y?y.el:a(""),z=T.anchor=y?y.anchor:a("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:W}=T;W&&(ee=ee?ee.concat(W):W),y==null?(n(_,I,F),n(z,I,F),ce(T.children,I,z,k,Y,te,ee,v)):H>0&&H&64&&X&&y.dynamicChildren?(B(y.dynamicChildren,X,I,k,Y,te,ee),(T.key!=null||k&&T===k.subTree)&&Dh(y,T,!0)):de(y,T,I,z,k,Y,te,ee,v)},V=(y,T,I,F,k,Y,te,ee,v)=>{T.slotScopeIds=ee,y==null?T.shapeFlag&512?k.ctx.activate(T,I,F,te,v):j(T,I,F,k,Y,te,v):O(y,T,v)},j=(y,T,I,F,k,Y,te)=>{const ee=y.component=Yp(y,F,k);if(uo(y)&&(ee.ctx.renderer=ye),Jp(ee),ee.asyncDep){if(k&&k.registerDep(ee,U),!y.el){const v=ee.subTree=zn(yn);m(null,v,T,I)}return}U(ee,y,T,I,k,Y,te)},O=(y,T,I)=>{const F=T.component=y.component;if(np(y,T,I))if(F.asyncDep&&!F.asyncResolved){oe(F,T,I);return}else F.next=T,Zd(F.update),F.update();else T.component=y.component,T.el=y.el,F.vnode=T},U=(y,T,I,F,k,Y,te)=>{const ee=()=>{if(y.isMounted){let{next:z,bu:H,u:X,parent:W,vnode:fe}=y,pe=z,L;Kn(y,!1),z?(z.el=fe.el,oe(y,z,te)):z=fe,H&&Co(H),(L=z.props&&z.props.onVnodeBeforeUpdate)&&en(L,W,z,fe),Kn(y,!0);const w=Lo(y),ne=y.subTree;y.subTree=w,b(ne,w,h(ne.el),Me(ne),y,k,Y),z.el=w.el,pe===null&&ip(y,w.el),X&&Ct(X,k),(L=z.props&&z.props.onVnodeUpdated)&&Ct(()=>en(L,W,z,fe),k)}else{let z;const{el:H,props:X}=T,{bm:W,m:fe,parent:pe}=y,L=Aa(T);if(Kn(y,!1),W&&Co(W),!L&&(z=X&&X.onVnodeBeforeMount)&&en(z,pe,T),Kn(y,!0),H&&J){const w=()=>{y.subTree=Lo(y),J(H,y.subTree,y,k,null)};L?T.type.__asyncLoader().then(()=>!y.isUnmounted&&w()):w()}else{const w=y.subTree=Lo(y);b(null,w,I,F,y,k,Y),T.el=w.el}if(fe&&Ct(fe,k),!L&&(z=X&&X.onVnodeMounted)){const w=T;Ct(()=>en(z,pe,w),k)}T.shapeFlag&256&&y.a&&Ct(y.a,k),y.isMounted=!0,T=I=F=null}},v=y.effect=new tl(ee,()=>uh(y.update),y.scope),_=y.update=v.run.bind(v);_.id=y.uid,Kn(y,!0),_()},oe=(y,T,I)=>{T.component=y;const F=y.vnode.props;y.vnode=T,y.next=null,Ap(y,T.props,F,I),Rp(y,T.children,I),nr(),ul(void 0,y.update),ir()},de=(y,T,I,F,k,Y,te,ee,v=!1)=>{const _=y&&y.children,z=y?y.shapeFlag:0,H=T.children,{patchFlag:X,shapeFlag:W}=T;if(X>0){if(X&128){Q(_,H,I,F,k,Y,te,ee,v);return}else if(X&256){K(_,H,I,F,k,Y,te,ee,v);return}}W&8?(z&16&&Te(_,k,Y),H!==_&&u(I,H)):z&16?W&16?Q(_,H,I,F,k,Y,te,ee,v):Te(_,k,Y,!0):(z&8&&u(I,""),W&16&&ce(H,I,F,k,Y,te,ee,v))},K=(y,T,I,F,k,Y,te,ee,v)=>{y=y||Wi,T=T||Wi;const _=y.length,z=T.length,H=Math.min(_,z);let X;for(X=0;X<H;X++){const W=T[X]=v?Fn(T[X]):sn(T[X]);b(y[X],W,I,null,k,Y,te,ee,v)}_>z?Te(y,k,Y,!0,!1,H):ce(T,I,F,k,Y,te,ee,v,H)},Q=(y,T,I,F,k,Y,te,ee,v)=>{let _=0;const z=T.length;let H=y.length-1,X=z-1;for(;_<=H&&_<=X;){const W=y[_],fe=T[_]=v?Fn(T[_]):sn(T[_]);if(ri(W,fe))b(W,fe,I,null,k,Y,te,ee,v);else break;_++}for(;_<=H&&_<=X;){const W=y[H],fe=T[X]=v?Fn(T[X]):sn(T[X]);if(ri(W,fe))b(W,fe,I,null,k,Y,te,ee,v);else break;H--,X--}if(_>H){if(_<=X){const W=X+1,fe=W<z?T[W].el:F;for(;_<=X;)b(null,T[_]=v?Fn(T[_]):sn(T[_]),I,fe,k,Y,te,ee,v),_++}}else if(_>X)for(;_<=H;)he(y[_],k,Y,!0),_++;else{const W=_,fe=_,pe=new Map;for(_=fe;_<=X;_++){const ue=T[_]=v?Fn(T[_]):sn(T[_]);ue.key!=null&&pe.set(ue.key,_)}let L,w=0;const ne=X-fe+1;let re=!1,we=0;const xe=new Array(ne);for(_=0;_<ne;_++)xe[_]=0;for(_=W;_<=H;_++){const ue=y[_];if(w>=ne){he(ue,k,Y,!0);continue}let be;if(ue.key!=null)be=pe.get(ue.key);else for(L=fe;L<=X;L++)if(xe[L-fe]===0&&ri(ue,T[L])){be=L;break}be===void 0?he(ue,k,Y,!0):(xe[be-fe]=_+1,be>=we?we=be:re=!0,b(ue,T[be],I,null,k,Y,te,ee,v),w++)}const Ae=re?Np(xe):Wi;for(L=Ae.length-1,_=ne-1;_>=0;_--){const ue=fe+_,be=T[ue],De=ue+1<z?T[ue+1].el:F;xe[_]===0?b(null,be,I,De,k,Y,te,ee,v):re&&(L<0||_!==Ae[L]?me(be,I,De,2):L--)}}},me=(y,T,I,F,k=null)=>{const{el:Y,type:te,transition:ee,children:v,shapeFlag:_}=y;if(_&6){me(y.component.subTree,T,I,F);return}if(_&128){y.suspense.move(T,I,F);return}if(_&64){te.move(y,T,I,ye);return}if(te===rn){n(Y,T,I);for(let H=0;H<v.length;H++)me(v[H],T,I,F);n(y.anchor,T,I);return}if(te===Do){M(y,T,I);return}if(F!==2&&_&1&&ee)if(F===0)ee.beforeEnter(Y),n(Y,T,I),Ct(()=>ee.enter(Y),k);else{const{leave:H,delayLeave:X,afterLeave:W}=ee,fe=()=>n(Y,T,I),pe=()=>{H(Y,()=>{fe(),W&&W()})};X?X(Y,fe,pe):pe()}else n(Y,T,I)},he=(y,T,I,F=!1,k=!1)=>{const{type:Y,props:te,ref:ee,children:v,dynamicChildren:_,shapeFlag:z,patchFlag:H,dirs:X}=y;if(ee!=null&&Pa(ee,null,I,y,!0),z&256){T.ctx.deactivate(y);return}const W=z&1&&X,fe=!Aa(y);let pe;if(fe&&(pe=te&&te.onVnodeBeforeUnmount)&&en(pe,T,y),z&6)ae(y.component,I,F);else{if(z&128){y.suspense.unmount(I,F);return}W&&$n(y,null,T,"beforeUnmount"),z&64?y.type.remove(y,T,I,k,ye,F):_&&(Y!==rn||H>0&&H&64)?Te(_,T,I,!1,!0):(Y===rn&&H&384||!k&&z&16)&&Te(v,T,I),F&&_e(y)}(fe&&(pe=te&&te.onVnodeUnmounted)||W)&&Ct(()=>{pe&&en(pe,T,y),W&&$n(y,null,T,"unmounted")},I)},_e=y=>{const{type:T,el:I,anchor:F,transition:k}=y;if(T===rn){Pe(I,F);return}if(T===Do){C(y);return}const Y=()=>{r(I),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(y.shapeFlag&1&&k&&!k.persisted){const{leave:te,delayLeave:ee}=k,v=()=>te(I,Y);ee?ee(y.el,Y,v):v()}else Y()},Pe=(y,T)=>{let I;for(;y!==T;)I=f(y),r(y),y=I;r(T)},ae=(y,T,I)=>{const{bum:F,scope:k,update:Y,subTree:te,um:ee}=y;F&&Co(F),k.stop(),Y&&(Y.active=!1,he(te,y,T,I)),ee&&Ct(ee,T),Ct(()=>{y.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Te=(y,T,I,F=!1,k=!1,Y=0)=>{for(let te=Y;te<y.length;te++)he(y[te],T,I,F,k)},Me=y=>y.shapeFlag&6?Me(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),ve=(y,T,I)=>{y==null?T._vnode&&he(T._vnode,null,null,!0):b(T._vnode||null,y,T,null,null,null,I),dh(),T._vnode=y},ye={p:b,um:he,m:me,r:_e,mt:j,mc:ce,pc:de,pbc:B,n:Me,o:i};let Ie,J;return e&&([Ie,J]=e(ye)),{render:ve,hydrate:Ie,createApp:Ip(ve,Ie)}}function Kn({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Dh(i,e,t=!1){const n=i.children,r=e.children;if(Oe(n)&&Oe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Fn(r[s]),a.el=o.el),t||Dh(o,a))}}function Np(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Bp=i=>i.__isTeleport,Op=Symbol(),rn=Symbol(void 0),dl=Symbol(void 0),yn=Symbol(void 0),Do=Symbol(void 0),Fr=[];let ai=null;function Fh(i=!1){Fr.push(ai=i?null:[])}function zp(){Fr.pop(),ai=Fr[Fr.length-1]||null}let Zs=1;function ac(i){Zs+=i}function Up(i){return i.dynamicChildren=Zs>0?ai||Wi:null,zp(),Zs>0&&ai&&ai.push(i),i}function Nh(i,e,t,n,r,s){return Up(Oh(i,e,t,n,r,s,!0))}function Hp(i){return i?i.__v_isVNode===!0:!1}function ri(i,e){return i.type===e.type&&i.key===e.key}const fo="__vInternal",Bh=({key:i})=>i!=null?i:null,ks=({ref:i,ref_key:e,ref_for:t})=>i!=null?yt(i)||gt(i)||Be(i)?{i:an,r:i,k:e,f:!!t}:i:null;function Oh(i,e=null,t=null,n=0,r=null,s=i===rn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Bh(e),ref:e&&ks(e),scopeId:gh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(pl(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=yt(t)?8:16),Zs>0&&!o&&ai&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ai.push(l),l}const zn=Vp;function Vp(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Op)&&(i=yn),Hp(i)){const a=fi(i,e,!0);return t&&pl(a,t),a}if(em(i)&&(i=i.__vccOpts),e){e=kp(e);let{class:a,style:l}=e;a&&!yt(a)&&(e.class=Za(a)),Et(l)&&(oh(l)&&!Oe(l)&&(l=vt({},l)),e.style=Ya(l))}const o=yt(i)?1:rp(i)?128:Bp(i)?64:Et(i)?4:Be(i)?2:0;return Oh(i,e,t,n,r,o,s,!0)}function kp(i){return i?oh(i)||fo in i?vt({},i):i:null}function fi(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Wp(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Bh(a),ref:e&&e.ref?t&&r?Oe(r)?r.concat(ks(e)):[r,ks(e)]:ks(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==rn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&fi(i.ssContent),ssFallback:i.ssFallback&&fi(i.ssFallback),el:i.el,anchor:i.anchor}}function Gp(i=" ",e=0){return zn(dl,null,i,e)}function sn(i){return i==null||typeof i=="boolean"?zn(yn):Oe(i)?zn(rn,null,i.slice()):typeof i=="object"?Fn(i):zn(dl,null,String(i))}function Fn(i){return i.el===null||i.memo?i:fi(i)}function pl(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),pl(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(fo in e)?e._ctx=an:r===3&&an&&(an.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Be(e)?(e={default:e,_ctx:an},t=32):(e=String(e),n&64?(t=16,e=[Gp(e)]):t=8);i.children=e,i.shapeFlag|=t}function Wp(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Za([e.class,n.class]));else if(r==="style")e.style=Ya([e.style,n.style]);else if(ro(r)){const s=e[r],o=n[r];o&&s!==o&&!(Oe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function en(i,e,t,n=null){zt(i,e,7,[t,n])}const Ia=i=>i?zh(i)?ml(i)||i.proxy:Ia(i.parent):null,Js=vt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Ia(i.parent),$root:i=>Ia(i.root),$emit:i=>i.emit,$options:i=>Eh(i),$forceUpdate:i=>()=>uh(i.update),$nextTick:i=>Xd.bind(i.proxy),$watch:i=>ap.bind(i)}),qp={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==Je&&He(n,e))return o[e]=1,n[e];if(r!==Je&&He(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==Je&&He(t,e))return o[e]=4,t[e];Ca&&(o[e]=0)}}const u=Js[e];let h,f;if(u)return e==="$attrs"&&Ft(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Je&&He(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,He(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==Je&&He(r,e)?(r[e]=t,!0):n!==Je&&He(n,e)?(n[e]=t,!0):He(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==Je&&He(i,o)||e!==Je&&He(e,o)||(a=s[0])&&He(a,o)||He(n,o)||He(Js,o)||He(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:He(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}},jp=Ih();let Xp=0;function Yp(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||jp,s={uid:Xp++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ch(n,r),emitsOptions:mh(n,r),emit:null,emitted:null,propsDefaults:Je,inheritAttrs:n.inheritAttrs,ctx:Je,data:Je,props:Je,attrs:Je,slots:Je,refs:Je,setupState:Je,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Kd.bind(null,s),i.ce&&i.ce(s),s}let ft=null;const Zp=()=>ft||an,$i=i=>{ft=i,i.scope.on()},li=()=>{ft&&ft.scope.off(),ft=null};function zh(i){return i.vnode.shapeFlag&4}let Hr=!1;function Jp(i,e=!1){Hr=e;const{props:t,children:n}=i.vnode,r=zh(i);Ep(i,t,r,e),Lp(i,n);const s=r?$p(i,e):void 0;return Hr=!1,s}function $p(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=ah(new Proxy(i.ctx,qp));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?Qp(i):null;$i(i),nr();const s=On(n,i,0,[i.props,r]);if(ir(),li(),ju(s)){if(s.then(li,li),e)return s.then(o=>{lc(i,o,e)}).catch(o=>{lo(o,i,0)});i.asyncDep=s}else lc(i,s,e)}else Uh(i,e)}function lc(i,e,t){Be(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Et(e)&&(i.setupState=lh(e)),Uh(i,t)}let cc;function Uh(i,e,t){const n=i.type;if(!i.render){if(!e&&cc&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=vt(vt({isCustomElement:s,delimiters:a},o),l);n.render=cc(r,c)}}i.render=n.render||jt}$i(i),nr(),bp(i),ir(),li()}function Kp(i){return new Proxy(i.attrs,{get(e,t){return Ft(i,"get","$attrs"),e[t]}})}function Qp(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Kp(i))},slots:i.slots,emit:i.emit,expose:e}}function ml(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(lh(ah(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Js)return Js[t](i)}}))}function em(i){return Be(i)&&"__vccOpts"in i}const tm=(i,e)=>qd(i,e,Hr),nm="3.2.33",im="http://www.w3.org/2000/svg",si=typeof document!="undefined"?document:null,uc=si&&si.createElement("template"),rm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?si.createElementNS(im,i):si.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>si.createTextNode(i),createComment:i=>si.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>si.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{uc.innerHTML=n?`<svg>${i}</svg>`:i;const a=uc.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function sm(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function om(i,e,t){const n=i.style,r=yt(t);if(t&&!r){for(const s in t)Da(n,s,t[s]);if(e&&!yt(e))for(const s in e)t[s]==null&&Da(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const hc=/\s*!important$/;function Da(i,e,t){if(Oe(t))t.forEach(n=>Da(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=am(i,e);hc.test(t)?i.setProperty(tr(n),t.replace(hc,""),"important"):i[n]=t}}const fc=["Webkit","Moz","ms"],Fo={};function am(i,e){const t=Fo[e];if(t)return t;let n=Ji(e);if(n!=="filter"&&n in i)return Fo[e]=n;n=Xu(n);for(let r=0;r<fc.length;r++){const s=fc[r]+n;if(s in i)return Fo[e]=s}return e}const dc="http://www.w3.org/1999/xlink";function lm(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(dc,e.slice(6,e.length)):i.setAttributeNS(dc,e,t);else{const s=$f(e);t==null||s&&!qu(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function cm(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=qu(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[Hh,um]=(()=>{let i=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(i=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let Fa=0;const hm=Promise.resolve(),fm=()=>{Fa=0},dm=()=>Fa||(hm.then(fm),Fa=Hh());function pm(i,e,t,n){i.addEventListener(e,t,n)}function mm(i,e,t,n){i.removeEventListener(e,t,n)}function gm(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=xm(e);if(n){const c=s[e]=_m(n,r);pm(i,a,c,l)}else o&&(mm(i,a,o,l),s[e]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function xm(i){let e;if(pc.test(i)){e={};let t;for(;t=i.match(pc);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[tr(i.slice(2)),e]}function _m(i,e){const t=n=>{const r=n.timeStamp||Hh();(um||r>=t.attached-1)&&zt(vm(n,t.value),e,5,[n])};return t.value=i,t.attached=dm(),t}function vm(i,e){if(Oe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const mc=/^on[a-z]/,ym=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?sm(i,n,r):e==="style"?om(i,t,n):ro(e)?Ja(e)||gm(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bm(i,e,n,r))?cm(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),lm(i,e,n,r))};function bm(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&mc.test(e)&&Be(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||mc.test(e)&&yt(t)?!1:e in i}const Mm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};up.props;const wm=["ctrl","shift","alt","meta"],Sm={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,e)=>wm.some(t=>i[`${t}Key`]&&!e.includes(t))},Tm=(i,e)=>(t,...n)=>{for(let r=0;r<e.length;r++){const s=Sm[e[r]];if(s&&s(t,e))return}return i(t,...n)},Em=vt({patchProp:ym},rm);let gc;function Am(){return gc||(gc=Dp(Em))}const Cm=(...i)=>{const e=Am().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Lm(n);if(!r)return;const s=e._component;!Be(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Lm(i){return yt(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="136",gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rm=0,xc=1,Pm=2,Vh=1,Im=2,Cr=3,Vr=0,st=1,di=2,kh=1,Un=0,Nr=1,_c=2,vc=3,yc=4,Dm=5,Ui=100,Fm=101,Nm=102,bc=103,Mc=104,Bm=200,Om=201,zm=202,Um=203,Gh=204,Wh=205,Hm=206,Vm=207,km=208,Gm=209,Wm=210,qm=0,jm=1,Xm=2,Na=3,Ym=4,Zm=5,Jm=6,$m=7,po=0,Km=1,Qm=2,Hn=0,eg=1,tg=2,ng=3,ig=4,rg=5,qh=300,Zr=301,Jr=302,Ba=303,Oa=304,mo=306,xl=307,kr=1e3,Dt=1001,za=1002,nt=1003,wc=1004,Sc=1005,Tt=1006,sg=1007,go=1008,bn=1009,og=1010,ag=1011,Gr=1012,lg=1013,Gs=1014,Nn=1015,ci=1016,cg=1017,ug=1018,hg=1019,ji=1020,fg=1021,ui=1022,lt=1023,dg=1024,pg=1025,hi=1026,Ki=1027,mg=1028,gg=1029,xg=1030,_g=1031,vg=1032,yg=1033,Tc=33776,Ec=33777,Ac=33778,Cc=33779,Lc=35840,Rc=35841,Pc=35842,Ic=35843,bg=36196,Dc=37492,Fc=37496,Mg=37808,wg=37809,Sg=37810,Tg=37811,Eg=37812,Ag=37813,Cg=37814,Lg=37815,Rg=37816,Pg=37817,Ig=37818,Dg=37819,Fg=37820,Ng=37821,Bg=36492,Og=37840,zg=37841,Ug=37842,Hg=37843,Vg=37844,kg=37845,Gg=37846,Wg=37847,qg=37848,jg=37849,Xg=37850,Yg=37851,Zg=37852,Jg=37853,$g=2200,Kg=2201,Qg=2202,$s=2300,Ks=2301,No=2302,Vi=2400,ki=2401,Qs=2402,_l=2500,jh=2501,ex=0,Xt=3e3,rr=3001,tx=3200,nx=3201,sr=0,ix=1,Bo=7680,rx=519,Wr=35044,eo=35048,Nc="300 es";class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ht=[];for(let i=0;i<256;i++)ht[i]=(i<16?"0":"")+i.toString(16);const Oo=Math.PI/180,Ua=180/Math.PI;function ln(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toUpperCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function sx(i,e){return(i%e+e)%e}function zo(i,e,t){return(1-t)*i+t*e}function Bc(i){return(i&i-1)===0&&i!==0}function ox(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}class le{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}le.prototype.isVector2=!0;class dt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=r[0],b=r[3],p=r[6],m=r[1],P=r[4],M=r[7],C=r[2],N=r[5],D=r[8];return s[0]=o*x+a*m+l*C,s[3]=o*b+a*P+l*N,s[6]=o*p+a*M+l*D,s[1]=c*x+u*m+h*C,s[4]=c*b+u*P+h*N,s[7]=c*p+u*M+h*D,s[2]=f*x+d*m+g*C,s[5]=f*b+d*P+g*N,s[8]=f*p+d*M+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}dt.prototype.isMatrix3=!0;function Xh(i){if(i.length===0)return-1/0;let e=i[0];for(let t=1,n=i.length;t<n;++t)i[t]>e&&(e=i[t]);return e}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}let _i;class or{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=xo("canvas")),_i.width=e.width,_i.height=e.height;const n=_i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let ax=0;class ut extends Xn{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=Dt,r=Dt,s=Tt,o=go,a=lt,l=bn,c=1,u=Xt){super(),Object.defineProperty(this,"id",{value:ax++}),this.uuid=ln(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=ln()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uo(r[o].image)):s.push(Uo(r[o]))}else s=Uo(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ut.DEFAULT_IMAGE=void 0;ut.DEFAULT_MAPPING=qh;ut.prototype.isTexture=!0;function Uo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?or.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Ye{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],b=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-b)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+b)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(c+1)/2,M=(d+1)/2,C=(p+1)/2,N=(u+f)/4,D=(h+x)/4,$=(g+b)/4;return P>M&&P>C?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=N/n,s=D/n):M>C?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=N/r,s=$/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=D/s,r=$/s),this.set(n,r,s,t),this}let m=Math.sqrt((b-g)*(b-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(m)<.001&&(m=1),this.x=(b-g)/m,this.y=(h-x)/m,this.z=(f-u)/m,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Ye.prototype.isVector4=!0;class Ut extends Xn{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t),this.texture=new ut(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Wl({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ut.prototype.isWebGLRenderTarget=!0;class lx extends Ut{constructor(e,t,n){super(e,t);const r=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=r.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}lx.prototype.isWebGLMultipleRenderTargets=!0;class vl extends Ut{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}vl.prototype.isWebGLMultisampleRenderTarget=!0;class _t{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let b=1-a;const p=l*f+c*d+u*g+h*x,m=p>=0?1:-1,P=1-p*p;if(P>Number.EPSILON){const C=Math.sqrt(P),N=Math.atan2(C,p*m);b=Math.sin(b*N)/C,a=Math.sin(a*N)/C}const M=a*m;if(l=l*b+f*M,c=c*b+d*M,u=u*b+g*M,h=h*b+x*M,b===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}_t.prototype.isQuaternion=!0;class R{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}R.prototype.isVector3=!0;const Ho=new R,Oc=new _t;class Yt{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox),Vo.applyMatrix4(e.matrixWorld),this.union(Vo));const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gr),gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),cs.subVectors(this.max,xr),vi.subVectors(e.a,xr),yi.subVectors(e.b,xr),bi.subVectors(e.c,xr),Tn.subVectors(yi,vi),En.subVectors(bi,yi),Qn.subVectors(vi,bi);let t=[0,-Tn.z,Tn.y,0,-En.z,En.y,0,-Qn.z,Qn.y,Tn.z,0,-Tn.x,En.z,0,-En.x,Qn.z,0,-Qn.x,-Tn.y,Tn.x,0,-En.y,En.x,0,-Qn.y,Qn.x,0];return!ko(t,vi,yi,bi,cs)||(t=[1,0,0,0,1,0,0,0,1],!ko(t,vi,yi,bi,cs))?!1:(us.crossVectors(Tn,En),t=[us.x,us.y,us.z],ko(t,vi,yi,bi,cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return gr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(gr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Yt.prototype.isBox3=!0;const fn=[new R,new R,new R,new R,new R,new R,new R,new R],gr=new R,Vo=new Yt,vi=new R,yi=new R,bi=new R,Tn=new R,En=new R,Qn=new R,xr=new R,cs=new R,us=new R,ei=new R;function ko(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ei.fromArray(i,s);const a=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const cx=new Yt,zc=new R,hs=new R,Go=new R;class ar{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cx.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Go.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?hs.set(0,0,1).multiplyScalar(e.radius):hs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(zc.copy(e.center).add(hs)),this.expandByPoint(zc.copy(e.center).sub(hs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new R,Wo=new R,fs=new R,An=new R,qo=new R,ds=new R,jo=new R;class lr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.direction).multiplyScalar(t).add(this.origin),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Wo.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Wo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(fs),a=An.dot(this.direction),l=-An.dot(fs),c=An.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(fs).multiplyScalar(f).add(Wo),d}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),r=dn.dot(dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,r,s){qo.subVectors(t,e),ds.subVectors(n,e),jo.crossVectors(qo,ds);let o=this.direction.dot(jo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;An.subVectors(this.origin,e);const l=a*this.direction.dot(ds.crossVectors(An,ds));if(l<0)return null;const c=a*this.direction.dot(qo.cross(An));if(c<0||l+c>o)return null;const u=-a*An.dot(jo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,x,b){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Mi.setFromMatrixColumn(e,0).length(),s=1/Mi.setFromMatrixColumn(e,1).length(),o=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,hx)}lookAt(e,t,n){const r=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),Cn.crossVectors(n,Rt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),Cn.crossVectors(n,Rt)),Cn.normalize(),ps.crossVectors(Rt,Cn),r[0]=Cn.x,r[4]=ps.x,r[8]=Rt.x,r[1]=Cn.y,r[5]=ps.y,r[9]=Rt.y,r[2]=Cn.z,r[6]=ps.z,r[10]=Rt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],b=n[10],p=n[14],m=n[3],P=n[7],M=n[11],C=n[15],N=r[0],D=r[4],$=r[8],ce=r[12],ie=r[1],B=r[5],E=r[9],A=r[13],V=r[2],j=r[6],O=r[10],U=r[14],oe=r[3],de=r[7],K=r[11],Q=r[15];return s[0]=o*N+a*ie+l*V+c*oe,s[4]=o*D+a*B+l*j+c*de,s[8]=o*$+a*E+l*O+c*K,s[12]=o*ce+a*A+l*U+c*Q,s[1]=u*N+h*ie+f*V+d*oe,s[5]=u*D+h*B+f*j+d*de,s[9]=u*$+h*E+f*O+d*K,s[13]=u*ce+h*A+f*U+d*Q,s[2]=g*N+x*ie+b*V+p*oe,s[6]=g*D+x*B+b*j+p*de,s[10]=g*$+x*E+b*O+p*K,s[14]=g*ce+x*A+b*U+p*Q,s[3]=m*N+P*ie+M*V+C*oe,s[7]=m*D+P*B+M*j+C*de,s[11]=m*$+P*E+M*O+C*K,s[15]=m*ce+P*A+M*U+C*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],b=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+x*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+b*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],b=e[14],p=e[15],m=h*b*c-x*f*c+x*l*d-a*b*d-h*l*p+a*f*p,P=g*f*c-u*b*c-g*l*d+o*b*d+u*l*p-o*f*p,M=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,C=g*h*l-u*x*l-g*a*f+o*x*f+u*a*b-o*h*b,N=t*m+n*P+r*M+s*C;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/N;return e[0]=m*D,e[1]=(x*f*s-h*b*s-x*r*d+n*b*d+h*r*p-n*f*p)*D,e[2]=(a*b*s-x*l*s+x*r*c-n*b*c-a*r*p+n*l*p)*D,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*D,e[4]=P*D,e[5]=(u*b*s-g*f*s+g*r*d-t*b*d-u*r*p+t*f*p)*D,e[6]=(g*l*s-o*b*s-g*r*c+t*b*c+o*r*p-t*l*p)*D,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*D,e[8]=M*D,e[9]=(g*h*s-u*x*s-g*n*d+t*x*d+u*n*p-t*h*p)*D,e[10]=(o*x*s-g*a*s+g*n*c-t*x*c-o*n*p+t*a*p)*D,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*D,e[12]=C*D,e[13]=(u*x*r-g*h*r+g*n*f-t*x*f-u*n*b+t*h*b)*D,e[14]=(g*a*r-o*x*r-g*n*l+t*x*l+o*n*b-t*a*b)*D,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,x=o*u,b=o*h,p=a*h,m=l*c,P=l*u,M=l*h,C=n.x,N=n.y,D=n.z;return r[0]=(1-(x+p))*C,r[1]=(d+M)*C,r[2]=(g-P)*C,r[3]=0,r[4]=(d-M)*N,r[5]=(1-(f+p))*N,r[6]=(b+m)*N,r[7]=0,r[8]=(g+P)*D,r[9]=(b-m)*D,r[10]=(1-(f+x))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Mi.set(r[0],r[1],r[2]).length();const o=Mi.set(r[4],r[5],r[6]).length(),a=Mi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/o,h=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Ee.prototype.isMatrix4=!0;const Mi=new R,kt=new Ee,ux=new R(0,0,0),hx=new R(1,1,1),Cn=new R,ps=new R,Rt=new R,Uc=new Ee,Hc=new _t;class cr{constructor(e=0,t=0,n=0,r=cr.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new R(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}cr.prototype.isEuler=!0;cr.DefaultOrder="XYZ";cr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fx=0;const Vc=new R,wi=new _t,pn=new Ee,ms=new R,_r=new R,dx=new R,px=new _t,kc=new R(1,0,0),Gc=new R(0,1,0),Wc=new R(0,0,1),mx={type:"added"},qc={type:"removed"};class qe extends Xn{constructor(){super(),Object.defineProperty(this,"id",{value:fx++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DefaultUp.clone();const e=new R,t=new cr,n=new _t,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new dt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Gc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Vc.copy(e).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Gc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(_r,ms,this.up):pn.lookAt(ms,_r,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(pn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(qc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}qe.DefaultUp=new R(0,1,0);qe.DefaultMatrixAutoUpdate=!0;qe.prototype.isObject3D=!0;const Gt=new R,mn=new R,Xo=new R,gn=new R,Si=new R,Ti=new R,jc=new R,Yo=new R,Zo=new R,Jo=new R;class it{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),mn.subVectors(n,t),Xo.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(mn),l=Gt.dot(Xo),c=mn.dot(mn),u=mn.dot(Xo),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,gn),l.set(0,0),l.addScaledVector(s,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),mn.subVectors(e,t),Gt.cross(mn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Gt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return it.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return it.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return it.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return it.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return it.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Si.subVectors(r,n),Ti.subVectors(s,n),Yo.subVectors(e,n);const l=Si.dot(Yo),c=Ti.dot(Yo);if(l<=0&&c<=0)return t.copy(n);Zo.subVectors(e,r);const u=Si.dot(Zo),h=Ti.dot(Zo);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Si,o);Jo.subVectors(e,s);const d=Si.dot(Jo),g=Ti.dot(Jo);if(g>=0&&d<=g)return t.copy(s);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ti,a);const b=u*g-d*h;if(b<=0&&h-u>=0&&d-g>=0)return jc.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(jc,a);const p=1/(b+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Si,o).addScaledVector(Ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gx=0;class Mt extends Xn{constructor(){super(),Object.defineProperty(this,"id",{value:gx++}),this.uuid=ln(),this.name="",this.type="Material",this.fog=!0,this.blending=Nr,this.side=Vr,this.vertexColors=!1,this.opacity=1,this.format=lt,this.transparent=!1,this.blendSrc=Gh,this.blendDst=Wh,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===kh;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(n.blending=this.blending),this.side!==Vr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==lt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}Mt.prototype.isMaterial=!0;const Zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},gs={h:0,s:0,l:0};function $o(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ko(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class Se{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=sx(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=$o(s,r,e+1/3),this.g=$o(s,r,e),this.b=$o(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Zh[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}copyLinearToSRGB(e){return this.r=Qo(e.r),this.g=Qo(e.g),this.b=Qo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-r)/u+(n<r?6:0);break;case n:a=(r-t)/u+2;break;case r:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=n,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(gs);const n=zo(Wt.h,gs.h,t),r=zo(Wt.s,gs.s,t),s=zo(Wt.l,gs.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Se.NAMES=Zh;Se.prototype.isColor=!0;Se.prototype.r=1;Se.prototype.g=1;Se.prototype.b=1;class yl extends Mt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}yl.prototype.isMeshBasicMaterial=!0;const Ze=new R,xs=new le;class ot{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Wr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Se),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new le),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new R),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Ye),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}ot.prototype.isBufferAttribute=!0;class Jh extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $h extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xx extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}xx.prototype.isFloat16BufferAttribute=!0;class ct extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _x=0;const Bt=new Ee,ea=new qe,Ei=new R,Pt=new Yt,vr=new Yt,at=new R;class Ke extends Xn{constructor(){super(),Object.defineProperty(this,"id",{value:_x++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xh(e)>65535?$h:Jh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(Pt.min,vr.min),Pt.expandByPoint(at),at.addVectors(Pt.max,vr.max),Pt.expandByPoint(at)):(Pt.expandByPoint(vr.min),Pt.expandByPoint(vr.max))}Pt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)at.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(at));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)at.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),at.add(Ei)),r=Math.max(r,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new ot(new Float32Array(4*a),4));const l=t.tangent.array,c=[],u=[];for(let ie=0;ie<a;ie++)c[ie]=new R,u[ie]=new R;const h=new R,f=new R,d=new R,g=new le,x=new le,b=new le,p=new R,m=new R;function P(ie,B,E){h.fromArray(r,ie*3),f.fromArray(r,B*3),d.fromArray(r,E*3),g.fromArray(o,ie*2),x.fromArray(o,B*2),b.fromArray(o,E*2),f.sub(h),d.sub(h),x.sub(g),b.sub(g);const A=1/(x.x*b.y-b.x*x.y);!isFinite(A)||(p.copy(f).multiplyScalar(b.y).addScaledVector(d,-x.y).multiplyScalar(A),m.copy(d).multiplyScalar(x.x).addScaledVector(f,-b.x).multiplyScalar(A),c[ie].add(p),c[B].add(p),c[E].add(p),u[ie].add(m),u[B].add(m),u[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let ie=0,B=M.length;ie<B;++ie){const E=M[ie],A=E.start,V=E.count;for(let j=A,O=A+V;j<O;j+=3)P(n[j+0],n[j+1],n[j+2])}const C=new R,N=new R,D=new R,$=new R;function ce(ie){D.fromArray(s,ie*3),$.copy(D);const B=c[ie];C.copy(B),C.sub(D.multiplyScalar(D.dot(B))).normalize(),N.crossVectors($,B);const A=N.dot(u[ie])<0?-1:1;l[ie*4]=C.x,l[ie*4+1]=C.y,l[ie*4+2]=C.z,l[ie*4+3]=A}for(let ie=0,B=M.length;ie<B;++ie){const E=M[ie],A=E.start,V=E.count;for(let j=A,O=A+V;j<O;j+=3)ce(n[j+0]),ce(n[j+1]),ce(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),b=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,b),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,b),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,b=l.length;x<b;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new ot(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ke,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ke.prototype.isBufferGeometry=!0;const Xc=new Ee,Ai=new lr,ta=new ar,Ln=new R,Rn=new R,Pn=new R,na=new R,ia=new R,ra=new R,_s=new R,vs=new R,ys=new R,bs=new le,Ms=new le,ws=new le,sa=new R,Ss=new R;class xt extends qe{constructor(e=new Ke,t=new yl){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(s),e.ray.intersectsSphere(ta)===!1)||(Xc.copy(s).invert(),Ai.copy(e.ray).applyMatrix4(Xc),n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let x=0,b=d.length;x<b;x++){const p=d[x],m=r[p.materialIndex],P=Math.max(p.start,g.start),M=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let C=P,N=M;C<N;C+=3){const D=a.getX(C),$=a.getX(C+1),ce=a.getX(C+2);o=Ts(this,m,e,Ai,l,c,u,h,f,D,$,ce),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const x=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let p=x,m=b;p<m;p+=3){const P=a.getX(p),M=a.getX(p+1),C=a.getX(p+2);o=Ts(this,r,e,Ai,l,c,u,h,f,P,M,C),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let x=0,b=d.length;x<b;x++){const p=d[x],m=r[p.materialIndex],P=Math.max(p.start,g.start),M=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let C=P,N=M;C<N;C+=3){const D=C,$=C+1,ce=C+2;o=Ts(this,m,e,Ai,l,c,u,h,f,D,$,ce),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const x=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let p=x,m=b;p<m;p+=3){const P=p,M=p+1,C=p+2;o=Ts(this,r,e,Ai,l,c,u,h,f,P,M,C),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}xt.prototype.isMesh=!0;function vx(i,e,t,n,r,s,o,a){let l;if(e.side===st?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==di,a),l===null)return null;Ss.copy(a),Ss.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ss);return c<t.near||c>t.far?null:{distance:c,point:Ss.clone(),object:i}}function Ts(i,e,t,n,r,s,o,a,l,c,u,h){Ln.fromBufferAttribute(r,c),Rn.fromBufferAttribute(r,u),Pn.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){_s.set(0,0,0),vs.set(0,0,0),ys.set(0,0,0);for(let g=0,x=s.length;g<x;g++){const b=f[g],p=s[g];b!==0&&(na.fromBufferAttribute(p,c),ia.fromBufferAttribute(p,u),ra.fromBufferAttribute(p,h),o?(_s.addScaledVector(na,b),vs.addScaledVector(ia,b),ys.addScaledVector(ra,b)):(_s.addScaledVector(na.sub(Ln),b),vs.addScaledVector(ia.sub(Rn),b),ys.addScaledVector(ra.sub(Pn),b)))}Ln.add(_s),Rn.add(vs),Pn.add(ys)}i.isSkinnedMesh&&(i.boneTransform(c,Ln),i.boneTransform(u,Rn),i.boneTransform(h,Pn));const d=vx(i,e,t,n,Ln,Rn,Pn,sa);if(d){a&&(bs.fromBufferAttribute(a,c),Ms.fromBufferAttribute(a,u),ws.fromBufferAttribute(a,h),d.uv=it.getUV(sa,Ln,Rn,Pn,bs,Ms,ws,new le)),l&&(bs.fromBufferAttribute(l,c),Ms.fromBufferAttribute(l,u),ws.fromBufferAttribute(l,h),d.uv2=it.getUV(sa,Ln,Rn,Pn,bs,Ms,ws,new le));const g={a:c,b:u,c:h,normal:new R,materialIndex:0};it.getNormal(Ln,Rn,Pn,g.normal),d.face=g}return d}class ur extends Ke{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function g(x,b,p,m,P,M,C,N,D,$,ce){const ie=M/D,B=C/$,E=M/2,A=C/2,V=N/2,j=D+1,O=$+1;let U=0,oe=0;const de=new R;for(let K=0;K<O;K++){const Q=K*B-A;for(let me=0;me<j;me++){const he=me*ie-E;de[x]=he*m,de[b]=Q*P,de[p]=V,c.push(de.x,de.y,de.z),de[x]=0,de[b]=0,de[p]=N>0?1:-1,u.push(de.x,de.y,de.z),h.push(me/D),h.push(1-K/$),U+=1}}for(let K=0;K<$;K++)for(let Q=0;Q<D;Q++){const me=f+Q+j*K,he=f+Q+j*(K+1),_e=f+(Q+1)+j*(K+1),Pe=f+(Q+1)+j*K;l.push(me,he,Pe),l.push(he,_e,Pe),oe+=6}a.addGroup(d,oe,ce),d+=oe,f+=U}}static fromJSON(e){return new ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mt(i){const e={};for(let t=0;t<i.length;t++){const n=Qi(i[t]);for(const r in n)e[r]=n[r]}return e}const yx={clone:Qi,merge:mt};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Mt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=bx,this.fragmentShader=Mx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}pi.prototype.isShaderMaterial=!0;class bl extends qe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}bl.prototype.isCamera=!0;class St extends bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oo*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}St.prototype.isPerspectiveCamera=!0;const Ci=90,Li=1;class Ml extends qe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new St(Ci,Li,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new St(Ci,Li,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new St(Ci,Li,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new St(Ci,Li,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new St(Ci,Li,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new St(Ci,Li,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.xr.enabled,h=e.getRenderTarget();e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.xr.enabled=u}}class _o extends ut{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,n,r,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}_o.prototype.isCubeTexture=!0;class Kh extends Ut{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new _o(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=lt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ur(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:st,blending:Un});s.uniforms.tEquirect.value=t;const o=new xt(r,s),a=t.minFilter;return t.minFilter===go&&(t.minFilter=Tt),new Ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}Kh.prototype.isWebGLCubeRenderTarget=!0;const oa=new R,wx=new R,Sx=new dt;class _n{constructor(e=new R(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=oa.subVectors(n,t).cross(wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(oa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sx.getNormalMatrix(e),r=this.coplanarPoint(oa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}_n.prototype.isPlane=!0;const Ri=new ar,Es=new R;class vo{constructor(e=new _n,t=new _n,n=new _n,r=new _n,s=new _n,o=new _n){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],x=n[11],b=n[12],p=n[13],m=n[14],P=n[15];return t[0].setComponents(a-r,h-l,x-f,P-b).normalize(),t[1].setComponents(a+r,h+l,x+f,P+b).normalize(),t[2].setComponents(a+s,h+c,x+d,P+p).normalize(),t[3].setComponents(a-s,h-c,x-d,P-p).normalize(),t[4].setComponents(a-o,h-u,x-g,P-m).normalize(),t[5].setComponents(a+o,h+u,x+g,P+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Es.x=r.normal.x>0?e.max.x:e.min.x,Es.y=r.normal.y>0?e.max.y:e.min.y,Es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qh(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Tx(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g=5126;return h instanceof Float32Array?g=5126:h instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):h instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:h instanceof Int16Array?g=5122:h instanceof Uint32Array?g=5125:h instanceof Int32Array?g=5124:h instanceof Int8Array?g=5120:(h instanceof Uint8Array||h instanceof Uint8ClampedArray)&&(g=5121),{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class yo extends Ke{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],b=[];for(let p=0;p<u;p++){const m=p*f-o;for(let P=0;P<c;P++){const M=P*h-s;g.push(M,-m,0),x.push(0,0,1),b.push(P/a),b.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<a;m++){const P=m+c*p,M=m+c*(p+1),C=m+1+c*(p+1),N=m+1+c*p;d.push(P,M,N),d.push(M,C,N)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(b,2))}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ix="vec3 transformed = vec3( position );",Dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Wx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,qx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$x="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,c_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,u_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h_=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,f_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,d_=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,p_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,__=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,v_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,w_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,A_=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,C_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,F_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,N_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,B_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,O_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,e0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,t0=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,n0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,f0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,d0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,p0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,m0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,g0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,x0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,_0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,M0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,S0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,E0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,O0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,U0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,H0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,J0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:Ex,alphamap_pars_fragment:Ax,alphatest_fragment:Cx,alphatest_pars_fragment:Lx,aomap_fragment:Rx,aomap_pars_fragment:Px,begin_vertex:Ix,beginnormal_vertex:Dx,bsdfs:Fx,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Ox,clipping_planes_pars_vertex:zx,clipping_planes_vertex:Ux,color_fragment:Hx,color_pars_fragment:Vx,color_pars_vertex:kx,color_vertex:Gx,common:Wx,cube_uv_reflection_fragment:qx,defaultnormal_vertex:jx,displacementmap_pars_vertex:Xx,displacementmap_vertex:Yx,emissivemap_fragment:Zx,emissivemap_pars_fragment:Jx,encodings_fragment:$x,encodings_pars_fragment:Kx,envmap_fragment:Qx,envmap_common_pars_fragment:e_,envmap_pars_fragment:t_,envmap_pars_vertex:n_,envmap_physical_pars_fragment:d_,envmap_vertex:i_,fog_vertex:r_,fog_pars_vertex:s_,fog_fragment:o_,fog_pars_fragment:a_,gradientmap_pars_fragment:l_,lightmap_fragment:c_,lightmap_pars_fragment:u_,lights_lambert_vertex:h_,lights_pars_begin:f_,lights_toon_fragment:p_,lights_toon_pars_fragment:m_,lights_phong_fragment:g_,lights_phong_pars_fragment:x_,lights_physical_fragment:__,lights_physical_pars_fragment:v_,lights_fragment_begin:y_,lights_fragment_maps:b_,lights_fragment_end:M_,logdepthbuf_fragment:w_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:T_,logdepthbuf_vertex:E_,map_fragment:A_,map_pars_fragment:C_,map_particle_fragment:L_,map_particle_pars_fragment:R_,metalnessmap_fragment:P_,metalnessmap_pars_fragment:I_,morphnormal_vertex:D_,morphtarget_pars_vertex:F_,morphtarget_vertex:N_,normal_fragment_begin:B_,normal_fragment_maps:O_,normal_pars_fragment:z_,normal_pars_vertex:U_,normal_vertex:H_,normalmap_pars_fragment:V_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:W_,output_fragment:q_,packing:j_,premultiplied_alpha_fragment:X_,project_vertex:Y_,dithering_fragment:Z_,dithering_pars_fragment:J_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:e0,shadowmap_vertex:t0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:r0,skinning_vertex:s0,skinnormal_vertex:o0,specularmap_fragment:a0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:u0,transmission_fragment:h0,transmission_pars_fragment:f0,uv_pars_fragment:d0,uv_pars_vertex:p0,uv_vertex:m0,uv2_pars_fragment:g0,uv2_pars_vertex:x0,uv2_vertex:_0,worldpos_vertex:v0,background_vert:y0,background_frag:b0,cube_vert:M0,cube_frag:w0,depth_vert:S0,depth_frag:T0,distanceRGBA_vert:E0,distanceRGBA_frag:A0,equirect_vert:C0,equirect_frag:L0,linedashed_vert:R0,linedashed_frag:P0,meshbasic_vert:I0,meshbasic_frag:D0,meshlambert_vert:F0,meshlambert_frag:N0,meshmatcap_vert:B0,meshmatcap_frag:O0,meshnormal_vert:z0,meshnormal_frag:U0,meshphong_vert:H0,meshphong_frag:V0,meshphysical_vert:k0,meshphysical_frag:G0,meshtoon_vert:W0,meshtoon_frag:q0,points_vert:j0,points_frag:X0,shadow_vert:Y0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:$0},ge={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new dt},uv2Transform:{value:new dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dt}}},on={basic:{uniforms:mt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:mt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.fog,ge.lights,{emissive:{value:new Se(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:mt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:mt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:mt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Se(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:mt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:mt([ge.points,ge.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:mt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:mt([ge.common,ge.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:mt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:mt([ge.sprite,ge.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},cube:{uniforms:mt([ge.envmap,{opacity:{value:1}}]),vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:mt([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:mt([ge.lights,ge.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};on.physical={uniforms:mt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function K0(i,e,t,n,r){const s=new Se(0);let o=0,a,l,c=null,u=0,h=null;function f(g,x){let b=!1,p=x.isScene===!0?x.background:null;p&&p.isTexture&&(p=e.get(p));const m=i.xr,P=m.getSession&&m.getSession();P&&P.environmentBlendMode==="additive"&&(p=null),p===null?d(s,o):p&&p.isColor&&(d(p,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===mo)?(l===void 0&&(l=new xt(new ur(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Qi(on.cube.uniforms),vertexShader:on.cube.vertexShader,fragmentShader:on.cube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,h=i.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new xt(new yo(2,2),new pi({name:"BackgroundMaterial",uniforms:Qi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Vr,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||h!==i.toneMapping)&&(a.material.needsUpdate=!0,c=p,u=p.version,h=i.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function d(g,x){t.buffers.color.setClear(g.r,g.g,g.b,x,r)}return{getClearColor:function(){return s},setClearColor:function(g,x=1){s.set(g),o=x,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,d(s,o)},render:f}}function Q0(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=x(null);let c=l;function u(A,V,j,O,U){let oe=!1;if(o){const de=g(O,j,V);c!==de&&(c=de,f(c.object)),oe=b(O,U),oe&&p(O,U)}else{const de=V.wireframe===!0;(c.geometry!==O.id||c.program!==j.id||c.wireframe!==de)&&(c.geometry=O.id,c.program=j.id,c.wireframe=de,oe=!0)}A.isInstancedMesh===!0&&(oe=!0),U!==null&&t.update(U,34963),oe&&(D(A,V,j,O),U!==null&&i.bindBuffer(34963,t.get(U).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function f(A){return n.isWebGL2?i.bindVertexArray(A):s.bindVertexArrayOES(A)}function d(A){return n.isWebGL2?i.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function g(A,V,j){const O=j.wireframe===!0;let U=a[A.id];U===void 0&&(U={},a[A.id]=U);let oe=U[V.id];oe===void 0&&(oe={},U[V.id]=oe);let de=oe[O];return de===void 0&&(de=x(h()),oe[O]=de),de}function x(A){const V=[],j=[],O=[];for(let U=0;U<r;U++)V[U]=0,j[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:j,attributeDivisors:O,object:A,attributes:{},index:null}}function b(A,V){const j=c.attributes,O=A.attributes;let U=0;for(const oe in O){const de=j[oe],K=O[oe];if(de===void 0||de.attribute!==K||de.data!==K.data)return!0;U++}return c.attributesNum!==U||c.index!==V}function p(A,V){const j={},O=A.attributes;let U=0;for(const oe in O){const de=O[oe],K={};K.attribute=de,de.data&&(K.data=de.data),j[oe]=K,U++}c.attributes=j,c.attributesNum=U,c.index=V}function m(){const A=c.newAttributes;for(let V=0,j=A.length;V<j;V++)A[V]=0}function P(A){M(A,0)}function M(A,V){const j=c.newAttributes,O=c.enabledAttributes,U=c.attributeDivisors;j[A]=1,O[A]===0&&(i.enableVertexAttribArray(A),O[A]=1),U[A]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,V),U[A]=V)}function C(){const A=c.newAttributes,V=c.enabledAttributes;for(let j=0,O=V.length;j<O;j++)V[j]!==A[j]&&(i.disableVertexAttribArray(j),V[j]=0)}function N(A,V,j,O,U,oe){n.isWebGL2===!0&&(j===5124||j===5125)?i.vertexAttribIPointer(A,V,j,U,oe):i.vertexAttribPointer(A,V,j,O,U,oe)}function D(A,V,j,O){if(n.isWebGL2===!1&&(A.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const U=O.attributes,oe=j.getAttributes(),de=V.defaultAttributeValues;for(const K in oe){const Q=oe[K];if(Q.location>=0){let me=U[K];if(me===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(me=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(me=A.instanceColor)),me!==void 0){const he=me.normalized,_e=me.itemSize,Pe=t.get(me);if(Pe===void 0)continue;const ae=Pe.buffer,Te=Pe.type,Me=Pe.bytesPerElement;if(me.isInterleavedBufferAttribute){const ve=me.data,ye=ve.stride,Ie=me.offset;if(ve&&ve.isInstancedInterleavedBuffer){for(let J=0;J<Q.locationSize;J++)M(Q.location+J,ve.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let J=0;J<Q.locationSize;J++)P(Q.location+J);i.bindBuffer(34962,ae);for(let J=0;J<Q.locationSize;J++)N(Q.location+J,_e/Q.locationSize,Te,he,ye*Me,(Ie+_e/Q.locationSize*J)*Me)}else{if(me.isInstancedBufferAttribute){for(let ve=0;ve<Q.locationSize;ve++)M(Q.location+ve,me.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ve=0;ve<Q.locationSize;ve++)P(Q.location+ve);i.bindBuffer(34962,ae);for(let ve=0;ve<Q.locationSize;ve++)N(Q.location+ve,_e/Q.locationSize,Te,he,_e*Me,_e/Q.locationSize*ve*Me)}}else if(de!==void 0){const he=de[K];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(Q.location,he);break;case 3:i.vertexAttrib3fv(Q.location,he);break;case 4:i.vertexAttrib4fv(Q.location,he);break;default:i.vertexAttrib1fv(Q.location,he)}}}}C()}function $(){B();for(const A in a){const V=a[A];for(const j in V){const O=V[j];for(const U in O)d(O[U].object),delete O[U];delete V[j]}delete a[A]}}function ce(A){if(a[A.id]===void 0)return;const V=a[A.id];for(const j in V){const O=V[j];for(const U in O)d(O[U].object),delete O[U];delete V[j]}delete a[A.id]}function ie(A){for(const V in a){const j=a[V];if(j[A.id]===void 0)continue;const O=j[A.id];for(const U in O)d(O[U].object),delete O[U];delete j[A.id]}}function B(){E(),c!==l&&(c=l,f(c.object))}function E(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:B,resetDefaultState:E,dispose:$,releaseStatesOfGeometry:ce,releaseStatesOfProgram:ie,initAttributes:m,enableAttribute:P,disableUnusedAttributes:C}}function ev(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function tv(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),x=i.getParameter(34921),b=i.getParameter(36347),p=i.getParameter(36348),m=i.getParameter(36349),P=f>0,M=o||e.has("OES_texture_float"),C=P&&M,N=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:b,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:P,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:N}}function nv(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new _n,a=new dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||r;return r=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,b=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!b)s?u(null):c();else{const m=s?0:n,P=m*4;let M=p.clippingState||null;l.value=M,M=u(g,f,P,d);for(let C=0;C!==P;++C)M[C]=t[C];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let b=null;if(x!==0){if(b=l.value,g!==!0||b===null){const p=d+x*4,m=f.matrixWorldInverse;a.getNormalMatrix(m),(b===null||b.length<p)&&(b=new Float32Array(p));for(let P=0,M=d;P!==x;++P,M+=4)o.copy(h[P]).applyMatrix4(m,a),o.normal.toArray(b,M),b[M+3]=o.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,b}}function iv(i){let e=new WeakMap;function t(o,a){return a===Ba?o.mapping=Zr:a===Oa&&(o.mapping=Jr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ba||a===Oa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=i.getRenderTarget(),u=new Kh(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),i.setRenderTarget(c),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wl extends bl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}wl.prototype.isOrthographicCamera=!0;class bo extends pi{constructor(e){super(e),this.type="RawShaderMaterial"}}bo.prototype.isRawShaderMaterial=!0;const Xi=4,Vn=8,nn=Math.pow(2,Vn),ef=[.125,.215,.35,.446,.526,.582],tf=Vn-Xi+1+ef.length,Pi=20,to={[Xt]:0,[rr]:1},aa=new wl,{_lodPlanes:yr,_sizeLods:Yc,_sigmas:As}=sv(),Zc=new Se;let la=null;const ii=(1+Math.sqrt(5))/2,Ii=1/ii,Jc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ii,Ii),new R(0,ii,-Ii),new R(Ii,0,ii),new R(-Ii,0,ii),new R(ii,Ii,0),new R(-ii,Ii,0)];class rv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=ov(Pi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){la=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Qc(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Kc(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<yr.length;e++)yr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(la),e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e){la=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:ci,format:lt,encoding:Xt,depthBuffer:!1},n=$c(t);return n.depthBuffer=!e,this._pingPongRenderTarget=$c(t),n}_compileMaterial(e){const t=new xt(yr[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,r){const a=new St(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Zc),u.toneMapping=Hn,u.autoClear=!1;const d=new yl({name:"PMREM.Background",side:st,depthWrite:!1,depthTest:!1}),g=new xt(new ur,d);let x=!1;const b=e.background;b?b.isColor&&(d.color.copy(b),e.background=null,x=!0):(d.color.copy(Zc),x=!0);for(let p=0;p<6;p++){const m=p%3;m==0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):m==1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p])),Cs(r,m*nn,p>2?nn:0,nn,nn),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=b}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===lt&&t.type===bn&&t.encoding===rr?e.value=to[Xt]:e.value=to[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Zr||e.mapping===Jr;r?this._cubemapShader==null&&(this._cubemapShader=Qc()):this._equirectShader==null&&(this._equirectShader=Kc());const s=r?this._cubemapShader:this._equirectShader,o=new xt(yr[0],s),a=s.uniforms;a.envMap.value=e,r||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),Cs(t,0,0,3*nn,2*nn),n.setRenderTarget(t),n.render(o,aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<tf;r++){const s=Math.sqrt(As[r]*As[r]-As[r-1]*As[r-1]),o=Jc[(r-1)%Jc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xt(yr[r],c),f=c.uniforms,d=Yc[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),x=s/g,b=isFinite(s)?1+Math.floor(u*x):Pi;b>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Pi}`);const p=[];let m=0;for(let N=0;N<Pi;++N){const D=N/x,$=Math.exp(-D*D/2);p.push($),N==0?m+=$:N<b&&(m+=2*$)}for(let N=0;N<p.length;N++)p[N]=p[N]/m;f.envMap.value=e.texture,f.samples.value=b,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a),f.dTheta.value=g,f.mipInt.value=Vn-n;const P=Yc[r],M=3*Math.max(0,nn-2*P),C=(r===0?0:2*nn)+2*P*(r>Vn-Xi?r-Vn+Xi:0);Cs(t,M,C,3*P,2*P),l.setRenderTarget(t),l.render(h,aa)}}function sv(){const i=[],e=[],t=[];let n=Vn;for(let r=0;r<tf;r++){const s=Math.pow(2,n);e.push(s);let o=1/s;r>Vn-Xi?o=ef[r-Vn+Xi-1]:r==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,g=2,x=1,b=new Float32Array(d*f*h),p=new Float32Array(g*f*h),m=new Float32Array(x*f*h);for(let M=0;M<h;M++){const C=M%3*2/3-1,N=M>2?0:-1,D=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];b.set(D,d*f*M),p.set(u,g*f*M);const $=[M,M,M,M,M,M];m.set($,x*f*M)}const P=new Ke;P.setAttribute("position",new ot(b,d)),P.setAttribute("uv",new ot(p,g)),P.setAttribute("faceIndex",new ot(m,x)),i.push(P),n>Xi&&n--}return{_lodPlanes:i,_sizeLods:e,_sigmas:t}}function $c(i){const e=new Ut(3*nn,3*nn,i);return e.texture.mapping=mo,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function Cs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ov(i){const e=new Float32Array(i),t=new R(0,1,0);return new bo({name:"SphericalGaussianBlur",defines:{n:i},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Tl()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Kc(){const i=new le(1,1);return new bo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:i},inputEncoding:{value:to[Xt]}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Tl()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Qc(){return new bo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:to[Xt]}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Tl()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tl(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function av(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===Ba||l===Oa,u=l===Zr||l===Jr;if(c||u){if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){const f=i.getRenderTarget();t===null&&(t=new rv(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),i.setRenderTarget(f),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function cv(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let b=0,p=x.length;b<p;b++)e.update(x[b],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const m=d.array;x=d.version;for(let P=0,M=m.length;P<M;P+=3){const C=m[P+0],N=m[P+1],D=m[P+2];f.push(C,N,N,D,D,C)}}else{const m=g.array;x=g.version;for(let P=0,M=m.length/3-1;P<M;P+=3){const C=P+0,N=P+1,D=P+2;f.push(C,N,N,D,D,C)}}const b=new(Xh(f)>65535?$h:Jh)(f,1);b.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,b)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function uv(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let x,b;if(r)x=i,b="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[b](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function hv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}class El extends ut{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=nt,this.minFilter=nt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}El.prototype.isDataTexture2DArray=!0;function fv(i,e){return i[0]-e[0]}function dv(i,e){return Math.abs(e[1])-Math.abs(i[1])}function eu(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function pv(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new R,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let x=s.get(u);if(x===void 0||x.count!==g){x!==void 0&&x.texture.dispose();const m=u.morphAttributes.normal!==void 0,P=u.morphAttributes.position,M=u.morphAttributes.normal||[],C=u.attributes.position.count,N=m===!0?2:1;let D=C*N,$=1;D>e.maxTextureSize&&($=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const ce=new Float32Array(D*$*4*g),ie=new El(ce,D,$,g);ie.format=lt,ie.type=Nn,ie.needsUpdate=!0;const B=N*4;for(let E=0;E<g;E++){const A=P[E],V=M[E],j=D*$*4*E;for(let O=0;O<A.count;O++){o.fromBufferAttribute(A,O),A.normalized===!0&&eu(o,A);const U=O*B;ce[j+U+0]=o.x,ce[j+U+1]=o.y,ce[j+U+2]=o.z,ce[j+U+3]=0,m===!0&&(o.fromBufferAttribute(V,O),V.normalized===!0&&eu(o,V),ce[j+U+4]=o.x,ce[j+U+5]=o.y,ce[j+U+6]=o.z,ce[j+U+7]=0)}}x={count:g,texture:ie,size:new le(D,$)},s.set(u,x)}let b=0;for(let m=0;m<d.length;m++)b+=d[m];const p=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",p),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const g=d===void 0?0:d.length;let x=n[u.id];if(x===void 0||x.length!==g){x=[];for(let M=0;M<g;M++)x[M]=[M,0];n[u.id]=x}for(let M=0;M<g;M++){const C=x[M];C[0]=M,C[1]=d[M]}x.sort(dv);for(let M=0;M<8;M++)M<g&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(fv);const b=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let M=0;M<8;M++){const C=a[M],N=C[0],D=C[1];N!==Number.MAX_SAFE_INTEGER&&D?(b&&u.getAttribute("morphTarget"+M)!==b[N]&&u.setAttribute("morphTarget"+M,b[N]),p&&u.getAttribute("morphNormal"+M)!==p[N]&&u.setAttribute("morphNormal"+M,p[N]),r[M]=D,m+=D):(b&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const P=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",P),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function mv(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class nf extends ut{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=nt,this.minFilter=nt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}nf.prototype.isDataTexture3D=!0;const rf=new ut,sf=new El,of=new nf,af=new _o,tu=[],nu=[],iu=new Float32Array(16),ru=new Float32Array(9),su=new Float32Array(4);function hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=tu[r];if(s===void 0&&(s=new Float32Array(r),tu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=nu[e];t===void 0&&(t=new Int32Array(e),nu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function vv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(At(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),bt(t,n)}}function bv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(At(t,n))return;ru.set(n),i.uniformMatrix3fv(this.addr,!1,ru),bt(t,n)}}function Mv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(At(t,n))return;iu.set(n),i.uniformMatrix4fv(this.addr,!1,iu),bt(t,n)}}function wv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sv(i,e){const t=this.cache;At(t,e)||(i.uniform2iv(this.addr,e),bt(t,e))}function Tv(i,e){const t=this.cache;At(t,e)||(i.uniform3iv(this.addr,e),bt(t,e))}function Ev(i,e){const t=this.cache;At(t,e)||(i.uniform4iv(this.addr,e),bt(t,e))}function Av(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cv(i,e){const t=this.cache;At(t,e)||(i.uniform2uiv(this.addr,e),bt(t,e))}function Lv(i,e){const t=this.cache;At(t,e)||(i.uniform3uiv(this.addr,e),bt(t,e))}function Rv(i,e){const t=this.cache;At(t,e)||(i.uniform4uiv(this.addr,e),bt(t,e))}function Pv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||rf,r)}function Iv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||of,r)}function Dv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||af,r)}function Fv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||sf,r)}function Nv(i){switch(i){case 5126:return gv;case 35664:return xv;case 35665:return _v;case 35666:return vv;case 35674:return yv;case 35675:return bv;case 35676:return Mv;case 5124:case 35670:return wv;case 35667:case 35671:return Sv;case 35668:case 35672:return Tv;case 35669:case 35673:return Ev;case 5125:return Av;case 36294:return Cv;case 36295:return Lv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Fv}}function Bv(i,e){i.uniform1fv(this.addr,e)}function Ov(i,e){const t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function zv(i,e){const t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function Uv(i,e){const t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function Hv(i,e){const t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vv(i,e){const t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kv(i,e){const t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gv(i,e){i.uniform1iv(this.addr,e)}function Wv(i,e){i.uniform2iv(this.addr,e)}function qv(i,e){i.uniform3iv(this.addr,e)}function jv(i,e){i.uniform4iv(this.addr,e)}function Xv(i,e){i.uniform1uiv(this.addr,e)}function Yv(i,e){i.uniform2uiv(this.addr,e)}function Zv(i,e){i.uniform3uiv(this.addr,e)}function Jv(i,e){i.uniform4uiv(this.addr,e)}function $v(i,e,t){const n=e.length,r=Mo(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||rf,r[s])}function Kv(i,e,t){const n=e.length,r=Mo(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||of,r[s])}function Qv(i,e,t){const n=e.length,r=Mo(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||af,r[s])}function ey(i,e,t){const n=e.length,r=Mo(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||sf,r[s])}function ty(i){switch(i){case 5126:return Bv;case 35664:return Ov;case 35665:return zv;case 35666:return Uv;case 35674:return Hv;case 35675:return Vv;case 35676:return kv;case 5124:case 35670:return Gv;case 35667:case 35671:return Wv;case 35668:case 35672:return qv;case 35669:case 35673:return jv;case 5125:return Xv;case 36294:return Yv;case 36295:return Zv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return Qv;case 36289:case 36303:case 36311:case 36292:return ey}}function ny(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=Nv(e.type)}function lf(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=ty(e.type)}lf.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),bt(e,i)};function cf(i){this.id=i,this.seq=[],this.map={}}cf.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const ca=/(\w+)(\])?(\[|\.)?/g;function ou(i,e){i.seq.push(e),i.map[e.id]=e}function iy(i,e,t){const n=i.name,r=n.length;for(ca.lastIndex=0;;){const s=ca.exec(n),o=ca.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ou(t,c===void 0?new ny(a,i,e):new lf(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new cf(a),ou(t,h)),t=h}}}function kn(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);iy(r,s,this)}}kn.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};kn.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};kn.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};kn.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function au(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let ry=0;function sy(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function uf(i){switch(i){case Xt:return["Linear","( value )"];case rr:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function lu(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();return n&&r===""?"":t.toUpperCase()+`

`+r+`

`+sy(i.getShaderSource(e))}function ti(i,e){const t=uf(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function oy(i,e){const t=uf(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ay(i,e){let t;switch(e){case eg:t="Linear";break;case tg:t="Reinhard";break;case ng:t="OptimizedCineon";break;case ig:t="ACESFilmic";break;case rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ly(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function cy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uy(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Lr(i){return i!==""}function cu(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(i){return i.replace(hy,fy)}function fy(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ha(t)}const dy=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(i){return i.replace(py,hf).replace(dy,my)}function my(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),hf(i,e,t,n)}function hf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Im?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function xy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case mo:case xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jr:case xl:e="ENVMAP_MODE_REFRACTION";break}return e}function vy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case po:e="ENVMAP_BLENDING_MULTIPLY";break;case Km:e="ENVMAP_BLENDING_MIX";break;case Qm:e="ENVMAP_BLENDING_ADD";break}return e}function yy(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gy(t),c=xy(t),u=_y(t),h=vy(t),f=t.isWebGL2?"":ly(t),d=cy(s),g=r.createProgram();let x,b,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[d].filter(Lr).join(`
`),x.length>0&&(x+=`
`),b=[f,d].filter(Lr).join(`
`),b.length>0&&(b+=`
`)):(x=[fu(t),"#define SHADER_NAME "+t.shaderName,d,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),b=[f,fu(t),"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Hn?ay("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===ui?"#define OPAQUE":"",ze.encodings_pars_fragment,t.map?ti("mapTexelToLinear",t.mapEncoding):"",t.matcap?ti("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?ti("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?ti("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?ti("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?ti("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?ti("lightMapTexelToLinear",t.lightMapEncoding):"",oy("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lr).join(`
`)),o=Ha(o),o=cu(o,t),o=uu(o,t),a=Ha(a),a=cu(a,t),a=uu(a,t),o=hu(o),a=hu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,b=["#define varying in",t.glslVersion===Nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const m=p+x+o,P=p+b+a,M=au(r,35633,m),C=au(r,35632,P);if(r.attachShader(g,M),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const $=r.getProgramInfoLog(g).trim(),ce=r.getShaderInfoLog(M).trim(),ie=r.getShaderInfoLog(C).trim();let B=!0,E=!0;if(r.getProgramParameter(g,35714)===!1){B=!1;const A=lu(r,M,"vertex"),V=lu(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+$+`
`+A+`
`+V)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(ce===""||ie==="")&&(E=!1);E&&(this.diagnostics={runnable:B,programLog:$,vertexShader:{log:ce,prefix:x},fragmentShader:{log:ie,prefix:b}})}r.deleteShader(M),r.deleteShader(C);let N;this.getUniforms=function(){return N===void 0&&(N=new kn(r,g)),N};let D;return this.getAttributes=function(){return D===void 0&&(D=uy(r,g)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=ry++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=C,this}let by=0;class My{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new wy;t.set(e,n)}return t.get(e)}}class wy{constructor(){this.id=by++,this.usedTimes=0}}function Sy(i,e,t,n,r,s,o){const a=new Yh,l=new My,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.floatVertexTextures,d=r.maxVertexUniforms,g=r.vertexTextures;let x=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(E){const V=E.skeleton.bones;if(f)return 1024;{const O=Math.floor((d-20)/4),U=Math.min(O,V.length);return U<V.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+V.length+" bones. This GPU supports "+U+"."),0):U}}function m(E){let A;return E&&E.isTexture?A=E.encoding:E&&E.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=E.texture.encoding):A=Xt,u&&E&&E.isTexture&&E.format===lt&&E.type===bn&&E.encoding===rr&&(A=Xt),A}function P(E,A,V,j,O){const U=j.fog,oe=E.isMeshStandardMaterial?j.environment:null,de=(E.isMeshStandardMaterial?t:e).get(E.envMap||oe),K=b[E.type],Q=O.isSkinnedMesh?p(O):0;E.precision!==null&&(x=r.getMaxPrecision(E.precision),x!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",x,"instead."));let me,he,_e,Pe;if(K){const ye=on[K];me=ye.vertexShader,he=ye.fragmentShader}else me=E.vertexShader,he=E.fragmentShader,l.update(E),_e=l.getVertexShaderID(E),Pe=l.getFragmentShaderID(E);const ae=i.getRenderTarget(),Te=E.alphaTest>0,Me=E.clearcoat>0;return{isWebGL2:u,shaderID:K,shaderName:E.type,vertexShader:me,fragmentShader:he,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:Pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:x,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:g,outputEncoding:ae!==null?m(ae.texture):i.outputEncoding,map:!!E.map,mapEncoding:m(E.map),matcap:!!E.matcap,matcapEncoding:m(E.matcap),envMap:!!de,envMapMode:de&&de.mapping,envMapEncoding:m(de),envMapCubeUV:!!de&&(de.mapping===mo||de.mapping===xl),lightMap:!!E.lightMap,lightMapEncoding:m(E.lightMap),aoMap:!!E.aoMap,emissiveMap:!!E.emissiveMap,emissiveMapEncoding:m(E.emissiveMap),bumpMap:!!E.bumpMap,normalMap:!!E.normalMap,objectSpaceNormalMap:E.normalMapType===ix,tangentSpaceNormalMap:E.normalMapType===sr,clearcoat:Me,clearcoatMap:Me&&!!E.clearcoatMap,clearcoatRoughnessMap:Me&&!!E.clearcoatRoughnessMap,clearcoatNormalMap:Me&&!!E.clearcoatNormalMap,displacementMap:!!E.displacementMap,roughnessMap:!!E.roughnessMap,metalnessMap:!!E.metalnessMap,specularMap:!!E.specularMap,specularIntensityMap:!!E.specularIntensityMap,specularColorMap:!!E.specularColorMap,specularColorMapEncoding:m(E.specularColorMap),alphaMap:!!E.alphaMap,alphaTest:Te,gradientMap:!!E.gradientMap,sheen:E.sheen>0,sheenColorMap:!!E.sheenColorMap,sheenColorMapEncoding:m(E.sheenColorMap),sheenRoughnessMap:!!E.sheenRoughnessMap,transmission:E.transmission>0,transmissionMap:!!E.transmissionMap,thicknessMap:!!E.thicknessMap,combine:E.combine,vertexTangents:!!E.normalMap&&!!O.geometry&&!!O.geometry.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!O.geometry&&!!O.geometry.attributes.color&&O.geometry.attributes.color.itemSize===4,vertexUvs:!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatMap||!!E.clearcoatRoughnessMap||!!E.clearcoatNormalMap||!!E.displacementMap||!!E.transmissionMap||!!E.thicknessMap||!!E.specularIntensityMap||!!E.specularColorMap||!!E.sheenColorMap||!!E.sheenRoughnessMap,uvsVertexOnly:!(!!E.map||!!E.bumpMap||!!E.normalMap||!!E.specularMap||!!E.alphaMap||!!E.emissiveMap||!!E.roughnessMap||!!E.metalnessMap||!!E.clearcoatNormalMap||E.transmission>0||!!E.transmissionMap||!!E.thicknessMap||!!E.specularIntensityMap||!!E.specularColorMap||E.sheen>0||!!E.sheenColorMap||!!E.sheenRoughnessMap)&&!!E.displacementMap,fog:!!U,useFog:E.fog,fogExp2:U&&U.isFogExp2,flatShading:!!E.flatShading,sizeAttenuation:E.sizeAttenuation,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0&&Q>0,maxBones:Q,useVertexTexture:f,morphTargets:!!O.geometry&&!!O.geometry.morphAttributes.position,morphNormals:!!O.geometry&&!!O.geometry.morphAttributes.normal,morphTargetsCount:!!O.geometry&&!!O.geometry.morphAttributes.position?O.geometry.morphAttributes.position.length:0,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:E.format,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:E.toneMapped?i.toneMapping:Hn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===di,flipSided:E.side===st,depthPacking:E.depthPacking!==void 0?E.depthPacking:!1,index0AttributeName:E.index0AttributeName,extensionDerivatives:E.extensions&&E.extensions.derivatives,extensionFragDepth:E.extensions&&E.extensions.fragDepth,extensionDrawBuffers:E.extensions&&E.extensions.drawBuffers,extensionShaderTextureLOD:E.extensions&&E.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function M(E){const A=[];if(E.shaderID?A.push(E.shaderID):(A.push(E.customVertexShaderID),A.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)A.push(V),A.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(C(A,E),N(A,E),A.push(i.outputEncoding)),A.push(E.customProgramCacheKey),A.join()}function C(E,A){E.push(A.precision),E.push(A.outputEncoding),E.push(A.mapEncoding),E.push(A.matcapEncoding),E.push(A.envMapMode),E.push(A.envMapEncoding),E.push(A.lightMapEncoding),E.push(A.emissiveMapEncoding),E.push(A.combine),E.push(A.vertexUvs),E.push(A.fogExp2),E.push(A.sizeAttenuation),E.push(A.maxBones),E.push(A.morphTargetsCount),E.push(A.numDirLights),E.push(A.numPointLights),E.push(A.numSpotLights),E.push(A.numHemiLights),E.push(A.numRectAreaLights),E.push(A.numDirLightShadows),E.push(A.numPointLightShadows),E.push(A.numSpotLightShadows),E.push(A.shadowMapType),E.push(A.toneMapping),E.push(A.numClippingPlanes),E.push(A.numClipIntersection),E.push(A.format),E.push(A.specularColorMapEncoding),E.push(A.sheenColorMapEncoding)}function N(E,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.envMapCubeUV&&a.enable(7),A.lightMap&&a.enable(8),A.aoMap&&a.enable(9),A.emissiveMap&&a.enable(10),A.bumpMap&&a.enable(11),A.normalMap&&a.enable(12),A.objectSpaceNormalMap&&a.enable(13),A.tangentSpaceNormalMap&&a.enable(14),A.clearcoat&&a.enable(15),A.clearcoatMap&&a.enable(16),A.clearcoatRoughnessMap&&a.enable(17),A.clearcoatNormalMap&&a.enable(18),A.displacementMap&&a.enable(19),A.specularMap&&a.enable(20),A.roughnessMap&&a.enable(21),A.metalnessMap&&a.enable(22),A.gradientMap&&a.enable(23),A.alphaMap&&a.enable(24),A.alphaTest&&a.enable(25),A.vertexColors&&a.enable(26),A.vertexAlphas&&a.enable(27),A.vertexUvs&&a.enable(28),A.vertexTangents&&a.enable(29),A.uvsVertexOnly&&a.enable(30),A.fog&&a.enable(31),E.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.useVertexTexture&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.depthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),E.push(a.mask)}function D(E){const A=b[E.type];let V;if(A){const j=on[A];V=yx.clone(j.uniforms)}else V=E.uniforms;return V}function $(E,A){let V;for(let j=0,O=c.length;j<O;j++){const U=c[j];if(U.cacheKey===A){V=U,++V.usedTimes;break}}return V===void 0&&(V=new yy(i,A,E,s),c.push(V)),V}function ce(E){if(--E.usedTimes===0){const A=c.indexOf(E);c[A]=c[c.length-1],c.pop(),E.destroy()}}function ie(E){l.remove(E)}function B(){l.dispose()}return{getParameters:P,getProgramCacheKey:M,getUniforms:D,acquireProgram:$,releaseProgram:ce,releaseShaderCache:ie,programs:c,dispose:B}}function Ty(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Ey(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function du(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,x,b){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:b},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=b),e++,p}function a(h,f,d,g,x,b){const p=o(h,f,d,g,x,b);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,x,b){const p=o(h,f,d,g,x,b);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||Ey),n.length>1&&n.sort(f||du),r.length>1&&r.sort(f||du)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Ay(){let i=new WeakMap;function e(n,r){let s;return i.has(n)===!1?(s=new pu,i.set(n,[s])):r>=i.get(n).length?(s=new pu,i.get(n).push(s)):s=i.get(n)[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Se};break;case"SpotLight":t={position:new R,direction:new R,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Ly(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ry=0;function Py(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function Iy(i,e){const t=new Cy,n=Ly(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new R);const s=new R,o=new Ee,a=new Ee;function l(u,h){let f=0,d=0,g=0;for(let ce=0;ce<9;ce++)r.probe[ce].set(0,0,0);let x=0,b=0,p=0,m=0,P=0,M=0,C=0,N=0;u.sort(Py);const D=h!==!0?Math.PI:1;for(let ce=0,ie=u.length;ce<ie;ce++){const B=u[ce],E=B.color,A=B.intensity,V=B.distance,j=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=E.r*A*D,d+=E.g*A*D,g+=E.b*A*D;else if(B.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(B.sh.coefficients[O],A);else if(B.isDirectionalLight){const O=t.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity*D),B.castShadow){const U=B.shadow,oe=n.get(B);oe.shadowBias=U.bias,oe.shadowNormalBias=U.normalBias,oe.shadowRadius=U.radius,oe.shadowMapSize=U.mapSize,r.directionalShadow[x]=oe,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=B.shadow.matrix,M++}r.directional[x]=O,x++}else if(B.isSpotLight){const O=t.get(B);if(O.position.setFromMatrixPosition(B.matrixWorld),O.color.copy(E).multiplyScalar(A*D),O.distance=V,O.coneCos=Math.cos(B.angle),O.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),O.decay=B.decay,B.castShadow){const U=B.shadow,oe=n.get(B);oe.shadowBias=U.bias,oe.shadowNormalBias=U.normalBias,oe.shadowRadius=U.radius,oe.shadowMapSize=U.mapSize,r.spotShadow[p]=oe,r.spotShadowMap[p]=j,r.spotShadowMatrix[p]=B.shadow.matrix,N++}r.spot[p]=O,p++}else if(B.isRectAreaLight){const O=t.get(B);O.color.copy(E).multiplyScalar(A),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),r.rectArea[m]=O,m++}else if(B.isPointLight){const O=t.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity*D),O.distance=B.distance,O.decay=B.decay,B.castShadow){const U=B.shadow,oe=n.get(B);oe.shadowBias=U.bias,oe.shadowNormalBias=U.normalBias,oe.shadowRadius=U.radius,oe.shadowMapSize=U.mapSize,oe.shadowCameraNear=U.camera.near,oe.shadowCameraFar=U.camera.far,r.pointShadow[b]=oe,r.pointShadowMap[b]=j,r.pointShadowMatrix[b]=B.shadow.matrix,C++}r.point[b]=O,b++}else if(B.isHemisphereLight){const O=t.get(B);O.skyColor.copy(B.color).multiplyScalar(A*D),O.groundColor.copy(B.groundColor).multiplyScalar(A*D),r.hemi[P]=O,P++}}m>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const $=r.hash;($.directionalLength!==x||$.pointLength!==b||$.spotLength!==p||$.rectAreaLength!==m||$.hemiLength!==P||$.numDirectionalShadows!==M||$.numPointShadows!==C||$.numSpotShadows!==N)&&(r.directional.length=x,r.spot.length=p,r.rectArea.length=m,r.point.length=b,r.hemi.length=P,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=C,r.spotShadowMatrix.length=N,$.directionalLength=x,$.pointLength=b,$.spotLength=p,$.rectAreaLength=m,$.hemiLength=P,$.numDirectionalShadows=M,$.numPointShadows=C,$.numSpotShadows=N,r.version=Ry++)}function c(u,h){let f=0,d=0,g=0,x=0,b=0;const p=h.matrixWorldInverse;for(let m=0,P=u.length;m<P;m++){const M=u[m];if(M.isDirectionalLight){const C=r.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),f++}else if(M.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const C=r.point[d];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const C=r.hemi[b];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),C.direction.normalize(),b++}}}return{setup:l,setupView:c,state:r}}function mu(i,e){const t=new Iy(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dy(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new mu(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new mu(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class ff extends Mt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}ff.prototype.isMeshDepthMaterial=!0;class df extends Mt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}df.prototype.isMeshDistanceMaterial=!0;const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pf(i,e,t){let n=new vo;const r=new le,s=new le,o=new Ye,a=new ff({depthPacking:nx}),l=new df,c={},u=t.maxTextureSize,h={0:st,1:Vr,2:di},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Fy,fragmentShader:Ny}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xt(g,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh,this.render=function(M,C,N){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||M.length===0)return;const D=i.getRenderTarget(),$=i.getActiveCubeFace(),ce=i.getActiveMipmapLevel(),ie=i.state;ie.setBlending(Un),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);for(let B=0,E=M.length;B<E;B++){const A=M[B],V=A.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const j=V.getFrameExtents();if(r.multiply(j),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,V.mapSize.y=s.y)),V.map===null&&!V.isPointLightShadow&&this.type===Cr){const U={minFilter:Tt,magFilter:Tt,format:lt};V.map=new Ut(r.x,r.y,U),V.map.texture.name=A.name+".shadowMap",V.mapPass=new Ut(r.x,r.y,U),V.camera.updateProjectionMatrix()}if(V.map===null){const U={minFilter:nt,magFilter:nt,format:lt};V.map=new Ut(r.x,r.y,U),V.map.texture.name=A.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const O=V.getViewportCount();for(let U=0;U<O;U++){const oe=V.getViewport(U);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),ie.viewport(o),V.updateMatrices(A,U),n=V.getFrustum(),P(C,N,V.camera,A,this.type)}!V.isPointLightShadow&&this.type===Cr&&p(V,N),V.needsUpdate=!1}b.needsUpdate=!1,i.setRenderTarget(D,$,ce)};function p(M,C){const N=e.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,N,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,N,d,x,null)}function m(M,C,N,D,$,ce,ie){let B=null;const E=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(E!==void 0?B=E:B=D.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0){const A=B.uuid,V=N.uuid;let j=c[A];j===void 0&&(j={},c[A]=j);let O=j[V];O===void 0&&(O=B.clone(),j[V]=O),B=O}return B.visible=N.visible,B.wireframe=N.wireframe,ie===Cr?B.side=N.shadowSide!==null?N.shadowSide:N.side:B.side=N.shadowSide!==null?N.shadowSide:h[N.side],B.alphaMap=N.alphaMap,B.alphaTest=N.alphaTest,B.clipShadows=N.clipShadows,B.clippingPlanes=N.clippingPlanes,B.clipIntersection=N.clipIntersection,B.displacementMap=N.displacementMap,B.displacementScale=N.displacementScale,B.displacementBias=N.displacementBias,B.wireframeLinewidth=N.wireframeLinewidth,B.linewidth=N.linewidth,D.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(D.matrixWorld),B.nearDistance=$,B.farDistance=ce),B}function P(M,C,N,D,$){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&$===Cr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld);const B=e.update(M),E=M.material;if(Array.isArray(E)){const A=B.groups;for(let V=0,j=A.length;V<j;V++){const O=A[V],U=E[O.materialIndex];if(U&&U.visible){const oe=m(M,B,U,D,N.near,N.far,$);i.renderBufferDirect(N,null,B,oe,M,O)}}}else if(E.visible){const A=m(M,B,E,D,N.near,N.far,$);i.renderBufferDirect(N,null,B,A,M,null)}}const ie=M.children;for(let B=0,E=ie.length;B<E;B++)P(ie[B],C,N,D,$)}}function By(i,e,t){const n=t.isWebGL2;function r(){let w=!1;const ne=new Ye;let re=null;const we=new Ye(0,0,0,0);return{setMask:function(xe){re!==xe&&!w&&(i.colorMask(xe,xe,xe,xe),re=xe)},setLocked:function(xe){w=xe},setClear:function(xe,Ae,ue,be,De){De===!0&&(xe*=be,Ae*=be,ue*=be),ne.set(xe,Ae,ue,be),we.equals(ne)===!1&&(i.clearColor(xe,Ae,ue,be),we.copy(ne))},reset:function(){w=!1,re=null,we.set(-1,0,0,0)}}}function s(){let w=!1,ne=null,re=null,we=null;return{setTest:function(xe){xe?he(2929):_e(2929)},setMask:function(xe){ne!==xe&&!w&&(i.depthMask(xe),ne=xe)},setFunc:function(xe){if(re!==xe){if(xe)switch(xe){case qm:i.depthFunc(512);break;case jm:i.depthFunc(519);break;case Xm:i.depthFunc(513);break;case Na:i.depthFunc(515);break;case Ym:i.depthFunc(514);break;case Zm:i.depthFunc(518);break;case Jm:i.depthFunc(516);break;case $m:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);re=xe}},setLocked:function(xe){w=xe},setClear:function(xe){we!==xe&&(i.clearDepth(xe),we=xe)},reset:function(){w=!1,ne=null,re=null,we=null}}}function o(){let w=!1,ne=null,re=null,we=null,xe=null,Ae=null,ue=null,be=null,De=null;return{setTest:function(Xe){w||(Xe?he(2960):_e(2960))},setMask:function(Xe){ne!==Xe&&!w&&(i.stencilMask(Xe),ne=Xe)},setFunc:function(Xe,Zt,Jt){(re!==Xe||we!==Zt||xe!==Jt)&&(i.stencilFunc(Xe,Zt,Jt),re=Xe,we=Zt,xe=Jt)},setOp:function(Xe,Zt,Jt){(Ae!==Xe||ue!==Zt||be!==Jt)&&(i.stencilOp(Xe,Zt,Jt),Ae=Xe,ue=Zt,be=Jt)},setLocked:function(Xe){w=Xe},setClear:function(Xe){De!==Xe&&(i.clearStencil(Xe),De=Xe)},reset:function(){w=!1,ne=null,re=null,we=null,xe=null,Ae=null,ue=null,be=null,De=null}}}const a=new r,l=new s,c=new o;let u={},h={},f=null,d=!1,g=null,x=null,b=null,p=null,m=null,P=null,M=null,C=!1,N=null,D=null,$=null,ce=null,ie=null;const B=i.getParameter(35661);let E=!1,A=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(A=parseFloat(/^WebGL (\d)/.exec(V)[1]),E=A>=1):V.indexOf("OpenGL ES")!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),E=A>=2);let j=null,O={};const U=i.getParameter(3088),oe=i.getParameter(2978),de=new Ye().fromArray(U),K=new Ye().fromArray(oe);function Q(w,ne,re){const we=new Uint8Array(4),xe=i.createTexture();i.bindTexture(w,xe),i.texParameteri(w,10241,9728),i.texParameteri(w,10240,9728);for(let Ae=0;Ae<re;Ae++)i.texImage2D(ne+Ae,0,6408,1,1,0,6408,5121,we);return xe}const me={};me[3553]=Q(3553,3553,1),me[34067]=Q(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(2929),l.setFunc(Na),Ie(!1),J(xc),he(2884),ve(Un);function he(w){u[w]!==!0&&(i.enable(w),u[w]=!0)}function _e(w){u[w]!==!1&&(i.disable(w),u[w]=!1)}function Pe(w,ne){return h[w]!==ne?(i.bindFramebuffer(w,ne),h[w]=ne,n&&(w===36009&&(h[36160]=ne),w===36160&&(h[36009]=ne)),!0):!1}function ae(w){return f!==w?(i.useProgram(w),f=w,!0):!1}const Te={[Ui]:32774,[Fm]:32778,[Nm]:32779};if(n)Te[bc]=32775,Te[Mc]=32776;else{const w=e.get("EXT_blend_minmax");w!==null&&(Te[bc]=w.MIN_EXT,Te[Mc]=w.MAX_EXT)}const Me={[Bm]:0,[Om]:1,[zm]:768,[Gh]:770,[Wm]:776,[km]:774,[Hm]:772,[Um]:769,[Wh]:771,[Gm]:775,[Vm]:773};function ve(w,ne,re,we,xe,Ae,ue,be){if(w===Un){d===!0&&(_e(3042),d=!1);return}if(d===!1&&(he(3042),d=!0),w!==Dm){if(w!==g||be!==C){if((x!==Ui||m!==Ui)&&(i.blendEquation(32774),x=Ui,m=Ui),be)switch(w){case Nr:i.blendFuncSeparate(1,771,1,771);break;case _c:i.blendFunc(1,1);break;case vc:i.blendFuncSeparate(0,0,769,771);break;case yc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Nr:i.blendFuncSeparate(770,771,1,771);break;case _c:i.blendFunc(770,1);break;case vc:i.blendFunc(0,769);break;case yc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}b=null,p=null,P=null,M=null,g=w,C=be}return}xe=xe||ne,Ae=Ae||re,ue=ue||we,(ne!==x||xe!==m)&&(i.blendEquationSeparate(Te[ne],Te[xe]),x=ne,m=xe),(re!==b||we!==p||Ae!==P||ue!==M)&&(i.blendFuncSeparate(Me[re],Me[we],Me[Ae],Me[ue]),b=re,p=we,P=Ae,M=ue),g=w,C=null}function ye(w,ne){w.side===di?_e(2884):he(2884);let re=w.side===st;ne&&(re=!re),Ie(re),w.blending===Nr&&w.transparent===!1?ve(Un):ve(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const we=w.stencilWrite;c.setTest(we),we&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),T(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?he(32926):_e(32926)}function Ie(w){N!==w&&(w?i.frontFace(2304):i.frontFace(2305),N=w)}function J(w){w!==Rm?(he(2884),w!==D&&(w===xc?i.cullFace(1029):w===Pm?i.cullFace(1028):i.cullFace(1032))):_e(2884),D=w}function y(w){w!==$&&(E&&i.lineWidth(w),$=w)}function T(w,ne,re){w?(he(32823),(ce!==ne||ie!==re)&&(i.polygonOffset(ne,re),ce=ne,ie=re)):_e(32823)}function I(w){w?he(3089):_e(3089)}function F(w){w===void 0&&(w=33984+B-1),j!==w&&(i.activeTexture(w),j=w)}function k(w,ne){j===null&&F();let re=O[j];re===void 0&&(re={type:void 0,texture:void 0},O[j]=re),(re.type!==w||re.texture!==ne)&&(i.bindTexture(w,ne||me[w]),re.type=w,re.texture=ne)}function Y(){const w=O[j];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function v(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function z(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function H(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function X(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function W(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function fe(w){de.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),de.copy(w))}function pe(w){K.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),K.copy(w))}function L(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,O={},h={},f=null,d=!1,g=null,x=null,b=null,p=null,m=null,P=null,M=null,C=!1,N=null,D=null,$=null,ce=null,ie=null,de.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:he,disable:_e,bindFramebuffer:Pe,useProgram:ae,setBlending:ve,setMaterial:ye,setFlipSided:Ie,setCullFace:J,setLineWidth:y,setPolygonOffset:T,setScissorTest:I,activeTexture:F,bindTexture:k,unbindTexture:Y,compressedTexImage2D:te,texImage2D:X,texImage3D:W,texStorage2D:z,texStorage3D:H,texSubImage2D:ee,texSubImage3D:v,compressedTexSubImage2D:_,scissor:fe,viewport:pe,reset:L}}function Oy(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,g=new WeakMap;let x,b=!1;try{b=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(v,_){return b?new OffscreenCanvas(v,_):xo("canvas")}function m(v,_,z,H){let X=1;if((v.width>H||v.height>H)&&(X=H/Math.max(v.width,v.height)),X<1||_===!0)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap){const W=_?ox:Math.floor,fe=W(X*v.width),pe=W(X*v.height);x===void 0&&(x=p(fe,pe));const L=z?p(fe,pe):x;return L.width=fe,L.height=pe,L.getContext("2d").drawImage(v,0,0,fe,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+fe+"x"+pe+")."),L}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function P(v){return Bc(v.width)&&Bc(v.height)}function M(v){return a?!1:v.wrapS!==Dt||v.wrapT!==Dt||v.minFilter!==nt&&v.minFilter!==Tt}function C(v,_){return v.generateMipmaps&&_&&v.minFilter!==nt&&v.minFilter!==Tt}function N(v){i.generateMipmap(v)}function D(v,_,z,H){if(a===!1)return _;if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let X=_;return _===6403&&(z===5126&&(X=33326),z===5131&&(X=33325),z===5121&&(X=33321)),_===6407&&(z===5126&&(X=34837),z===5131&&(X=34843),z===5121&&(X=32849)),_===6408&&(z===5126&&(X=34836),z===5131&&(X=34842),z===5121&&(X=H===rr?35907:32856)),(X===33325||X===33326||X===34842||X===34836)&&e.get("EXT_color_buffer_float"),X}function $(v,_,z){return C(v,z)===!0||v.isFramebufferTexture&&v.minFilter!==nt&&v.minFilter!==Tt?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function ce(v){return v===nt||v===wc||v===Sc?9728:9729}function ie(v){const _=v.target;_.removeEventListener("dispose",ie),E(_),_.isVideoTexture&&g.delete(_),o.memory.textures--}function B(v){const _=v.target;_.removeEventListener("dispose",B),A(_)}function E(v){const _=n.get(v);_.__webglInit!==void 0&&(i.deleteTexture(_.__webglTexture),n.remove(v))}function A(v){const _=v.texture,z=n.get(v),H=n.get(_);if(!!v){if(H.__webglTexture!==void 0&&(i.deleteTexture(H.__webglTexture),o.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let X=0;X<6;X++)i.deleteFramebuffer(z.__webglFramebuffer[X]),z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[X]);else i.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer&&i.deleteRenderbuffer(z.__webglColorRenderbuffer),z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer);if(v.isWebGLMultipleRenderTargets)for(let X=0,W=_.length;X<W;X++){const fe=n.get(_[X]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(_[X])}n.remove(_),n.remove(v)}}let V=0;function j(){V=0}function O(){const v=V;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),V+=1,v}function U(v,_){const z=n.get(v);if(v.isVideoTexture&&F(v),v.version>0&&z.__version!==v.version){const H=v.image;if(H===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(z,v,_);return}}t.activeTexture(33984+_),t.bindTexture(3553,z.__webglTexture)}function oe(v,_){const z=n.get(v);if(v.version>0&&z.__version!==v.version){Pe(z,v,_);return}t.activeTexture(33984+_),t.bindTexture(35866,z.__webglTexture)}function de(v,_){const z=n.get(v);if(v.version>0&&z.__version!==v.version){Pe(z,v,_);return}t.activeTexture(33984+_),t.bindTexture(32879,z.__webglTexture)}function K(v,_){const z=n.get(v);if(v.version>0&&z.__version!==v.version){ae(z,v,_);return}t.activeTexture(33984+_),t.bindTexture(34067,z.__webglTexture)}const Q={[kr]:10497,[Dt]:33071,[za]:33648},me={[nt]:9728,[wc]:9984,[Sc]:9986,[Tt]:9729,[sg]:9985,[go]:9987};function he(v,_,z){if(z?(i.texParameteri(v,10242,Q[_.wrapS]),i.texParameteri(v,10243,Q[_.wrapT]),(v===32879||v===35866)&&i.texParameteri(v,32882,Q[_.wrapR]),i.texParameteri(v,10240,me[_.magFilter]),i.texParameteri(v,10241,me[_.minFilter])):(i.texParameteri(v,10242,33071),i.texParameteri(v,10243,33071),(v===32879||v===35866)&&i.texParameteri(v,32882,33071),(_.wrapS!==Dt||_.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(v,10240,ce(_.magFilter)),i.texParameteri(v,10241,ce(_.minFilter)),_.minFilter!==nt&&_.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(_.type===Nn&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===ci&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(i.texParameterf(v,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function _e(v,_){v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",ie),v.__webglTexture=i.createTexture(),o.memory.textures++)}function Pe(v,_,z){let H=3553;_.isDataTexture2DArray&&(H=35866),_.isDataTexture3D&&(H=32879),_e(v,_),t.activeTexture(33984+z),t.bindTexture(H,v.__webglTexture),i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const X=M(_)&&P(_.image)===!1,W=m(_.image,X,!1,u),fe=P(W)||a,pe=s.convert(_.format);let L=s.convert(_.type),w=D(_.internalFormat,pe,L,_.encoding);he(H,_,fe);let ne;const re=_.mipmaps,we=a&&_.isVideoTexture!==!0,xe=v.__version===void 0,Ae=$(_,W,fe);if(_.isDepthTexture)w=6402,a?_.type===Nn?w=36012:_.type===Gs?w=33190:_.type===ji?w=35056:w=33189:_.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===hi&&w===6402&&_.type!==Gr&&_.type!==Gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Gr,L=s.convert(_.type)),_.format===Ki&&w===6402&&(w=34041,_.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=ji,L=s.convert(_.type))),we&&xe?t.texStorage2D(3553,1,w,W.width,W.height):t.texImage2D(3553,0,w,W.width,W.height,0,pe,L,null);else if(_.isDataTexture)if(re.length>0&&fe){we&&xe&&t.texStorage2D(3553,Ae,w,re[0].width,re[0].height);for(let ue=0,be=re.length;ue<be;ue++)ne=re[ue],we?t.texSubImage2D(3553,0,0,0,ne.width,ne.height,pe,L,ne.data):t.texImage2D(3553,ue,w,ne.width,ne.height,0,pe,L,ne.data);_.generateMipmaps=!1}else we?(xe&&t.texStorage2D(3553,Ae,w,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,pe,L,W.data)):t.texImage2D(3553,0,w,W.width,W.height,0,pe,L,W.data);else if(_.isCompressedTexture){we&&xe&&t.texStorage2D(3553,Ae,w,re[0].width,re[0].height);for(let ue=0,be=re.length;ue<be;ue++)ne=re[ue],_.format!==lt&&_.format!==ui?pe!==null?we?t.compressedTexSubImage2D(3553,ue,0,0,ne.width,ne.height,pe,ne.data):t.compressedTexImage2D(3553,ue,w,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?t.texSubImage2D(3553,ue,0,0,ne.width,ne.height,pe,L,ne.data):t.texImage2D(3553,ue,w,ne.width,ne.height,0,pe,L,ne.data)}else if(_.isDataTexture2DArray)we?(xe&&t.texStorage3D(35866,Ae,w,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,pe,L,W.data)):t.texImage3D(35866,0,w,W.width,W.height,W.depth,0,pe,L,W.data);else if(_.isDataTexture3D)we?(xe&&t.texStorage3D(32879,Ae,w,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,pe,L,W.data)):t.texImage3D(32879,0,w,W.width,W.height,W.depth,0,pe,L,W.data);else if(_.isFramebufferTexture)we&&xe?t.texStorage2D(3553,Ae,w,W.width,W.height):t.texImage2D(3553,0,w,W.width,W.height,0,pe,L,null);else if(re.length>0&&fe){we&&xe&&t.texStorage2D(3553,Ae,w,re[0].width,re[0].height);for(let ue=0,be=re.length;ue<be;ue++)ne=re[ue],we?t.texSubImage2D(3553,ue,0,0,pe,L,ne):t.texImage2D(3553,ue,w,pe,L,ne);_.generateMipmaps=!1}else we?(xe&&t.texStorage2D(3553,Ae,w,W.width,W.height),t.texSubImage2D(3553,0,0,0,pe,L,W)):t.texImage2D(3553,0,w,pe,L,W);C(_,fe)&&N(H),v.__version=_.version,_.onUpdate&&_.onUpdate(_)}function ae(v,_,z){if(_.image.length!==6)return;_e(v,_),t.activeTexture(33984+z),t.bindTexture(34067,v.__webglTexture),i.pixelStorei(37440,_.flipY),i.pixelStorei(37441,_.premultiplyAlpha),i.pixelStorei(3317,_.unpackAlignment),i.pixelStorei(37443,0);const H=_&&(_.isCompressedTexture||_.image[0].isCompressedTexture),X=_.image[0]&&_.image[0].isDataTexture,W=[];for(let ue=0;ue<6;ue++)!H&&!X?W[ue]=m(_.image[ue],!1,!0,c):W[ue]=X?_.image[ue].image:_.image[ue];const fe=W[0],pe=P(fe)||a,L=s.convert(_.format),w=s.convert(_.type),ne=D(_.internalFormat,L,w,_.encoding),re=a&&_.isVideoTexture!==!0,we=v.__version===void 0;let xe=$(_,fe,pe);he(34067,_,pe);let Ae;if(H){re&&we&&t.texStorage2D(34067,xe,ne,fe.width,fe.height);for(let ue=0;ue<6;ue++){Ae=W[ue].mipmaps;for(let be=0;be<Ae.length;be++){const De=Ae[be];_.format!==lt&&_.format!==ui?L!==null?re?t.compressedTexSubImage2D(34069+ue,be,0,0,De.width,De.height,L,De.data):t.compressedTexImage2D(34069+ue,be,ne,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?t.texSubImage2D(34069+ue,be,0,0,De.width,De.height,L,w,De.data):t.texImage2D(34069+ue,be,ne,De.width,De.height,0,L,w,De.data)}}}else{Ae=_.mipmaps,re&&we&&(Ae.length>0&&xe++,t.texStorage2D(34067,xe,ne,W[0].width,W[0].height));for(let ue=0;ue<6;ue++)if(X){re?t.texSubImage2D(34069+ue,0,0,0,W[ue].width,W[ue].height,L,w,W[ue].data):t.texImage2D(34069+ue,0,ne,W[ue].width,W[ue].height,0,L,w,W[ue].data);for(let be=0;be<Ae.length;be++){const Xe=Ae[be].image[ue].image;re?t.texSubImage2D(34069+ue,be+1,0,0,Xe.width,Xe.height,L,w,Xe.data):t.texImage2D(34069+ue,be+1,ne,Xe.width,Xe.height,0,L,w,Xe.data)}}else{re?t.texSubImage2D(34069+ue,0,0,0,L,w,W[ue]):t.texImage2D(34069+ue,0,ne,L,w,W[ue]);for(let be=0;be<Ae.length;be++){const De=Ae[be];re?t.texSubImage2D(34069+ue,be+1,0,0,L,w,De.image[ue]):t.texImage2D(34069+ue,be+1,ne,L,w,De.image[ue])}}}C(_,pe)&&N(34067),v.__version=_.version,_.onUpdate&&_.onUpdate(_)}function Te(v,_,z,H,X){const W=s.convert(z.format),fe=s.convert(z.type),pe=D(z.internalFormat,W,fe,z.encoding);n.get(_).__hasExternalTextures||(X===32879||X===35866?t.texImage3D(X,0,pe,_.width,_.height,_.depth,0,W,fe,null):t.texImage2D(X,0,pe,_.width,_.height,0,W,fe,null)),t.bindFramebuffer(36160,v),_.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,H,X,n.get(z).__webglTexture,0,I(_)):i.framebufferTexture2D(36160,H,X,n.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(v,_,z){if(i.bindRenderbuffer(36161,v),_.depthBuffer&&!_.stencilBuffer){let H=33189;if(z||_.useRenderToTexture){const X=_.depthTexture;X&&X.isDepthTexture&&(X.type===Nn?H=36012:X.type===Gs&&(H=33190));const W=I(_);_.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,W,H,_.width,_.height):i.renderbufferStorageMultisample(36161,W,H,_.width,_.height)}else i.renderbufferStorage(36161,H,_.width,_.height);i.framebufferRenderbuffer(36160,36096,36161,v)}else if(_.depthBuffer&&_.stencilBuffer){const H=I(_);z&&_.useRenderbuffer?i.renderbufferStorageMultisample(36161,H,35056,_.width,_.height):_.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,H,35056,_.width,_.height):i.renderbufferStorage(36161,34041,_.width,_.height),i.framebufferRenderbuffer(36160,33306,36161,v)}else{const H=_.isWebGLMultipleRenderTargets===!0?_.texture[0]:_.texture,X=s.convert(H.format),W=s.convert(H.type),fe=D(H.internalFormat,X,W,H.encoding),pe=I(_);z&&_.useRenderbuffer?i.renderbufferStorageMultisample(36161,pe,fe,_.width,_.height):_.useRenderToTexture?d.renderbufferStorageMultisampleEXT(36161,pe,fe,_.width,_.height):i.renderbufferStorage(36161,fe,_.width,_.height)}i.bindRenderbuffer(36161,null)}function ve(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),U(_.depthTexture,0);const H=n.get(_.depthTexture).__webglTexture,X=I(_);if(_.depthTexture.format===hi)_.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,X):i.framebufferTexture2D(36160,36096,3553,H,0);else if(_.depthTexture.format===Ki)_.useRenderToTexture?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,X):i.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function ye(v){const _=n.get(v),z=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ve(_.__webglFramebuffer,v)}else if(z){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]=i.createRenderbuffer(),Me(_.__webglDepthbuffer[H],v,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),Me(_.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function Ie(v,_,z){const H=n.get(v);_!==void 0&&Te(H.__webglFramebuffer,v,v.texture,36064,3553),z!==void 0&&ye(v)}function J(v){const _=v.texture,z=n.get(v),H=n.get(_);v.addEventListener("dispose",B),v.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,o.memory.textures++);const X=v.isWebGLCubeRenderTarget===!0,W=v.isWebGLMultipleRenderTargets===!0,fe=_.isDataTexture3D||_.isDataTexture2DArray,pe=P(v)||a;if(a&&_.format===ui&&(_.type===Nn||_.type===ci)&&(_.format=lt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),X){z.__webglFramebuffer=[];for(let L=0;L<6;L++)z.__webglFramebuffer[L]=i.createFramebuffer()}else if(z.__webglFramebuffer=i.createFramebuffer(),W)if(r.drawBuffers){const L=v.texture;for(let w=0,ne=L.length;w<ne;w++){const re=n.get(L[w]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(v.useRenderbuffer)if(a){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=i.createRenderbuffer(),i.bindRenderbuffer(36161,z.__webglColorRenderbuffer);const L=s.convert(_.format),w=s.convert(_.type),ne=D(_.internalFormat,L,w,_.encoding),re=I(v);i.renderbufferStorageMultisample(36161,re,ne,v.width,v.height),t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064,36161,z.__webglColorRenderbuffer),i.bindRenderbuffer(36161,null),v.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(z.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(X){t.bindTexture(34067,H.__webglTexture),he(34067,_,pe);for(let L=0;L<6;L++)Te(z.__webglFramebuffer[L],v,_,36064,34069+L);C(_,pe)&&N(34067),t.unbindTexture()}else if(W){const L=v.texture;for(let w=0,ne=L.length;w<ne;w++){const re=L[w],we=n.get(re);t.bindTexture(3553,we.__webglTexture),he(3553,re,pe),Te(z.__webglFramebuffer,v,re,36064+w,3553),C(re,pe)&&N(3553)}t.unbindTexture()}else{let L=3553;fe&&(a?L=_.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(L,H.__webglTexture),he(L,_,pe),Te(z.__webglFramebuffer,v,_,36064,L),C(_,pe)&&N(L),t.unbindTexture()}v.depthBuffer&&ye(v)}function y(v){const _=P(v)||a,z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let H=0,X=z.length;H<X;H++){const W=z[H];if(C(W,_)){const fe=v.isWebGLCubeRenderTarget?34067:3553,pe=n.get(W).__webglTexture;t.bindTexture(fe,pe),N(fe),t.unbindTexture()}}}function T(v){if(v.useRenderbuffer)if(a){const _=v.width,z=v.height;let H=16384;const X=[36064],W=v.stencilBuffer?33306:36096;v.depthBuffer&&X.push(W),v.ignoreDepthForMultisampleCopy||(v.depthBuffer&&(H|=256),v.stencilBuffer&&(H|=1024));const fe=n.get(v);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer),v.ignoreDepthForMultisampleCopy&&(i.invalidateFramebuffer(36008,[W]),i.invalidateFramebuffer(36009,[W])),i.blitFramebuffer(0,0,_,z,0,0,_,z,H,9728),i.invalidateFramebuffer(36008,X),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function I(v){return a&&(v.useRenderbuffer||v.useRenderToTexture)?Math.min(h,v.samples):0}function F(v){const _=o.render.frame;g.get(v)!==_&&(g.set(v,_),v.update())}let k=!1,Y=!1;function te(v,_){v&&v.isWebGLRenderTarget&&(k===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),k=!0),v=v.texture),U(v,_)}function ee(v,_){v&&v.isWebGLCubeRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Y=!0),v=v.texture),K(v,_)}this.allocateTextureUnit=O,this.resetTextureUnits=j,this.setTexture2D=U,this.setTexture2DArray=oe,this.setTexture3D=de,this.setTextureCube=K,this.rebindTextures=Ie,this.setupRenderTarget=J,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Te,this.safeSetTexture2D=te,this.safeSetTextureCube=ee}function zy(i,e,t){const n=t.isWebGL2;function r(s){let o;if(s===bn)return 5121;if(s===cg)return 32819;if(s===ug)return 32820;if(s===hg)return 33635;if(s===og)return 5120;if(s===ag)return 5122;if(s===Gr)return 5123;if(s===lg)return 5124;if(s===Gs)return 5125;if(s===Nn)return 5126;if(s===ci)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===fg)return 6406;if(s===ui)return 6407;if(s===lt)return 6408;if(s===dg)return 6409;if(s===pg)return 6410;if(s===hi)return 6402;if(s===Ki)return 34041;if(s===mg)return 6403;if(s===gg)return 36244;if(s===xg)return 33319;if(s===_g)return 33320;if(s===vg)return 36248;if(s===yg)return 36249;if(s===Tc||s===Ec||s===Ac||s===Cc)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Tc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Lc||s===Rc||s===Pc||s===Ic)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Lc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ic)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===bg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((s===Dc||s===Fc)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(s===Dc)return o.COMPRESSED_RGB8_ETC2;if(s===Fc)return o.COMPRESSED_RGBA8_ETC2_EAC}if(s===Mg||s===wg||s===Sg||s===Tg||s===Eg||s===Ag||s===Cg||s===Lg||s===Rg||s===Pg||s===Ig||s===Dg||s===Fg||s===Ng||s===Og||s===zg||s===Ug||s===Hg||s===Vg||s===kg||s===Gg||s===Wg||s===qg||s===jg||s===Xg||s===Yg||s===Zg||s===Jg)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?s:null;if(s===Bg)return o=e.get("EXT_texture_compression_bptc"),o!==null?s:null;if(s===ji)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class mf extends St{constructor(e=[]){super(),this.cameras=e}}mf.prototype.isArrayCamera=!0;class Rr extends qe{constructor(){super(),this.type="Group"}}Rr.prototype.isGroup=!0;const Uy={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uy))),c&&e.hand){o=!0;for(const x of e.hand.values()){const b=t.getJointPose(x,n);if(c.joints[x.jointName]===void 0){const m=new Rr;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[x.jointName]=m,c.add(m)}const p=c.joints[x.jointName];b!==null&&(p.matrix.fromArray(b.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=b.radius),p.visible=b!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Va extends ut{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:hi,u!==hi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hi&&(n=Gr),n===void 0&&u===Ki&&(n=ji),super(null,r,s,o,a,l,u,n,c),this.image={width:e,height:t},this.magFilter=a!==void 0?a:nt,this.minFilter=l!==void 0?l:nt,this.flipY=!1,this.generateMipmaps=!1}}Va.prototype.isDepthTexture=!0;class Hy extends Xn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,u=null,h=null,f=null,d=!1,g=null;const x=t.getContextAttributes();let b=null,p=null;const m=[],P=new Map,M=new St;M.layers.enable(1),M.viewport=new Ye;const C=new St;C.layers.enable(2),C.viewport=new Ye;const N=[M,C],D=new mf;D.layers.enable(1),D.layers.enable(2);let $=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=m[K];return Q===void 0&&(Q=new ua,m[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=m[K];return Q===void 0&&(Q=new ua,m[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=m[K];return Q===void 0&&(Q=new ua,m[K]=Q),Q.getHandSpace()};function ie(K){const Q=P.get(K.inputSource);Q&&Q.dispatchEvent({type:K.type,data:K.inputSource})}function B(){P.forEach(function(K,Q){K.disconnect(Q)}),P.clear(),$=null,ce=null,e.setRenderTarget(b),f=null,h=null,u=null,r=null,p=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",B),r.addEventListener("inputsourceschange",E),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:x.alpha,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:f}),p=new Ut(f.framebufferWidth,f.framebufferHeight,{format:lt,type:bn,encoding:e.outputEncoding})}else{d=x.antialias;let Q=null,me=null,he=null;x.depth&&(he=x.stencil?35056:33190,Q=x.stencil?Ki:hi,me=x.stencil?ji:Gr);const _e={colorFormat:x.alpha||d?32856:32849,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(_e),r.updateRenderState({layers:[h]}),d?p=new vl(h.textureWidth,h.textureHeight,{format:lt,type:bn,depthTexture:new Va(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,ignoreDepth:h.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):p=new Ut(h.textureWidth,h.textureHeight,{format:x.alpha?lt:ui,type:bn,depthTexture:new Va(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,ignoreDepth:h.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function E(K){const Q=r.inputSources;for(let me=0;me<m.length;me++)P.set(Q[me],m[me]);for(let me=0;me<K.removed.length;me++){const he=K.removed[me],_e=P.get(he);_e&&(_e.dispatchEvent({type:"disconnected",data:he}),P.delete(he))}for(let me=0;me<K.added.length;me++){const he=K.added[me],_e=P.get(he);_e&&_e.dispatchEvent({type:"connected",data:he})}}const A=new R,V=new R;function j(K,Q,me){A.setFromMatrixPosition(Q.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);const he=A.distanceTo(V),_e=Q.projectionMatrix.elements,Pe=me.projectionMatrix.elements,ae=_e[14]/(_e[10]-1),Te=_e[14]/(_e[10]+1),Me=(_e[9]+1)/_e[5],ve=(_e[9]-1)/_e[5],ye=(_e[8]-1)/_e[0],Ie=(Pe[8]+1)/Pe[0],J=ae*ye,y=ae*Ie,T=he/(-ye+Ie),I=T*-ye;Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(I),K.translateZ(T),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const F=ae+T,k=Te+T,Y=J-I,te=y+(he-I),ee=Me*Te/k*F,v=ve*Te/k*F;K.projectionMatrix.makePerspective(Y,te,ee,v,F,k)}function O(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;D.near=C.near=M.near=K.near,D.far=C.far=M.far=K.far,($!==D.near||ce!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),$=D.near,ce=D.far);const Q=K.parent,me=D.cameras;O(D,Q);for(let _e=0;_e<me.length;_e++)O(me[_e],Q);D.matrixWorld.decompose(D.position,D.quaternion,D.scale),K.position.copy(D.position),K.quaternion.copy(D.quaternion),K.scale.copy(D.scale),K.matrix.copy(D.matrix),K.matrixWorld.copy(D.matrixWorld);const he=K.children;for(let _e=0,Pe=he.length;_e<Pe;_e++)he[_e].updateMatrixWorld(!0);me.length===2?j(D,M,C):D.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return D},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(K){h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)};let U=null;function oe(K,Q){if(c=Q.getViewerPose(o),g=Q,c!==null){const he=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let _e=!1;he.length!==D.cameras.length&&(D.cameras.length=0,_e=!0);for(let Pe=0;Pe<he.length;Pe++){const ae=he[Pe];let Te=null;if(f!==null)Te=f.getViewport(ae);else{const ve=u.getViewSubImage(h,ae);Te=ve.viewport,Pe===0&&(e.setRenderTargetTextures(p,ve.colorTexture,h.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(p))}const Me=N[Pe];Me.matrix.fromArray(ae.transform.matrix),Me.projectionMatrix.fromArray(ae.projectionMatrix),Me.viewport.set(Te.x,Te.y,Te.width,Te.height),Pe===0&&D.matrix.copy(Me.matrix),_e===!0&&D.cameras.push(Me)}}const me=r.inputSources;for(let he=0;he<m.length;he++){const _e=m[he],Pe=me[he];_e.update(Pe,Q,o)}U&&U(K,Q),g=null}const de=new Qh;de.setAnimationLoop(oe),this.setAnimationLoop=function(K){U=K},this.dispose=function(){}}}function Vy(i){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,P,M,C){m.isMeshBasicMaterial?n(p,m):m.isMeshLambertMaterial?(n(p,m),l(p,m)):m.isMeshToonMaterial?(n(p,m),u(p,m)):m.isMeshPhongMaterial?(n(p,m),c(p,m)):m.isMeshStandardMaterial?(n(p,m),m.isMeshPhysicalMaterial?f(p,m,C):h(p,m)):m.isMeshMatcapMaterial?(n(p,m),d(p,m)):m.isMeshDepthMaterial?(n(p,m),g(p,m)):m.isMeshDistanceMaterial?(n(p,m),x(p,m)):m.isMeshNormalMaterial?(n(p,m),b(p,m)):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?o(p,m,P,M):m.isSpriteMaterial?a(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const P=i.get(m).envMap;P&&(p.envMap.value=P,p.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let C;m.aoMap?C=m.aoMap:m.lightMap&&(C=m.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uv2Transform.value.copy(C.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,P,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*P,p.scale.value=M*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let C;m.map?C=m.map:m.alphaMap&&(C=m.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),p.uvTransform.value.copy(C.matrix))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let P;m.map?P=m.map:m.alphaMap&&(P=m.alphaMap),P!==void 0&&(P.matrixAutoUpdate===!0&&P.updateMatrix(),p.uvTransform.value.copy(P.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===st&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===st&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===st&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===st&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===st&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===st&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),i.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,P){h(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===st&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===st&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===st&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function x(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function b(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===st&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===st&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function ky(){const i=xo("canvas");return i.style.display="block",i}function je(i={}){const e=i.canvas!==void 0?i.canvas:ky(),t=i.context!==void 0?i.context:null,n=i.alpha!==void 0?i.alpha:!1,r=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,o=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,l=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",u=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Xt,this.physicallyCorrectLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;const x=this;let b=!1,p=0,m=0,P=null,M=-1,C=null;const N=new Ye,D=new Ye;let $=null,ce=e.width,ie=e.height,B=1,E=null,A=null;const V=new Ye(0,0,ce,ie),j=new Ye(0,0,ce,ie);let O=!1;const U=[],oe=new vo;let de=!1,K=!1,Q=null;const me=new Ee,he=new R,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return P===null?B:1}let ae=t;function Te(S,G){for(let Z=0;Z<S.length;Z++){const q=S[Z],se=e.getContext(q,G);if(se!==null)return se}return null}try{const S={alpha:n,depth:r,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",xe,!1),ae===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),ae=Te(G,S),ae===null)throw Te(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}ae.getShaderPrecisionFormat===void 0&&(ae.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Me,ve,ye,Ie,J,y,T,I,F,k,Y,te,ee,v,_,z,H,X,W,fe,pe,L,w;function ne(){Me=new lv(ae),ve=new tv(ae,Me,i),Me.init(ve),L=new zy(ae,Me,ve),ye=new By(ae,Me,ve),U[0]=1029,Ie=new hv(ae),J=new Ty,y=new Oy(ae,Me,ye,J,ve,L,Ie),T=new iv(x),I=new av(x),F=new Tx(ae,ve),w=new Q0(ae,Me,F,ve),k=new cv(ae,F,Ie,w),Y=new mv(ae,k,F,Ie),W=new pv(ae,ve,y),z=new nv(J),te=new Sy(x,T,I,Me,ve,w,z),ee=new Vy(J),v=new Ay,_=new Dy(Me,ve),X=new K0(x,T,ye,Y,a),H=new pf(x,Y,ve),fe=new ev(ae,Me,Ie,ve),pe=new uv(ae,Me,Ie,ve),Ie.programs=te.programs,x.capabilities=ve,x.extensions=Me,x.properties=J,x.renderLists=v,x.shadowMap=H,x.state=ye,x.info=Ie}ne();const re=new Hy(x,ae);this.xr=re,this.getContext=function(){return ae},this.getContextAttributes=function(){return ae.getContextAttributes()},this.forceContextLoss=function(){const S=Me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(ce,ie,!1))},this.getSize=function(S){return S.set(ce,ie)},this.setSize=function(S,G,Z){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=S,ie=G,e.width=Math.floor(S*B),e.height=Math.floor(G*B),Z!==!1&&(e.style.width=S+"px",e.style.height=G+"px"),this.setViewport(0,0,S,G)},this.getDrawingBufferSize=function(S){return S.set(ce*B,ie*B).floor()},this.setDrawingBufferSize=function(S,G,Z){ce=S,ie=G,B=Z,e.width=Math.floor(S*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,S,G)},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(V)},this.setViewport=function(S,G,Z,q){S.isVector4?V.set(S.x,S.y,S.z,S.w):V.set(S,G,Z,q),ye.viewport(N.copy(V).multiplyScalar(B).floor())},this.getScissor=function(S){return S.copy(j)},this.setScissor=function(S,G,Z,q){S.isVector4?j.set(S.x,S.y,S.z,S.w):j.set(S,G,Z,q),ye.scissor(D.copy(j).multiplyScalar(B).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(S){ye.setScissorTest(O=S)},this.setOpaqueSort=function(S){E=S},this.setTransparentSort=function(S){A=S},this.getClearColor=function(S){return S.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(S,G,Z){let q=0;(S===void 0||S)&&(q|=16384),(G===void 0||G)&&(q|=256),(Z===void 0||Z)&&(q|=1024),ae.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",xe,!1),v.dispose(),_.dispose(),J.dispose(),T.dispose(),I.dispose(),Y.dispose(),w.dispose(),te.dispose(),re.dispose(),re.removeEventListener("sessionstart",Zt),re.removeEventListener("sessionend",Jt),Q&&(Q.dispose(),Q=null),Zn.stop()};function we(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=Ie.autoReset,G=H.enabled,Z=H.autoUpdate,q=H.needsUpdate,se=H.type;ne(),Ie.autoReset=S,H.enabled=G,H.autoUpdate=Z,H.needsUpdate=q,H.type=se}function Ae(S){const G=S.target;G.removeEventListener("dispose",Ae),ue(G)}function ue(S){be(S),J.remove(S)}function be(S){const G=J.get(S).programs;G!==void 0&&(G.forEach(function(Z){te.releaseProgram(Z)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,G,Z,q,se,Ce){G===null&&(G=_e);const Re=se.isMesh&&se.matrixWorld.determinant()<0,Fe=Gf(S,G,Z,q,se);ye.setMaterial(q,Re);let Le=Z.index;const Ve=Z.attributes.position;if(Le===null){if(Ve===void 0||Ve.count===0)return}else if(Le.count===0)return;let Ne=1;q.wireframe===!0&&(Le=k.getWireframeAttribute(Z),Ne=2),w.setup(se,q,Fe,Z,Le);let Ue,et=fe;Le!==null&&(Ue=F.get(Le),et=pe,et.setIndex(Ue));const Jn=Le!==null?Le.count:Ve.count,mi=Z.drawRange.start*Ne,ke=Z.drawRange.count*Ne,$t=Ce!==null?Ce.start*Ne:0,rt=Ce!==null?Ce.count*Ne:1/0,Kt=Math.max(mi,$t),is=Math.min(Jn,mi+ke,$t+rt)-1,Qt=Math.max(0,is-Kt+1);if(Qt!==0){if(se.isMesh)q.wireframe===!0?(ye.setLineWidth(q.wireframeLinewidth*Pe()),et.setMode(1)):et.setMode(4);else if(se.isLine){let hn=q.linewidth;hn===void 0&&(hn=1),ye.setLineWidth(hn*Pe()),se.isLineSegments?et.setMode(1):se.isLineLoop?et.setMode(2):et.setMode(3)}else se.isPoints?et.setMode(0):se.isSprite&&et.setMode(4);if(se.isInstancedMesh)et.renderInstances(Kt,Qt,se.count);else if(Z.isInstancedBufferGeometry){const hn=Math.min(Z.instanceCount,Z._maxInstanceCount);et.renderInstances(Kt,Qt,hn)}else et.render(Kt,Qt)}},this.compile=function(S,G){f=_.get(S),f.init(),g.push(f),S.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(f.pushLight(Z),Z.castShadow&&f.pushShadow(Z))}),f.setupLights(x.physicallyCorrectLights),S.traverse(function(Z){const q=Z.material;if(q)if(Array.isArray(q))for(let se=0;se<q.length;se++){const Ce=q[se];Eo(Ce,S,Z)}else Eo(q,S,Z)}),g.pop(),f=null};let De=null;function Xe(S){De&&De(S)}function Zt(){Zn.stop()}function Jt(){Zn.start()}const Zn=new Qh;Zn.setAnimationLoop(Xe),typeof window!="undefined"&&Zn.setContext(window),this.setAnimationLoop=function(S){De=S,re.setAnimationLoop(S),S===null?Zn.stop():Zn.start()},re.addEventListener("sessionstart",Zt),re.addEventListener("sessionend",Jt),this.render=function(S,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,G,P),f=_.get(S,g.length),f.init(),g.push(f),me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),oe.setFromProjectionMatrix(me),K=this.localClippingEnabled,de=z.init(this.clippingPlanes,K,G),h=v.get(S,d.length),h.init(),d.push(h),Ul(S,G,0,x.sortObjects),h.finish(),x.sortObjects===!0&&h.sort(E,A),de===!0&&z.beginShadows();const Z=f.state.shadowsArray;if(H.render(Z,S,G),de===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(h,S),f.setupLights(x.physicallyCorrectLights),G.isArrayCamera){const q=G.cameras;for(let se=0,Ce=q.length;se<Ce;se++){const Re=q[se];Hl(h,S,Re,Re.viewport)}}else Hl(h,S,G);P!==null&&(y.updateMultisampleRenderTarget(P),y.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(x,S,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1),w.resetDefaultState(),M=-1,C=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function Ul(S,G,Z,q){if(S.visible===!1)return;if(S.layers.test(G.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(G);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||oe.intersectsSprite(S)){q&&he.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const Re=Y.update(S),Fe=S.material;Fe.visible&&h.push(S,Re,Fe,Z,he.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ie.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ie.render.frame),!S.frustumCulled||oe.intersectsObject(S))){q&&he.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const Re=Y.update(S),Fe=S.material;if(Array.isArray(Fe)){const Le=Re.groups;for(let Ve=0,Ne=Le.length;Ve<Ne;Ve++){const Ue=Le[Ve],et=Fe[Ue.materialIndex];et&&et.visible&&h.push(S,Re,et,Z,he.z,Ue)}}else Fe.visible&&h.push(S,Re,Fe,Z,he.z,null)}}const Ce=S.children;for(let Re=0,Fe=Ce.length;Re<Fe;Re++)Ul(Ce[Re],G,Z,q)}function Hl(S,G,Z,q){const se=S.opaque,Ce=S.transmissive,Re=S.transparent;f.setupLightsView(Z),Ce.length>0&&Vf(se,G,Z),q&&ye.viewport(N.copy(q)),se.length>0&&ns(se,G,Z),Ce.length>0&&ns(Ce,G,Z),Re.length>0&&ns(Re,G,Z)}function Vf(S,G,Z){if(Q===null){const Re=o===!0&&ve.isWebGL2===!0?vl:Ut;Q=new Re(1024,1024,{generateMipmaps:!0,type:L.convert(ci)!==null?ci:bn,minFilter:go,magFilter:nt,wrapS:Dt,wrapT:Dt,useRenderToTexture:Me.has("WEBGL_multisampled_render_to_texture")})}const q=x.getRenderTarget();x.setRenderTarget(Q),x.clear();const se=x.toneMapping;x.toneMapping=Hn,ns(S,G,Z),x.toneMapping=se,y.updateMultisampleRenderTarget(Q),y.updateRenderTargetMipmap(Q),x.setRenderTarget(q)}function ns(S,G,Z){const q=G.isScene===!0?G.overrideMaterial:null;for(let se=0,Ce=S.length;se<Ce;se++){const Re=S[se],Fe=Re.object,Le=Re.geometry,Ve=q===null?Re.material:q,Ne=Re.group;Fe.layers.test(Z.layers)&&kf(Fe,G,Z,Le,Ve,Ne)}}function kf(S,G,Z,q,se,Ce){S.onBeforeRender(x,G,Z,q,se,Ce),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),se.onBeforeRender(x,G,Z,q,S,Ce),se.transparent===!0&&se.side===di?(se.side=st,se.needsUpdate=!0,x.renderBufferDirect(Z,G,q,se,S,Ce),se.side=Vr,se.needsUpdate=!0,x.renderBufferDirect(Z,G,q,se,S,Ce),se.side=di):x.renderBufferDirect(Z,G,q,se,S,Ce),S.onAfterRender(x,G,Z,q,se,Ce)}function Eo(S,G,Z){G.isScene!==!0&&(G=_e);const q=J.get(S),se=f.state.lights,Ce=f.state.shadowsArray,Re=se.state.version,Fe=te.getParameters(S,se.state,Ce,G,Z),Le=te.getProgramCacheKey(Fe);let Ve=q.programs;q.environment=S.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(S.isMeshStandardMaterial?I:T).get(S.envMap||q.environment),Ve===void 0&&(S.addEventListener("dispose",Ae),Ve=new Map,q.programs=Ve);let Ne=Ve.get(Le);if(Ne!==void 0){if(q.currentProgram===Ne&&q.lightsStateVersion===Re)return Vl(S,Fe),Ne}else Fe.uniforms=te.getUniforms(S),S.onBuild(Z,Fe,x),S.onBeforeCompile(Fe,x),Ne=te.acquireProgram(Fe,Le),Ve.set(Le,Ne),q.uniforms=Fe.uniforms;const Ue=q.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ue.clippingPlanes=z.uniform),Vl(S,Fe),q.needsLights=qf(S),q.lightsStateVersion=Re,q.needsLights&&(Ue.ambientLightColor.value=se.state.ambient,Ue.lightProbe.value=se.state.probe,Ue.directionalLights.value=se.state.directional,Ue.directionalLightShadows.value=se.state.directionalShadow,Ue.spotLights.value=se.state.spot,Ue.spotLightShadows.value=se.state.spotShadow,Ue.rectAreaLights.value=se.state.rectArea,Ue.ltc_1.value=se.state.rectAreaLTC1,Ue.ltc_2.value=se.state.rectAreaLTC2,Ue.pointLights.value=se.state.point,Ue.pointLightShadows.value=se.state.pointShadow,Ue.hemisphereLights.value=se.state.hemi,Ue.directionalShadowMap.value=se.state.directionalShadowMap,Ue.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ue.spotShadowMap.value=se.state.spotShadowMap,Ue.spotShadowMatrix.value=se.state.spotShadowMatrix,Ue.pointShadowMap.value=se.state.pointShadowMap,Ue.pointShadowMatrix.value=se.state.pointShadowMatrix);const et=Ne.getUniforms(),Jn=kn.seqWithValue(et.seq,Ue);return q.currentProgram=Ne,q.uniformsList=Jn,Ne}function Vl(S,G){const Z=J.get(S);Z.outputEncoding=G.outputEncoding,Z.instancing=G.instancing,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Gf(S,G,Z,q,se){G.isScene!==!0&&(G=_e),y.resetTextureUnits();const Ce=G.fog,Re=q.isMeshStandardMaterial?G.environment:null,Fe=P===null?x.outputEncoding:P.texture.encoding,Le=(q.isMeshStandardMaterial?I:T).get(q.envMap||Re),Ve=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ne=!!q.normalMap&&!!Z.attributes.tangent,Ue=!!Z.morphAttributes.position,et=!!Z.morphAttributes.normal,Jn=Z.morphAttributes.position?Z.morphAttributes.position.length:0,mi=q.toneMapped?x.toneMapping:Hn,ke=J.get(q),$t=f.state.lights;if(de===!0&&(K===!0||S!==C)){const Vt=S===C&&q.id===M;z.setState(q,S,Vt)}let rt=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==$t.state.version||ke.outputEncoding!==Fe||se.isInstancedMesh&&ke.instancing===!1||!se.isInstancedMesh&&ke.instancing===!0||se.isSkinnedMesh&&ke.skinning===!1||!se.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Le||q.fog&&ke.fog!==Ce||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==z.numPlanes||ke.numIntersection!==z.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==Ne||ke.morphTargets!==Ue||ke.morphNormals!==et||ke.toneMapping!==mi||ve.isWebGL2===!0&&ke.morphTargetsCount!==Jn)&&(rt=!0):(rt=!0,ke.__version=q.version);let Kt=ke.currentProgram;rt===!0&&(Kt=Eo(q,G,se));let is=!1,Qt=!1,hn=!1;const pt=Kt.getUniforms(),mr=ke.uniforms;if(ye.useProgram(Kt.program)&&(is=!0,Qt=!0,hn=!0),q.id!==M&&(M=q.id,Qt=!0),is||C!==S){if(pt.setValue(ae,"projectionMatrix",S.projectionMatrix),ve.logarithmicDepthBuffer&&pt.setValue(ae,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),C!==S&&(C=S,Qt=!0,hn=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const Vt=pt.map.cameraPosition;Vt!==void 0&&Vt.setValue(ae,he.setFromMatrixPosition(S.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pt.setValue(ae,"isOrthographic",S.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||se.isSkinnedMesh)&&pt.setValue(ae,"viewMatrix",S.matrixWorldInverse)}if(se.isSkinnedMesh){pt.setOptional(ae,se,"bindMatrix"),pt.setOptional(ae,se,"bindMatrixInverse");const Vt=se.skeleton;Vt&&(ve.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),pt.setValue(ae,"boneTexture",Vt.boneTexture,y),pt.setValue(ae,"boneTextureSize",Vt.boneTextureSize)):pt.setOptional(ae,Vt,"boneMatrices"))}return!!Z&&(Z.morphAttributes.position!==void 0||Z.morphAttributes.normal!==void 0)&&W.update(se,Z,q,Kt),(Qt||ke.receiveShadow!==se.receiveShadow)&&(ke.receiveShadow=se.receiveShadow,pt.setValue(ae,"receiveShadow",se.receiveShadow)),Qt&&(pt.setValue(ae,"toneMappingExposure",x.toneMappingExposure),ke.needsLights&&Wf(mr,hn),Ce&&q.fog&&ee.refreshFogUniforms(mr,Ce),ee.refreshMaterialUniforms(mr,q,B,ie,Q),kn.upload(ae,ke.uniformsList,mr,y)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(kn.upload(ae,ke.uniformsList,mr,y),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pt.setValue(ae,"center",se.center),pt.setValue(ae,"modelViewMatrix",se.modelViewMatrix),pt.setValue(ae,"normalMatrix",se.normalMatrix),pt.setValue(ae,"modelMatrix",se.matrixWorld),Kt}function Wf(S,G){S.ambientLightColor.needsUpdate=G,S.lightProbe.needsUpdate=G,S.directionalLights.needsUpdate=G,S.directionalLightShadows.needsUpdate=G,S.pointLights.needsUpdate=G,S.pointLightShadows.needsUpdate=G,S.spotLights.needsUpdate=G,S.spotLightShadows.needsUpdate=G,S.rectAreaLights.needsUpdate=G,S.hemisphereLights.needsUpdate=G}function qf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,G,Z){J.get(S.texture).__webglTexture=G,J.get(S.depthTexture).__webglTexture=Z;const q=J.get(S);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Z===void 0,q.__autoAllocateDepthBuffer||S.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),S.useRenderToTexture=!1,S.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(S,G){const Z=J.get(S);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(S,G=0,Z=0){P=S,p=G,m=Z;let q=!0;if(S){const Le=J.get(S);Le.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),q=!1):Le.__webglFramebuffer===void 0?y.setupRenderTarget(S):Le.__hasExternalTextures&&y.rebindTextures(S,J.get(S.texture).__webglTexture,J.get(S.depthTexture).__webglTexture)}let se=null,Ce=!1,Re=!1;if(S){const Le=S.texture;(Le.isDataTexture3D||Le.isDataTexture2DArray)&&(Re=!0);const Ve=J.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(se=Ve[G],Ce=!0):S.useRenderbuffer?se=J.get(S).__webglMultisampledFramebuffer:se=Ve,N.copy(S.viewport),D.copy(S.scissor),$=S.scissorTest}else N.copy(V).multiplyScalar(B).floor(),D.copy(j).multiplyScalar(B).floor(),$=O;if(ye.bindFramebuffer(36160,se)&&ve.drawBuffers&&q){let Le=!1;if(S)if(S.isWebGLMultipleRenderTargets){const Ve=S.texture;if(U.length!==Ve.length||U[0]!==36064){for(let Ne=0,Ue=Ve.length;Ne<Ue;Ne++)U[Ne]=36064+Ne;U.length=Ve.length,Le=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,Le=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,Le=!0);Le&&(ve.isWebGL2?ae.drawBuffers(U):Me.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(ye.viewport(N),ye.scissor(D),ye.setScissorTest($),Ce){const Le=J.get(S.texture);ae.framebufferTexture2D(36160,36064,34069+G,Le.__webglTexture,Z)}else if(Re){const Le=J.get(S.texture),Ve=G||0;ae.framebufferTextureLayer(36160,36064,Le.__webglTexture,Z||0,Ve)}M=-1},this.readRenderTargetPixels=function(S,G,Z,q,se,Ce,Re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=J.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Fe=Fe[Re]),Fe){ye.bindFramebuffer(36160,Fe);try{const Le=S.texture,Ve=Le.format,Ne=Le.type;if(Ve!==lt&&L.convert(Ve)!==ae.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Ne===ci&&(Me.has("EXT_color_buffer_half_float")||ve.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ne!==bn&&L.convert(Ne)!==ae.getParameter(35738)&&!(Ne===Nn&&(ve.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ae.checkFramebufferStatus(36160)===36053?G>=0&&G<=S.width-q&&Z>=0&&Z<=S.height-se&&ae.readPixels(G,Z,q,se,L.convert(Ve),L.convert(Ne),Ce):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Le=P!==null?J.get(P).__webglFramebuffer:null;ye.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(S,G,Z=0){if(G.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const q=Math.pow(2,-Z),se=Math.floor(G.image.width*q),Ce=Math.floor(G.image.height*q);y.setTexture2D(G,0),ae.copyTexSubImage2D(3553,Z,0,0,S.x,S.y,se,Ce),ye.unbindTexture()},this.copyTextureToTexture=function(S,G,Z,q=0){const se=G.image.width,Ce=G.image.height,Re=L.convert(Z.format),Fe=L.convert(Z.type);y.setTexture2D(Z,0),ae.pixelStorei(37440,Z.flipY),ae.pixelStorei(37441,Z.premultiplyAlpha),ae.pixelStorei(3317,Z.unpackAlignment),G.isDataTexture?ae.texSubImage2D(3553,q,S.x,S.y,se,Ce,Re,Fe,G.image.data):G.isCompressedTexture?ae.compressedTexSubImage2D(3553,q,S.x,S.y,G.mipmaps[0].width,G.mipmaps[0].height,Re,G.mipmaps[0].data):ae.texSubImage2D(3553,q,S.x,S.y,Re,Fe,G.image),q===0&&Z.generateMipmaps&&ae.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,G,Z,q,se=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=S.max.x-S.min.x+1,Re=S.max.y-S.min.y+1,Fe=S.max.z-S.min.z+1,Le=L.convert(q.format),Ve=L.convert(q.type);let Ne;if(q.isDataTexture3D)y.setTexture3D(q,0),Ne=32879;else if(q.isDataTexture2DArray)y.setTexture2DArray(q,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ae.pixelStorei(37440,q.flipY),ae.pixelStorei(37441,q.premultiplyAlpha),ae.pixelStorei(3317,q.unpackAlignment);const Ue=ae.getParameter(3314),et=ae.getParameter(32878),Jn=ae.getParameter(3316),mi=ae.getParameter(3315),ke=ae.getParameter(32877),$t=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;ae.pixelStorei(3314,$t.width),ae.pixelStorei(32878,$t.height),ae.pixelStorei(3316,S.min.x),ae.pixelStorei(3315,S.min.y),ae.pixelStorei(32877,S.min.z),Z.isDataTexture||Z.isDataTexture3D?ae.texSubImage3D(Ne,se,G.x,G.y,G.z,Ce,Re,Fe,Le,Ve,$t.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ae.compressedTexSubImage3D(Ne,se,G.x,G.y,G.z,Ce,Re,Fe,Le,$t.data)):ae.texSubImage3D(Ne,se,G.x,G.y,G.z,Ce,Re,Fe,Le,Ve,$t),ae.pixelStorei(3314,Ue),ae.pixelStorei(32878,et),ae.pixelStorei(3316,Jn),ae.pixelStorei(3315,mi),ae.pixelStorei(32877,ke),se===0&&q.generateMipmaps&&ae.generateMipmap(Ne),ye.unbindTexture()},this.initTexture=function(S){y.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){p=0,m=0,P=null,ye.reset(),w.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}je.prototype.isWebGLRenderer=!0;class Gy extends je{}Gy.prototype.isWebGL1Renderer=!0;class Al extends qe{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Al.prototype.isScene=!0;class $r{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}$r.prototype.isInterleavedBuffer=!0;const tt=new R;class qr{constructor(e,t,n,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.x=this.getX(t),tt.y=this.getY(t),tt.z=this.getZ(t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new qr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}qr.prototype.isInterleavedBufferAttribute=!0;class gf extends Mt{constructor(e){super(),this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}gf.prototype.isSpriteMaterial=!0;let Di;const br=new R,Fi=new R,Ni=new R,Bi=new le,Mr=new le,xf=new Ee,Ls=new R,wr=new R,Rs=new R,gu=new le,ha=new le,xu=new le;class Wy extends qe{constructor(e){if(super(),this.type="Sprite",Di===void 0){Di=new Ke;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $r(t,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new qr(n,3,0,!1)),Di.setAttribute("uv",new qr(n,2,3,!1))}this.geometry=Di,this.material=e!==void 0?e:new gf,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),xf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Ni.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Ps(Ls.set(-.5,-.5,0),Ni,o,Fi,r,s),Ps(wr.set(.5,-.5,0),Ni,o,Fi,r,s),Ps(Rs.set(.5,.5,0),Ni,o,Fi,r,s),gu.set(0,0),ha.set(1,0),xu.set(1,1);let a=e.ray.intersectTriangle(Ls,wr,Rs,!1,br);if(a===null&&(Ps(wr.set(-.5,.5,0),Ni,o,Fi,r,s),ha.set(0,1),a=e.ray.intersectTriangle(Ls,Rs,wr,!1,br),a===null))return;const l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:it.getUV(br,Ls,wr,Rs,gu,ha,xu,new le),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Wy.prototype.isSprite=!0;function Ps(i,e,t,n,r,s){Bi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Mr.x=s*Bi.x-r*Bi.y,Mr.y=r*Bi.x+s*Bi.y):Mr.copy(Bi),i.copy(e),i.x+=Mr.x,i.y+=Mr.y,i.applyMatrix4(xf)}const _u=new R,vu=new Ye,yu=new Ye,qy=new R,bu=new Ee;class _f extends xt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ee,this.bindMatrixInverse=new Ee}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;vu.fromBufferAttribute(r.attributes.skinIndex,e),yu.fromBufferAttribute(r.attributes.skinWeight,e),_u.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=yu.getComponent(s);if(o!==0){const a=vu.getComponent(s);bu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(qy.copy(_u).applyMatrix4(bu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}_f.prototype.isSkinnedMesh=!0;class jy extends qe{constructor(){super(),this.type="Bone"}}jy.prototype.isBone=!0;class Xy extends ut{constructor(e=null,t=1,n=1,r,s,o,a,l,c=nt,u=nt,h,f){super(null,o,a,l,c,u,r,s,h,f),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Xy.prototype.isDataTexture=!0;class ka extends ot{constructor(e,t,n,r=1){typeof n=="number"&&(r=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}ka.prototype.isInstancedBufferAttribute=!0;const Mu=new Ee,wu=new Ee,Is=[],Sr=new xt;class Yy extends xt{constructor(e,t,n){super(e,t),this.instanceMatrix=new ka(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Mu),wu.multiplyMatrices(n,Mu),Sr.matrixWorld=wu,Sr.raycast(e,Is);for(let o=0,a=Is.length;o<a;o++){const l=Is[o];l.instanceId=s,l.object=this,t.push(l)}Is.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Yy.prototype.isInstancedMesh=!0;class Kr extends Mt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Kr.prototype.isLineBasicMaterial=!0;const Su=new R,Tu=new R,Eu=new Ee,fa=new lr,Ds=new ar;class Cl extends qe{constructor(e=new Ke,t=new Kr){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Su.fromBufferAttribute(t,r-1),Tu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Su.distanceTo(Tu);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;Eu.copy(r).invert(),fa.copy(e.ray).applyMatrix4(Eu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,u=new R,h=new R,f=new R,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,b=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),m=Math.min(g.count,o.start+o.count);for(let P=p,M=m-1;P<M;P+=d){const C=g.getX(P),N=g.getX(P+1);if(c.fromBufferAttribute(b,C),u.fromBufferAttribute(b,N),fa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const $=e.ray.origin.distanceTo(f);$<e.near||$>e.far||t.push({distance:$,point:h.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),m=Math.min(b.count,o.start+o.count);for(let P=p,M=m-1;P<M;P+=d){if(c.fromBufferAttribute(b,P),u.fromBufferAttribute(b,P+1),fa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Cl.prototype.isLine=!0;const Au=new R,Cu=new R;class Ll extends Cl{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Au.fromBufferAttribute(t,r),Cu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Au.distanceTo(Cu);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Ll.prototype.isLineSegments=!0;class Zy extends Cl{constructor(e,t){super(e,t),this.type="LineLoop"}}Zy.prototype.isLineLoop=!0;class vf extends Mt{constructor(e){super(),this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}vf.prototype.isPointsMaterial=!0;const Lu=new Ee,Ga=new lr,Fs=new ar,Ns=new R;class Jy extends qe{constructor(e=new Ke,t=new vf){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),Fs.radius+=s,e.ray.intersectsSphere(Fs)===!1)return;Lu.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(Lu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const b=c.getX(g);Ns.fromBufferAttribute(h,b),Ru(Ns,b,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Ns.fromBufferAttribute(h,g),Ru(Ns,g,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Jy.prototype.isPoints=!0;function Ru(i,e,t,n,r,s,o){const a=Ga.distanceSqToPoint(i);if(a<t){const l=new R;Ga.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class $y extends ut{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.format=a!==void 0?a:ui,this.minFilter=o!==void 0?o:Tt,this.magFilter=s!==void 0?s:Tt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}$y.prototype.isVideoTexture=!0;class Ky extends ut{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=nt,this.minFilter=nt,this.generateMipmaps=!1,this.needsUpdate=!0}}Ky.prototype.isFramebufferTexture=!0;class Qy extends ut{constructor(e,t,n,r,s,o,a,l,c,u,h,f){super(null,o,a,l,c,u,r,s,h,f),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Qy.prototype.isCompressedTexture=!0;class eb extends ut{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.needsUpdate=!0}}eb.prototype.isCanvasTexture=!0;new R;new R;new R;new it;class Ht{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new le:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,r=[],s=[],o=[],a=new R,l=new Ee;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Lt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(Lt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wo extends Ht{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new le,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}wo.prototype.isEllipseCurve=!0;class yf extends wo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.type="ArcCurve"}}yf.prototype.isArcCurve=!0;function Rl(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Bs=new R,da=new Rl,pa=new Rl,ma=new Rl;class bf extends Ht{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Bs.subVectors(r[0],r[1]).add(r[0]),c=Bs);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Bs.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Bs),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),b=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),b<1e-4&&(b=x),da.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,x,b),pa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,x,b),ma.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,x,b)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),pa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ma.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(da.calc(l),pa.calc(l),ma.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}bf.prototype.isCatmullRomCurve3=!0;function Pu(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function tb(i,e){const t=1-i;return t*t*e}function nb(i,e){return 2*(1-i)*i*e}function ib(i,e){return i*i*e}function Br(i,e,t,n){return tb(i,e)+nb(i,t)+ib(i,n)}function rb(i,e){const t=1-i;return t*t*t*e}function sb(i,e){const t=1-i;return 3*t*t*i*e}function ob(i,e){return 3*(1-i)*i*i*e}function ab(i,e){return i*i*i*e}function Or(i,e,t,n,r){return rb(i,e)+sb(i,t)+ob(i,n)+ab(i,r)}class Pl extends Ht{constructor(e=new le,t=new le,n=new le,r=new le){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,r.x,s.x,o.x,a.x),Or(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Pl.prototype.isCubicBezierCurve=!0;class Mf extends Ht{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,r.x,s.x,o.x,a.x),Or(e,r.y,s.y,o.y,a.y),Or(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Mf.prototype.isCubicBezierCurve3=!0;class So extends Ht{constructor(e=new le,t=new le){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new le;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}So.prototype.isLineCurve=!0;class lb extends Ht{constructor(e=new R,t=new R){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Il extends Ht{constructor(e=new le,t=new le,n=new le){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Br(e,r.x,s.x,o.x),Br(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Il.prototype.isQuadraticBezierCurve=!0;class wf extends Ht{constructor(e=new R,t=new R,n=new R){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Br(e,r.x,s.x,o.x),Br(e,r.y,s.y,o.y),Br(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}wf.prototype.isQuadraticBezierCurve3=!0;class Dl extends Ht{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Pu(a,l.x,c.x,u.x,h.x),Pu(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}Dl.prototype.isSplineCurve=!0;var Sf=Object.freeze({__proto__:null,ArcCurve:yf,CatmullRomCurve3:bf,CubicBezierCurve:Pl,CubicBezierCurve3:Mf,EllipseCurve:wo,LineCurve:So,LineCurve3:lb,QuadraticBezierCurve:Il,QuadraticBezierCurve3:wf,SplineCurve:Dl});class cb extends Ht{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new So(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Sf[r.type]().fromJSON(r))}return this}}class Wa extends cb{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new So(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Il(this.currentPoint.clone(),new le(e,t),new le(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Pl(this.currentPoint.clone(),new le(e,t),new le(n,r),new le(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Dl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new wo(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qr extends Wa{constructor(e){super(e),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Wa().fromJSON(r))}return this}}const ub={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Tf(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,d;if(n&&(s=mb(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<r;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-a,u-l),d=d!==0?1/d:0}return jr(s,o,t,a,l,d),o}};function Tf(i,e,t,n,r){let s,o;if(r===Eb(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Iu(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Iu(s,i[s],i[s+1],o);return o&&To(o,o.next)&&(Yr(o),o=o.next),o}function qn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(To(t,t.next)||Qe(t.prev,t,t.next)===0)){if(Yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jr(i,e,t,n,r,s,o){if(!i)return;!o&&s&&yb(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?fb(i,n,r,s):hb(i)){e.push(l.i/t),e.push(i.i/t),e.push(c.i/t),Yr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=db(qn(i),e,t),jr(i,e,t,n,r,s,2)):o===2&&pb(i,e,t,n,r,s):jr(qn(i),e,t,n,r,s,1);break}}}function hb(i){const e=i.prev,t=i,n=i.next;if(Qe(e,t,n)>=0)return!1;let r=i.next.next;for(;r!==i.prev;){if(Gi(e.x,e.y,t.x,t.y,n.x,n.y,r.x,r.y)&&Qe(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function fb(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Qe(r,s,o)>=0)return!1;const a=r.x<s.x?r.x<o.x?r.x:o.x:s.x<o.x?s.x:o.x,l=r.y<s.y?r.y<o.y?r.y:o.y:s.y<o.y?s.y:o.y,c=r.x>s.x?r.x>o.x?r.x:o.x:s.x>o.x?s.x:o.x,u=r.y>s.y?r.y>o.y?r.y:o.y:s.y>o.y?s.y:o.y,h=qa(a,l,e,t,n),f=qa(c,u,e,t,n);let d=i.prevZ,g=i.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==i.prev&&d!==i.next&&Gi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Qe(d.prev,d,d.next)>=0||(d=d.prevZ,g!==i.prev&&g!==i.next&&Gi(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Qe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==i.prev&&d!==i.next&&Gi(r.x,r.y,s.x,s.y,o.x,o.y,d.x,d.y)&&Qe(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==i.prev&&g!==i.next&&Gi(r.x,r.y,s.x,s.y,o.x,o.y,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function db(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!To(r,s)&&Ef(r,n,n.next,s)&&Xr(r,s)&&Xr(s,r)&&(e.push(r.i/t),e.push(n.i/t),e.push(s.i/t),Yr(n),Yr(n.next),n=i=s),n=n.next}while(n!==i);return qn(n)}function pb(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wb(o,a)){let l=Af(o,a);o=qn(o,o.next),l=qn(l,l.next),jr(o,e,t,n,r,s),jr(l,e,t,n,r,s);return}a=a.next}o=o.next}while(o!==i)}function mb(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Tf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Mb(c));for(r.sort(gb),s=0;s<r.length;s++)xb(r[s],t),t=qn(t,t.next);return t}function gb(i,e){return i.x-e.x}function xb(i,e){if(e=_b(i,e),e){const t=Af(e,i);qn(e,e.next),qn(t,t.next)}}function _b(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(r===t.y)return t;if(r===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let u=1/0,h;t=o;do n>=t.x&&t.x>=l&&n!==t.x&&Gi(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)&&(h=Math.abs(r-t.y)/(n-t.x),Xr(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&vb(o,t)))&&(o=t,u=h)),t=t.next;while(t!==a);return o}function vb(i,e){return Qe(i.prev,i,e.prev)<0&&Qe(e.next,i,i.next)<0}function yb(i,e,t,n){let r=i;do r.z===null&&(r.z=qa(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,bb(r)}function bb(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function qa(i,e,t,n,r){return i=32767*(i-t)*r,e=32767*(e-n)*r,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Mb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gi(i,e,t,n,r,s,o,a){return(r-o)*(e-a)-(i-o)*(s-a)>=0&&(i-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(s-a)-(r-o)*(n-a)>=0}function wb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sb(i,e)&&(Xr(i,e)&&Xr(e,i)&&Tb(i,e)&&(Qe(i.prev,i,e.prev)||Qe(i,e.prev,e))||To(i,e)&&Qe(i.prev,i,i.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function To(i,e){return i.x===e.x&&i.y===e.y}function Ef(i,e,t,n){const r=zs(Qe(i,e,t)),s=zs(Qe(i,e,n)),o=zs(Qe(t,n,i)),a=zs(Qe(t,n,e));return!!(r!==s&&o!==a||r===0&&Os(i,t,e)||s===0&&Os(i,n,e)||o===0&&Os(t,i,n)||a===0&&Os(t,e,n))}function Os(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zs(i){return i>0?1:i<0?-1:0}function Sb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ef(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xr(i,e){return Qe(i.prev,i,i.next)<0?Qe(i,e,i.next)>=0&&Qe(i,i.prev,e)>=0:Qe(i,e,i.prev)<0||Qe(i,i.next,e)<0}function Tb(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Af(i,e){const t=new ja(i.i,i.x,i.y),n=new ja(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Iu(i,e,t,n){const r=new ja(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ja(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Eb(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Gn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Gn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Du(e),Fu(n,e);let o=e.length;t.forEach(Du);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Fu(n,t[l]);const a=ub.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Du(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class fr extends Ke{constructor(e=new Qr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ct(r,3)),this.setAttribute("uv",new ct(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:Ab;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let P,M=!1,C,N,D,$;p&&(P=p.getSpacedPoints(u),M=!0,f=!1,C=p.computeFrenetFrames(u,!1),N=new R,D=new R,$=new R),f||(b=0,d=0,g=0,x=0);const ce=a.extractPoints(c);let ie=ce.shape;const B=ce.holes;if(!Gn.isClockWise(ie)){ie=ie.reverse();for(let J=0,y=B.length;J<y;J++){const T=B[J];Gn.isClockWise(T)&&(B[J]=T.reverse())}}const A=Gn.triangulateShape(ie,B),V=ie;for(let J=0,y=B.length;J<y;J++){const T=B[J];ie=ie.concat(T)}function j(J,y,T){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),y.clone().multiplyScalar(T).add(J)}const O=ie.length,U=A.length;function oe(J,y,T){let I,F,k;const Y=J.x-y.x,te=J.y-y.y,ee=T.x-J.x,v=T.y-J.y,_=Y*Y+te*te,z=Y*v-te*ee;if(Math.abs(z)>Number.EPSILON){const H=Math.sqrt(_),X=Math.sqrt(ee*ee+v*v),W=y.x-te/H,fe=y.y+Y/H,pe=T.x-v/X,L=T.y+ee/X,w=((pe-W)*v-(L-fe)*ee)/(Y*v-te*ee);I=W+Y*w-J.x,F=fe+te*w-J.y;const ne=I*I+F*F;if(ne<=2)return new le(I,F);k=Math.sqrt(ne/2)}else{let H=!1;Y>Number.EPSILON?ee>Number.EPSILON&&(H=!0):Y<-Number.EPSILON?ee<-Number.EPSILON&&(H=!0):Math.sign(te)===Math.sign(v)&&(H=!0),H?(I=-te,F=Y,k=Math.sqrt(_)):(I=Y,F=te,k=Math.sqrt(_/2))}return new le(I/k,F/k)}const de=[];for(let J=0,y=V.length,T=y-1,I=J+1;J<y;J++,T++,I++)T===y&&(T=0),I===y&&(I=0),de[J]=oe(V[J],V[T],V[I]);const K=[];let Q,me=de.concat();for(let J=0,y=B.length;J<y;J++){const T=B[J];Q=[];for(let I=0,F=T.length,k=F-1,Y=I+1;I<F;I++,k++,Y++)k===F&&(k=0),Y===F&&(Y=0),Q[I]=oe(T[I],T[k],T[Y]);K.push(Q),me=me.concat(Q)}for(let J=0;J<b;J++){const y=J/b,T=d*Math.cos(y*Math.PI/2),I=g*Math.sin(y*Math.PI/2)+x;for(let F=0,k=V.length;F<k;F++){const Y=j(V[F],de[F],I);Te(Y.x,Y.y,-T)}for(let F=0,k=B.length;F<k;F++){const Y=B[F];Q=K[F];for(let te=0,ee=Y.length;te<ee;te++){const v=j(Y[te],Q[te],I);Te(v.x,v.y,-T)}}}const he=g+x;for(let J=0;J<O;J++){const y=f?j(ie[J],me[J],he):ie[J];M?(D.copy(C.normals[0]).multiplyScalar(y.x),N.copy(C.binormals[0]).multiplyScalar(y.y),$.copy(P[0]).add(D).add(N),Te($.x,$.y,$.z)):Te(y.x,y.y,0)}for(let J=1;J<=u;J++)for(let y=0;y<O;y++){const T=f?j(ie[y],me[y],he):ie[y];M?(D.copy(C.normals[J]).multiplyScalar(T.x),N.copy(C.binormals[J]).multiplyScalar(T.y),$.copy(P[J]).add(D).add(N),Te($.x,$.y,$.z)):Te(T.x,T.y,h/u*J)}for(let J=b-1;J>=0;J--){const y=J/b,T=d*Math.cos(y*Math.PI/2),I=g*Math.sin(y*Math.PI/2)+x;for(let F=0,k=V.length;F<k;F++){const Y=j(V[F],de[F],I);Te(Y.x,Y.y,h+T)}for(let F=0,k=B.length;F<k;F++){const Y=B[F];Q=K[F];for(let te=0,ee=Y.length;te<ee;te++){const v=j(Y[te],Q[te],I);M?Te(v.x,v.y+P[u-1].y,P[u-1].x+T):Te(v.x,v.y,h+T)}}}_e(),Pe();function _e(){const J=r.length/3;if(f){let y=0,T=O*y;for(let I=0;I<U;I++){const F=A[I];Me(F[2]+T,F[1]+T,F[0]+T)}y=u+b*2,T=O*y;for(let I=0;I<U;I++){const F=A[I];Me(F[0]+T,F[1]+T,F[2]+T)}}else{for(let y=0;y<U;y++){const T=A[y];Me(T[2],T[1],T[0])}for(let y=0;y<U;y++){const T=A[y];Me(T[0]+O*u,T[1]+O*u,T[2]+O*u)}}n.addGroup(J,r.length/3-J,0)}function Pe(){const J=r.length/3;let y=0;ae(V,y),y+=V.length;for(let T=0,I=B.length;T<I;T++){const F=B[T];ae(F,y),y+=F.length}n.addGroup(J,r.length/3-J,1)}function ae(J,y){let T=J.length;for(;--T>=0;){const I=T;let F=T-1;F<0&&(F=J.length-1);for(let k=0,Y=u+b*2;k<Y;k++){const te=O*k,ee=O*(k+1),v=y+I+te,_=y+F+te,z=y+F+ee,H=y+I+ee;ve(v,_,z,H)}}}function Te(J,y,T){l.push(J),l.push(y),l.push(T)}function Me(J,y,T){ye(J),ye(y),ye(T);const I=r.length/3,F=m.generateTopUV(n,r,I-3,I-2,I-1);Ie(F[0]),Ie(F[1]),Ie(F[2])}function ve(J,y,T,I){ye(J),ye(y),ye(I),ye(y),ye(T),ye(I);const F=r.length/3,k=m.generateSideWallUV(n,r,F-6,F-3,F-2,F-1);Ie(k[0]),Ie(k[1]),Ie(k[3]),Ie(k[1]),Ie(k[2]),Ie(k[3])}function ye(J){r.push(l[J*3+0]),r.push(l[J*3+1]),r.push(l[J*3+2])}function Ie(J){s.push(J.x),s.push(J.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cb(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Sf[r.type]().fromJSON(r)),new fr(n,e.options)}}const Ab={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new le(s,o),new le(a,l),new le(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],x=e[s*3],b=e[s*3+1],p=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-h),new le(f,1-g),new le(x,1-p)]:[new le(a,1-l),new le(u,1-h),new le(d,1-g),new le(b,1-p)]}};function Cb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fl extends Ke{constructor(e=new Qr([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(s,3)),this.setAttribute("uv",new ct(o,2));function c(u){const h=r.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;Gn.isClockWise(d)===!1&&(d=d.reverse());for(let b=0,p=g.length;b<p;b++){const m=g[b];Gn.isClockWise(m)===!0&&(g[b]=m.reverse())}const x=Gn.triangulateShape(d,g);for(let b=0,p=g.length;b<p;b++){const m=g[b];d=d.concat(m)}for(let b=0,p=d.length;b<p;b++){const m=d[b];r.push(m.x,m.y,0),s.push(0,0,1),o.push(m.x,m.y)}for(let b=0,p=x.length;b<p;b++){const m=x[b],P=m[0]+h,M=m[1]+h,C=m[2]+h;n.push(P,M,C),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Lb(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];n.push(o)}return new Fl(n,e.curveSegments)}}function Lb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Rb extends Mt{constructor(e){super(),this.type="ShadowMaterial",this.color=new Se(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Rb.prototype.isShadowMaterial=!0;class Cf extends Mt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Cf.prototype.isMeshStandardMaterial=!0;class Pb extends Cf{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Pb.prototype.isMeshPhysicalMaterial=!0;class Lf extends Mt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Lf.prototype.isMeshPhongMaterial=!0;class Ib extends Mt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ib.prototype.isMeshToonMaterial=!0;class Db extends Mt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Db.prototype.isMeshNormalMaterial=!0;class Rf extends Mt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Rf.prototype.isMeshLambertMaterial=!0;class Fb extends Mt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Fb.prototype.isMeshMatcapMaterial=!0;class Nb extends Kr{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Nb.prototype.isLineDashedMaterial=!0;const $e={arraySlice:function(i,e,t){return $e.isTypedArray(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)},convertArray:function(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)},isTypedArray:function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},getKeyframeOrder:function(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n},sortedArray:function(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r},flattenJSON:function(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)},subclip:function(i,e,t,n,r=30){const s=i.clone();s.name=e;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*r;if(!(g<t||g>=n)){h.push(c.times[d]);for(let x=0;x<u;++x)f.push(c.values[d*u+x])}}h.length!==0&&(c.times=$e.convertArray(h,c.times.constructor),c.values=$e.convertArray(f,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let o=0;o<r;++o){const a=t.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=a.times.length-1;let x;if(s<=a.times[0]){const p=u,m=h-u;x=$e.arraySlice(a.values,p,m)}else if(s>=a.times[g]){const p=g*h+u,m=p+h-u;x=$e.arraySlice(a.values,p,m)}else{const p=a.createInterpolant(),m=u,P=h-u;p.evaluate(s),x=$e.arraySlice(p.resultBuffer,m,P)}l==="quaternion"&&new _t().fromArray(x).normalize().conjugate().toArray(x);const b=c.times.length;for(let p=0;p<b;++p){const m=p*d+f;if(l==="quaternion")_t.multiplyQuaternionsFlat(c.values,m,x,0,c.values,m);else{const P=d-f*2;for(let M=0;M<P;++M)c.values[m+M]-=x[M]}}}return i.blendMode=jh,i}};class jn{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}jn.prototype.beforeStart_=jn.prototype.copySampleValue_;jn.prototype.afterEnd_=jn.prototype.copySampleValue_;class Bb extends jn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vi,endingEnd:Vi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ki:s=e,a=2*t-n;break;case Qs:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ki:o=e,l=2*n-t;break;case Qs:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,b=x*g,p=-f*b+2*f*x-f*g,m=(1+f)*b+(-1.5-2*f)*x+(-.5+f)*g+1,P=(-1-d)*b+(1.5+d)*x+.5*g,M=d*b-d*x;for(let C=0;C!==a;++C)s[C]=p*o[u+C]+m*o[c+C]+P*o[l+C]+M*o[h+C];return s}}class Pf extends jn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class Ob extends jn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class un{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$e.convertArray(t,this.TimeBufferType),this.values=$e.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$e.convertArray(e.times,Array),values:$e.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ob(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $s:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=$e.arraySlice(n,s,o),this.values=$e.arraySlice(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&$e.isTypedArray(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=$e.arraySlice(this.times),t=$e.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===No,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=$e.arraySlice(e,0,o),this.values=$e.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=$e.arraySlice(this.times,0),t=$e.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Ks;class dr extends un{}dr.prototype.ValueTypeName="bool";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=$s;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class If extends un{}If.prototype.ValueTypeName="color";class no extends un{}no.prototype.ValueTypeName="number";class zb extends jn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)_t.slerpFlat(s,0,o,c-a,o,c,l);return s}}class es extends un{InterpolantFactoryMethodLinear(e){return new zb(this.times,this.values,this.getValueSize(),e)}}es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=Ks;es.prototype.InterpolantFactoryMethodSmooth=void 0;class pr extends un{}pr.prototype.ValueTypeName="string";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=$s;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class io extends un{}io.prototype.ValueTypeName="vector";class Nu{constructor(e,t=-1,n,r=_l){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Hb(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(un.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=$e.getKeyframeOrder(l);l=$e.sortedArray(l,1,u),c=$e.sortedArray(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new no(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,x){if(d.length!==0){const b=[],p=[];$e.flattenJSON(d,b,p,g),b.length!==0&&x.push(new h(f,b,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const b=[],p=[];for(let m=0;m!==f[g].morphTargets.length;++m){const P=f[g];b.push(P.time),p.push(P.morphTarget===x?1:0)}r.push(new no(".morphTargetInfluence["+x+"]",b,p))}l=d.length*(o||1)}else{const d=".bones["+t[h].name+"]";n(io,d+".position",f,"pos",r),n(es,d+".quaternion",f,"rot",r),n(io,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ub(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return no;case"vector":case"vector2":case"vector3":case"vector4":return io;case"color":return If;case"quaternion":return es;case"bool":case"boolean":return dr;case"string":return pr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Hb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ub(i.type);if(i.times===void 0){const t=[],n=[];$e.flattenJSON(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const er={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vb{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const kb=new Vb;class Yn{constructor(e){this.manager=e!==void 0?e:kb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const xn={};class Gb extends Yn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=er.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:r});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(o).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||a.body.getReader===void 0)return a;const l=xn[e],c=a.body.getReader(),u=a.headers.get("Content-Length"),h=u?parseInt(u):0,f=h!==0;let d=0;const g=new ReadableStream({start(x){b();function b(){c.read().then(({done:p,value:m})=>{if(p)x.close();else{d+=m.byteLength;const P=new ProgressEvent("progress",{lengthComputable:f,loaded:d,total:h});for(let M=0,C=l.length;M<C;M++){const N=l[M];N.onProgress&&N.onProgress(P)}x.enqueue(m),b()}})}}});return new Response(g)}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{switch(this.responseType){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return a.json();default:return a.text()}}).then(a=>{er.add(e,a);const l=xn[e];delete xn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onLoad&&h.onLoad(a)}}).catch(a=>{const l=xn[e];if(l===void 0)throw this.manager.itemError(e),a;delete xn[e];for(let c=0,u=l.length;c<u;c++){const h=l[c];h.onError&&h.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Df extends Yn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=er.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=xo("img");function l(){u(),er.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Wb extends Yn{constructor(e){super(e)}load(e,t,n,r){const s=new _o,o=new Df(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class Ff extends Yn{constructor(e){super(e)}load(e,t,n,r){const s=new ut,o=new Df(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class cn extends qe{constructor(e,t=1){super(),this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}cn.prototype.isLight=!0;class qb extends cn{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.groundColor=new Se(t)}copy(e){return cn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}qb.prototype.isHemisphereLight=!0;const Bu=new Ee,Ou=new R,zu=new R;class Nl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ou),zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zu),t.updateMatrixWorld(),Bu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nf extends Nl{constructor(){super(new St(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Ua*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Nf.prototype.isSpotLightShadow=!0;class jb extends cn{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new Nf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}jb.prototype.isSpotLight=!0;const Uu=new Ee,Tr=new R,ga=new R;class Bf extends Nl{constructor(){super(new St(90,1,.5,500)),this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),ga.copy(n.position),ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ga),n.updateMatrixWorld(),r.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uu)}}Bf.prototype.isPointLightShadow=!0;class Xb extends cn{constructor(e,t,n=0,r=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Bf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Xb.prototype.isPointLight=!0;class Of extends Nl{constructor(){super(new wl(-5,5,5,-5,.5,500))}}Of.prototype.isDirectionalLightShadow=!0;class Yb extends cn{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.shadow=new Of}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Yb.prototype.isDirectionalLight=!0;class zf extends cn{constructor(e,t){super(e,t),this.type="AmbientLight"}}zf.prototype.isAmbientLight=!0;class Zb extends cn{constructor(e,t,n=10,r=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Zb.prototype.isRectAreaLight=!0;class Uf{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*r),t.addScaledVector(o[2],.488603*s),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*r)),t.addScaledVector(o[5],1.092548*(r*s)),t.addScaledVector(o[6],.315392*(3*s*s-1)),t.addScaledVector(o[7],1.092548*(n*s)),t.addScaledVector(o[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*r),t.addScaledVector(o[2],2*.511664*s),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*r),t.addScaledVector(o[5],2*.429043*r*s),t.addScaledVector(o[6],.743125*s*s-.247708),t.addScaledVector(o[7],2*.429043*n*s),t.addScaledVector(o[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}Uf.prototype.isSphericalHarmonics3=!0;class Bl extends cn{constructor(e=new Uf,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Bl.prototype.isLightProbe=!0;class Jb{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $b extends Ke{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}$b.prototype.isInstancedBufferGeometry=!0;class Kb extends Yn{constructor(e){super(e),typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=er.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){er.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Kb.prototype.isImageBitmapLoader=!0;let Us;const Qb={getContext:function(){return Us===void 0&&(Us=new(window.AudioContext||window.webkitAudioContext)),Us},setContext:function(i){Us=i}};class eM extends Yn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Gb(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const l=a.slice(0);Qb.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}}class tM extends Bl{constructor(e,t,n=1){super(void 0,n);const r=new Se().set(e),s=new Se().set(t),o=new R(r.r,r.g,r.b),a=new R(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}tM.prototype.isHemisphereLightProbe=!0;class nM extends Bl{constructor(e,t=1){super(void 0,t);const n=new Se().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}nM.prototype.isAmbientLightProbe=!0;class iM extends qe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class rM{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){_t.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;_t.multiplyQuaternionsFlat(e,o,e,t,e,n),_t.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const Ol="\\[\\]\\.:\\/",sM=new RegExp("["+Ol+"]","g"),zl="[^"+Ol+"]",oM="[^"+Ol.replace("\\.","")+"]",aM=/((?:WC+[\/:])*)/.source.replace("WC",zl),lM=/(WCOD+)?/.source.replace("WCOD",oM),cM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),uM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),hM=new RegExp("^"+aM+lM+cM+uM+"$"),fM=["material","materials","bones"];class dM{constructor(e,t,n){const r=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ge{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sM,"")}static parseTrackName(e){const t=hM.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);fM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=dM;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class pM{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Vi,endingEnd:Vi};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Kg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case jh:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case _l:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===Qg;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===$g){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=ki,r.endingEnd=ki):(e?r.endingStart=this.zeroSlopeAtStart?ki:Vi:r.endingStart=Qs,t?r.endingEnd=this.zeroSlopeAtEnd?ki:Vi:r.endingEnd=Qs)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}class mM extends Xn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=r[h],d=f.name;let g=u[d];if(g!==void 0)o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new rM(Ge.create(n,d,x),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Pf(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Nu.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=_l),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new pM(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Nu.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}mM.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class gM extends $r{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}gM.prototype.isInstancedInterleavedBuffer=!0;class Hu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const In=new R,Hs=new Ee,xa=new Ee;class xM extends Ll{constructor(e){const t=Hf(e),n=new Ke,r=[],s=[],o=new Se(0,0,1),a=new Se(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new ct(r,3)),n.setAttribute("color",new ct(s,3));const l=new Kr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");xa.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<t.length;s++){const a=t[s];a.parent&&a.parent.isBone&&(Hs.multiplyMatrices(xa,a.matrixWorld),In.setFromMatrixPosition(Hs),r.setXYZ(o,In.x,In.y,In.z),Hs.multiplyMatrices(xa,a.parent.matrixWorld),In.setFromMatrixPosition(Hs),r.setXYZ(o+1,In.x,In.y,In.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Hf(i){const e=[];i&&i.isBone&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,Hf(i.children[t]));return e}class _M extends Ll{constructor(e=10,t=10,n=4473924,r=8947848){n=new Se(n),r=new Se(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=f===s?n:r;x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3,x.toArray(c,d),d+=3}const u=new Ke;u.setAttribute("position",new ct(l,3)),u.setAttribute("color",new ct(c,3));const h=new Kr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const vM=new Float32Array(1);new Int32Array(vM.buffer);Ht.create=function(i,e){return console.log("THREE.Curve.create() has been deprecated"),i.prototype=Object.create(Ht.prototype),i.prototype.constructor=i,i.prototype.getPoint=e,i};Wa.prototype.fromPoints=function(i){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(i)};_M.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};xM.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Yn.prototype.extractUrlBase=function(i){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Jb.extractUrlBase(i)};Yn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Yt.prototype.center=function(i){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(i)};Yt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Yt.prototype.isIntersectionBox=function(i){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};Yt.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};Yt.prototype.size=function(i){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(i)};ar.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};vo.prototype.setFromMatrix=function(i){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(i)};dt.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};dt.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};dt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};dt.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),i.applyMatrix3(this)};dt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};dt.prototype.getInverse=function(i){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};Ee.prototype.extractPosition=function(i){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(i)};Ee.prototype.flattenToArrayOffset=function(i,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(i,e)};Ee.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new R().setFromMatrixColumn(this,3)};Ee.prototype.setRotationFromQuaternion=function(i){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(i)};Ee.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Ee.prototype.multiplyVector3=function(i){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ee.prototype.multiplyVector4=function(i){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ee.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Ee.prototype.rotateAxis=function(i){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),i.transformDirection(this)};Ee.prototype.crossVector=function(i){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ee.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Ee.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Ee.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Ee.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Ee.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Ee.prototype.applyToBufferAttribute=function(i){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),i.applyMatrix4(this)};Ee.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Ee.prototype.makeFrustum=function(i,e,t,n,r,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(i,e,n,t,r,s)};Ee.prototype.getInverse=function(i){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(i).invert()};_n.prototype.isIntersectionLine=function(i){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(i)};_t.prototype.multiplyVector3=function(i){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),i.applyQuaternion(this)};_t.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};lr.prototype.isIntersectionBox=function(i){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(i)};lr.prototype.isIntersectionPlane=function(i){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(i)};lr.prototype.isIntersectionSphere=function(i){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(i)};it.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};it.prototype.barycoordFromPoint=function(i,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(i,e)};it.prototype.midpoint=function(i){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(i)};it.prototypenormal=function(i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(i)};it.prototype.plane=function(i){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(i)};it.barycoordFromPoint=function(i,e,t,n,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),it.getBarycoord(i,e,t,n,r)};it.normal=function(i,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),it.getNormal(i,e,t,n)};Qr.prototype.extractAllPoints=function(i){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(i)};Qr.prototype.extrude=function(i){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new fr(this,i)};Qr.prototype.makeGeometry=function(i){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Fl(this,i)};le.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};le.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};R.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};R.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};R.prototype.getPositionFromMatrix=function(i){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(i)};R.prototype.getScaleFromMatrix=function(i){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(i)};R.prototype.getColumnFromMatrix=function(i,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,i)};R.prototype.applyProjection=function(i){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(i)};R.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};R.prototype.distanceToManhattan=function(i){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(i)};R.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Ye.prototype.fromAttribute=function(i,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(i,e,t)};Ye.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};qe.prototype.getChildByName=function(i){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(i)};qe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};qe.prototype.translate=function(i,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,i)};qe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};qe.prototype.applyMatrix=function(i){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(qe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(i){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=i}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});xt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(xt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),ex},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});_f.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};St.prototype.setLens=function(i,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(i)};Object.defineProperties(cn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(i){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=i}},shadowCameraLeft:{set:function(i){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=i}},shadowCameraRight:{set:function(i){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=i}},shadowCameraTop:{set:function(i){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=i}},shadowCameraBottom:{set:function(i){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=i}},shadowCameraNear:{set:function(i){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=i}},shadowCameraFar:{set:function(i){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=i}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(i){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=i}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(i){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=i}},shadowMapHeight:{set:function(i){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=i}}});Object.defineProperties(ot.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===eo},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(eo)}}});ot.prototype.setDynamic=function(i){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?eo:Wr),this};ot.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ot.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ke.prototype.addIndex=function(i){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(i)};Ke.prototype.addAttribute=function(i,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(i,new ot(arguments[1],arguments[2]))):i==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(i,e)};Ke.prototype.addDrawCall=function(i,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(i,e)};Ke.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ke.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ke.prototype.removeAttribute=function(i){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(i)};Ke.prototype.applyMatrix=function(i){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(i)};Object.defineProperties(Ke.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});$r.prototype.setDynamic=function(i){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(i===!0?eo:Wr),this};$r.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};fr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};fr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};fr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Al.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Mt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(i){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===kh}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(i){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=i}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(pi.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(i){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=i}}});je.prototype.clearTarget=function(i,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(i),this.clear(e,t,n)};je.prototype.animate=function(i){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(i)};je.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};je.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};je.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};je.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};je.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};je.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};je.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};je.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};je.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};je.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};je.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};je.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};je.prototype.enableScissorTest=function(i){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(i)};je.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};je.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};je.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};je.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};je.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};je.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};je.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};je.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};je.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};je.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(je.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=i}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(i){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=i}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(i){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=i===!0?rr:Xt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(pf.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ut.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=i}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(i){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=i}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=i}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(i){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=i}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(i){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=i}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(i){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=i}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(i){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=i}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(i){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=i}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(i){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=i}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(i){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=i}}});iM.prototype.load=function(i){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new eM().load(i,function(n){e.setBuffer(n)}),this};Ml.prototype.updateCubeMap=function(i,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(i,e)};Ml.prototype.clear=function(i,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(i,e,t,n)};or.crossOrigin=void 0;or.loadTexture=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Ff;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};or.loadTextureCube=function(i,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new Wb;r.setCrossOrigin(this.crossOrigin);const s=r.load(i,t,void 0,n);return e&&(s.mapping=e),s};or.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};or.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const Vu={type:"change"},_a={type:"start"},ku={type:"end"};class yM extends Xn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",v),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Vu),n.update(),s=r.NONE},this.update=function(){const L=new R,w=new _t().setFromUnitVectors(e.up,new R(0,1,0)),ne=w.clone().invert(),re=new R,we=new _t,xe=2*Math.PI;return function(){const ue=n.object.position;L.copy(ue).sub(n.target),L.applyQuaternion(w),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&ce(D()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let be=n.minAzimuthAngle,De=n.maxAzimuthAngle;return isFinite(be)&&isFinite(De)&&(be<-Math.PI?be+=xe:be>Math.PI&&(be-=xe),De<-Math.PI?De+=xe:De>Math.PI&&(De-=xe),be<=De?a.theta=Math.max(be,Math.min(De,a.theta)):a.theta=a.theta>(be+De)/2?Math.max(be,a.theta):Math.min(De,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(ne),ue.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||re.distanceToSquared(n.object.position)>o||8*(1-we.dot(n.object.quaternion))>o?(n.dispatchEvent(Vu),re.copy(n.object.position),we.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",H),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",k),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",v)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Hu,l=new Hu;let c=1;const u=new R;let h=!1;const f=new le,d=new le,g=new le,x=new le,b=new le,p=new le,m=new le,P=new le,M=new le,C=[],N={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function $(){return Math.pow(.95,n.zoomSpeed)}function ce(L){l.theta-=L}function ie(L){l.phi-=L}const B=function(){const L=new R;return function(ne,re){L.setFromMatrixColumn(re,0),L.multiplyScalar(-ne),u.add(L)}}(),E=function(){const L=new R;return function(ne,re){n.screenSpacePanning===!0?L.setFromMatrixColumn(re,1):(L.setFromMatrixColumn(re,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ne),u.add(L)}}(),A=function(){const L=new R;return function(ne,re){const we=n.domElement;if(n.object.isPerspectiveCamera){const xe=n.object.position;L.copy(xe).sub(n.target);let Ae=L.length();Ae*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ne*Ae/we.clientHeight,n.object.matrix),E(2*re*Ae/we.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ne*(n.object.right-n.object.left)/n.object.zoom/we.clientWidth,n.object.matrix),E(re*(n.object.top-n.object.bottom)/n.object.zoom/we.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(L){f.set(L.clientX,L.clientY)}function U(L){m.set(L.clientX,L.clientY)}function oe(L){x.set(L.clientX,L.clientY)}function de(L){d.set(L.clientX,L.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const w=n.domElement;ce(2*Math.PI*g.x/w.clientHeight),ie(2*Math.PI*g.y/w.clientHeight),f.copy(d),n.update()}function K(L){P.set(L.clientX,L.clientY),M.subVectors(P,m),M.y>0?V($()):M.y<0&&j($()),m.copy(P),n.update()}function Q(L){b.set(L.clientX,L.clientY),p.subVectors(b,x).multiplyScalar(n.panSpeed),A(p.x,p.y),x.copy(b),n.update()}function me(L){L.deltaY<0?j($()):L.deltaY>0&&V($()),n.update()}function he(L){let w=!1;switch(L.code){case n.keys.UP:A(0,n.keyPanSpeed),w=!0;break;case n.keys.BOTTOM:A(0,-n.keyPanSpeed),w=!0;break;case n.keys.LEFT:A(n.keyPanSpeed,0),w=!0;break;case n.keys.RIGHT:A(-n.keyPanSpeed,0),w=!0;break}w&&(L.preventDefault(),n.update())}function _e(){if(C.length===1)f.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),w=.5*(C[0].pageY+C[1].pageY);f.set(L,w)}}function Pe(){if(C.length===1)x.set(C[0].pageX,C[0].pageY);else{const L=.5*(C[0].pageX+C[1].pageX),w=.5*(C[0].pageY+C[1].pageY);x.set(L,w)}}function ae(){const L=C[0].pageX-C[1].pageX,w=C[0].pageY-C[1].pageY,ne=Math.sqrt(L*L+w*w);m.set(0,ne)}function Te(){n.enableZoom&&ae(),n.enablePan&&Pe()}function Me(){n.enableZoom&&ae(),n.enableRotate&&_e()}function ve(L){if(C.length==1)d.set(L.pageX,L.pageY);else{const ne=pe(L),re=.5*(L.pageX+ne.x),we=.5*(L.pageY+ne.y);d.set(re,we)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const w=n.domElement;ce(2*Math.PI*g.x/w.clientHeight),ie(2*Math.PI*g.y/w.clientHeight),f.copy(d)}function ye(L){if(C.length===1)b.set(L.pageX,L.pageY);else{const w=pe(L),ne=.5*(L.pageX+w.x),re=.5*(L.pageY+w.y);b.set(ne,re)}p.subVectors(b,x).multiplyScalar(n.panSpeed),A(p.x,p.y),x.copy(b)}function Ie(L){const w=pe(L),ne=L.pageX-w.x,re=L.pageY-w.y,we=Math.sqrt(ne*ne+re*re);P.set(0,we),M.set(0,Math.pow(P.y/m.y,n.zoomSpeed)),V(M.y),m.copy(P)}function J(L){n.enableZoom&&Ie(L),n.enablePan&&ye(L)}function y(L){n.enableZoom&&Ie(L),n.enableRotate&&ve(L)}function T(L){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",I),n.domElement.addEventListener("pointerup",F)),X(L),L.pointerType==="touch"?_(L):Y(L))}function I(L){n.enabled!==!1&&(L.pointerType==="touch"?z(L):te(L))}function F(L){W(L),C.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",I),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(ku),s=r.NONE}function k(L){W(L)}function Y(L){let w;switch(L.button){case 0:w=n.mouseButtons.LEFT;break;case 1:w=n.mouseButtons.MIDDLE;break;case 2:w=n.mouseButtons.RIGHT;break;default:w=-1}switch(w){case gi.DOLLY:if(n.enableZoom===!1)return;U(L),s=r.DOLLY;break;case gi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;oe(L),s=r.PAN}else{if(n.enableRotate===!1)return;O(L),s=r.ROTATE}break;case gi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;O(L),s=r.ROTATE}else{if(n.enablePan===!1)return;oe(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(_a)}function te(L){if(n.enabled!==!1)switch(s){case r.ROTATE:if(n.enableRotate===!1)return;de(L);break;case r.DOLLY:if(n.enableZoom===!1)return;K(L);break;case r.PAN:if(n.enablePan===!1)return;Q(L);break}}function ee(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(_a),me(L),n.dispatchEvent(ku))}function v(L){n.enabled===!1||n.enablePan===!1||he(L)}function _(L){switch(fe(L),C.length){case 1:switch(n.touches.ONE){case xi.ROTATE:if(n.enableRotate===!1)return;_e(),s=r.TOUCH_ROTATE;break;case xi.PAN:if(n.enablePan===!1)return;Pe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case xi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(),s=r.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(_a)}function z(L){switch(fe(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ve(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ye(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;J(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;y(L),n.update();break;default:s=r.NONE}}function H(L){n.enabled!==!1&&L.preventDefault()}function X(L){C.push(L)}function W(L){delete N[L.pointerId];for(let w=0;w<C.length;w++)if(C[w].pointerId==L.pointerId){C.splice(w,1);return}}function fe(L){let w=N[L.pointerId];w===void 0&&(w=new le,N[L.pointerId]=w),w.set(L.pageX,L.pageY)}function pe(L){const w=L.pointerId===C[0].pointerId?C[1]:C[0];return N[w.pointerId]}n.domElement.addEventListener("contextmenu",H),n.domElement.addEventListener("pointerdown",T),n.domElement.addEventListener("pointercancel",k),n.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}const Yi=new Al;function bM(i=16777215,e=1){const t=new zf(i,e);Yi.add(t)}const MM=window.innerWidth,wM=window.innerHeight;let Zi,Ot;function SM(i,e){const t=document.querySelector(i);if(t==null)return console.warn("\u627E\u4E0D\u5230\u7236\u8282\u70B9"),!1;let{width:n,height:r}=t.getBoundingClientRect();return Zi=new St(75,n/r,.1,1e3),bM(),Ot=new je({antialias:!0}),Ot.setPixelRatio(window.devicePixelRatio),Ot.setSize(MM,wM),Ot.setClearColor("#000000"),t.append(Ot.domElement),Ot.setSize(n,r),Zi.position.set(0,1,5),Ot.render(Yi,Zi),e&&TM(),window.addEventListener("resize",()=>{let{width:s,height:o}=t.getBoundingClientRect();Ot.setSize(s,o)}),console.log("CreateWorld"),!0}const TM=()=>{new yM(Zi,Ot.domElement).addEventListener("change",()=>{Ot.render(Yi,Zi)})};var EM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyZGJhMzNlOC03M2JkLTRjMmUtOWFmOS00OGFiNTU4ZjJlYmUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTYzRkQ0NzBBMkM1MTFFOEFDNUVERjczMTNBOTc0QzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTYzRkQ0NkZBMkM1MTFFOEFDNUVERjczMTNBOTc0QzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZGJhMzNlOC03M2JkLTRjMmUtOWFmOS00OGFiNTU4ZjJlYmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MmRiYTMzZTgtNzNiZC00YzJlLTlhZjktNDhhYjU1OGYyZWJlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cQJ/swAAABdJREFUeNpiaGhoOHDgAJODgwOQAggwAC6cBsMmqZXvAAAAAElFTkSuQmCC";const AM=40,CM=new Ff,ts=CM.load(EM);ts.wrapS=kr;ts.wrapT=kr;ts.magFilter=nt;const Gu=AM/2;ts.repeat.set(Gu,Gu);const LM=new yo(10,10),RM=new Lf({map:ts,side:di});var Wu=new xt(LM,RM);const PM={class:"one"},IM=bh({setup(i){let e;hl(()=>{if(!SM(".one",!0))return;Wu.rotation.x=Math.PI*-.5,Yi.add(Wu);const r=new ur(1,1,1),s=new Rf({color:65280});e=new xt(r,s),e.castShadow=!0,e.position.y=1,Yi.add(e),Ot.setAnimationLoop(()=>{t(),Ot.render(Yi,Zi)})});const t=()=>{e.rotation.x+=.01,e.rotation.y+=.01};return(n,r)=>(Fh(),Nh("div",PM))}});const DM=bh({setup(i){return(e,t)=>(Fh(),Nh("div",{class:"app",onTouchmove:t[0]||(t[0]=Tm(()=>{},["prevent"]))},[zn(IM)],32))}});Cm(DM).mount("#app");
