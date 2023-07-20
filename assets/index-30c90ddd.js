(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var hr,P,Su,Nt,dl,Tu,so,Du,ii={},xu=[],Bp=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$i=Array.isArray;function Qe(t,e){for(var n in e)t[n]=e[n];return t}function Ru(t){var e=t.parentNode;e&&e.removeChild(t)}function $e(t,e,n){var r,i,s,o={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?hr.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)o[s]===void 0&&(o[s]=t.defaultProps[s]);return Fn(t,o,r,i,null)}function Fn(t,e,n,r,i){var s={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Su};return i==null&&P.vnode!=null&&P.vnode(s),s}function Up(){return{current:null}}function ge(t){return t.children}function Ve(t,e){this.props=t,this.context=e}function zn(t,e){if(e==null)return t.__?zn(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?zn(t):null}function Pu(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Pu(t)}}function oo(t){(!t.__d&&(t.__d=!0)&&Nt.push(t)&&!si.__r++||dl!==P.debounceRendering)&&((dl=P.debounceRendering)||Tu)(si)}function si(){var t,e,n,r,i,s,o,a;for(Nt.sort(so);t=Nt.shift();)t.__d&&(e=Nt.length,r=void 0,i=void 0,o=(s=(n=t).__v).__e,(a=n.__P)&&(r=[],(i=Qe({},s)).__v=s.__v+1,Bo(a,s,i,n.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,r,o??zn(s),s.__h),Mu(r,s),s.__e!=o&&Pu(s)),Nt.length>e&&Nt.sort(so));si.__r=0}function Au(t,e,n,r,i,s,o,a,l,c){var u,d,h,f,p,g,v,_=r&&r.__k||xu,b=_.length;for(n.__k=[],u=0;u<e.length;u++)if((f=n.__k[u]=(f=e[u])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Fn(null,f,null,null,f):$i(f)?Fn(ge,{children:f},null,null,null):f.__b>0?Fn(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(h=_[u])===null||h&&f.key==h.key&&f.type===h.type)_[u]=void 0;else for(d=0;d<b;d++){if((h=_[d])&&f.key==h.key&&f.type===h.type){_[d]=void 0;break}h=null}Bo(t,f,h=h||ii,i,s,o,a,l,c),p=f.__e,(d=f.ref)&&h.ref!=d&&(v||(v=[]),h.ref&&v.push(h.ref,null,f),v.push(d,f.__c||p,f)),p!=null?(g==null&&(g=p),typeof f.type=="function"&&f.__k===h.__k?f.__d=l=Nu(f,l,t):l=Ou(t,f,h,_,p,l),typeof n.type=="function"&&(n.__d=l)):l&&h.__e==l&&l.parentNode!=t&&(l=zn(h))}for(n.__e=g,u=b;u--;)_[u]!=null&&(typeof n.type=="function"&&_[u].__e!=null&&_[u].__e==n.__d&&(n.__d=ku(r).nextSibling),Fu(_[u],_[u]));if(v)for(u=0;u<v.length;u++)Lu(v[u],v[++u],v[++u])}function Nu(t,e,n){for(var r,i=t.__k,s=0;i&&s<i.length;s++)(r=i[s])&&(r.__=t,e=typeof r.type=="function"?Nu(r,e,n):Ou(n,r,r,i,r.__e,e));return e}function qe(t,e){return e=e||[],t==null||typeof t=="boolean"||($i(t)?t.some(function(n){qe(n,e)}):e.push(t)),e}function Ou(t,e,n,r,i,s){var o,a,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||i!=s||i.parentNode==null)e:if(s==null||s.parentNode!==t)t.appendChild(i),o=null;else{for(a=s,l=0;(a=a.nextSibling)&&l<r.length;l+=1)if(a==i)break e;t.insertBefore(i,s),o=s}return o!==void 0?o:i.nextSibling}function ku(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=ku(n)))return r}return null}function Wp(t,e,n,r,i){var s;for(s in n)s==="children"||s==="key"||s in e||oi(t,s,null,n[s],r);for(s in e)i&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||n[s]===e[s]||oi(t,s,e[s],n[s],r)}function hl(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Bp.test(e)?n:n+"px"}function oi(t,e,n,r,i){var s;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||hl(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||hl(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=n,n?r||t.addEventListener(e,s?pl:fl,s):t.removeEventListener(e,s?pl:fl,s);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function fl(t){return this.l[t.type+!1](P.event?P.event(t):t)}function pl(t){return this.l[t.type+!0](P.event?P.event(t):t)}function Bo(t,e,n,r,i,s,o,a,l){var c,u,d,h,f,p,g,v,_,b,w,y,R,D,I,E=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=e.__e=n.__e,e.__h=null,s=[a]),(c=P.__b)&&c(e);try{e:if(typeof E=="function"){if(v=e.props,_=(c=E.contextType)&&r[c.__c],b=c?_?_.props.value:c.__:r,n.__c?g=(u=e.__c=n.__c).__=u.__E:("prototype"in E&&E.prototype.render?e.__c=u=new E(v,b):(e.__c=u=new Ve(v,b),u.constructor=E,u.render=Hp),_&&_.sub(u),u.props=v,u.state||(u.state={}),u.context=b,u.__n=r,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),E.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Qe({},u.__s)),Qe(u.__s,E.getDerivedStateFromProps(v,u.__s))),h=u.props,f=u.state,u.__v=e,d)E.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(E.getDerivedStateFromProps==null&&v!==h&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,b),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,b)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(u.props=v,u.state=u.__s,u.__d=!1),u.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(C){C&&(C.__=e)}),w=0;w<u._sb.length;w++)u.__h.push(u._sb[w]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,b),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(h,f,p)})}if(u.context=b,u.props=v,u.__P=t,y=P.__r,R=0,"prototype"in E&&E.prototype.render){for(u.state=u.__s,u.__d=!1,y&&y(e),c=u.render(u.props,u.state,u.context),D=0;D<u._sb.length;D++)u.__h.push(u._sb[D]);u._sb=[]}else do u.__d=!1,y&&y(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++R<25);u.state=u.__s,u.getChildContext!=null&&(r=Qe(Qe({},r),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(p=u.getSnapshotBeforeUpdate(h,f)),Au(t,$i(I=c!=null&&c.type===ge&&c.key==null?c.props.children:c)?I:[I],e,n,r,i,s,o,a,l),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else s==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=$p(n.__e,e,n,r,i,s,o,l);(c=P.diffed)&&c(e)}catch(C){e.__v=null,(l||s!=null)&&(e.__e=a,e.__h=!!l,s[s.indexOf(a)]=null),P.__e(C,e,n)}}function Mu(t,e){P.__c&&P.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){P.__e(r,n.__v)}})}function $p(t,e,n,r,i,s,o,a){var l,c,u,d=n.props,h=e.props,f=e.type,p=0;if(f==="svg"&&(i=!0),s!=null){for(;p<s.length;p++)if((l=s[p])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){t=l,s[p]=null;break}}if(t==null){if(f===null)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),s=null,a=!1}if(f===null)d===h||a&&t.data===h||(t.data=h);else{if(s=s&&hr.call(t.childNodes),c=(d=n.props||ii).dangerouslySetInnerHTML,u=h.dangerouslySetInnerHTML,!a){if(s!=null)for(d={},p=0;p<t.attributes.length;p++)d[t.attributes[p].name]=t.attributes[p].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===t.innerHTML)||(t.innerHTML=u&&u.__html||""))}if(Wp(t,h,d,i,a),u)e.__k=[];else if(Au(t,$i(p=e.props.children)?p:[p],e,n,r,i&&f!=="foreignObject",s,o,s?s[0]:n.__k&&zn(n,0),a),s!=null)for(p=s.length;p--;)s[p]!=null&&Ru(s[p]);a||("value"in h&&(p=h.value)!==void 0&&(p!==t.value||f==="progress"&&!p||f==="option"&&p!==d.value)&&oi(t,"value",p,d.value,!1),"checked"in h&&(p=h.checked)!==void 0&&p!==t.checked&&oi(t,"checked",p,d.checked,!1))}return t}function Lu(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){P.__e(r,n)}}function Fu(t,e,n){var r,i;if(P.unmount&&P.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Lu(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){P.__e(s,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Fu(r[i],e,n||typeof t.type!="function");n||t.__e==null||Ru(t.__e),t.__=t.__e=t.__d=void 0}function Hp(t,e,n){return this.constructor(t,n)}function rn(t,e,n){var r,i,s;P.__&&P.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,s=[],Bo(e,t=(!r&&n||e).__k=$e(ge,null,[t]),i||ii,ii,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?hr.call(e.childNodes):null,s,!r&&n?n:i?i.__e:e.firstChild,r),Mu(s,t)}function Bu(t,e){rn(t,e,Bu)}function Uu(t,e,n){var r,i,s,o,a=Qe({},t.props);for(s in t.type&&t.type.defaultProps&&(o=t.type.defaultProps),e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s]===void 0&&o!==void 0?o[s]:e[s];return arguments.length>2&&(a.children=arguments.length>3?hr.call(arguments,2):n),Fn(t.type,a,r||t.key,i||t.ref,null)}function Gp(t,e){var n={__c:e="__cC"+Du++,__:t,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,oo(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}hr=xu.slice,P={__e:function(t,e,n,r){for(var i,s,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(a){t=a}throw t}},Su=0,Ve.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Qe({},this.state),typeof t=="function"&&(t=t(Qe({},n),this.props)),t&&Qe(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),oo(this))},Ve.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),oo(this))},Ve.prototype.render=ge,Nt=[],Tu=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,so=function(t,e){return t.__v.__b-e.__v.__b},si.__r=0,Du=0;let $r;const Vp=new Uint8Array(16);function qp(){if(!$r&&($r=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $r(Vp)}const de=[];for(let t=0;t<256;++t)de.push((t+256).toString(16).slice(1));function zp(t,e=0){return(de[t[e+0]]+de[t[e+1]]+de[t[e+2]]+de[t[e+3]]+"-"+de[t[e+4]]+de[t[e+5]]+"-"+de[t[e+6]]+de[t[e+7]]+"-"+de[t[e+8]]+de[t[e+9]]+"-"+de[t[e+10]]+de[t[e+11]]+de[t[e+12]]+de[t[e+13]]+de[t[e+14]]+de[t[e+15]]).toLowerCase()}const jp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),gl={randomUUID:jp};function Ge(t,e,n){if(gl.randomUUID&&!e&&!t)return gl.randomUUID();t=t||{};const r=t.random||(t.rng||qp)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return zp(r)}var yt,Q,Rs,vl,sn=0,Wu=[],Yr=[],ml=P.__b,_l=P.__r,bl=P.diffed,yl=P.__c,Il=P.unmount;function vn(t,e){P.__h&&P.__h(Q,t,sn||e),sn=0;var n=Q.__H||(Q.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:Yr}),n.__[t]}function ee(t){return sn=1,Uo($u,t)}function Uo(t,e,n){var r=vn(yt++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):$u(void 0,e),function(a){var l=r.__N?r.__N[0]:r.__[0],c=r.t(l,a);l!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=Q,!Q.u)){var i=function(a,l,c){if(!r.__c.__H)return!0;var u=r.__c.__H.__.filter(function(h){return h.__c});if(u.every(function(h){return!h.__N}))return!s||s.call(this,a,l,c);var d=!1;return u.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(d=!0)}}),!(!d&&r.__c.props===a)&&(!s||s.call(this,a,l,c))};Q.u=!0;var s=Q.shouldComponentUpdate,o=Q.componentWillUpdate;Q.componentWillUpdate=function(a,l,c){if(this.__e){var u=s;s=void 0,i(a,l,c),s=u}o&&o.call(this,a,l,c)},Q.shouldComponentUpdate=i}return r.__N||r.__}function ae(t,e){var n=vn(yt++,3);!P.__s&&Wo(n.__H,e)&&(n.__=t,n.i=e,Q.__H.__h.push(n))}function mn(t,e){var n=vn(yt++,4);!P.__s&&Wo(n.__H,e)&&(n.__=t,n.i=e,Q.__h.push(n))}function B(t){return sn=5,Se(function(){return{current:t}},[])}function Kp(t,e,n){sn=6,mn(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function Se(t,e){var n=vn(yt++,7);return Wo(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Yp(t,e){return sn=8,Se(function(){return t},e)}function Hi(t){var e=Q.context[t.__c],n=vn(yt++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(Q)),e.props.value):t.__}function Jp(t,e){P.useDebugValue&&P.useDebugValue(e?e(t):t)}function Qp(){var t=vn(yt++,11);if(!t.__){for(var e=Q.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Xp(){for(var t;t=Wu.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Jr),t.__H.__h.forEach(ao),t.__H.__h=[]}catch(e){t.__H.__h=[],P.__e(e,t.__v)}}P.__b=function(t){Q=null,ml&&ml(t)},P.__r=function(t){_l&&_l(t),yt=0;var e=(Q=t.__c).__H;e&&(Rs===Q?(e.__h=[],Q.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Yr,n.__N=n.i=void 0})):(e.__h.forEach(Jr),e.__h.forEach(ao),e.__h=[],yt=0)),Rs=Q},P.diffed=function(t){bl&&bl(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Wu.push(e)!==1&&vl===P.requestAnimationFrame||((vl=P.requestAnimationFrame)||Zp)(Xp)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Yr&&(n.__=n.__V),n.i=void 0,n.__V=Yr})),Rs=Q=null},P.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Jr),n.__h=n.__h.filter(function(r){return!r.__||ao(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],P.__e(r,n.__v)}}),yl&&yl(t,e)},P.unmount=function(t){Il&&Il(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Jr(r)}catch(i){e=i}}),n.__H=void 0,e&&P.__e(e,n.__v))};var wl=typeof requestAnimationFrame=="function";function Zp(t){var e,n=function(){clearTimeout(r),wl&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);wl&&(e=requestAnimationFrame(n))}function Jr(t){var e=Q,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),Q=e}function ao(t){var e=Q;t.__c=t.__(),Q=e}function Wo(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function $u(t,e){return typeof e=="function"?e(t):e}function Hu(t,e){for(var n in e)t[n]=e[n];return t}function lo(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Ps(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function co(t){this.props=t}function eg(t,e){function n(i){var s=this.props.ref,o=s==i.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,i)||!o:lo(this.props,i)}function r(i){return this.shouldComponentUpdate=n,$e(t,i)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(co.prototype=new Ve).isPureReactComponent=!0,co.prototype.shouldComponentUpdate=function(t,e){return lo(this.props,t)||lo(this.state,e)};var Cl=P.__b;P.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Cl&&Cl(t)};var tg=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Gu(t){function e(n){var r=Hu({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=tg,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var El=function(t,e){return t==null?null:qe(qe(t).map(e))},ng={map:El,forEach:El,count:function(t){return t?qe(t).length:0},only:function(t){var e=qe(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:qe},rg=P.__e;P.__e=function(t,e,n,r){if(t.then){for(var i,s=e;s=s.__;)if((i=s.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}rg(t,e,n,r)};var Sl=P.unmount;function Vu(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Hu({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Vu(r,e,n)})),t}function qu(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return qu(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function Qr(){this.__u=0,this.t=null,this.__b=null}function zu(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function ig(t){var e,n,r;function i(s){if(e||(e=t()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw e;return $e(n,s)}return i.displayName="Lazy",i.__f=!0,i}function Ln(){this.u=null,this.o=null}P.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Sl&&Sl(t)},(Qr.prototype=new Ve).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=zu(r.__v),s=!1,o=function(){s||(s=!0,n.__R=null,i?i(a):a())};n.__R=o;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=qu(c,c.__c.__P,c.__c.__O)}var u;for(r.setState({__a:r.__b=null});u=r.t.pop();)u.forceUpdate()}},l=e.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(o,o)},Qr.prototype.componentWillUnmount=function(){this.t=[]},Qr.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Vu(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__a&&$e(ge,null,t.fallback);return i&&(i.__h=null),[$e(ge,null,e.__a?null:t.children),i]};var Tl=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function sg(t){return this.getChildContext=function(){return t.context},t.children}function og(t){var e=this,n=t.i;e.componentWillUnmount=function(){rn(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),rn($e(sg,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function Gi(t,e){var n=$e(og,{__v:t,i:e});return n.containerInfo=e,n}(Ln.prototype=new Ve).__a=function(t){var e=this,n=zu(e.__v),r=e.o.get(t);return r[0]++,function(i){var s=function(){e.props.revealOrder?(r.push(i),Tl(e,t,r)):i()};n?n(s):s()}},Ln.prototype.render=function(t){this.u=null,this.o=new Map;var e=qe(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},Ln.prototype.componentDidUpdate=Ln.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Tl(t,n,e)})};var ju=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ag=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,lg=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,cg=/[A-Z0-9]/g,ug=typeof document<"u",dg=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function hg(t,e,n){return e.__k==null&&(e.textContent=""),rn(t,e),typeof n=="function"&&n(),t?t.__c:null}function fg(t,e,n){return Bu(t,e),typeof n=="function"&&n(),t?t.__c:null}Ve.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Ve.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Dl=P.event;function pg(){}function gg(){return this.cancelBubble}function vg(){return this.defaultPrevented}P.event=function(t){return Dl&&(t=Dl(t)),t.persist=pg,t.isPropagationStopped=gg,t.isDefaultPrevented=vg,t.nativeEvent=t};var $o,mg={enumerable:!1,configurable:!0,get:function(){return this.class}},xl=P.vnode;P.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,i={};for(var s in n){var o=n[s];if(!(s==="value"&&"defaultValue"in n&&o==null||ug&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var a=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&o===!0?o="":a==="ondoubleclick"?s="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||dg(n.type)?a==="onfocus"?s="onfocusin":a==="onblur"?s="onfocusout":lg.test(s)?s=a:r.indexOf("-")===-1&&ag.test(s)?s=s.replace(cg,"-$&").toLowerCase():o===null&&(o=void 0):a=s="oninput",a==="oninput"&&i[s=a]&&(s="oninputCapture"),i[s]=o}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=qe(n.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=qe(n.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",mg)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),e.props=i}(t),t.$$typeof=ju,xl&&xl(t)};var Rl=P.__r;P.__r=function(t){Rl&&Rl(t),$o=t.__c};var Pl=P.diffed;P.diffed=function(t){Pl&&Pl(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),$o=null};var _g={ReactCurrentDispatcher:{current:{readContext:function(t){return $o.__n[t.__c].props.value}}}};function bg(t){return $e.bind(null,t)}function Ku(t){return!!t&&t.$$typeof===ju}function yg(t){return Ku(t)?Uu.apply(null,arguments):t}function Ig(t){return!!t.__k&&(rn(null,t),!0)}function wg(t){return t&&(t.base||t.nodeType===1&&t)||null}var Yu=function(t,e){return t(e)},Cg=function(t,e){return t(e)},Eg=ge;function Ju(t){t()}function Sg(t){return t}function Tg(){return[!1,Ju]}var Dg=mn;function xg(t,e){var n=e(),r=ee({h:{__:n,v:e}}),i=r[0].h,s=r[1];return mn(function(){i.__=n,i.v=e,Ps(i.__,e())||s({h:i})},[t,n,e]),ae(function(){return Ps(i.__,i.v())||s({h:i}),t(function(){Ps(i.__,i.v())||s({h:i})})},[t]),n}var K={useState:ee,useId:Qp,useReducer:Uo,useEffect:ae,useLayoutEffect:mn,useInsertionEffect:Dg,useTransition:Tg,useDeferredValue:Sg,useSyncExternalStore:xg,startTransition:Ju,useRef:B,useImperativeHandle:Kp,useMemo:Se,useCallback:Yp,useContext:Hi,useDebugValue:Jp,version:"17.0.2",Children:ng,render:hg,hydrate:fg,unmountComponentAtNode:Ig,createPortal:Gi,createElement:$e,createContext:Gp,createFactory:bg,cloneElement:yg,createRef:Up,Fragment:ge,isValidElement:Ku,findDOMNode:wg,Component:Ve,PureComponent:co,memo:eg,forwardRef:Gu,flushSync:Cg,unstable_batchedUpdates:Yu,StrictMode:Eg,Suspense:Qr,SuspenseList:Ln,lazy:ig,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:_g};function uo(t,e){return uo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},uo(t,e)}function Qu(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,uo(t,e)}function N(){return N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},N.apply(this,arguments)}function jn(t){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jn(t)}function Rg(t,e){if(jn(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(jn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Pg(t){var e=Rg(t,"string");return jn(e)==="symbol"?e:String(e)}function Ag(t,e,n){return e=Pg(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Al(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Nl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Al(Object(n),!0).forEach(function(r){Ag(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Al(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ye(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Ol=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),As=function(){return Math.random().toString(36).substring(7).split("").join(".")},kl={INIT:"@@redux/INIT"+As(),REPLACE:"@@redux/REPLACE"+As(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+As()}};function Ng(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Xu(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ye(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ye(1));return n(Xu)(t,e)}if(typeof t!="function")throw new Error(ye(2));var i=t,s=e,o=[],a=o,l=!1;function c(){a===o&&(a=o.slice())}function u(){if(l)throw new Error(ye(3));return s}function d(g){if(typeof g!="function")throw new Error(ye(4));if(l)throw new Error(ye(5));var v=!0;return c(),a.push(g),function(){if(v){if(l)throw new Error(ye(6));v=!1,c();var b=a.indexOf(g);a.splice(b,1),o=null}}}function h(g){if(!Ng(g))throw new Error(ye(7));if(typeof g.type>"u")throw new Error(ye(8));if(l)throw new Error(ye(9));try{l=!0,s=i(s,g)}finally{l=!1}for(var v=o=a,_=0;_<v.length;_++){var b=v[_];b()}return g}function f(g){if(typeof g!="function")throw new Error(ye(10));i=g,h({type:kl.REPLACE})}function p(){var g,v=d;return g={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(ye(11));function w(){b.next&&b.next(u())}w();var y=v(w);return{unsubscribe:y}}},g[Ol]=function(){return this},g}return h({type:kl.INIT}),r={dispatch:h,subscribe:d,getState:u,replaceReducer:f},r[Ol]=p,r}function Ml(t,e){return function(){return e(t.apply(this,arguments))}}function Ll(t,e){if(typeof t=="function")return Ml(t,e);if(typeof t!="object"||t===null)throw new Error(ye(16));var n={};for(var r in t){var i=t[r];typeof i=="function"&&(n[r]=Ml(i,e))}return n}function Zu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Og(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(ye(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Zu.apply(void 0,a)(i.dispatch),Nl(Nl({},i),{},{dispatch:s})}}}function kg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ed=K.createContext(null);function Mg(t){t()}var td=Mg,Lg=function(e){return td=e},Fg=function(){return td};function Bg(){var t=Fg(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],s=e;s;)i.push(s),s=s.next;return i},subscribe:function(i){var s=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!s||e===null||(s=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Fl={notify:function(){},get:function(){return[]}};function nd(t,e){var n,r=Fl;function i(d){return l(),r.subscribe(d)}function s(){r.notify()}function o(){u.onStateChange&&u.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=Bg())}function c(){n&&(n(),n=void 0,r.clear(),r=Fl)}var u={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:function(){return r}};return u}var rd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?mn:ae;function Ug(t){var e=t.store,n=t.context,r=t.children,i=Se(function(){var a=nd(e);return{store:e,subscription:a}},[e]),s=Se(function(){return e.getState()},[e]);rd(function(){var a=i.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,s]);var o=n||ed;return K.createElement(o.Provider,{value:i},r)}function ai(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var id={exports:{}},G={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Ho=ce?Symbol.for("react.element"):60103,Go=ce?Symbol.for("react.portal"):60106,Vi=ce?Symbol.for("react.fragment"):60107,qi=ce?Symbol.for("react.strict_mode"):60108,zi=ce?Symbol.for("react.profiler"):60114,ji=ce?Symbol.for("react.provider"):60109,Ki=ce?Symbol.for("react.context"):60110,Vo=ce?Symbol.for("react.async_mode"):60111,Yi=ce?Symbol.for("react.concurrent_mode"):60111,Ji=ce?Symbol.for("react.forward_ref"):60112,Qi=ce?Symbol.for("react.suspense"):60113,Wg=ce?Symbol.for("react.suspense_list"):60120,Xi=ce?Symbol.for("react.memo"):60115,Zi=ce?Symbol.for("react.lazy"):60116,$g=ce?Symbol.for("react.block"):60121,Hg=ce?Symbol.for("react.fundamental"):60117,Gg=ce?Symbol.for("react.responder"):60118,Vg=ce?Symbol.for("react.scope"):60119;function Re(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ho:switch(t=t.type,t){case Vo:case Yi:case Vi:case zi:case qi:case Qi:return t;default:switch(t=t&&t.$$typeof,t){case Ki:case Ji:case Zi:case Xi:case ji:return t;default:return e}}case Go:return e}}}function sd(t){return Re(t)===Yi}G.AsyncMode=Vo;G.ConcurrentMode=Yi;G.ContextConsumer=Ki;G.ContextProvider=ji;G.Element=Ho;G.ForwardRef=Ji;G.Fragment=Vi;G.Lazy=Zi;G.Memo=Xi;G.Portal=Go;G.Profiler=zi;G.StrictMode=qi;G.Suspense=Qi;G.isAsyncMode=function(t){return sd(t)||Re(t)===Vo};G.isConcurrentMode=sd;G.isContextConsumer=function(t){return Re(t)===Ki};G.isContextProvider=function(t){return Re(t)===ji};G.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho};G.isForwardRef=function(t){return Re(t)===Ji};G.isFragment=function(t){return Re(t)===Vi};G.isLazy=function(t){return Re(t)===Zi};G.isMemo=function(t){return Re(t)===Xi};G.isPortal=function(t){return Re(t)===Go};G.isProfiler=function(t){return Re(t)===zi};G.isStrictMode=function(t){return Re(t)===qi};G.isSuspense=function(t){return Re(t)===Qi};G.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Vi||t===Yi||t===zi||t===qi||t===Qi||t===Wg||typeof t=="object"&&t!==null&&(t.$$typeof===Zi||t.$$typeof===Xi||t.$$typeof===ji||t.$$typeof===Ki||t.$$typeof===Ji||t.$$typeof===Hg||t.$$typeof===Gg||t.$$typeof===Vg||t.$$typeof===$g)};G.typeOf=Re;id.exports=G;var qg=id.exports,qo=qg,zg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Kg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},od={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zo={};zo[qo.ForwardRef]=Kg;zo[qo.Memo]=od;function Bl(t){return qo.isMemo(t)?od:zo[t.$$typeof]||zg}var Yg=Object.defineProperty,Jg=Object.getOwnPropertyNames,Ul=Object.getOwnPropertySymbols,Qg=Object.getOwnPropertyDescriptor,Xg=Object.getPrototypeOf,Wl=Object.prototype;function ad(t,e,n){if(typeof e!="string"){if(Wl){var r=Xg(e);r&&r!==Wl&&ad(t,r,n)}var i=Jg(e);Ul&&(i=i.concat(Ul(e)));for(var s=Bl(t),o=Bl(e),a=0;a<i.length;++a){var l=i[a];if(!jg[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=Qg(e,l);try{Yg(t,l,c)}catch{}}}}return t}var Zg=ad;const $l=kg(Zg);var ld={exports:{}},z={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=60103,ts=60106,fr=60107,pr=60108,gr=60114,vr=60109,mr=60110,_r=60112,br=60113,jo=60120,yr=60115,Ir=60116,cd=60121,ud=60122,dd=60117,hd=60129,fd=60131;if(typeof Symbol=="function"&&Symbol.for){var ue=Symbol.for;es=ue("react.element"),ts=ue("react.portal"),fr=ue("react.fragment"),pr=ue("react.strict_mode"),gr=ue("react.profiler"),vr=ue("react.provider"),mr=ue("react.context"),_r=ue("react.forward_ref"),br=ue("react.suspense"),jo=ue("react.suspense_list"),yr=ue("react.memo"),Ir=ue("react.lazy"),cd=ue("react.block"),ud=ue("react.server.block"),dd=ue("react.fundamental"),hd=ue("react.debug_trace_mode"),fd=ue("react.legacy_hidden")}function He(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case es:switch(t=t.type,t){case fr:case gr:case pr:case br:case jo:return t;default:switch(t=t&&t.$$typeof,t){case mr:case _r:case Ir:case yr:case vr:return t;default:return e}}case ts:return e}}}var ev=vr,tv=es,nv=_r,rv=fr,iv=Ir,sv=yr,ov=ts,av=gr,lv=pr,cv=br;z.ContextConsumer=mr;z.ContextProvider=ev;z.Element=tv;z.ForwardRef=nv;z.Fragment=rv;z.Lazy=iv;z.Memo=sv;z.Portal=ov;z.Profiler=av;z.StrictMode=lv;z.Suspense=cv;z.isAsyncMode=function(){return!1};z.isConcurrentMode=function(){return!1};z.isContextConsumer=function(t){return He(t)===mr};z.isContextProvider=function(t){return He(t)===vr};z.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===es};z.isForwardRef=function(t){return He(t)===_r};z.isFragment=function(t){return He(t)===fr};z.isLazy=function(t){return He(t)===Ir};z.isMemo=function(t){return He(t)===yr};z.isPortal=function(t){return He(t)===ts};z.isProfiler=function(t){return He(t)===gr};z.isStrictMode=function(t){return He(t)===pr};z.isSuspense=function(t){return He(t)===br};z.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===fr||t===gr||t===hd||t===pr||t===br||t===jo||t===fd||typeof t=="object"&&t!==null&&(t.$$typeof===Ir||t.$$typeof===yr||t.$$typeof===vr||t.$$typeof===mr||t.$$typeof===_r||t.$$typeof===dd||t.$$typeof===cd||t[0]===ud)};z.typeOf=He;ld.exports=z;var uv=ld.exports,dv=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],hv=["reactReduxForwardedRef"],fv=[],pv=[null,null];function gv(t,e){var n=t[1];return[e.payload,n+1]}function Hl(t,e,n){rd(function(){return t.apply(void 0,e)},n)}function vv(t,e,n,r,i,s,o){t.current=r,e.current=i,n.current=!1,s.current&&(s.current=null,o())}function mv(t,e,n,r,i,s,o,a,l,c){if(t){var u=!1,d=null,h=function(){if(!u){var g=e.getState(),v,_;try{v=r(g,i.current)}catch(b){_=b,d=b}_||(d=null),v===s.current?o.current||l():(s.current=v,a.current=v,o.current=!0,c({type:"STORE_UPDATED",payload:{error:_}}))}};n.onStateChange=h,n.trySubscribe(),h();var f=function(){if(u=!0,n.tryUnsubscribe(),n.onStateChange=null,d)throw d};return f}}var _v=function(){return[null,0]};function bv(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,i=r===void 0?function(w){return"ConnectAdvanced("+w+")"}:r,s=n.methodName,o=s===void 0?"connectAdvanced":s,a=n.renderCountProp,l=a===void 0?void 0:a,c=n.shouldHandleStateChanges,u=c===void 0?!0:c,d=n.storeKey,h=d===void 0?"store":d;n.withRef;var f=n.forwardRef,p=f===void 0?!1:f,g=n.context,v=g===void 0?ed:g,_=ai(n,dv),b=v;return function(y){var R=y.displayName||y.name||"Component",D=i(R),I=N({},_,{getDisplayName:i,methodName:o,renderCountProp:l,shouldHandleStateChanges:u,storeKey:h,displayName:D,wrappedComponentName:R,WrappedComponent:y}),E=_.pure;function C(H){return t(H.dispatch,I)}var x=E?Se:function(H){return H()};function O(H){var me=Se(function(){var xn=H.reactReduxForwardedRef,xs=ai(H,hv);return[H.context,xn,xs]},[H]),fe=me[0],zt=me[1],ot=me[2],jt=Se(function(){return fe&&fe.Consumer&&uv.isContextConsumer(K.createElement(fe.Consumer,null))?fe:b},[fe,b]),Me=Hi(jt),Dt=!!H.store&&!!H.store.getState&&!!H.store.dispatch;Me&&Me.store;var Ee=Dt?H.store:Me.store,Dn=Se(function(){return C(Ee)},[Ee]),Lr=Se(function(){if(!u)return pv;var xn=nd(Ee,Dt?null:Me.subscription),xs=xn.notifyNestedSubs.bind(xn);return[xn,xs]},[Ee,Dt,Me]),at=Lr[0],Fr=Lr[1],Br=Se(function(){return Dt?Me:N({},Me,{subscription:at})},[Dt,Me,at]),Ur=Uo(gv,fv,_v),Cs=Ur[0],Kt=Cs[0],Es=Ur[1];if(Kt&&Kt.error)throw Kt.error;var cl=B(),Ss=B(ot),Wr=B(),ul=B(!1),Ts=x(function(){return Wr.current&&ot===Ss.current?Wr.current:Dn(Ee.getState(),ot)},[Ee,Kt,ot]);Hl(vv,[Ss,cl,ul,ot,Ts,Wr,Fr]),Hl(mv,[u,Ee,at,Dn,Ss,cl,ul,Wr,Fr,Es],[Ee,at,Dn]);var Ds=Se(function(){return K.createElement(y,N({},Ts,{ref:zt}))},[zt,y,Ts]),Fp=Se(function(){return u?K.createElement(jt.Provider,{value:Br},Ds):Ds},[jt,Ds,Br]);return Fp}var Y=E?K.memo(O):O;if(Y.WrappedComponent=y,Y.displayName=O.displayName=D,p){var X=K.forwardRef(function(me,fe){return K.createElement(Y,N({},me,{reactReduxForwardedRef:fe}))});return X.displayName=D,X.WrappedComponent=y,$l(X,y)}return $l(Y,y)}}function Gl(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Ns(t,e){if(Gl(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!Gl(t[n[i]],e[n[i]]))return!1;return!0}function yv(t,e){var n={},r=function(o){var a=t[o];typeof a=="function"&&(n[o]=function(){return e(a.apply(void 0,arguments))})};for(var i in t)r(i);return n}function Ko(t){return function(n,r){var i=t(n,r);function s(){return i}return s.dependsOnOwnProps=!1,s}}function Vl(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function pd(t,e){return function(r,i){i.displayName;var s=function(a,l){return s.dependsOnOwnProps?s.mapToProps(a,l):s.mapToProps(a)};return s.dependsOnOwnProps=!0,s.mapToProps=function(a,l){s.mapToProps=t,s.dependsOnOwnProps=Vl(t);var c=s(a,l);return typeof c=="function"&&(s.mapToProps=c,s.dependsOnOwnProps=Vl(c),c=s(a,l)),c},s}}function Iv(t){return typeof t=="function"?pd(t):void 0}function wv(t){return t?void 0:Ko(function(e){return{dispatch:e}})}function Cv(t){return t&&typeof t=="object"?Ko(function(e){return yv(t,e)}):void 0}const Ev=[Iv,wv,Cv];function Sv(t){return typeof t=="function"?pd(t):void 0}function Tv(t){return t?void 0:Ko(function(){return{}})}const Dv=[Sv,Tv];function xv(t,e,n){return N({},n,t,e)}function Rv(t){return function(n,r){r.displayName;var i=r.pure,s=r.areMergedPropsEqual,o=!1,a;return function(c,u,d){var h=t(c,u,d);return o?(!i||!s(h,a))&&(a=h):(o=!0,a=h),a}}}function Pv(t){return typeof t=="function"?Rv(t):void 0}function Av(t){return t?void 0:function(){return xv}}const Nv=[Pv,Av];var Ov=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function kv(t,e,n,r){return function(s,o){return n(t(s,o),e(r,o),o)}}function Mv(t,e,n,r,i){var s=i.areStatesEqual,o=i.areOwnPropsEqual,a=i.areStatePropsEqual,l=!1,c,u,d,h,f;function p(w,y){return c=w,u=y,d=t(c,u),h=e(r,u),f=n(d,h,u),l=!0,f}function g(){return d=t(c,u),e.dependsOnOwnProps&&(h=e(r,u)),f=n(d,h,u),f}function v(){return t.dependsOnOwnProps&&(d=t(c,u)),e.dependsOnOwnProps&&(h=e(r,u)),f=n(d,h,u),f}function _(){var w=t(c,u),y=!a(w,d);return d=w,y&&(f=n(d,h,u)),f}function b(w,y){var R=!o(y,u),D=!s(w,c,y,u);return c=w,u=y,R&&D?g():R?v():D?_():f}return function(y,R){return l?b(y,R):p(y,R)}}function Lv(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,i=e.initMergeProps,s=ai(e,Ov),o=n(t,s),a=r(t,s),l=i(t,s),c=s.pure?Mv:kv;return c(o,a,l,t,s)}var Fv=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Os(t,e,n){for(var r=e.length-1;r>=0;r--){var i=e[r](t);if(i)return i}return function(s,o){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+o.wrappedComponentName+".")}}function Bv(t,e){return t===e}function Uv(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?bv:n,i=e.mapStateToPropsFactories,s=i===void 0?Dv:i,o=e.mapDispatchToPropsFactories,a=o===void 0?Ev:o,l=e.mergePropsFactories,c=l===void 0?Nv:l,u=e.selectorFactory,d=u===void 0?Lv:u;return function(f,p,g,v){v===void 0&&(v={});var _=v,b=_.pure,w=b===void 0?!0:b,y=_.areStatesEqual,R=y===void 0?Bv:y,D=_.areOwnPropsEqual,I=D===void 0?Ns:D,E=_.areStatePropsEqual,C=E===void 0?Ns:E,x=_.areMergedPropsEqual,O=x===void 0?Ns:x,Y=ai(_,Fv),X=Os(f,s,"mapStateToProps"),H=Os(p,a,"mapDispatchToProps"),me=Os(g,c,"mergeProps");return r(d,N({methodName:"connect",getDisplayName:function(zt){return"Connect("+zt+")"},shouldHandleStateChanges:!!f,initMapStateToProps:X,initMapDispatchToProps:H,initMergeProps:me,pure:w,areStatesEqual:R,areOwnPropsEqual:I,areStatePropsEqual:C,areMergedPropsEqual:O},Y))}}const gd=Uv();Lg(Yu);function Wv(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function vd(t,e){var n=ee(function(){return{inputs:e,result:t()}})[0],r=B(!0),i=B(n),s=r.current||!!(e&&i.current.inputs&&Wv(e,i.current.inputs)),o=s?i.current:{inputs:e,result:t()};return ae(function(){r.current=!1,i.current=o},[o]),o.result}function $v(t,e){return vd(function(){return t},e)}var W=vd,A=$v,Hv=!0,ks="Invariant failed";function Gv(t,e){if(!t){if(Hv)throw new Error(ks);var n=typeof e=="function"?e():e,r=n?"".concat(ks,": ").concat(n):ks;throw new Error(r)}}var Fe=function(e){var n=e.top,r=e.right,i=e.bottom,s=e.left,o=r-s,a=i-n,l={top:n,right:r,bottom:i,left:s,width:o,height:a,x:s,y:n,center:{x:(r+s)/2,y:(i+n)/2}};return l},Yo=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},ql=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},Vv=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},Ms={top:0,right:0,bottom:0,left:0},Jo=function(e){var n=e.borderBox,r=e.margin,i=r===void 0?Ms:r,s=e.border,o=s===void 0?Ms:s,a=e.padding,l=a===void 0?Ms:a,c=Fe(Yo(n,i)),u=Fe(ql(n,o)),d=Fe(ql(u,l));return{marginBox:c,borderBox:Fe(n),paddingBox:u,contentBox:d,margin:i,border:o,padding:l}},Ae=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var i=Number(n);return isNaN(i)&&Gv(!1),i},qv=function(){return{x:window.pageXOffset,y:window.pageYOffset}},li=function(e,n){var r=e.borderBox,i=e.border,s=e.margin,o=e.padding,a=Vv(r,n);return Jo({borderBox:a,border:i,margin:s,padding:o})},ci=function(e,n){return n===void 0&&(n=qv()),li(e,n)},md=function(e,n){var r={top:Ae(n.marginTop),right:Ae(n.marginRight),bottom:Ae(n.marginBottom),left:Ae(n.marginLeft)},i={top:Ae(n.paddingTop),right:Ae(n.paddingRight),bottom:Ae(n.paddingBottom),left:Ae(n.paddingLeft)},s={top:Ae(n.borderTopWidth),right:Ae(n.borderRightWidth),bottom:Ae(n.borderBottomWidth),left:Ae(n.borderLeftWidth)};return Jo({borderBox:e,margin:r,padding:i,border:s})},_d=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return md(n,r)},zl=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function zv(t,e){return!!(t===e||zl(t)&&zl(e))}function jv(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!zv(t[n],e[n]))return!1;return!0}function oe(t,e){e===void 0&&(e=jv);var n,r=[],i,s=!1;function o(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return s&&n===this&&e(a,r)||(i=t.apply(this,a),s=!0,n=this,r=a),i}return o}var Kv=function(e){var n=[],r=null,i=function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];n=a,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return i.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},i};const Kn=Kv;function bd(t,e){}bd.bind(null,"warn");bd.bind(null,"error");function ht(){}function Yv(t,e){return N({},t,{},e)}function Ne(t,e,n){var r=e.map(function(i){var s=Yv(n,i.options);return t.addEventListener(i.eventName,i.fn,s),function(){t.removeEventListener(i.eventName,i.fn,s)}});return function(){r.forEach(function(s){s()})}}var Jv="Invariant failed";function ui(t){this.message=t}ui.prototype.toString=function(){return this.message};function S(t,e){if(!t)throw new ui(Jv)}var Qv=function(t){Qu(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.callbacks=null,r.unbind=ht,r.onWindowError=function(a){var l=r.getCallbacks();l.isDragging()&&l.tryAbort();var c=a.error;c instanceof ui&&a.preventDefault()},r.getCallbacks=function(){if(!r.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return r.callbacks},r.setCallbacks=function(a){r.callbacks=a},r}var n=e.prototype;return n.componentDidMount=function(){this.unbind=Ne(window,[{eventName:"error",fn:this.onWindowError}])},n.componentDidCatch=function(i){if(i instanceof ui){this.setState({});return}throw i},n.componentWillUnmount=function(){this.unbind()},n.render=function(){return this.props.children(this.setCallbacks)},e}(K.Component),Xv=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,di=function(e){return e+1},Zv=function(e){return`
  You have lifted an item in position `+di(e.source.index)+`
`},yd=function(e,n){var r=e.droppableId===n.droppableId,i=di(e.index),s=di(n.index);return r?`
      You have moved the item from position `+i+`
      to position `+s+`
    `:`
    You have moved the item from position `+i+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+s+`
  `},Id=function(e,n,r){var i=n.droppableId===r.droppableId;return i?`
      The item `+e+`
      has been combined with `+r.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+r.draggableId+`
      in list `+r.droppableId+`
    `},em=function(e){var n=e.destination;if(n)return yd(e.source,n);var r=e.combine;return r?Id(e.draggableId,e.source,r):"You are over an area that cannot be dropped on"},jl=function(e){return`
  The item has returned to its starting position
  of `+di(e.index)+`
`},tm=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+jl(e.source)+`
    `;var n=e.destination,r=e.combine;return n?`
      You have dropped the item.
      `+yd(e.source,n)+`
    `:r?`
      You have dropped the item.
      `+Id(e.draggableId,e.source,r)+`
    `:`
    The item has been dropped while not over a drop area.
    `+jl(e.source)+`
  `},Xr={dragHandleUsageInstructions:Xv,onDragStart:Zv,onDragUpdate:em,onDragEnd:tm},le={x:0,y:0},he=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},Te=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},ft=function(e,n){return e.x===n.x&&e.y===n.y},_n=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},Bt=function(e,n,r){var i;return r===void 0&&(r=0),i={},i[e]=n,i[e==="x"?"y":"x"]=r,i},Yn=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},Kl=function(e,n){return Math.min.apply(Math,n.map(function(r){return Yn(e,r)}))},wd=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},nm=function(t,e){var n=Fe({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},wr=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},Yl=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},rm={top:0,right:0,bottom:0,left:0},im=function(e,n){return n?wr(e,n.scroll.diff.displacement):e},sm=function(e,n,r){if(r&&r.increasedBy){var i;return N({},e,(i={},i[n.end]=e[n.end]+r.increasedBy[n.line],i))}return e},om=function(e,n){return n&&n.shouldClipSubject?nm(n.pageMarginBox,e):Fe(e)},on=function(t){var e=t.page,n=t.withPlaceholder,r=t.axis,i=t.frame,s=im(e.marginBox,i),o=sm(s,r,n),a=om(o,i);return{page:e,withPlaceholder:n,active:a}},Qo=function(t,e){t.frame||S(!1);var n=t.frame,r=Te(e,n.scroll.initial),i=_n(r),s=N({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:i},max:n.scroll.max}}),o=on({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:s}),a=N({},t,{frame:s,subject:o});return a};function hi(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function Xo(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function St(t,e){if(t.find)return t.find(e);var n=Xo(t,e);if(n!==-1)return t[n]}function Cd(t){return Array.prototype.slice.call(t)}var Ed=oe(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),Sd=oe(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),ns=oe(function(t){return hi(t)}),am=oe(function(t){return hi(t)}),bn=oe(function(t,e){var n=am(e).filter(function(r){return t===r.descriptor.droppableId}).sort(function(r,i){return r.descriptor.index-i.descriptor.index});return n});function Zo(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function rs(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var is=oe(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),lm=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.insideDestination,s=t.previousImpact;if(!r.isCombineEnabled)return null;var o=Zo(s);if(!o)return null;function a(g){var v={type:"COMBINE",combine:{draggableId:g,droppableId:r.descriptor.id}};return N({},s,{at:v})}var l=s.displaced.all,c=l.length?l[0]:null;if(e)return c?a(c):null;var u=is(n,i);if(!c){if(!u.length)return null;var d=u[u.length-1];return a(d.descriptor.id)}var h=Xo(u,function(g){return g.descriptor.id===c});h===-1&&S(!1);var f=h-1;if(f<0)return null;var p=u[f];return a(p.descriptor.id)},yn=function(t,e){return t.descriptor.droppableId===e.descriptor.id},Td={point:le,value:0},Jn={invisible:{},visible:{},all:[]},cm={displaced:Jn,displacedBy:Td,at:null},Oe=function(t,e){return function(n){return t<=n&&n<=e}},Dd=function(t){var e=Oe(t.top,t.bottom),n=Oe(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);if(i)return!0;var s=e(r.top)||e(r.bottom),o=n(r.left)||n(r.right),a=s&&o;if(a)return!0;var l=r.top<t.top&&r.bottom>t.bottom,c=r.left<t.left&&r.right>t.right,u=l&&c;if(u)return!0;var d=l&&o||c&&s;return d}},um=function(t){var e=Oe(t.top,t.bottom),n=Oe(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);return i}},ea={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},xd={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},dm=function(t){return function(e){var n=Oe(e.top,e.bottom),r=Oe(e.left,e.right);return function(i){return t===ea?n(i.top)&&n(i.bottom):r(i.left)&&r(i.right)}}},hm=function(e,n){var r=n.frame?n.frame.scroll.diff.displacement:le;return wr(e,r)},fm=function(e,n,r){return n.subject.active?r(n.subject.active)(e):!1},pm=function(e,n,r){return r(n)(e)},ta=function(e){var n=e.target,r=e.destination,i=e.viewport,s=e.withDroppableDisplacement,o=e.isVisibleThroughFrameFn,a=s?hm(n,r):n;return fm(a,r,o)&&pm(a,i,o)},gm=function(e){return ta(N({},e,{isVisibleThroughFrameFn:Dd}))},Rd=function(e){return ta(N({},e,{isVisibleThroughFrameFn:um}))},vm=function(e){return ta(N({},e,{isVisibleThroughFrameFn:dm(e.destination.axis)}))},mm=function(e,n,r){if(typeof r=="boolean")return r;if(!n)return!0;var i=n.invisible,s=n.visible;if(i[e])return!1;var o=s[e];return o?o.shouldAnimate:!0};function _m(t,e){var n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return Fe(Yo(n,r))}function Qn(t){var e=t.afterDragging,n=t.destination,r=t.displacedBy,i=t.viewport,s=t.forceShouldAnimate,o=t.last;return e.reduce(function(l,c){var u=_m(c,r),d=c.descriptor.id;l.all.push(d);var h=gm({target:u,destination:n,viewport:i,withDroppableDisplacement:!0});if(!h)return l.invisible[c.descriptor.id]=!0,l;var f=mm(d,o,s),p={draggableId:d,shouldAnimate:f};return l.visible[d]=p,l},{all:[],visible:{},invisible:{}})}function bm(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function Jl(t){var e=t.insideDestination,n=t.inHomeList,r=t.displacedBy,i=t.destination,s=bm(e,{inHomeList:n});return{displaced:Jn,displacedBy:r,at:{type:"REORDER",destination:{droppableId:i.descriptor.id,index:s}}}}function fi(t){var e=t.draggable,n=t.insideDestination,r=t.destination,i=t.viewport,s=t.displacedBy,o=t.last,a=t.index,l=t.forceShouldAnimate,c=yn(e,r);if(a==null)return Jl({insideDestination:n,inHomeList:c,displacedBy:s,destination:r});var u=St(n,function(g){return g.descriptor.index===a});if(!u)return Jl({insideDestination:n,inHomeList:c,displacedBy:s,destination:r});var d=is(e,n),h=n.indexOf(u),f=d.slice(h),p=Qn({afterDragging:f,destination:r,displacedBy:s,last:o,viewport:i.frame,forceShouldAnimate:l});return{displaced:p,displacedBy:s,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:a}}}}function It(t,e){return!!e.effected[t]}var ym=function(t){var e=t.isMovingForward,n=t.destination,r=t.draggables,i=t.combine,s=t.afterCritical;if(!n.isCombineEnabled)return null;var o=i.draggableId,a=r[o],l=a.descriptor.index,c=It(o,s);return c?e?l:l-1:e?l+1:l},Im=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.insideDestination,i=t.location;if(!r.length)return null;var s=i.index,o=e?s+1:s-1,a=r[0].descriptor.index,l=r[r.length-1].descriptor.index,c=n?l:l+1;return o<a||o>c?null:o},wm=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.draggable,i=t.draggables,s=t.destination,o=t.insideDestination,a=t.previousImpact,l=t.viewport,c=t.afterCritical,u=a.at;if(u||S(!1),u.type==="REORDER"){var d=Im({isMovingForward:e,isInHomeList:n,location:u.destination,insideDestination:o});return d==null?null:fi({draggable:r,insideDestination:o,destination:s,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:d})}var h=ym({isMovingForward:e,destination:s,displaced:a.displaced,draggables:i,combine:u.combine,afterCritical:c});return h==null?null:fi({draggable:r,insideDestination:o,destination:s,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:h})},Cm=function(t){var e=t.displaced,n=t.afterCritical,r=t.combineWith,i=t.displacedBy,s=!!(e.visible[r]||e.invisible[r]);return It(r,n)?s?le:_n(i.point):s?i.point:le},Em=function(t){var e=t.afterCritical,n=t.impact,r=t.draggables,i=rs(n);i||S(!1);var s=i.draggableId,o=r[s].page.borderBox.center,a=Cm({displaced:n.displaced,afterCritical:e,combineWith:s,displacedBy:n.displacedBy});return he(o,a)},Pd=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},Sm=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},na=function(e,n,r){return n[e.crossAxisStart]+r.margin[e.crossAxisStart]+r.borderBox[e.crossAxisSize]/2},Ql=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Bt(n.line,r.marginBox[n.end]+Pd(n,i),na(n,r.marginBox,i))},Xl=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Bt(n.line,r.marginBox[n.start]-Sm(n,i),na(n,r.marginBox,i))},Tm=function(e){var n=e.axis,r=e.moveInto,i=e.isMoving;return Bt(n.line,r.contentBox[n.start]+Pd(n,i),na(n,r.contentBox,i))},Dm=function(t){var e=t.impact,n=t.draggable,r=t.draggables,i=t.droppable,s=t.afterCritical,o=bn(i.descriptor.id,r),a=n.page,l=i.axis;if(!o.length)return Tm({axis:l,moveInto:i.page,isMoving:a});var c=e.displaced,u=e.displacedBy,d=c.all[0];if(d){var h=r[d];if(It(d,s))return Xl({axis:l,moveRelativeTo:h.page,isMoving:a});var f=li(h.page,u.point);return Xl({axis:l,moveRelativeTo:f,isMoving:a})}var p=o[o.length-1];if(p.descriptor.id===n.descriptor.id)return a.borderBox.center;if(It(p.descriptor.id,s)){var g=li(p.page,_n(s.displacedBy.point));return Ql({axis:l,moveRelativeTo:g,isMoving:a})}return Ql({axis:l,moveRelativeTo:p.page,isMoving:a})},ho=function(t,e){var n=t.frame;return n?he(e,n.scroll.diff.displacement):e},xm=function(e){var n=e.impact,r=e.draggable,i=e.droppable,s=e.draggables,o=e.afterCritical,a=r.page.borderBox.center,l=n.at;return!i||!l?a:l.type==="REORDER"?Dm({impact:n,draggable:r,draggables:s,droppable:i,afterCritical:o}):Em({impact:n,draggables:s,afterCritical:o})},ss=function(t){var e=xm(t),n=t.droppable,r=n?ho(n,e):e;return r},Ad=function(t,e){var n=Te(e,t.scroll.initial),r=_n(n),i=Fe({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),s={frame:i,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}};return s};function Zl(t,e){return t.map(function(n){return e[n]})}function Rm(t,e){for(var n=0;n<e.length;n++){var r=e[n].visible[t];if(r)return r}return null}var Pm=function(t){var e=t.impact,n=t.viewport,r=t.destination,i=t.draggables,s=t.maxScrollChange,o=Ad(n,he(n.scroll.current,s)),a=r.frame?Qo(r,he(r.frame.scroll.current,s)):r,l=e.displaced,c=Qn({afterDragging:Zl(l.all,i),destination:r,displacedBy:e.displacedBy,viewport:o.frame,last:l,forceShouldAnimate:!1}),u=Qn({afterDragging:Zl(l.all,i),destination:a,displacedBy:e.displacedBy,viewport:n.frame,last:l,forceShouldAnimate:!1}),d={},h={},f=[l,c,u];l.all.forEach(function(g){var v=Rm(g,f);if(v){h[g]=v;return}d[g]=!0});var p=N({},e,{displaced:{all:l.all,invisible:d,visible:h}});return p},Am=function(t,e){return he(t.scroll.diff.displacement,e)},ra=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.viewport,i=Am(r,e),s=Te(i,n.page.borderBox.center);return he(n.client.borderBox.center,s)},Nd=function(t){var e=t.draggable,n=t.destination,r=t.newPageBorderBoxCenter,i=t.viewport,s=t.withDroppableDisplacement,o=t.onlyOnMainAxis,a=o===void 0?!1:o,l=Te(r,e.page.borderBox.center),c=wr(e.page.borderBox,l),u={target:c,destination:n,withDroppableDisplacement:s,viewport:i};return a?vm(u):Rd(u)},Nm=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.draggables,s=t.previousImpact,o=t.viewport,a=t.previousPageBorderBoxCenter,l=t.previousClientSelection,c=t.afterCritical;if(!r.isEnabled)return null;var u=bn(r.descriptor.id,i),d=yn(n,r),h=lm({isMovingForward:e,draggable:n,destination:r,insideDestination:u,previousImpact:s})||wm({isMovingForward:e,isInHomeList:d,draggable:n,draggables:i,destination:r,insideDestination:u,previousImpact:s,viewport:o,afterCritical:c});if(!h)return null;var f=ss({impact:h,draggable:n,droppable:r,draggables:i,afterCritical:c}),p=Nd({draggable:n,destination:r,newPageBorderBoxCenter:f,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(p){var g=ra({pageBorderBoxCenter:f,draggable:n,viewport:o});return{clientSelection:g,impact:h,scrollJumpRequest:null}}var v=Te(f,a),_=Pm({impact:h,viewport:o,destination:r,draggables:i,maxScrollChange:v});return{clientSelection:l,impact:_,scrollJumpRequest:v}},_e=function(e){var n=e.subject.active;return n||S(!1),n},Om=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,r=t.source,i=t.droppables,s=t.viewport,o=r.subject.active;if(!o)return null;var a=r.axis,l=Oe(o[a.start],o[a.end]),c=ns(i).filter(function(d){return d!==r}).filter(function(d){return d.isEnabled}).filter(function(d){return!!d.subject.active}).filter(function(d){return Dd(s.frame)(_e(d))}).filter(function(d){var h=_e(d);return e?o[a.crossAxisEnd]<h[a.crossAxisEnd]:h[a.crossAxisStart]<o[a.crossAxisStart]}).filter(function(d){var h=_e(d),f=Oe(h[a.start],h[a.end]);return l(h[a.start])||l(h[a.end])||f(o[a.start])||f(o[a.end])}).sort(function(d,h){var f=_e(d)[a.crossAxisStart],p=_e(h)[a.crossAxisStart];return e?f-p:p-f}).filter(function(d,h,f){return _e(d)[a.crossAxisStart]===_e(f[0])[a.crossAxisStart]});if(!c.length)return null;if(c.length===1)return c[0];var u=c.filter(function(d){var h=Oe(_e(d)[a.start],_e(d)[a.end]);return h(n[a.line])});return u.length===1?u[0]:u.length>1?u.sort(function(d,h){return _e(d)[a.start]-_e(h)[a.start]})[0]:c.sort(function(d,h){var f=Kl(n,Yl(_e(d))),p=Kl(n,Yl(_e(h)));return f!==p?f-p:_e(d)[a.start]-_e(h)[a.start]})[0]},ec=function(e,n){var r=e.page.borderBox.center;return It(e.descriptor.id,n)?Te(r,n.displacedBy.point):r},km=function(e,n){var r=e.page.borderBox;return It(e.descriptor.id,n)?wr(r,_n(n.displacedBy.point)):r},Mm=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,r=t.destination,i=t.insideDestination,s=t.afterCritical,o=i.filter(function(a){return Rd({target:km(a,s),destination:r,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(a,l){var c=Yn(e,ho(r,ec(a,s))),u=Yn(e,ho(r,ec(l,s)));return c<u?-1:u<c?1:a.descriptor.index-l.descriptor.index});return o[0]||null},Cr=oe(function(e,n){var r=n[e.line];return{value:r,point:Bt(e.line,r)}}),Lm=function(e,n,r){var i=e.axis;if(e.descriptor.mode==="virtual")return Bt(i.line,n[i.line]);var s=e.subject.page.contentBox[i.size],o=bn(e.descriptor.id,r),a=o.reduce(function(u,d){return u+d.client.marginBox[i.size]},0),l=a+n[i.line],c=l-s;return c<=0?null:Bt(i.line,c)},Od=function(e,n){return N({},e,{scroll:N({},e.scroll,{max:n})})},kd=function(e,n,r){var i=e.frame;yn(n,e)&&S(!1),e.subject.withPlaceholder&&S(!1);var s=Cr(e.axis,n.displaceBy).point,o=Lm(e,s,r),a={placeholderSize:s,increasedBy:o,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!i){var l=on({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:e.frame});return N({},e,{subject:l})}var c=o?he(i.scroll.max,o):i.scroll.max,u=Od(i,c),d=on({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:u});return N({},e,{subject:d,frame:u})},Fm=function(e){var n=e.subject.withPlaceholder;n||S(!1);var r=e.frame;if(!r){var i=on({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return N({},e,{subject:i})}var s=n.oldFrameMaxScroll;s||S(!1);var o=Od(r,s),a=on({page:e.subject.page,axis:e.axis,frame:o,withPlaceholder:null});return N({},e,{subject:a,frame:o})},Bm=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,r=t.insideDestination,i=t.draggable,s=t.draggables,o=t.destination,a=t.viewport,l=t.afterCritical;if(!n){if(r.length)return null;var c={displaced:Jn,displacedBy:Td,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:0}}},u=ss({impact:c,draggable:i,droppable:o,draggables:s,afterCritical:l}),d=yn(i,o)?o:kd(o,i,s),h=Nd({draggable:i,destination:d,newPageBorderBoxCenter:u,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return h?c:null}var f=e[o.axis.line]<=n.page.borderBox.center[o.axis.line],p=function(){var v=n.descriptor.index;return n.descriptor.id===i.descriptor.id||f?v:v+1}(),g=Cr(o.axis,i.displaceBy);return fi({draggable:i,insideDestination:r,destination:o,viewport:a,displacedBy:g,last:Jn,index:p})},Um=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,r=t.draggable,i=t.isOver,s=t.draggables,o=t.droppables,a=t.viewport,l=t.afterCritical,c=Om({isMovingForward:e,pageBorderBoxCenter:n,source:i,droppables:o,viewport:a});if(!c)return null;var u=bn(c.descriptor.id,s),d=Mm({pageBorderBoxCenter:n,viewport:a,destination:c,insideDestination:u,afterCritical:l}),h=Bm({previousPageBorderBoxCenter:n,destination:c,draggable:r,draggables:s,moveRelativeTo:d,insideDestination:u,viewport:a,afterCritical:l});if(!h)return null;var f=ss({impact:h,draggable:r,droppable:c,draggables:s,afterCritical:l}),p=ra({pageBorderBoxCenter:f,draggable:r,viewport:a});return{clientSelection:p,impact:h,scrollJumpRequest:null}},De=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},Wm=function(e,n){var r=De(e);return r?n[r]:null},$m=function(t){var e=t.state,n=t.type,r=Wm(e.impact,e.dimensions.droppables),i=!!r,s=e.dimensions.droppables[e.critical.droppable.id],o=r||s,a=o.axis.direction,l=a==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||a==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(l&&!i)return null;var c=n==="MOVE_DOWN"||n==="MOVE_RIGHT",u=e.dimensions.draggables[e.critical.draggable.id],d=e.current.page.borderBoxCenter,h=e.dimensions,f=h.draggables,p=h.droppables;return l?Nm({isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,destination:o,draggables:f,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):Um({isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,isOver:o,draggables:f,droppables:p,viewport:e.viewport,afterCritical:e.afterCritical})};function Rt(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function Md(t){var e=Oe(t.top,t.bottom),n=Oe(t.left,t.right);return function(i){return e(i.y)&&n(i.x)}}function Hm(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function Gm(t){var e=t.pageBorderBox,n=t.draggable,r=t.candidates,i=n.page.borderBox.center,s=r.map(function(o){var a=o.axis,l=Bt(o.axis.line,e.center[a.line],o.page.borderBox.center[a.crossAxisLine]);return{id:o.descriptor.id,distance:Yn(i,l)}}).sort(function(o,a){return a.distance-o.distance});return s[0]?s[0].id:null}function Vm(t){var e=t.pageBorderBox,n=t.draggable,r=t.droppables,i=ns(r).filter(function(s){if(!s.isEnabled)return!1;var o=s.subject.active;if(!o||!Hm(e,o))return!1;if(Md(o)(e.center))return!0;var a=s.axis,l=o.center[a.crossAxisLine],c=e[a.crossAxisStart],u=e[a.crossAxisEnd],d=Oe(o[a.crossAxisStart],o[a.crossAxisEnd]),h=d(c),f=d(u);return!h&&!f?!0:h?c<l:u>l});return i.length?i.length===1?i[0].descriptor.id:Gm({pageBorderBox:e,draggable:n,candidates:i}):null}var Ld=function(e,n){return Fe(wr(e,n))},qm=function(t,e){var n=t.frame;return n?Ld(e,n.scroll.diff.value):e};function Fd(t){var e=t.displaced,n=t.id;return!!(e.visible[n]||e.invisible[n])}function zm(t){var e=t.draggable,n=t.closest,r=t.inHomeList;return n?r&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var jm=function(t){var e=t.pageBorderBoxWithDroppableScroll,n=t.draggable,r=t.destination,i=t.insideDestination,s=t.last,o=t.viewport,a=t.afterCritical,l=r.axis,c=Cr(r.axis,n.displaceBy),u=c.value,d=e[l.start],h=e[l.end],f=is(n,i),p=St(f,function(v){var _=v.descriptor.id,b=v.page.borderBox.center[l.line],w=It(_,a),y=Fd({displaced:s,id:_});return w?y?h<=b:d<b-u:y?h<=b+u:d<b}),g=zm({draggable:n,closest:p,inHomeList:yn(n,r)});return fi({draggable:n,insideDestination:i,destination:r,viewport:o,last:s,displacedBy:c,index:g})},Km=4,Ym=function(t){var e=t.draggable,n=t.pageBorderBoxWithDroppableScroll,r=t.previousImpact,i=t.destination,s=t.insideDestination,o=t.afterCritical;if(!i.isCombineEnabled)return null;var a=i.axis,l=Cr(i.axis,e.displaceBy),c=l.value,u=n[a.start],d=n[a.end],h=is(e,s),f=St(h,function(g){var v=g.descriptor.id,_=g.page.borderBox,b=_[a.size],w=b/Km,y=It(v,o),R=Fd({displaced:r.displaced,id:v});return y?R?d>_[a.start]+w&&d<_[a.end]-w:u>_[a.start]-c+w&&u<_[a.end]-c-w:R?d>_[a.start]+c+w&&d<_[a.end]+c-w:u>_[a.start]+w&&u<_[a.end]-w});if(!f)return null;var p={displacedBy:l,displaced:r.displaced,at:{type:"COMBINE",combine:{draggableId:f.descriptor.id,droppableId:i.descriptor.id}}};return p},Bd=function(t){var e=t.pageOffset,n=t.draggable,r=t.draggables,i=t.droppables,s=t.previousImpact,o=t.viewport,a=t.afterCritical,l=Ld(n.page.borderBox,e),c=Vm({pageBorderBox:l,draggable:n,droppables:i});if(!c)return cm;var u=i[c],d=bn(u.descriptor.id,r),h=qm(u,l);return Ym({pageBorderBoxWithDroppableScroll:h,draggable:n,previousImpact:s,destination:u,insideDestination:d,afterCritical:a})||jm({pageBorderBoxWithDroppableScroll:h,draggable:n,destination:u,insideDestination:d,last:s.displaced,viewport:o,afterCritical:a})},ia=function(t,e){var n;return N({},t,(n={},n[e.descriptor.id]=e,n))},Jm=function(e){var n=e.previousImpact,r=e.impact,i=e.droppables,s=De(n),o=De(r);if(!s||s===o)return i;var a=i[s];if(!a.subject.withPlaceholder)return i;var l=Fm(a);return ia(i,l)},Qm=function(t){var e=t.draggable,n=t.draggables,r=t.droppables,i=t.previousImpact,s=t.impact,o=Jm({previousImpact:i,impact:s,droppables:r}),a=De(s);if(!a)return o;var l=r[a];if(yn(e,l)||l.subject.withPlaceholder)return o;var c=kd(l,e,n);return ia(o,c)},Bn=function(t){var e=t.state,n=t.clientSelection,r=t.dimensions,i=t.viewport,s=t.impact,o=t.scrollJumpRequest,a=i||e.viewport,l=r||e.dimensions,c=n||e.current.client.selection,u=Te(c,e.initial.client.selection),d={offset:u,selection:c,borderBoxCenter:he(e.initial.client.borderBoxCenter,u)},h={selection:he(d.selection,a.scroll.current),borderBoxCenter:he(d.borderBoxCenter,a.scroll.current),offset:he(d.offset,a.scroll.diff.value)},f={client:d,page:h};if(e.phase==="COLLECTING")return N({phase:"COLLECTING"},e,{dimensions:l,viewport:a,current:f});var p=l.draggables[e.critical.draggable.id],g=s||Bd({pageOffset:h.offset,draggable:p,draggables:l.draggables,droppables:l.droppables,previousImpact:e.impact,viewport:a,afterCritical:e.afterCritical}),v=Qm({draggable:p,impact:g,previousImpact:e.impact,draggables:l.draggables,droppables:l.droppables}),_=N({},e,{current:f,dimensions:{draggables:l.draggables,droppables:v},impact:g,viewport:a,scrollJumpRequest:o||null,forceShouldAnimate:o?!1:null});return _};function Xm(t,e){return t.map(function(n){return e[n]})}var Ud=function(t){var e=t.impact,n=t.viewport,r=t.draggables,i=t.destination,s=t.forceShouldAnimate,o=e.displaced,a=Xm(o.all,r),l=Qn({afterDragging:a,destination:i,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:s,last:o});return N({},e,{displaced:l})},Wd=function(t){var e=t.impact,n=t.draggable,r=t.droppable,i=t.draggables,s=t.viewport,o=t.afterCritical,a=ss({impact:e,draggable:n,draggables:i,droppable:r,afterCritical:o});return ra({pageBorderBoxCenter:a,draggable:n,viewport:s})},$d=function(t){var e=t.state,n=t.dimensions,r=t.viewport;e.movementMode!=="SNAP"&&S(!1);var i=e.impact,s=r||e.viewport,o=n||e.dimensions,a=o.draggables,l=o.droppables,c=a[e.critical.draggable.id],u=De(i);u||S(!1);var d=l[u],h=Ud({impact:i,viewport:s,destination:d,draggables:a}),f=Wd({impact:h,draggable:c,droppable:d,draggables:a,viewport:s,afterCritical:e.afterCritical});return Bn({impact:h,clientSelection:f,state:e,dimensions:o,viewport:s})},Zm=function(t){return{index:t.index,droppableId:t.droppableId}},Hd=function(t){var e=t.draggable,n=t.home,r=t.draggables,i=t.viewport,s=Cr(n.axis,e.displaceBy),o=bn(n.descriptor.id,r),a=o.indexOf(e);a===-1&&S(!1);var l=o.slice(a+1),c=l.reduce(function(f,p){return f[p.descriptor.id]=!0,f},{}),u={inVirtualList:n.descriptor.mode==="virtual",displacedBy:s,effected:c},d=Qn({afterDragging:l,destination:n,displacedBy:s,last:null,viewport:i.frame,forceShouldAnimate:!1}),h={displaced:d,displacedBy:s,at:{type:"REORDER",destination:Zm(e.descriptor)}};return{impact:h,afterCritical:u}},e_=function(t,e){return{draggables:t.draggables,droppables:ia(t.droppables,e)}},t_=function(t){var e=t.draggable,n=t.offset,r=t.initialWindowScroll,i=li(e.client,n),s=ci(i,r),o=N({},e,{placeholder:N({},e.placeholder,{client:i}),client:i,page:s});return o},n_=function(t){var e=t.frame;return e||S(!1),e},r_=function(t){var e=t.additions,n=t.updatedDroppables,r=t.viewport,i=r.scroll.diff.value;return e.map(function(s){var o=s.descriptor.droppableId,a=n[o],l=n_(a),c=l.scroll.diff.value,u=he(i,c),d=t_({draggable:s,offset:u,initialWindowScroll:r.scroll.initial});return d})},i_=function(t){var e=t.state,n=t.published,r=n.modified.map(function(w){var y=e.dimensions.droppables[w.droppableId],R=Qo(y,w.scroll);return R}),i=N({},e.dimensions.droppables,{},Ed(r)),s=Sd(r_({additions:n.additions,updatedDroppables:i,viewport:e.viewport})),o=N({},e.dimensions.draggables,{},s);n.removals.forEach(function(w){delete o[w]});var a={droppables:i,draggables:o},l=De(e.impact),c=l?a.droppables[l]:null,u=a.draggables[e.critical.draggable.id],d=a.droppables[e.critical.droppable.id],h=Hd({draggable:u,home:d,draggables:o,viewport:e.viewport}),f=h.impact,p=h.afterCritical,g=c&&c.isCombineEnabled?e.impact:f,v=Bd({pageOffset:e.current.page.offset,draggable:a.draggables[e.critical.draggable.id],draggables:a.draggables,droppables:a.droppables,previousImpact:g,viewport:e.viewport,afterCritical:p}),_=N({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:v,onLiftImpact:f,dimensions:a,afterCritical:p,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return _;var b=N({phase:"DROP_PENDING"},_,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return b},fo=function(e){return e.movementMode==="SNAP"},Ls=function(e,n,r){var i=e_(e.dimensions,n);return!fo(e)||r?Bn({state:e,dimensions:i}):$d({state:e,dimensions:i})};function Fs(t){return t.isDragging&&t.movementMode==="SNAP"?N({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var tc={phase:"IDLE",completed:null,shouldFlush:!1},s_=function(t,e){if(t===void 0&&(t=tc),e.type==="FLUSH")return N({},tc,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&S(!1);var n=e.payload,r=n.critical,i=n.clientSelection,s=n.viewport,o=n.dimensions,a=n.movementMode,l=o.draggables[r.draggable.id],c=o.droppables[r.droppable.id],u={selection:i,borderBoxCenter:l.client.borderBox.center,offset:le},d={client:u,page:{selection:he(u.selection,s.scroll.initial),borderBoxCenter:he(u.selection,s.scroll.initial),offset:he(u.selection,s.scroll.diff.value)}},h=ns(o.droppables).every(function(Es){return!Es.isFixedOnPage}),f=Hd({draggable:l,home:c,draggables:o.draggables,viewport:s}),p=f.impact,g=f.afterCritical,v={phase:"DRAGGING",isDragging:!0,critical:r,movementMode:a,dimensions:o,initial:d,current:d,isWindowScrollAllowed:h,impact:p,afterCritical:g,onLiftImpact:p,viewport:s,scrollJumpRequest:null,forceShouldAnimate:null};return v}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&S(!1);var _=N({phase:"COLLECTING"},t,{phase:"COLLECTING"});return _}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||S(!1),i_({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Rt(t)||S(!1);var b=e.payload.client;return ft(b,t.current.client.selection)?t:Bn({state:t,clientSelection:b,impact:fo(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return Fs(t);Rt(t)||S(!1);var w=e.payload,y=w.id,R=w.newScroll,D=t.dimensions.droppables[y];if(!D)return t;var I=Qo(D,R);return Ls(t,I,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Rt(t)||S(!1);var E=e.payload,C=E.id,x=E.isEnabled,O=t.dimensions.droppables[C];O||S(!1),O.isEnabled===x&&S(!1);var Y=N({},O,{isEnabled:x});return Ls(t,Y,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Rt(t)||S(!1);var X=e.payload,H=X.id,me=X.isCombineEnabled,fe=t.dimensions.droppables[H];fe||S(!1),fe.isCombineEnabled===me&&S(!1);var zt=N({},fe,{isCombineEnabled:me});return Ls(t,zt,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Rt(t)||S(!1),t.isWindowScrollAllowed||S(!1);var ot=e.payload.newScroll;if(ft(t.viewport.scroll.current,ot))return Fs(t);var jt=Ad(t.viewport,ot);return fo(t)?$d({state:t,viewport:jt}):Bn({state:t,viewport:jt})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Rt(t))return t;var Me=e.payload.maxScroll;if(ft(Me,t.viewport.scroll.max))return t;var Dt=N({},t.viewport,{scroll:N({},t.viewport.scroll,{max:Me})});return N({phase:"DRAGGING"},t,{viewport:Dt})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&S(!1);var Ee=$m({state:t,type:e.type});return Ee?Bn({state:t,impact:Ee.impact,clientSelection:Ee.clientSelection,scrollJumpRequest:Ee.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var Dn=e.payload.reason;t.phase!=="COLLECTING"&&S(!1);var Lr=N({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:Dn});return Lr}if(e.type==="DROP_ANIMATE"){var at=e.payload,Fr=at.completed,Br=at.dropDuration,Ur=at.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||S(!1);var Cs={phase:"DROP_ANIMATING",completed:Fr,dropDuration:Br,newHomeClientOffset:Ur,dimensions:t.dimensions};return Cs}if(e.type==="DROP_COMPLETE"){var Kt=e.payload.completed;return{phase:"IDLE",completed:Kt,shouldFlush:!1}}return t},o_=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},a_=function(e){return{type:"LIFT",payload:e}},l_=function(e){return{type:"INITIAL_PUBLISH",payload:e}},c_=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},u_=function(){return{type:"COLLECTION_STARTING",payload:null}},d_=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},h_=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},f_=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},Gd=function(e){return{type:"MOVE",payload:e}},p_=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},g_=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},v_=function(){return{type:"MOVE_UP",payload:null}},m_=function(){return{type:"MOVE_DOWN",payload:null}},__=function(){return{type:"MOVE_RIGHT",payload:null}},b_=function(){return{type:"MOVE_LEFT",payload:null}},sa=function(){return{type:"FLUSH",payload:null}},y_=function(e){return{type:"DROP_ANIMATE",payload:e}},oa=function(e){return{type:"DROP_COMPLETE",payload:e}},Vd=function(e){return{type:"DROP",payload:e}},I_=function(e){return{type:"DROP_PENDING",payload:e}},qd=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},w_=function(t){return function(e){var n=e.getState,r=e.dispatch;return function(i){return function(s){if(s.type!=="LIFT"){i(s);return}var o=s.payload,a=o.id,l=o.clientSelection,c=o.movementMode,u=n();u.phase==="DROP_ANIMATING"&&r(oa({completed:u.completed})),n().phase!=="IDLE"&&S(!1),r(sa()),r(o_({draggableId:a,movementMode:c}));var d={shouldPublishImmediately:c==="SNAP"},h={draggableId:a,scrollOptions:d},f=t.startPublishing(h),p=f.critical,g=f.dimensions,v=f.viewport;r(l_({critical:p,dimensions:g,clientSelection:l,movementMode:c,viewport:v}))}}}},C_=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},aa={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Xn={opacity:{drop:0,combining:.7},scale:{drop:.75}},la={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},xt=la.outOfTheWay+"s "+aa.outOfTheWay,Un={fluid:"opacity "+xt,snap:"transform "+xt+", opacity "+xt,drop:function(e){var n=e+"s "+aa.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+xt,placeholder:"height "+xt+", width "+xt+", margin "+xt},nc=function(e){return ft(e,le)?null:"translate("+e.x+"px, "+e.y+"px)"},po={moveTo:nc,drop:function(e,n){var r=nc(e);return r?n?r+" scale("+Xn.scale.drop+")":r:null}},go=la.minDropTime,zd=la.maxDropTime,E_=zd-go,rc=1500,S_=.6,T_=function(t){var e=t.current,n=t.destination,r=t.reason,i=Yn(e,n);if(i<=0)return go;if(i>=rc)return zd;var s=i/rc,o=go+E_*s,a=r==="CANCEL"?o*S_:o;return Number(a.toFixed(2))},D_=function(t){var e=t.impact,n=t.draggable,r=t.dimensions,i=t.viewport,s=t.afterCritical,o=r.draggables,a=r.droppables,l=De(e),c=l?a[l]:null,u=a[n.descriptor.droppableId],d=Wd({impact:e,draggable:n,draggables:o,afterCritical:s,droppable:c||u,viewport:i}),h=Te(d,n.client.borderBox.center);return h},x_=function(t){var e=t.draggables,n=t.reason,r=t.lastImpact,i=t.home,s=t.viewport,o=t.onLiftImpact;if(!r.at||n!=="DROP"){var a=Ud({draggables:e,impact:o,destination:i,viewport:s,forceShouldAnimate:!0});return{impact:a,didDropInsideDroppable:!1}}if(r.at.type==="REORDER")return{impact:r,didDropInsideDroppable:!0};var l=N({},r,{displaced:Jn});return{impact:l,didDropInsideDroppable:!0}},R_=function(t){var e=t.getState,n=t.dispatch;return function(r){return function(i){if(i.type!=="DROP"){r(i);return}var s=e(),o=i.payload.reason;if(s.phase==="COLLECTING"){n(I_({reason:o}));return}if(s.phase!=="IDLE"){var a=s.phase==="DROP_PENDING"&&s.isWaiting;a&&S(!1),s.phase==="DRAGGING"||s.phase==="DROP_PENDING"||S(!1);var l=s.critical,c=s.dimensions,u=c.draggables[s.critical.draggable.id],d=x_({reason:o,lastImpact:s.impact,afterCritical:s.afterCritical,onLiftImpact:s.onLiftImpact,home:s.dimensions.droppables[s.critical.droppable.id],viewport:s.viewport,draggables:s.dimensions.draggables}),h=d.impact,f=d.didDropInsideDroppable,p=f?Zo(h):null,g=f?rs(h):null,v={index:l.draggable.index,droppableId:l.droppable.id},_={draggableId:u.descriptor.id,type:u.descriptor.type,source:v,reason:o,mode:s.movementMode,destination:p,combine:g},b=D_({impact:h,draggable:u,dimensions:c,viewport:s.viewport,afterCritical:s.afterCritical}),w={critical:s.critical,afterCritical:s.afterCritical,result:_,impact:h},y=!ft(s.current.client.offset,b)||!!_.combine;if(!y){n(oa({completed:w}));return}var R=T_({current:s.current.client.offset,destination:b,reason:o}),D={newHomeClientOffset:b,dropDuration:R,completed:w};n(y_(D))}}}},jd=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function P_(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function A_(t){var e=t.onWindowScroll;function n(){e(jd())}var r=Kn(n),i=P_(r),s=ht;function o(){return s!==ht}function a(){o()&&S(!1),s=Ne(window,[i])}function l(){o()||S(!1),r.cancel(),s(),s=ht}return{start:a,stop:l,isActive:o}}var N_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},O_=function(t){var e=A_({onWindowScroll:function(r){t.dispatch(p_({newScroll:r}))}});return function(n){return function(r){!e.isActive()&&r.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&N_(r)&&e.stop(),n(r)}}},k_=function(t){var e=!1,n=!1,r=setTimeout(function(){n=!0}),i=function(o){e||n||(e=!0,t(o),clearTimeout(r))};return i.wasCalled=function(){return e},i},M_=function(){var t=[],e=function(s){var o=Xo(t,function(c){return c.timerId===s});o===-1&&S(!1);var a=t.splice(o,1),l=a[0];l.callback()},n=function(s){var o=setTimeout(function(){return e(o)}),a={timerId:o,callback:s};t.push(a)},r=function(){if(t.length){var s=[].concat(t);t.length=0,s.forEach(function(o){clearTimeout(o.timerId),o.callback()})}};return{add:n,flush:r}},L_=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},F_=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},B_=function(e,n){if(e===n)return!0;var r=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,i=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return r&&i},Rn=function(e,n){n()},Hr=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},Bs=function(e,n,r,i){if(!e){r(i(n));return}var s=k_(r),o={announce:s};e(n,o),s.wasCalled()||r(i(n))},U_=function(t,e){var n=M_(),r=null,i=function(h,f){r&&S(!1),Rn("onBeforeCapture",function(){var p=t().onBeforeCapture;if(p){var g={draggableId:h,mode:f};p(g)}})},s=function(h,f){r&&S(!1),Rn("onBeforeDragStart",function(){var p=t().onBeforeDragStart;p&&p(Hr(h,f))})},o=function(h,f){r&&S(!1);var p=Hr(h,f);r={mode:f,lastCritical:h,lastLocation:p.source,lastCombine:null},n.add(function(){Rn("onDragStart",function(){return Bs(t().onDragStart,p,e,Xr.onDragStart)})})},a=function(h,f){var p=Zo(f),g=rs(f);r||S(!1);var v=!B_(h,r.lastCritical);v&&(r.lastCritical=h);var _=!L_(r.lastLocation,p);_&&(r.lastLocation=p);var b=!F_(r.lastCombine,g);if(b&&(r.lastCombine=g),!(!v&&!_&&!b)){var w=N({},Hr(h,r.mode),{combine:g,destination:p});n.add(function(){Rn("onDragUpdate",function(){return Bs(t().onDragUpdate,w,e,Xr.onDragUpdate)})})}},l=function(){r||S(!1),n.flush()},c=function(h){r||S(!1),r=null,Rn("onDragEnd",function(){return Bs(t().onDragEnd,h,e,Xr.onDragEnd)})},u=function(){if(r){var h=N({},Hr(r.lastCritical,r.mode),{combine:null,destination:null,reason:"CANCEL"});c(h)}};return{beforeCapture:i,beforeStart:s,start:o,update:a,flush:l,drop:c,abort:u}},W_=function(t,e){var n=U_(t,e);return function(r){return function(i){return function(s){if(s.type==="BEFORE_INITIAL_CAPTURE"){n.beforeCapture(s.payload.draggableId,s.payload.movementMode);return}if(s.type==="INITIAL_PUBLISH"){var o=s.payload.critical;n.beforeStart(o,s.payload.movementMode),i(s),n.start(o,s.payload.movementMode);return}if(s.type==="DROP_COMPLETE"){var a=s.payload.completed.result;n.flush(),i(s),n.drop(a);return}if(i(s),s.type==="FLUSH"){n.abort();return}var l=r.getState();l.phase==="DRAGGING"&&n.update(l.critical,l.impact)}}}},$_=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var r=t.getState();r.phase!=="DROP_ANIMATING"&&S(!1),t.dispatch(oa({completed:r.completed}))}}},H_=function(t){var e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(i){return function(s){if((s.type==="FLUSH"||s.type==="DROP_COMPLETE"||s.type==="DROP_ANIMATION_FINISHED")&&r(),i(s),s.type==="DROP_ANIMATE"){var o={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var l=t.getState();l.phase==="DROP_ANIMATING"&&t.dispatch(qd())}};n=requestAnimationFrame(function(){n=null,e=Ne(window,[o])})}}}},G_=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},V_=function(t){var e=!1;return function(){return function(n){return function(r){if(r.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(r.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(r.type==="DROP_COMPLETE"){e=!1;var i=r.payload.completed.result;i.combine&&t.tryShiftRecord(i.draggableId,i.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},q_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},z_=function(t){return function(e){return function(n){return function(r){if(q_(r)){t.stop(),n(r);return}if(r.type==="INITIAL_PUBLISH"){n(r);var i=e.getState();i.phase!=="DRAGGING"&&S(!1),t.start(i);return}n(r),t.scroll(e.getState())}}}},j_=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(Vd({reason:r.reason})))}}}},K_=Zu,Y_=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,r=t.styleMarshal,i=t.getResponders,s=t.announce,o=t.autoScroller;return Xu(s_,K_(Og(C_(r),G_(e),w_(e),R_,$_,H_,j_,z_(o),O_,V_(n),W_(i,s))))},Us=function(){return{additions:{},removals:{},modified:{}}};function J_(t){var e=t.registry,n=t.callbacks,r=Us(),i=null,s=function(){i||(n.collectionStarting(),i=requestAnimationFrame(function(){i=null;var u=r,d=u.additions,h=u.removals,f=u.modified,p=Object.keys(d).map(function(_){return e.draggable.getById(_).getDimension(le)}).sort(function(_,b){return _.descriptor.index-b.descriptor.index}),g=Object.keys(f).map(function(_){var b=e.droppable.getById(_),w=b.callbacks.getScrollWhileDragging();return{droppableId:_,scroll:w}}),v={additions:p,removals:Object.keys(h),modified:g};r=Us(),n.publish(v)}))},o=function(u){var d=u.descriptor.id;r.additions[d]=u,r.modified[u.descriptor.droppableId]=!0,r.removals[d]&&delete r.removals[d],s()},a=function(u){var d=u.descriptor;r.removals[d.id]=!0,r.modified[d.droppableId]=!0,r.additions[d.id]&&delete r.additions[d.id],s()},l=function(){i&&(cancelAnimationFrame(i),i=null,r=Us())};return{add:o,remove:a,stop:l}}var Kd=function(t){var e=t.scrollHeight,n=t.scrollWidth,r=t.height,i=t.width,s=Te({x:n,y:e},{x:i,y:r}),o={x:Math.max(0,s.x),y:Math.max(0,s.y)};return o},Yd=function(){var t=document.documentElement;return t||S(!1),t},Jd=function(){var t=Yd(),e=Kd({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},Q_=function(){var t=jd(),e=Jd(),n=t.y,r=t.x,i=Yd(),s=i.clientWidth,o=i.clientHeight,a=r+s,l=n+o,c=Fe({top:n,left:r,right:a,bottom:l}),u={frame:c,scroll:{initial:t,current:t,max:e,diff:{value:le,displacement:le}}};return u},X_=function(t){var e=t.critical,n=t.scrollOptions,r=t.registry,i=Q_(),s=i.scroll.current,o=e.droppable,a=r.droppable.getAllByType(o.type).map(function(d){return d.callbacks.getDimensionAndWatchScroll(s,n)}),l=r.draggable.getAllByType(e.draggable.type).map(function(d){return d.getDimension(s)}),c={draggables:Sd(l),droppables:Ed(a)},u={dimensions:c,critical:e,viewport:i};return u};function ic(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var r=t.droppable.getById(n.descriptor.droppableId);return r.descriptor.mode==="virtual"}var Z_=function(t,e){var n=null,r=J_({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),i=function(f,p){t.droppable.exists(f)||S(!1),n&&e.updateDroppableIsEnabled({id:f,isEnabled:p})},s=function(f,p){n&&(t.droppable.exists(f)||S(!1),e.updateDroppableIsCombineEnabled({id:f,isCombineEnabled:p}))},o=function(f,p){n&&(t.droppable.exists(f)||S(!1),e.updateDroppableScroll({id:f,newScroll:p}))},a=function(f,p){n&&t.droppable.getById(f).callbacks.scroll(p)},l=function(){if(n){r.stop();var f=n.critical.droppable;t.droppable.getAllByType(f.type).forEach(function(p){return p.callbacks.dragStopped()}),n.unsubscribe(),n=null}},c=function(f){n||S(!1);var p=n.critical.draggable;f.type==="ADDITION"&&ic(t,p,f.value)&&r.add(f.value),f.type==="REMOVAL"&&ic(t,p,f.value)&&r.remove(f.value)},u=function(f){n&&S(!1);var p=t.draggable.getById(f.draggableId),g=t.droppable.getById(p.descriptor.droppableId),v={draggable:p.descriptor,droppable:g.descriptor},_=t.subscribe(c);return n={critical:v,unsubscribe:_},X_({critical:v,registry:t,scrollOptions:f.scrollOptions})},d={updateDroppableIsEnabled:i,updateDroppableIsCombineEnabled:s,scrollDroppable:a,updateDroppableScroll:o,startPublishing:u,stopPublishing:l};return d},Qd=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},eb=function(t){window.scrollBy(t.x,t.y)},tb=oe(function(t){return ns(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),nb=function(e,n){var r=St(tb(n),function(i){return i.frame||S(!1),Md(i.frame.pageMarginBox)(e)});return r},rb=function(t){var e=t.center,n=t.destination,r=t.droppables;if(n){var i=r[n];return i.frame?i:null}var s=nb(e,r);return s},pt={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},ib=function(t,e){var n=t[e.size]*pt.startFromPercentage,r=t[e.size]*pt.maxScrollAtPercentage,i={startScrollingFrom:n,maxScrollValueAt:r};return i},Xd=function(t){var e=t.startOfRange,n=t.endOfRange,r=t.current,i=n-e;if(i===0)return 0;var s=r-e,o=s/i;return o},ca=1,sb=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return pt.maxPixelScroll;if(t===e.startScrollingFrom)return ca;var n=Xd({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),r=1-n,i=pt.maxPixelScroll*pt.ease(r);return Math.ceil(i)},sc=pt.durationDampening.accelerateAt,oc=pt.durationDampening.stopDampeningAt,ob=function(t,e){var n=e,r=oc,i=Date.now(),s=i-n;if(s>=oc)return t;if(s<sc)return ca;var o=Xd({startOfRange:sc,endOfRange:r,current:s}),a=t*pt.ease(o);return Math.ceil(a)},ac=function(t){var e=t.distanceToEdge,n=t.thresholds,r=t.dragStartTime,i=t.shouldUseTimeDampening,s=sb(e,n);return s===0?0:i?Math.max(ob(s,r),ca):s},lc=function(t){var e=t.container,n=t.distanceToEdges,r=t.dragStartTime,i=t.axis,s=t.shouldUseTimeDampening,o=ib(e,i),a=n[i.end]<n[i.start];return a?ac({distanceToEdge:n[i.end],thresholds:o,dragStartTime:r,shouldUseTimeDampening:s}):-1*ac({distanceToEdge:n[i.start],thresholds:o,dragStartTime:r,shouldUseTimeDampening:s})},ab=function(t){var e=t.container,n=t.subject,r=t.proposedScroll,i=n.height>e.height,s=n.width>e.width;return!s&&!i?r:s&&i?null:{x:s?0:r.x,y:i?0:r.y}},lb=wd(function(t){return t===0?0:t}),Zd=function(t){var e=t.dragStartTime,n=t.container,r=t.subject,i=t.center,s=t.shouldUseTimeDampening,o={top:i.y-n.top,right:n.right-i.x,bottom:n.bottom-i.y,left:i.x-n.left},a=lc({container:n,distanceToEdges:o,dragStartTime:e,axis:ea,shouldUseTimeDampening:s}),l=lc({container:n,distanceToEdges:o,dragStartTime:e,axis:xd,shouldUseTimeDampening:s}),c=lb({x:l,y:a});if(ft(c,le))return null;var u=ab({container:n,subject:r,proposedScroll:c});return u?ft(u,le)?null:u:null},cb=wd(function(t){return t===0?0:t>0?1:-1}),ua=function(){var t=function(n,r){return n<0?n:n>r?n-r:0};return function(e){var n=e.current,r=e.max,i=e.change,s=he(n,i),o={x:t(s.x,r.x),y:t(s.y,r.y)};return ft(o,le)?null:o}}(),eh=function(e){var n=e.max,r=e.current,i=e.change,s={x:Math.max(r.x,n.x),y:Math.max(r.y,n.y)},o=cb(i),a=ua({max:s,current:r,change:o});return!a||o.x!==0&&a.x===0||o.y!==0&&a.y===0},da=function(e,n){return eh({current:e.scroll.current,max:e.scroll.max,change:n})},ub=function(e,n){if(!da(e,n))return null;var r=e.scroll.max,i=e.scroll.current;return ua({current:i,max:r,change:n})},ha=function(e,n){var r=e.frame;return r?eh({current:r.scroll.current,max:r.scroll.max,change:n}):!1},db=function(e,n){var r=e.frame;return!r||!ha(e,n)?null:ua({current:r.scroll.current,max:r.scroll.max,change:n})},hb=function(t){var e=t.viewport,n=t.subject,r=t.center,i=t.dragStartTime,s=t.shouldUseTimeDampening,o=Zd({dragStartTime:i,container:e.frame,subject:n,center:r,shouldUseTimeDampening:s});return o&&da(e,o)?o:null},fb=function(t){var e=t.droppable,n=t.subject,r=t.center,i=t.dragStartTime,s=t.shouldUseTimeDampening,o=e.frame;if(!o)return null;var a=Zd({dragStartTime:i,container:o.pageMarginBox,subject:n,center:r,shouldUseTimeDampening:s});return a&&ha(e,a)?a:null},cc=function(t){var e=t.state,n=t.dragStartTime,r=t.shouldUseTimeDampening,i=t.scrollWindow,s=t.scrollDroppable,o=e.current.page.borderBoxCenter,a=e.dimensions.draggables[e.critical.draggable.id],l=a.page.marginBox;if(e.isWindowScrollAllowed){var c=e.viewport,u=hb({dragStartTime:n,viewport:c,subject:l,center:o,shouldUseTimeDampening:r});if(u){i(u);return}}var d=rb({center:o,destination:De(e.impact),droppables:e.dimensions.droppables});if(d){var h=fb({dragStartTime:n,droppable:d,subject:l,center:o,shouldUseTimeDampening:r});h&&s(d.descriptor.id,h)}},pb=function(t){var e=t.scrollWindow,n=t.scrollDroppable,r=Kn(e),i=Kn(n),s=null,o=function(u){s||S(!1);var d=s,h=d.shouldUseTimeDampening,f=d.dragStartTime;cc({state:u,scrollWindow:r,scrollDroppable:i,dragStartTime:f,shouldUseTimeDampening:h})},a=function(u){s&&S(!1);var d=Date.now(),h=!1,f=function(){h=!0};cc({state:u,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:f,scrollDroppable:f}),s={dragStartTime:d,shouldUseTimeDampening:h},h&&o(u)},l=function(){s&&(r.cancel(),i.cancel(),s=null)};return{start:a,stop:l,scroll:o}},gb=function(t){var e=t.move,n=t.scrollDroppable,r=t.scrollWindow,i=function(c,u){var d=he(c.current.client.selection,u);e({client:d})},s=function(c,u){if(!ha(c,u))return u;var d=db(c,u);if(!d)return n(c.descriptor.id,u),null;var h=Te(u,d);n(c.descriptor.id,h);var f=Te(u,h);return f},o=function(c,u,d){if(!c||!da(u,d))return d;var h=ub(u,d);if(!h)return r(d),null;var f=Te(d,h);r(f);var p=Te(d,f);return p},a=function(c){var u=c.scrollJumpRequest;if(u){var d=De(c.impact);d||S(!1);var h=s(c.dimensions.droppables[d],u);if(h){var f=c.viewport,p=o(c.isWindowScrollAllowed,f,h);p&&i(c,p)}}};return a},vb=function(t){var e=t.scrollDroppable,n=t.scrollWindow,r=t.move,i=pb({scrollWindow:n,scrollDroppable:e}),s=gb({move:r,scrollWindow:n,scrollDroppable:e}),o=function(c){if(c.phase==="DRAGGING"){if(c.movementMode==="FLUID"){i.scroll(c);return}c.scrollJumpRequest&&s(c)}},a={scroll:o,start:i.start,stop:i.stop};return a},an="data-rbd",ln=function(){var t=an+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),vo=function(){var t=an+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),mb=function(){var t=an+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),uc={contextId:an+"-scroll-container-context-id"},_b=function(e){return function(n){return"["+n+'="'+e+'"]'}},Pn=function(e,n){return e.map(function(r){var i=r.styles[n];return i?r.selector+" { "+i+" }":""}).join(" ")},bb="pointer-events: none;",yb=function(t){var e=_b(t),n=function(){var a=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(ln.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:a,dragging:bb,dropAnimating:a}}}(),r=function(){var a=`
      transition: `+Un.outOfTheWay+`;
    `;return{selector:e(vo.contextId),styles:{dragging:a,dropAnimating:a,userCancel:a}}}(),i={selector:e(mb.contextId),styles:{always:"overflow-anchor: none;"}},s={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},o=[r,n,i,s];return{always:Pn(o,"always"),resting:Pn(o,"resting"),dragging:Pn(o,"dragging"),dropAnimating:Pn(o,"dropAnimating"),userCancel:Pn(o,"userCancel")}},xe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?mn:ae,Ws=function(){var e=document.querySelector("head");return e||S(!1),e},dc=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function Ib(t,e){var n=W(function(){return yb(t)},[t]),r=B(null),i=B(null),s=A(oe(function(d){var h=i.current;h||S(!1),h.textContent=d}),[]),o=A(function(d){var h=r.current;h||S(!1),h.textContent=d},[]);xe(function(){!r.current&&!i.current||S(!1);var d=dc(e),h=dc(e);return r.current=d,i.current=h,d.setAttribute(an+"-always",t),h.setAttribute(an+"-dynamic",t),Ws().appendChild(d),Ws().appendChild(h),o(n.always),s(n.resting),function(){var f=function(g){var v=g.current;v||S(!1),Ws().removeChild(v),g.current=null};f(r),f(i)}},[e,o,s,n.always,n.resting,t]);var a=A(function(){return s(n.dragging)},[s,n.dragging]),l=A(function(d){if(d==="DROP"){s(n.dropAnimating);return}s(n.userCancel)},[s,n.dropAnimating,n.userCancel]),c=A(function(){i.current&&s(n.resting)},[s,n.resting]),u=W(function(){return{dragging:a,dropping:l,resting:c}},[a,l,c]);return u}var th=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function os(t){return t instanceof th(t).HTMLElement}function wb(t,e){var n="["+ln.contextId+'="'+t+'"]',r=Cd(document.querySelectorAll(n));if(!r.length)return null;var i=St(r,function(s){return s.getAttribute(ln.draggableId)===e});return!i||!os(i)?null:i}function Cb(t){var e=B({}),n=B(null),r=B(null),i=B(!1),s=A(function(h,f){var p={id:h,focus:f};return e.current[h]=p,function(){var v=e.current,_=v[h];_!==p&&delete v[h]}},[]),o=A(function(h){var f=wb(t,h);f&&f!==document.activeElement&&f.focus()},[t]),a=A(function(h,f){n.current===h&&(n.current=f)},[]),l=A(function(){r.current||i.current&&(r.current=requestAnimationFrame(function(){r.current=null;var h=n.current;h&&o(h)}))},[o]),c=A(function(h){n.current=null;var f=document.activeElement;f&&f.getAttribute(ln.draggableId)===h&&(n.current=h)},[]);xe(function(){return i.current=!0,function(){i.current=!1;var h=r.current;h&&cancelAnimationFrame(h)}},[]);var u=W(function(){return{register:s,tryRecordFocus:c,tryRestoreFocusRecorded:l,tryShiftRecord:a}},[s,c,l,a]);return u}function Eb(){var t={draggables:{},droppables:{}},e=[];function n(d){return e.push(d),function(){var f=e.indexOf(d);f!==-1&&e.splice(f,1)}}function r(d){e.length&&e.forEach(function(h){return h(d)})}function i(d){return t.draggables[d]||null}function s(d){var h=i(d);return h||S(!1),h}var o={register:function(h){t.draggables[h.descriptor.id]=h,r({type:"ADDITION",value:h})},update:function(h,f){var p=t.draggables[f.descriptor.id];p&&p.uniqueId===h.uniqueId&&(delete t.draggables[f.descriptor.id],t.draggables[h.descriptor.id]=h)},unregister:function(h){var f=h.descriptor.id,p=i(f);p&&h.uniqueId===p.uniqueId&&(delete t.draggables[f],r({type:"REMOVAL",value:h}))},getById:s,findById:i,exists:function(h){return!!i(h)},getAllByType:function(h){return hi(t.draggables).filter(function(f){return f.descriptor.type===h})}};function a(d){return t.droppables[d]||null}function l(d){var h=a(d);return h||S(!1),h}var c={register:function(h){t.droppables[h.descriptor.id]=h},unregister:function(h){var f=a(h.descriptor.id);f&&h.uniqueId===f.uniqueId&&delete t.droppables[h.descriptor.id]},getById:l,findById:a,exists:function(h){return!!a(h)},getAllByType:function(h){return hi(t.droppables).filter(function(f){return f.descriptor.type===h})}};function u(){t.draggables={},t.droppables={},e.length=0}return{draggable:o,droppable:c,subscribe:n,clean:u}}function Sb(){var t=W(Eb,[]);return ae(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var fa=K.createContext(null),pi=function(){var t=document.body;return t||S(!1),t},Tb={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},Db=function(e){return"rbd-announcement-"+e};function xb(t){var e=W(function(){return Db(t)},[t]),n=B(null);ae(function(){var s=document.createElement("div");return n.current=s,s.id=e,s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),N(s.style,Tb),pi().appendChild(s),function(){setTimeout(function(){var l=pi();l.contains(s)&&l.removeChild(s),s===n.current&&(n.current=null)})}},[e]);var r=A(function(i){var s=n.current;if(s){s.textContent=i;return}},[]);return r}var Rb=0,Pb={separator:"::"};function pa(t,e){return e===void 0&&(e=Pb),W(function(){return""+t+e.separator+Rb++},[e.separator,t])}function Ab(t){var e=t.contextId,n=t.uniqueId;return"rbd-hidden-text-"+e+"-"+n}function Nb(t){var e=t.contextId,n=t.text,r=pa("hidden-text",{separator:"-"}),i=W(function(){return Ab({contextId:e,uniqueId:r})},[r,e]);return ae(function(){var o=document.createElement("div");return o.id=i,o.textContent=n,o.style.display="none",pi().appendChild(o),function(){var l=pi();l.contains(o)&&l.removeChild(o)}},[i,n]),i}var as=K.createContext(null);function nh(t){var e=B(t);return ae(function(){e.current=t}),e}function Ob(){var t=null;function e(){return!!t}function n(o){return o===t}function r(o){t&&S(!1);var a={abandon:o};return t=a,a}function i(){t||S(!1),t=null}function s(){t&&(t.abandon(),i())}return{isClaimed:e,isActive:n,claim:r,release:i,tryAbandon:s}}var kb=9,Mb=13,ga=27,rh=32,Lb=33,Fb=34,Bb=35,Ub=36,Wb=37,$b=38,Hb=39,Gb=40,Gr,Vb=(Gr={},Gr[Mb]=!0,Gr[kb]=!0,Gr),ih=function(t){Vb[t.keyCode]&&t.preventDefault()},ls=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=St(e,function(r){return"on"+r in document});return n||t}(),sh=0,hc=5;function qb(t,e){return Math.abs(e.x-t.x)>=hc||Math.abs(e.y-t.y)>=hc}var fc={type:"IDLE"};function zb(t){var e=t.cancel,n=t.completed,r=t.getPhase,i=t.setPhase;return[{eventName:"mousemove",fn:function(o){var a=o.button,l=o.clientX,c=o.clientY;if(a===sh){var u={x:l,y:c},d=r();if(d.type==="DRAGGING"){o.preventDefault(),d.actions.move(u);return}d.type!=="PENDING"&&S(!1);var h=d.point;if(qb(h,u)){o.preventDefault();var f=d.actions.fluidLift(u);i({type:"DRAGGING",actions:f})}}}},{eventName:"mouseup",fn:function(o){var a=r();if(a.type!=="DRAGGING"){e();return}o.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(o){r().type==="DRAGGING"&&o.preventDefault(),e()}},{eventName:"keydown",fn:function(o){var a=r();if(a.type==="PENDING"){e();return}if(o.keyCode===ga){o.preventDefault(),e();return}ih(o)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){r().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(o){var a=r();if(a.type==="IDLE"&&S(!1),a.actions.shouldRespectForcePress()){e();return}o.preventDefault()}},{eventName:ls,fn:e}]}function jb(t){var e=B(fc),n=B(ht),r=W(function(){return{eventName:"mousedown",fn:function(d){if(!d.defaultPrevented&&d.button===sh&&!(d.ctrlKey||d.metaKey||d.shiftKey||d.altKey)){var h=t.findClosestDraggableId(d);if(h){var f=t.tryGetLock(h,o,{sourceEvent:d});if(f){d.preventDefault();var p={x:d.clientX,y:d.clientY};n.current(),c(f,p)}}}}}},[t]),i=W(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(d){if(!d.defaultPrevented){var h=t.findClosestDraggableId(d);if(h){var f=t.findOptionsForDraggable(h);f&&(f.shouldRespectForcePress||t.canGetLock(h)&&d.preventDefault())}}}}},[t]),s=A(function(){var d={passive:!1,capture:!0};n.current=Ne(window,[i,r],d)},[i,r]),o=A(function(){var u=e.current;u.type!=="IDLE"&&(e.current=fc,n.current(),s())},[s]),a=A(function(){var u=e.current;o(),u.type==="DRAGGING"&&u.actions.cancel({shouldBlockNextClick:!0}),u.type==="PENDING"&&u.actions.abort()},[o]),l=A(function(){var d={capture:!0,passive:!1},h=zb({cancel:a,completed:o,getPhase:function(){return e.current},setPhase:function(p){e.current=p}});n.current=Ne(window,h,d)},[a,o]),c=A(function(d,h){e.current.type!=="IDLE"&&S(!1),e.current={type:"PENDING",point:h,actions:d},l()},[l]);xe(function(){return s(),function(){n.current()}},[s])}var Yt;function Kb(){}var Yb=(Yt={},Yt[Fb]=!0,Yt[Lb]=!0,Yt[Ub]=!0,Yt[Bb]=!0,Yt);function Jb(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:function(s){if(s.keyCode===ga){s.preventDefault(),n();return}if(s.keyCode===rh){s.preventDefault(),r();return}if(s.keyCode===Gb){s.preventDefault(),t.moveDown();return}if(s.keyCode===$b){s.preventDefault(),t.moveUp();return}if(s.keyCode===Hb){s.preventDefault(),t.moveRight();return}if(s.keyCode===Wb){s.preventDefault(),t.moveLeft();return}if(Yb[s.keyCode]){s.preventDefault();return}ih(s)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:ls,fn:n}]}function Qb(t){var e=B(Kb),n=W(function(){return{eventName:"keydown",fn:function(s){if(s.defaultPrevented||s.keyCode!==rh)return;var o=t.findClosestDraggableId(s);if(!o)return;var a=t.tryGetLock(o,u,{sourceEvent:s});if(!a)return;s.preventDefault();var l=!0,c=a.snapLift();e.current();function u(){l||S(!1),l=!1,e.current(),r()}e.current=Ne(window,Jb(c,u),{capture:!0,passive:!1})}}},[t]),r=A(function(){var s={passive:!1,capture:!0};e.current=Ne(window,[n],s)},[n]);xe(function(){return r(),function(){e.current()}},[r])}var $s={type:"IDLE"},Xb=120,Zb=.15;function ey(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(i){i.preventDefault()}},{eventName:"keydown",fn:function(i){if(n().type!=="DRAGGING"){e();return}i.keyCode===ga&&i.preventDefault(),e()}},{eventName:ls,fn:e}]}function ty(t){var e=t.cancel,n=t.completed,r=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(s){var o=r();if(o.type!=="DRAGGING"){e();return}o.hasMoved=!0;var a=s.touches[0],l=a.clientX,c=a.clientY,u={x:l,y:c};s.preventDefault(),o.actions.move(u)}},{eventName:"touchend",fn:function(s){var o=r();if(o.type!=="DRAGGING"){e();return}s.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(s){if(r().type!=="DRAGGING"){e();return}s.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(s){var o=r();o.type==="IDLE"&&S(!1);var a=s.touches[0];if(a){var l=a.force>=Zb;if(l){var c=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){c&&e();return}if(c){if(o.hasMoved){s.preventDefault();return}e();return}s.preventDefault()}}}},{eventName:ls,fn:e}]}function ny(t){var e=B($s),n=B(ht),r=A(function(){return e.current},[]),i=A(function(f){e.current=f},[]),s=W(function(){return{eventName:"touchstart",fn:function(f){if(!f.defaultPrevented){var p=t.findClosestDraggableId(f);if(p){var g=t.tryGetLock(p,a,{sourceEvent:f});if(g){var v=f.touches[0],_=v.clientX,b=v.clientY,w={x:_,y:b};n.current(),d(g,w)}}}}}},[t]),o=A(function(){var f={capture:!0,passive:!1};n.current=Ne(window,[s],f)},[s]),a=A(function(){var h=e.current;h.type!=="IDLE"&&(h.type==="PENDING"&&clearTimeout(h.longPressTimerId),i($s),n.current(),o())},[o,i]),l=A(function(){var h=e.current;a(),h.type==="DRAGGING"&&h.actions.cancel({shouldBlockNextClick:!0}),h.type==="PENDING"&&h.actions.abort()},[a]),c=A(function(){var f={capture:!0,passive:!1},p={cancel:l,completed:a,getPhase:r},g=Ne(window,ty(p),f),v=Ne(window,ey(p),f);n.current=function(){g(),v()}},[l,r,a]),u=A(function(){var f=r();f.type!=="PENDING"&&S(!1);var p=f.actions.fluidLift(f.point);i({type:"DRAGGING",actions:p,hasMoved:!1})},[r,i]),d=A(function(f,p){r().type!=="IDLE"&&S(!1);var g=setTimeout(u,Xb);i({type:"PENDING",point:p,actions:f,longPressTimerId:g}),c()},[c,r,i,u]);xe(function(){return o(),function(){n.current();var p=r();p.type==="PENDING"&&(clearTimeout(p.longPressTimerId),i($s))}},[r,o,i]),xe(function(){var f=Ne(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return f},[])}var ry={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function oh(t,e){if(e==null)return!1;var n=!!ry[e.tagName.toLowerCase()];if(n)return!0;var r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:oh(t,e.parentElement)}function iy(t,e){var n=e.target;return os(n)?oh(t,n):!1}var sy=function(t){return Fe(t.getBoundingClientRect()).center};function oy(t){return t instanceof th(t).Element}var ay=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=St(e,function(r){return r in Element.prototype});return n||t}();function ah(t,e){return t==null?null:t[ay](e)?t:ah(t.parentElement,e)}function ly(t,e){return t.closest?t.closest(e):ah(t,e)}function cy(t){return"["+ln.contextId+'="'+t+'"]'}function uy(t,e){var n=e.target;if(!oy(n))return null;var r=cy(t),i=ly(n,r);return!i||!os(i)?null:i}function dy(t,e){var n=uy(t,e);return n?n.getAttribute(ln.draggableId):null}function hy(t,e){var n="["+vo.contextId+'="'+t+'"]',r=Cd(document.querySelectorAll(n)),i=St(r,function(s){return s.getAttribute(vo.id)===e});return!i||!os(i)?null:i}function fy(t){t.preventDefault()}function Vr(t){var e=t.expected,n=t.phase,r=t.isLockActive;return t.shouldWarn,!(!r()||e!==n)}function lh(t){var e=t.lockAPI,n=t.store,r=t.registry,i=t.draggableId;if(e.isClaimed())return!1;var s=r.draggable.findById(i);return!(!s||!s.options.isEnabled||!Qd(n.getState(),i))}function py(t){var e=t.lockAPI,n=t.contextId,r=t.store,i=t.registry,s=t.draggableId,o=t.forceSensorStop,a=t.sourceEvent,l=lh({lockAPI:e,store:r,registry:i,draggableId:s});if(!l)return null;var c=i.draggable.getById(s),u=hy(n,c.descriptor.id);if(!u||a&&!c.options.canDragInteractiveElements&&iy(u,a))return null;var d=e.claim(o||ht),h="PRE_DRAG";function f(){return c.options.shouldRespectForcePress}function p(){return e.isActive(d)}function g(D,I){Vr({expected:D,phase:h,isLockActive:p,shouldWarn:!0})&&r.dispatch(I())}var v=g.bind(null,"DRAGGING");function _(D){function I(){e.release(),h="COMPLETED"}h!=="PRE_DRAG"&&(I(),h!=="PRE_DRAG"&&S(!1)),r.dispatch(a_(D.liftActionArgs)),h="DRAGGING";function E(C,x){if(x===void 0&&(x={shouldBlockNextClick:!1}),D.cleanup(),x.shouldBlockNextClick){var O=Ne(window,[{eventName:"click",fn:fy,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(O)}I(),r.dispatch(Vd({reason:C}))}return N({isActive:function(){return Vr({expected:"DRAGGING",phase:h,isLockActive:p,shouldWarn:!1})},shouldRespectForcePress:f,drop:function(x){return E("DROP",x)},cancel:function(x){return E("CANCEL",x)}},D.actions)}function b(D){var I=Kn(function(C){v(function(){return Gd({client:C})})}),E=_({liftActionArgs:{id:s,clientSelection:D,movementMode:"FLUID"},cleanup:function(){return I.cancel()},actions:{move:I}});return N({},E,{move:I})}function w(){var D={moveUp:function(){return v(v_)},moveRight:function(){return v(__)},moveDown:function(){return v(m_)},moveLeft:function(){return v(b_)}};return _({liftActionArgs:{id:s,clientSelection:sy(u),movementMode:"SNAP"},cleanup:ht,actions:D})}function y(){var D=Vr({expected:"PRE_DRAG",phase:h,isLockActive:p,shouldWarn:!0});D&&e.release()}var R={isActive:function(){return Vr({expected:"PRE_DRAG",phase:h,isLockActive:p,shouldWarn:!1})},shouldRespectForcePress:f,fluidLift:b,snapLift:w,abort:y};return R}var gy=[jb,Qb,ny];function vy(t){var e=t.contextId,n=t.store,r=t.registry,i=t.customSensors,s=t.enableDefaultSensors,o=[].concat(s?gy:[],i||[]),a=ee(function(){return Ob()})[0],l=A(function(b,w){b.isDragging&&!w.isDragging&&a.tryAbandon()},[a]);xe(function(){var b=n.getState(),w=n.subscribe(function(){var y=n.getState();l(b,y),b=y});return w},[a,n,l]),xe(function(){return a.tryAbandon},[a.tryAbandon]);for(var c=A(function(_){return lh({lockAPI:a,registry:r,store:n,draggableId:_})},[a,r,n]),u=A(function(_,b,w){return py({lockAPI:a,registry:r,contextId:e,store:n,draggableId:_,forceSensorStop:b,sourceEvent:w&&w.sourceEvent?w.sourceEvent:null})},[e,a,r,n]),d=A(function(_){return dy(e,_)},[e]),h=A(function(_){var b=r.draggable.findById(_);return b?b.options:null},[r.draggable]),f=A(function(){a.isClaimed()&&(a.tryAbandon(),n.getState().phase!=="IDLE"&&n.dispatch(sa()))},[a,n]),p=A(a.isClaimed,[a]),g=W(function(){return{canGetLock:c,tryGetLock:u,findClosestDraggableId:d,findOptionsForDraggable:h,tryReleaseLock:f,isLockClaimed:p}},[c,u,d,h,f,p]),v=0;v<o.length;v++)o[v](g)}var my=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function An(t){return t.current||S(!1),t.current}function _y(t){var e=t.contextId,n=t.setCallbacks,r=t.sensors,i=t.nonce,s=t.dragHandleUsageInstructions,o=B(null),a=nh(t),l=A(function(){return my(a.current)},[a]),c=xb(e),u=Nb({contextId:e,text:s}),d=Ib(e,i),h=A(function(C){An(o).dispatch(C)},[]),f=W(function(){return Ll({publishWhileDragging:c_,updateDroppableScroll:d_,updateDroppableIsEnabled:h_,updateDroppableIsCombineEnabled:f_,collectionStarting:u_},h)},[h]),p=Sb(),g=W(function(){return Z_(p,f)},[p,f]),v=W(function(){return vb(N({scrollWindow:eb,scrollDroppable:g.scrollDroppable},Ll({move:Gd},h)))},[g.scrollDroppable,h]),_=Cb(e),b=W(function(){return Y_({announce:c,autoScroller:v,dimensionMarshal:g,focusMarshal:_,getResponders:l,styleMarshal:d})},[c,v,g,_,l,d]);o.current=b;var w=A(function(){var C=An(o),x=C.getState();x.phase!=="IDLE"&&C.dispatch(sa())},[]),y=A(function(){var C=An(o).getState();return C.isDragging||C.phase==="DROP_ANIMATING"},[]),R=W(function(){return{isDragging:y,tryAbort:w}},[y,w]);n(R);var D=A(function(C){return Qd(An(o).getState(),C)},[]),I=A(function(){return Rt(An(o).getState())},[]),E=W(function(){return{marshal:g,focus:_,contextId:e,canLift:D,isMovementAllowed:I,dragHandleUsageInstructionsId:u,registry:p}},[e,g,u,_,D,I,p]);return vy({contextId:e,store:b,registry:p,customSensors:r,enableDefaultSensors:t.enableDefaultSensors!==!1}),ae(function(){return w},[w]),K.createElement(as.Provider,{value:E},K.createElement(Ug,{context:fa,store:b},t.children))}var by=0;function yy(){return W(function(){return""+by++},[])}function Iy(t){var e=yy(),n=t.dragHandleUsageInstructions||Xr.dragHandleUsageInstructions;return K.createElement(Qv,null,function(r){return K.createElement(_y,{nonce:t.nonce,contextId:e,setCallbacks:r,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var ch=function(e){return function(n){return e===n}},wy=ch("scroll"),Cy=ch("auto"),pc=function(e,n){return n(e.overflowX)||n(e.overflowY)},Ey=function(e){var n=window.getComputedStyle(e),r={overflowX:n.overflowX,overflowY:n.overflowY};return pc(r,wy)||pc(r,Cy)},Sy=function(){return!1},Ty=function t(e){return e==null?null:e===document.body?Sy()?e:null:e===document.documentElement?null:Ey(e)?e:t(e.parentElement)},mo=function(t){return{x:t.scrollLeft,y:t.scrollTop}},Dy=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},xy=function(t){var e=Ty(t),n=Dy(t);return{closestScrollable:e,isFixedOnPage:n}},Ry=function(t){var e=t.descriptor,n=t.isEnabled,r=t.isCombineEnabled,i=t.isFixedOnPage,s=t.direction,o=t.client,a=t.page,l=t.closest,c=function(){if(!l)return null;var f=l.scrollSize,p=l.client,g=Kd({scrollHeight:f.scrollHeight,scrollWidth:f.scrollWidth,height:p.paddingBox.height,width:p.paddingBox.width});return{pageMarginBox:l.page.marginBox,frameClient:p,scrollSize:f,shouldClipSubject:l.shouldClipSubject,scroll:{initial:l.scroll,current:l.scroll,max:g,diff:{value:le,displacement:le}}}}(),u=s==="vertical"?ea:xd,d=on({page:a,withPlaceholder:null,axis:u,frame:c}),h={descriptor:e,isCombineEnabled:r,isFixedOnPage:i,axis:u,isEnabled:n,client:o,page:a,frame:c,subject:d};return h},Py=function(e,n){var r=_d(e);if(!n||e!==n)return r;var i=r.paddingBox.top-n.scrollTop,s=r.paddingBox.left-n.scrollLeft,o=i+n.scrollHeight,a=s+n.scrollWidth,l={top:i,right:a,bottom:o,left:s},c=Yo(l,r.border),u=Jo({borderBox:c,margin:r.margin,border:r.border,padding:r.padding});return u},Ay=function(t){var e=t.ref,n=t.descriptor,r=t.env,i=t.windowScroll,s=t.direction,o=t.isDropDisabled,a=t.isCombineEnabled,l=t.shouldClipSubject,c=r.closestScrollable,u=Py(e,c),d=ci(u,i),h=function(){if(!c)return null;var p=_d(c),g={scrollHeight:c.scrollHeight,scrollWidth:c.scrollWidth};return{client:p,page:ci(p,i),scroll:mo(c),scrollSize:g,shouldClipSubject:l}}(),f=Ry({descriptor:n,isEnabled:!o,isCombineEnabled:a,isFixedOnPage:r.isFixedOnPage,direction:s,client:u,page:d,closest:h});return f},Ny={passive:!1},Oy={passive:!0},gc=function(t){return t.shouldPublishImmediately?Ny:Oy};function gi(t){var e=Hi(t);return e||S(!1),e}var qr=function(e){return e&&e.env.closestScrollable||null};function ky(t){var e=B(null),n=gi(as),r=pa("droppable"),i=n.registry,s=n.marshal,o=nh(t),a=W(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),l=B(a),c=W(function(){return oe(function(y,R){e.current||S(!1);var D={x:y,y:R};s.updateDroppableScroll(a.id,D)})},[a.id,s]),u=A(function(){var y=e.current;return!y||!y.env.closestScrollable?le:mo(y.env.closestScrollable)},[]),d=A(function(){var y=u();c(y.x,y.y)},[u,c]),h=W(function(){return Kn(d)},[d]),f=A(function(){var y=e.current,R=qr(y);y&&R||S(!1);var D=y.scrollOptions;if(D.shouldPublishImmediately){d();return}h()},[h,d]),p=A(function(y,R){e.current&&S(!1);var D=o.current,I=D.getDroppableRef();I||S(!1);var E=xy(I),C={ref:I,descriptor:a,env:E,scrollOptions:R};e.current=C;var x=Ay({ref:I,descriptor:a,env:E,windowScroll:y,direction:D.direction,isDropDisabled:D.isDropDisabled,isCombineEnabled:D.isCombineEnabled,shouldClipSubject:!D.ignoreContainerClipping}),O=E.closestScrollable;return O&&(O.setAttribute(uc.contextId,n.contextId),O.addEventListener("scroll",f,gc(C.scrollOptions))),x},[n.contextId,a,f,o]),g=A(function(){var y=e.current,R=qr(y);return y&&R||S(!1),mo(R)},[]),v=A(function(){var y=e.current;y||S(!1);var R=qr(y);e.current=null,R&&(h.cancel(),R.removeAttribute(uc.contextId),R.removeEventListener("scroll",f,gc(y.scrollOptions)))},[f,h]),_=A(function(y){var R=e.current;R||S(!1);var D=qr(R);D||S(!1),D.scrollTop+=y.y,D.scrollLeft+=y.x},[]),b=W(function(){return{getDimensionAndWatchScroll:p,getScrollWhileDragging:g,dragStopped:v,scroll:_}},[v,p,g,_]),w=W(function(){return{uniqueId:r,descriptor:a,callbacks:b}},[b,a,r]);xe(function(){return l.current=w.descriptor,i.droppable.register(w),function(){e.current&&v(),i.droppable.unregister(w)}},[b,a,v,w,s,i.droppable]),xe(function(){e.current&&s.updateDroppableIsEnabled(l.current.id,!t.isDropDisabled)},[t.isDropDisabled,s]),xe(function(){e.current&&s.updateDroppableIsCombineEnabled(l.current.id,t.isCombineEnabled)},[t.isCombineEnabled,s])}function Hs(){}var vc={width:0,height:0,margin:rm},My=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate;return n||i==="close"?vc:{height:r.client.borderBox.height,width:r.client.borderBox.width,margin:r.client.margin}},Ly=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate,s=My({isAnimatingOpenOnMount:n,placeholder:r,animate:i});return{display:r.display,boxSizing:"border-box",width:s.width,height:s.height,marginTop:s.margin.top,marginRight:s.margin.right,marginBottom:s.margin.bottom,marginLeft:s.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:i!=="none"?Un.placeholder:null}};function Fy(t){var e=B(null),n=A(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),r=t.animate,i=t.onTransitionEnd,s=t.onClose,o=t.contextId,a=ee(t.animate==="open"),l=a[0],c=a[1];ae(function(){return l?r!=="open"?(n(),c(!1),Hs):e.current?Hs:(e.current=setTimeout(function(){e.current=null,c(!1)}),n):Hs},[r,l,n]);var u=A(function(h){h.propertyName==="height"&&(i(),r==="close"&&s())},[r,s,i]),d=Ly({isAnimatingOpenOnMount:l,animate:t.animate,placeholder:t.placeholder});return K.createElement(t.placeholder.tagName,{style:d,"data-rbd-placeholder-context-id":o,onTransitionEnd:u,ref:t.innerRef})}var By=K.memo(Fy),va=K.createContext(null),Uy=function(t){Qu(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.state={isVisible:!!r.props.on,data:r.props.on,animate:r.props.shouldAnimate&&r.props.on?"open":"none"},r.onClose=function(){r.state.animate==="close"&&r.setState({isVisible:!1})},r}e.getDerivedStateFromProps=function(i,s){return i.shouldAnimate?i.on?{isVisible:!0,data:i.on,animate:"open"}:s.isVisible?{isVisible:!0,data:s.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!i.on,data:i.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var i={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(i)},e}(K.PureComponent),mc={dragging:5e3,dropAnimating:4500},Wy=function(e,n){return n?Un.drop(n.duration):e?Un.snap:Un.fluid},$y=function(e,n){return e?n?Xn.opacity.drop:Xn.opacity.combining:null},Hy=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function Gy(t){var e=t.dimension,n=e.client,r=t.offset,i=t.combineWith,s=t.dropping,o=!!i,a=Hy(t),l=!!s,c=l?po.drop(r,o):po.moveTo(r),u={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:Wy(a,s),transform:c,opacity:$y(o,l),zIndex:l?mc.dropAnimating:mc.dragging,pointerEvents:"none"};return u}function Vy(t){return{transform:po.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function qy(t){return t.type==="DRAGGING"?Gy(t):Vy(t)}function zy(t,e,n){n===void 0&&(n=le);var r=window.getComputedStyle(e),i=e.getBoundingClientRect(),s=md(i,r),o=ci(s,n),a={client:s,tagName:e.tagName.toLowerCase(),display:r.display},l={x:s.marginBox.width,y:s.marginBox.height},c={descriptor:t,placeholder:a,displaceBy:l,client:s,page:o};return c}function jy(t){var e=pa("draggable"),n=t.descriptor,r=t.registry,i=t.getDraggableRef,s=t.canDragInteractiveElements,o=t.shouldRespectForcePress,a=t.isEnabled,l=W(function(){return{canDragInteractiveElements:s,shouldRespectForcePress:o,isEnabled:a}},[s,a,o]),c=A(function(f){var p=i();return p||S(!1),zy(n,p,f)},[n,i]),u=W(function(){return{uniqueId:e,descriptor:n,options:l,getDimension:c}},[n,c,l,e]),d=B(u),h=B(!0);xe(function(){return r.draggable.register(d.current),function(){return r.draggable.unregister(d.current)}},[r.draggable]),xe(function(){if(h.current){h.current=!1;return}var f=d.current;d.current=u,r.draggable.update(u,f)},[u,r.draggable])}function Ky(t){t.preventDefault()}function Yy(t){var e=B(null),n=A(function(C){e.current=C},[]),r=A(function(){return e.current},[]),i=gi(as),s=i.contextId,o=i.dragHandleUsageInstructionsId,a=i.registry,l=gi(va),c=l.type,u=l.droppableId,d=W(function(){return{id:t.draggableId,index:t.index,type:c,droppableId:u}},[t.draggableId,t.index,c,u]),h=t.children,f=t.draggableId,p=t.isEnabled,g=t.shouldRespectForcePress,v=t.canDragInteractiveElements,_=t.isClone,b=t.mapped,w=t.dropAnimationFinished;if(!_){var y=W(function(){return{descriptor:d,registry:a,getDraggableRef:r,canDragInteractiveElements:v,shouldRespectForcePress:g,isEnabled:p}},[d,a,r,v,g,p]);jy(y)}var R=W(function(){return p?{tabIndex:0,role:"button","aria-describedby":o,"data-rbd-drag-handle-draggable-id":f,"data-rbd-drag-handle-context-id":s,draggable:!1,onDragStart:Ky}:null},[s,o,f,p]),D=A(function(C){b.type==="DRAGGING"&&b.dropping&&C.propertyName==="transform"&&w()},[w,b]),I=W(function(){var C=qy(b),x=b.type==="DRAGGING"&&b.dropping?D:null,O={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":s,"data-rbd-draggable-id":f,style:C,onTransitionEnd:x},dragHandleProps:R};return O},[s,R,f,b,D,n]),E=W(function(){return{draggableId:d.id,type:d.type,source:{index:d.index,droppableId:d.droppableId}}},[d.droppableId,d.id,d.index,d.type]);return h(I,b.snapshot,E)}var uh=function(t,e){return t===e},dh=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},Jy=function(e){return e.combine?e.combine.draggableId:null},Qy=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function Xy(){var t=oe(function(i,s){return{x:i,y:s}}),e=oe(function(i,s,o,a,l){return{isDragging:!0,isClone:s,isDropAnimating:!!l,dropAnimation:l,mode:i,draggingOver:o,combineWith:a,combineTargetFor:null}}),n=oe(function(i,s,o,a,l,c,u){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:l,combineWith:c,mode:s,offset:i,dimension:o,forceShouldAnimate:u,snapshot:e(s,a,l,c,null)}}}),r=function(s,o){if(s.isDragging){if(s.critical.draggable.id!==o.draggableId)return null;var a=s.current.client.offset,l=s.dimensions.draggables[o.draggableId],c=De(s.impact),u=Qy(s.impact),d=s.forceShouldAnimate;return n(t(a.x,a.y),s.movementMode,l,o.isClone,c,u,d)}if(s.phase==="DROP_ANIMATING"){var h=s.completed;if(h.result.draggableId!==o.draggableId)return null;var f=o.isClone,p=s.dimensions.draggables[o.draggableId],g=h.result,v=g.mode,_=dh(g),b=Jy(g),w=s.dropDuration,y={duration:w,curve:aa.drop,moveTo:s.newHomeClientOffset,opacity:b?Xn.opacity.drop:null,scale:b?Xn.scale.drop:null};return{mapped:{type:"DRAGGING",offset:s.newHomeClientOffset,dimension:p,dropping:y,draggingOver:_,combineWith:b,mode:v,forceShouldAnimate:null,snapshot:e(v,f,_,b,y)}}}return null};return r}function hh(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var Zy={mapped:{type:"SECONDARY",offset:le,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:hh(null)}};function eI(){var t=oe(function(o,a){return{x:o,y:a}}),e=oe(hh),n=oe(function(o,a,l){return a===void 0&&(a=null),{mapped:{type:"SECONDARY",offset:o,combineTargetFor:a,shouldAnimateDisplacement:l,snapshot:e(a)}}}),r=function(a){return a?n(le,a,!0):null},i=function(a,l,c,u){var d=c.displaced.visible[a],h=!!(u.inVirtualList&&u.effected[a]),f=rs(c),p=f&&f.draggableId===a?l:null;if(!d){if(!h)return r(p);if(c.displaced.invisible[a])return null;var g=_n(u.displacedBy.point),v=t(g.x,g.y);return n(v,p,!0)}if(h)return r(p);var _=c.displacedBy.point,b=t(_.x,_.y);return n(b,p,d.shouldAnimate)},s=function(a,l){if(a.isDragging)return a.critical.draggable.id===l.draggableId?null:i(l.draggableId,a.critical.draggable.id,a.impact,a.afterCritical);if(a.phase==="DROP_ANIMATING"){var c=a.completed;return c.result.draggableId===l.draggableId?null:i(l.draggableId,c.result.draggableId,c.impact,c.afterCritical)}return null};return s}var tI=function(){var e=Xy(),n=eI(),r=function(s,o){return e(s,o)||n(s,o)||Zy};return r},nI={dropAnimationFinished:qd},rI=gd(tI,nI,null,{context:fa,pure:!0,areStatePropsEqual:uh})(Yy);function fh(t){var e=gi(va),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:K.createElement(rI,t)}function ph(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;return K.createElement(fh,N({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}))}function iI(t){var e=Hi(as);e||S(!1);var n=e.contextId,r=e.isMovementAllowed,i=B(null),s=B(null),o=t.children,a=t.droppableId,l=t.type,c=t.mode,u=t.direction,d=t.ignoreContainerClipping,h=t.isDropDisabled,f=t.isCombineEnabled,p=t.snapshot,g=t.useClone,v=t.updateViewportMaxScroll,_=t.getContainerForClone,b=A(function(){return i.current},[]),w=A(function(O){i.current=O},[]);A(function(){return s.current},[]);var y=A(function(O){s.current=O},[]),R=A(function(){r()&&v({maxScroll:Jd()})},[r,v]);ky({droppableId:a,type:l,mode:c,direction:u,isDropDisabled:h,isCombineEnabled:f,ignoreContainerClipping:d,getDroppableRef:b});var D=K.createElement(Uy,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(O){var Y=O.onClose,X=O.data,H=O.animate;return K.createElement(By,{placeholder:X,onClose:Y,innerRef:y,animate:H,contextId:n,onTransitionEnd:R})}),I=W(function(){return{innerRef:w,placeholder:D,droppableProps:{"data-rbd-droppable-id":a,"data-rbd-droppable-context-id":n}}},[n,a,D,w]),E=g?g.dragging.draggableId:null,C=W(function(){return{droppableId:a,type:l,isUsingCloneFor:E}},[a,E,l]);function x(){if(!g)return null;var O=g.dragging,Y=g.render,X=K.createElement(fh,{draggableId:O.draggableId,index:O.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(H,me){return Y(H,me,O)});return K.createPortal(X,_())}return K.createElement(va.Provider,{value:C},o(I,p),x())}var Gs=function(e,n){return e===n.droppable.type},_c=function(e,n){return n.draggables[e.draggable.id]},sI=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=N({},e,{shouldAnimatePlaceholder:!1}),r=oe(function(o){return{draggableId:o.id,type:o.type,source:{index:o.index,droppableId:o.droppableId}}}),i=oe(function(o,a,l,c,u,d){var h=u.descriptor.id,f=u.descriptor.droppableId===o;if(f){var p=d?{render:d,dragging:r(u.descriptor)}:null,g={isDraggingOver:l,draggingOverWith:l?h:null,draggingFromThisWith:h,isUsingPlaceholder:!0};return{placeholder:u.placeholder,shouldAnimatePlaceholder:!1,snapshot:g,useClone:p}}if(!a)return n;if(!c)return e;var v={isDraggingOver:l,draggingOverWith:h,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:u.placeholder,shouldAnimatePlaceholder:!0,snapshot:v,useClone:null}}),s=function(a,l){var c=l.droppableId,u=l.type,d=!l.isDropDisabled,h=l.renderClone;if(a.isDragging){var f=a.critical;if(!Gs(u,f))return n;var p=_c(f,a.dimensions),g=De(a.impact)===c;return i(c,d,g,g,p,h)}if(a.phase==="DROP_ANIMATING"){var v=a.completed;if(!Gs(u,v.critical))return n;var _=_c(v.critical,a.dimensions);return i(c,d,dh(v.result)===c,De(v.impact)===c,_,h)}if(a.phase==="IDLE"&&a.completed&&!a.shouldFlush){var b=a.completed;if(!Gs(u,b.critical))return n;var w=De(b.impact)===c,y=!!(b.impact.at&&b.impact.at.type==="COMBINE"),R=b.critical.droppable.id===c;return w?y?e:n:R?e:n}return n};return s},oI={updateViewportMaxScroll:g_};function aI(){return document.body||S(!1),document.body}var lI={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:aI},ma=gd(sI,oI,null,{context:fa,pure:!0,areStatePropsEqual:uh})(iI);ma.defaultProps=lI;var cI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},uI=Object.defineProperty,dI=Object.defineProperties,hI=Object.getOwnPropertyDescriptors,vi=Object.getOwnPropertySymbols,gh=Object.prototype.hasOwnProperty,vh=Object.prototype.propertyIsEnumerable,bc=(t,e,n)=>e in t?uI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,yc=(t,e)=>{for(var n in e||(e={}))gh.call(e,n)&&bc(t,n,e[n]);if(vi)for(var n of vi(e))vh.call(e,n)&&bc(t,n,e[n]);return t},fI=(t,e)=>dI(t,hI(e)),pI=(t,e)=>{var n={};for(var r in t)gh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&vi)for(var r of vi(t))e.indexOf(r)<0&&vh.call(t,r)&&(n[r]=t[r]);return n},ke=(t,e,n)=>{const r=i=>{var s=i,{color:o="currentColor",size:a=24,stroke:l=2,children:c}=s,u=pI(s,["color","size","stroke","children"]);return $e("svg",yc(fI(yc({},cI),{width:a,height:a,stroke:o,"stroke-width":l,class:`tabler-icon tabler-icon-${t}`}),u),[...n.map(([d,h])=>$e(d,h)),...qe(c)])};return r.displayName=`${e}`,r},mh=ke("align-justified","IconAlignJustified",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l12 0",key:"svg-2"}]]),gI=ke("brand-github-filled","IconBrandGithubFilled",[["path",{d:"M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),vI=ke("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),mI=ke("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),_h=ke("checkbox","IconCheckbox",[["path",{d:"M9 11l3 3l8 -8",key:"svg-0"}],["path",{d:"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9",key:"svg-1"}]]),_I=ke("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),bI=ke("edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]),yI=ke("layout-cards","IconLayoutCards",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-1"}]]),II=ke("palette","IconPalette",[["path",{d:"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25",key:"svg-0"}],["path",{d:"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}]]),_a=ke("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),bh=ke("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]]),Zn=ke("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]),Wn=(t=>(t.Card="card",t.List="list",t))(Wn||{}),mi=(t=>(t[t.normal=0]="normal",t[t.editing=1]="editing",t[t.dialog=2]="dialog",t))(mi||{});const Zr={red:"#f87462",orange:"#faa53d",yellow:"#e2b203",green:"#4bce97",blue:"#579dff",purple:"#9f8fef",pink:"#e774bb"},wI=[{title:"to do",cards:[{id:Ge(),content:"add sprites"},{id:Ge(),content:"implement main menu"},{id:Ge(),content:"add sounds",todos:[{content:"victory.wav",completed:!0},{content:"game_over.wav",completed:!1},{content:"soundtrack.wav",completed:!1}],color:Zr.purple}]},{title:"in progress",cards:[{id:Ge(),content:"write story",description:"need to outline the story and write the script",todos:[{content:"ask friends for feedback",completed:!1}],color:Zr.red},{id:Ge(),content:"add levels",color:Zr.red},{id:Ge(),content:"send demo to friends"},{id:Ge(),content:"marketing"}]},{title:"done",cards:[{id:Ge(),content:"implement player movement"},{id:Ge(),content:"meet with investors to discuss marketing strategy and budget"}]}];var CI=0;function m(t,e,n,r,i,s){var o,a,l={};for(a in e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--CI,__source:i,__self:s};if(typeof t=="function"&&(o=t.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return P.vnode&&P.vnode(c),c}const EI=({user:t,signIn:e,signOut:n,updateLists:r})=>m("div",{class:"flex w-full content-center items-center border-b-2 border-b-slate-800 px-8 py-6  font-bold text-slate-50",children:m("div",{class:"flex items-center gap-4",children:[m("div",{class:"relative whitespace-nowrap text-2xl md:text-3xl",children:"trello clone"}),m("div",{class:"relative flex h-8 w-8 items-center justify-center",children:[m(vI,{class:"absolute"}),m("a",{class:"absolute flex cursor-pointer content-center items-center justify-center  fill-slate-50 opacity-0 transition hover:opacity-100",href:"https://github.com/chompaa/trello-clone",target:"_blank",children:m(gI,{})})]}),t?m("button",{class:"whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50  hover:text-slate-900",onClick:()=>n(),children:"Sign out"}):m(ge,{children:[m("button",{class:"whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50  hover:text-slate-900",onClick:()=>e(),children:"Sign in"}),m("button",{class:"whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50  hover:text-slate-900",onClick:()=>r(wI),children:"Demo"})]})]})}),SI=({id:t,listTitle:e,index:n,content:r,description:i,todos:s,color:o,changeContent:a,changeDescription:l,removeCard:c,changeTodos:u,changeColor:d})=>{const[h,f]=ee(!1),{normal:p,editing:g,dialog:v}=mi,[_,b]=ee(mi.normal),w=B(null);return ae(()=>{_===g&&w.current&&(w.current.focus(),w.current.selectionStart=w.current.value.length),f(!1)},[_]),m(ge,{children:[m(ph,{draggableId:t,index:n,isDragDisabled:_===g,children:(y,R)=>m(PI,{style:y.draggableProps.style,snapshot:R,children:D=>m("div",{ref:y.innerRef,...y.draggableProps,...y.dragHandleProps,style:{...D,borderColor:o},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),class:`min-h-10 relative mb-2 flex flex-col
                      break-all rounded-md px-3 py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] 
                      shadow-slate-300 ${R.isDragging?"bg-slate-100 ":"bg-slate-50"} ${o&&"border-t-[12px]"} ${_===g||R.isDragging?"z-10":"z-0"}`,children:[m("div",{class:"relative flex",children:[m(cn,{ref:w,maxLength:120,disabled:_!==g,placeholder:"Enter a title for this card...",children:r}),m("div",{class:`visible absolute left-0 top-0 h-full w-full bg-transparent ${_===g&&"hidden"}`,onClick:()=>b(g)})]}),h&&_===p&&m("div",{class:"absolute right-0 top-0 m-[0.1875rem] rounded bg-slate-200",children:m(yh,{clickHandler:()=>b(v),icon:m(bI,{})})}),m("div",{class:"mt-1 flex items-center gap-3 text-slate-500 empty:mt-0",children:[i&&m(mh,{size:16}),s!=null&&s.length?m("div",{class:"flex items-center gap-1",children:[m(_h,{size:16}),m("p",{children:[s.filter(I=>I.completed).length,"/",s.length]})]}):null]})]})})}),_===g&&m(DI,{close:()=>b(p),changeContent:()=>{var y;return a(((y=w.current)==null?void 0:y.value)||r)}}),_===v&&m(TI,{setActive:y=>b(y),listTitle:e,content:r,description:i,todos:s,color:o,changeContent:a,changeDescription:l,changeTodos:u,changeColor:d,removeCard:c})]})},TI=({setActive:t,listTitle:e,content:n,description:r,todos:i,color:s,changeContent:o,changeDescription:a,changeTodos:l,changeColor:c,removeCard:u})=>{const d=B(null),h=B(null),[f,p]=ee(!1),[g,v]=ee(i??[]),{normal:_}=mi,b=()=>{t(_),!(!d.current||!h.current)&&(o(d.current.value),a(h.current.value),l(g))},w=I=>{v([...g,{content:I,completed:!1}])},y=I=>{const E=[...g];E.splice(I,1),v(E)},R=(I,E)=>{const C=[...g];C[I].completed=E,v(C)},D=()=>{if(!g.length)return"0%";const I=g.filter(C=>C.completed).length,E=g.length;return`${Math.floor(I/E*100)}%`};return Gi(m("div",{class:"max-w-screen fixed left-0 top-0 flex h-dynamic max-h-dynamic w-screen cursor-pointer  content-center justify-center bg-slate-900/75 p-2 lg:py-16",onClick:b,children:m("div",{class:`flex h-fit max-h-full w-full cursor-default flex-col gap-4 overflow-y-auto 
               overflow-x-hidden rounded-xl bg-slate-200 px-6 py-4 lg:max-w-2xl ${s&&"border-t-[3rem]"}`,style:{borderColor:s},onClick:I=>I.stopPropagation(),children:[m("div",{children:[m("div",{class:"flex items-center gap-2 p-2",children:[m(yI,{class:"text-slate-500"}),m("h1",{class:"h-fit w-full px-3 py-1 font-semibold",children:"Title"}),m("div",{class:"-m-2 cursor-pointer rounded bg-slate-300 p-1 text-slate-500  hover:text-slate-900",onClick:()=>b(),children:m(Zn,{})})]}),m("div",{class:"ml-[3.25rem]",children:m(cn,{ref:d,styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 border-slate-300  rounded border-2 font-semibold px-3 py-1 text-slate-950",maxRows:4,maxLength:100,children:n})}),m("div",{class:"mx-[3.25rem] mt-1 text-slate-500",children:["In list",m("strong",{class:"font-semibold",children:[" ",e]})]})]}),m("div",{children:[m("div",{class:"flex items-center gap-2 p-2",children:[m(mh,{class:"text-slate-500"}),m("h1",{class:"h-fit px-3 py-1 font-semibold",children:"Description"})]}),m("div",{class:"ml-[3.25rem]",children:m(cn,{ref:h,placeholder:"Add a more detailed description...",styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2 px-3 py-1 text-slate-950 border-slate-300",minRows:2,maxRows:4,maxLength:100,children:r})})]}),m("div",{children:[m("div",{class:"flex items-center gap-2 p-2 pb-0",children:[m(_h,{class:"text-slate-500"}),m("h1",{class:"h-fit px-3 py-1 font-semibold",children:"Checklist"})]}),m("div",{class:"flex items-center gap-2 px-2 pb-2",children:[m("div",{class:"relative",children:m("div",{class:"absolute -ml-2 -mt-3 w-10 text-center",children:D()})}),m("div",{class:"relative my-2 -mr-2 ml-[2.75rem] h-2 w-full rounded bg-slate-300",children:m("div",{class:"absolute h-2 rounded bg-slate-900 transition-all duration-500",style:{width:D()}})})]}),m("div",{class:"-mr-[3.25rem] flex flex-col px-[3.25rem] pb-4 empty:pb-1",children:g.map((I,E)=>m(kI,{...I,updateTodo:C=>R(E,C),removeTodo:()=>y(E)},E))}),m("div",{class:"mb-2 ml-[3.25rem]",children:f?m(MI,{setActive:I=>p(I),addTodo:w}):m("button",{class:"flex items-center gap-2 rounded-md bg-slate-900 px-2  py-1 text-slate-50 hover:bg-slate-950",onClick:()=>p(!0),children:[m(_a,{size:18})," Add an item"]})})]}),m("div",{class:"mb-4",children:[m("div",{class:"flex items-center gap-2 p-2",children:[m(II,{class:"text-slate-500"}),m("h1",{class:"h-fit px-3 py-1 font-semibold",children:"Color"})]}),m("div",{class:"ml-[3.25rem] flex gap-1",children:[Object.values(Zr).map((I,E)=>m("button",{class:`h-8 w-8 rounded-md border-2 ${I===s?"border-slate-900":"border-transparent"}`,style:{backgroundColor:I},onClick:()=>c(I)},E)),m("button",{class:`flex content-center justify-center rounded-md border-2 border-slate-300 
              bg-slate-300 p-[0.125rem] text-slate-600 hover:border-slate-900 
              hover:text-slate-900 ${!s&&"border-slate-900 text-slate-900"}`,onClick:()=>c(""),children:m(Zn,{})})]})]}),m("button",{class:"mb-1 flex w-full items-center justify-center rounded-md bg-slate-300 p-1  font-semibold text-slate-500 hover:text-slate-900",onClick:()=>u(),children:"Archive this card"})]})}),document.body)},DI=({close:t,changeContent:e})=>m(ge,{children:[Gi(m("div",{class:"max-w-screen fixed left-0 top-0 z-0 flex h-dynamic max-h-dynamic w-screen  cursor-pointer content-center justify-center bg-slate-900/75",onClick:t}),document.body),m("div",{class:"absolute flex gap-2",children:[m("button",{class:"relative z-10 w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",onClick:()=>{e(),t()},children:"Save"}),m("button",{class:"z-10 rounded-md bg-slate-200 px-1 hover:bg-slate-300 ",onClick:t,children:m(Zn,{})})]})]}),xI=({addCard:t})=>{const[e,n]=ee(!1),r=B(null),i=()=>{const s=r.current;!s||!s.value||(t(s.value),s.value="",s.rows=1,s.focus())};return e?m("div",{class:"flex w-full flex-col gap-2 p-2 pt-0",children:[m("div",{class:"flex content-center rounded-md bg-slate-50 px-3 py-2  shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 focus:outline-none",children:m(cn,{ref:r,placeholder:"Enter a title for this card...",maxLength:120})}),m("div",{class:"flex gap-2",children:[m("button",{class:"w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",type:"submit",onClick:()=>i(),children:"Add card"}),m("button",{class:"rounded-md px-1 hover:bg-slate-300",onClick:()=>n(!1),children:m(Zn,{})})]})]}):m("div",{class:"p-2 pt-0",children:m("button",{onClick:()=>n(!0),class:"flex w-full items-center gap-2 rounded-md px-2 py-1 text-left hover:bg-slate-300",children:[m(_a,{size:18}),"Add a card"]})})},RI=({list:t,index:e,changeTitle:n,changeContent:r,changeDescription:i,addCard:s,removeCard:o,changeTodos:a,changeColor:l,removeList:c,placeholder:u})=>m(ph,{draggableId:`${e}`,index:e,children:(d,h)=>m("div",{ref:d.innerRef,...d.draggableProps,class:"mx-4 my-8 h-full rounded-xl shadow-sm shadow-black",children:m("div",{class:"w-72 rounded-xl bg-slate-200",children:[m("div",{...d.dragHandleProps,class:"rounded-t-xl",children:m(AI,{title:t.title,changeTitle:n,removeList:c,snapshot:h})}),m(ma,{droppableId:`${e}`,type:Wn.Card,children:(f,p)=>m("div",{ref:f.innerRef,...f.droppableProps,class:"relative px-2",children:[m(NI,{title:t.title,cards:t.cards,changeContent:r,changeDescription:i,removeCard:o,changeTodos:a,changeColor:l}),f.placeholder,p.isDraggingOver&&m("div",{class:"absolute rounded-md bg-slate-300",style:{top:u.clientY,left:u.clientX,width:u.clientWidth,height:u.offsetHeight}})]})}),m(xI,{addCard:s})]})})}),PI=({snapshot:t,style:e,children:n})=>{const r=B(0),[i,s]=ee(),[o,a]=ee(0),[l,c]=ee(0),u=f=>f/(1+Math.abs(f)),d=()=>{if(!t.isDragging||!e.transform){r.current=requestAnimationFrame(d);return}const f=e.transform,p=parseInt(f.match(/translate\(.{1,}\)/g)[0].match(/-?[0-9]{1,}/g)[0]),g=p-o;let v=l*.9+u(g)*1.4;Math.abs(v)<.01&&(v=0),s(`${f} rotate(${v}deg)`),c(v),a(p)},h=f=>f.isDragging&&!f.dropAnimation?{...e,transform:i}:e;return ae(()=>{r.current=requestAnimationFrame(d)},[i,l,o]),ae(()=>{if(!t.isDragging){cancelAnimationFrame(r.current);return}return r.current=requestAnimationFrame(d),()=>{cancelAnimationFrame(r.current)}}),m(ge,{children:n(h(t))})},AI=({title:t,changeTitle:e,removeList:n,snapshot:r})=>{const i=B(null),[s,o]=ee(!1),[a,l]=ee(t),[c,u]=ee(!1),d=f=>{const p=f.target,g=p.value;g?(e(g),l(g)):p.value=a},h=f=>{if(f.key!=="Enter")return;f.preventDefault(),f.target.blur(),o(!1)};return ae(()=>{!r.isDragging&&!s||u(!1)},[r,s]),m("div",{class:"flex",children:[m("div",{class:"relative flex w-full items-center p-2",children:[m("div",{class:`absolute left-0 top-0 h-full w-full ${s?"hidden":"cursor-pointer"}`,onClick:()=>{var f;o(!0),(f=i.current)==null||f.focus()}}),m(cn,{ref:i,styles:"box-border min-h-9 w-full cursor-pointer resize-none overflow-hidden break-words rounded  border-2 border-slate-200 bg-inherit px-3 py-1 font-semibold focus:cursor-text  focus:border-slate-900 focus:bg-slate-50 focus:outline-none",minRows:1,maxRows:4,maxLength:70,onKeyDown:h,onBlur:d,onBlurCapture:()=>{o(!1)},defaultValue:t})]}),m("div",{class:"m-2 ml-0",children:[m(yh,{icon:m(_I,{}),clickHandler:()=>u(!c)}),c&&!s&&m(ge,{children:[Gi(m("div",{class:"absolute left-0 top-0 h-full w-full",onClick:()=>u(!1)}),document.body),m("div",{class:"absolute z-10 mt-2 grid w-64 divide-y rounded-md  bg-slate-50 shadow-sm shadow-black/40",children:[m("div",{class:"px-4 py-3 text-center",children:"List actions"}),m("div",{class:"mx-2 py-2",children:m("button",{class:"mx-0 flex w-full items-center gap-2 rounded-md px-2 py-1 text-left  hover:bg-slate-300",onClick:()=>{n(),u(!1)},children:[m(bh,{size:16}),"Archive this list"]})})]})]})]})]})},yh=({clickHandler:t,icon:e,disabled:n})=>m(ge,{children:!n&&m("button",{onClick:r=>{r.stopPropagation(),t()},class:"flex content-center items-center justify-center rounded p-2 text-slate-500  hover:bg-slate-300",children:Uu(e,{size:18})})}),NI=({title:t,cards:e,changeContent:n,changeDescription:r,changeTodos:i,changeColor:s,removeCard:o})=>m(ge,{children:e==null?void 0:e.map((a,l)=>m(SI,{id:a.id,index:l,listTitle:t,content:a.content,description:a.description,todos:a.todos,color:a.color,changeContent:c=>n(l,c),changeDescription:c=>r(l,c),changeTodos:c=>i(l,c),changeColor:c=>s(l,c),removeCard:()=>o(l)},a.id))}),OI=({addList:t})=>m("button",{class:"mx-4 my-8 flex items-center gap-2 whitespace-nowrap rounded-md bg-slate-700 p-3 px-2  py-1 text-slate-50 hover:bg-slate-600",onClick:()=>t("New list"),children:[m(_a,{size:18}),"Add another list"]}),cn=Gu(function({children:e,styles:n,minRows:r=1,maxRows:i=5,...s},o){const[a,l]=ee(r),c=B(null),u=()=>{const d=c.current;if(!d)return;const{lineHeight:h}=window.getComputedStyle(d),f=d.rows;d.rows=r;const p=~~(d.scrollHeight/parseFloat(h));p===f&&(d.rows=p),p>=i&&(d.rows=i,d.scrollTop=d.scrollHeight),l(p<i?p:i)};return ae(()=>{u()},[]),m(ge,{children:m("textarea",{class:`height-auto box-border w-full resize-none overflow-hidden bg-inherit leading-6 
             outline-none ${n}`,ref:d=>{c.current=d,typeof o=="function"?o(d):o&&(o.current=d)},rows:a,spellCheck:!1,onChange:u,...s,children:e})})}),kI=({completed:t,content:e,updateTodo:n,removeTodo:r})=>{const[i,s]=ee(!1);return m("div",{class:"relative flex w-full items-center gap-2 rounded p-1 hover:bg-slate-300",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onTouchStart:()=>s(!0),onTouchEnd:()=>s(!1),children:[m("div",{class:"relative m-1 h-5 w-5 shrink-0 self-start",children:m("input",{class:"checked:before:tick flex h-full w-full appearance-none items-center justify-center  rounded border-2 border-slate-300 bg-slate-100 outline-none  checked:border-slate-900 checked:bg-slate-900",type:"checkbox",checked:t,onChange:a=>{const l=a.target;n(l.checked)},children:m(mI,{})})}),m("span",{class:`${t&&"line-through"} max-w-full break-all`,children:e}),i&&m("div",{class:"absolute right-[0.3125rem] top-[0.3125rem]",onClick:()=>r(),children:m("button",{class:"rounded p-1 text-slate-500 hover:text-slate-900",children:m(bh,{size:18})})})]})},MI=({setActive:t,addTodo:e})=>{const n=B(null),r=()=>{var s;const i=(s=n.current)==null?void 0:s.value;i&&(e(i),n.current.value="",n.current.rows=1,n.current.focus())};return ae(()=>{var i;(i=n.current)==null||i.focus()},[]),m("div",{class:"flex flex-col gap-2",children:[m(cn,{ref:n,styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2 px-3 py-1 text-slate-950 border-slate-300",placeholder:"Enter a description for this item...",minRows:1,maxRows:2,maxLength:30}),m("div",{class:"flex gap-2",children:[m("button",{class:"w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",type:"submit",onClick:()=>r(),children:"Add item"}),m("button",{class:"rounded-md px-1 hover:bg-slate-300",onClick:()=>t(!1),children:m(Zn,{})})]})]})};/**
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
 */const Ih={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw In(e)},In=function(t){return new Error("Firebase Database ("+Ih.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const wh=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},LI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),r.push(n[u],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new FI;const h=s<<2|a>>4;if(r.push(h),c!==64){const f=a<<4&240|c>>2;if(r.push(f),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ch=function(t){const e=wh(t);return ba.encodeByteArray(e,!0)},_i=function(t){return Ch(t).replace(/\./g,"")},bi=function(t){try{return ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BI(t){return Eh(void 0,t)}function Eh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!UI(n)||(t[n]=Eh(t[n],e[n]));return t}function UI(t){return t!=="__proto__"}/**
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
 */function WI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $I=()=>WI().__FIREBASE_DEFAULTS__,HI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bi(t[1]);return e&&JSON.parse(e)},ya=()=>{try{return $I()||HI()||GI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sh=t=>{var e,n;return(n=(e=ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VI=t=>{const e=Sh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Th=()=>{var t;return(t=ya())===null||t===void 0?void 0:t.config},Dh=t=>{var e;return(e=ya())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function qI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_i(JSON.stringify(n)),_i(JSON.stringify(o)),a].join(".")}/**
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
 */function ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ia(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ve())}function zI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jI(){const t=ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rh(){return Ih.NODE_ADMIN===!0}function KI(){try{return typeof indexedDB=="object"}catch{return!1}}function YI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const JI="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JI,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,a,r)}}function QI(t,e){return t.replace(XI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XI=/\{\$([^}]+)}/g;/**
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
 */function er(t){return JSON.parse(t)}function te(t){return JSON.stringify(t)}/**
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
 */const Ph=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=er(bi(s[0])||""),n=er(bi(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},ZI=function(t){const e=Ph(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ew=function(t){const e=Ph(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function it(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function un(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _o(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ii(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ic(s)&&Ic(o)){if(!Ii(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ic(t){return t!==null&&typeof t=="object"}/**
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
 */function wn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class tw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function nw(t,e){const n=new rw(t,e);return n.subscribe.bind(n)}class rw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vs),i.error===void 0&&(i.error=Vs),i.complete===void 0&&(i.complete=Vs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vs(){}function wa(t,e){return`${t} failed: ${e} argument `}/**
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
 */const sw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},us=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Ut{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pt="[DEFAULT]";/**
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
 */class ow{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lw(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aw(t){return t===Pt?void 0:t}function lw(t){return t.instantiationMode==="EAGER"}/**
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
 */class cw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ow(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const uw={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},dw=V.INFO,hw={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},fw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=dw,this._logHandler=fw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const pw=(t,e)=>e.some(n=>t instanceof n);let wc,Cc;function gw(){return wc||(wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return Cc||(Cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ah=new WeakMap,bo=new WeakMap,Nh=new WeakMap,qs=new WeakMap,Ea=new WeakMap;function mw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ah.set(n,t)}).catch(()=>{}),Ea.set(e,t),e}function _w(t){if(bo.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bo.set(t,e)}let yo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bw(t){yo=t(yo)}function yw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zs(this),e,...n);return Nh.set(r,e.sort?e.sort():[e]),gt(r)}:vw().includes(t)?function(...e){return t.apply(zs(this),e),gt(Ah.get(this))}:function(...e){return gt(t.apply(zs(this),e))}}function Iw(t){return typeof t=="function"?yw(t):(t instanceof IDBTransaction&&_w(t),pw(t,gw())?new Proxy(t,yo):t)}function gt(t){if(t instanceof IDBRequest)return mw(t);if(qs.has(t))return qs.get(t);const e=Iw(t);return e!==t&&(qs.set(t,e),Ea.set(e,t)),e}const zs=t=>Ea.get(t);function ww(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(gt(o.result),l.oldVersion,l.newVersion,gt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Cw=["get","getKey","getAll","getAllKeys","count"],Ew=["put","add","delete","clear"],js=new Map;function Ec(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(js.get(e))return js.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ew.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Cw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return js.set(e,s),s}bw(t=>({...t,get:(e,n,r)=>Ec(e,n)||t.get(e,n,r),has:(e,n)=>!!Ec(e,n)||t.has(e,n)}));/**
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
 */class Sw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Io="@firebase/app",Sc="0.9.13";/**
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
 */const Wt=new Ca("@firebase/app"),Dw="@firebase/app-compat",xw="@firebase/analytics-compat",Rw="@firebase/analytics",Pw="@firebase/app-check-compat",Aw="@firebase/app-check",Nw="@firebase/auth",Ow="@firebase/auth-compat",kw="@firebase/database",Mw="@firebase/database-compat",Lw="@firebase/functions",Fw="@firebase/functions-compat",Bw="@firebase/installations",Uw="@firebase/installations-compat",Ww="@firebase/messaging",$w="@firebase/messaging-compat",Hw="@firebase/performance",Gw="@firebase/performance-compat",Vw="@firebase/remote-config",qw="@firebase/remote-config-compat",zw="@firebase/storage",jw="@firebase/storage-compat",Kw="@firebase/firestore",Yw="@firebase/firestore-compat",Jw="firebase",Qw="9.23.0";/**
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
 */const wo="[DEFAULT]",Xw={[Io]:"fire-core",[Dw]:"fire-core-compat",[Rw]:"fire-analytics",[xw]:"fire-analytics-compat",[Aw]:"fire-app-check",[Pw]:"fire-app-check-compat",[Nw]:"fire-auth",[Ow]:"fire-auth-compat",[kw]:"fire-rtdb",[Mw]:"fire-rtdb-compat",[Lw]:"fire-fn",[Fw]:"fire-fn-compat",[Bw]:"fire-iid",[Uw]:"fire-iid-compat",[Ww]:"fire-fcm",[$w]:"fire-fcm-compat",[Hw]:"fire-perf",[Gw]:"fire-perf-compat",[Vw]:"fire-rc",[qw]:"fire-rc-compat",[zw]:"fire-gcs",[jw]:"fire-gcs-compat",[Kw]:"fire-fst",[Yw]:"fire-fst-compat","fire-js":"fire-js",[Jw]:"fire-js-all"};/**
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
 */const wi=new Map,Co=new Map;function Zw(t,e){try{t.container.addComponent(e)}catch(n){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dn(t){const e=t.name;if(Co.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;Co.set(e,t);for(const n of wi.values())Zw(n,t);return!0}function Sa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const eC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vt=new Er("app","Firebase",eC);/**
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
 */class tC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Cn=Qw;function Oh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vt.create("bad-app-name",{appName:String(i)});if(n||(n=Th()),!n)throw vt.create("no-options");const s=wi.get(i);if(s){if(Ii(n,s.options)&&Ii(r,s.config))return s;throw vt.create("duplicate-app",{appName:i})}const o=new cw(i);for(const l of Co.values())o.addComponent(l);const a=new tC(n,r,o);return wi.set(i,a),a}function kh(t=wo){const e=wi.get(t);if(!e&&t===wo&&Th())return Oh();if(!e)throw vt.create("no-app",{appName:t});return e}function mt(t,e,n){var r;let i=(r=Xw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}dn(new Ut(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nC="firebase-heartbeat-database",rC=1,tr="firebase-heartbeat-store";let Ks=null;function Mh(){return Ks||(Ks=ww(nC,rC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tr)}}}).catch(t=>{throw vt.create("idb-open",{originalErrorMessage:t.message})})),Ks}async function iC(t){try{return await(await Mh()).transaction(tr).objectStore(tr).get(Lh(t))}catch(e){if(e instanceof Tt)Wt.warn(e.message);else{const n=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(n.message)}}}async function Tc(t,e){try{const r=(await Mh()).transaction(tr,"readwrite");await r.objectStore(tr).put(e,Lh(t)),await r.done}catch(n){if(n instanceof Tt)Wt.warn(n.message);else{const r=vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(r.message)}}}function Lh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sC=1024,oC=30*24*60*60*1e3;class aC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=oC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dc(),{heartbeatsToSend:n,unsentEntries:r}=lC(this._heartbeatsCache.heartbeats),i=_i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dc(){return new Date().toISOString().substring(0,10)}function lC(t,e=sC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KI()?YI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xc(t){return _i(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uC(t){dn(new Ut("platform-logger",e=>new Sw(e),"PRIVATE")),dn(new Ut("heartbeat",e=>new aC(e),"PRIVATE")),mt(Io,Sc,t),mt(Io,Sc,"esm2017"),mt("fire-js","")}uC("");const Rc="@firebase/database",Pc="0.14.4";/**
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
 */let Fh="";function dC(t){Fh=t}/**
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
 */class hC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:er(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class fC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return it(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Bh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hC(e)}}catch{}return new fC},Ot=Bh("localStorage"),Eo=Bh("sessionStorage");/**
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
 */const Xt=new Ca("@firebase/database"),pC=function(){let t=1;return function(){return t++}}(),Uh=function(t){const e=sw(t),n=new tw;n.update(e);const r=n.digest();return ba.encodeByteArray(r)},Sr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Sr.apply(null,r):typeof r=="object"?e+=te(r):e+=r,e+=" "}return e};let Lt=null,Ac=!0;const gC=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xt.logLevel=V.VERBOSE,Lt=Xt.log.bind(Xt),e&&Eo.set("logging_enabled",!0)):typeof t=="function"?Lt=t:(Lt=null,Eo.remove("logging_enabled"))},pe=function(...t){if(Ac===!0&&(Ac=!1,Lt===null&&Eo.get("logging_enabled")===!0&&gC(!0)),Lt){const e=Sr.apply(null,t);Lt(e)}},Tr=function(t){return function(...e){pe(t,...e)}},So=function(...t){const e="FIREBASE INTERNAL ERROR: "+Sr(...t);Xt.error(e)},nt=function(...t){const e=`FIREBASE FATAL ERROR: ${Sr(...t)}`;throw Xt.error(e),new Error(e)},we=function(...t){const e="FIREBASE WARNING: "+Sr(...t);Xt.warn(e)},vC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&we("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},mC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hn="[MIN_NAME]",$t="[MAX_NAME]",En=function(t,e){if(t===e)return 0;if(t===hn||e===$t)return-1;if(e===hn||t===$t)return 1;{const n=Nc(t),r=Nc(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_C=function(t,e){return t===e?0:t<e?-1:1},Nn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+te(e))},Ta=function(t){if(typeof t!="object"||t===null)return te(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=te(e[r]),n+=":",n+=Ta(t[e[r]]);return n+="}",n},$h=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hh=function(t){T(!Wh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},bC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const wC=new RegExp("^-?(0*)\\d{1,10}$"),CC=-2147483648,EC=2147483647,Nc=function(t){if(wC.test(t)){const e=Number(t);if(e>=CC&&e<=EC)return e}return null},Sn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw we("Exception was thrown by user callback.",n),e},Math.floor(0))}},SC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$n=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class TC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){we(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',we(e)}}class Zt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zt.OWNER="owner";/**
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
 */const Da="5",Gh="v",Vh="s",qh="r",zh="f",jh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Kh="ls",Yh="p",To="ac",Jh="websocket",Qh="long_polling";/**
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
 */class Xh{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ot.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ot.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Zh(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===Jh)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qh)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xC(t)&&(n.ns=t.namespace);const i=[];return Ce(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class RC{constructor(){this.counters_={}}incrementCounter(e,n=1){it(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return BI(this.counters_)}}/**
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
 */const Ys={},Js={};function xa(t){const e=t.toString();return Ys[e]||(Ys[e]=new RC),Ys[e]}function PC(t,e){const n=t.toString();return Js[n]||(Js[n]=e()),Js[n]}/**
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
 */class AC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Sn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Oc="start",NC="close",OC="pLPCommand",kC="pRTLPCB",ef="id",tf="pw",nf="ser",MC="cb",LC="seg",FC="ts",BC="d",UC="dframe",rf=1870,sf=30,WC=rf-sf,$C=25e3,HC=3e4;class Qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tr(e),this.stats_=xa(n),this.urlFn=l=>(this.appCheckToken&&(l[To]=this.appCheckToken),Zh(n,Qh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HC)),mC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ra((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Oc)this.id=a,this.password=l;else if(o===NC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Oc]="t",r[nf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[MC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Gh]=Da,this.transportSessionId&&(r[Vh]=this.transportSessionId),this.lastSessionId&&(r[Kh]=this.lastSessionId),this.applicationId&&(r[Yh]=this.applicationId),this.appCheckToken&&(r[To]=this.appCheckToken),typeof location<"u"&&location.hostname&&jh.test(location.hostname)&&(r[qh]=zh);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qt.forceAllow_=!0}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){return Qt.forceAllow_?!0:!Qt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bC()&&!yC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ch(n),i=$h(r,WC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[UC]="t",r[ef]=e,r[tf]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ra{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pC(),window[OC+this.uniqueCallbackIdentifier]=e,window[kC+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ra.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pe("frame writing exception"),a.stack&&pe(a.stack),pe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ef]=this.myID,e[tf]=this.myPW,e[nf]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sf+r.length<=rf;){const o=this.pendingSegs.shift();r=r+"&"+LC+i+"="+o.seg+"&"+FC+i+"="+o.ts+"&"+BC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor($C)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const GC=16384,VC=45e3;let Ci=null;typeof MozWebSocket<"u"?Ci=MozWebSocket:typeof WebSocket<"u"&&(Ci=WebSocket);class Le{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tr(this.connId),this.stats_=xa(n),this.connURL=Le.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Gh]=Da,typeof location<"u"&&location.hostname&&jh.test(location.hostname)&&(o[qh]=zh),n&&(o[Vh]=n),r&&(o[Kh]=r),i&&(o[To]=i),s&&(o[Yh]=s),Zh(e,Jh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ot.set("previous_websocket_failure",!0);try{let r;Rh(),this.mySock=new Ci(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ci!==null&&!Le.forceDisallow_}static previouslyFailed(){return Ot.isInMemoryStorage||Ot.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ot.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=er(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$h(n,GC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(VC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
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
 */class nr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qt,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Le&&Le.isAvailable();let r=n&&!Le.previouslyFailed();if(e.webSocketOnly&&(n||we("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Le];else{const i=this.transports_=[];for(const s of nr.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);nr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}nr.globalTransportInitialized_=!1;/**
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
 */const qC=6e4,zC=5e3,jC=10*1024,KC=100*1024,Qs="t",kc="d",YC="s",Mc="r",JC="e",Lc="o",Fc="a",Bc="n",Uc="p",QC="h";class XC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tr("c:"+this.id+":"),this.transportManager_=new nr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$n(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>KC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Qs in e){const n=e[Qs];n===Fc?this.upgradeIfSecondaryHealthy_():n===Mc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Lc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Nn("t",e),r=Nn("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Fc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Nn("t",e),r=Nn("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Nn(Qs,e);if(kc in e){const r=e[kc];if(n===QC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YC?this.onConnectionShutdown_(r):n===Mc?this.onReset_(r):n===JC?So("Server Error: "+r):n===Lc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):So("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Da!==r&&we("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$n(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$n(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ot.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class of{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class af{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ei extends af{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ia()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ei}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Wc=32,$c=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new q("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function wt(t){return t.pieces_.length-t.pieceNum_}function j(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function lf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ZC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new q(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function be(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return be(j(t),j(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function df(t,e){if(wt(t)!==wt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Be(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(wt(t)>wt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class eE{constructor(e,n){this.errorPrefix_=n,this.parts_=cf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=us(this.parts_[r]);hf(this)}}function tE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=us(e),hf(t)}function nE(t){const e=t.parts_.pop();t.byteLength_-=us(e),t.parts_.length>0&&(t.byteLength_-=1)}function hf(t){if(t.byteLength_>$c)throw new Error(t.errorPrefix_+"has a key path longer than "+$c+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wc+") or object contains a cycle "+At(t))}function At(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Pa extends af{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Pa}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const On=1e3,rE=60*5*1e3,Hc=30*1e3,iE=1.3,sE=3e4,oE="server_kill",Gc=3;class tt extends of{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=tt.nextPersistentConnectionId_++,this.log_=Tr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=On,this.maxReconnectDelay_=rE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Rh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(te(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new cs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;tt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&it(e,"w")){const r=un(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();we(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ew(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ZI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+te(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):So("Unrecognized action received from server: "+te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sE&&(this.reconnectDelay_=On),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pe("getToken() completed but was canceled"):(pe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new XC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{we(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(oE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&we(d),l())}}}interrupt(e){pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_o(this.interruptReasons_)&&(this.reconnectDelay_=On,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Ta(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gc&&(this.reconnectDelay_=Hc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fh.replace(/\./g,"-")]=1,Ia()?e["framework.cordova"]=1:xh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ei.getInstance().currentlyOnline();return _o(this.interruptReasons_)&&e}}tt.nextPersistentConnectionId_=0;tt.nextConnectionId_=0;/**
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
 */class L{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new L(e,n)}}/**
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
 */class ds{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new L(hn,e),i=new L(hn,n);return this.compare(r,i)!==0}minPost(){return L.MIN}}/**
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
 */let zr;class ff extends ds{static get __EMPTY_NODE(){return zr}static set __EMPTY_NODE(e){zr=e}compare(e,n){return En(e.name,n.name)}isDefinedOn(e){throw In("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return L.MIN}maxPost(){return new L($t,zr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new L(e,zr)}toString(){return".key"}}const en=new ff;/**
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
 */class jr{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ie.RED,this.left=i??Ie.EMPTY_NODE,this.right=s??Ie.EMPTY_NODE}copy(e,n,r,i,s){return new ie(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ie.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class aE{copy(e,n,r,i,s){return this}insert(e,n,r){return new ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ie{constructor(e,n=Ie.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ie(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new Ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new jr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new jr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new jr(this.root_,null,this.comparator_,!0,e)}}Ie.EMPTY_NODE=new aE;/**
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
 */function lE(t,e){return En(t.name,e.name)}function Aa(t,e){return En(t,e)}/**
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
 */let Do;function cE(t){Do=t}const pf=function(t){return typeof t=="number"?"number:"+Hh(t):"string:"+t},gf=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&it(e,".sv"),"Priority must be a string or number.")}else T(t===Do||t.isEmpty(),"priority of unexpected type.");T(t===Do||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vc;class re{constructor(e,n=re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gf(this.priorityNode_)}static set __childrenNodeConstructor(e){Vc=e}static get __childrenNodeConstructor(){return Vc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:U(e)===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||wt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,re.__childrenNodeConstructor.EMPTY_NODE.updateChild(j(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hh(this.value_):e+=this.value_,this.lazyHash_=Uh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof re.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=re.VALUE_TYPE_ORDER.indexOf(n),s=re.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let vf,mf;function uE(t){vf=t}function dE(t){mf=t}class hE extends ds{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?En(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return L.MIN}maxPost(){return new L($t,new re("[PRIORITY-POST]",mf))}makePost(e,n){const r=vf(e);return new L(n,new re("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new hE;/**
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
 */const fE=Math.log(2);class pE{constructor(e){const n=s=>parseInt(Math.log(s)/fE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Si=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new ie(h,d.node,ie.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),g=i(f+1,c);return d=t[f],h=n?n(d):d,new ie(h,d.node,ie.BLACK,p,g)}},s=function(l){let c=null,u=null,d=t.length;const h=function(p,g){const v=d-p,_=d;d-=p;const b=i(v+1,_),w=t[v],y=n?n(w):w;f(new ie(y,w.node,g,null,b))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));g?h(v,ie.BLACK):(h(v,ie.BLACK),h(v,ie.RED))}return u},o=new pE(t.length),a=s(o);return new Ie(r||e,a)};/**
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
 */let Xs;const Jt={};class Xe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Jt&&Z,"ChildrenNode.ts has not been loaded"),Xs=Xs||new Xe({".priority":Jt},{".priority":Z}),Xs}get(e){const n=un(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ie?n:null}hasIndex(e){return it(this.indexSet_,e.toString())}addIndex(e,n){T(e!==en,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(L.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Si(r,e.getCompare()):a=Jt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Xe(u,c)}addToIndexes(e,n){const r=yi(this.indexes_,(i,s)=>{const o=un(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===Jt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(L.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Si(a,o.getCompare())}else return Jt;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new L(e.name,a))),l.insert(e,e.node)}});return new Xe(r,this.indexSet_)}removeFromIndexes(e,n){const r=yi(this.indexes_,i=>{if(i===Jt)return i;{const s=n.get(e.name);return s?i.remove(new L(e.name,s)):i}});return new Xe(r,this.indexSet_)}}/**
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
 */let kn;class k{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&gf(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return kn||(kn=new k(new Ie(Aa),null,Xe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||kn}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?kn:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(j(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new L(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?kn:this.priorityNode_;return new k(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{T(U(e)!==".priority"||wt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(j(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,a)=>{n[o]=a.val(e),r++,s&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pf(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Uh(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new L(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new L(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new L(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,L.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dr?-1:0}withIndex(e){if(e===en||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===en||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===en?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gE extends k{constructor(){super(new Ie(Aa),k.EMPTY_NODE,Xe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const Dr=new gE;Object.defineProperties(L,{MIN:{value:new L(hn,k.EMPTY_NODE)},MAX:{value:new L($t,Dr)}});ff.__EMPTY_NODE=k.EMPTY_NODE;re.__childrenNodeConstructor=k;cE(Dr);dE(Dr);/**
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
 */const vE=!0;function se(t,e=null){if(t===null)return k.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new re(n,se(e))}if(!(t instanceof Array)&&vE){const n=[];let r=!1;if(Ce(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=se(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new L(o,l)))}}),n.length===0)return k.EMPTY_NODE;const s=Si(n,lE,o=>o.name,Aa);if(r){const o=Si(n,Z.getCompare());return new k(s,se(e),new Xe({".priority":o},{".priority":Z}))}else return new k(s,se(e),Xe.Default)}else{let n=k.EMPTY_NODE;return Ce(t,(r,i)=>{if(it(t,r)&&r.substring(0,1)!=="."){const s=se(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(se(e))}}uE(se);/**
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
 */class mE extends ds{constructor(e){super(),this.indexPath_=e,T(!F(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?En(e.name,n.name):s}makePost(e,n){const r=se(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,r);return new L(n,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,Dr);return new L($t,e)}toString(){return cf(this.indexPath_,0).join("/")}}/**
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
 */class _E extends ds{compare(e,n){const r=e.node.compareTo(n.node);return r===0?En(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return L.MIN}maxPost(){return L.MAX}makePost(e,n){const r=se(e);return new L(n,r)}toString(){return".value"}}const bE=new _E;/**
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
 */function _f(t){return{type:"value",snapshotNode:t}}function fn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ir(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function yE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Na{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(rr(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(fn(n,r)):o.trackChildChange(ir(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(rr(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ir(i,s,o))}else r.trackChildChange(fn(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class sr{constructor(e){this.indexedFilter_=new Na(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sr.getStartPost_(e),this.endPost_=sr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new L(n,r))||(r=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=k.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,a)=>{s.matches(new L(o,a))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class IE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new sr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new L(n,r))||(r=k.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new L(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(ir(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(rr(n,d));const g=a.updateImmediateChild(n,k.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(fn(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(rr(c.name,c.node)),s.trackChildChange(fn(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,k.EMPTY_NODE)):e}}/**
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
 */class Oa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$t}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new Oa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wE(t){return t.loadsAllData()?new Na(t.getIndex()):t.hasLimit()?new IE(t):new sr(t)}function qc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===bE?n="$value":t.index_===en?n="$key":(T(t.index_ instanceof mE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=te(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=te(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+te(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=te(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function zc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
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
 */class Ti extends of{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Tr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ti.getListenId_(e,r),a={};this.listens_[o]=a;const l=qc(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),un(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Ti.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qc(e._queryParams),r=e._path.toString(),i=new cs;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=er(a.responseText)}catch{we("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&we("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class CE{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Di(){return{value:null,children:new Map}}function bf(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,Di());const i=t.children.get(r);e=j(e),bf(i,e,n)}}function xo(t,e,n){t.value!==null?n(e,t.value):EE(t,(r,i)=>{const s=new q(e.toString()+"/"+r);xo(i,s,n)})}function EE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class SE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ce(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const jc=10*1e3,TE=30*1e3,DE=5*60*1e3;class xE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new SE(e);const r=jc+(TE-jc)*Math.random();$n(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ce(e,(i,s)=>{s>0&&it(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$n(this.reportStats_.bind(this),Math.floor(Math.random()*2*DE))}}/**
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
 */var Ue;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ue||(Ue={}));function yf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ka(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ma(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xi{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ue.ACK_USER_WRITE,this.source=yf()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new xi($(),n,this.revert)}}else return T(U(this.path)===e,"operationForChild called for unrelated child."),new xi(j(this.path),this.affectedTree,this.revert)}}/**
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
 */class or{constructor(e,n){this.source=e,this.path=n,this.type=Ue.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new or(this.source,$()):new or(this.source,j(this.path))}}/**
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
 */class Ht{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ue.OVERWRITE}operationForChild(e){return F(this.path)?new Ht(this.source,$(),this.snap.getImmediateChild(e)):new Ht(this.source,j(this.path),this.snap)}}/**
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
 */class ar{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ue.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new Ht(this.source,$(),n.value):new ar(this.source,$(),n)}else return T(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ar(this.source,j(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ct{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class RE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function PE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(yE(o.childName,o.snapshotNode))}),Mn(t,i,"child_removed",e,r,n),Mn(t,i,"child_added",e,r,n),Mn(t,i,"child_moved",s,r,n),Mn(t,i,"child_changed",e,r,n),Mn(t,i,"value",e,r,n),i}function Mn(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>NE(t,a,l)),o.forEach(a=>{const l=AE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function AE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function NE(t,e,n){if(e.childName==null||n.childName==null)throw In("Should only compare child_ events.");const r=new L(e.childName,e.snapshotNode),i=new L(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function hs(t,e){return{eventCache:t,serverCache:e}}function Hn(t,e,n,r){return hs(new Ct(e,n,r),t.serverCache)}function If(t,e,n,r){return hs(t.eventCache,new Ct(e,n,r))}function Ri(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Zs;const OE=()=>(Zs||(Zs=new Ie(_C)),Zs);class J{constructor(e,n=OE()){this.value=e,this.children=n}static fromObject(e){let n=new J(null);return Ce(e,(r,i)=>{n=n.set(new q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(F(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(j(e),n);return s!=null?{path:ne(new q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(j(e)):new J(null)}}set(e,n){if(F(e))return new J(n,this.children);{const r=U(e),s=(this.children.get(r)||new J(null)).set(j(e),n),o=this.children.insert(r,s);return new J(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new J(null):new J(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(j(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new J(null):new J(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(j(e)):null}}setTree(e,n){if(F(e))return n;{const r=U(e),s=(this.children.get(r)||new J(null)).setTree(j(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new J(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(j(e),ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(j(e),ne(n,i),r):new J(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class We{constructor(e){this.writeTree_=e}static empty(){return new We(new J(null))}}function Gn(t,e,n){if(F(e))return new We(new J(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=be(i,e);return s=s.updateChild(o,n),new We(t.writeTree_.set(i,s))}else{const i=new J(n),s=t.writeTree_.setTree(e,i);return new We(s)}}}function Kc(t,e,n){let r=t;return Ce(n,(i,s)=>{r=Gn(r,ne(e,i),s)}),r}function Yc(t,e){if(F(e))return We.empty();{const n=t.writeTree_.setTree(e,new J(null));return new We(n)}}function Ro(t,e){return qt(t,e)!=null}function qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(be(n.path,e)):null}function Jc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new L(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new L(r,i.value))}),e}function _t(t,e){if(F(e))return t;{const n=qt(t,e);return n!=null?new We(new J(n)):new We(t.writeTree_.subtree(e))}}function Po(t){return t.writeTree_.isEmpty()}function pn(t,e){return wf($(),t.writeTree_,e)}function wf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=wf(ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ne(t,".priority"),r)),n}}/**
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
 */function fs(t,e){return Tf(e,t)}function kE(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Gn(t.visibleWrites,e,n)),t.lastWriteId=r}function ME(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function LE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&FE(a,r.path)?i=!1:Be(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return BE(t),!0;if(r.snap)t.visibleWrites=Yc(t.visibleWrites,r.path);else{const a=r.children;Ce(a,l=>{t.visibleWrites=Yc(t.visibleWrites,ne(r.path,l))})}return!0}else return!1}function FE(t,e){if(t.snap)return Be(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Be(ne(t.path,n),e))return!0;return!1}function BE(t){t.visibleWrites=Cf(t.allWrites,UE,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function UE(t){return t.visible}function Cf(t,e,n){let r=We.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Be(n,o)?(a=be(n,o),r=Gn(r,a,s.snap)):Be(o,n)&&(a=be(o,n),r=Gn(r,$(),s.snap.getChild(a)));else if(s.children){if(Be(n,o))a=be(n,o),r=Kc(r,a,s.children);else if(Be(o,n))if(a=be(o,n),F(a))r=Kc(r,$(),s.children);else{const l=un(s.children,U(a));if(l){const c=l.getChild(j(a));r=Gn(r,$(),c)}}}else throw In("WriteRecord should have .snap or .children")}}return r}function Ef(t,e,n,r,i){if(!r&&!i){const s=qt(t.visibleWrites,e);if(s!=null)return s;{const o=_t(t.visibleWrites,e);if(Po(o))return n;if(n==null&&!Ro(o,$()))return null;{const a=n||k.EMPTY_NODE;return pn(o,a)}}}else{const s=_t(t.visibleWrites,e);if(!i&&Po(s))return n;if(!i&&n==null&&!Ro(s,$()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Be(c.path,e)||Be(e,c.path))},a=Cf(t.allWrites,o,e),l=n||k.EMPTY_NODE;return pn(a,l)}}}function WE(t,e,n){let r=k.EMPTY_NODE;const i=qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_t(t.visibleWrites,e);return n.forEachChild(Z,(o,a)=>{const l=pn(_t(s,new q(o)),a);r=r.updateImmediateChild(o,l)}),Jc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_t(t.visibleWrites,e);return Jc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $E(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ne(e,n);if(Ro(t.visibleWrites,s))return null;{const o=_t(t.visibleWrites,s);return Po(o)?i.getChild(n):pn(o,i.getChild(n))}}function HE(t,e,n,r){const i=ne(e,n),s=qt(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_t(t.visibleWrites,i);return pn(o,r.getNode().getImmediateChild(n))}else return null}function GE(t,e){return qt(t.visibleWrites,e)}function VE(t,e,n,r,i,s,o){let a;const l=_t(t.visibleWrites,e),c=qt(l,$());if(c!=null)a=c;else if(n!=null)a=pn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&u.length<i;)d(f,r)!==0&&u.push(f),f=h.getNext();return u}else return[]}function qE(){return{visibleWrites:We.empty(),allWrites:[],lastWriteId:-1}}function Pi(t,e,n,r){return Ef(t.writeTree,t.treePath,e,n,r)}function La(t,e){return WE(t.writeTree,t.treePath,e)}function Qc(t,e,n,r){return $E(t.writeTree,t.treePath,e,n,r)}function Ai(t,e){return GE(t.writeTree,ne(t.treePath,e))}function zE(t,e,n,r,i,s){return VE(t.writeTree,t.treePath,e,n,r,i,s)}function Fa(t,e,n){return HE(t.writeTree,t.treePath,e,n)}function Sf(t,e){return Tf(ne(t.treePath,e),t.writeTree)}function Tf(t,e){return{treePath:t,writeTree:e}}/**
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
 */class jE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ir(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,rr(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,fn(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ir(r,e.snapshotNode,i.oldSnap));else throw In("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class KE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Df=new KE;class Ba{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ct(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fa(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gt(this.viewCache_),s=zE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function YE(t){return{filter:t}}function JE(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QE(t,e,n,r,i){const s=new jE;let o,a;if(n.type===Ue.OVERWRITE){const c=n;c.source.fromUser?o=Ao(t,e,c.path,c.snap,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=Ni(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ue.MERGE){const c=n;c.source.fromUser?o=ZE(t,e,c.path,c.children,r,i,s):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=No(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ue.ACK_USER_WRITE){const c=n;c.revert?o=n0(t,e,c.path,r,i,s):o=e0(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ue.LISTEN_COMPLETE)o=t0(t,e,n.path,r,s);else throw In("Unknown operation type: "+n.type);const l=s.getChanges();return XE(e,o,l),{viewCache:o,changes:l}}function XE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ri(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(_f(Ri(e)))}}function xf(t,e,n,r,i,s){const o=e.eventCache;if(Ai(r,n)!=null)return e;{let a,l;if(F(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gt(e),u=c instanceof k?c:k.EMPTY_NODE,d=La(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Pi(r,Gt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=U(n);if(c===".priority"){T(wt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Qc(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=j(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Qc(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Fa(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Hn(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function Ni(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),f,null)}else{const f=U(n);if(!l.isCompleteForPath(n)&&wt(n)>1)return e;const p=j(n),v=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,Df,null)}const d=If(e,c,l.isFullyInitialized()||F(n),u.filtersNodes()),h=new Ba(i,d,s);return xf(t,d,n,i,h,a)}function Ao(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Ba(i,e,s);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Hn(e,c,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Hn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=j(n),f=a.getNode().getImmediateChild(d);let p;if(F(h))p=r;else{const g=u.getCompleteChild(d);g!=null?lf(h)===".priority"&&g.getChild(uf(h)).isEmpty()?p=g:p=g.updateChild(h,r):p=k.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=Hn(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Xc(t,e){return t.eventCache.isCompleteForChild(e)}function ZE(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ne(n,l);Xc(e,U(u))&&(a=Ao(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ne(n,l);Xc(e,U(u))||(a=Ao(t,a,u,c,i,s,o))}),a}function Zc(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function No(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=r:c=new J(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Zc(t,f,h);l=Ni(t,l,new q(d),p,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=Zc(t,p,h);l=Ni(t,l,new q(d),g,i,s,o,a)}}),l}function e0(t,e,n,r,i,s,o){if(Ai(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ni(t,e,n,l.getNode().getChild(n),i,s,a,o);if(F(n)){let c=new J(null);return l.getNode().forEachChild(en,(u,d)=>{c=c.set(new q(u),d)}),No(t,e,n,c,i,s,a,o)}else return e}else{let c=new J(null);return r.foreach((u,d)=>{const h=ne(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),No(t,e,n,c,i,s,a,o)}}function t0(t,e,n,r,i){const s=e.serverCache,o=If(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return xf(t,o,n,r,Df,i)}function n0(t,e,n,r,i,s){let o;if(Ai(r,n)!=null)return e;{const a=new Ba(r,e,i),l=e.eventCache.getNode();let c;if(F(n)||U(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Pi(r,Gt(e));else{const d=e.serverCache.getNode();T(d instanceof k,"serverChildren would be complete if leaf node"),u=La(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=U(n);let d=Fa(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,j(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,k.EMPTY_NODE,j(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pi(r,Gt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ai(r,$())!=null,Hn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class r0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Na(r.getIndex()),s=wE(r);this.processor_=YE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(k.EMPTY_NODE,a.getNode(),null),u=new Ct(l,o.isFullyInitialized(),i.filtersNodes()),d=new Ct(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=hs(d,u),this.eventGenerator_=new RE(this.query_)}get query(){return this.query_}}function i0(t){return t.viewCache_.serverCache.getNode()}function s0(t){return Ri(t.viewCache_)}function o0(t,e){const n=Gt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function eu(t){return t.eventRegistrations_.length===0}function a0(t,e){t.eventRegistrations_.push(e)}function tu(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function nu(t,e,n,r){e.type===Ue.MERGE&&e.source.queryId!==null&&(T(Gt(t.viewCache_),"We should always have a full cache before handling merges"),T(Ri(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=QE(t.processor_,i,e,n,r);return JE(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Rf(t,s.changes,s.viewCache.eventCache.getNode(),null)}function l0(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(fn(s,o))}),n.isFullyInitialized()&&r.push(_f(n.getNode())),Rf(t,r,n.getNode(),e)}function Rf(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return PE(t.eventGenerator_,e,n,i)}/**
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
 */let Oi;class Pf{constructor(){this.views=new Map}}function c0(t){T(!Oi,"__referenceConstructor has already been defined"),Oi=t}function u0(){return T(Oi,"Reference.ts has not been loaded"),Oi}function d0(t){return t.views.size===0}function Ua(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),nu(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(nu(o,e,n,r));return s}}function Af(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Pi(n,i?r:null),l=!1;a?l=!0:r instanceof k?(a=La(n,r),l=!1):(a=k.EMPTY_NODE,l=!1);const c=hs(new Ct(a,l,!1),new Ct(r,i,!1));return new r0(e,c)}return o}function h0(t,e,n,r,i,s){const o=Af(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),a0(o,n),l0(o,n)}function f0(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Et(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(tu(c,n,r)),eu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(tu(l,n,r)),eu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Et(t)&&s.push(new(u0())(e._repo,e._path)),{removed:s,events:o}}function Nf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function bt(t,e){let n=null;for(const r of t.views.values())n=n||o0(r,e);return n}function Of(t,e){if(e._queryParams.loadsAllData())return ps(t);{const r=e._queryIdentifier;return t.views.get(r)}}function kf(t,e){return Of(t,e)!=null}function Et(t){return ps(t)!=null}function ps(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ki;function p0(t){T(!ki,"__referenceConstructor has already been defined"),ki=t}function g0(){return T(ki,"Reference.ts has not been loaded"),ki}let v0=1;class ru{constructor(e){this.listenProvider_=e,this.syncPointTree_=new J(null),this.pendingWriteTree_=qE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mf(t,e,n,r,i){return kE(t.pendingWriteTree_,e,n,r,i),i?Rr(t,new Ht(yf(),e,n)):[]}function kt(t,e,n=!1){const r=ME(t.pendingWriteTree_,e);if(LE(t.pendingWriteTree_,e)){let s=new J(null);return r.snap!=null?s=s.set($(),!0):Ce(r.children,o=>{s=s.set(new q(o),!0)}),Rr(t,new xi(r.path,s,n))}else return[]}function xr(t,e,n){return Rr(t,new Ht(ka(),e,n))}function m0(t,e,n){const r=J.fromObject(n);return Rr(t,new ar(ka(),e,r))}function _0(t,e){return Rr(t,new or(ka(),e))}function b0(t,e,n){const r=$a(t,n);if(r){const i=Ha(r),s=i.path,o=i.queryId,a=be(s,e),l=new or(Ma(o),a);return Ga(t,s,l)}else return[]}function Lf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||kf(o,e))){const l=f0(o,e,n,r);d0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>Et(f));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=C0(h);for(let p=0;p<f.length;++p){const g=f[p],v=g.query,_=Wf(t,g);t.listenProvider_.startListening(Vn(v),lr(t,v),_.hashFn,_.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Vn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(gs(h));t.listenProvider_.stopListening(Vn(h),f)}))}E0(t,c)}return a}function Ff(t,e,n,r){const i=$a(t,r);if(i!=null){const s=Ha(i),o=s.path,a=s.queryId,l=be(o,e),c=new Ht(Ma(a),l,n);return Ga(t,o,c)}else return[]}function y0(t,e,n,r){const i=$a(t,r);if(i){const s=Ha(i),o=s.path,a=s.queryId,l=be(o,e),c=J.fromObject(n),u=new ar(Ma(a),l,c);return Ga(t,o,u)}else return[]}function I0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const p=be(h,i);s=s||bt(f,p),o=o||Et(f)});let a=t.syncPointTree_.get(i);a?(o=o||Et(a),s=s||bt(a,$())):(a=new Pf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=k.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=bt(p,$());g&&(s=s.updateImmediateChild(f,g))}));const c=kf(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=gs(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=S0();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=fs(t.pendingWriteTree_,i);let d=h0(a,e,n,u,s,l);if(!c&&!o&&!r){const h=Of(a,e);d=d.concat(T0(t,e,h))}return d}function Wa(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=be(o,e),c=bt(a,l);if(c)return c});return Ef(i,e,s,n,!0)}function w0(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=be(c,n);r=r||bt(u,d)});let i=t.syncPointTree_.get(n);i?r=r||bt(i,$()):(i=new Pf,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ct(r,!0,!1):null,a=fs(t.pendingWriteTree_,e._path),l=Af(i,e,a,s?o.getNode():k.EMPTY_NODE,s);return s0(l)}function Rr(t,e){return Bf(e,t.syncPointTree_,null,fs(t.pendingWriteTree_,$()))}function Bf(t,e,n,r){if(F(t.path))return Uf(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=bt(i,$()));let s=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Sf(r,o);s=s.concat(Bf(a,l,c,u))}return i&&(s=s.concat(Ua(i,t,r,n))),s}}function Uf(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=bt(i,$()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Sf(r,o),u=t.operationForChild(o);u&&(s=s.concat(Uf(u,a,l,c)))}),i&&(s=s.concat(Ua(i,t,r,n))),s}function Wf(t,e){const n=e.query,r=lr(t,n);return{hashFn:()=>(i0(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?b0(t,n._path,r):_0(t,n._path);{const s=IC(i,n);return Lf(t,n,null,s)}}}}function lr(t,e){const n=gs(e);return t.queryToTagMap.get(n)}function gs(t){return t._path.toString()+"$"+t._queryIdentifier}function $a(t,e){return t.tagToQueryMap.get(e)}function Ha(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function Ga(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=fs(t.pendingWriteTree_,e);return Ua(r,n,i,null)}function C0(t){return t.fold((e,n,r)=>{if(n&&Et(n))return[ps(n)];{let i=[];return n&&(i=Nf(n)),Ce(r,(s,o)=>{i=i.concat(o)}),i}})}function Vn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(g0())(t._repo,t._path):t}function E0(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=gs(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function S0(){return v0++}function T0(t,e,n){const r=e._path,i=lr(t,e),s=Wf(t,n),o=t.listenProvider_.startListening(Vn(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!Et(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!F(c)&&u&&Et(u))return[ps(u).query];{let h=[];return u&&(h=h.concat(Nf(u).map(f=>f.query))),Ce(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Vn(u),lr(t,u))}}return o}/**
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
 */class Va{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Va(n)}node(){return this.node_}}class qa{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ne(this.path_,e);return new qa(this.syncTree_,n)}node(){return Wa(this.syncTree_,this.path_)}}const D0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},iu=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return x0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return R0(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},x0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},R0=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},P0=function(t,e,n,r){return za(e,new qa(n,t),r)},$f=function(t,e,n){return za(t,new Va(e),n)};function za(t,e,n){const r=t.getPriority().val(),i=iu(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=iu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new re(a,se(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new re(i))),o.forEachChild(Z,(a,l)=>{const c=za(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class ja{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ka(t,e){let n=e instanceof q?e:new q(e),r=t,i=U(n);for(;i!==null;){const s=un(r.node.children,i)||{children:{},childCount:0};r=new ja(i,r,s),n=j(n),i=U(n)}return r}function Tn(t){return t.node.value}function Hf(t,e){t.node.value=e,Oo(t)}function Gf(t){return t.node.childCount>0}function A0(t){return Tn(t)===void 0&&!Gf(t)}function vs(t,e){Ce(t.node.children,(n,r)=>{e(new ja(n,t,r))})}function Vf(t,e,n,r){n&&!r&&e(t),vs(t,i=>{Vf(i,e,!0,r)}),n&&r&&e(t)}function N0(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Pr(t){return new q(t.parent===null?t.name:Pr(t.parent)+"/"+t.name)}function Oo(t){t.parent!==null&&O0(t.parent,t.name,t)}function O0(t,e,n){const r=A0(n),i=it(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Oo(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Oo(t))}/**
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
 */const k0=/[\[\].#$\/\u0000-\u001F\u007F]/,M0=/[\[\].#$\u0000-\u001F\u007F]/,eo=10*1024*1024,qf=function(t){return typeof t=="string"&&t.length!==0&&!k0.test(t)},zf=function(t){return typeof t=="string"&&t.length!==0&&!M0.test(t)},L0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),zf(t)},F0=function(t,e,n,r){r&&e===void 0||Ya(wa(t,"value"),e,n)},Ya=function(t,e,n){const r=n instanceof q?new eE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+At(r));if(typeof e=="function")throw new Error(t+"contains a function "+At(r)+" with contents = "+e.toString());if(Wh(e))throw new Error(t+"contains "+e.toString()+" "+At(r));if(typeof e=="string"&&e.length>eo/3&&us(e)>eo)throw new Error(t+"contains a string greater than "+eo+" utf8 bytes "+At(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ce(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!qf(o)))throw new Error(t+" contains an invalid key ("+o+") "+At(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tE(r,o),Ya(t,a,r),nE(r)}),i&&s)throw new Error(t+' contains ".value" child '+At(r)+" in addition to actual children.")}},jf=function(t,e,n,r){if(!(r&&n===void 0)&&!zf(n))throw new Error(wa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B0=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jf(t,e,n,r)},U0=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},W0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!qf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!L0(n))throw new Error(wa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!df(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ke(t,e,n){Kf(t,n),H0(t,r=>Be(r,e)||Be(e,r))}function H0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(G0(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function G0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Lt&&pe("event: "+n.toString()),Sn(r)}}}/**
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
 */const V0="repo_interrupt",q0=25;class z0{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Di(),this.transactionQueueTree_=new ja,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function j0(t,e,n){if(t.stats_=xa(t.repoInfo_),t.forceRestClient_||SC())t.server_=new Ti(t.repoInfo_,(r,i,s,o)=>{su(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ou(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{te(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tt(t.repoInfo_,e,(r,i,s,o)=>{su(t,r,i,s,o)},r=>{ou(t,r)},r=>{Y0(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PC(t.repoInfo_,()=>new xE(t.stats_,t.server_)),t.infoData_=new CE,t.infoSyncTree_=new ru({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=xr(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qa(t,"connected",!1),t.serverSyncTree_=new ru({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ke(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function K0(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ja(t){return D0({timestamp:K0(t)})}function su(t,e,n,r,i){t.dataUpdateCount++;const s=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=yi(n,c=>se(c));o=y0(t.serverSyncTree_,s,l,i)}else{const l=se(n);o=Ff(t.serverSyncTree_,s,l,i)}else if(r){const l=yi(n,c=>se(c));o=m0(t.serverSyncTree_,s,l)}else{const l=se(n);o=xr(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_s(t,s)),Ke(t.eventQueue_,a,o)}function ou(t,e){Qa(t,"connected",e),e===!1&&X0(t)}function Y0(t,e){Ce(e,(n,r)=>{Qa(t,n,r)})}function Qa(t,e,n){const r=new q("/.info/"+e),i=se(n);t.infoData_.updateSnapshot(r,i);const s=xr(t.infoSyncTree_,r,i);Ke(t.eventQueue_,r,s)}function Yf(t){return t.nextWriteId_++}function J0(t,e,n){const r=w0(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=se(i).withIndex(e._queryParams.getIndex());I0(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=xr(t.serverSyncTree_,e._path,s);else{const a=lr(t.serverSyncTree_,e);o=Ff(t.serverSyncTree_,e._path,s,a)}return Ke(t.eventQueue_,e._path,o),Lf(t.serverSyncTree_,e,n,null,!0),s},i=>(ms(t,"get for query "+te(e)+" failed: "+i),Promise.reject(new Error(i))))}function Q0(t,e,n,r,i){ms(t,"set",{path:e.toString(),value:n,priority:r});const s=Ja(t),o=se(n,r),a=Wa(t.serverSyncTree_,e),l=$f(o,a,s),c=Yf(t),u=Mf(t.serverSyncTree_,e,l,c,!0);Kf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||we("set at "+e+" failed: "+h);const g=kt(t.serverSyncTree_,c,!p);Ke(t.eventQueue_,e,g),eS(t,i,h,f)});const d=ep(t,e);_s(t,d),Ke(t.eventQueue_,d,[])}function X0(t){ms(t,"onDisconnectEvents");const e=Ja(t),n=Di();xo(t.onDisconnect_,$(),(i,s)=>{const o=P0(i,s,t.serverSyncTree_,e);bf(n,i,o)});let r=[];xo(n,$(),(i,s)=>{r=r.concat(xr(t.serverSyncTree_,i,s));const o=ep(t,i);_s(t,o)}),t.onDisconnect_=Di(),Ke(t.eventQueue_,$(),r)}function Z0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(V0)}function ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pe(n,...e)}function eS(t,e,n,r){e&&Sn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Jf(t,e,n){return Wa(t.serverSyncTree_,e,n)||k.EMPTY_NODE}function Xa(t,e=t.transactionQueueTree_){if(e||bs(t,e),Tn(e)){const n=Xf(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&tS(t,Pr(e),n)}else Gf(e)&&vs(e,n=>{Xa(t,n)})}function tS(t,e,n){const r=n.map(c=>c.currentWriteId),i=Jf(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=be(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ms(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(kt(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();bs(t,Ka(t.transactionQueueTree_,e)),Xa(t,t.transactionQueueTree_),Ke(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Sn(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{we("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}_s(t,e)}},o)}function _s(t,e){const n=Qf(t,e),r=Pr(n),i=Xf(t,n);return nS(t,i,r),r}function nS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=be(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(kt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=q0)u=!0,d="maxretry",i=i.concat(kt(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Jf(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Ya("transaction failed: Data returned ",f,l.path);let p=se(f);typeof f=="object"&&f!=null&&it(f,".priority")||(p=p.updatePriority(h.getPriority()));const v=l.currentWriteId,_=Ja(t),b=$f(p,h,_);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=b,l.currentWriteId=Yf(t),o.splice(o.indexOf(v),1),i=i.concat(Mf(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(kt(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",i=i.concat(kt(t.serverSyncTree_,l.currentWriteId,!0))}Ke(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}bs(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Sn(r[a]);Xa(t,t.transactionQueueTree_)}function Qf(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Tn(r)===void 0;)r=Ka(r,n),e=j(e),n=U(e);return r}function Xf(t,e){const n=[];return Zf(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Zf(t,e,n){const r=Tn(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);vs(e,i=>{Zf(t,i,n)})}function bs(t,e){const n=Tn(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Hf(e,n.length>0?n:void 0)}vs(e,r=>{bs(t,r)})}function ep(t,e){const n=Pr(Qf(t,e)),r=Ka(t.transactionQueueTree_,e);return N0(r,i=>{to(t,i)}),to(t,r),Vf(r,i=>{to(t,i)}),n}function to(t,e){const n=Tn(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(kt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Hf(e,void 0):n.length=s+1,Ke(t.eventQueue_,Pr(e),i);for(let o=0;o<r.length;o++)Sn(r[o])}}/**
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
 */function rS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function iS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):we(`Invalid query segment '${n}' in query '${t}'`)}return e}const au=function(t,e){const n=sS(t),r=n.namespace;n.domain==="firebase.com"&&nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Xh(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new q(n.pathString)}},sS=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=rS(t.substring(u,d)));const h=iS(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class oS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+te(this.snapshot.exportVal())}}class aS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class lS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Za{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:lf(this._path)}get ref(){return new st(this._repo,this._path)}get _queryIdentifier(){const e=zc(this._queryParams),n=Ta(e);return n==="{}"?"default":n}get _queryObject(){return zc(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof Za))return!1;const n=this._repo===e._repo,r=df(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ZC(this._path)}}class st extends Za{constructor(e,n){super(e,n,new Oa,!1)}get parent(){const e=uf(this._path);return e===null?null:new st(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=Mi(this.ref,e);return new cr(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cr(i,Mi(this.ref,r),Z)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tp(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?Mi(t._root,e):t._root}function Mi(t,e){return t=Pe(t),U(t._path)===null?B0("child","path",e,!1):jf("child","path",e,!1),new st(t._repo,ne(t._path,e))}function cS(t,e){t=Pe(t),U0("set",t._path),F0("set",e,t._path,!1);const n=new cs;return Q0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function uS(t){t=Pe(t);const e=new lS(()=>{}),n=new el(e);return J0(t._repo,t,n).then(r=>new cr(r,new st(t._repo,t._path),t._queryParams.getIndex()))}class el{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new oS("value",this,new cr(e.snapshotNode,new st(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new aS(this,e,n):null}matches(e){return e instanceof el?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}c0(st);p0(st);/**
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
 */const dS="FIREBASE_DATABASE_EMULATOR_HOST",ko={};let hS=!1;function fS(t,e,n,r){t.repoInfo_=new Xh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function pS(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=au(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[dS]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=au(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Zt(Zt.OWNER):new DC(t.name,t.options,e);W0("Invalid Firebase Database URL",o),F(o.path)||nt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=vS(a,t,u,new TC(t.name,n));return new mS(d,t)}function gS(t,e){const n=ko[e];(!n||n[t.key]!==t)&&nt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Z0(t),delete n[t.key]}function vS(t,e,n,r){let i=ko[e.name];i||(i={},ko[e.name]=i);let s=i[t.toURLString()];return s&&nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new z0(t,hS,n,r),i[t.toURLString()]=s,s}class mS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(j0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new st(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nt("Cannot call "+e+" on a deleted database.")}}function np(t=kh(),e){const n=Sa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=VI("database");r&&_S(n,...r)}return n}function _S(t,e,n,r={}){t=Pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zt(Zt.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:qI(r.mockUserToken,t.app.options.projectId);s=new Zt(o)}fS(i,e,n,s)}/**
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
 */function bS(t){dC(Cn),dn(new Ut("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return pS(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mt(Rc,Pc,t),mt(Rc,Pc,"esm2017")}tt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bS();var yS="firebase",IS="9.23.0";/**
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
 */mt(yS,IS,"app");function tl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wS=rp,ip=new Er("auth","Firebase",rp());/**
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
 */const Li=new Ca("@firebase/auth");function CS(t,...e){Li.logLevel<=V.WARN&&Li.warn(`Auth (${Cn}): ${t}`,...e)}function ei(t,...e){Li.logLevel<=V.ERROR&&Li.error(`Auth (${Cn}): ${t}`,...e)}/**
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
 */function Ye(t,...e){throw nl(t,...e)}function ze(t,...e){return nl(t,...e)}function sp(t,e,n){const r=Object.assign(Object.assign({},wS()),{[e]:n});return new Er("auth","Firebase",r).create(e,{appName:t.name})}function ES(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ye(t,"argument-error"),sp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ip.create(t,...e)}function M(t,e,...n){if(!t)throw nl(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ei(e),new Error(e)}function rt(t,e){t||Ze(e)}/**
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
 */function Mo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SS(){return lu()==="http:"||lu()==="https:"}function lu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function TS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SS()||zI()||"connection"in navigator)?navigator.onLine:!0}function DS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ar{constructor(e,n){this.shortDelay=e,this.longDelay=n,rt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ia()||xh()}get(){return TS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rl(t,e){rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class op{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RS=new Ar(3e4,6e4);function ap(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return lp(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=wn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),op.fetch()(cp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function lp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xS),e);try{const i=new AS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Kr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sp(t,u,c);Ye(t,u)}}catch(i){if(i instanceof Tt)throw i;Ye(t,"network-request-failed",{message:String(i)})}}async function PS(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&Ye(t,"multi-factor-auth-required",{_serverResponse:s}),s}function cp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rl(t.config,i):`${t.config.apiScheme}://${i}`}class AS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),RS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ze(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function NS(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function OS(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kS(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=il(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qn(no(i.auth_time)),issuedAtTime:qn(no(i.iat)),expirationTime:qn(no(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function no(t){return Number(t)*1e3}function il(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=bi(n);return i?JSON.parse(i):(ei("Failed to decode base64 JWT payload"),null)}catch(i){return ei("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function MS(t){const e=il(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&LS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class up{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qn(this.lastLoginAt),this.creationTime=qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ur(t,OS(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WS(s.providerUserInfo):[],a=US(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new up(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function BS(t){const e=Pe(t);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function US(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WS(t){return t.map(e=>{var{providerId:n}=e,r=tl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $S(t,e){const n=await lp(t,{},async()=>{const r=wn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=cp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",op.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $S(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new dr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dr,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function lt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=tl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new up(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ur(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kS(this,e)}reload(){return BS(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ur(this,NS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:y,isAnonymous:R,providerData:D,stsTokenManager:I}=n;M(w&&I,e,"internal-error");const E=dr.fromJSON(this.name,I);M(typeof w=="string",e,"internal-error"),lt(d,e.name),lt(h,e.name),M(typeof y=="boolean",e,"internal-error"),M(typeof R=="boolean",e,"internal-error"),lt(f,e.name),lt(p,e.name),lt(g,e.name),lt(v,e.name),lt(_,e.name),lt(b,e.name);const C=new Ft({uid:w,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:R,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:E,createdAt:_,lastLoginAt:b});return D&&Array.isArray(D)&&(C.providerData=D.map(x=>Object.assign({},x))),v&&(C._redirectEventId=v),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new dr;i.updateFromServerResponse(n);const s=new Ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fi(s),s}}/**
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
 */const cu=new Map;function et(t){rt(t instanceof Function,"Expected a class definition");let e=cu.get(t);return e?(rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cu.set(t,e),e)}/**
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
 */class dp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dp.type="NONE";const uu=dp;/**
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
 */function ti(t,e,n){return`firebase:${t}:${e}:${n}`}class tn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ti(this.userKey,i.apiKey,s),this.fullPersistenceKey=ti("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new tn(et(uu),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||et(uu);const o=ti(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Ft._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new tn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new tn(s,e,r))}}/**
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
 */function du(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vp(e))return"Blackberry";if(mp(e))return"Webos";if(sl(e))return"Safari";if((e.includes("chrome/")||fp(e))&&!e.includes("edge/"))return"Chrome";if(gp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hp(t=ve()){return/firefox\//i.test(t)}function sl(t=ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fp(t=ve()){return/crios\//i.test(t)}function pp(t=ve()){return/iemobile/i.test(t)}function gp(t=ve()){return/android/i.test(t)}function vp(t=ve()){return/blackberry/i.test(t)}function mp(t=ve()){return/webos/i.test(t)}function ys(t=ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HS(t=ve()){var e;return ys(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GS(){return jI()&&document.documentMode===10}function _p(t=ve()){return ys(t)||gp(t)||mp(t)||vp(t)||/windows phone/i.test(t)||pp(t)}function VS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function bp(t,e=[]){let n;switch(t){case"Browser":n=du(ve());break;case"Worker":n=`${du(ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cn}/${r}`}async function yp(t,e){return Nr(t,"GET","/v2/recaptchaConfig",ap(t,e))}function hu(t){return t!==void 0&&t.enterprise!==void 0}class Ip{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function qS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=ze("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",qS().appendChild(r)})}function zS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jS="https://www.google.com/recaptcha/enterprise.js?render=",KS="recaptcha-enterprise",YS="NO_RECAPTCHA";class JS{constructor(e){this.type=KS,this.auth=Or(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ip(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;hu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(YS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&hu(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wp(jS+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class QS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class XS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fu(this),this.idTokenSubscription=new fu(this),this.beforeStateQueue=new QS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}async initializeRecaptchaConfig(){const e=await yp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ip(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new JS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Or(t){return Pe(t)}class fu{constructor(e){this.auth=e,this.observer=null,this.addObserver=nw(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ZS(t,e){const n=Sa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ii(s,e??{}))return i;Ye(i,"already-initialized")}return n.initialize({options:e})}function eT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tT(t,e,n){const r=Or(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Cp(e),{host:o,port:a}=nT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||rT()}function Cp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nT(t){const e=Cp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pu(o)}}}function pu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ep{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}/**
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
 */async function nn(t,e){return PS(t,"POST","/v1/accounts:signInWithIdp",ap(t,e))}/**
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
 */const iT="http://localhost";class Vt extends Ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=tl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return nn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,nn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nn(e,n)}buildRequest(){const e={requestUri:iT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wn(n)}return e}}/**
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
 */class ol{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends ol{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ct extends kr{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class Je extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Je.credential(n,r)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
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
 */class ut extends kr{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
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
 */class dt extends kr{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
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
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ft._fromIdTokenResponse(e,r,i),o=gu(r);return new gn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gu(r);return new gn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bi extends Tt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bi(e,n,r,i)}}function Sp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(t,s,e,r):s})}async function sT(t,e,n=!1){const r=await ur(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gn._forOperation(t,"link",r)}/**
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
 */async function oT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ur(t,Sp(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=il(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),gn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),s}}/**
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
 */async function aT(t,e,n=!1){const r="signIn",i=await Sp(t,r,e),s=await gn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function lT(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function cT(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function uT(t){return Pe(t).signOut()}const Ui="__sak";/**
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
 */class Tp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function dT(){const t=ve();return sl(t)||ys(t)}const hT=1e3,fT=10;class Dp extends Tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dT()&&VS(),this.fallbackToPolling=_p(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dp.type="LOCAL";const pT=Dp;/**
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
 */class xp extends Tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xp.type="SESSION";const Rp=xp;/**
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
 */function gT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Is{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Is(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await gT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Is.receivers=[];/**
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
 */function al(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=al("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function je(){return window}function mT(t){je().location.href=t}/**
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
 */function Pp(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function _T(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yT(){return Pp()?self:null}/**
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
 */const Ap="firebaseLocalStorageDb",IT=1,Wi="firebaseLocalStorage",Np="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ws(t,e){return t.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function wT(){const t=indexedDB.deleteDatabase(Ap);return new Mr(t).toPromise()}function Lo(){const t=indexedDB.open(Ap,IT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wi,{keyPath:Np})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wi)?e(r):(r.close(),await wT(),e(await Lo()))})})}async function vu(t,e,n){const r=ws(t,!0).put({[Np]:e,value:n});return new Mr(r).toPromise()}async function CT(t,e){const n=ws(t,!1).get(e),r=await new Mr(n).toPromise();return r===void 0?null:r.value}function mu(t,e){const n=ws(t,!0).delete(e);return new Mr(n).toPromise()}const ET=800,ST=3;class Op{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ST)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Is._getInstance(yT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _T(),!this.activeServiceWorker)return;this.sender=new vT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lo();return await vu(e,Ui,"1"),await mu(e,Ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ws(i,!1).getAll();return new Mr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ET)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Op.type="LOCAL";const TT=Op;new Ar(3e4,6e4);/**
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
 */function kp(t,e){return e?et(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ll extends Ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DT(t){return aT(t.auth,new ll(t),t.bypassAuthState)}function xT(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),oT(n,new ll(t),t.bypassAuthState)}async function RT(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),sT(n,new ll(t),t.bypassAuthState)}/**
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
 */class Mp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DT;case"linkViaPopup":case"linkViaRedirect":return RT;case"reauthViaPopup":case"reauthViaRedirect":return xT;default:Ye(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PT=new Ar(2e3,1e4);async function AT(t,e,n){const r=Or(t);ES(t,e,ol);const i=kp(r,n);return new Mt(r,"signInViaPopup",e,i).executeNotNull()}class Mt extends Mp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=al();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PT.get())};e()}}Mt.currentPopupAction=null;/**
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
 */const NT="pendingRedirect",ni=new Map;class OT extends Mp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ni.get(this.auth._key());if(!e){try{const r=await kT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ni.set(this.auth._key(),e)}return this.bypassAuthState||ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kT(t,e){const n=FT(e),r=LT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function MT(t,e){ni.set(t._key(),e)}function LT(t){return et(t._redirectPersistence)}function FT(t){return ti(NT,t.config.apiKey,t.name)}async function BT(t,e,n=!1){const r=Or(t),i=kp(r,e),o=await new OT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const UT=10*60*1e3;class WT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$T(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ze(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=UT&&this.cachedEventUids.clear(),this.cachedEventUids.has(_u(e))}saveEventToCache(e){this.cachedEventUids.add(_u(e)),this.lastProcessedEventTime=Date.now()}}function _u(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $T(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lp(t);default:return!1}}/**
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
 */async function HT(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
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
 */const GT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VT=/^https?/;async function qT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HT(t);for(const n of e)try{if(zT(n))return}catch{}Ye(t,"unauthorized-domain")}function zT(t){const e=Mo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VT.test(n))return!1;if(GT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jT=new Ar(3e4,6e4);function bu(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function KT(t){return new Promise((e,n)=>{var r,i,s;function o(){bu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bu(),n(ze(t,"network-request-failed"))},timeout:jT.get()})}if(!((i=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=je().gapi)===null||s===void 0)&&s.load)o();else{const a=zS("iframefcb");return je()[a]=()=>{gapi.load?o():n(ze(t,"network-request-failed"))},wp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ri=null,e})}let ri=null;function YT(t){return ri=ri||KT(t),ri}/**
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
 */const JT=new Ar(5e3,15e3),QT="__/auth/iframe",XT="emulator/auth/iframe",ZT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tD(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rl(e,XT):`https://${t.config.authDomain}/${QT}`,r={apiKey:e.apiKey,appName:t.name,v:Cn},i=eD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wn(r).slice(1)}`}async function nD(t){const e=await YT(t),n=je().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:tD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ze(t,"network-request-failed"),a=je().setTimeout(()=>{s(o)},JT.get());function l(){je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const rD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iD=500,sD=600,oD="_blank",aD="http://localhost";class yu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lD(t,e,n,r=iD,i=sD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},rD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ve().toLowerCase();n&&(a=fp(c)?oD:n),hp(c)&&(e=e||aD,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(HS(c)&&a!=="_self")return cD(e||"",a),new yu(null);const d=window.open(e||"",a,u);M(d,t,"popup-blocked");try{d.focus()}catch{}return new yu(d)}function cD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const uD="__/auth/handler",dD="emulator/auth/handler",hD=encodeURIComponent("fac");async function Iu(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cn,eventId:i};if(e instanceof ol){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_o(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof kr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${hD}=${encodeURIComponent(l)}`:"";return`${fD(t)}?${wn(a).slice(1)}${c}`}function fD({config:t}){return t.emulator?rl(t,dD):`https://${t.authDomain}/${uD}`}/**
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
 */const ro="webStorageSupport";class pD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rp,this._completeRedirectFn=BT,this._overrideRedirectResult=MT}async _openPopup(e,n,r,i){var s;rt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Iu(e,n,r,Mo(),i);return lD(e,o,al())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Iu(e,n,r,Mo(),i);return mT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await nD(e),r=new WT(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ro,{type:ro},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ro];o!==void 0&&n(!!o),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _p()||sl()||ys()}}const gD=pD;var wu="@firebase/auth",Cu="0.23.2";/**
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
 */class vD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function _D(t){dn(new Ut("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bp(t)},c=new XS(r,i,s,l);return eT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Ut("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(r=>new vD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(wu,Cu,mD(t)),mt(wu,Cu,"esm2017")}/**
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
 */const bD=5*60,yD=Dh("authIdTokenMaxAge")||bD;let Eu=null;const ID=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yD)return;const i=n==null?void 0:n.token;Eu!==i&&(Eu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function io(t=kh()){const e=Sa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZS(t,{popupRedirectResolver:gD,persistence:[TT,pT,Rp]}),r=Dh("authTokenSyncURL");if(r){const s=ID(r);cT(n,s,()=>s(n.currentUser)),lT(n,o=>s(o))}const i=Sh("auth");return i&&tT(n,`http://${i}`),n}_D("Browser");const wD=({onSignInExists:t,onSignInNotExists:e,onSignOut:n})=>{const[r,i]=ee(null);Oh({apiKey:"AIzaSyDCI-G8rde1guG1vIVhBzb9p1e8jzSP3a4",authDomain:"trello-clone-b3c76.firebaseapp.com",databaseURL:"https://trello-clone-b3c76-default-rtdb.europe-west1.firebasedatabase.app",projectId:"trello-clone-b3c76",storageBucket:"trello-clone-b3c76.appspot.com",messagingSenderId:"712863136216",appId:"1:712863136216:web:00020f5948777f3f415aad"});const o=new Je,a=()=>{const c=io();AT(c,o)},l=()=>{const c=io();uT(c).then(()=>{n(),i(null)})};return ae(()=>{io().onAuthStateChanged(u=>{if(!u)return;i(u.uid);const d=np();uS(Mi(tp(d),`users/${u.uid}`)).then(h=>{h.exists()?t(h.val().lists):e()})})},[]),{user:r,signIn:a,signOut:l}},CD="data-rbd-drag-handle-draggable-id",ED="data-rbd-droppable-id",Fo=t=>{const e=`[${CD}='${t}']`;return document.querySelector(e)},SD=t=>{const e=`[${ED}='${t}']`;return document.querySelector(e)},TD=()=>{const[t,e]=ee({}),n=(o,a,l)=>parseFloat(o.paddingTop)+a.slice(0,l).reduce((c,u)=>{const d=window.getComputedStyle(u),h=parseFloat(d.marginBottom),f=parseFloat(d.borderTopWidth);return c+u.clientHeight+h+f},0);return{placeholder:t,onDragStart:o=>{const a=Fo(o.draggableId);if(!a)return;const{offsetHeight:l,clientWidth:c}=a,u=o.source.index,d=a.parentElement,h=window.getComputedStyle(d);d&&e({clientX:parseFloat(h.paddingLeft),clientY:n(h,[...d.children],u),clientWidth:c,offsetHeight:l})},onDragUpdate:(o,a)=>{if(!o.destination)return;const l=Fo(o.draggableId);if(!l||!l.parentElement)return;const c=l.parentElement;if(!c)return;const u=window.getComputedStyle(c),{offsetHeight:d,clientWidth:h}=l,f=o.destination.index;e({clientX:parseFloat(u.paddingLeft),clientY:n(u,a,f),clientWidth:h,offsetHeight:d})},onDragEnd:()=>{e({})}}};function DD(){const{user:t,signIn:e,signOut:n}=wD({onSignInExists:I=>i(I),onSignInNotExists:()=>c([]),onSignOut:()=>i([])}),[r,i]=ee([]),{placeholder:s,onDragStart:o,onDragEnd:a,onDragUpdate:l}=TD(),c=I=>{if(i(I),!t)return;const E=np();cS(tp(E,`users/${t}`),{lists:I})},u=(I,E,C)=>{const[x]=I.splice(E,1);return I.splice(C,0,x),I},d=(I,E,C,x)=>{const O=Array.from(I),Y=Array.from(E),[X]=O.splice(C.index,1);Y.splice(x.index,0,X);const H={};return H[C.droppableId]=O,H[x.droppableId]=Y,H},h=I=>{c([...r,{title:I,cards:[]}])},f=I=>{const E=[...r];E.splice(I,1),c(E)},p=(I,E)=>{const C=[...r];C[I].cards||(C[I].cards=[]),C[I].cards.push({id:Ge(),content:E}),c(C)},g=(I,E)=>{const C=[...r];C[I].cards.splice(E,1),c(C)},v=(I,E,C)=>{const x=[...r];x[I].cards[E].color=C,c(x)},_=(I,E,C)=>{const x=[...r];x[I].cards[E].todos=C,c(x)},b=(I,E,C)=>{const x=[...r];x[I].cards[E].description=C,c(x)},w=(I,E,C)=>{const x=[...r];x[I].cards[E].content=C,c(x)},y=(I,E)=>{const C=[...r];C[I].title=E,c(C)},R=I=>{a();const{source:E,destination:C,type:x}=I;if(!C)return;const O=parseInt(E.droppableId),Y=parseInt(C.droppableId),X=[...r];switch(x){case Wn.List:u(X,E.index,C.index);break;case Wn.Card:if(O===Y){u(X[O].cards,E.index,C.index);break}else{const H=d(r[O].cards,r[Y].cards,E,C);X[O].cards=H[O],X[Y].cards=H[Y]}}c(X)},D=I=>{if(!I.destination)return;const E=Fo(I.draggableId);if(!E||!E.parentElement||!E.parentElement)return;const x=I.destination.index,O=I.source.index,Y=[...E.parentElement.children],X=Y[O];Y.splice(O,1);const H=SD(I.destination.droppableId),me=[...H.children];let fe;E.parentElement===H?fe=[...Y.slice(0,x),X,...Y.slice(x+1)]:fe=[...me.slice(0,x),X,...me.slice(x+1)],l(I,fe)};return m("div",{children:[m(EI,{signIn:e,signOut:n,user:t,updateLists:c}),m("div",{class:"mx-4 flex select-none items-start text-slate-950",children:[m(Iy,{onDragStart:o,onDragEnd:R,onDragUpdate:D,children:m(ma,{droppableId:"all-lists",direction:"horizontal",type:Wn.List,children:I=>m("div",{ref:I.innerRef,...I.droppableProps,class:"flex",children:[r==null?void 0:r.map((E,C)=>m(RI,{list:E,index:C,changeTitle:x=>y(C,x),changeContent:(x,O)=>w(C,x,O),changeDescription:(x,O)=>b(C,x,O),addCard:x=>p(C,x),removeCard:x=>g(C,x),changeTodos:(x,O)=>_(C,x,O),changeColor:(x,O)=>v(C,x,O),removeList:()=>f(C),placeholder:s})),I.placeholder]})})}),m(OI,{addList:h})]})]})}rn(m(DD,{}),document.getElementById("app"));
