var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,u;function a(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function f(t,e,n){t.$$.on_destroy.push(l(e,n))}function p(t,e,n,o){if(t){const r=$(t,e,n,o);return t[0](r)}}function $(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function h(t,e,n,o,r,c){if(r){const s=$(e,n,o,c);t.p(s,r)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function m(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function y(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function b(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function k(){return _(" ")}function E(){return _("")}function A(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function C(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:C(t,o,e[o])}function j(t,e){t.value=null==e?"":e}function P(t){u=t}function I(){if(!u)throw new Error("Function called outside component initialization");return u}function z(t){I().$$.on_mount.push(t)}function B(t){I().$$.on_destroy.push(t)}function R(){const t=I();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function O(t,e){I().$$.context.set(t,e)}function L(t){return I().$$.context.get(t)}const N=[],T=[],U=[],J=[],D=Promise.resolve();let H=!1;function K(t){U.push(t)}let Q=!1;const q=new Set;function Z(){if(!Q){Q=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];P(e),G(e.$$)}for(P(null),N.length=0;T.length;)T.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];q.has(e)||(q.add(e),e())}U.length=0}while(N.length);for(;J.length;)J.pop()();H=!1,Q=!1,q.clear()}}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const M=new Set;let W;function F(){W={r:0,c:[],p:W}}function X(){W.r||r(W.c),W=W.p}function V(t,e){t&&t.i&&(M.delete(t),t.i(e))}function Y(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),W.c.push((()=>{M.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function tt(t,e){const n={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],i=e[c];if(i){for(const t in s)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[c]=i}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function et(t){return"object"==typeof t&&null!==t?t:{}}function nt(t){t&&t.c()}function ot(t,e,o,s){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(e,o),s||K((()=>{const e=u.map(n).filter(c);a?a.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(K)}function rt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(N.push(t),H||(H=!0,D.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,c,s,i,a,l,f=[-1]){const p=u;P(e);const $=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:n.context||[]),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||p.$$.root};l&&l($.root);let d=!1;if($.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&i($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),d&&ct(e,t)),n})):[],$.update(),d=!0,r($.before_update),$.fragment=!!s&&s($.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);$.fragment&&$.fragment.l(t),t.forEach(x)}else $.fragment&&$.fragment.c();n.intro&&V(e.$$.fragment),ot(e,n.target,n.anchor,n.customElement),Z()}P(p)}class it{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];function at(e,n=t){let o;const r=new Set;function c(t){if(s(e,t)&&(e=t,o)){const t=!ut.length;for(const t of r)t[1](),ut.push(t,e);if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,i=t){const u=[s,i];return r.add(u),1===r.size&&(o=n(c)||t),s(e),()=>{r.delete(u),0===r.size&&(o(),o=null)}}}}function lt(e,n,o){const s=!Array.isArray(e),i=s?[e]:e,u=n.length<2;return a=e=>{let o=!1;const a=[];let f=0,p=t;const $=()=>{if(f)return;p();const o=n(s?a[0]:a,e);u?e(o):p=c(o)?o:t},d=i.map(((t,e)=>l(t,(t=>{a[e]=t,f&=~(1<<e),o&&$()}),(()=>{f|=1<<e}))));return o=!0,$(),function(){r(d),p()}},{subscribe:at(o,a).subscribe};var a}const ft={},pt={};function $t(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const dt=function(t,e){const n=[];let o=$t(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=$t(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:c=!1}={}){r={...r,key:Date.now()+""};try{c?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[c?"replace":"assign"](e)}o=$t(t),n.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,c){const[s,i=""]=c.split("?");e++,n.push({pathname:s,search:i}),o.push(t)},replaceState(t,r,c){const[s,i=""]=c.split("?");n[e]={pathname:s,search:i},o[e]=t}}}}()),{navigate:ht}=dt,gt=/^:(.+)/;function mt(t,e){return t.substr(0,e.length)===e}function yt(t){return"*"===t[0]}function bt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function vt(t){return t.replace(/(^\/+|\/+$)/g,"")}function xt(t,e){return{route:t,score:t.default?0:bt(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return gt.test(t)}(e)?yt(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function wt(t,e){let n,o;const[r]=e.split("?"),c=bt(r),s=""===c[0],i=function(t){return t.map(xt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=i.length;t<r;t++){const r=i[t].route;let u=!1;if(r.default){o={route:r,params:{},uri:e};continue}const a=bt(r.path),l={},f=Math.max(c.length,a.length);let p=0;for(;p<f;p++){const t=a[p],e=c[p];if(void 0!==t&&yt(t)){l["*"===t?"*":t.slice(1)]=c.slice(p).map(decodeURIComponent).join("/");break}if(void 0===e){u=!0;break}let n=gt.exec(t);if(n&&!s){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){u=!0;break}}if(!u){n={route:r,params:l,uri:"/"+c.slice(0,p).join("/")};break}}return n||o||null}function _t(t,e){return t+(e?`?${e}`:"")}function kt(t,e){return`${vt("/"===e?t:`${vt(t)}/${vt(e)}`)}/`}function Et(t){let e;const n=t[9].default,o=p(n,t,t[8],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[r]){o&&o.p&&(!e||256&r)&&h(o,n,t,t[8],e?d(n,t[8],r,null):g(t[8]),null)},i(t){e||(V(o,t),e=!0)},o(t){Y(o,t),e=!1},d(t){o&&o.d(t)}}}function At(t,e,n){let o,r,c,{$$slots:s={},$$scope:i}=e,{basepath:u="/"}=e,{url:a=null}=e;const l=L(ft),p=L(pt),$=at([]);f(t,$,(t=>n(6,r=t)));const d=at(null);let h=!1;const g=l||at(a?{pathname:a}:dt.location);f(t,g,(t=>n(5,o=t)));const m=p?p.routerBase:at({path:u,uri:u});f(t,m,(t=>n(7,c=t)));const y=lt([m,d],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}}));return l||(z((()=>dt.listen((t=>{g.set(t.location)})))),O(ft,g)),O(pt,{activeRoute:d,base:m,routerBase:y,registerRoute:function(t){const{path:e}=c;let{path:n}=t;if(t._path=n,t.path=kt(e,n),"undefined"==typeof window){if(h)return;const e=function(t,e){return wt([t],e)}(t,o.pathname);e&&(d.set(e),h=!0)}else $.update((e=>(e.push(t),e)))},unregisterRoute:function(t){$.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,u=t.basepath),"url"in t&&n(4,a=t.url),"$$scope"in t&&n(8,i=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=c;$.update((e=>(e.forEach((e=>e.path=kt(t,e._path))),e)))}if(96&t.$$.dirty){const t=wt(r,o.pathname);d.set(t)}},[$,g,m,u,a,o,r,c,i,s]}class Ct extends it{constructor(t){super(),st(this,t,At,Et,s,{basepath:3,url:4})}}const St=t=>({params:4&t,location:16&t}),jt=t=>({params:t[2],location:t[4]});function Pt(t){let e,n,o,r;const c=[zt,It],s=[];function i(t,e){return null!==t[0]?0:1}return e=i(t),n=s[e]=c[e](t),{c(){n.c(),o=E()},m(t,n){s[e].m(t,n),v(t,o,n),r=!0},p(t,r){let u=e;e=i(t),e===u?s[e].p(t,r):(F(),Y(s[u],1,1,(()=>{s[u]=null})),X(),n=s[e],n?n.p(t,r):(n=s[e]=c[e](t),n.c()),V(n,1),n.m(o.parentNode,o))},i(t){r||(V(n),r=!0)},o(t){Y(n),r=!1},d(t){s[e].d(t),t&&x(o)}}}function It(t){let e;const n=t[10].default,o=p(n,t,t[9],jt);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||532&r)&&h(o,n,t,t[9],e?d(n,t[9],r,St):g(t[9]),jt)},i(t){e||(V(o,t),e=!0)},o(t){Y(o,t),e=!1},d(t){o&&o.d(t)}}}function zt(t){let n,o,r;const c=[{location:t[4]},t[2],t[3]];var s=t[0];function i(t){let n={};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}return s&&(n=new s(i())),{c(){n&&nt(n.$$.fragment),o=E()},m(t,e){n&&ot(n,t,e),v(t,o,e),r=!0},p(t,e){const r=28&e?tt(c,[16&e&&{location:t[4]},4&e&&et(t[2]),8&e&&et(t[3])]):{};if(s!==(s=t[0])){if(n){F();const t=n;Y(t.$$.fragment,1,0,(()=>{rt(t,1)})),X()}s?(n=new s(i()),nt(n.$$.fragment),V(n.$$.fragment,1),ot(n,o.parentNode,o)):n=null}else s&&n.$set(r)},i(t){r||(n&&V(n.$$.fragment,t),r=!0)},o(t){n&&Y(n.$$.fragment,t),r=!1},d(t){t&&x(o),n&&rt(n,t)}}}function Bt(t){let e,n,o=null!==t[1]&&t[1].route===t[7]&&Pt(t);return{c(){o&&o.c(),e=E()},m(t,r){o&&o.m(t,r),v(t,e,r),n=!0},p(t,[n]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,n),2&n&&V(o,1)):(o=Pt(t),o.c(),V(o,1),o.m(e.parentNode,e)):o&&(F(),Y(o,1,1,(()=>{o=null})),X())},i(t){n||(V(o),n=!0)},o(t){Y(o),n=!1},d(t){o&&o.d(t),t&&x(e)}}}function Rt(t,n,o){let r,c,{$$slots:s={},$$scope:i}=n,{path:u=""}=n,{component:a=null}=n;const{registerRoute:l,unregisterRoute:p,activeRoute:$}=L(pt);f(t,$,(t=>o(1,r=t)));const d=L(ft);f(t,d,(t=>o(4,c=t)));const h={path:u,default:""===u};let g={},y={};return l(h),"undefined"!=typeof window&&B((()=>{p(h)})),t.$$set=t=>{o(13,n=e(e({},n),m(t))),"path"in t&&o(8,u=t.path),"component"in t&&o(0,a=t.component),"$$scope"in t&&o(9,i=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===h&&o(2,g=r.params);{const{path:t,component:e,...r}=n;o(3,y=r)}},n=m(n),[a,r,g,y,c,$,d,h,u,i,s]}class Ot extends it{constructor(t){super(),st(this,t,Rt,Bt,s,{path:8,component:0})}}function Lt(t){let n,o,r,c;const s=t[16].default,i=p(s,t,t[15],null);let u=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],a={};for(let t=0;t<u.length;t+=1)a=e(a,u[t]);return{c(){n=w("a"),i&&i.c(),S(n,a)},m(e,s){v(e,n,s),i&&i.m(n,null),o=!0,r||(c=A(n,"click",t[5]),r=!0)},p(t,[e]){i&&i.p&&(!o||32768&e)&&h(i,s,t,t[15],o?d(s,t[15],e,null):g(t[15]),null),S(n,a=tt(u,[(!o||1&e)&&{href:t[0]},(!o||4&e)&&{"aria-current":t[2]},2&e&&t[1],64&e&&t[6]]))},i(t){o||(V(i,t),o=!0)},o(t){Y(i,t),o=!1},d(t){t&&x(n),i&&i.d(t),r=!1,c()}}}function Nt(t,n,o){let r;const c=["to","replace","state","getProps"];let s,i,u=y(n,c),{$$slots:a={},$$scope:l}=n,{to:p="#"}=n,{replace:$=!1}=n,{state:d={}}=n,{getProps:h=(()=>({}))}=n;const{base:g}=L(pt);f(t,g,(t=>o(14,i=t)));const b=L(ft);f(t,b,(t=>o(13,s=t)));const v=R();let x,w,_,k;return t.$$set=t=>{n=e(e({},n),m(t)),o(6,u=y(n,c)),"to"in t&&o(7,p=t.to),"replace"in t&&o(8,$=t.replace),"state"in t&&o(9,d=t.state),"getProps"in t&&o(10,h=t.getProps),"$$scope"in t&&o(15,l=t.$$scope)},t.$$.update=()=>{16512&t.$$.dirty&&o(0,x="/"===p?i.uri:function(t,e){if(mt(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),c=bt(n),s=bt(r);if(""===c[0])return _t(r,o);if(!mt(c[0],"."))return _t(("/"===r?"":"/")+s.concat(c).join("/"),o);const i=s.concat(c),u=[];return i.forEach((t=>{".."===t?u.pop():"."!==t&&u.push(t)})),_t("/"+u.join("/"),o)}(p,i.uri)),8193&t.$$.dirty&&o(11,w=mt(s.pathname,x)),8193&t.$$.dirty&&o(12,_=x===s.pathname),4096&t.$$.dirty&&o(2,r=_?"page":void 0),15361&t.$$.dirty&&o(1,k=h({location:s,href:x,isPartiallyCurrent:w,isCurrent:_}))},[x,k,r,g,b,function(t){if(v("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=s.pathname===x||$;ht(x,{state:d,replace:e})}},u,p,$,d,h,w,_,s,i,l,a]}class Tt extends it{constructor(t){super(),st(this,t,Nt,Lt,s,{to:7,replace:8,state:9,getProps:10})}}function Ut(e){let n;return{c(){n=w("header"),n.textContent="動物スナップショット",C(n,"class","svelte-97bedm")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&x(n)}}}class Jt extends it{constructor(t){super(),st(this,t,null,Ut,s,{})}}function Dt(t){let e;return{c(){e=_("ホーム")},m(t,n){v(t,e,n)},d(t){t&&x(e)}}}function Ht(t){let e;return{c(){e=_("情報")},m(t,n){v(t,e,n)},d(t){t&&x(e)}}}function Kt(t){let e;return{c(){e=_("設定")},m(t,n){v(t,e,n)},d(t){t&&x(e)}}}function Qt(t){let e,n,o,r,c,s,i,u,a,l,f,p,$;return r=new Tt({props:{to:"/",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),a=new Tt({props:{to:"info",$$slots:{default:[Ht]},$$scope:{ctx:t}}}),p=new Tt({props:{to:"settings",$$slots:{default:[Kt]},$$scope:{ctx:t}}}),{c(){e=w("footer"),n=w("ul"),o=w("li"),nt(r.$$.fragment),c=k(),s=w("li"),s.textContent="スコア",i=k(),u=w("li"),nt(a.$$.fragment),l=k(),f=w("li"),nt(p.$$.fragment),C(o,"class","svelte-hhzauv"),C(s,"class","svelte-hhzauv"),C(u,"class","svelte-hhzauv"),C(f,"class","svelte-hhzauv"),C(n,"class","svelte-hhzauv"),C(e,"class","svelte-hhzauv")},m(t,d){v(t,e,d),b(e,n),b(n,o),ot(r,o,null),b(n,c),b(n,s),b(n,i),b(n,u),ot(a,u,null),b(n,l),b(n,f),ot(p,f,null),$=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),a.$set(o);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),p.$set(c)},i(t){$||(V(r.$$.fragment,t),V(a.$$.fragment,t),V(p.$$.fragment,t),$=!0)},o(t){Y(r.$$.fragment,t),Y(a.$$.fragment,t),Y(p.$$.fragment,t),$=!1},d(t){t&&x(e),rt(r),rt(a),rt(p)}}}class qt extends it{constructor(t){super(),st(this,t,null,Qt,s,{})}}function Zt(t,e,n){const o=t.slice();return o[13]=e[n],o}function Gt(t){let e,n;return{c(){e=w("img"),a(e.src,n=`https://drive.google.com/uc?export=view&id=${t[13].id}&usp=sharing`)||C(e,"src",n),C(e,"alt",""),C(e,"class","svelte-1n4b2yp")},m(t,n){v(t,e,n)},p(t,o){4&o&&!a(e.src,n=`https://drive.google.com/uc?export=view&id=${t[13].id}&usp=sharing`)&&C(e,"src",n)},d(t){t&&x(e)}}}function Mt(e){let n,o,c,s,i,u,l,f,p,$,d,h,g,m,y,E,S,P,I,z,B,R,O,L,N=e[2],T=[];for(let t=0;t<N.length;t+=1)T[t]=Gt(Zt(e,N,t));return{c(){n=w("main"),o=w("form"),c=w("button"),c.textContent="Google連携",s=k(),i=w("button"),i.textContent="ログアウト",u=k(),l=w("form"),f=w("label"),p=_("写真を選ぶ\r\n\t\t\t"),$=w("input"),d=k(),h=w("img"),m=k(),y=w("label"),E=_("動物名\r\n\t\t\t"),S=w("input"),P=k(),I=w("button"),I.textContent="保存",z=k(),B=w("div"),R=w("ul");for(let t=0;t<T.length;t+=1)T[t].c();C(c,"type","button"),C(i,"type","button"),C($,"type","file"),C($,"accept","image/*;capture=camera"),C($,"class","svelte-1n4b2yp"),a(h.src,g=e[1].length?URL.createObjectURL(e[1][0]):"")||C(h,"src",g),C(h,"alt",""),C(h,"class","svelte-1n4b2yp"),C(I,"type","button"),C(B,"class","images")},m(t,r){v(t,n,r),b(n,o),b(o,c),b(o,s),b(o,i),b(n,u),b(n,l),b(l,f),b(f,p),b(f,$),b(f,d),b(f,h),b(l,m),b(l,y),b(y,E),b(y,S),j(S,e[0]),b(l,P),b(l,I),b(n,z),b(n,B),b(B,R);for(let t=0;t<T.length;t+=1)T[t].m(R,null);O||(L=[A(c,"click",Wt),A(i,"click",Ft),A($,"change",e[5]),A(S,"input",e[6]),A(I,"click",e[4])],O=!0)},p(t,[e]){if(2&e&&!a(h.src,g=t[1].length?URL.createObjectURL(t[1][0]):"")&&C(h,"src",g),1&e&&S.value!==t[0]&&j(S,t[0]),4&e){let n;for(N=t[2],n=0;n<N.length;n+=1){const o=Zt(t,N,n);T[n]?T[n].p(o,e):(T[n]=Gt(o),T[n].c(),T[n].m(R,null))}for(;n<T.length;n+=1)T[n].d(1);T.length=N.length}},i:t,o:t,d(t){t&&x(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(T,t),O=!1,r(L)}}}function Wt(){gapi.auth2.getAuthInstance().signIn()}function Ft(){gapi.auth2.getAuthInstance().signOut()}function Xt(t,e,n){let o;const r=["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];let c,s=[],i=[];const u=at(localStorage.getItem("name")||"");function a(){gapi.client.init({apiKey:"AIzaSyBcPAbJojakPqbQ6pXi8P1HRSbuQEHaiiQ",clientId:"570738443611-7le1gj7itglp9tqca6hipkh0mlrn2cck.apps.googleusercontent.com",discoveryDocs:r,scope:"https://www.googleapis.com/auth/drive"}).then((function(){gapi.auth2.getAuthInstance().isSignedIn.listen(l),l(window.gapi.auth2.getAuthInstance().isSignedIn.get())}),(function(t){appendPre(JSON.stringify(t,null,2))}))}function l(t){t&&gapi.client.drive.files.list({q:'"1rBCtWoBhZBwzJCkydSjZJAkGAhQN__Te" in parents'}).then((t=>{n(2,i=t.result.files)}))}return f(t,u,(t=>n(7,o=t))),z((()=>{gapi.load("client:auth2",a),console.log(o)})),[c,s,i,u,function(){const t=s[0],e=new Blob([t]);gapi.client.drive.files.create({name:Date.now()+"_"+c+"_"+o+".jpg",parents:["1rBCtWoBhZBwzJCkydSjZJAkGAhQN__Te"]}).then((o=>{fetch(`https://www.googleapis.com/upload/drive/v3/files/${o.result.id}`,{method:"PATCH",headers:new Headers({Authorization:`Bearer ${gapi.client.getToken().access_token}`,"Content-Type":t.type}),body:e}).then((t=>t.json())).then((t=>n(2,i=[t,...i])))}))},function(){s=this.files,n(1,s)},function(){c=this.value,n(0,c)}]}class Vt extends it{constructor(t){super(),st(this,t,Xt,Mt,s,{})}}function Yt(e){let n,o,r,c,s,i,u;return{c(){n=w("main"),o=w("input"),r=k(),c=w("p"),s=_(e[0])},m(t,a){v(t,n,a),b(n,o),j(o,e[0]),b(n,r),b(n,c),b(c,s),i||(u=A(o,"input",e[2]),i=!0)},p(t,[e]){1&e&&o.value!==t[0]&&j(o,t[0]),1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(s,t[0])},i:t,o:t,d(t){t&&x(n),i=!1,u()}}}function te(t,e,n){let o;const r=at(localStorage.getItem("name")||"");f(t,r,(t=>n(0,o=t)));return B(r.subscribe((t=>localStorage.setItem("name",t)))),[o,r,function(){o=this.value,r.set(o)}]}class ee extends it{constructor(t){super(),st(this,t,te,Yt,s,{})}}class ne extends it{constructor(t){super(),st(this,t,null,null,s,{})}}function oe(e){let n,o,r,c,s,i,u,a,l,f;return n=new Jt({}),r=new Ot({props:{path:"settings",component:ee}}),s=new Ot({props:{path:"info",component:ne}}),u=new Ot({props:{path:"/",component:Vt}}),l=new qt({}),{c(){nt(n.$$.fragment),o=k(),nt(r.$$.fragment),c=k(),nt(s.$$.fragment),i=k(),nt(u.$$.fragment),a=k(),nt(l.$$.fragment)},m(t,e){ot(n,t,e),v(t,o,e),ot(r,t,e),v(t,c,e),ot(s,t,e),v(t,i,e),ot(u,t,e),v(t,a,e),ot(l,t,e),f=!0},p:t,i(t){f||(V(n.$$.fragment,t),V(r.$$.fragment,t),V(s.$$.fragment,t),V(u.$$.fragment,t),V(l.$$.fragment,t),f=!0)},o(t){Y(n.$$.fragment,t),Y(r.$$.fragment,t),Y(s.$$.fragment,t),Y(u.$$.fragment,t),Y(l.$$.fragment,t),f=!1},d(t){rt(n,t),t&&x(o),rt(r,t),t&&x(c),rt(s,t),t&&x(i),rt(u,t),t&&x(a),rt(l,t)}}}function re(t){let e,n;return e=new Ct({props:{basepath:"/fieldensyu",$$slots:{default:[oe]},$$scope:{ctx:t}}}),{c(){nt(e.$$.fragment)},m(t,o){ot(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){Y(e.$$.fragment,t),n=!1},d(t){rt(e,t)}}}return new class extends it{constructor(t){super(),st(this,t,null,re,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
