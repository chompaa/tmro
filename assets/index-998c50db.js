(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var hr,x,Cu,Mt,al,Eu,to,Su,ni={},Tu=[],Mp=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Bi=Array.isArray;function tt(t,e){for(var n in e)t[n]=e[n];return t}function Du(t){var e=t.parentNode;e&&e.removeChild(t)}function Ge(t,e,n){var r,i,s,o={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?hr.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)o[s]===void 0&&(o[s]=t.defaultProps[s]);return Fn(t,o,r,i,null)}function Fn(t,e,n,r,i){var s={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Cu};return i==null&&x.vnode!=null&&x.vnode(s),s}function Lp(){return{current:null}}function Le(t){return t.children}function je(t,e){this.props=t,this.context=e}function jn(t,e){if(e==null)return t.__?jn(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?jn(t):null}function xu(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return xu(t)}}function no(t){(!t.__d&&(t.__d=!0)&&Mt.push(t)&&!ri.__r++||al!==x.debounceRendering)&&((al=x.debounceRendering)||Eu)(ri)}function ri(){var t,e,n,r,i,s,o,a;for(Mt.sort(to);t=Mt.shift();)t.__d&&(e=Mt.length,r=void 0,i=void 0,o=(s=(n=t).__v).__e,(a=n.__P)&&(r=[],(i=tt({},s)).__v=s.__v+1,Oo(a,s,i,n.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,r,o??jn(s),s.__h),Ou(r,s),s.__e!=o&&xu(s)),Mt.length>e&&Mt.sort(to));ri.__r=0}function Ru(t,e,n,r,i,s,o,a,l,c){var u,d,h,f,p,g,v,m=r&&r.__k||Tu,b=m.length;for(n.__k=[],u=0;u<e.length;u++)if((f=n.__k[u]=(f=e[u])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Fn(null,f,null,null,f):Bi(f)?Fn(Le,{children:f},null,null,null):f.__b>0?Fn(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(h=m[u])===null||h&&f.key==h.key&&f.type===h.type)m[u]=void 0;else for(d=0;d<b;d++){if((h=m[d])&&f.key==h.key&&f.type===h.type){m[d]=void 0;break}h=null}Oo(t,f,h=h||ni,i,s,o,a,l,c),p=f.__e,(d=f.ref)&&h.ref!=d&&(v||(v=[]),h.ref&&v.push(h.ref,null,f),v.push(d,f.__c||p,f)),p!=null?(g==null&&(g=p),typeof f.type=="function"&&f.__k===h.__k?f.__d=l=Pu(f,l,t):l=Au(t,f,h,m,p,l),typeof n.type=="function"&&(n.__d=l)):l&&h.__e==l&&l.parentNode!=t&&(l=jn(h))}for(n.__e=g,u=b;u--;)m[u]!=null&&(typeof n.type=="function"&&m[u].__e!=null&&m[u].__e==n.__d&&(n.__d=Nu(r).nextSibling),Mu(m[u],m[u]));if(v)for(u=0;u<v.length;u++)ku(v[u],v[++u],v[++u])}function Pu(t,e,n){for(var r,i=t.__k,s=0;i&&s<i.length;s++)(r=i[s])&&(r.__=t,e=typeof r.type=="function"?Pu(r,e,n):Au(n,r,r,i,r.__e,e));return e}function ze(t,e){return e=e||[],t==null||typeof t=="boolean"||(Bi(t)?t.some(function(n){ze(n,e)}):e.push(t)),e}function Au(t,e,n,r,i,s){var o,a,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||i!=s||i.parentNode==null)e:if(s==null||s.parentNode!==t)t.appendChild(i),o=null;else{for(a=s,l=0;(a=a.nextSibling)&&l<r.length;l+=1)if(a==i)break e;t.insertBefore(i,s),o=s}return o!==void 0?o:i.nextSibling}function Nu(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=Nu(n)))return r}return null}function Fp(t,e,n,r,i){var s;for(s in n)s==="children"||s==="key"||s in e||ii(t,s,null,n[s],r);for(s in e)i&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||n[s]===e[s]||ii(t,s,e[s],n[s],r)}function ll(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Mp.test(e)?n:n+"px"}function ii(t,e,n,r,i){var s;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ll(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ll(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=n,n?r||t.addEventListener(e,s?ul:cl,s):t.removeEventListener(e,s?ul:cl,s);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function cl(t){return this.l[t.type+!1](x.event?x.event(t):t)}function ul(t){return this.l[t.type+!0](x.event?x.event(t):t)}function Oo(t,e,n,r,i,s,o,a,l){var c,u,d,h,f,p,g,v,m,b,y,I,T,D,F,L=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=e.__e=n.__e,e.__h=null,s=[a]),(c=x.__b)&&c(e);try{e:if(typeof L=="function"){if(v=e.props,m=(c=L.contextType)&&r[c.__c],b=c?m?m.props.value:c.__:r,n.__c?g=(u=e.__c=n.__c).__=u.__E:("prototype"in L&&L.prototype.render?e.__c=u=new L(v,b):(e.__c=u=new je(v,b),u.constructor=L,u.render=Up),m&&m.sub(u),u.props=v,u.state||(u.state={}),u.context=b,u.__n=r,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),L.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=tt({},u.__s)),tt(u.__s,L.getDerivedStateFromProps(v,u.__s))),h=u.props,f=u.state,u.__v=e,d)L.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(L.getDerivedStateFromProps==null&&v!==h&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,b),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,b)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(u.props=v,u.state=u.__s,u.__d=!1),u.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(k){k&&(k.__=e)}),y=0;y<u._sb.length;y++)u.__h.push(u._sb[y]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,b),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(h,f,p)})}if(u.context=b,u.props=v,u.__P=t,I=x.__r,T=0,"prototype"in L&&L.prototype.render){for(u.state=u.__s,u.__d=!1,I&&I(e),c=u.render(u.props,u.state,u.context),D=0;D<u._sb.length;D++)u.__h.push(u._sb[D]);u._sb=[]}else do u.__d=!1,I&&I(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++T<25);u.state=u.__s,u.getChildContext!=null&&(r=tt(tt({},r),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(p=u.getSnapshotBeforeUpdate(h,f)),Ru(t,Bi(F=c!=null&&c.type===Le&&c.key==null?c.props.children:c)?F:[F],e,n,r,i,s,o,a,l),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else s==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Bp(n.__e,e,n,r,i,s,o,l);(c=x.diffed)&&c(e)}catch(k){e.__v=null,(l||s!=null)&&(e.__e=a,e.__h=!!l,s[s.indexOf(a)]=null),x.__e(k,e,n)}}function Ou(t,e){x.__c&&x.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){x.__e(r,n.__v)}})}function Bp(t,e,n,r,i,s,o,a){var l,c,u,d=n.props,h=e.props,f=e.type,p=0;if(f==="svg"&&(i=!0),s!=null){for(;p<s.length;p++)if((l=s[p])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){t=l,s[p]=null;break}}if(t==null){if(f===null)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),s=null,a=!1}if(f===null)d===h||a&&t.data===h||(t.data=h);else{if(s=s&&hr.call(t.childNodes),c=(d=n.props||ni).dangerouslySetInnerHTML,u=h.dangerouslySetInnerHTML,!a){if(s!=null)for(d={},p=0;p<t.attributes.length;p++)d[t.attributes[p].name]=t.attributes[p].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===t.innerHTML)||(t.innerHTML=u&&u.__html||""))}if(Fp(t,h,d,i,a),u)e.__k=[];else if(Ru(t,Bi(p=e.props.children)?p:[p],e,n,r,i&&f!=="foreignObject",s,o,s?s[0]:n.__k&&jn(n,0),a),s!=null)for(p=s.length;p--;)s[p]!=null&&Du(s[p]);a||("value"in h&&(p=h.value)!==void 0&&(p!==t.value||f==="progress"&&!p||f==="option"&&p!==d.value)&&ii(t,"value",p,d.value,!1),"checked"in h&&(p=h.checked)!==void 0&&p!==t.checked&&ii(t,"checked",p,d.checked,!1))}return t}function ku(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){x.__e(r,n)}}function Mu(t,e,n){var r,i;if(x.unmount&&x.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||ku(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){x.__e(s,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Mu(r[i],e,n||typeof t.type!="function");n||t.__e==null||Du(t.__e),t.__=t.__e=t.__d=void 0}function Up(t,e,n){return this.constructor(t,n)}function on(t,e,n){var r,i,s;x.__&&x.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,s=[],Oo(e,t=(!r&&n||e).__k=Ge(Le,null,[t]),i||ni,ni,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?hr.call(e.childNodes):null,s,!r&&n?n:i?i.__e:e.firstChild,r),Ou(s,t)}function Lu(t,e){on(t,e,Lu)}function Fu(t,e,n){var r,i,s,o,a=tt({},t.props);for(s in t.type&&t.type.defaultProps&&(o=t.type.defaultProps),e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s]===void 0&&o!==void 0?o[s]:e[s];return arguments.length>2&&(a.children=arguments.length>3?hr.call(arguments,2):n),Fn(t.type,a,r||t.key,i||t.ref,null)}function Wp(t,e){var n={__c:e="__cC"+Su++,__:t,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,no(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}hr=Tu.slice,x={__e:function(t,e,n,r){for(var i,s,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(a){t=a}throw t}},Cu=0,je.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=tt({},this.state),typeof t=="function"&&(t=t(tt({},n),this.props)),t&&tt(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),no(this))},je.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),no(this))},je.prototype.render=Le,Mt=[],Eu=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,to=function(t,e){return t.__v.__b-e.__v.__b},ri.__r=0,Su=0;let Wr;const $p=new Uint8Array(16);function Hp(){if(!Wr&&(Wr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Wr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Wr($p)}const fe=[];for(let t=0;t<256;++t)fe.push((t+256).toString(16).slice(1));function Gp(t,e=0){return(fe[t[e+0]]+fe[t[e+1]]+fe[t[e+2]]+fe[t[e+3]]+"-"+fe[t[e+4]]+fe[t[e+5]]+"-"+fe[t[e+6]]+fe[t[e+7]]+"-"+fe[t[e+8]]+fe[t[e+9]]+"-"+fe[t[e+10]]+fe[t[e+11]]+fe[t[e+12]]+fe[t[e+13]]+fe[t[e+14]]+fe[t[e+15]]).toLowerCase()}const Vp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),dl={randomUUID:Vp};function qe(t,e,n){if(dl.randomUUID&&!e&&!t)return dl.randomUUID();t=t||{};const r=t.random||(t.rng||Hp)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return Gp(r)}var Et,ee,Ss,hl,an=0,Bu=[],Kr=[],fl=x.__b,pl=x.__r,gl=x.diffed,vl=x.__c,ml=x.unmount;function mn(t,e){x.__h&&x.__h(ee,t,an||e),an=0;var n=ee.__H||(ee.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:Kr}),n.__[t]}function ne(t){return an=1,ko(Uu,t)}function ko(t,e,n){var r=mn(Et++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Uu(void 0,e),function(a){var l=r.__N?r.__N[0]:r.__[0],c=r.t(l,a);l!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=ee,!ee.u)){var i=function(a,l,c){if(!r.__c.__H)return!0;var u=r.__c.__H.__.filter(function(h){return h.__c});if(u.every(function(h){return!h.__N}))return!s||s.call(this,a,l,c);var d=!1;return u.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(d=!0)}}),!(!d&&r.__c.props===a)&&(!s||s.call(this,a,l,c))};ee.u=!0;var s=ee.shouldComponentUpdate,o=ee.componentWillUpdate;ee.componentWillUpdate=function(a,l,c){if(this.__e){var u=s;s=void 0,i(a,l,c),s=u}o&&o.call(this,a,l,c)},ee.shouldComponentUpdate=i}return r.__N||r.__}function ve(t,e){var n=mn(Et++,3);!x.__s&&Mo(n.__H,e)&&(n.__=t,n.i=e,ee.__H.__h.push(n))}function _n(t,e){var n=mn(Et++,4);!x.__s&&Mo(n.__H,e)&&(n.__=t,n.i=e,ee.__h.push(n))}function H(t){return an=5,De(function(){return{current:t}},[])}function qp(t,e,n){an=6,_n(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function De(t,e){var n=mn(Et++,7);return Mo(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function jp(t,e){return an=8,De(function(){return t},e)}function Ui(t){var e=ee.context[t.__c],n=mn(Et++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(ee)),e.props.value):t.__}function zp(t,e){x.useDebugValue&&x.useDebugValue(e?e(t):t)}function Kp(){var t=mn(Et++,11);if(!t.__){for(var e=ee.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Yp(){for(var t;t=Bu.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Yr),t.__H.__h.forEach(ro),t.__H.__h=[]}catch(e){t.__H.__h=[],x.__e(e,t.__v)}}x.__b=function(t){ee=null,fl&&fl(t)},x.__r=function(t){pl&&pl(t),Et=0;var e=(ee=t.__c).__H;e&&(Ss===ee?(e.__h=[],ee.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Kr,n.__N=n.i=void 0})):(e.__h.forEach(Yr),e.__h.forEach(ro),e.__h=[],Et=0)),Ss=ee},x.diffed=function(t){gl&&gl(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Bu.push(e)!==1&&hl===x.requestAnimationFrame||((hl=x.requestAnimationFrame)||Jp)(Yp)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Kr&&(n.__=n.__V),n.i=void 0,n.__V=Kr})),Ss=ee=null},x.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Yr),n.__h=n.__h.filter(function(r){return!r.__||ro(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],x.__e(r,n.__v)}}),vl&&vl(t,e)},x.unmount=function(t){ml&&ml(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Yr(r)}catch(i){e=i}}),n.__H=void 0,e&&x.__e(e,n.__v))};var _l=typeof requestAnimationFrame=="function";function Jp(t){var e,n=function(){clearTimeout(r),_l&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);_l&&(e=requestAnimationFrame(n))}function Yr(t){var e=ee,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),ee=e}function ro(t){var e=ee;t.__c=t.__(),ee=e}function Mo(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Uu(t,e){return typeof e=="function"?e(t):e}function Wu(t,e){for(var n in e)t[n]=e[n];return t}function io(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Ts(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function so(t){this.props=t}function Qp(t,e){function n(i){var s=this.props.ref,o=s==i.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,i)||!o:io(this.props,i)}function r(i){return this.shouldComponentUpdate=n,Ge(t,i)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(so.prototype=new je).isPureReactComponent=!0,so.prototype.shouldComponentUpdate=function(t,e){return io(this.props,t)||io(this.state,e)};var bl=x.__b;x.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),bl&&bl(t)};var Xp=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function $u(t){function e(n){var r=Wu({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Xp,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var yl=function(t,e){return t==null?null:ze(ze(t).map(e))},Zp={map:yl,forEach:yl,count:function(t){return t?ze(t).length:0},only:function(t){var e=ze(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:ze},eg=x.__e;x.__e=function(t,e,n,r){if(t.then){for(var i,s=e;s=s.__;)if((i=s.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}eg(t,e,n,r)};var Il=x.unmount;function Hu(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Wu({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Hu(r,e,n)})),t}function Gu(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return Gu(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function Jr(){this.__u=0,this.t=null,this.__b=null}function Vu(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function tg(t){var e,n,r;function i(s){if(e||(e=t()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw e;return Ge(n,s)}return i.displayName="Lazy",i.__f=!0,i}function Ln(){this.u=null,this.o=null}x.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Il&&Il(t)},(Jr.prototype=new je).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Vu(r.__v),s=!1,o=function(){s||(s=!0,n.__R=null,i?i(a):a())};n.__R=o;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=Gu(c,c.__c.__P,c.__c.__O)}var u;for(r.setState({__a:r.__b=null});u=r.t.pop();)u.forceUpdate()}},l=e.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(o,o)},Jr.prototype.componentWillUnmount=function(){this.t=[]},Jr.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Hu(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__a&&Ge(Le,null,t.fallback);return i&&(i.__h=null),[Ge(Le,null,e.__a?null:t.children),i]};var wl=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function ng(t){return this.getChildContext=function(){return t.context},t.children}function rg(t){var e=this,n=t.i;e.componentWillUnmount=function(){on(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),on(Ge(ng,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function qu(t,e){var n=Ge(rg,{__v:t,i:e});return n.containerInfo=e,n}(Ln.prototype=new je).__a=function(t){var e=this,n=Vu(e.__v),r=e.o.get(t);return r[0]++,function(i){var s=function(){e.props.revealOrder?(r.push(i),wl(e,t,r)):i()};n?n(s):s()}},Ln.prototype.render=function(t){this.u=null,this.o=new Map;var e=ze(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},Ln.prototype.componentDidUpdate=Ln.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){wl(t,n,e)})};var ju=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ig=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,sg=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,og=/[A-Z0-9]/g,ag=typeof document<"u",lg=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function cg(t,e,n){return e.__k==null&&(e.textContent=""),on(t,e),typeof n=="function"&&n(),t?t.__c:null}function ug(t,e,n){return Lu(t,e),typeof n=="function"&&n(),t?t.__c:null}je.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(je.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Cl=x.event;function dg(){}function hg(){return this.cancelBubble}function fg(){return this.defaultPrevented}x.event=function(t){return Cl&&(t=Cl(t)),t.persist=dg,t.isPropagationStopped=hg,t.isDefaultPrevented=fg,t.nativeEvent=t};var Lo,pg={enumerable:!1,configurable:!0,get:function(){return this.class}},El=x.vnode;x.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,i={};for(var s in n){var o=n[s];if(!(s==="value"&&"defaultValue"in n&&o==null||ag&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var a=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&o===!0?o="":a==="ondoubleclick"?s="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||lg(n.type)?a==="onfocus"?s="onfocusin":a==="onblur"?s="onfocusout":sg.test(s)?s=a:r.indexOf("-")===-1&&ig.test(s)?s=s.replace(og,"-$&").toLowerCase():o===null&&(o=void 0):a=s="oninput",a==="oninput"&&i[s=a]&&(s="oninputCapture"),i[s]=o}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=ze(n.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=ze(n.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",pg)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),e.props=i}(t),t.$$typeof=ju,El&&El(t)};var Sl=x.__r;x.__r=function(t){Sl&&Sl(t),Lo=t.__c};var Tl=x.diffed;x.diffed=function(t){Tl&&Tl(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Lo=null};var gg={ReactCurrentDispatcher:{current:{readContext:function(t){return Lo.__n[t.__c].props.value}}}};function vg(t){return Ge.bind(null,t)}function zu(t){return!!t&&t.$$typeof===ju}function mg(t){return zu(t)?Fu.apply(null,arguments):t}function _g(t){return!!t.__k&&(on(null,t),!0)}function bg(t){return t&&(t.base||t.nodeType===1&&t)||null}var Ku=function(t,e){return t(e)},yg=function(t,e){return t(e)},Ig=Le;function Yu(t){t()}function wg(t){return t}function Cg(){return[!1,Yu]}var Eg=_n;function Sg(t,e){var n=e(),r=ne({h:{__:n,v:e}}),i=r[0].h,s=r[1];return _n(function(){i.__=n,i.v=e,Ts(i.__,e())||s({h:i})},[t,n,e]),ve(function(){return Ts(i.__,i.v())||s({h:i}),t(function(){Ts(i.__,i.v())||s({h:i})})},[t]),n}var X={useState:ne,useId:Kp,useReducer:ko,useEffect:ve,useLayoutEffect:_n,useInsertionEffect:Eg,useTransition:Cg,useDeferredValue:wg,useSyncExternalStore:Sg,startTransition:Yu,useRef:H,useImperativeHandle:qp,useMemo:De,useCallback:jp,useContext:Ui,useDebugValue:zp,version:"17.0.2",Children:Zp,render:cg,hydrate:ug,unmountComponentAtNode:_g,createPortal:qu,createElement:Ge,createContext:Wp,createFactory:vg,cloneElement:mg,createRef:Lp,Fragment:Le,isValidElement:zu,findDOMNode:bg,Component:je,PureComponent:so,memo:Qp,forwardRef:$u,flushSync:yg,unstable_batchedUpdates:Ku,StrictMode:Ig,Suspense:Jr,SuspenseList:Ln,lazy:tg,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:gg};function oo(t,e){return oo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},oo(t,e)}function Ju(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,oo(t,e)}function A(){return A=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},A.apply(this,arguments)}function zn(t){"@babel/helpers - typeof";return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zn(t)}function Tg(t,e){if(zn(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(zn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Dg(t){var e=Tg(t,"string");return zn(e)==="symbol"?e:String(e)}function xg(t,e,n){return e=Dg(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dl(Object(n),!0).forEach(function(r){xg(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ce(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Rl=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ds=function(){return Math.random().toString(36).substring(7).split("").join(".")},Pl={INIT:"@@redux/INIT"+Ds(),REPLACE:"@@redux/REPLACE"+Ds(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ds()}};function Rg(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Qu(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Ce(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Ce(1));return n(Qu)(t,e)}if(typeof t!="function")throw new Error(Ce(2));var i=t,s=e,o=[],a=o,l=!1;function c(){a===o&&(a=o.slice())}function u(){if(l)throw new Error(Ce(3));return s}function d(g){if(typeof g!="function")throw new Error(Ce(4));if(l)throw new Error(Ce(5));var v=!0;return c(),a.push(g),function(){if(v){if(l)throw new Error(Ce(6));v=!1,c();var b=a.indexOf(g);a.splice(b,1),o=null}}}function h(g){if(!Rg(g))throw new Error(Ce(7));if(typeof g.type>"u")throw new Error(Ce(8));if(l)throw new Error(Ce(9));try{l=!0,s=i(s,g)}finally{l=!1}for(var v=o=a,m=0;m<v.length;m++){var b=v[m];b()}return g}function f(g){if(typeof g!="function")throw new Error(Ce(10));i=g,h({type:Pl.REPLACE})}function p(){var g,v=d;return g={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Ce(11));function y(){b.next&&b.next(u())}y();var I=v(y);return{unsubscribe:I}}},g[Rl]=function(){return this},g}return h({type:Pl.INIT}),r={dispatch:h,subscribe:d,getState:u,replaceReducer:f},r[Rl]=p,r}function Al(t,e){return function(){return e(t.apply(this,arguments))}}function Nl(t,e){if(typeof t=="function")return Al(t,e);if(typeof t!="object"||t===null)throw new Error(Ce(16));var n={};for(var r in t){var i=t[r];typeof i=="function"&&(n[r]=Al(i,e))}return n}function Xu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Pg(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Ce(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Xu.apply(void 0,a)(i.dispatch),xl(xl({},i),{},{dispatch:s})}}}function Ag(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zu=X.createContext(null);function Ng(t){t()}var ed=Ng,Og=function(e){return ed=e},kg=function(){return ed};function Mg(){var t=kg(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],s=e;s;)i.push(s),s=s.next;return i},subscribe:function(i){var s=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!s||e===null||(s=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Ol={notify:function(){},get:function(){return[]}};function td(t,e){var n,r=Ol;function i(d){return l(),r.subscribe(d)}function s(){r.notify()}function o(){u.onStateChange&&u.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=Mg())}function c(){n&&(n(),n=void 0,r.clear(),r=Ol)}var u={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:function(){return r}};return u}var nd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?_n:ve;function Lg(t){var e=t.store,n=t.context,r=t.children,i=De(function(){var a=td(e);return{store:e,subscription:a}},[e]),s=De(function(){return e.getState()},[e]);nd(function(){var a=i.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,s]);var o=n||Zu;return X.createElement(o.Provider,{value:i},r)}function si(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var rd={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de=typeof Symbol=="function"&&Symbol.for,Fo=de?Symbol.for("react.element"):60103,Bo=de?Symbol.for("react.portal"):60106,Wi=de?Symbol.for("react.fragment"):60107,$i=de?Symbol.for("react.strict_mode"):60108,Hi=de?Symbol.for("react.profiler"):60114,Gi=de?Symbol.for("react.provider"):60109,Vi=de?Symbol.for("react.context"):60110,Uo=de?Symbol.for("react.async_mode"):60111,qi=de?Symbol.for("react.concurrent_mode"):60111,ji=de?Symbol.for("react.forward_ref"):60112,zi=de?Symbol.for("react.suspense"):60113,Fg=de?Symbol.for("react.suspense_list"):60120,Ki=de?Symbol.for("react.memo"):60115,Yi=de?Symbol.for("react.lazy"):60116,Bg=de?Symbol.for("react.block"):60121,Ug=de?Symbol.for("react.fundamental"):60117,Wg=de?Symbol.for("react.responder"):60118,$g=de?Symbol.for("react.scope"):60119;function Ae(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Fo:switch(t=t.type,t){case Uo:case qi:case Wi:case Hi:case $i:case zi:return t;default:switch(t=t&&t.$$typeof,t){case Vi:case ji:case Yi:case Ki:case Gi:return t;default:return e}}case Bo:return e}}}function id(t){return Ae(t)===qi}q.AsyncMode=Uo;q.ConcurrentMode=qi;q.ContextConsumer=Vi;q.ContextProvider=Gi;q.Element=Fo;q.ForwardRef=ji;q.Fragment=Wi;q.Lazy=Yi;q.Memo=Ki;q.Portal=Bo;q.Profiler=Hi;q.StrictMode=$i;q.Suspense=zi;q.isAsyncMode=function(t){return id(t)||Ae(t)===Uo};q.isConcurrentMode=id;q.isContextConsumer=function(t){return Ae(t)===Vi};q.isContextProvider=function(t){return Ae(t)===Gi};q.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo};q.isForwardRef=function(t){return Ae(t)===ji};q.isFragment=function(t){return Ae(t)===Wi};q.isLazy=function(t){return Ae(t)===Yi};q.isMemo=function(t){return Ae(t)===Ki};q.isPortal=function(t){return Ae(t)===Bo};q.isProfiler=function(t){return Ae(t)===Hi};q.isStrictMode=function(t){return Ae(t)===$i};q.isSuspense=function(t){return Ae(t)===zi};q.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Wi||t===qi||t===Hi||t===$i||t===zi||t===Fg||typeof t=="object"&&t!==null&&(t.$$typeof===Yi||t.$$typeof===Ki||t.$$typeof===Gi||t.$$typeof===Vi||t.$$typeof===ji||t.$$typeof===Ug||t.$$typeof===Wg||t.$$typeof===$g||t.$$typeof===Bg)};q.typeOf=Ae;rd.exports=q;var Hg=rd.exports,Wo=Hg,Gg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},$o={};$o[Wo.ForwardRef]=qg;$o[Wo.Memo]=sd;function kl(t){return Wo.isMemo(t)?sd:$o[t.$$typeof]||Gg}var jg=Object.defineProperty,zg=Object.getOwnPropertyNames,Ml=Object.getOwnPropertySymbols,Kg=Object.getOwnPropertyDescriptor,Yg=Object.getPrototypeOf,Ll=Object.prototype;function od(t,e,n){if(typeof e!="string"){if(Ll){var r=Yg(e);r&&r!==Ll&&od(t,r,n)}var i=zg(e);Ml&&(i=i.concat(Ml(e)));for(var s=kl(t),o=kl(e),a=0;a<i.length;++a){var l=i[a];if(!Vg[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=Kg(e,l);try{jg(t,l,c)}catch{}}}}return t}var Jg=od;const Fl=Ag(Jg);var ad={exports:{}},Y={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=60103,Qi=60106,fr=60107,pr=60108,gr=60114,vr=60109,mr=60110,_r=60112,br=60113,Ho=60120,yr=60115,Ir=60116,ld=60121,cd=60122,ud=60117,dd=60129,hd=60131;if(typeof Symbol=="function"&&Symbol.for){var he=Symbol.for;Ji=he("react.element"),Qi=he("react.portal"),fr=he("react.fragment"),pr=he("react.strict_mode"),gr=he("react.profiler"),vr=he("react.provider"),mr=he("react.context"),_r=he("react.forward_ref"),br=he("react.suspense"),Ho=he("react.suspense_list"),yr=he("react.memo"),Ir=he("react.lazy"),ld=he("react.block"),cd=he("react.server.block"),ud=he("react.fundamental"),dd=he("react.debug_trace_mode"),hd=he("react.legacy_hidden")}function Ve(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ji:switch(t=t.type,t){case fr:case gr:case pr:case br:case Ho:return t;default:switch(t=t&&t.$$typeof,t){case mr:case _r:case Ir:case yr:case vr:return t;default:return e}}case Qi:return e}}}var Qg=vr,Xg=Ji,Zg=_r,ev=fr,tv=Ir,nv=yr,rv=Qi,iv=gr,sv=pr,ov=br;Y.ContextConsumer=mr;Y.ContextProvider=Qg;Y.Element=Xg;Y.ForwardRef=Zg;Y.Fragment=ev;Y.Lazy=tv;Y.Memo=nv;Y.Portal=rv;Y.Profiler=iv;Y.StrictMode=sv;Y.Suspense=ov;Y.isAsyncMode=function(){return!1};Y.isConcurrentMode=function(){return!1};Y.isContextConsumer=function(t){return Ve(t)===mr};Y.isContextProvider=function(t){return Ve(t)===vr};Y.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ji};Y.isForwardRef=function(t){return Ve(t)===_r};Y.isFragment=function(t){return Ve(t)===fr};Y.isLazy=function(t){return Ve(t)===Ir};Y.isMemo=function(t){return Ve(t)===yr};Y.isPortal=function(t){return Ve(t)===Qi};Y.isProfiler=function(t){return Ve(t)===gr};Y.isStrictMode=function(t){return Ve(t)===pr};Y.isSuspense=function(t){return Ve(t)===br};Y.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===fr||t===gr||t===dd||t===pr||t===br||t===Ho||t===hd||typeof t=="object"&&t!==null&&(t.$$typeof===Ir||t.$$typeof===yr||t.$$typeof===vr||t.$$typeof===mr||t.$$typeof===_r||t.$$typeof===ud||t.$$typeof===ld||t[0]===cd)};Y.typeOf=Ve;ad.exports=Y;var av=ad.exports,lv=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],cv=["reactReduxForwardedRef"],uv=[],dv=[null,null];function hv(t,e){var n=t[1];return[e.payload,n+1]}function Bl(t,e,n){nd(function(){return t.apply(void 0,e)},n)}function fv(t,e,n,r,i,s,o){t.current=r,e.current=i,n.current=!1,s.current&&(s.current=null,o())}function pv(t,e,n,r,i,s,o,a,l,c){if(t){var u=!1,d=null,h=function(){if(!u){var g=e.getState(),v,m;try{v=r(g,i.current)}catch(b){m=b,d=b}m||(d=null),v===s.current?o.current||l():(s.current=v,a.current=v,o.current=!0,c({type:"STORE_UPDATED",payload:{error:m}}))}};n.onStateChange=h,n.trySubscribe(),h();var f=function(){if(u=!0,n.tryUnsubscribe(),n.onStateChange=null,d)throw d};return f}}var gv=function(){return[null,0]};function vv(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,i=r===void 0?function(y){return"ConnectAdvanced("+y+")"}:r,s=n.methodName,o=s===void 0?"connectAdvanced":s,a=n.renderCountProp,l=a===void 0?void 0:a,c=n.shouldHandleStateChanges,u=c===void 0?!0:c,d=n.storeKey,h=d===void 0?"store":d;n.withRef;var f=n.forwardRef,p=f===void 0?!1:f,g=n.context,v=g===void 0?Zu:g,m=si(n,lv),b=v;return function(I){var T=I.displayName||I.name||"Component",D=i(T),F=A({},m,{getDisplayName:i,methodName:o,renderCountProp:l,shouldHandleStateChanges:u,storeKey:h,displayName:D,wrappedComponentName:T,WrappedComponent:I}),L=m.pure;function k(B){return t(B.dispatch,F)}var S=L?De:function(B){return B()};function E(B){var J=De(function(){var xn=B.reactReduxForwardedRef,Es=si(B,cv);return[B.context,xn,Es]},[B]),z=J[0],se=J[1],_e=J[2],Fe=De(function(){return z&&z.Consumer&&av.isContextConsumer(X.createElement(z.Consumer,null))?z:b},[z,b]),be=Ui(Fe),Ze=!!B.store&&!!B.store.getState&&!!B.store.dispatch;be&&be.store;var ye=Ze?B.store:be.store,ut=De(function(){return k(ye)},[ye]),Yt=De(function(){if(!u)return dv;var xn=td(ye,Ze?null:be.subscription),Es=xn.notifyNestedSubs.bind(xn);return[xn,Es]},[ye,Ze,be]),dt=Yt[0],Lr=Yt[1],Fr=De(function(){return Ze?be:A({},be,{subscription:dt})},[Ze,be,dt]),Br=ko(hv,uv,gv),bs=Br[0],Jt=bs[0],ys=Br[1];if(Jt&&Jt.error)throw Jt.error;var sl=H(),Is=H(_e),Ur=H(),ol=H(!1),ws=S(function(){return Ur.current&&_e===Is.current?Ur.current:ut(ye.getState(),_e)},[ye,Jt,_e]);Bl(fv,[Is,sl,ol,_e,ws,Ur,Lr]),Bl(pv,[u,ye,dt,ut,Is,sl,ol,Ur,Lr,ys],[ye,dt,ut]);var Cs=De(function(){return X.createElement(I,A({},ws,{ref:se}))},[se,I,ws]),kp=De(function(){return u?X.createElement(Fe.Provider,{value:Fr},Cs):Cs},[Fe,Cs,Fr]);return kp}var R=L?X.memo(E):E;if(R.WrappedComponent=I,R.displayName=E.displayName=D,p){var O=X.forwardRef(function(J,z){return X.createElement(R,A({},J,{reactReduxForwardedRef:z}))});return O.displayName=D,O.WrappedComponent=I,Fl(O,I)}return Fl(R,I)}}function Ul(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function xs(t,e){if(Ul(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!Ul(t[n[i]],e[n[i]]))return!1;return!0}function mv(t,e){var n={},r=function(o){var a=t[o];typeof a=="function"&&(n[o]=function(){return e(a.apply(void 0,arguments))})};for(var i in t)r(i);return n}function Go(t){return function(n,r){var i=t(n,r);function s(){return i}return s.dependsOnOwnProps=!1,s}}function Wl(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function fd(t,e){return function(r,i){i.displayName;var s=function(a,l){return s.dependsOnOwnProps?s.mapToProps(a,l):s.mapToProps(a)};return s.dependsOnOwnProps=!0,s.mapToProps=function(a,l){s.mapToProps=t,s.dependsOnOwnProps=Wl(t);var c=s(a,l);return typeof c=="function"&&(s.mapToProps=c,s.dependsOnOwnProps=Wl(c),c=s(a,l)),c},s}}function _v(t){return typeof t=="function"?fd(t):void 0}function bv(t){return t?void 0:Go(function(e){return{dispatch:e}})}function yv(t){return t&&typeof t=="object"?Go(function(e){return mv(t,e)}):void 0}const Iv=[_v,bv,yv];function wv(t){return typeof t=="function"?fd(t):void 0}function Cv(t){return t?void 0:Go(function(){return{}})}const Ev=[wv,Cv];function Sv(t,e,n){return A({},n,t,e)}function Tv(t){return function(n,r){r.displayName;var i=r.pure,s=r.areMergedPropsEqual,o=!1,a;return function(c,u,d){var h=t(c,u,d);return o?(!i||!s(h,a))&&(a=h):(o=!0,a=h),a}}}function Dv(t){return typeof t=="function"?Tv(t):void 0}function xv(t){return t?void 0:function(){return Sv}}const Rv=[Dv,xv];var Pv=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Av(t,e,n,r){return function(s,o){return n(t(s,o),e(r,o),o)}}function Nv(t,e,n,r,i){var s=i.areStatesEqual,o=i.areOwnPropsEqual,a=i.areStatePropsEqual,l=!1,c,u,d,h,f;function p(y,I){return c=y,u=I,d=t(c,u),h=e(r,u),f=n(d,h,u),l=!0,f}function g(){return d=t(c,u),e.dependsOnOwnProps&&(h=e(r,u)),f=n(d,h,u),f}function v(){return t.dependsOnOwnProps&&(d=t(c,u)),e.dependsOnOwnProps&&(h=e(r,u)),f=n(d,h,u),f}function m(){var y=t(c,u),I=!a(y,d);return d=y,I&&(f=n(d,h,u)),f}function b(y,I){var T=!o(I,u),D=!s(y,c,I,u);return c=y,u=I,T&&D?g():T?v():D?m():f}return function(I,T){return l?b(I,T):p(I,T)}}function Ov(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,i=e.initMergeProps,s=si(e,Pv),o=n(t,s),a=r(t,s),l=i(t,s),c=s.pure?Nv:Av;return c(o,a,l,t,s)}var kv=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Rs(t,e,n){for(var r=e.length-1;r>=0;r--){var i=e[r](t);if(i)return i}return function(s,o){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+o.wrappedComponentName+".")}}function Mv(t,e){return t===e}function Lv(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?vv:n,i=e.mapStateToPropsFactories,s=i===void 0?Ev:i,o=e.mapDispatchToPropsFactories,a=o===void 0?Iv:o,l=e.mergePropsFactories,c=l===void 0?Rv:l,u=e.selectorFactory,d=u===void 0?Ov:u;return function(f,p,g,v){v===void 0&&(v={});var m=v,b=m.pure,y=b===void 0?!0:b,I=m.areStatesEqual,T=I===void 0?Mv:I,D=m.areOwnPropsEqual,F=D===void 0?xs:D,L=m.areStatePropsEqual,k=L===void 0?xs:L,S=m.areMergedPropsEqual,E=S===void 0?xs:S,R=si(m,kv),O=Rs(f,s,"mapStateToProps"),B=Rs(p,a,"mapDispatchToProps"),J=Rs(g,c,"mergeProps");return r(d,A({methodName:"connect",getDisplayName:function(se){return"Connect("+se+")"},shouldHandleStateChanges:!!f,initMapStateToProps:O,initMapDispatchToProps:B,initMergeProps:J,pure:y,areStatesEqual:T,areOwnPropsEqual:F,areStatePropsEqual:k,areMergedPropsEqual:E},R))}}const pd=Lv();Og(Ku);function Fv(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function gd(t,e){var n=ne(function(){return{inputs:e,result:t()}})[0],r=H(!0),i=H(n),s=r.current||!!(e&&i.current.inputs&&Fv(e,i.current.inputs)),o=s?i.current:{inputs:e,result:t()};return ve(function(){r.current=!1,i.current=o},[o]),o.result}function Bv(t,e){return gd(function(){return t},e)}var G=gd,P=Bv,Uv=!0,Ps="Invariant failed";function Wv(t,e){if(!t){if(Uv)throw new Error(Ps);var n=typeof e=="function"?e():e,r=n?"".concat(Ps,": ").concat(n):Ps;throw new Error(r)}}var Ue=function(e){var n=e.top,r=e.right,i=e.bottom,s=e.left,o=r-s,a=i-n,l={top:n,right:r,bottom:i,left:s,width:o,height:a,x:s,y:n,center:{x:(r+s)/2,y:(i+n)/2}};return l},Vo=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},$l=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},$v=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},As={top:0,right:0,bottom:0,left:0},qo=function(e){var n=e.borderBox,r=e.margin,i=r===void 0?As:r,s=e.border,o=s===void 0?As:s,a=e.padding,l=a===void 0?As:a,c=Ue(Vo(n,i)),u=Ue($l(n,o)),d=Ue($l(u,l));return{marginBox:c,borderBox:Ue(n),paddingBox:u,contentBox:d,margin:i,border:o,padding:l}},Oe=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var i=Number(n);return isNaN(i)&&Wv(!1),i},Hv=function(){return{x:window.pageXOffset,y:window.pageYOffset}},oi=function(e,n){var r=e.borderBox,i=e.border,s=e.margin,o=e.padding,a=$v(r,n);return qo({borderBox:a,border:i,margin:s,padding:o})},ai=function(e,n){return n===void 0&&(n=Hv()),oi(e,n)},vd=function(e,n){var r={top:Oe(n.marginTop),right:Oe(n.marginRight),bottom:Oe(n.marginBottom),left:Oe(n.marginLeft)},i={top:Oe(n.paddingTop),right:Oe(n.paddingRight),bottom:Oe(n.paddingBottom),left:Oe(n.paddingLeft)},s={top:Oe(n.borderTopWidth),right:Oe(n.borderRightWidth),bottom:Oe(n.borderBottomWidth),left:Oe(n.borderLeftWidth)};return qo({borderBox:e,margin:r,padding:i,border:s})},md=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return vd(n,r)},Hl=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Gv(t,e){return!!(t===e||Hl(t)&&Hl(e))}function Vv(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!Gv(t[n],e[n]))return!1;return!0}function ce(t,e){e===void 0&&(e=Vv);var n,r=[],i,s=!1;function o(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return s&&n===this&&e(a,r)||(i=t.apply(this,a),s=!0,n=this,r=a),i}return o}var qv=function(e){var n=[],r=null,i=function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];n=a,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return i.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},i};const Kn=qv;function _d(t,e){}_d.bind(null,"warn");_d.bind(null,"error");function vt(){}function jv(t,e){return A({},t,{},e)}function ke(t,e,n){var r=e.map(function(i){var s=jv(n,i.options);return t.addEventListener(i.eventName,i.fn,s),function(){t.removeEventListener(i.eventName,i.fn,s)}});return function(){r.forEach(function(s){s()})}}var zv="Invariant failed";function li(t){this.message=t}li.prototype.toString=function(){return this.message};function w(t,e){if(!t)throw new li(zv)}var Kv=function(t){Ju(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.callbacks=null,r.unbind=vt,r.onWindowError=function(a){var l=r.getCallbacks();l.isDragging()&&l.tryAbort();var c=a.error;c instanceof li&&a.preventDefault()},r.getCallbacks=function(){if(!r.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return r.callbacks},r.setCallbacks=function(a){r.callbacks=a},r}var n=e.prototype;return n.componentDidMount=function(){this.unbind=ke(window,[{eventName:"error",fn:this.onWindowError}])},n.componentDidCatch=function(i){if(i instanceof li){this.setState({});return}throw i},n.componentWillUnmount=function(){this.unbind()},n.render=function(){return this.props.children(this.setCallbacks)},e}(X.Component),Yv=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,ci=function(e){return e+1},Jv=function(e){return`
  You have lifted an item in position `+ci(e.source.index)+`
`},bd=function(e,n){var r=e.droppableId===n.droppableId,i=ci(e.index),s=ci(n.index);return r?`
      You have moved the item from position `+i+`
      to position `+s+`
    `:`
    You have moved the item from position `+i+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+s+`
  `},yd=function(e,n,r){var i=n.droppableId===r.droppableId;return i?`
      The item `+e+`
      has been combined with `+r.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+r.draggableId+`
      in list `+r.droppableId+`
    `},Qv=function(e){var n=e.destination;if(n)return bd(e.source,n);var r=e.combine;return r?yd(e.draggableId,e.source,r):"You are over an area that cannot be dropped on"},Gl=function(e){return`
  The item has returned to its starting position
  of `+ci(e.index)+`
`},Xv=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+Gl(e.source)+`
    `;var n=e.destination,r=e.combine;return n?`
      You have dropped the item.
      `+bd(e.source,n)+`
    `:r?`
      You have dropped the item.
      `+yd(e.draggableId,e.source,r)+`
    `:`
    The item has been dropped while not over a drop area.
    `+Gl(e.source)+`
  `},Qr={dragHandleUsageInstructions:Yv,onDragStart:Jv,onDragUpdate:Qv,onDragEnd:Xv},ue={x:0,y:0},pe=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},xe=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},mt=function(e,n){return e.x===n.x&&e.y===n.y},bn=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},$t=function(e,n,r){var i;return r===void 0&&(r=0),i={},i[e]=n,i[e==="x"?"y":"x"]=r,i},Yn=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},Vl=function(e,n){return Math.min.apply(Math,n.map(function(r){return Yn(e,r)}))},Id=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},Zv=function(t,e){var n=Ue({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},wr=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},ql=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},em={top:0,right:0,bottom:0,left:0},tm=function(e,n){return n?wr(e,n.scroll.diff.displacement):e},nm=function(e,n,r){if(r&&r.increasedBy){var i;return A({},e,(i={},i[n.end]=e[n.end]+r.increasedBy[n.line],i))}return e},rm=function(e,n){return n&&n.shouldClipSubject?Zv(n.pageMarginBox,e):Ue(e)},ln=function(t){var e=t.page,n=t.withPlaceholder,r=t.axis,i=t.frame,s=tm(e.marginBox,i),o=nm(s,r,n),a=rm(o,i);return{page:e,withPlaceholder:n,active:a}},jo=function(t,e){t.frame||w(!1);var n=t.frame,r=xe(e,n.scroll.initial),i=bn(r),s=A({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:i},max:n.scroll.max}}),o=ln({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:s}),a=A({},t,{frame:s,subject:o});return a};function ui(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function zo(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function Rt(t,e){if(t.find)return t.find(e);var n=zo(t,e);if(n!==-1)return t[n]}function wd(t){return Array.prototype.slice.call(t)}var Cd=ce(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),Ed=ce(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),Xi=ce(function(t){return ui(t)}),im=ce(function(t){return ui(t)}),yn=ce(function(t,e){var n=im(e).filter(function(r){return t===r.descriptor.droppableId}).sort(function(r,i){return r.descriptor.index-i.descriptor.index});return n});function Ko(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function Zi(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var es=ce(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),sm=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.insideDestination,s=t.previousImpact;if(!r.isCombineEnabled)return null;var o=Ko(s);if(!o)return null;function a(g){var v={type:"COMBINE",combine:{draggableId:g,droppableId:r.descriptor.id}};return A({},s,{at:v})}var l=s.displaced.all,c=l.length?l[0]:null;if(e)return c?a(c):null;var u=es(n,i);if(!c){if(!u.length)return null;var d=u[u.length-1];return a(d.descriptor.id)}var h=zo(u,function(g){return g.descriptor.id===c});h===-1&&w(!1);var f=h-1;if(f<0)return null;var p=u[f];return a(p.descriptor.id)},In=function(t,e){return t.descriptor.droppableId===e.descriptor.id},Sd={point:ue,value:0},Jn={invisible:{},visible:{},all:[]},om={displaced:Jn,displacedBy:Sd,at:null},Me=function(t,e){return function(n){return t<=n&&n<=e}},Td=function(t){var e=Me(t.top,t.bottom),n=Me(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);if(i)return!0;var s=e(r.top)||e(r.bottom),o=n(r.left)||n(r.right),a=s&&o;if(a)return!0;var l=r.top<t.top&&r.bottom>t.bottom,c=r.left<t.left&&r.right>t.right,u=l&&c;if(u)return!0;var d=l&&o||c&&s;return d}},am=function(t){var e=Me(t.top,t.bottom),n=Me(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);return i}},Yo={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},Dd={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},lm=function(t){return function(e){var n=Me(e.top,e.bottom),r=Me(e.left,e.right);return function(i){return t===Yo?n(i.top)&&n(i.bottom):r(i.left)&&r(i.right)}}},cm=function(e,n){var r=n.frame?n.frame.scroll.diff.displacement:ue;return wr(e,r)},um=function(e,n,r){return n.subject.active?r(n.subject.active)(e):!1},dm=function(e,n,r){return r(n)(e)},Jo=function(e){var n=e.target,r=e.destination,i=e.viewport,s=e.withDroppableDisplacement,o=e.isVisibleThroughFrameFn,a=s?cm(n,r):n;return um(a,r,o)&&dm(a,i,o)},hm=function(e){return Jo(A({},e,{isVisibleThroughFrameFn:Td}))},xd=function(e){return Jo(A({},e,{isVisibleThroughFrameFn:am}))},fm=function(e){return Jo(A({},e,{isVisibleThroughFrameFn:lm(e.destination.axis)}))},pm=function(e,n,r){if(typeof r=="boolean")return r;if(!n)return!0;var i=n.invisible,s=n.visible;if(i[e])return!1;var o=s[e];return o?o.shouldAnimate:!0};function gm(t,e){var n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return Ue(Vo(n,r))}function Qn(t){var e=t.afterDragging,n=t.destination,r=t.displacedBy,i=t.viewport,s=t.forceShouldAnimate,o=t.last;return e.reduce(function(l,c){var u=gm(c,r),d=c.descriptor.id;l.all.push(d);var h=hm({target:u,destination:n,viewport:i,withDroppableDisplacement:!0});if(!h)return l.invisible[c.descriptor.id]=!0,l;var f=pm(d,o,s),p={draggableId:d,shouldAnimate:f};return l.visible[d]=p,l},{all:[],visible:{},invisible:{}})}function vm(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function jl(t){var e=t.insideDestination,n=t.inHomeList,r=t.displacedBy,i=t.destination,s=vm(e,{inHomeList:n});return{displaced:Jn,displacedBy:r,at:{type:"REORDER",destination:{droppableId:i.descriptor.id,index:s}}}}function di(t){var e=t.draggable,n=t.insideDestination,r=t.destination,i=t.viewport,s=t.displacedBy,o=t.last,a=t.index,l=t.forceShouldAnimate,c=In(e,r);if(a==null)return jl({insideDestination:n,inHomeList:c,displacedBy:s,destination:r});var u=Rt(n,function(g){return g.descriptor.index===a});if(!u)return jl({insideDestination:n,inHomeList:c,displacedBy:s,destination:r});var d=es(e,n),h=n.indexOf(u),f=d.slice(h),p=Qn({afterDragging:f,destination:r,displacedBy:s,last:o,viewport:i.frame,forceShouldAnimate:l});return{displaced:p,displacedBy:s,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:a}}}}function St(t,e){return!!e.effected[t]}var mm=function(t){var e=t.isMovingForward,n=t.destination,r=t.draggables,i=t.combine,s=t.afterCritical;if(!n.isCombineEnabled)return null;var o=i.draggableId,a=r[o],l=a.descriptor.index,c=St(o,s);return c?e?l:l-1:e?l+1:l},_m=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.insideDestination,i=t.location;if(!r.length)return null;var s=i.index,o=e?s+1:s-1,a=r[0].descriptor.index,l=r[r.length-1].descriptor.index,c=n?l:l+1;return o<a||o>c?null:o},bm=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.draggable,i=t.draggables,s=t.destination,o=t.insideDestination,a=t.previousImpact,l=t.viewport,c=t.afterCritical,u=a.at;if(u||w(!1),u.type==="REORDER"){var d=_m({isMovingForward:e,isInHomeList:n,location:u.destination,insideDestination:o});return d==null?null:di({draggable:r,insideDestination:o,destination:s,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:d})}var h=mm({isMovingForward:e,destination:s,displaced:a.displaced,draggables:i,combine:u.combine,afterCritical:c});return h==null?null:di({draggable:r,insideDestination:o,destination:s,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:h})},ym=function(t){var e=t.displaced,n=t.afterCritical,r=t.combineWith,i=t.displacedBy,s=!!(e.visible[r]||e.invisible[r]);return St(r,n)?s?ue:bn(i.point):s?i.point:ue},Im=function(t){var e=t.afterCritical,n=t.impact,r=t.draggables,i=Zi(n);i||w(!1);var s=i.draggableId,o=r[s].page.borderBox.center,a=ym({displaced:n.displaced,afterCritical:e,combineWith:s,displacedBy:n.displacedBy});return pe(o,a)},Rd=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},wm=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},Qo=function(e,n,r){return n[e.crossAxisStart]+r.margin[e.crossAxisStart]+r.borderBox[e.crossAxisSize]/2},zl=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return $t(n.line,r.marginBox[n.end]+Rd(n,i),Qo(n,r.marginBox,i))},Kl=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return $t(n.line,r.marginBox[n.start]-wm(n,i),Qo(n,r.marginBox,i))},Cm=function(e){var n=e.axis,r=e.moveInto,i=e.isMoving;return $t(n.line,r.contentBox[n.start]+Rd(n,i),Qo(n,r.contentBox,i))},Em=function(t){var e=t.impact,n=t.draggable,r=t.draggables,i=t.droppable,s=t.afterCritical,o=yn(i.descriptor.id,r),a=n.page,l=i.axis;if(!o.length)return Cm({axis:l,moveInto:i.page,isMoving:a});var c=e.displaced,u=e.displacedBy,d=c.all[0];if(d){var h=r[d];if(St(d,s))return Kl({axis:l,moveRelativeTo:h.page,isMoving:a});var f=oi(h.page,u.point);return Kl({axis:l,moveRelativeTo:f,isMoving:a})}var p=o[o.length-1];if(p.descriptor.id===n.descriptor.id)return a.borderBox.center;if(St(p.descriptor.id,s)){var g=oi(p.page,bn(s.displacedBy.point));return zl({axis:l,moveRelativeTo:g,isMoving:a})}return zl({axis:l,moveRelativeTo:p.page,isMoving:a})},ao=function(t,e){var n=t.frame;return n?pe(e,n.scroll.diff.displacement):e},Sm=function(e){var n=e.impact,r=e.draggable,i=e.droppable,s=e.draggables,o=e.afterCritical,a=r.page.borderBox.center,l=n.at;return!i||!l?a:l.type==="REORDER"?Em({impact:n,draggable:r,draggables:s,droppable:i,afterCritical:o}):Im({impact:n,draggables:s,afterCritical:o})},ts=function(t){var e=Sm(t),n=t.droppable,r=n?ao(n,e):e;return r},Pd=function(t,e){var n=xe(e,t.scroll.initial),r=bn(n),i=Ue({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),s={frame:i,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}};return s};function Yl(t,e){return t.map(function(n){return e[n]})}function Tm(t,e){for(var n=0;n<e.length;n++){var r=e[n].visible[t];if(r)return r}return null}var Dm=function(t){var e=t.impact,n=t.viewport,r=t.destination,i=t.draggables,s=t.maxScrollChange,o=Pd(n,pe(n.scroll.current,s)),a=r.frame?jo(r,pe(r.frame.scroll.current,s)):r,l=e.displaced,c=Qn({afterDragging:Yl(l.all,i),destination:r,displacedBy:e.displacedBy,viewport:o.frame,last:l,forceShouldAnimate:!1}),u=Qn({afterDragging:Yl(l.all,i),destination:a,displacedBy:e.displacedBy,viewport:n.frame,last:l,forceShouldAnimate:!1}),d={},h={},f=[l,c,u];l.all.forEach(function(g){var v=Tm(g,f);if(v){h[g]=v;return}d[g]=!0});var p=A({},e,{displaced:{all:l.all,invisible:d,visible:h}});return p},xm=function(t,e){return pe(t.scroll.diff.displacement,e)},Xo=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.viewport,i=xm(r,e),s=xe(i,n.page.borderBox.center);return pe(n.client.borderBox.center,s)},Ad=function(t){var e=t.draggable,n=t.destination,r=t.newPageBorderBoxCenter,i=t.viewport,s=t.withDroppableDisplacement,o=t.onlyOnMainAxis,a=o===void 0?!1:o,l=xe(r,e.page.borderBox.center),c=wr(e.page.borderBox,l),u={target:c,destination:n,withDroppableDisplacement:s,viewport:i};return a?fm(u):xd(u)},Rm=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.draggables,s=t.previousImpact,o=t.viewport,a=t.previousPageBorderBoxCenter,l=t.previousClientSelection,c=t.afterCritical;if(!r.isEnabled)return null;var u=yn(r.descriptor.id,i),d=In(n,r),h=sm({isMovingForward:e,draggable:n,destination:r,insideDestination:u,previousImpact:s})||bm({isMovingForward:e,isInHomeList:d,draggable:n,draggables:i,destination:r,insideDestination:u,previousImpact:s,viewport:o,afterCritical:c});if(!h)return null;var f=ts({impact:h,draggable:n,droppable:r,draggables:i,afterCritical:c}),p=Ad({draggable:n,destination:r,newPageBorderBoxCenter:f,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(p){var g=Xo({pageBorderBoxCenter:f,draggable:n,viewport:o});return{clientSelection:g,impact:h,scrollJumpRequest:null}}var v=xe(f,a),m=Dm({impact:h,viewport:o,destination:r,draggables:i,maxScrollChange:v});return{clientSelection:l,impact:m,scrollJumpRequest:v}},Ie=function(e){var n=e.subject.active;return n||w(!1),n},Pm=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,r=t.source,i=t.droppables,s=t.viewport,o=r.subject.active;if(!o)return null;var a=r.axis,l=Me(o[a.start],o[a.end]),c=Xi(i).filter(function(d){return d!==r}).filter(function(d){return d.isEnabled}).filter(function(d){return!!d.subject.active}).filter(function(d){return Td(s.frame)(Ie(d))}).filter(function(d){var h=Ie(d);return e?o[a.crossAxisEnd]<h[a.crossAxisEnd]:h[a.crossAxisStart]<o[a.crossAxisStart]}).filter(function(d){var h=Ie(d),f=Me(h[a.start],h[a.end]);return l(h[a.start])||l(h[a.end])||f(o[a.start])||f(o[a.end])}).sort(function(d,h){var f=Ie(d)[a.crossAxisStart],p=Ie(h)[a.crossAxisStart];return e?f-p:p-f}).filter(function(d,h,f){return Ie(d)[a.crossAxisStart]===Ie(f[0])[a.crossAxisStart]});if(!c.length)return null;if(c.length===1)return c[0];var u=c.filter(function(d){var h=Me(Ie(d)[a.start],Ie(d)[a.end]);return h(n[a.line])});return u.length===1?u[0]:u.length>1?u.sort(function(d,h){return Ie(d)[a.start]-Ie(h)[a.start]})[0]:c.sort(function(d,h){var f=Vl(n,ql(Ie(d))),p=Vl(n,ql(Ie(h)));return f!==p?f-p:Ie(d)[a.start]-Ie(h)[a.start]})[0]},Jl=function(e,n){var r=e.page.borderBox.center;return St(e.descriptor.id,n)?xe(r,n.displacedBy.point):r},Am=function(e,n){var r=e.page.borderBox;return St(e.descriptor.id,n)?wr(r,bn(n.displacedBy.point)):r},Nm=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,r=t.destination,i=t.insideDestination,s=t.afterCritical,o=i.filter(function(a){return xd({target:Am(a,s),destination:r,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(a,l){var c=Yn(e,ao(r,Jl(a,s))),u=Yn(e,ao(r,Jl(l,s)));return c<u?-1:u<c?1:a.descriptor.index-l.descriptor.index});return o[0]||null},Cr=ce(function(e,n){var r=n[e.line];return{value:r,point:$t(e.line,r)}}),Om=function(e,n,r){var i=e.axis;if(e.descriptor.mode==="virtual")return $t(i.line,n[i.line]);var s=e.subject.page.contentBox[i.size],o=yn(e.descriptor.id,r),a=o.reduce(function(u,d){return u+d.client.marginBox[i.size]},0),l=a+n[i.line],c=l-s;return c<=0?null:$t(i.line,c)},Nd=function(e,n){return A({},e,{scroll:A({},e.scroll,{max:n})})},Od=function(e,n,r){var i=e.frame;In(n,e)&&w(!1),e.subject.withPlaceholder&&w(!1);var s=Cr(e.axis,n.displaceBy).point,o=Om(e,s,r),a={placeholderSize:s,increasedBy:o,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!i){var l=ln({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:e.frame});return A({},e,{subject:l})}var c=o?pe(i.scroll.max,o):i.scroll.max,u=Nd(i,c),d=ln({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:u});return A({},e,{subject:d,frame:u})},km=function(e){var n=e.subject.withPlaceholder;n||w(!1);var r=e.frame;if(!r){var i=ln({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return A({},e,{subject:i})}var s=n.oldFrameMaxScroll;s||w(!1);var o=Nd(r,s),a=ln({page:e.subject.page,axis:e.axis,frame:o,withPlaceholder:null});return A({},e,{subject:a,frame:o})},Mm=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,r=t.insideDestination,i=t.draggable,s=t.draggables,o=t.destination,a=t.viewport,l=t.afterCritical;if(!n){if(r.length)return null;var c={displaced:Jn,displacedBy:Sd,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:0}}},u=ts({impact:c,draggable:i,droppable:o,draggables:s,afterCritical:l}),d=In(i,o)?o:Od(o,i,s),h=Ad({draggable:i,destination:d,newPageBorderBoxCenter:u,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return h?c:null}var f=e[o.axis.line]<=n.page.borderBox.center[o.axis.line],p=function(){var v=n.descriptor.index;return n.descriptor.id===i.descriptor.id||f?v:v+1}(),g=Cr(o.axis,i.displaceBy);return di({draggable:i,insideDestination:r,destination:o,viewport:a,displacedBy:g,last:Jn,index:p})},Lm=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,r=t.draggable,i=t.isOver,s=t.draggables,o=t.droppables,a=t.viewport,l=t.afterCritical,c=Pm({isMovingForward:e,pageBorderBoxCenter:n,source:i,droppables:o,viewport:a});if(!c)return null;var u=yn(c.descriptor.id,s),d=Nm({pageBorderBoxCenter:n,viewport:a,destination:c,insideDestination:u,afterCritical:l}),h=Mm({previousPageBorderBoxCenter:n,destination:c,draggable:r,draggables:s,moveRelativeTo:d,insideDestination:u,viewport:a,afterCritical:l});if(!h)return null;var f=ts({impact:h,draggable:r,droppable:c,draggables:s,afterCritical:l}),p=Xo({pageBorderBoxCenter:f,draggable:r,viewport:a});return{clientSelection:p,impact:h,scrollJumpRequest:null}},Re=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},Fm=function(e,n){var r=Re(e);return r?n[r]:null},Bm=function(t){var e=t.state,n=t.type,r=Fm(e.impact,e.dimensions.droppables),i=!!r,s=e.dimensions.droppables[e.critical.droppable.id],o=r||s,a=o.axis.direction,l=a==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||a==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(l&&!i)return null;var c=n==="MOVE_DOWN"||n==="MOVE_RIGHT",u=e.dimensions.draggables[e.critical.draggable.id],d=e.current.page.borderBoxCenter,h=e.dimensions,f=h.draggables,p=h.droppables;return l?Rm({isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,destination:o,draggables:f,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):Lm({isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,isOver:o,draggables:f,droppables:p,viewport:e.viewport,afterCritical:e.afterCritical})};function Nt(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function kd(t){var e=Me(t.top,t.bottom),n=Me(t.left,t.right);return function(i){return e(i.y)&&n(i.x)}}function Um(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function Wm(t){var e=t.pageBorderBox,n=t.draggable,r=t.candidates,i=n.page.borderBox.center,s=r.map(function(o){var a=o.axis,l=$t(o.axis.line,e.center[a.line],o.page.borderBox.center[a.crossAxisLine]);return{id:o.descriptor.id,distance:Yn(i,l)}}).sort(function(o,a){return a.distance-o.distance});return s[0]?s[0].id:null}function $m(t){var e=t.pageBorderBox,n=t.draggable,r=t.droppables,i=Xi(r).filter(function(s){if(!s.isEnabled)return!1;var o=s.subject.active;if(!o||!Um(e,o))return!1;if(kd(o)(e.center))return!0;var a=s.axis,l=o.center[a.crossAxisLine],c=e[a.crossAxisStart],u=e[a.crossAxisEnd],d=Me(o[a.crossAxisStart],o[a.crossAxisEnd]),h=d(c),f=d(u);return!h&&!f?!0:h?c<l:u>l});return i.length?i.length===1?i[0].descriptor.id:Wm({pageBorderBox:e,draggable:n,candidates:i}):null}var Md=function(e,n){return Ue(wr(e,n))},Hm=function(t,e){var n=t.frame;return n?Md(e,n.scroll.diff.value):e};function Ld(t){var e=t.displaced,n=t.id;return!!(e.visible[n]||e.invisible[n])}function Gm(t){var e=t.draggable,n=t.closest,r=t.inHomeList;return n?r&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var Vm=function(t){var e=t.pageBorderBoxWithDroppableScroll,n=t.draggable,r=t.destination,i=t.insideDestination,s=t.last,o=t.viewport,a=t.afterCritical,l=r.axis,c=Cr(r.axis,n.displaceBy),u=c.value,d=e[l.start],h=e[l.end],f=es(n,i),p=Rt(f,function(v){var m=v.descriptor.id,b=v.page.borderBox.center[l.line],y=St(m,a),I=Ld({displaced:s,id:m});return y?I?h<=b:d<b-u:I?h<=b+u:d<b}),g=Gm({draggable:n,closest:p,inHomeList:In(n,r)});return di({draggable:n,insideDestination:i,destination:r,viewport:o,last:s,displacedBy:c,index:g})},qm=4,jm=function(t){var e=t.draggable,n=t.pageBorderBoxWithDroppableScroll,r=t.previousImpact,i=t.destination,s=t.insideDestination,o=t.afterCritical;if(!i.isCombineEnabled)return null;var a=i.axis,l=Cr(i.axis,e.displaceBy),c=l.value,u=n[a.start],d=n[a.end],h=es(e,s),f=Rt(h,function(g){var v=g.descriptor.id,m=g.page.borderBox,b=m[a.size],y=b/qm,I=St(v,o),T=Ld({displaced:r.displaced,id:v});return I?T?d>m[a.start]+y&&d<m[a.end]-y:u>m[a.start]-c+y&&u<m[a.end]-c-y:T?d>m[a.start]+c+y&&d<m[a.end]+c-y:u>m[a.start]+y&&u<m[a.end]-y});if(!f)return null;var p={displacedBy:l,displaced:r.displaced,at:{type:"COMBINE",combine:{draggableId:f.descriptor.id,droppableId:i.descriptor.id}}};return p},Fd=function(t){var e=t.pageOffset,n=t.draggable,r=t.draggables,i=t.droppables,s=t.previousImpact,o=t.viewport,a=t.afterCritical,l=Md(n.page.borderBox,e),c=$m({pageBorderBox:l,draggable:n,droppables:i});if(!c)return om;var u=i[c],d=yn(u.descriptor.id,r),h=Hm(u,l);return jm({pageBorderBoxWithDroppableScroll:h,draggable:n,previousImpact:s,destination:u,insideDestination:d,afterCritical:a})||Vm({pageBorderBoxWithDroppableScroll:h,draggable:n,destination:u,insideDestination:d,last:s.displaced,viewport:o,afterCritical:a})},Zo=function(t,e){var n;return A({},t,(n={},n[e.descriptor.id]=e,n))},zm=function(e){var n=e.previousImpact,r=e.impact,i=e.droppables,s=Re(n),o=Re(r);if(!s||s===o)return i;var a=i[s];if(!a.subject.withPlaceholder)return i;var l=km(a);return Zo(i,l)},Km=function(t){var e=t.draggable,n=t.draggables,r=t.droppables,i=t.previousImpact,s=t.impact,o=zm({previousImpact:i,impact:s,droppables:r}),a=Re(s);if(!a)return o;var l=r[a];if(In(e,l)||l.subject.withPlaceholder)return o;var c=Od(l,e,n);return Zo(o,c)},Bn=function(t){var e=t.state,n=t.clientSelection,r=t.dimensions,i=t.viewport,s=t.impact,o=t.scrollJumpRequest,a=i||e.viewport,l=r||e.dimensions,c=n||e.current.client.selection,u=xe(c,e.initial.client.selection),d={offset:u,selection:c,borderBoxCenter:pe(e.initial.client.borderBoxCenter,u)},h={selection:pe(d.selection,a.scroll.current),borderBoxCenter:pe(d.borderBoxCenter,a.scroll.current),offset:pe(d.offset,a.scroll.diff.value)},f={client:d,page:h};if(e.phase==="COLLECTING")return A({phase:"COLLECTING"},e,{dimensions:l,viewport:a,current:f});var p=l.draggables[e.critical.draggable.id],g=s||Fd({pageOffset:h.offset,draggable:p,draggables:l.draggables,droppables:l.droppables,previousImpact:e.impact,viewport:a,afterCritical:e.afterCritical}),v=Km({draggable:p,impact:g,previousImpact:e.impact,draggables:l.draggables,droppables:l.droppables}),m=A({},e,{current:f,dimensions:{draggables:l.draggables,droppables:v},impact:g,viewport:a,scrollJumpRequest:o||null,forceShouldAnimate:o?!1:null});return m};function Ym(t,e){return t.map(function(n){return e[n]})}var Bd=function(t){var e=t.impact,n=t.viewport,r=t.draggables,i=t.destination,s=t.forceShouldAnimate,o=e.displaced,a=Ym(o.all,r),l=Qn({afterDragging:a,destination:i,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:s,last:o});return A({},e,{displaced:l})},Ud=function(t){var e=t.impact,n=t.draggable,r=t.droppable,i=t.draggables,s=t.viewport,o=t.afterCritical,a=ts({impact:e,draggable:n,draggables:i,droppable:r,afterCritical:o});return Xo({pageBorderBoxCenter:a,draggable:n,viewport:s})},Wd=function(t){var e=t.state,n=t.dimensions,r=t.viewport;e.movementMode!=="SNAP"&&w(!1);var i=e.impact,s=r||e.viewport,o=n||e.dimensions,a=o.draggables,l=o.droppables,c=a[e.critical.draggable.id],u=Re(i);u||w(!1);var d=l[u],h=Bd({impact:i,viewport:s,destination:d,draggables:a}),f=Ud({impact:h,draggable:c,droppable:d,draggables:a,viewport:s,afterCritical:e.afterCritical});return Bn({impact:h,clientSelection:f,state:e,dimensions:o,viewport:s})},Jm=function(t){return{index:t.index,droppableId:t.droppableId}},$d=function(t){var e=t.draggable,n=t.home,r=t.draggables,i=t.viewport,s=Cr(n.axis,e.displaceBy),o=yn(n.descriptor.id,r),a=o.indexOf(e);a===-1&&w(!1);var l=o.slice(a+1),c=l.reduce(function(f,p){return f[p.descriptor.id]=!0,f},{}),u={inVirtualList:n.descriptor.mode==="virtual",displacedBy:s,effected:c},d=Qn({afterDragging:l,destination:n,displacedBy:s,last:null,viewport:i.frame,forceShouldAnimate:!1}),h={displaced:d,displacedBy:s,at:{type:"REORDER",destination:Jm(e.descriptor)}};return{impact:h,afterCritical:u}},Qm=function(t,e){return{draggables:t.draggables,droppables:Zo(t.droppables,e)}},Xm=function(t){var e=t.draggable,n=t.offset,r=t.initialWindowScroll,i=oi(e.client,n),s=ai(i,r),o=A({},e,{placeholder:A({},e.placeholder,{client:i}),client:i,page:s});return o},Zm=function(t){var e=t.frame;return e||w(!1),e},e_=function(t){var e=t.additions,n=t.updatedDroppables,r=t.viewport,i=r.scroll.diff.value;return e.map(function(s){var o=s.descriptor.droppableId,a=n[o],l=Zm(a),c=l.scroll.diff.value,u=pe(i,c),d=Xm({draggable:s,offset:u,initialWindowScroll:r.scroll.initial});return d})},t_=function(t){var e=t.state,n=t.published,r=n.modified.map(function(y){var I=e.dimensions.droppables[y.droppableId],T=jo(I,y.scroll);return T}),i=A({},e.dimensions.droppables,{},Cd(r)),s=Ed(e_({additions:n.additions,updatedDroppables:i,viewport:e.viewport})),o=A({},e.dimensions.draggables,{},s);n.removals.forEach(function(y){delete o[y]});var a={droppables:i,draggables:o},l=Re(e.impact),c=l?a.droppables[l]:null,u=a.draggables[e.critical.draggable.id],d=a.droppables[e.critical.droppable.id],h=$d({draggable:u,home:d,draggables:o,viewport:e.viewport}),f=h.impact,p=h.afterCritical,g=c&&c.isCombineEnabled?e.impact:f,v=Fd({pageOffset:e.current.page.offset,draggable:a.draggables[e.critical.draggable.id],draggables:a.draggables,droppables:a.droppables,previousImpact:g,viewport:e.viewport,afterCritical:p}),m=A({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:v,onLiftImpact:f,dimensions:a,afterCritical:p,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return m;var b=A({phase:"DROP_PENDING"},m,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return b},lo=function(e){return e.movementMode==="SNAP"},Ns=function(e,n,r){var i=Qm(e.dimensions,n);return!lo(e)||r?Bn({state:e,dimensions:i}):Wd({state:e,dimensions:i})};function Os(t){return t.isDragging&&t.movementMode==="SNAP"?A({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var Ql={phase:"IDLE",completed:null,shouldFlush:!1},n_=function(t,e){if(t===void 0&&(t=Ql),e.type==="FLUSH")return A({},Ql,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&w(!1);var n=e.payload,r=n.critical,i=n.clientSelection,s=n.viewport,o=n.dimensions,a=n.movementMode,l=o.draggables[r.draggable.id],c=o.droppables[r.droppable.id],u={selection:i,borderBoxCenter:l.client.borderBox.center,offset:ue},d={client:u,page:{selection:pe(u.selection,s.scroll.initial),borderBoxCenter:pe(u.selection,s.scroll.initial),offset:pe(u.selection,s.scroll.diff.value)}},h=Xi(o.droppables).every(function(ys){return!ys.isFixedOnPage}),f=$d({draggable:l,home:c,draggables:o.draggables,viewport:s}),p=f.impact,g=f.afterCritical,v={phase:"DRAGGING",isDragging:!0,critical:r,movementMode:a,dimensions:o,initial:d,current:d,isWindowScrollAllowed:h,impact:p,afterCritical:g,onLiftImpact:p,viewport:s,scrollJumpRequest:null,forceShouldAnimate:null};return v}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&w(!1);var m=A({phase:"COLLECTING"},t,{phase:"COLLECTING"});return m}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||w(!1),t_({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Nt(t)||w(!1);var b=e.payload.client;return mt(b,t.current.client.selection)?t:Bn({state:t,clientSelection:b,impact:lo(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return Os(t);Nt(t)||w(!1);var y=e.payload,I=y.id,T=y.newScroll,D=t.dimensions.droppables[I];if(!D)return t;var F=jo(D,T);return Ns(t,F,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Nt(t)||w(!1);var L=e.payload,k=L.id,S=L.isEnabled,E=t.dimensions.droppables[k];E||w(!1),E.isEnabled===S&&w(!1);var R=A({},E,{isEnabled:S});return Ns(t,R,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Nt(t)||w(!1);var O=e.payload,B=O.id,J=O.isCombineEnabled,z=t.dimensions.droppables[B];z||w(!1),z.isCombineEnabled===J&&w(!1);var se=A({},z,{isCombineEnabled:J});return Ns(t,se,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Nt(t)||w(!1),t.isWindowScrollAllowed||w(!1);var _e=e.payload.newScroll;if(mt(t.viewport.scroll.current,_e))return Os(t);var Fe=Pd(t.viewport,_e);return lo(t)?Wd({state:t,viewport:Fe}):Bn({state:t,viewport:Fe})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Nt(t))return t;var be=e.payload.maxScroll;if(mt(be,t.viewport.scroll.max))return t;var Ze=A({},t.viewport,{scroll:A({},t.viewport.scroll,{max:be})});return A({phase:"DRAGGING"},t,{viewport:Ze})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&w(!1);var ye=Bm({state:t,type:e.type});return ye?Bn({state:t,impact:ye.impact,clientSelection:ye.clientSelection,scrollJumpRequest:ye.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var ut=e.payload.reason;t.phase!=="COLLECTING"&&w(!1);var Yt=A({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:ut});return Yt}if(e.type==="DROP_ANIMATE"){var dt=e.payload,Lr=dt.completed,Fr=dt.dropDuration,Br=dt.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||w(!1);var bs={phase:"DROP_ANIMATING",completed:Lr,dropDuration:Fr,newHomeClientOffset:Br,dimensions:t.dimensions};return bs}if(e.type==="DROP_COMPLETE"){var Jt=e.payload.completed;return{phase:"IDLE",completed:Jt,shouldFlush:!1}}return t},r_=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},i_=function(e){return{type:"LIFT",payload:e}},s_=function(e){return{type:"INITIAL_PUBLISH",payload:e}},o_=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},a_=function(){return{type:"COLLECTION_STARTING",payload:null}},l_=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},c_=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},u_=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},Hd=function(e){return{type:"MOVE",payload:e}},d_=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},h_=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},f_=function(){return{type:"MOVE_UP",payload:null}},p_=function(){return{type:"MOVE_DOWN",payload:null}},g_=function(){return{type:"MOVE_RIGHT",payload:null}},v_=function(){return{type:"MOVE_LEFT",payload:null}},ea=function(){return{type:"FLUSH",payload:null}},m_=function(e){return{type:"DROP_ANIMATE",payload:e}},ta=function(e){return{type:"DROP_COMPLETE",payload:e}},Gd=function(e){return{type:"DROP",payload:e}},__=function(e){return{type:"DROP_PENDING",payload:e}},Vd=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},b_=function(t){return function(e){var n=e.getState,r=e.dispatch;return function(i){return function(s){if(s.type!=="LIFT"){i(s);return}var o=s.payload,a=o.id,l=o.clientSelection,c=o.movementMode,u=n();u.phase==="DROP_ANIMATING"&&r(ta({completed:u.completed})),n().phase!=="IDLE"&&w(!1),r(ea()),r(r_({draggableId:a,movementMode:c}));var d={shouldPublishImmediately:c==="SNAP"},h={draggableId:a,scrollOptions:d},f=t.startPublishing(h),p=f.critical,g=f.dimensions,v=f.viewport;r(s_({critical:p,dimensions:g,clientSelection:l,movementMode:c,viewport:v}))}}}},y_=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},na={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Xn={opacity:{drop:0,combining:.7},scale:{drop:.75}},ra={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},At=ra.outOfTheWay+"s "+na.outOfTheWay,Un={fluid:"opacity "+At,snap:"transform "+At+", opacity "+At,drop:function(e){var n=e+"s "+na.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+At,placeholder:"height "+At+", width "+At+", margin "+At},Xl=function(e){return mt(e,ue)?null:"translate("+e.x+"px, "+e.y+"px)"},co={moveTo:Xl,drop:function(e,n){var r=Xl(e);return r?n?r+" scale("+Xn.scale.drop+")":r:null}},uo=ra.minDropTime,qd=ra.maxDropTime,I_=qd-uo,Zl=1500,w_=.6,C_=function(t){var e=t.current,n=t.destination,r=t.reason,i=Yn(e,n);if(i<=0)return uo;if(i>=Zl)return qd;var s=i/Zl,o=uo+I_*s,a=r==="CANCEL"?o*w_:o;return Number(a.toFixed(2))},E_=function(t){var e=t.impact,n=t.draggable,r=t.dimensions,i=t.viewport,s=t.afterCritical,o=r.draggables,a=r.droppables,l=Re(e),c=l?a[l]:null,u=a[n.descriptor.droppableId],d=Ud({impact:e,draggable:n,draggables:o,afterCritical:s,droppable:c||u,viewport:i}),h=xe(d,n.client.borderBox.center);return h},S_=function(t){var e=t.draggables,n=t.reason,r=t.lastImpact,i=t.home,s=t.viewport,o=t.onLiftImpact;if(!r.at||n!=="DROP"){var a=Bd({draggables:e,impact:o,destination:i,viewport:s,forceShouldAnimate:!0});return{impact:a,didDropInsideDroppable:!1}}if(r.at.type==="REORDER")return{impact:r,didDropInsideDroppable:!0};var l=A({},r,{displaced:Jn});return{impact:l,didDropInsideDroppable:!0}},T_=function(t){var e=t.getState,n=t.dispatch;return function(r){return function(i){if(i.type!=="DROP"){r(i);return}var s=e(),o=i.payload.reason;if(s.phase==="COLLECTING"){n(__({reason:o}));return}if(s.phase!=="IDLE"){var a=s.phase==="DROP_PENDING"&&s.isWaiting;a&&w(!1),s.phase==="DRAGGING"||s.phase==="DROP_PENDING"||w(!1);var l=s.critical,c=s.dimensions,u=c.draggables[s.critical.draggable.id],d=S_({reason:o,lastImpact:s.impact,afterCritical:s.afterCritical,onLiftImpact:s.onLiftImpact,home:s.dimensions.droppables[s.critical.droppable.id],viewport:s.viewport,draggables:s.dimensions.draggables}),h=d.impact,f=d.didDropInsideDroppable,p=f?Ko(h):null,g=f?Zi(h):null,v={index:l.draggable.index,droppableId:l.droppable.id},m={draggableId:u.descriptor.id,type:u.descriptor.type,source:v,reason:o,mode:s.movementMode,destination:p,combine:g},b=E_({impact:h,draggable:u,dimensions:c,viewport:s.viewport,afterCritical:s.afterCritical}),y={critical:s.critical,afterCritical:s.afterCritical,result:m,impact:h},I=!mt(s.current.client.offset,b)||!!m.combine;if(!I){n(ta({completed:y}));return}var T=C_({current:s.current.client.offset,destination:b,reason:o}),D={newHomeClientOffset:b,dropDuration:T,completed:y};n(m_(D))}}}},jd=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function D_(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function x_(t){var e=t.onWindowScroll;function n(){e(jd())}var r=Kn(n),i=D_(r),s=vt;function o(){return s!==vt}function a(){o()&&w(!1),s=ke(window,[i])}function l(){o()||w(!1),r.cancel(),s(),s=vt}return{start:a,stop:l,isActive:o}}var R_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},P_=function(t){var e=x_({onWindowScroll:function(r){t.dispatch(d_({newScroll:r}))}});return function(n){return function(r){!e.isActive()&&r.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&R_(r)&&e.stop(),n(r)}}},A_=function(t){var e=!1,n=!1,r=setTimeout(function(){n=!0}),i=function(o){e||n||(e=!0,t(o),clearTimeout(r))};return i.wasCalled=function(){return e},i},N_=function(){var t=[],e=function(s){var o=zo(t,function(c){return c.timerId===s});o===-1&&w(!1);var a=t.splice(o,1),l=a[0];l.callback()},n=function(s){var o=setTimeout(function(){return e(o)}),a={timerId:o,callback:s};t.push(a)},r=function(){if(t.length){var s=[].concat(t);t.length=0,s.forEach(function(o){clearTimeout(o.timerId),o.callback()})}};return{add:n,flush:r}},O_=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},k_=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},M_=function(e,n){if(e===n)return!0;var r=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,i=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return r&&i},Rn=function(e,n){n()},$r=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},ks=function(e,n,r,i){if(!e){r(i(n));return}var s=A_(r),o={announce:s};e(n,o),s.wasCalled()||r(i(n))},L_=function(t,e){var n=N_(),r=null,i=function(h,f){r&&w(!1),Rn("onBeforeCapture",function(){var p=t().onBeforeCapture;if(p){var g={draggableId:h,mode:f};p(g)}})},s=function(h,f){r&&w(!1),Rn("onBeforeDragStart",function(){var p=t().onBeforeDragStart;p&&p($r(h,f))})},o=function(h,f){r&&w(!1);var p=$r(h,f);r={mode:f,lastCritical:h,lastLocation:p.source,lastCombine:null},n.add(function(){Rn("onDragStart",function(){return ks(t().onDragStart,p,e,Qr.onDragStart)})})},a=function(h,f){var p=Ko(f),g=Zi(f);r||w(!1);var v=!M_(h,r.lastCritical);v&&(r.lastCritical=h);var m=!O_(r.lastLocation,p);m&&(r.lastLocation=p);var b=!k_(r.lastCombine,g);if(b&&(r.lastCombine=g),!(!v&&!m&&!b)){var y=A({},$r(h,r.mode),{combine:g,destination:p});n.add(function(){Rn("onDragUpdate",function(){return ks(t().onDragUpdate,y,e,Qr.onDragUpdate)})})}},l=function(){r||w(!1),n.flush()},c=function(h){r||w(!1),r=null,Rn("onDragEnd",function(){return ks(t().onDragEnd,h,e,Qr.onDragEnd)})},u=function(){if(r){var h=A({},$r(r.lastCritical,r.mode),{combine:null,destination:null,reason:"CANCEL"});c(h)}};return{beforeCapture:i,beforeStart:s,start:o,update:a,flush:l,drop:c,abort:u}},F_=function(t,e){var n=L_(t,e);return function(r){return function(i){return function(s){if(s.type==="BEFORE_INITIAL_CAPTURE"){n.beforeCapture(s.payload.draggableId,s.payload.movementMode);return}if(s.type==="INITIAL_PUBLISH"){var o=s.payload.critical;n.beforeStart(o,s.payload.movementMode),i(s),n.start(o,s.payload.movementMode);return}if(s.type==="DROP_COMPLETE"){var a=s.payload.completed.result;n.flush(),i(s),n.drop(a);return}if(i(s),s.type==="FLUSH"){n.abort();return}var l=r.getState();l.phase==="DRAGGING"&&n.update(l.critical,l.impact)}}}},B_=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var r=t.getState();r.phase!=="DROP_ANIMATING"&&w(!1),t.dispatch(ta({completed:r.completed}))}}},U_=function(t){var e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(i){return function(s){if((s.type==="FLUSH"||s.type==="DROP_COMPLETE"||s.type==="DROP_ANIMATION_FINISHED")&&r(),i(s),s.type==="DROP_ANIMATE"){var o={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var l=t.getState();l.phase==="DROP_ANIMATING"&&t.dispatch(Vd())}};n=requestAnimationFrame(function(){n=null,e=ke(window,[o])})}}}},W_=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},$_=function(t){var e=!1;return function(){return function(n){return function(r){if(r.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(r.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(r.type==="DROP_COMPLETE"){e=!1;var i=r.payload.completed.result;i.combine&&t.tryShiftRecord(i.draggableId,i.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},H_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},G_=function(t){return function(e){return function(n){return function(r){if(H_(r)){t.stop(),n(r);return}if(r.type==="INITIAL_PUBLISH"){n(r);var i=e.getState();i.phase!=="DRAGGING"&&w(!1),t.start(i);return}n(r),t.scroll(e.getState())}}}},V_=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(Gd({reason:r.reason})))}}}},q_=Xu,j_=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,r=t.styleMarshal,i=t.getResponders,s=t.announce,o=t.autoScroller;return Qu(n_,q_(Pg(y_(r),W_(e),b_(e),T_,B_,U_,V_,G_(o),P_,$_(n),F_(i,s))))},Ms=function(){return{additions:{},removals:{},modified:{}}};function z_(t){var e=t.registry,n=t.callbacks,r=Ms(),i=null,s=function(){i||(n.collectionStarting(),i=requestAnimationFrame(function(){i=null;var u=r,d=u.additions,h=u.removals,f=u.modified,p=Object.keys(d).map(function(m){return e.draggable.getById(m).getDimension(ue)}).sort(function(m,b){return m.descriptor.index-b.descriptor.index}),g=Object.keys(f).map(function(m){var b=e.droppable.getById(m),y=b.callbacks.getScrollWhileDragging();return{droppableId:m,scroll:y}}),v={additions:p,removals:Object.keys(h),modified:g};r=Ms(),n.publish(v)}))},o=function(u){var d=u.descriptor.id;r.additions[d]=u,r.modified[u.descriptor.droppableId]=!0,r.removals[d]&&delete r.removals[d],s()},a=function(u){var d=u.descriptor;r.removals[d.id]=!0,r.modified[d.droppableId]=!0,r.additions[d.id]&&delete r.additions[d.id],s()},l=function(){i&&(cancelAnimationFrame(i),i=null,r=Ms())};return{add:o,remove:a,stop:l}}var zd=function(t){var e=t.scrollHeight,n=t.scrollWidth,r=t.height,i=t.width,s=xe({x:n,y:e},{x:i,y:r}),o={x:Math.max(0,s.x),y:Math.max(0,s.y)};return o},Kd=function(){var t=document.documentElement;return t||w(!1),t},Yd=function(){var t=Kd(),e=zd({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},K_=function(){var t=jd(),e=Yd(),n=t.y,r=t.x,i=Kd(),s=i.clientWidth,o=i.clientHeight,a=r+s,l=n+o,c=Ue({top:n,left:r,right:a,bottom:l}),u={frame:c,scroll:{initial:t,current:t,max:e,diff:{value:ue,displacement:ue}}};return u},Y_=function(t){var e=t.critical,n=t.scrollOptions,r=t.registry,i=K_(),s=i.scroll.current,o=e.droppable,a=r.droppable.getAllByType(o.type).map(function(d){return d.callbacks.getDimensionAndWatchScroll(s,n)}),l=r.draggable.getAllByType(e.draggable.type).map(function(d){return d.getDimension(s)}),c={draggables:Ed(l),droppables:Cd(a)},u={dimensions:c,critical:e,viewport:i};return u};function ec(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var r=t.droppable.getById(n.descriptor.droppableId);return r.descriptor.mode==="virtual"}var J_=function(t,e){var n=null,r=z_({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),i=function(f,p){t.droppable.exists(f)||w(!1),n&&e.updateDroppableIsEnabled({id:f,isEnabled:p})},s=function(f,p){n&&(t.droppable.exists(f)||w(!1),e.updateDroppableIsCombineEnabled({id:f,isCombineEnabled:p}))},o=function(f,p){n&&(t.droppable.exists(f)||w(!1),e.updateDroppableScroll({id:f,newScroll:p}))},a=function(f,p){n&&t.droppable.getById(f).callbacks.scroll(p)},l=function(){if(n){r.stop();var f=n.critical.droppable;t.droppable.getAllByType(f.type).forEach(function(p){return p.callbacks.dragStopped()}),n.unsubscribe(),n=null}},c=function(f){n||w(!1);var p=n.critical.draggable;f.type==="ADDITION"&&ec(t,p,f.value)&&r.add(f.value),f.type==="REMOVAL"&&ec(t,p,f.value)&&r.remove(f.value)},u=function(f){n&&w(!1);var p=t.draggable.getById(f.draggableId),g=t.droppable.getById(p.descriptor.droppableId),v={draggable:p.descriptor,droppable:g.descriptor},m=t.subscribe(c);return n={critical:v,unsubscribe:m},Y_({critical:v,registry:t,scrollOptions:f.scrollOptions})},d={updateDroppableIsEnabled:i,updateDroppableIsCombineEnabled:s,scrollDroppable:a,updateDroppableScroll:o,startPublishing:u,stopPublishing:l};return d},Jd=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},Q_=function(t){window.scrollBy(t.x,t.y)},X_=ce(function(t){return Xi(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),Z_=function(e,n){var r=Rt(X_(n),function(i){return i.frame||w(!1),kd(i.frame.pageMarginBox)(e)});return r},eb=function(t){var e=t.center,n=t.destination,r=t.droppables;if(n){var i=r[n];return i.frame?i:null}var s=Z_(e,r);return s},_t={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},tb=function(t,e){var n=t[e.size]*_t.startFromPercentage,r=t[e.size]*_t.maxScrollAtPercentage,i={startScrollingFrom:n,maxScrollValueAt:r};return i},Qd=function(t){var e=t.startOfRange,n=t.endOfRange,r=t.current,i=n-e;if(i===0)return 0;var s=r-e,o=s/i;return o},ia=1,nb=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return _t.maxPixelScroll;if(t===e.startScrollingFrom)return ia;var n=Qd({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),r=1-n,i=_t.maxPixelScroll*_t.ease(r);return Math.ceil(i)},tc=_t.durationDampening.accelerateAt,nc=_t.durationDampening.stopDampeningAt,rb=function(t,e){var n=e,r=nc,i=Date.now(),s=i-n;if(s>=nc)return t;if(s<tc)return ia;var o=Qd({startOfRange:tc,endOfRange:r,current:s}),a=t*_t.ease(o);return Math.ceil(a)},rc=function(t){var e=t.distanceToEdge,n=t.thresholds,r=t.dragStartTime,i=t.shouldUseTimeDampening,s=nb(e,n);return s===0?0:i?Math.max(rb(s,r),ia):s},ic=function(t){var e=t.container,n=t.distanceToEdges,r=t.dragStartTime,i=t.axis,s=t.shouldUseTimeDampening,o=tb(e,i),a=n[i.end]<n[i.start];return a?rc({distanceToEdge:n[i.end],thresholds:o,dragStartTime:r,shouldUseTimeDampening:s}):-1*rc({distanceToEdge:n[i.start],thresholds:o,dragStartTime:r,shouldUseTimeDampening:s})},ib=function(t){var e=t.container,n=t.subject,r=t.proposedScroll,i=n.height>e.height,s=n.width>e.width;return!s&&!i?r:s&&i?null:{x:s?0:r.x,y:i?0:r.y}},sb=Id(function(t){return t===0?0:t}),Xd=function(t){var e=t.dragStartTime,n=t.container,r=t.subject,i=t.center,s=t.shouldUseTimeDampening,o={top:i.y-n.top,right:n.right-i.x,bottom:n.bottom-i.y,left:i.x-n.left},a=ic({container:n,distanceToEdges:o,dragStartTime:e,axis:Yo,shouldUseTimeDampening:s}),l=ic({container:n,distanceToEdges:o,dragStartTime:e,axis:Dd,shouldUseTimeDampening:s}),c=sb({x:l,y:a});if(mt(c,ue))return null;var u=ib({container:n,subject:r,proposedScroll:c});return u?mt(u,ue)?null:u:null},ob=Id(function(t){return t===0?0:t>0?1:-1}),sa=function(){var t=function(n,r){return n<0?n:n>r?n-r:0};return function(e){var n=e.current,r=e.max,i=e.change,s=pe(n,i),o={x:t(s.x,r.x),y:t(s.y,r.y)};return mt(o,ue)?null:o}}(),Zd=function(e){var n=e.max,r=e.current,i=e.change,s={x:Math.max(r.x,n.x),y:Math.max(r.y,n.y)},o=ob(i),a=sa({max:s,current:r,change:o});return!a||o.x!==0&&a.x===0||o.y!==0&&a.y===0},oa=function(e,n){return Zd({current:e.scroll.current,max:e.scroll.max,change:n})},ab=function(e,n){if(!oa(e,n))return null;var r=e.scroll.max,i=e.scroll.current;return sa({current:i,max:r,change:n})},aa=function(e,n){var r=e.frame;return r?Zd({current:r.scroll.current,max:r.scroll.max,change:n}):!1},lb=function(e,n){var r=e.frame;return!r||!aa(e,n)?null:sa({current:r.scroll.current,max:r.scroll.max,change:n})},cb=function(t){var e=t.viewport,n=t.subject,r=t.center,i=t.dragStartTime,s=t.shouldUseTimeDampening,o=Xd({dragStartTime:i,container:e.frame,subject:n,center:r,shouldUseTimeDampening:s});return o&&oa(e,o)?o:null},ub=function(t){var e=t.droppable,n=t.subject,r=t.center,i=t.dragStartTime,s=t.shouldUseTimeDampening,o=e.frame;if(!o)return null;var a=Xd({dragStartTime:i,container:o.pageMarginBox,subject:n,center:r,shouldUseTimeDampening:s});return a&&aa(e,a)?a:null},sc=function(t){var e=t.state,n=t.dragStartTime,r=t.shouldUseTimeDampening,i=t.scrollWindow,s=t.scrollDroppable,o=e.current.page.borderBoxCenter,a=e.dimensions.draggables[e.critical.draggable.id],l=a.page.marginBox;if(e.isWindowScrollAllowed){var c=e.viewport,u=cb({dragStartTime:n,viewport:c,subject:l,center:o,shouldUseTimeDampening:r});if(u){i(u);return}}var d=eb({center:o,destination:Re(e.impact),droppables:e.dimensions.droppables});if(d){var h=ub({dragStartTime:n,droppable:d,subject:l,center:o,shouldUseTimeDampening:r});h&&s(d.descriptor.id,h)}},db=function(t){var e=t.scrollWindow,n=t.scrollDroppable,r=Kn(e),i=Kn(n),s=null,o=function(u){s||w(!1);var d=s,h=d.shouldUseTimeDampening,f=d.dragStartTime;sc({state:u,scrollWindow:r,scrollDroppable:i,dragStartTime:f,shouldUseTimeDampening:h})},a=function(u){s&&w(!1);var d=Date.now(),h=!1,f=function(){h=!0};sc({state:u,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:f,scrollDroppable:f}),s={dragStartTime:d,shouldUseTimeDampening:h},h&&o(u)},l=function(){s&&(r.cancel(),i.cancel(),s=null)};return{start:a,stop:l,scroll:o}},hb=function(t){var e=t.move,n=t.scrollDroppable,r=t.scrollWindow,i=function(c,u){var d=pe(c.current.client.selection,u);e({client:d})},s=function(c,u){if(!aa(c,u))return u;var d=lb(c,u);if(!d)return n(c.descriptor.id,u),null;var h=xe(u,d);n(c.descriptor.id,h);var f=xe(u,h);return f},o=function(c,u,d){if(!c||!oa(u,d))return d;var h=ab(u,d);if(!h)return r(d),null;var f=xe(d,h);r(f);var p=xe(d,f);return p},a=function(c){var u=c.scrollJumpRequest;if(u){var d=Re(c.impact);d||w(!1);var h=s(c.dimensions.droppables[d],u);if(h){var f=c.viewport,p=o(c.isWindowScrollAllowed,f,h);p&&i(c,p)}}};return a},fb=function(t){var e=t.scrollDroppable,n=t.scrollWindow,r=t.move,i=db({scrollWindow:n,scrollDroppable:e}),s=hb({move:r,scrollWindow:n,scrollDroppable:e}),o=function(c){if(c.phase==="DRAGGING"){if(c.movementMode==="FLUID"){i.scroll(c);return}c.scrollJumpRequest&&s(c)}},a={scroll:o,start:i.start,stop:i.stop};return a},cn="data-rbd",un=function(){var t=cn+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),ho=function(){var t=cn+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),pb=function(){var t=cn+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),oc={contextId:cn+"-scroll-container-context-id"},gb=function(e){return function(n){return"["+n+'="'+e+'"]'}},Pn=function(e,n){return e.map(function(r){var i=r.styles[n];return i?r.selector+" { "+i+" }":""}).join(" ")},vb="pointer-events: none;",mb=function(t){var e=gb(t),n=function(){var a=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(un.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:a,dragging:vb,dropAnimating:a}}}(),r=function(){var a=`
      transition: `+Un.outOfTheWay+`;
    `;return{selector:e(ho.contextId),styles:{dragging:a,dropAnimating:a,userCancel:a}}}(),i={selector:e(pb.contextId),styles:{always:"overflow-anchor: none;"}},s={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},o=[r,n,i,s];return{always:Pn(o,"always"),resting:Pn(o,"resting"),dragging:Pn(o,"dragging"),dropAnimating:Pn(o,"dropAnimating"),userCancel:Pn(o,"userCancel")}},Pe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?_n:ve,Ls=function(){var e=document.querySelector("head");return e||w(!1),e},ac=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function _b(t,e){var n=G(function(){return mb(t)},[t]),r=H(null),i=H(null),s=P(ce(function(d){var h=i.current;h||w(!1),h.textContent=d}),[]),o=P(function(d){var h=r.current;h||w(!1),h.textContent=d},[]);Pe(function(){!r.current&&!i.current||w(!1);var d=ac(e),h=ac(e);return r.current=d,i.current=h,d.setAttribute(cn+"-always",t),h.setAttribute(cn+"-dynamic",t),Ls().appendChild(d),Ls().appendChild(h),o(n.always),s(n.resting),function(){var f=function(g){var v=g.current;v||w(!1),Ls().removeChild(v),g.current=null};f(r),f(i)}},[e,o,s,n.always,n.resting,t]);var a=P(function(){return s(n.dragging)},[s,n.dragging]),l=P(function(d){if(d==="DROP"){s(n.dropAnimating);return}s(n.userCancel)},[s,n.dropAnimating,n.userCancel]),c=P(function(){i.current&&s(n.resting)},[s,n.resting]),u=G(function(){return{dragging:a,dropping:l,resting:c}},[a,l,c]);return u}var eh=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function ns(t){return t instanceof eh(t).HTMLElement}function bb(t,e){var n="["+un.contextId+'="'+t+'"]',r=wd(document.querySelectorAll(n));if(!r.length)return null;var i=Rt(r,function(s){return s.getAttribute(un.draggableId)===e});return!i||!ns(i)?null:i}function yb(t){var e=H({}),n=H(null),r=H(null),i=H(!1),s=P(function(h,f){var p={id:h,focus:f};return e.current[h]=p,function(){var v=e.current,m=v[h];m!==p&&delete v[h]}},[]),o=P(function(h){var f=bb(t,h);f&&f!==document.activeElement&&f.focus()},[t]),a=P(function(h,f){n.current===h&&(n.current=f)},[]),l=P(function(){r.current||i.current&&(r.current=requestAnimationFrame(function(){r.current=null;var h=n.current;h&&o(h)}))},[o]),c=P(function(h){n.current=null;var f=document.activeElement;f&&f.getAttribute(un.draggableId)===h&&(n.current=h)},[]);Pe(function(){return i.current=!0,function(){i.current=!1;var h=r.current;h&&cancelAnimationFrame(h)}},[]);var u=G(function(){return{register:s,tryRecordFocus:c,tryRestoreFocusRecorded:l,tryShiftRecord:a}},[s,c,l,a]);return u}function Ib(){var t={draggables:{},droppables:{}},e=[];function n(d){return e.push(d),function(){var f=e.indexOf(d);f!==-1&&e.splice(f,1)}}function r(d){e.length&&e.forEach(function(h){return h(d)})}function i(d){return t.draggables[d]||null}function s(d){var h=i(d);return h||w(!1),h}var o={register:function(h){t.draggables[h.descriptor.id]=h,r({type:"ADDITION",value:h})},update:function(h,f){var p=t.draggables[f.descriptor.id];p&&p.uniqueId===h.uniqueId&&(delete t.draggables[f.descriptor.id],t.draggables[h.descriptor.id]=h)},unregister:function(h){var f=h.descriptor.id,p=i(f);p&&h.uniqueId===p.uniqueId&&(delete t.draggables[f],r({type:"REMOVAL",value:h}))},getById:s,findById:i,exists:function(h){return!!i(h)},getAllByType:function(h){return ui(t.draggables).filter(function(f){return f.descriptor.type===h})}};function a(d){return t.droppables[d]||null}function l(d){var h=a(d);return h||w(!1),h}var c={register:function(h){t.droppables[h.descriptor.id]=h},unregister:function(h){var f=a(h.descriptor.id);f&&h.uniqueId===f.uniqueId&&delete t.droppables[h.descriptor.id]},getById:l,findById:a,exists:function(h){return!!a(h)},getAllByType:function(h){return ui(t.droppables).filter(function(f){return f.descriptor.type===h})}};function u(){t.draggables={},t.droppables={},e.length=0}return{draggable:o,droppable:c,subscribe:n,clean:u}}function wb(){var t=G(Ib,[]);return ve(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var la=X.createContext(null),hi=function(){var t=document.body;return t||w(!1),t},Cb={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},Eb=function(e){return"rbd-announcement-"+e};function Sb(t){var e=G(function(){return Eb(t)},[t]),n=H(null);ve(function(){var s=document.createElement("div");return n.current=s,s.id=e,s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),A(s.style,Cb),hi().appendChild(s),function(){setTimeout(function(){var l=hi();l.contains(s)&&l.removeChild(s),s===n.current&&(n.current=null)})}},[e]);var r=P(function(i){var s=n.current;if(s){s.textContent=i;return}},[]);return r}var Tb=0,Db={separator:"::"};function ca(t,e){return e===void 0&&(e=Db),G(function(){return""+t+e.separator+Tb++},[e.separator,t])}function xb(t){var e=t.contextId,n=t.uniqueId;return"rbd-hidden-text-"+e+"-"+n}function Rb(t){var e=t.contextId,n=t.text,r=ca("hidden-text",{separator:"-"}),i=G(function(){return xb({contextId:e,uniqueId:r})},[r,e]);return ve(function(){var o=document.createElement("div");return o.id=i,o.textContent=n,o.style.display="none",hi().appendChild(o),function(){var l=hi();l.contains(o)&&l.removeChild(o)}},[i,n]),i}var rs=X.createContext(null);function th(t){var e=H(t);return ve(function(){e.current=t}),e}function Pb(){var t=null;function e(){return!!t}function n(o){return o===t}function r(o){t&&w(!1);var a={abandon:o};return t=a,a}function i(){t||w(!1),t=null}function s(){t&&(t.abandon(),i())}return{isClaimed:e,isActive:n,claim:r,release:i,tryAbandon:s}}var Ab=9,Nb=13,ua=27,nh=32,Ob=33,kb=34,Mb=35,Lb=36,Fb=37,Bb=38,Ub=39,Wb=40,Hr,$b=(Hr={},Hr[Nb]=!0,Hr[Ab]=!0,Hr),rh=function(t){$b[t.keyCode]&&t.preventDefault()},is=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=Rt(e,function(r){return"on"+r in document});return n||t}(),ih=0,lc=5;function Hb(t,e){return Math.abs(e.x-t.x)>=lc||Math.abs(e.y-t.y)>=lc}var cc={type:"IDLE"};function Gb(t){var e=t.cancel,n=t.completed,r=t.getPhase,i=t.setPhase;return[{eventName:"mousemove",fn:function(o){var a=o.button,l=o.clientX,c=o.clientY;if(a===ih){var u={x:l,y:c},d=r();if(d.type==="DRAGGING"){o.preventDefault(),d.actions.move(u);return}d.type!=="PENDING"&&w(!1);var h=d.point;if(Hb(h,u)){o.preventDefault();var f=d.actions.fluidLift(u);i({type:"DRAGGING",actions:f})}}}},{eventName:"mouseup",fn:function(o){var a=r();if(a.type!=="DRAGGING"){e();return}o.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(o){r().type==="DRAGGING"&&o.preventDefault(),e()}},{eventName:"keydown",fn:function(o){var a=r();if(a.type==="PENDING"){e();return}if(o.keyCode===ua){o.preventDefault(),e();return}rh(o)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){r().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(o){var a=r();if(a.type==="IDLE"&&w(!1),a.actions.shouldRespectForcePress()){e();return}o.preventDefault()}},{eventName:is,fn:e}]}function Vb(t){var e=H(cc),n=H(vt),r=G(function(){return{eventName:"mousedown",fn:function(d){if(!d.defaultPrevented&&d.button===ih&&!(d.ctrlKey||d.metaKey||d.shiftKey||d.altKey)){var h=t.findClosestDraggableId(d);if(h){var f=t.tryGetLock(h,o,{sourceEvent:d});if(f){d.preventDefault();var p={x:d.clientX,y:d.clientY};n.current(),c(f,p)}}}}}},[t]),i=G(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(d){if(!d.defaultPrevented){var h=t.findClosestDraggableId(d);if(h){var f=t.findOptionsForDraggable(h);f&&(f.shouldRespectForcePress||t.canGetLock(h)&&d.preventDefault())}}}}},[t]),s=P(function(){var d={passive:!1,capture:!0};n.current=ke(window,[i,r],d)},[i,r]),o=P(function(){var u=e.current;u.type!=="IDLE"&&(e.current=cc,n.current(),s())},[s]),a=P(function(){var u=e.current;o(),u.type==="DRAGGING"&&u.actions.cancel({shouldBlockNextClick:!0}),u.type==="PENDING"&&u.actions.abort()},[o]),l=P(function(){var d={capture:!0,passive:!1},h=Gb({cancel:a,completed:o,getPhase:function(){return e.current},setPhase:function(p){e.current=p}});n.current=ke(window,h,d)},[a,o]),c=P(function(d,h){e.current.type!=="IDLE"&&w(!1),e.current={type:"PENDING",point:h,actions:d},l()},[l]);Pe(function(){return s(),function(){n.current()}},[s])}var Qt;function qb(){}var jb=(Qt={},Qt[kb]=!0,Qt[Ob]=!0,Qt[Lb]=!0,Qt[Mb]=!0,Qt);function zb(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:function(s){if(s.keyCode===ua){s.preventDefault(),n();return}if(s.keyCode===nh){s.preventDefault(),r();return}if(s.keyCode===Wb){s.preventDefault(),t.moveDown();return}if(s.keyCode===Bb){s.preventDefault(),t.moveUp();return}if(s.keyCode===Ub){s.preventDefault(),t.moveRight();return}if(s.keyCode===Fb){s.preventDefault(),t.moveLeft();return}if(jb[s.keyCode]){s.preventDefault();return}rh(s)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:is,fn:n}]}function Kb(t){var e=H(qb),n=G(function(){return{eventName:"keydown",fn:function(s){if(s.defaultPrevented||s.keyCode!==nh)return;var o=t.findClosestDraggableId(s);if(!o)return;var a=t.tryGetLock(o,u,{sourceEvent:s});if(!a)return;s.preventDefault();var l=!0,c=a.snapLift();e.current();function u(){l||w(!1),l=!1,e.current(),r()}e.current=ke(window,zb(c,u),{capture:!0,passive:!1})}}},[t]),r=P(function(){var s={passive:!1,capture:!0};e.current=ke(window,[n],s)},[n]);Pe(function(){return r(),function(){e.current()}},[r])}var Fs={type:"IDLE"},Yb=120,Jb=.15;function Qb(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(i){i.preventDefault()}},{eventName:"keydown",fn:function(i){if(n().type!=="DRAGGING"){e();return}i.keyCode===ua&&i.preventDefault(),e()}},{eventName:is,fn:e}]}function Xb(t){var e=t.cancel,n=t.completed,r=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(s){var o=r();if(o.type!=="DRAGGING"){e();return}o.hasMoved=!0;var a=s.touches[0],l=a.clientX,c=a.clientY,u={x:l,y:c};s.preventDefault(),o.actions.move(u)}},{eventName:"touchend",fn:function(s){var o=r();if(o.type!=="DRAGGING"){e();return}s.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(s){if(r().type!=="DRAGGING"){e();return}s.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(s){var o=r();o.type==="IDLE"&&w(!1);var a=s.touches[0];if(a){var l=a.force>=Jb;if(l){var c=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){c&&e();return}if(c){if(o.hasMoved){s.preventDefault();return}e();return}s.preventDefault()}}}},{eventName:is,fn:e}]}function Zb(t){var e=H(Fs),n=H(vt),r=P(function(){return e.current},[]),i=P(function(f){e.current=f},[]),s=G(function(){return{eventName:"touchstart",fn:function(f){if(!f.defaultPrevented){var p=t.findClosestDraggableId(f);if(p){var g=t.tryGetLock(p,a,{sourceEvent:f});if(g){var v=f.touches[0],m=v.clientX,b=v.clientY,y={x:m,y:b};n.current(),d(g,y)}}}}}},[t]),o=P(function(){var f={capture:!0,passive:!1};n.current=ke(window,[s],f)},[s]),a=P(function(){var h=e.current;h.type!=="IDLE"&&(h.type==="PENDING"&&clearTimeout(h.longPressTimerId),i(Fs),n.current(),o())},[o,i]),l=P(function(){var h=e.current;a(),h.type==="DRAGGING"&&h.actions.cancel({shouldBlockNextClick:!0}),h.type==="PENDING"&&h.actions.abort()},[a]),c=P(function(){var f={capture:!0,passive:!1},p={cancel:l,completed:a,getPhase:r},g=ke(window,Xb(p),f),v=ke(window,Qb(p),f);n.current=function(){g(),v()}},[l,r,a]),u=P(function(){var f=r();f.type!=="PENDING"&&w(!1);var p=f.actions.fluidLift(f.point);i({type:"DRAGGING",actions:p,hasMoved:!1})},[r,i]),d=P(function(f,p){r().type!=="IDLE"&&w(!1);var g=setTimeout(u,Yb);i({type:"PENDING",point:p,actions:f,longPressTimerId:g}),c()},[c,r,i,u]);Pe(function(){return o(),function(){n.current();var p=r();p.type==="PENDING"&&(clearTimeout(p.longPressTimerId),i(Fs))}},[r,o,i]),Pe(function(){var f=ke(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return f},[])}var ey={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function sh(t,e){if(e==null)return!1;var n=!!ey[e.tagName.toLowerCase()];if(n)return!0;var r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:sh(t,e.parentElement)}function ty(t,e){var n=e.target;return ns(n)?sh(t,n):!1}var ny=function(t){return Ue(t.getBoundingClientRect()).center};function ry(t){return t instanceof eh(t).Element}var iy=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=Rt(e,function(r){return r in Element.prototype});return n||t}();function oh(t,e){return t==null?null:t[iy](e)?t:oh(t.parentElement,e)}function sy(t,e){return t.closest?t.closest(e):oh(t,e)}function oy(t){return"["+un.contextId+'="'+t+'"]'}function ay(t,e){var n=e.target;if(!ry(n))return null;var r=oy(t),i=sy(n,r);return!i||!ns(i)?null:i}function ly(t,e){var n=ay(t,e);return n?n.getAttribute(un.draggableId):null}function cy(t,e){var n="["+ho.contextId+'="'+t+'"]',r=wd(document.querySelectorAll(n)),i=Rt(r,function(s){return s.getAttribute(ho.id)===e});return!i||!ns(i)?null:i}function uy(t){t.preventDefault()}function Gr(t){var e=t.expected,n=t.phase,r=t.isLockActive;return t.shouldWarn,!(!r()||e!==n)}function ah(t){var e=t.lockAPI,n=t.store,r=t.registry,i=t.draggableId;if(e.isClaimed())return!1;var s=r.draggable.findById(i);return!(!s||!s.options.isEnabled||!Jd(n.getState(),i))}function dy(t){var e=t.lockAPI,n=t.contextId,r=t.store,i=t.registry,s=t.draggableId,o=t.forceSensorStop,a=t.sourceEvent,l=ah({lockAPI:e,store:r,registry:i,draggableId:s});if(!l)return null;var c=i.draggable.getById(s),u=cy(n,c.descriptor.id);if(!u||a&&!c.options.canDragInteractiveElements&&ty(u,a))return null;var d=e.claim(o||vt),h="PRE_DRAG";function f(){return c.options.shouldRespectForcePress}function p(){return e.isActive(d)}function g(D,F){Gr({expected:D,phase:h,isLockActive:p,shouldWarn:!0})&&r.dispatch(F())}var v=g.bind(null,"DRAGGING");function m(D){function F(){e.release(),h="COMPLETED"}h!=="PRE_DRAG"&&(F(),h!=="PRE_DRAG"&&w(!1)),r.dispatch(i_(D.liftActionArgs)),h="DRAGGING";function L(k,S){if(S===void 0&&(S={shouldBlockNextClick:!1}),D.cleanup(),S.shouldBlockNextClick){var E=ke(window,[{eventName:"click",fn:uy,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(E)}F(),r.dispatch(Gd({reason:k}))}return A({isActive:function(){return Gr({expected:"DRAGGING",phase:h,isLockActive:p,shouldWarn:!1})},shouldRespectForcePress:f,drop:function(S){return L("DROP",S)},cancel:function(S){return L("CANCEL",S)}},D.actions)}function b(D){var F=Kn(function(k){v(function(){return Hd({client:k})})}),L=m({liftActionArgs:{id:s,clientSelection:D,movementMode:"FLUID"},cleanup:function(){return F.cancel()},actions:{move:F}});return A({},L,{move:F})}function y(){var D={moveUp:function(){return v(f_)},moveRight:function(){return v(g_)},moveDown:function(){return v(p_)},moveLeft:function(){return v(v_)}};return m({liftActionArgs:{id:s,clientSelection:ny(u),movementMode:"SNAP"},cleanup:vt,actions:D})}function I(){var D=Gr({expected:"PRE_DRAG",phase:h,isLockActive:p,shouldWarn:!0});D&&e.release()}var T={isActive:function(){return Gr({expected:"PRE_DRAG",phase:h,isLockActive:p,shouldWarn:!1})},shouldRespectForcePress:f,fluidLift:b,snapLift:y,abort:I};return T}var hy=[Vb,Kb,Zb];function fy(t){var e=t.contextId,n=t.store,r=t.registry,i=t.customSensors,s=t.enableDefaultSensors,o=[].concat(s?hy:[],i||[]),a=ne(function(){return Pb()})[0],l=P(function(b,y){b.isDragging&&!y.isDragging&&a.tryAbandon()},[a]);Pe(function(){var b=n.getState(),y=n.subscribe(function(){var I=n.getState();l(b,I),b=I});return y},[a,n,l]),Pe(function(){return a.tryAbandon},[a.tryAbandon]);for(var c=P(function(m){return ah({lockAPI:a,registry:r,store:n,draggableId:m})},[a,r,n]),u=P(function(m,b,y){return dy({lockAPI:a,registry:r,contextId:e,store:n,draggableId:m,forceSensorStop:b,sourceEvent:y&&y.sourceEvent?y.sourceEvent:null})},[e,a,r,n]),d=P(function(m){return ly(e,m)},[e]),h=P(function(m){var b=r.draggable.findById(m);return b?b.options:null},[r.draggable]),f=P(function(){a.isClaimed()&&(a.tryAbandon(),n.getState().phase!=="IDLE"&&n.dispatch(ea()))},[a,n]),p=P(a.isClaimed,[a]),g=G(function(){return{canGetLock:c,tryGetLock:u,findClosestDraggableId:d,findOptionsForDraggable:h,tryReleaseLock:f,isLockClaimed:p}},[c,u,d,h,f,p]),v=0;v<o.length;v++)o[v](g)}var py=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function An(t){return t.current||w(!1),t.current}function gy(t){var e=t.contextId,n=t.setCallbacks,r=t.sensors,i=t.nonce,s=t.dragHandleUsageInstructions,o=H(null),a=th(t),l=P(function(){return py(a.current)},[a]),c=Sb(e),u=Rb({contextId:e,text:s}),d=_b(e,i),h=P(function(k){An(o).dispatch(k)},[]),f=G(function(){return Nl({publishWhileDragging:o_,updateDroppableScroll:l_,updateDroppableIsEnabled:c_,updateDroppableIsCombineEnabled:u_,collectionStarting:a_},h)},[h]),p=wb(),g=G(function(){return J_(p,f)},[p,f]),v=G(function(){return fb(A({scrollWindow:Q_,scrollDroppable:g.scrollDroppable},Nl({move:Hd},h)))},[g.scrollDroppable,h]),m=yb(e),b=G(function(){return j_({announce:c,autoScroller:v,dimensionMarshal:g,focusMarshal:m,getResponders:l,styleMarshal:d})},[c,v,g,m,l,d]);o.current=b;var y=P(function(){var k=An(o),S=k.getState();S.phase!=="IDLE"&&k.dispatch(ea())},[]),I=P(function(){var k=An(o).getState();return k.isDragging||k.phase==="DROP_ANIMATING"},[]),T=G(function(){return{isDragging:I,tryAbort:y}},[I,y]);n(T);var D=P(function(k){return Jd(An(o).getState(),k)},[]),F=P(function(){return Nt(An(o).getState())},[]),L=G(function(){return{marshal:g,focus:m,contextId:e,canLift:D,isMovementAllowed:F,dragHandleUsageInstructionsId:u,registry:p}},[e,g,u,m,D,F,p]);return fy({contextId:e,store:b,registry:p,customSensors:r,enableDefaultSensors:t.enableDefaultSensors!==!1}),ve(function(){return y},[y]),X.createElement(rs.Provider,{value:L},X.createElement(Lg,{context:la,store:b},t.children))}var vy=0;function my(){return G(function(){return""+vy++},[])}function _y(t){var e=my(),n=t.dragHandleUsageInstructions||Qr.dragHandleUsageInstructions;return X.createElement(Kv,null,function(r){return X.createElement(gy,{nonce:t.nonce,contextId:e,setCallbacks:r,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var lh=function(e){return function(n){return e===n}},by=lh("scroll"),yy=lh("auto"),uc=function(e,n){return n(e.overflowX)||n(e.overflowY)},Iy=function(e){var n=window.getComputedStyle(e),r={overflowX:n.overflowX,overflowY:n.overflowY};return uc(r,by)||uc(r,yy)},wy=function(){return!1},Cy=function t(e){return e==null?null:e===document.body?wy()?e:null:e===document.documentElement?null:Iy(e)?e:t(e.parentElement)},fo=function(t){return{x:t.scrollLeft,y:t.scrollTop}},Ey=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},Sy=function(t){var e=Cy(t),n=Ey(t);return{closestScrollable:e,isFixedOnPage:n}},Ty=function(t){var e=t.descriptor,n=t.isEnabled,r=t.isCombineEnabled,i=t.isFixedOnPage,s=t.direction,o=t.client,a=t.page,l=t.closest,c=function(){if(!l)return null;var f=l.scrollSize,p=l.client,g=zd({scrollHeight:f.scrollHeight,scrollWidth:f.scrollWidth,height:p.paddingBox.height,width:p.paddingBox.width});return{pageMarginBox:l.page.marginBox,frameClient:p,scrollSize:f,shouldClipSubject:l.shouldClipSubject,scroll:{initial:l.scroll,current:l.scroll,max:g,diff:{value:ue,displacement:ue}}}}(),u=s==="vertical"?Yo:Dd,d=ln({page:a,withPlaceholder:null,axis:u,frame:c}),h={descriptor:e,isCombineEnabled:r,isFixedOnPage:i,axis:u,isEnabled:n,client:o,page:a,frame:c,subject:d};return h},Dy=function(e,n){var r=md(e);if(!n||e!==n)return r;var i=r.paddingBox.top-n.scrollTop,s=r.paddingBox.left-n.scrollLeft,o=i+n.scrollHeight,a=s+n.scrollWidth,l={top:i,right:a,bottom:o,left:s},c=Vo(l,r.border),u=qo({borderBox:c,margin:r.margin,border:r.border,padding:r.padding});return u},xy=function(t){var e=t.ref,n=t.descriptor,r=t.env,i=t.windowScroll,s=t.direction,o=t.isDropDisabled,a=t.isCombineEnabled,l=t.shouldClipSubject,c=r.closestScrollable,u=Dy(e,c),d=ai(u,i),h=function(){if(!c)return null;var p=md(c),g={scrollHeight:c.scrollHeight,scrollWidth:c.scrollWidth};return{client:p,page:ai(p,i),scroll:fo(c),scrollSize:g,shouldClipSubject:l}}(),f=Ty({descriptor:n,isEnabled:!o,isCombineEnabled:a,isFixedOnPage:r.isFixedOnPage,direction:s,client:u,page:d,closest:h});return f},Ry={passive:!1},Py={passive:!0},dc=function(t){return t.shouldPublishImmediately?Ry:Py};function fi(t){var e=Ui(t);return e||w(!1),e}var Vr=function(e){return e&&e.env.closestScrollable||null};function Ay(t){var e=H(null),n=fi(rs),r=ca("droppable"),i=n.registry,s=n.marshal,o=th(t),a=G(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),l=H(a),c=G(function(){return ce(function(I,T){e.current||w(!1);var D={x:I,y:T};s.updateDroppableScroll(a.id,D)})},[a.id,s]),u=P(function(){var I=e.current;return!I||!I.env.closestScrollable?ue:fo(I.env.closestScrollable)},[]),d=P(function(){var I=u();c(I.x,I.y)},[u,c]),h=G(function(){return Kn(d)},[d]),f=P(function(){var I=e.current,T=Vr(I);I&&T||w(!1);var D=I.scrollOptions;if(D.shouldPublishImmediately){d();return}h()},[h,d]),p=P(function(I,T){e.current&&w(!1);var D=o.current,F=D.getDroppableRef();F||w(!1);var L=Sy(F),k={ref:F,descriptor:a,env:L,scrollOptions:T};e.current=k;var S=xy({ref:F,descriptor:a,env:L,windowScroll:I,direction:D.direction,isDropDisabled:D.isDropDisabled,isCombineEnabled:D.isCombineEnabled,shouldClipSubject:!D.ignoreContainerClipping}),E=L.closestScrollable;return E&&(E.setAttribute(oc.contextId,n.contextId),E.addEventListener("scroll",f,dc(k.scrollOptions))),S},[n.contextId,a,f,o]),g=P(function(){var I=e.current,T=Vr(I);return I&&T||w(!1),fo(T)},[]),v=P(function(){var I=e.current;I||w(!1);var T=Vr(I);e.current=null,T&&(h.cancel(),T.removeAttribute(oc.contextId),T.removeEventListener("scroll",f,dc(I.scrollOptions)))},[f,h]),m=P(function(I){var T=e.current;T||w(!1);var D=Vr(T);D||w(!1),D.scrollTop+=I.y,D.scrollLeft+=I.x},[]),b=G(function(){return{getDimensionAndWatchScroll:p,getScrollWhileDragging:g,dragStopped:v,scroll:m}},[v,p,g,m]),y=G(function(){return{uniqueId:r,descriptor:a,callbacks:b}},[b,a,r]);Pe(function(){return l.current=y.descriptor,i.droppable.register(y),function(){e.current&&v(),i.droppable.unregister(y)}},[b,a,v,y,s,i.droppable]),Pe(function(){e.current&&s.updateDroppableIsEnabled(l.current.id,!t.isDropDisabled)},[t.isDropDisabled,s]),Pe(function(){e.current&&s.updateDroppableIsCombineEnabled(l.current.id,t.isCombineEnabled)},[t.isCombineEnabled,s])}function Bs(){}var hc={width:0,height:0,margin:em},Ny=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate;return n||i==="close"?hc:{height:r.client.borderBox.height,width:r.client.borderBox.width,margin:r.client.margin}},Oy=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate,s=Ny({isAnimatingOpenOnMount:n,placeholder:r,animate:i});return{display:r.display,boxSizing:"border-box",width:s.width,height:s.height,marginTop:s.margin.top,marginRight:s.margin.right,marginBottom:s.margin.bottom,marginLeft:s.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:i!=="none"?Un.placeholder:null}};function ky(t){var e=H(null),n=P(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),r=t.animate,i=t.onTransitionEnd,s=t.onClose,o=t.contextId,a=ne(t.animate==="open"),l=a[0],c=a[1];ve(function(){return l?r!=="open"?(n(),c(!1),Bs):e.current?Bs:(e.current=setTimeout(function(){e.current=null,c(!1)}),n):Bs},[r,l,n]);var u=P(function(h){h.propertyName==="height"&&(i(),r==="close"&&s())},[r,s,i]),d=Oy({isAnimatingOpenOnMount:l,animate:t.animate,placeholder:t.placeholder});return X.createElement(t.placeholder.tagName,{style:d,"data-rbd-placeholder-context-id":o,onTransitionEnd:u,ref:t.innerRef})}var My=X.memo(ky),da=X.createContext(null),Ly=function(t){Ju(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.state={isVisible:!!r.props.on,data:r.props.on,animate:r.props.shouldAnimate&&r.props.on?"open":"none"},r.onClose=function(){r.state.animate==="close"&&r.setState({isVisible:!1})},r}e.getDerivedStateFromProps=function(i,s){return i.shouldAnimate?i.on?{isVisible:!0,data:i.on,animate:"open"}:s.isVisible?{isVisible:!0,data:s.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!i.on,data:i.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var i={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(i)},e}(X.PureComponent),fc={dragging:5e3,dropAnimating:4500},Fy=function(e,n){return n?Un.drop(n.duration):e?Un.snap:Un.fluid},By=function(e,n){return e?n?Xn.opacity.drop:Xn.opacity.combining:null},Uy=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function Wy(t){var e=t.dimension,n=e.client,r=t.offset,i=t.combineWith,s=t.dropping,o=!!i,a=Uy(t),l=!!s,c=l?co.drop(r,o):co.moveTo(r),u={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:Fy(a,s),transform:c,opacity:By(o,l),zIndex:l?fc.dropAnimating:fc.dragging,pointerEvents:"none"};return u}function $y(t){return{transform:co.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function Hy(t){return t.type==="DRAGGING"?Wy(t):$y(t)}function Gy(t,e,n){n===void 0&&(n=ue);var r=window.getComputedStyle(e),i=e.getBoundingClientRect(),s=vd(i,r),o=ai(s,n),a={client:s,tagName:e.tagName.toLowerCase(),display:r.display},l={x:s.marginBox.width,y:s.marginBox.height},c={descriptor:t,placeholder:a,displaceBy:l,client:s,page:o};return c}function Vy(t){var e=ca("draggable"),n=t.descriptor,r=t.registry,i=t.getDraggableRef,s=t.canDragInteractiveElements,o=t.shouldRespectForcePress,a=t.isEnabled,l=G(function(){return{canDragInteractiveElements:s,shouldRespectForcePress:o,isEnabled:a}},[s,a,o]),c=P(function(f){var p=i();return p||w(!1),Gy(n,p,f)},[n,i]),u=G(function(){return{uniqueId:e,descriptor:n,options:l,getDimension:c}},[n,c,l,e]),d=H(u),h=H(!0);Pe(function(){return r.draggable.register(d.current),function(){return r.draggable.unregister(d.current)}},[r.draggable]),Pe(function(){if(h.current){h.current=!1;return}var f=d.current;d.current=u,r.draggable.update(u,f)},[u,r.draggable])}function qy(t){t.preventDefault()}function jy(t){var e=H(null),n=P(function(k){e.current=k},[]),r=P(function(){return e.current},[]),i=fi(rs),s=i.contextId,o=i.dragHandleUsageInstructionsId,a=i.registry,l=fi(da),c=l.type,u=l.droppableId,d=G(function(){return{id:t.draggableId,index:t.index,type:c,droppableId:u}},[t.draggableId,t.index,c,u]),h=t.children,f=t.draggableId,p=t.isEnabled,g=t.shouldRespectForcePress,v=t.canDragInteractiveElements,m=t.isClone,b=t.mapped,y=t.dropAnimationFinished;if(!m){var I=G(function(){return{descriptor:d,registry:a,getDraggableRef:r,canDragInteractiveElements:v,shouldRespectForcePress:g,isEnabled:p}},[d,a,r,v,g,p]);Vy(I)}var T=G(function(){return p?{tabIndex:0,role:"button","aria-describedby":o,"data-rbd-drag-handle-draggable-id":f,"data-rbd-drag-handle-context-id":s,draggable:!1,onDragStart:qy}:null},[s,o,f,p]),D=P(function(k){b.type==="DRAGGING"&&b.dropping&&k.propertyName==="transform"&&y()},[y,b]),F=G(function(){var k=Hy(b),S=b.type==="DRAGGING"&&b.dropping?D:null,E={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":s,"data-rbd-draggable-id":f,style:k,onTransitionEnd:S},dragHandleProps:T};return E},[s,T,f,b,D,n]),L=G(function(){return{draggableId:d.id,type:d.type,source:{index:d.index,droppableId:d.droppableId}}},[d.droppableId,d.id,d.index,d.type]);return h(F,b.snapshot,L)}var ch=function(t,e){return t===e},uh=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},zy=function(e){return e.combine?e.combine.draggableId:null},Ky=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function Yy(){var t=ce(function(i,s){return{x:i,y:s}}),e=ce(function(i,s,o,a,l){return{isDragging:!0,isClone:s,isDropAnimating:!!l,dropAnimation:l,mode:i,draggingOver:o,combineWith:a,combineTargetFor:null}}),n=ce(function(i,s,o,a,l,c,u){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:l,combineWith:c,mode:s,offset:i,dimension:o,forceShouldAnimate:u,snapshot:e(s,a,l,c,null)}}}),r=function(s,o){if(s.isDragging){if(s.critical.draggable.id!==o.draggableId)return null;var a=s.current.client.offset,l=s.dimensions.draggables[o.draggableId],c=Re(s.impact),u=Ky(s.impact),d=s.forceShouldAnimate;return n(t(a.x,a.y),s.movementMode,l,o.isClone,c,u,d)}if(s.phase==="DROP_ANIMATING"){var h=s.completed;if(h.result.draggableId!==o.draggableId)return null;var f=o.isClone,p=s.dimensions.draggables[o.draggableId],g=h.result,v=g.mode,m=uh(g),b=zy(g),y=s.dropDuration,I={duration:y,curve:na.drop,moveTo:s.newHomeClientOffset,opacity:b?Xn.opacity.drop:null,scale:b?Xn.scale.drop:null};return{mapped:{type:"DRAGGING",offset:s.newHomeClientOffset,dimension:p,dropping:I,draggingOver:m,combineWith:b,mode:v,forceShouldAnimate:null,snapshot:e(v,f,m,b,I)}}}return null};return r}function dh(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var Jy={mapped:{type:"SECONDARY",offset:ue,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:dh(null)}};function Qy(){var t=ce(function(o,a){return{x:o,y:a}}),e=ce(dh),n=ce(function(o,a,l){return a===void 0&&(a=null),{mapped:{type:"SECONDARY",offset:o,combineTargetFor:a,shouldAnimateDisplacement:l,snapshot:e(a)}}}),r=function(a){return a?n(ue,a,!0):null},i=function(a,l,c,u){var d=c.displaced.visible[a],h=!!(u.inVirtualList&&u.effected[a]),f=Zi(c),p=f&&f.draggableId===a?l:null;if(!d){if(!h)return r(p);if(c.displaced.invisible[a])return null;var g=bn(u.displacedBy.point),v=t(g.x,g.y);return n(v,p,!0)}if(h)return r(p);var m=c.displacedBy.point,b=t(m.x,m.y);return n(b,p,d.shouldAnimate)},s=function(a,l){if(a.isDragging)return a.critical.draggable.id===l.draggableId?null:i(l.draggableId,a.critical.draggable.id,a.impact,a.afterCritical);if(a.phase==="DROP_ANIMATING"){var c=a.completed;return c.result.draggableId===l.draggableId?null:i(l.draggableId,c.result.draggableId,c.impact,c.afterCritical)}return null};return s}var Xy=function(){var e=Yy(),n=Qy(),r=function(s,o){return e(s,o)||n(s,o)||Jy};return r},Zy={dropAnimationFinished:Vd},eI=pd(Xy,Zy,null,{context:la,pure:!0,areStatePropsEqual:ch})(jy);function hh(t){var e=fi(da),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:X.createElement(eI,t)}function fh(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;return X.createElement(hh,A({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}))}function tI(t){var e=Ui(rs);e||w(!1);var n=e.contextId,r=e.isMovementAllowed,i=H(null),s=H(null),o=t.children,a=t.droppableId,l=t.type,c=t.mode,u=t.direction,d=t.ignoreContainerClipping,h=t.isDropDisabled,f=t.isCombineEnabled,p=t.snapshot,g=t.useClone,v=t.updateViewportMaxScroll,m=t.getContainerForClone,b=P(function(){return i.current},[]),y=P(function(E){i.current=E},[]);P(function(){return s.current},[]);var I=P(function(E){s.current=E},[]),T=P(function(){r()&&v({maxScroll:Yd()})},[r,v]);Ay({droppableId:a,type:l,mode:c,direction:u,isDropDisabled:h,isCombineEnabled:f,ignoreContainerClipping:d,getDroppableRef:b});var D=X.createElement(Ly,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(E){var R=E.onClose,O=E.data,B=E.animate;return X.createElement(My,{placeholder:O,onClose:R,innerRef:I,animate:B,contextId:n,onTransitionEnd:T})}),F=G(function(){return{innerRef:y,placeholder:D,droppableProps:{"data-rbd-droppable-id":a,"data-rbd-droppable-context-id":n}}},[n,a,D,y]),L=g?g.dragging.draggableId:null,k=G(function(){return{droppableId:a,type:l,isUsingCloneFor:L}},[a,L,l]);function S(){if(!g)return null;var E=g.dragging,R=g.render,O=X.createElement(hh,{draggableId:E.draggableId,index:E.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(B,J){return R(B,J,E)});return X.createPortal(O,m())}return X.createElement(da.Provider,{value:k},o(F,p),S())}var Us=function(e,n){return e===n.droppable.type},pc=function(e,n){return n.draggables[e.draggable.id]},nI=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=A({},e,{shouldAnimatePlaceholder:!1}),r=ce(function(o){return{draggableId:o.id,type:o.type,source:{index:o.index,droppableId:o.droppableId}}}),i=ce(function(o,a,l,c,u,d){var h=u.descriptor.id,f=u.descriptor.droppableId===o;if(f){var p=d?{render:d,dragging:r(u.descriptor)}:null,g={isDraggingOver:l,draggingOverWith:l?h:null,draggingFromThisWith:h,isUsingPlaceholder:!0};return{placeholder:u.placeholder,shouldAnimatePlaceholder:!1,snapshot:g,useClone:p}}if(!a)return n;if(!c)return e;var v={isDraggingOver:l,draggingOverWith:h,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:u.placeholder,shouldAnimatePlaceholder:!0,snapshot:v,useClone:null}}),s=function(a,l){var c=l.droppableId,u=l.type,d=!l.isDropDisabled,h=l.renderClone;if(a.isDragging){var f=a.critical;if(!Us(u,f))return n;var p=pc(f,a.dimensions),g=Re(a.impact)===c;return i(c,d,g,g,p,h)}if(a.phase==="DROP_ANIMATING"){var v=a.completed;if(!Us(u,v.critical))return n;var m=pc(v.critical,a.dimensions);return i(c,d,uh(v.result)===c,Re(v.impact)===c,m,h)}if(a.phase==="IDLE"&&a.completed&&!a.shouldFlush){var b=a.completed;if(!Us(u,b.critical))return n;var y=Re(b.impact)===c,I=!!(b.impact.at&&b.impact.at.type==="COMBINE"),T=b.critical.droppable.id===c;return y?I?e:n:T?e:n}return n};return s},rI={updateViewportMaxScroll:h_};function iI(){return document.body||w(!1),document.body}var sI={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:iI},ha=pd(nI,rI,null,{context:la,pure:!0,areStatePropsEqual:ch})(tI);ha.defaultProps=sI;var oI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},aI=Object.defineProperty,lI=Object.defineProperties,cI=Object.getOwnPropertyDescriptors,pi=Object.getOwnPropertySymbols,ph=Object.prototype.hasOwnProperty,gh=Object.prototype.propertyIsEnumerable,gc=(t,e,n)=>e in t?aI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,vc=(t,e)=>{for(var n in e||(e={}))ph.call(e,n)&&gc(t,n,e[n]);if(pi)for(var n of pi(e))gh.call(e,n)&&gc(t,n,e[n]);return t},uI=(t,e)=>lI(t,cI(e)),dI=(t,e)=>{var n={};for(var r in t)ph.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&pi)for(var r of pi(t))e.indexOf(r)<0&&gh.call(t,r)&&(n[r]=t[r]);return n},Xe=(t,e,n)=>{const r=i=>{var s=i,{color:o="currentColor",size:a=24,stroke:l=2,children:c}=s,u=dI(s,["color","size","stroke","children"]);return Ge("svg",vc(uI(vc({},oI),{width:a,height:a,stroke:o,"stroke-width":l,class:`tabler-icon tabler-icon-${t}`}),u),[...n.map(([d,h])=>Ge(d,h)),...ze(c)])};return r.displayName=`${e}`,r},vh=Xe("align-justified","IconAlignJustified",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l12 0",key:"svg-2"}]]),hI=Xe("brand-github-filled","IconBrandGithubFilled",[["path",{d:"M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),fI=Xe("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),pI=Xe("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),mh=Xe("checkbox","IconCheckbox",[["path",{d:"M9 11l3 3l8 -8",key:"svg-0"}],["path",{d:"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9",key:"svg-1"}]]),gI=Xe("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),vI=Xe("layout-cards","IconLayoutCards",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-1"}]]),_h=Xe("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),fa=Xe("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]]),pa=Xe("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]),mI=0;function _(t,e,n,r,i,s){var o,a,l={};for(a in e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--mI,__source:i,__self:s};if(typeof t=="function"&&(o=t.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return x.vnode&&x.vnode(c),c}const Zn=$u(function({children:e,styles:n,placeholder:r,defaultValue:i,onKeyDown:s,onBlur:o,onBlurCapture:a,minRows:l,maxRows:c,maxLength:u},d){const[h,f]=ne(l),p=g=>{const v=g.target,{lineHeight:m}=window.getComputedStyle(v),b=v.rows;v.rows=l;const y=~~(v.scrollHeight/parseFloat(m));y===b&&(v.rows=y),y>=c&&(v.rows=c,v.scrollTop=v.scrollHeight),f(y<c?y:c)};return _("textarea",{class:`height-auto box-border w-full resize-none overflow-hidden bg-inherit leading-6 
             outline-none ${n}`,ref:d,rows:h,maxLength:u,placeholder:r,onChange:p,defaultValue:i,onKeyDown:s,onBlur:o,onBlurCapture:a,children:e})}),_I=({setActive:t,addTodo:e})=>{const n=H(null),r=()=>{var s;const i=(s=n.current)==null?void 0:s.value;i&&(e(i),n.current.value="",n.current.rows=1,n.current.focus())};return ve(()=>{var i;(i=n.current)==null||i.focus()},[]),_("div",{class:"flex flex-col gap-2",children:[_(Zn,{ref:n,styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2 px-3 py-1 text-slate-950 border-slate-300",placeholder:"Enter a description for this item...",minRows:1,maxRows:2,maxLength:30}),_("div",{class:"flex gap-2",children:[_("button",{class:"w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",type:"submit",onClick:()=>r(),children:"Add item"}),_("button",{class:"rounded-md px-1 hover:bg-slate-300",onClick:()=>t(!1),children:_(pa,{})})]})]})},bI=({completed:t,content:e,updateTodo:n,removeTodo:r})=>{const[i,s]=ne(!1);return _("div",{class:"relative flex w-full items-center gap-2 rounded p-1 hover:bg-slate-300",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[_("div",{class:"relative m-1 h-5 w-5 shrink-0 self-start",children:_("input",{class:"checked:before:tick flex h-full w-full appearance-none items-center justify-center  rounded border-2 border-slate-300 bg-slate-100 outline-none  checked:border-slate-900 checked:bg-slate-900",type:"checkbox",checked:t,onChange:a=>{const l=a.target;n(l.checked)},children:_(pI,{})})}),_("span",{class:`${t&&"line-through"} max-w-full break-all`,children:e}),i&&_("div",{class:"absolute right-[0.3125rem] top-[0.3125rem]",onClick:()=>r(),children:_("button",{class:"rounded p-1 text-slate-500 hover:text-slate-900",children:_(fa,{size:18})})})]})},yI=({setActive:t,listTitle:e,content:n,description:r,todos:i,changeContent:s,changeDescription:o,changeTodos:a})=>{const l=H(null),c=H(null),[u,d]=ne(!1),[h,f]=ne(i??[]),p=()=>{t(!1),!(!l.current||!c.current)&&(s(l.current.value),o(c.current.value),a(h))},g=y=>{f([...h,{content:y,completed:!1}])},v=y=>{const I=[...h];I.splice(y,1),f(I)},m=(y,I)=>{const T=[...h];T[y].completed=I,f(T)},b=()=>{if(!h.length)return"0%";const y=h.filter(T=>T.completed).length,I=h.length;return`${Math.floor(y/I*100)}%`};return qu(_("div",{class:"max-w-screen fixed left-0 top-0 flex h-screen max-h-screen w-screen content-center  justify-center bg-slate-900/75 p-2",children:_("div",{class:"flex h-fit max-h-full w-full flex-col gap-4 overflow-y-auto overflow-x-hidden  rounded-xl bg-slate-200 px-6 py-4 lg:w-1/3",children:[_("div",{children:[_("div",{class:"flex items-center gap-2 p-2",children:[_(vI,{class:"text-slate-500"}),_("h1",{class:"h-fit w-full px-3 py-1 font-semibold",children:"Title"}),_("div",{class:"-m-2 cursor-pointer rounded bg-slate-300 p-1 text-slate-500  hover:text-slate-900",onClick:()=>p(),children:_(pa,{})})]}),_("div",{class:"ml-[3.25rem]",children:_(Zn,{ref:l,styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 border-slate-300  rounded border-2 font-semibold px-3 py-1 text-slate-950",minRows:1,maxRows:4,maxLength:100,children:n})}),_("div",{class:"mx-[3.25rem] mt-1 text-slate-500",children:["In list",_("strong",{class:"font-semibold",children:[" ",e]})]})]}),_("div",{children:[_("div",{class:"flex items-center gap-2 p-2",children:[_(vh,{class:"text-slate-500"}),_("h1",{class:"h-fit px-3 py-1 font-semibold",children:"Description"})]}),_("div",{class:"ml-[3.25rem]",children:_(Zn,{ref:c,placeholder:"Add a more detailed description...",styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2 px-3 py-1 text-slate-950 border-slate-300",minRows:2,maxRows:4,maxLength:100,children:r})})]}),_("div",{children:[_("div",{class:"flex items-center gap-2 p-2 pb-0",children:[_(mh,{class:"text-slate-500"}),_("h1",{class:"h-fit px-3 py-1 font-semibold",children:"Checklist"})]}),_("div",{class:"flex items-center gap-2 px-2 pb-2",children:[_("div",{class:"relative",children:_("div",{class:"absolute -ml-2 -mt-3 w-10 text-center",children:b()})}),_("div",{class:"relative my-2 -mr-2 ml-[2.75rem] h-2 w-full rounded bg-slate-300",children:_("div",{class:"absolute h-2 rounded bg-slate-900 transition-all duration-500",style:{width:b()}})})]}),_("div",{class:"-mr-[3.25rem] flex flex-col px-[3.25rem] pb-4 empty:pb-1",children:h.map((y,I)=>_(bI,{...y,updateTodo:T=>m(I,T),removeTodo:()=>v(I)},I))}),_("div",{class:"mb-2 ml-[3.25rem]",children:u?_(_I,{setActive:y=>d(y),addTodo:g}):_("button",{class:"rounded-md bg-slate-900 px-2 py-1 text-slate-50  hover:bg-slate-950",onClick:()=>d(!0),children:"Add an item"})})]})]})}),document.body)},II=({id:t,listTitle:e,index:n,content:r,description:i,todos:s,changeContent:o,changeDescription:a,removeCard:l,changeTodos:c})=>{const[u,d]=ne(!1),[h,f]=ne(!1);return _(Le,{children:[_(fh,{draggableId:t,index:n,children:(p,g)=>_(TI,{style:p.draggableProps.style,snapshot:g,children:v=>_("div",{ref:p.innerRef,...p.draggableProps,...p.dragHandleProps,style:v,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>f(!0),class:`min-h-10 relative mb-2 flex flex-col break-all
                      rounded-md px-3 py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 
                      ${g.isDragging?"bg-slate-100 ":"bg-slate-50"}`,children:[r,u&&_("div",{class:"absolute right-0 top-0 m-[0.1875rem] rounded bg-slate-200",children:_(bh,{clickHandler:()=>l(),icon:_(fa,{})})}),_("div",{class:"mt-1 flex items-center gap-3 text-slate-500 empty:mt-0",children:[i&&_(vh,{size:16}),s!=null&&s.length?_("div",{class:"flex items-center gap-1",children:[_(mh,{size:16}),_("p",{children:[s.filter(m=>m.completed).length,"/",s.length]})]}):null]})]})})}),h&&_(yI,{setActive:f,listTitle:e,content:r,description:i,todos:s,changeContent:o,changeDescription:a,changeTodos:c})]})},wI=({addCard:t})=>{const[e,n]=ne(!1),r=H(null),i=()=>{const s=r.current;!s||!s.value||(t(s.value),s.value="",s.rows=1,s.focus())};return e?_("div",{class:"flex w-full flex-col gap-2 p-2 pt-0",children:[_("div",{class:"flex content-center rounded-md bg-slate-50 px-3 py-2  shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 focus:outline-none",children:_(Zn,{ref:r,placeholder:"Enter a title for this card...",minRows:1,maxRows:5,maxLength:120})}),_("div",{class:"flex gap-2",children:[_("button",{class:"w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",type:"submit",onClick:()=>i(),children:"Add card"}),_("button",{class:"rounded-md px-1 hover:bg-slate-300",onClick:()=>n(!1),children:_(pa,{})})]})]}):_("div",{class:"p-2 pt-0",children:_("button",{onClick:()=>n(!0),class:"flex w-full items-center gap-2 rounded-md px-2 py-1 text-left hover:bg-slate-300",children:[_(_h,{size:18}),"Add a card"]})})},CI=({title:t,changeTitle:e,removeList:n,snapshot:r})=>{const i=H(null),[s,o]=ne(!1),[a,l]=ne(t),[c,u]=ne(!1),d=f=>{const p=f.target,g=p.value;g?(e(g),l(g)):p.value=a},h=f=>{if(f.key!=="Enter")return;f.preventDefault(),f.target.blur(),o(!1)};return ve(()=>{!r.isDragging&&!s||u(!1)},[r,s]),_("div",{class:"flex",children:[_("div",{class:"relative flex w-full items-center p-2",children:[_("div",{class:`absolute left-0 top-0 h-full w-full ${s?"hidden":"cursor-pointer"}`,onClick:()=>{var f;o(!0),(f=i.current)==null||f.focus()}}),_(Zn,{ref:i,styles:"box-border min-h-9 w-full cursor-pointer resize-none overflow-hidden break-words rounded  border-2 border-slate-200 bg-inherit px-3 py-1 font-semibold focus:cursor-text  focus:border-slate-900 focus:bg-slate-50 focus:outline-none",minRows:1,maxRows:4,maxLength:70,onKeyDown:h,onBlur:d,onBlurCapture:()=>{o(!1)},defaultValue:t})]}),_("div",{class:"m-2 ml-0",children:[_(bh,{icon:_(gI,{}),clickHandler:()=>u(!c)}),c&&!s&&_("div",{class:"absolute z-10 mt-2 grid w-64 divide-y rounded-md  bg-slate-50 shadow-sm shadow-black/40",children:[_("div",{class:"px-4 py-3 text-center",children:"List actions"}),_("div",{class:"mx-2 py-2",children:_("button",{class:"mx-0 flex w-full items-center gap-2 rounded-md px-2 py-1 text-left  hover:bg-slate-300",onClick:()=>n(),children:[_(fa,{size:16}),"Archive this list"]})})]})]})]})},EI=({title:t,cards:e,changeContent:n,changeDescription:r,changeTodos:i,removeCard:s})=>_(Le,{children:e==null?void 0:e.map((o,a)=>_(II,{id:o.id,index:a,listTitle:t,content:o.content,description:o.description,todos:o.todos,changeContent:l=>n(a,l),changeDescription:l=>r(a,l),changeTodos:l=>i(a,l),removeCard:()=>s(a)},o.id))}),SI=({addList:t})=>_("button",{class:"mx-4 my-8 flex items-center gap-2 whitespace-nowrap rounded-md bg-slate-700 p-3 px-2  py-1 text-slate-50 hover:bg-slate-600",onClick:()=>t("New list"),children:[_(_h,{size:18}),"Add another list"]}),TI=({snapshot:t,style:e,children:n})=>{const r=H(0),[i,s]=ne(),[o,a]=ne(0),[l,c]=ne(0),u=f=>f/(1+Math.abs(f)),d=()=>{if(!t.isDragging||!e.transform){r.current=requestAnimationFrame(d);return}const f=e.transform,p=parseInt(f.match(/translate\(.{1,}\)/g)[0].match(/-?[0-9]{1,}/g)[0]),g=p-o;let v=l*.9+u(g)*1.4;Math.abs(v)<.01&&(v=0),s(`${f} rotate(${v}deg)`),c(v),a(p)},h=f=>f.isDragging&&!f.dropAnimation?{...e,transform:i}:e;return ve(()=>{r.current=requestAnimationFrame(d)},[i,l,o]),ve(()=>{if(!t.isDragging){cancelAnimationFrame(r.current);return}return r.current=requestAnimationFrame(d),()=>{cancelAnimationFrame(r.current)}}),_(Le,{children:n(h(t))})},DI=({user:t,signIn:e,signOut:n})=>_("div",{class:"flex w-full content-center items-center border-b-2 border-b-slate-800 px-8 py-6  font-bold text-slate-50",children:_("div",{class:"flex items-center gap-4",children:[_("div",{class:"relative whitespace-nowrap text-2xl md:text-3xl",children:"trello clone"}),_("div",{class:"relative flex h-8 w-8 items-center justify-center",children:[_(fI,{class:"absolute"}),_("a",{class:"absolute flex cursor-pointer content-center items-center justify-center  fill-slate-50 opacity-0 transition hover:opacity-100",href:"https://github.com/chompaa/trello-clone",target:"_blank",children:_(hI,{})})]}),t?_("button",{class:"whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50  hover:text-slate-900",onClick:()=>n(),children:"Sign out"}):_("button",{class:"whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50  hover:text-slate-900",onClick:()=>e(),children:"Sign in"})]})});var Wn=(t=>(t.Card="card",t.List="list",t))(Wn||{});const xI=({list:t,index:e,changeTitle:n,changeContent:r,changeDescription:i,addCard:s,removeCard:o,changeTodos:a,removeList:l,placeholderProps:c})=>_(fh,{draggableId:`${e}`,index:e,children:(u,d)=>_("div",{ref:u.innerRef,...u.draggableProps,class:"mx-4 my-8 h-full rounded-xl shadow-sm shadow-black",children:_("div",{class:"w-72 rounded-xl bg-slate-200",children:[_("div",{...u.dragHandleProps,class:"rounded-t-xl",children:_(CI,{title:t.title,changeTitle:n,removeList:l,snapshot:d})}),_(ha,{droppableId:`${e}`,type:Wn.Card,children:(h,f)=>_("div",{ref:h.innerRef,...h.droppableProps,class:"relative px-2",children:[_(EI,{title:t.title,cards:t.cards,changeContent:r,changeDescription:i,removeCard:o,changeTodos:a}),h.placeholder,f.isDraggingOver&&_("div",{class:"absolute rounded-md bg-slate-300",style:{top:c.clientY,left:c.clientX,height:c.clientHeight,width:c.clientWidth}})]})}),_(wI,{addCard:s})]})})}),bh=({clickHandler:t,icon:e,disabled:n})=>_(Le,{children:!n&&_("button",{onClick:()=>t(),class:"flex content-center items-center justify-center rounded p-2 text-slate-500  hover:bg-slate-300",children:Fu(e,{size:18})})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw wn(e)},wn=function(t){return new Error("Firebase Database ("+yh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),r.push(n[u],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ih(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new PI;const h=s<<2|a>>4;if(r.push(h),c!==64){const f=a<<4&240|c>>2;if(r.push(f),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wh=function(t){const e=Ih(t);return ga.encodeByteArray(e,!0)},gi=function(t){return wh(t).replace(/\./g,"")},vi=function(t){try{return ga.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t){return Ch(void 0,t)}function Ch(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!NI(n)||(t[n]=Ch(t[n],e[n]));return t}function NI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=()=>OI().__FIREBASE_DEFAULTS__,MI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vi(t[1]);return e&&JSON.parse(e)},va=()=>{try{return kI()||MI()||LI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eh=t=>{var e,n;return(n=(e=va())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FI=t=>{const e=Eh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sh=()=>{var t;return(t=va())===null||t===void 0?void 0:t.config},Th=t=>{var e;return(e=va())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gi(JSON.stringify(n)),gi(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ma(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function UI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WI(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xh(){return yh.NODE_ADMIN===!0}function $I(){try{return typeof indexedDB=="object"}catch{return!1}}function HI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="FirebaseError";class Pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GI,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pt(i,a,r)}}function VI(t,e){return t.replace(qI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const qI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){return JSON.parse(t)}function re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=er(vi(s[0])||""),n=er(vi(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jI=function(t){const e=Rh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zI=function(t){const e=Rh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function po(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mi(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _i(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mc(s)&&mc(o)){if(!_i(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function YI(t,e){const n=new JI(t,e);return n.subscribe.bind(n)}class JI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ws),i.error===void 0&&(i.error=Ws),i.complete===void 0&&(i.complete=Ws);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function QI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ws(){}function _a(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},os=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Ht{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ss;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tw(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ew(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ew(t){return t===Ot?void 0:t}function tw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const rw={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},iw=j.INFO,sw={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},ow=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ba{constructor(e){this.name=e,this._logLevel=iw,this._logHandler=ow,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const aw=(t,e)=>e.some(n=>t instanceof n);let _c,bc;function lw(){return _c||(_c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cw(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ph=new WeakMap,go=new WeakMap,Ah=new WeakMap,$s=new WeakMap,ya=new WeakMap;function uw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(bt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ph.set(n,t)}).catch(()=>{}),ya.set(e,t),e}function dw(t){if(go.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});go.set(t,e)}let vo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return go.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ah.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hw(t){vo=t(vo)}function fw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hs(this),e,...n);return Ah.set(r,e.sort?e.sort():[e]),bt(r)}:cw().includes(t)?function(...e){return t.apply(Hs(this),e),bt(Ph.get(this))}:function(...e){return bt(t.apply(Hs(this),e))}}function pw(t){return typeof t=="function"?fw(t):(t instanceof IDBTransaction&&dw(t),aw(t,lw())?new Proxy(t,vo):t)}function bt(t){if(t instanceof IDBRequest)return uw(t);if($s.has(t))return $s.get(t);const e=pw(t);return e!==t&&($s.set(t,e),ya.set(e,t)),e}const Hs=t=>ya.get(t);function gw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=bt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(bt(o.result),l.oldVersion,l.newVersion,bt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const vw=["get","getKey","getAll","getAllKeys","count"],mw=["put","add","delete","clear"],Gs=new Map;function yc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gs.get(e))return Gs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Gs.set(e,s),s}hw(t=>({...t,get:(e,n,r)=>yc(e,n)||t.get(e,n,r),has:(e,n)=>!!yc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mo="@firebase/app",Ic="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new ba("@firebase/app"),yw="@firebase/app-compat",Iw="@firebase/analytics-compat",ww="@firebase/analytics",Cw="@firebase/app-check-compat",Ew="@firebase/app-check",Sw="@firebase/auth",Tw="@firebase/auth-compat",Dw="@firebase/database",xw="@firebase/database-compat",Rw="@firebase/functions",Pw="@firebase/functions-compat",Aw="@firebase/installations",Nw="@firebase/installations-compat",Ow="@firebase/messaging",kw="@firebase/messaging-compat",Mw="@firebase/performance",Lw="@firebase/performance-compat",Fw="@firebase/remote-config",Bw="@firebase/remote-config-compat",Uw="@firebase/storage",Ww="@firebase/storage-compat",$w="@firebase/firestore",Hw="@firebase/firestore-compat",Gw="firebase",Vw="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="[DEFAULT]",qw={[mo]:"fire-core",[yw]:"fire-core-compat",[ww]:"fire-analytics",[Iw]:"fire-analytics-compat",[Ew]:"fire-app-check",[Cw]:"fire-app-check-compat",[Sw]:"fire-auth",[Tw]:"fire-auth-compat",[Dw]:"fire-rtdb",[xw]:"fire-rtdb-compat",[Rw]:"fire-fn",[Pw]:"fire-fn-compat",[Aw]:"fire-iid",[Nw]:"fire-iid-compat",[Ow]:"fire-fcm",[kw]:"fire-fcm-compat",[Mw]:"fire-perf",[Lw]:"fire-perf-compat",[Fw]:"fire-rc",[Bw]:"fire-rc-compat",[Uw]:"fire-gcs",[Ww]:"fire-gcs-compat",[$w]:"fire-fst",[Hw]:"fire-fst-compat","fire-js":"fire-js",[Gw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Map,bo=new Map;function jw(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hn(t){const e=t.name;if(bo.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;bo.set(e,t);for(const n of bi.values())jw(n,t);return!0}function Ia(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new Er("app","Firebase",zw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=Vw;function Nh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_o,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(n||(n=Sh()),!n)throw yt.create("no-options");const s=bi.get(i);if(s){if(_i(n,s.options)&&_i(r,s.config))return s;throw yt.create("duplicate-app",{appName:i})}const o=new nw(i);for(const l of bo.values())o.addComponent(l);const a=new Kw(n,r,o);return bi.set(i,a),a}function Oh(t=_o){const e=bi.get(t);if(!e&&t===_o&&Sh())return Nh();if(!e)throw yt.create("no-app",{appName:t});return e}function It(t,e,n){var r;let i=(r=qw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}hn(new Ht(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firebase-heartbeat-database",Jw=1,tr="firebase-heartbeat-store";let Vs=null;function kh(){return Vs||(Vs=gw(Yw,Jw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tr)}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),Vs}async function Qw(t){try{return await(await kh()).transaction(tr).objectStore(tr).get(Mh(t))}catch(e){if(e instanceof Pt)Gt.warn(e.message);else{const n=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function wc(t,e){try{const r=(await kh()).transaction(tr,"readwrite");await r.objectStore(tr).put(e,Mh(t)),await r.done}catch(n){if(n instanceof Pt)Gt.warn(n.message);else{const r=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function Mh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=1024,Zw=30*24*60*60*1e3;class eC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Zw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cc(),{heartbeatsToSend:n,unsentEntries:r}=tC(this._heartbeatsCache.heartbeats),i=gi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cc(){return new Date().toISOString().substring(0,10)}function tC(t,e=Xw){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ec(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ec(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $I()?HI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Qw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ec(t){return gi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(t){hn(new Ht("platform-logger",e=>new _w(e),"PRIVATE")),hn(new Ht("heartbeat",e=>new eC(e),"PRIVATE")),It(mo,Ic,t),It(mo,Ic,"esm2017"),It("fire-js","")}rC("");var iC="firebase",sC="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It(iC,sC,"app");const Sc="@firebase/database",Tc="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lh="";function oC(t){Lh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:er(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new aC(e)}}catch{}return new lC},Lt=Fh("localStorage"),yo=Fh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new ba("@firebase/database"),cC=function(){let t=1;return function(){return t++}}(),Bh=function(t){const e=XI(t),n=new KI;n.update(e);const r=n.digest();return ga.encodeByteArray(r)},Sr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Sr.apply(null,r):typeof r=="object"?e+=re(r):e+=r,e+=" "}return e};let Ut=null,Dc=!0;const uC=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(en.logLevel=j.VERBOSE,Ut=en.log.bind(en),e&&yo.set("logging_enabled",!0)):typeof t=="function"?Ut=t:(Ut=null,yo.remove("logging_enabled"))},ge=function(...t){if(Dc===!0&&(Dc=!1,Ut===null&&yo.get("logging_enabled")===!0&&uC(!0)),Ut){const e=Sr.apply(null,t);Ut(e)}},Tr=function(t){return function(...e){ge(t,...e)}},Io=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sr(...t);en.error(e)},ot=function(...t){const e=`FIREBASE FATAL ERROR: ${Sr(...t)}`;throw en.error(e),new Error(e)},Se=function(...t){const e="FIREBASE WARNING: "+Sr(...t);en.warn(e)},dC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Se("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Uh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fn="[MIN_NAME]",Vt="[MAX_NAME]",Sn=function(t,e){if(t===e)return 0;if(t===fn||e===Vt)return-1;if(e===fn||t===Vt)return 1;{const n=xc(t),r=xc(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},fC=function(t,e){return t===e?0:t<e?-1:1},Nn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+re(e))},wa=function(t){if(typeof t!="object"||t===null)return re(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=re(e[r]),n+=":",n+=wa(t[e[r]]);return n+="}",n},Wh=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $h=function(t){C(!Uh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},pC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const mC=new RegExp("^-?(0*)\\d{1,10}$"),_C=-2147483648,bC=2147483647,xc=function(t){if(mC.test(t)){const e=Number(t);if(e>=_C&&e<=bC)return e}return null},Tn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Se("Exception was thrown by user callback.",n),e},Math.floor(0))}},yC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$n=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Se(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Se(e)}}class tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="5",Hh="v",Gh="s",Vh="r",qh="f",jh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zh="ls",Kh="p",wo="ac",Yh="websocket",Jh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Lt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Lt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function CC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xh(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Yh)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jh)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CC(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.counters_={}}incrementCounter(e,n=1){lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return AI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs={},js={};function Ea(t){const e=t.toString();return qs[e]||(qs[e]=new EC),qs[e]}function SC(t,e){const n=t.toString();return js[n]||(js[n]=e()),js[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Tn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="start",DC="close",xC="pLPCommand",RC="pRTLPCB",Zh="id",ef="pw",tf="ser",PC="cb",AC="seg",NC="ts",OC="d",kC="dframe",nf=1870,rf=30,MC=nf-rf,LC=25e3,FC=3e4;class Zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tr(e),this.stats_=Ea(n),this.urlFn=l=>(this.appCheckToken&&(l[wo]=this.appCheckToken),Xh(n,Jh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new TC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(FC)),hC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sa((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rc)this.id=a,this.password=l;else if(o===DC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Rc]="t",r[tf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[PC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Hh]=Ca,this.transportSessionId&&(r[Gh]=this.transportSessionId),this.lastSessionId&&(r[zh]=this.lastSessionId),this.applicationId&&(r[Kh]=this.applicationId),this.appCheckToken&&(r[wo]=this.appCheckToken),typeof location<"u"&&location.hostname&&jh.test(location.hostname)&&(r[Vh]=qh);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zt.forceAllow_=!0}static forceDisallow(){Zt.forceDisallow_=!0}static isAvailable(){return Zt.forceAllow_?!0:!Zt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pC()&&!gC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wh(n),i=Wh(r,MC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[kC]="t",r[Zh]=e,r[ef]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Sa{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cC(),window[xC+this.uniqueCallbackIdentifier]=e,window[RC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Sa.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ge("frame writing exception"),a.stack&&ge(a.stack),ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ge("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zh]=this.myID,e[ef]=this.myPW,e[tf]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rf+r.length<=nf;){const o=this.pendingSegs.shift();r=r+"&"+AC+i+"="+o.seg+"&"+NC+i+"="+o.ts+"&"+OC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(LC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=16384,UC=45e3;let yi=null;typeof MozWebSocket<"u"?yi=MozWebSocket:typeof WebSocket<"u"&&(yi=WebSocket);class Be{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tr(this.connId),this.stats_=Ea(n),this.connURL=Be.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Hh]=Ca,typeof location<"u"&&location.hostname&&jh.test(location.hostname)&&(o[Vh]=qh),n&&(o[Gh]=n),r&&(o[zh]=r),i&&(o[wo]=i),s&&(o[Kh]=s),Xh(e,Yh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Lt.set("previous_websocket_failure",!0);try{let r;xh(),this.mySock=new yi(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Be.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&yi!==null&&!Be.forceDisallow_}static previouslyFailed(){return Lt.isInMemoryStorage||Lt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Lt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=er(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Wh(n,BC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(UC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Be.responsesRequiredToBeHealthy=2;Be.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Zt,Be]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Be&&Be.isAvailable();let r=n&&!Be.previouslyFailed();if(e.webSocketOnly&&(n||Se("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Be];else{const i=this.transports_=[];for(const s of nr.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);nr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}nr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=6e4,$C=5e3,HC=10*1024,GC=100*1024,zs="t",Pc="d",VC="s",Ac="r",qC="e",Nc="o",Oc="a",kc="n",Mc="p",jC="h";class zC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tr("c:"+this.id+":"),this.transportManager_=new nr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$n(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>GC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>HC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zs in e){const n=e[zs];n===Oc?this.upgradeIfSecondaryHealthy_():n===Ac?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Nc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Nn("t",e),r=Nn("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Mc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Oc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Nn("t",e),r=Nn("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Nn(zs,e);if(Pc in e){const r=e[Pc];if(n===jC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===kc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===VC?this.onConnectionShutdown_(r):n===Ac?this.onReset_(r):n===qC?Io("Server Error: "+r):n===Nc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Io("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ca!==r&&Se("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$n(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$n(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($C))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Mc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Lt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends of{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ma()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ii}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=32,Fc=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new K("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tt(t){return t.pieces_.length-t.pieceNum_}function Q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function af(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function KC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function lf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function cf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function ie(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return we(Q(t),Q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uf(t,e){if(Tt(t)!==Tt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function We(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tt(t)>Tt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class YC{constructor(e,n){this.errorPrefix_=n,this.parts_=lf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=os(this.parts_[r]);df(this)}}function JC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=os(e),df(t)}function QC(t){const e=t.parts_.pop();t.byteLength_-=os(e),t.parts_.length>0&&(t.byteLength_-=1)}function df(t){if(t.byteLength_>Fc)throw new Error(t.errorPrefix_+"has a key path longer than "+Fc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Lc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Lc+") or object contains a cycle "+kt(t))}function kt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta extends of{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ta}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=1e3,XC=60*5*1e3,Bc=30*1e3,ZC=1.3,eE=3e4,tE="server_kill",Uc=3;class st extends sf{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=st.nextPersistentConnectionId_++,this.log_=Tr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=On,this.maxReconnectDelay_=XC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!xh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ta.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ii.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(re(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ss,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;st.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&lt(e,"w")){const r=dn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Se(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Bc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+re(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Io("Unrecognized action received from server: "+re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>eE&&(this.reconnectDelay_=On),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ZC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+st.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ge("getToken() completed but was canceled"):(ge("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new zC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{Se(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(tE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Se(d),l())}}}interrupt(e){ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],po(this.interruptReasons_)&&(this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>wa(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Uc&&(this.reconnectDelay_=Bc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Uc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Lh.replace(/\./g,"-")]=1,ma()?e["framework.cordova"]=1:Dh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ii.getInstance().currentlyOnline();return po(this.interruptReasons_)&&e}}st.nextPersistentConnectionId_=0;st.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(fn,e),i=new U(fn,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr;class hf extends as{static get __EMPTY_NODE(){return qr}static set __EMPTY_NODE(e){qr=e}compare(e,n){return Sn(e.name,n.name)}isDefinedOn(e){throw wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Vt,qr)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,qr)}toString(){return".key"}}const nn=new hf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ae.RED,this.left=i??Ee.EMPTY_NODE,this.right=s??Ee.EMPTY_NODE}copy(e,n,r,i,s){return new ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ee.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ae.RED=!0;ae.BLACK=!1;class nE{copy(e,n,r,i,s){return this}insert(e,n,r){return new ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ee{constructor(e,n=Ee.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ee(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ae.BLACK,null,null))}remove(e){return new Ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ae.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new jr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new jr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new jr(this.root_,null,this.comparator_,!0,e)}}Ee.EMPTY_NODE=new nE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t,e){return Sn(t.name,e.name)}function Da(t,e){return Sn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co;function iE(t){Co=t}const ff=function(t){return typeof t=="number"?"number:"+$h(t):"string:"+t},pf=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&lt(e,".sv"),"Priority must be a string or number.")}else C(t===Co||t.isEmpty(),"priority of unexpected type.");C(t===Co||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc;class oe{constructor(e,n=oe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pf(this.priorityNode_)}static set __childrenNodeConstructor(e){Wc=e}static get __childrenNodeConstructor(){return Wc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new oe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:$(e)===".priority"?this.priorityNode_:oe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:oe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Tt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,oe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ff(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$h(this.value_):e+=this.value_,this.lazyHash_=Bh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===oe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof oe.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=oe.VALUE_TYPE_ORDER.indexOf(n),s=oe.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}oe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf,vf;function sE(t){gf=t}function oE(t){vf=t}class aE extends as{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Sn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Vt,new oe("[PRIORITY-POST]",vf))}makePost(e,n){const r=gf(e);return new U(n,new oe("[PRIORITY-POST]",r))}toString(){return".priority"}}const te=new aE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=Math.log(2);class cE{constructor(e){const n=s=>parseInt(Math.log(s)/lE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wi=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new ae(h,d.node,ae.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),g=i(f+1,c);return d=t[f],h=n?n(d):d,new ae(h,d.node,ae.BLACK,p,g)}},s=function(l){let c=null,u=null,d=t.length;const h=function(p,g){const v=d-p,m=d;d-=p;const b=i(v+1,m),y=t[v],I=n?n(y):y;f(new ae(I,y.node,g,null,b))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));g?h(v,ae.BLACK):(h(v,ae.BLACK),h(v,ae.RED))}return u},o=new cE(t.length),a=s(o);return new Ee(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;const Xt={};class nt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Xt&&te,"ChildrenNode.ts has not been loaded"),Ks=Ks||new nt({".priority":Xt},{".priority":te}),Ks}get(e){const n=dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ee?n:null}hasIndex(e){return lt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==nn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=wi(r,e.getCompare()):a=Xt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new nt(u,c)}addToIndexes(e,n){const r=mi(this.indexes_,(i,s)=>{const o=dn(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Xt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),wi(a,o.getCompare())}else return Xt;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new nt(r,this.indexSet_)}removeFromIndexes(e,n){const r=mi(this.indexes_,i=>{if(i===Xt)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new nt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn;class N{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&pf(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return kn||(kn=new N(new Ee(Da),null,nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||kn}updatePriority(e){return this.children_.isEmpty()?this:new N(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?kn:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(Q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?kn:this.priorityNode_;return new N(i,o,s)}}updateChild(e,n){const r=$(e);if(r===null)return n;{C($(e)!==".priority"||Tt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(te,(o,a)=>{n[o]=a.val(e),r++,s&&N.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ff(this.getPriority().val())+":"),this.forEachChild(te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Bh(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dr?-1:0}withIndex(e){if(e===nn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new N(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===nn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(te),i=n.getIterator(te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===nn?null:this.indexMap_.get(e.toString())}}N.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uE extends N{constructor(){super(new Ee(Da),N.EMPTY_NODE,nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return N.EMPTY_NODE}isEmpty(){return!1}}const Dr=new uE;Object.defineProperties(U,{MIN:{value:new U(fn,N.EMPTY_NODE)},MAX:{value:new U(Vt,Dr)}});hf.__EMPTY_NODE=N.EMPTY_NODE;oe.__childrenNodeConstructor=N;iE(Dr);oE(Dr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=!0;function le(t,e=null){if(t===null)return N.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new oe(n,le(e))}if(!(t instanceof Array)&&dE){const n=[];let r=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return N.EMPTY_NODE;const s=wi(n,rE,o=>o.name,Da);if(r){const o=wi(n,te.getCompare());return new N(s,le(e),new nt({".priority":o},{".priority":te}))}else return new N(s,le(e),nt.Default)}else{let n=N.EMPTY_NODE;return Te(t,(r,i)=>{if(lt(t,r)&&r.substring(0,1)!=="."){const s=le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(le(e))}}sE(le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE extends as{constructor(e){super(),this.indexPath_=e,C(!W(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Sn(e.name,n.name):s}makePost(e,n){const r=le(e),i=N.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=N.EMPTY_NODE.updateChild(this.indexPath_,Dr);return new U(Vt,e)}toString(){return lf(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE extends as{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Sn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=le(e);return new U(n,r)}toString(){return".value"}}const pE=new fE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(t){return{type:"value",snapshotNode:t}}function pn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ir(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(rr(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(pn(n,r)):o.trackChildChange(ir(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(te,(i,s)=>{n.hasChild(i)||r.trackChildChange(rr(i,s))}),n.isLeafNode()||n.forEachChild(te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ir(i,s,o))}else r.trackChildChange(pn(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?N.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.indexedFilter_=new xa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sr.getStartPost_(e),this.endPost_=sr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=N.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=N.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(N.EMPTY_NODE);const s=this;return n.forEachChild(te,(o,a)=>{s.matches(new U(o,a))||(i=i.updateImmediateChild(o,N.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new sr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=N.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=N.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=N.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(N.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,N.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new U(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(ir(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(rr(n,d));const g=a.updateImmediateChild(n,N.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(pn(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(rr(c.name,c.node)),s.trackChildChange(pn(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,N.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new Ra;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mE(t){return t.loadsAllData()?new xa(t.getIndex()):t.hasLimit()?new vE(t):new sr(t)}function $c(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===pE?n="$value":t.index_===nn?n="$key":(C(t.index_ instanceof hE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=re(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=re(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+re(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=re(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends sf{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Tr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ci.getListenId_(e,r),a={};this.listens_[o]=a;const l=$c(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),dn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Ci.getListenId_(e,n);delete this.listens_[r]}get(e){const n=$c(e._queryParams),r=e._path.toString(),i=new ss;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=er(a.responseText)}catch{Se("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Se("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.rootNode_=N.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){return{value:null,children:new Map}}function _f(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,Ei());const i=t.children.get(r);e=Q(e),_f(i,e,n)}}function Eo(t,e,n){t.value!==null?n(e,t.value):bE(t,(r,i)=>{const s=new K(e.toString()+"/"+r);Eo(i,s,n)})}function bE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=10*1e3,IE=30*1e3,wE=5*60*1e3;class CE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new yE(e);const r=Gc+(IE-Gc)*Math.random();$n(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&lt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$n(this.reportStats_.bind(this),Math.floor(Math.random()*2*wE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($e||($e={}));function bf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Pa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Aa(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=$e.ACK_USER_WRITE,this.source=bf()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Si(V(),n,this.revert)}}else return C($(this.path)===e,"operationForChild called for unrelated child."),new Si(Q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.source=e,this.path=n,this.type=$e.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new or(this.source,V()):new or(this.source,Q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=$e.OVERWRITE}operationForChild(e){return W(this.path)?new qt(this.source,V(),this.snap.getImmediateChild(e)):new qt(this.source,Q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=$e.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new qt(this.source,V(),n.value):new ar(this.source,V(),n)}else return C($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ar(this.source,Q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function SE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(gE(o.childName,o.snapshotNode))}),Mn(t,i,"child_removed",e,r,n),Mn(t,i,"child_added",e,r,n),Mn(t,i,"child_moved",s,r,n),Mn(t,i,"child_changed",e,r,n),Mn(t,i,"value",e,r,n),i}function Mn(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>DE(t,a,l)),o.forEach(a=>{const l=TE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function TE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function DE(t,e,n){if(e.childName==null||n.childName==null)throw wn("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t,e){return{eventCache:t,serverCache:e}}function Hn(t,e,n,r){return ls(new Dt(e,n,r),t.serverCache)}function yf(t,e,n,r){return ls(t.eventCache,new Dt(e,n,r))}function Ti(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function jt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys;const xE=()=>(Ys||(Ys=new Ee(fC)),Ys);class Z{constructor(e,n=xE()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return Te(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(W(e))return null;{const r=$(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Q(e),n);return s!=null?{path:ie(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(Q(e)):new Z(null)}}set(e,n){if(W(e))return new Z(n,this.children);{const r=$(e),s=(this.children.get(r)||new Z(null)).set(Q(e),n),o=this.children.insert(r,s);return new Z(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const i=r.remove(Q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Z(null):new Z(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(Q(e)):null}}setTree(e,n){if(W(e))return n;{const r=$(e),s=(this.children.get(r)||new Z(null)).setTree(Q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Z(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ie(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=$(e),o=this.children.get(s);return o?o.findOnPath_(Q(e),ie(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=$(e),s=this.children.get(i);return s?s.foreachOnPath_(Q(e),ie(n,i),r):new Z(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ie(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.writeTree_=e}static empty(){return new He(new Z(null))}}function Gn(t,e,n){if(W(e))return new He(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=we(i,e);return s=s.updateChild(o,n),new He(t.writeTree_.set(i,s))}else{const i=new Z(n),s=t.writeTree_.setTree(e,i);return new He(s)}}}function Vc(t,e,n){let r=t;return Te(n,(i,s)=>{r=Gn(r,ie(e,i),s)}),r}function qc(t,e){if(W(e))return He.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new He(n)}}function So(t,e){return Kt(t,e)!=null}function Kt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function jc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function wt(t,e){if(W(e))return t;{const n=Kt(t,e);return n!=null?new He(new Z(n)):new He(t.writeTree_.subtree(e))}}function To(t){return t.writeTree_.isEmpty()}function gn(t,e){return If(V(),t.writeTree_,e)}function If(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=If(ie(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ie(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t,e){return Sf(e,t)}function RE(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Gn(t.visibleWrites,e,n)),t.lastWriteId=r}function PE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function AE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&NE(a,r.path)?i=!1:We(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return OE(t),!0;if(r.snap)t.visibleWrites=qc(t.visibleWrites,r.path);else{const a=r.children;Te(a,l=>{t.visibleWrites=qc(t.visibleWrites,ie(r.path,l))})}return!0}else return!1}function NE(t,e){if(t.snap)return We(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&We(ie(t.path,n),e))return!0;return!1}function OE(t){t.visibleWrites=wf(t.allWrites,kE,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kE(t){return t.visible}function wf(t,e,n){let r=He.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)We(n,o)?(a=we(n,o),r=Gn(r,a,s.snap)):We(o,n)&&(a=we(o,n),r=Gn(r,V(),s.snap.getChild(a)));else if(s.children){if(We(n,o))a=we(n,o),r=Vc(r,a,s.children);else if(We(o,n))if(a=we(o,n),W(a))r=Vc(r,V(),s.children);else{const l=dn(s.children,$(a));if(l){const c=l.getChild(Q(a));r=Gn(r,V(),c)}}}else throw wn("WriteRecord should have .snap or .children")}}return r}function Cf(t,e,n,r,i){if(!r&&!i){const s=Kt(t.visibleWrites,e);if(s!=null)return s;{const o=wt(t.visibleWrites,e);if(To(o))return n;if(n==null&&!So(o,V()))return null;{const a=n||N.EMPTY_NODE;return gn(o,a)}}}else{const s=wt(t.visibleWrites,e);if(!i&&To(s))return n;if(!i&&n==null&&!So(s,V()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(We(c.path,e)||We(e,c.path))},a=wf(t.allWrites,o,e),l=n||N.EMPTY_NODE;return gn(a,l)}}}function ME(t,e,n){let r=N.EMPTY_NODE;const i=Kt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=wt(t.visibleWrites,e);return n.forEachChild(te,(o,a)=>{const l=gn(wt(s,new K(o)),a);r=r.updateImmediateChild(o,l)}),jc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=wt(t.visibleWrites,e);return jc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function LE(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ie(e,n);if(So(t.visibleWrites,s))return null;{const o=wt(t.visibleWrites,s);return To(o)?i.getChild(n):gn(o,i.getChild(n))}}function FE(t,e,n,r){const i=ie(e,n),s=Kt(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=wt(t.visibleWrites,i);return gn(o,r.getNode().getImmediateChild(n))}else return null}function BE(t,e){return Kt(t.visibleWrites,e)}function UE(t,e,n,r,i,s,o){let a;const l=wt(t.visibleWrites,e),c=Kt(l,V());if(c!=null)a=c;else if(n!=null)a=gn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&u.length<i;)d(f,r)!==0&&u.push(f),f=h.getNext();return u}else return[]}function WE(){return{visibleWrites:He.empty(),allWrites:[],lastWriteId:-1}}function Di(t,e,n,r){return Cf(t.writeTree,t.treePath,e,n,r)}function Na(t,e){return ME(t.writeTree,t.treePath,e)}function zc(t,e,n,r){return LE(t.writeTree,t.treePath,e,n,r)}function xi(t,e){return BE(t.writeTree,ie(t.treePath,e))}function $E(t,e,n,r,i,s){return UE(t.writeTree,t.treePath,e,n,r,i,s)}function Oa(t,e,n){return FE(t.writeTree,t.treePath,e,n)}function Ef(t,e){return Sf(ie(t.treePath,e),t.writeTree)}function Sf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ir(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,rr(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,pn(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ir(r,e.snapshotNode,i.oldSnap));else throw wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Tf=new GE;class ka{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Dt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Oa(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jt(this.viewCache_),s=$E(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(t){return{filter:t}}function qE(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jE(t,e,n,r,i){const s=new HE;let o,a;if(n.type===$e.OVERWRITE){const c=n;c.source.fromUser?o=Do(t,e,c.path,c.snap,r,i,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=Ri(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===$e.MERGE){const c=n;c.source.fromUser?o=KE(t,e,c.path,c.children,r,i,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=xo(t,e,c.path,c.children,r,i,a,s))}else if(n.type===$e.ACK_USER_WRITE){const c=n;c.revert?o=QE(t,e,c.path,r,i,s):o=YE(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===$e.LISTEN_COMPLETE)o=JE(t,e,n.path,r,s);else throw wn("Unknown operation type: "+n.type);const l=s.getChanges();return zE(e,o,l),{viewCache:o,changes:l}}function zE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ti(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(mf(Ti(e)))}}function Df(t,e,n,r,i,s){const o=e.eventCache;if(xi(r,n)!=null)return e;{let a,l;if(W(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=jt(e),u=c instanceof N?c:N.EMPTY_NODE,d=Na(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Di(r,jt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=$(n);if(c===".priority"){C(Tt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=zc(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Q(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=zc(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Oa(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Hn(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Ri(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),f,null)}else{const f=$(n);if(!l.isCompleteForPath(n)&&Tt(n)>1)return e;const p=Q(n),v=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,Tf,null)}const d=yf(e,c,l.isFullyInitialized()||W(n),u.filtersNodes()),h=new ka(i,d,s);return Df(t,d,n,i,h,a)}function Do(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new ka(i,e,s);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Hn(e,c,!0,t.filter.filtersNodes());else{const d=$(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Hn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Q(n),f=a.getNode().getImmediateChild(d);let p;if(W(h))p=r;else{const g=u.getCompleteChild(d);g!=null?af(h)===".priority"&&g.getChild(cf(h)).isEmpty()?p=g:p=g.updateChild(h,r):p=N.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=Hn(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Kc(t,e){return t.eventCache.isCompleteForChild(e)}function KE(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ie(n,l);Kc(e,$(u))&&(a=Do(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ie(n,l);Kc(e,$(u))||(a=Do(t,a,u,c,i,s,o))}),a}function Yc(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function xo(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=r:c=new Z(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Yc(t,f,h);l=Ri(t,l,new K(d),p,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=Yc(t,p,h);l=Ri(t,l,new K(d),g,i,s,o,a)}}),l}function YE(t,e,n,r,i,s,o){if(xi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ri(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let c=new Z(null);return l.getNode().forEachChild(nn,(u,d)=>{c=c.set(new K(u),d)}),xo(t,e,n,c,i,s,a,o)}else return e}else{let c=new Z(null);return r.foreach((u,d)=>{const h=ie(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),xo(t,e,n,c,i,s,a,o)}}function JE(t,e,n,r,i){const s=e.serverCache,o=yf(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return Df(t,o,n,r,Tf,i)}function QE(t,e,n,r,i,s){let o;if(xi(r,n)!=null)return e;{const a=new ka(r,e,i),l=e.eventCache.getNode();let c;if(W(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Di(r,jt(e));else{const d=e.serverCache.getNode();C(d instanceof N,"serverChildren would be complete if leaf node"),u=Na(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=$(n);let d=Oa(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Q(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,N.EMPTY_NODE,Q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Di(r,jt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||xi(r,V())!=null,Hn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new xa(r.getIndex()),s=mE(r);this.processor_=VE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(N.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(N.EMPTY_NODE,a.getNode(),null),u=new Dt(l,o.isFullyInitialized(),i.filtersNodes()),d=new Dt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ls(d,u),this.eventGenerator_=new EE(this.query_)}get query(){return this.query_}}function ZE(t){return t.viewCache_.serverCache.getNode()}function eS(t){return Ti(t.viewCache_)}function tS(t,e){const n=jt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function Jc(t){return t.eventRegistrations_.length===0}function nS(t,e){t.eventRegistrations_.push(e)}function Qc(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Xc(t,e,n,r){e.type===$e.MERGE&&e.source.queryId!==null&&(C(jt(t.viewCache_),"We should always have a full cache before handling merges"),C(Ti(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=jE(t.processor_,i,e,n,r);return qE(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,xf(t,s.changes,s.viewCache.eventCache.getNode(),null)}function rS(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(s,o)=>{r.push(pn(s,o))}),n.isFullyInitialized()&&r.push(mf(n.getNode())),xf(t,r,n.getNode(),e)}function xf(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return SE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;class Rf{constructor(){this.views=new Map}}function iS(t){C(!Pi,"__referenceConstructor has already been defined"),Pi=t}function sS(){return C(Pi,"Reference.ts has not been loaded"),Pi}function oS(t){return t.views.size===0}function Ma(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),Xc(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Xc(o,e,n,r));return s}}function Pf(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Di(n,i?r:null),l=!1;a?l=!0:r instanceof N?(a=Na(n,r),l=!1):(a=N.EMPTY_NODE,l=!1);const c=ls(new Dt(a,l,!1),new Dt(r,i,!1));return new XE(e,c)}return o}function aS(t,e,n,r,i,s){const o=Pf(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),nS(o,n),rS(o,n)}function lS(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=xt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Qc(c,n,r)),Jc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Qc(l,n,r)),Jc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!xt(t)&&s.push(new(sS())(e._repo,e._path)),{removed:s,events:o}}function Af(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ct(t,e){let n=null;for(const r of t.views.values())n=n||tS(r,e);return n}function Nf(t,e){if(e._queryParams.loadsAllData())return us(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Of(t,e){return Nf(t,e)!=null}function xt(t){return us(t)!=null}function us(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai;function cS(t){C(!Ai,"__referenceConstructor has already been defined"),Ai=t}function uS(){return C(Ai,"Reference.ts has not been loaded"),Ai}let dS=1;class Zc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=WE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kf(t,e,n,r,i){return RE(t.pendingWriteTree_,e,n,r,i),i?Rr(t,new qt(bf(),e,n)):[]}function Ft(t,e,n=!1){const r=PE(t.pendingWriteTree_,e);if(AE(t.pendingWriteTree_,e)){let s=new Z(null);return r.snap!=null?s=s.set(V(),!0):Te(r.children,o=>{s=s.set(new K(o),!0)}),Rr(t,new Si(r.path,s,n))}else return[]}function xr(t,e,n){return Rr(t,new qt(Pa(),e,n))}function hS(t,e,n){const r=Z.fromObject(n);return Rr(t,new ar(Pa(),e,r))}function fS(t,e){return Rr(t,new or(Pa(),e))}function pS(t,e,n){const r=Fa(t,n);if(r){const i=Ba(r),s=i.path,o=i.queryId,a=we(s,e),l=new or(Aa(o),a);return Ua(t,s,l)}else return[]}function Mf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Of(o,e))){const l=lS(o,e,n,r);oS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>xt(f));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=_S(h);for(let p=0;p<f.length;++p){const g=f[p],v=g.query,m=Uf(t,g);t.listenProvider_.startListening(Vn(v),lr(t,v),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Vn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(ds(h));t.listenProvider_.stopListening(Vn(h),f)}))}bS(t,c)}return a}function Lf(t,e,n,r){const i=Fa(t,r);if(i!=null){const s=Ba(i),o=s.path,a=s.queryId,l=we(o,e),c=new qt(Aa(a),l,n);return Ua(t,o,c)}else return[]}function gS(t,e,n,r){const i=Fa(t,r);if(i){const s=Ba(i),o=s.path,a=s.queryId,l=we(o,e),c=Z.fromObject(n),u=new ar(Aa(a),l,c);return Ua(t,o,u)}else return[]}function vS(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const p=we(h,i);s=s||Ct(f,p),o=o||xt(f)});let a=t.syncPointTree_.get(i);a?(o=o||xt(a),s=s||Ct(a,V())):(a=new Rf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=N.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=Ct(p,V());g&&(s=s.updateImmediateChild(f,g))}));const c=Of(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ds(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=yS();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=cs(t.pendingWriteTree_,i);let d=aS(a,e,n,u,s,l);if(!c&&!o&&!r){const h=Nf(a,e);d=d.concat(IS(t,e,h))}return d}function La(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=we(o,e),c=Ct(a,l);if(c)return c});return Cf(i,e,s,n,!0)}function mS(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=we(c,n);r=r||Ct(u,d)});let i=t.syncPointTree_.get(n);i?r=r||Ct(i,V()):(i=new Rf,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Dt(r,!0,!1):null,a=cs(t.pendingWriteTree_,e._path),l=Pf(i,e,a,s?o.getNode():N.EMPTY_NODE,s);return eS(l)}function Rr(t,e){return Ff(e,t.syncPointTree_,null,cs(t.pendingWriteTree_,V()))}function Ff(t,e,n,r){if(W(t.path))return Bf(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Ct(i,V()));let s=[];const o=$(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Ef(r,o);s=s.concat(Ff(a,l,c,u))}return i&&(s=s.concat(Ma(i,t,r,n))),s}}function Bf(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Ct(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ef(r,o),u=t.operationForChild(o);u&&(s=s.concat(Bf(u,a,l,c)))}),i&&(s=s.concat(Ma(i,t,r,n))),s}function Uf(t,e){const n=e.query,r=lr(t,n);return{hashFn:()=>(ZE(e)||N.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?pS(t,n._path,r):fS(t,n._path);{const s=vC(i,n);return Mf(t,n,null,s)}}}}function lr(t,e){const n=ds(e);return t.queryToTagMap.get(n)}function ds(t){return t._path.toString()+"$"+t._queryIdentifier}function Fa(t,e){return t.tagToQueryMap.get(e)}function Ba(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function Ua(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=cs(t.pendingWriteTree_,e);return Ma(r,n,i,null)}function _S(t){return t.fold((e,n,r)=>{if(n&&xt(n))return[us(n)];{let i=[];return n&&(i=Af(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function Vn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(uS())(t._repo,t._path):t}function bS(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ds(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function yS(){return dS++}function IS(t,e,n){const r=e._path,i=lr(t,e),s=Uf(t,n),o=t.listenProvider_.startListening(Vn(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)C(!xt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!W(c)&&u&&xt(u))return[us(u).query];{let h=[];return u&&(h=h.concat(Af(u).map(f=>f.query))),Te(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Vn(u),lr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wa(n)}node(){return this.node_}}class $a{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ie(this.path_,e);return new $a(this.syncTree_,n)}node(){return La(this.syncTree_,this.path_)}}const wS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},eu=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return CS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ES(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},CS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},ES=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},SS=function(t,e,n,r){return Ha(e,new $a(n,t),r)},Wf=function(t,e,n){return Ha(t,new Wa(e),n)};function Ha(t,e,n){const r=t.getPriority().val(),i=eu(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=eu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new oe(a,le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new oe(i))),o.forEachChild(te,(a,l)=>{const c=Ha(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Va(t,e){let n=e instanceof K?e:new K(e),r=t,i=$(n);for(;i!==null;){const s=dn(r.node.children,i)||{children:{},childCount:0};r=new Ga(i,r,s),n=Q(n),i=$(n)}return r}function Dn(t){return t.node.value}function $f(t,e){t.node.value=e,Ro(t)}function Hf(t){return t.node.childCount>0}function TS(t){return Dn(t)===void 0&&!Hf(t)}function hs(t,e){Te(t.node.children,(n,r)=>{e(new Ga(n,t,r))})}function Gf(t,e,n,r){n&&!r&&e(t),hs(t,i=>{Gf(i,e,!0,r)}),n&&r&&e(t)}function DS(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pr(t){return new K(t.parent===null?t.name:Pr(t.parent)+"/"+t.name)}function Ro(t){t.parent!==null&&xS(t.parent,t.name,t)}function xS(t,e,n){const r=TS(n),i=lt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Ro(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ro(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=/[\[\].#$\/\u0000-\u001F\u007F]/,PS=/[\[\].#$\u0000-\u001F\u007F]/,Js=10*1024*1024,Vf=function(t){return typeof t=="string"&&t.length!==0&&!RS.test(t)},qf=function(t){return typeof t=="string"&&t.length!==0&&!PS.test(t)},AS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qf(t)},NS=function(t,e,n,r){r&&e===void 0||qa(_a(t,"value"),e,n)},qa=function(t,e,n){const r=n instanceof K?new YC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+kt(r));if(typeof e=="function")throw new Error(t+"contains a function "+kt(r)+" with contents = "+e.toString());if(Uh(e))throw new Error(t+"contains "+e.toString()+" "+kt(r));if(typeof e=="string"&&e.length>Js/3&&os(e)>Js)throw new Error(t+"contains a string greater than "+Js+" utf8 bytes "+kt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Vf(o)))throw new Error(t+" contains an invalid key ("+o+") "+kt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JC(r,o),qa(t,a,r),QC(r)}),i&&s)throw new Error(t+' contains ".value" child '+kt(r)+" in addition to actual children.")}},jf=function(t,e,n,r){if(!(r&&n===void 0)&&!qf(n))throw new Error(_a(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OS=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jf(t,e,n,r)},kS=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},MS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!AS(n))throw new Error(_a(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!uf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Je(t,e,n){zf(t,n),FS(t,r=>We(r,e)||We(e,r))}function FS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(BS(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function BS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ut&&ge("event: "+n.toString()),Tn(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="repo_interrupt",WS=25;class $S{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ei(),this.transactionQueueTree_=new Ga,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function HS(t,e,n){if(t.stats_=Ea(t.repoInfo_),t.forceRestClient_||yC())t.server_=new Ci(t.repoInfo_,(r,i,s,o)=>{tu(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>nu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{re(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new st(t.repoInfo_,e,(r,i,s,o)=>{tu(t,r,i,s,o)},r=>{nu(t,r)},r=>{VS(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=SC(t.repoInfo_,()=>new CE(t.stats_,t.server_)),t.infoData_=new _E,t.infoSyncTree_=new Zc({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=xr(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),za(t,"connected",!1),t.serverSyncTree_=new Zc({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Je(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function GS(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ja(t){return wS({timestamp:GS(t)})}function tu(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=mi(n,c=>le(c));o=gS(t.serverSyncTree_,s,l,i)}else{const l=le(n);o=Lf(t.serverSyncTree_,s,l,i)}else if(r){const l=mi(n,c=>le(c));o=hS(t.serverSyncTree_,s,l)}else{const l=le(n);o=xr(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ps(t,s)),Je(t.eventQueue_,a,o)}function nu(t,e){za(t,"connected",e),e===!1&&zS(t)}function VS(t,e){Te(e,(n,r)=>{za(t,n,r)})}function za(t,e,n){const r=new K("/.info/"+e),i=le(n);t.infoData_.updateSnapshot(r,i);const s=xr(t.infoSyncTree_,r,i);Je(t.eventQueue_,r,s)}function Kf(t){return t.nextWriteId_++}function qS(t,e,n){const r=mS(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=le(i).withIndex(e._queryParams.getIndex());vS(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=xr(t.serverSyncTree_,e._path,s);else{const a=lr(t.serverSyncTree_,e);o=Lf(t.serverSyncTree_,e._path,s,a)}return Je(t.eventQueue_,e._path,o),Mf(t.serverSyncTree_,e,n,null,!0),s},i=>(fs(t,"get for query "+re(e)+" failed: "+i),Promise.reject(new Error(i))))}function jS(t,e,n,r,i){fs(t,"set",{path:e.toString(),value:n,priority:r});const s=ja(t),o=le(n,r),a=La(t.serverSyncTree_,e),l=Wf(o,a,s),c=Kf(t),u=kf(t.serverSyncTree_,e,l,c,!0);zf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||Se("set at "+e+" failed: "+h);const g=Ft(t.serverSyncTree_,c,!p);Je(t.eventQueue_,e,g),YS(t,i,h,f)});const d=Zf(t,e);ps(t,d),Je(t.eventQueue_,d,[])}function zS(t){fs(t,"onDisconnectEvents");const e=ja(t),n=Ei();Eo(t.onDisconnect_,V(),(i,s)=>{const o=SS(i,s,t.serverSyncTree_,e);_f(n,i,o)});let r=[];Eo(n,V(),(i,s)=>{r=r.concat(xr(t.serverSyncTree_,i,s));const o=Zf(t,i);ps(t,o)}),t.onDisconnect_=Ei(),Je(t.eventQueue_,V(),r)}function KS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(US)}function fs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ge(n,...e)}function YS(t,e,n,r){e&&Tn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Yf(t,e,n){return La(t.serverSyncTree_,e,n)||N.EMPTY_NODE}function Ka(t,e=t.transactionQueueTree_){if(e||gs(t,e),Dn(e)){const n=Qf(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&JS(t,Pr(e),n)}else Hf(e)&&hs(e,n=>{Ka(t,n)})}function JS(t,e,n){const r=n.map(c=>c.currentWriteId),i=Yf(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=we(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{fs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Ft(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();gs(t,Va(t.transactionQueueTree_,e)),Ka(t,t.transactionQueueTree_),Je(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Tn(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Se("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ps(t,e)}},o)}function ps(t,e){const n=Jf(t,e),r=Pr(n),i=Qf(t,n);return QS(t,i,r),r}function QS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=we(n,l.path);let u=!1,d;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Ft(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=WS)u=!0,d="maxretry",i=i.concat(Ft(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Yf(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){qa("transaction failed: Data returned ",f,l.path);let p=le(f);typeof f=="object"&&f!=null&&lt(f,".priority")||(p=p.updatePriority(h.getPriority()));const v=l.currentWriteId,m=ja(t),b=Wf(p,h,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=b,l.currentWriteId=Kf(t),o.splice(o.indexOf(v),1),i=i.concat(kf(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(Ft(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",i=i.concat(Ft(t.serverSyncTree_,l.currentWriteId,!0))}Je(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}gs(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Tn(r[a]);Ka(t,t.transactionQueueTree_)}function Jf(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&Dn(r)===void 0;)r=Va(r,n),e=Q(e),n=$(e);return r}function Qf(t,e){const n=[];return Xf(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Xf(t,e,n){const r=Dn(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);hs(e,i=>{Xf(t,i,n)})}function gs(t,e){const n=Dn(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,$f(e,n.length>0?n:void 0)}hs(e,r=>{gs(t,r)})}function Zf(t,e){const n=Pr(Jf(t,e)),r=Va(t.transactionQueueTree_,e);return DS(r,i=>{Qs(t,i)}),Qs(t,r),Gf(r,i=>{Qs(t,i)}),n}function Qs(t,e){const n=Dn(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ft(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?$f(e,void 0):n.length=s+1,Je(t.eventQueue_,Pr(e),i);for(let o=0;o<r.length;o++)Tn(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Se(`Invalid query segment '${n}' in query '${t}'`)}return e}const ru=function(t,e){const n=e0(t),r=n.namespace;n.domain==="firebase.com"&&ot(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ot("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||dC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qh(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},e0=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=XS(t.substring(u,d)));const h=ZS(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+re(this.snapshot.exportVal())}}class n0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:af(this._path)}get ref(){return new ct(this._repo,this._path)}get _queryIdentifier(){const e=Hc(this._queryParams),n=wa(e);return n==="{}"?"default":n}get _queryObject(){return Hc(this._queryParams)}isEqual(e){if(e=Ne(e),!(e instanceof Ya))return!1;const n=this._repo===e._repo,r=uf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+KC(this._path)}}class ct extends Ya{constructor(e,n){super(e,n,new Ra,!1)}get parent(){const e=cf(this._path);return e===null?null:new ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=Ni(this.ref,e);return new cr(this._node.getChild(n),r,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cr(i,Ni(this.ref,r),te)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function iu(t,e){return t=Ne(t),t._checkNotDeleted("ref"),e!==void 0?Ni(t._root,e):t._root}function Ni(t,e){return t=Ne(t),$(t._path)===null?OS("child","path",e,!1):jf("child","path",e,!1),new ct(t._repo,ie(t._path,e))}function i0(t,e){t=Ne(t),kS("set",t._path),NS("set",e,t._path,!1);const n=new ss;return jS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function s0(t){t=Ne(t);const e=new r0(()=>{}),n=new Ja(e);return qS(t._repo,t,n).then(r=>new cr(r,new ct(t._repo,t._path),t._queryParams.getIndex()))}class Ja{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new t0("value",this,new cr(e.snapshotNode,new ct(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new n0(this,e,n):null}matches(e){return e instanceof Ja?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}iS(ct);cS(ct);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="FIREBASE_DATABASE_EMULATOR_HOST",Po={};let a0=!1;function l0(t,e,n,r){t.repoInfo_=new Qh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function c0(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ot("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ge("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ru(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[o0]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=ru(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new tn(tn.OWNER):new wC(t.name,t.options,e);MS("Invalid Firebase Database URL",o),W(o.path)||ot("Database URL must point to the root of a Firebase Database (not including a child path).");const d=d0(a,t,u,new IC(t.name,n));return new h0(d,t)}function u0(t,e){const n=Po[e];(!n||n[t.key]!==t)&&ot(`Database ${e}(${t.repoInfo_}) has already been deleted.`),KS(t),delete n[t.key]}function d0(t,e,n,r){let i=Po[e.name];i||(i={},Po[e.name]=i);let s=i[t.toURLString()];return s&&ot("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $S(t,a0,n,r),i[t.toURLString()]=s,s}class h0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(HS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ct(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(u0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ot("Cannot call "+e+" on a deleted database.")}}function su(t=Oh(),e){const n=Ia(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=FI("database");r&&f0(n,...r)}return n}function f0(t,e,n,r={}){t=Ne(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ot("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ot('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new tn(tn.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:BI(r.mockUserToken,t.app.options.projectId);s=new tn(o)}l0(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){oC(En),hn(new Ht("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return c0(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),It(Sc,Tc,t),It(Sc,Tc,"esm2017")}st.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};st.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};p0();function Qa(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ep(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g0=ep,tp=new Er("auth","Firebase",ep());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new ba("@firebase/auth");function v0(t,...e){Oi.logLevel<=j.WARN&&Oi.warn(`Auth (${En}): ${t}`,...e)}function Xr(t,...e){Oi.logLevel<=j.ERROR&&Oi.error(`Auth (${En}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,...e){throw Xa(t,...e)}function Ke(t,...e){return Xa(t,...e)}function np(t,e,n){const r=Object.assign(Object.assign({},g0()),{[e]:n});return new Er("auth","Firebase",r).create(e,{appName:t.name})}function m0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qe(t,"argument-error"),np(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xa(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tp.create(t,...e)}function M(t,e,...n){if(!t)throw Xa(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xr(e),new Error(e)}function at(t,e){t||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _0(){return ou()==="http:"||ou()==="https:"}function ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_0()||UI()||"connection"in navigator)?navigator.onLine:!0}function y0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=ma()||Dh()}get(){return b0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new Ar(3e4,6e4);function ip(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return sp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Cn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),rp.fetch()(op(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},I0),e);try{const i=new E0(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw np(t,u,c);Qe(t,u)}}catch(i){if(i instanceof Pt)throw i;Qe(t,"network-request-failed",{message:String(i)})}}async function C0(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&Qe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function op(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Za(t.config,i):`${t.config.apiScheme}://${i}`}class E0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),w0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ke(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function T0(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D0(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=el(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qn(Xs(i.auth_time)),issuedAtTime:qn(Xs(i.iat)),expirationTime:qn(Xs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xs(t){return Number(t)*1e3}function el(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xr("JWT malformed, contained fewer than 3 sections"),null;try{const i=vi(n);return i?JSON.parse(i):(Xr("Failed to decode base64 JWT payload"),null)}catch(i){return Xr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function x0(t){const e=el(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pt&&R0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function R0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ur(t,T0(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?O0(s.providerUserInfo):[],a=N0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ap(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function A0(t){const e=Ne(t);await ki(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function O0(t){return t.map(e=>{var{providerId:n}=e,r=Qa(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,e){const n=await sp(t,{},async()=>{const r=Cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=op(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):x0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await k0(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new dr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dr,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ap(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D0(this,e)}reload(){return A0(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ki(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,S0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:y,emailVerified:I,isAnonymous:T,providerData:D,stsTokenManager:F}=n;M(y&&F,e,"internal-error");const L=dr.fromJSON(this.name,F);M(typeof y=="string",e,"internal-error"),ht(d,e.name),ht(h,e.name),M(typeof I=="boolean",e,"internal-error"),M(typeof T=="boolean",e,"internal-error"),ht(f,e.name),ht(p,e.name),ht(g,e.name),ht(v,e.name),ht(m,e.name),ht(b,e.name);const k=new Wt({uid:y,auth:e,email:h,emailVerified:I,displayName:d,isAnonymous:T,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:L,createdAt:m,lastLoginAt:b});return D&&Array.isArray(D)&&(k.providerData=D.map(S=>Object.assign({},S))),v&&(k._redirectEventId=v),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new dr;i.updateFromServerResponse(n);const s=new Wt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ki(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=new Map;function it(t){at(t instanceof Function,"Expected a class definition");let e=au.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,au.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lp.type="NONE";const lu=lp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(t,e,n){return`firebase:${t}:${e}:${n}`}class rn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rn(it(lu),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||it(lu);const o=Zr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Wt._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new rn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new rn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fp(e))return"Blackberry";if(pp(e))return"Webos";if(tl(e))return"Safari";if((e.includes("chrome/")||up(e))&&!e.includes("edge/"))return"Chrome";if(hp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function cp(t=me()){return/firefox\//i.test(t)}function tl(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function up(t=me()){return/crios\//i.test(t)}function dp(t=me()){return/iemobile/i.test(t)}function hp(t=me()){return/android/i.test(t)}function fp(t=me()){return/blackberry/i.test(t)}function pp(t=me()){return/webos/i.test(t)}function vs(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function M0(t=me()){var e;return vs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function L0(){return WI()&&document.documentMode===10}function gp(t=me()){return vs(t)||hp(t)||pp(t)||fp(t)||/windows phone/i.test(t)||dp(t)}function F0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t,e=[]){let n;switch(t){case"Browser":n=cu(me());break;case"Worker":n=`${cu(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${En}/${r}`}async function mp(t,e){return Nr(t,"GET","/v2/recaptchaConfig",ip(t,e))}function uu(t){return t!==void 0&&t.enterprise!==void 0}class _p{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ke("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",B0().appendChild(r)})}function U0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const W0="https://www.google.com/recaptcha/enterprise.js?render=",$0="recaptcha-enterprise",H0="NO_RECAPTCHA";class G0{constructor(e){this.type=$0,this.auth=Or(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _p(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;uu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(H0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&uu(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}bp(W0+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new du(this),this.idTokenSubscription=new du(this),this.beforeStateQueue=new V0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ki(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}async initializeRecaptchaConfig(){const e=await mp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new _p(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new G0(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await rn.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&v0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Or(t){return Ne(t)}class du{constructor(e){this.auth=e,this.observer=null,this.addObserver=YI(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t,e){const n=Ia(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_i(s,e??{}))return i;Qe(i,"already-initialized")}return n.initialize({options:e})}function z0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function K0(t,e,n){const r=Or(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=yp(e),{host:o,port:a}=Y0(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||J0()}function yp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Y0(t){const e=yp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hu(o)}}}function hu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function J0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(t,e){return C0(t,"POST","/v1/accounts:signInWithIdp",ip(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="http://localhost";class zt extends Ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qa(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sn(e,n)}buildRequest(){const e={requestUri:Q0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends nl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends kr{constructor(){super("facebook.com")}static credential(e){return zt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return et.credential(n,r)}catch{return null}}}et.GOOGLE_SIGN_IN_METHOD="google.com";et.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends kr{constructor(){super("github.com")}static credential(e){return zt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends kr{constructor(){super("twitter.com")}static credential(e,n){return zt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Wt._fromIdTokenResponse(e,r,i),o=fu(r);return new vn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fu(r);return new vn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Pt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mi(e,n,r,i)}}function wp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mi._fromErrorAndOperation(t,s,e,r):s})}async function X0(t,e,n=!1){const r=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ur(t,wp(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=el(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),vn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e,n=!1){const r="signIn",i=await wp(t,r,e),s=await vn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tT(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function nT(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function rT(t){return Ne(t).signOut()}const Li="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Li,"1"),this.storage.removeItem(Li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){const t=me();return tl(t)||vs(t)}const sT=1e3,oT=10;class Ep extends Cp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iT()&&F0(),this.fallbackToPolling=gp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);L0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ep.type="LOCAL";const aT=Ep;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp extends Cp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sp.type="SESSION";const Tp=Sp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await lT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=rl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return window}function uT(t){Ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function dT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fT(){return Dp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="firebaseLocalStorageDb",pT=1,Fi="firebaseLocalStorage",Rp="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _s(t,e){return t.transaction([Fi],e?"readwrite":"readonly").objectStore(Fi)}function gT(){const t=indexedDB.deleteDatabase(xp);return new Mr(t).toPromise()}function No(){const t=indexedDB.open(xp,pT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fi,{keyPath:Rp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fi)?e(r):(r.close(),await gT(),e(await No()))})})}async function pu(t,e,n){const r=_s(t,!0).put({[Rp]:e,value:n});return new Mr(r).toPromise()}async function vT(t,e){const n=_s(t,!1).get(e),r=await new Mr(n).toPromise();return r===void 0?null:r.value}function gu(t,e){const n=_s(t,!0).delete(e);return new Mr(n).toPromise()}const mT=800,_T=3;class Pp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await No(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_T)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ms._getInstance(fT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dT(),!this.activeServiceWorker)return;this.sender=new cT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await No();return await pu(e,Li,"1"),await gu(e,Li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=_s(i,!1).getAll();return new Mr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pp.type="LOCAL";const bT=Pp;new Ar(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e){return e?it(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yT(t){return eT(t.auth,new il(t),t.bypassAuthState)}function IT(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Z0(n,new il(t),t.bypassAuthState)}async function wT(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),X0(n,new il(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yT;case"linkViaPopup":case"linkViaRedirect":return wT;case"reauthViaPopup":case"reauthViaRedirect":return IT;default:Qe(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Ar(2e3,1e4);async function ET(t,e,n){const r=Or(t);m0(t,e,nl);const i=Ap(r,n);return new Bt(r,"signInViaPopup",e,i).executeNotNull()}class Bt extends Np{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CT.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="pendingRedirect",ei=new Map;class TT extends Np{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ei.get(this.auth._key());if(!e){try{const r=await DT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ei.set(this.auth._key(),e)}return this.bypassAuthState||ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DT(t,e){const n=PT(e),r=RT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function xT(t,e){ei.set(t._key(),e)}function RT(t){return it(t._redirectPersistence)}function PT(t){return Zr(ST,t.config.apiKey,t.name)}async function AT(t,e,n=!1){const r=Or(t),i=Ap(r,e),o=await new TT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=10*60*1e3;class OT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Op(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=NT&&this.cachedEventUids.clear(),this.cachedEventUids.has(vu(e))}saveEventToCache(e){this.cachedEventUids.add(vu(e)),this.lastProcessedEventTime=Date.now()}}function vu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Op({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Op(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FT=/^https?/;async function BT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MT(t);for(const n of e)try{if(UT(n))return}catch{}Qe(t,"unauthorized-domain")}function UT(t){const e=Ao(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FT.test(n))return!1;if(LT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new Ar(3e4,6e4);function mu(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $T(t){return new Promise((e,n)=>{var r,i,s;function o(){mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mu(),n(Ke(t,"network-request-failed"))},timeout:WT.get()})}if(!((i=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ye().gapi)===null||s===void 0)&&s.load)o();else{const a=U0("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},bp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ti=null,e})}let ti=null;function HT(t){return ti=ti||$T(t),ti}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=new Ar(5e3,15e3),VT="__/auth/iframe",qT="emulator/auth/iframe",jT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KT(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Za(e,qT):`https://${t.config.authDomain}/${VT}`,r={apiKey:e.apiKey,appName:t.name,v:En},i=zT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Cn(r).slice(1)}`}async function YT(t){const e=await HT(t),n=Ye().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:KT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=Ye().setTimeout(()=>{s(o)},GT.get());function l(){Ye().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QT=500,XT=600,ZT="_blank",eD="http://localhost";class _u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tD(t,e,n,r=QT,i=XT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},JT),{width:r.toString(),height:i.toString(),top:s,left:o}),c=me().toLowerCase();n&&(a=up(c)?ZT:n),cp(c)&&(e=e||eD,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(M0(c)&&a!=="_self")return nD(e||"",a),new _u(null);const d=window.open(e||"",a,u);M(d,t,"popup-blocked");try{d.focus()}catch{}return new _u(d)}function nD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD="__/auth/handler",iD="emulator/auth/handler",sD=encodeURIComponent("fac");async function bu(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:En,eventId:i};if(e instanceof nl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",po(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof kr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${sD}=${encodeURIComponent(l)}`:"";return`${oD(t)}?${Cn(a).slice(1)}${c}`}function oD({config:t}){return t.emulator?Za(t,iD):`https://${t.authDomain}/${rD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="webStorageSupport";class aD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tp,this._completeRedirectFn=AT,this._overrideRedirectResult=xT}async _openPopup(e,n,r,i){var s;at((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bu(e,n,r,Ao(),i);return tD(e,o,rl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await bu(e,n,r,Ao(),i);return uT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(at(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YT(e),r=new OT(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zs,{type:Zs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zs];o!==void 0&&n(!!o),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gp()||tl()||vs()}}const lD=aD;var yu="@firebase/auth",Iu="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function dD(t){hn(new Ht("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vp(t)},c=new q0(r,i,s,l);return z0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hn(new Ht("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(r=>new cD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(yu,Iu,uD(t)),It(yu,Iu,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=5*60,fD=Th("authIdTokenMaxAge")||hD;let wu=null;const pD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fD)return;const i=n==null?void 0:n.token;wu!==i&&(wu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eo(t=Oh()){const e=Ia(t,"auth");if(e.isInitialized())return e.getImmediate();const n=j0(t,{popupRedirectResolver:lD,persistence:[bT,aT,Tp]}),r=Th("authTokenSyncURL");if(r){const s=pD(r);nT(n,s,()=>s(n.currentUser)),tT(n,o=>s(o))}const i=Eh("auth");return i&&K0(n,`http://${i}`),n}dD("Browser");const gD=[{title:"to do",cards:[{id:qe(),content:"add sprites"},{id:qe(),content:"implement main menu"},{id:qe(),content:"add sounds"}]},{title:"in progress",cards:[{id:qe(),content:"write story"},{id:qe(),content:"add levels"},{id:qe(),content:"send demo to friends"},{id:qe(),content:"marketing"}]},{title:"done",cards:[{id:qe(),content:"implement player movement"},{id:qe(),content:"meet with investors to discuss marketing strategy and budget"}]}];function vD(){const t="data-rbd-drag-handle-draggable-id";Nh({apiKey:"AIzaSyDCI-G8rde1guG1vIVhBzb9p1e8jzSP3a4",authDomain:"trello-clone-b3c76.firebaseapp.com",databaseURL:"https://trello-clone-b3c76-default-rtdb.europe-west1.firebasedatabase.app",projectId:"trello-clone-b3c76",storageBucket:"trello-clone-b3c76.appspot.com",messagingSenderId:"712863136216",appId:"1:712863136216:web:00020f5948777f3f415aad"});const n=new et,[r,i]=ne(void 0),[s,o]=ne([]),[a,l]=ne({}),c=S=>{if(o(S),!r)return;const E=su();i0(iu(E,`users/${r}`),{lists:S})},u=(S,E,R)=>{const[O]=S.splice(E,1);return S.splice(R,0,O),S},d=(S,E,R,O)=>{const B=Array.from(S),J=Array.from(E),[z]=B.splice(R.index,1);J.splice(O.index,0,z);const se={};return se[R.droppableId]=B,se[O.droppableId]=J,se},h=S=>{const E=[...s];E.push({title:S,cards:[]}),c(E)},f=S=>{const E=[...s];E.splice(S,1),c(E)},p=(S,E)=>{const R=[...s];R[S].cards||(R[S].cards=[]),R[S].cards.push({id:qe(),content:E}),c(R)},g=(S,E)=>{const R=[...s];R[S].cards.splice(E,1),c(R)},v=(S,E,R)=>{const O=[...s];O[S].cards[E].todos=R,c(O)},m=(S,E,R)=>{const O=[...s];O[S].cards[E].description=R,c(O)},b=(S,E,R)=>{const O=[...s];O[S].cards[E].content=R,c(O)},y=(S,E)=>{const R=[...s];R[S].title=E,c(R)},I=S=>{const E=F(S.draggableId);if(!E)return;const{clientHeight:R,clientWidth:O}=E,B=S.source.index,J=E.parentElement,z=window.getComputedStyle(J);if(!J)return;const se=parseFloat(z.paddingTop)+[...J.children].slice(0,B).reduce((_e,Fe)=>{const be=parseFloat(window.getComputedStyle(Fe).marginBottom);return _e+Fe.clientHeight+be},0);l({clientX:parseFloat(z.paddingLeft),clientY:se,clientWidth:O,clientHeight:R})},T=S=>{l({});const{source:E,destination:R,type:O}=S;if(!R)return;const B=parseInt(E.droppableId),J=parseInt(R.droppableId),z=[...s];switch(O){case Wn.List:u(z,E.index,R.index);break;case Wn.Card:if(B===J){u(z[B].cards,E.index,R.index);break}else{const se=d(s[B].cards,s[J].cards,E,R);z[B].cards=se[B],z[J].cards=se[J]}}c(z)},D=S=>{if(!S.destination)return;const E=F(S.draggableId);if(!E||!E.parentElement)return;const R=E.parentElement;if(!R)return;const O=window.getComputedStyle(R),{clientHeight:B,clientWidth:J}=E,z=S.destination.index,se=S.source.index,_e=[...E.parentElement.children],Fe=_e[se];_e.splice(se,1);const be=[..._e.slice(0,z),Fe,..._e.slice(z+1)],Ze=parseFloat(O.paddingTop)+be.slice(0,z).reduce((ye,ut)=>{const Yt=parseFloat(window.getComputedStyle(ut).marginBottom);return ye+ut.clientHeight+Yt},0);l({clientX:parseFloat(O.paddingLeft),clientY:Ze,clientWidth:J,clientHeight:B})},F=S=>{const E=`[${t}='${S}']`;return document.querySelector(E)},L=()=>{const S=eo();ET(S,n)},k=()=>{const S=eo();rT(S).then(()=>{o([]),i(void 0)})};return ve(()=>{eo().onAuthStateChanged(E=>{if(!E)return;i(E.uid);const R=su();s0(Ni(iu(R),`users/${E.uid}`)).then(O=>{O.exists()?o(O.val().lists):c(gD)})})},[]),_("div",{children:[_(DI,{signIn:L,signOut:k,user:r}),_("div",{class:"mx-4 flex select-none items-start text-slate-950",children:[_(_y,{onDragStart:I,onDragEnd:T,onDragUpdate:D,children:_(ha,{droppableId:"all-lists",direction:"horizontal",type:Wn.List,children:S=>_("div",{ref:S.innerRef,...S.droppableProps,class:"flex",children:[s==null?void 0:s.map((E,R)=>_(xI,{list:E,index:R,changeTitle:O=>y(R,O),changeContent:(O,B)=>b(R,O,B),changeDescription:(O,B)=>m(R,O,B),addCard:O=>p(R,O),removeCard:O=>g(R,O),changeTodos:(O,B)=>v(R,O,B),removeList:()=>f(R),placeholderProps:a})),S.placeholder]})})}),_(SI,{addList:h})]})]})}on(_(vD,{}),document.getElementById("app"));