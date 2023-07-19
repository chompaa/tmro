(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var pr,P,Tu,Ft,ul,Du,io,xu,ii={},Ru=[],Fp=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$i=Array.isArray;function nt(t,e){for(var n in e)t[n]=e[n];return t}function Pu(t){var e=t.parentNode;e&&e.removeChild(t)}function ze(t,e,n){var r,i,s,o={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?pr.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)o[s]===void 0&&(o[s]=t.defaultProps[s]);return Un(t,o,r,i,null)}function Un(t,e,n,r,i){var s={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Tu};return i==null&&P.vnode!=null&&P.vnode(s),s}function Bp(){return{current:null}}function Ce(t){return t.children}function Ye(t,e){this.props=t,this.context=e}function Kn(t,e){if(e==null)return t.__?Kn(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?Kn(t):null}function Au(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Au(t)}}function so(t){(!t.__d&&(t.__d=!0)&&Ft.push(t)&&!si.__r++||ul!==P.debounceRendering)&&((ul=P.debounceRendering)||Du)(si)}function si(){var t,e,n,r,i,s,o,a;for(Ft.sort(io);t=Ft.shift();)t.__d&&(e=Ft.length,r=void 0,i=void 0,o=(s=(n=t).__v).__e,(a=n.__P)&&(r=[],(i=nt({},s)).__v=s.__v+1,Lo(a,s,i,n.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,r,o??Kn(s),s.__h),Lu(r,s),s.__e!=o&&Au(s)),Ft.length>e&&Ft.sort(io));si.__r=0}function Nu(t,e,n,r,i,s,o,a,l,c){var u,d,h,f,p,g,v,m=r&&r.__k||Ru,b=m.length;for(n.__k=[],u=0;u<e.length;u++)if((f=n.__k[u]=(f=e[u])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Un(null,f,null,null,f):$i(f)?Un(Ce,{children:f},null,null,null):f.__b>0?Un(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(h=m[u])===null||h&&f.key==h.key&&f.type===h.type)m[u]=void 0;else for(d=0;d<b;d++){if((h=m[d])&&f.key==h.key&&f.type===h.type){m[d]=void 0;break}h=null}Lo(t,f,h=h||ii,i,s,o,a,l,c),p=f.__e,(d=f.ref)&&h.ref!=d&&(v||(v=[]),h.ref&&v.push(h.ref,null,f),v.push(d,f.__c||p,f)),p!=null?(g==null&&(g=p),typeof f.type=="function"&&f.__k===h.__k?f.__d=l=Ou(f,l,t):l=ku(t,f,h,m,p,l),typeof n.type=="function"&&(n.__d=l)):l&&h.__e==l&&l.parentNode!=t&&(l=Kn(h))}for(n.__e=g,u=b;u--;)m[u]!=null&&(typeof n.type=="function"&&m[u].__e!=null&&m[u].__e==n.__d&&(n.__d=Mu(r).nextSibling),Bu(m[u],m[u]));if(v)for(u=0;u<v.length;u++)Fu(v[u],v[++u],v[++u])}function Ou(t,e,n){for(var r,i=t.__k,s=0;i&&s<i.length;s++)(r=i[s])&&(r.__=t,e=typeof r.type=="function"?Ou(r,e,n):ku(n,r,r,i,r.__e,e));return e}function Je(t,e){return e=e||[],t==null||typeof t=="boolean"||($i(t)?t.some(function(n){Je(n,e)}):e.push(t)),e}function ku(t,e,n,r,i,s){var o,a,l;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(n==null||i!=s||i.parentNode==null)e:if(s==null||s.parentNode!==t)t.appendChild(i),o=null;else{for(a=s,l=0;(a=a.nextSibling)&&l<r.length;l+=1)if(a==i)break e;t.insertBefore(i,s),o=s}return o!==void 0?o:i.nextSibling}function Mu(t){var e,n,r;if(t.type==null||typeof t.type=="string")return t.__e;if(t.__k){for(e=t.__k.length-1;e>=0;e--)if((n=t.__k[e])&&(r=Mu(n)))return r}return null}function Up(t,e,n,r,i){var s;for(s in n)s==="children"||s==="key"||s in e||oi(t,s,null,n[s],r);for(s in e)i&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||n[s]===e[s]||oi(t,s,e[s],n[s],r)}function dl(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||Fp.test(e)?n:n+"px"}function oi(t,e,n,r,i){var s;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||dl(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||dl(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=n,n?r||t.addEventListener(e,s?fl:hl,s):t.removeEventListener(e,s?fl:hl,s);else if(e!=="dangerouslySetInnerHTML"){if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function hl(t){return this.l[t.type+!1](P.event?P.event(t):t)}function fl(t){return this.l[t.type+!0](P.event?P.event(t):t)}function Lo(t,e,n,r,i,s,o,a,l){var c,u,d,h,f,p,g,v,m,b,I,y,x,S,R,N=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=e.__e=n.__e,e.__h=null,s=[a]),(c=P.__b)&&c(e);try{e:if(typeof N=="function"){if(v=e.props,m=(c=N.contextType)&&r[c.__c],b=c?m?m.props.value:c.__:r,n.__c?g=(u=e.__c=n.__c).__=u.__E:("prototype"in N&&N.prototype.render?e.__c=u=new N(v,b):(e.__c=u=new Ye(v,b),u.constructor=N,u.render=$p),m&&m.sub(u),u.props=v,u.state||(u.state={}),u.context=b,u.__n=r,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),N.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=nt({},u.__s)),nt(u.__s,N.getDerivedStateFromProps(v,u.__s))),h=u.props,f=u.state,u.__v=e,d)N.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(N.getDerivedStateFromProps==null&&v!==h&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(v,b),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(v,u.__s,b)===!1||e.__v===n.__v){for(e.__v!==n.__v&&(u.props=v,u.state=u.__s,u.__d=!1),u.__e=!1,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),I=0;I<u._sb.length;I++)u.__h.push(u._sb[I]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(v,u.__s,b),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(h,f,p)})}if(u.context=b,u.props=v,u.__P=t,y=P.__r,x=0,"prototype"in N&&N.prototype.render){for(u.state=u.__s,u.__d=!1,y&&y(e),c=u.render(u.props,u.state,u.context),S=0;S<u._sb.length;S++)u.__h.push(u._sb[S]);u._sb=[]}else do u.__d=!1,y&&y(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++x<25);u.state=u.__s,u.getChildContext!=null&&(r=nt(nt({},r),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(p=u.getSnapshotBeforeUpdate(h,f)),Nu(t,$i(R=c!=null&&c.type===Ce&&c.key==null?c.props.children:c)?R:[R],e,n,r,i,s,o,a,l),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else s==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=Wp(n.__e,e,n,r,i,s,o,l);(c=P.diffed)&&c(e)}catch(O){e.__v=null,(l||s!=null)&&(e.__e=a,e.__h=!!l,s[s.indexOf(a)]=null),P.__e(O,e,n)}}function Lu(t,e){P.__c&&P.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(r){r.call(n)})}catch(r){P.__e(r,n.__v)}})}function Wp(t,e,n,r,i,s,o,a){var l,c,u,d=n.props,h=e.props,f=e.type,p=0;if(f==="svg"&&(i=!0),s!=null){for(;p<s.length;p++)if((l=s[p])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){t=l,s[p]=null;break}}if(t==null){if(f===null)return document.createTextNode(h);t=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),s=null,a=!1}if(f===null)d===h||a&&t.data===h||(t.data=h);else{if(s=s&&pr.call(t.childNodes),c=(d=n.props||ii).dangerouslySetInnerHTML,u=h.dangerouslySetInnerHTML,!a){if(s!=null)for(d={},p=0;p<t.attributes.length;p++)d[t.attributes[p].name]=t.attributes[p].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===t.innerHTML)||(t.innerHTML=u&&u.__html||""))}if(Up(t,h,d,i,a),u)e.__k=[];else if(Nu(t,$i(p=e.props.children)?p:[p],e,n,r,i&&f!=="foreignObject",s,o,s?s[0]:n.__k&&Kn(n,0),a),s!=null)for(p=s.length;p--;)s[p]!=null&&Pu(s[p]);a||("value"in h&&(p=h.value)!==void 0&&(p!==t.value||f==="progress"&&!p||f==="option"&&p!==d.value)&&oi(t,"value",p,d.value,!1),"checked"in h&&(p=h.checked)!==void 0&&p!==t.checked&&oi(t,"checked",p,d.checked,!1))}return t}function Fu(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){P.__e(r,n)}}function Bu(t,e,n){var r,i;if(P.unmount&&P.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Fu(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){P.__e(s,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Bu(r[i],e,n||typeof t.type!="function");n||t.__e==null||Pu(t.__e),t.__=t.__e=t.__d=void 0}function $p(t,e,n){return this.constructor(t,n)}function an(t,e,n){var r,i,s;P.__&&P.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,s=[],Lo(e,t=(!r&&n||e).__k=ze(Ce,null,[t]),i||ii,ii,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?pr.call(e.childNodes):null,s,!r&&n?n:i?i.__e:e.firstChild,r),Lu(s,t)}function Uu(t,e){an(t,e,Uu)}function Wu(t,e,n){var r,i,s,o,a=nt({},t.props);for(s in t.type&&t.type.defaultProps&&(o=t.type.defaultProps),e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s]===void 0&&o!==void 0?o[s]:e[s];return arguments.length>2&&(a.children=arguments.length>3?pr.call(arguments,2):n),Un(t.type,a,r||t.key,i||t.ref,null)}function Hp(t,e){var n={__c:e="__cC"+xu++,__:t,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,so(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}pr=Ru.slice,P={__e:function(t,e,n,r){for(var i,s,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(a){t=a}throw t}},Tu=0,Ye.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=nt({},this.state),typeof t=="function"&&(t=t(nt({},n),this.props)),t&&nt(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),so(this))},Ye.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),so(this))},Ye.prototype.render=Ce,Ft=[],Du=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,io=function(t,e){return t.__v.__b-e.__v.__b},si.__r=0,xu=0;let $r;const Gp=new Uint8Array(16);function Vp(){if(!$r&&($r=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $r(Gp)}const ve=[];for(let t=0;t<256;++t)ve.push((t+256).toString(16).slice(1));function qp(t,e=0){return(ve[t[e+0]]+ve[t[e+1]]+ve[t[e+2]]+ve[t[e+3]]+"-"+ve[t[e+4]]+ve[t[e+5]]+"-"+ve[t[e+6]]+ve[t[e+7]]+"-"+ve[t[e+8]]+ve[t[e+9]]+"-"+ve[t[e+10]]+ve[t[e+11]]+ve[t[e+12]]+ve[t[e+13]]+ve[t[e+14]]+ve[t[e+15]]).toLowerCase()}const zp=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),pl={randomUUID:zp};function Ke(t,e,n){if(pl.randomUUID&&!e&&!t)return pl.randomUUID();t=t||{};const r=t.random||(t.rng||Vp)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return qp(r)}var St,te,xs,gl,ln=0,$u=[],Yr=[],vl=P.__b,ml=P.__r,_l=P.diffed,bl=P.__c,yl=P.unmount;function bn(t,e){P.__h&&P.__h(te,t,ln||e),ln=0;var n=te.__H||(te.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:Yr}),n.__[t]}function ie(t){return ln=1,Fo(Hu,t)}function Fo(t,e,n){var r=bn(St++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Hu(void 0,e),function(a){var l=r.__N?r.__N[0]:r.__[0],c=r.t(l,a);l!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=te,!te.u)){var i=function(a,l,c){if(!r.__c.__H)return!0;var u=r.__c.__H.__.filter(function(h){return h.__c});if(u.every(function(h){return!h.__N}))return!s||s.call(this,a,l,c);var d=!1;return u.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(d=!0)}}),!(!d&&r.__c.props===a)&&(!s||s.call(this,a,l,c))};te.u=!0;var s=te.shouldComponentUpdate,o=te.componentWillUpdate;te.componentWillUpdate=function(a,l,c){if(this.__e){var u=s;s=void 0,i(a,l,c),s=u}o&&o.call(this,a,l,c)},te.shouldComponentUpdate=i}return r.__N||r.__}function _e(t,e){var n=bn(St++,3);!P.__s&&Bo(n.__H,e)&&(n.__=t,n.i=e,te.__H.__h.push(n))}function yn(t,e){var n=bn(St++,4);!P.__s&&Bo(n.__H,e)&&(n.__=t,n.i=e,te.__h.push(n))}function $(t){return ln=5,Pe(function(){return{current:t}},[])}function jp(t,e,n){ln=6,yn(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function Pe(t,e){var n=bn(St++,7);return Bo(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Kp(t,e){return ln=8,Pe(function(){return t},e)}function Hi(t){var e=te.context[t.__c],n=bn(St++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(te)),e.props.value):t.__}function Yp(t,e){P.useDebugValue&&P.useDebugValue(e?e(t):t)}function Jp(){var t=bn(St++,11);if(!t.__){for(var e=te.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function Qp(){for(var t;t=$u.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Jr),t.__H.__h.forEach(oo),t.__H.__h=[]}catch(e){t.__H.__h=[],P.__e(e,t.__v)}}P.__b=function(t){te=null,vl&&vl(t)},P.__r=function(t){ml&&ml(t),St=0;var e=(te=t.__c).__H;e&&(xs===te?(e.__h=[],te.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Yr,n.__N=n.i=void 0})):(e.__h.forEach(Jr),e.__h.forEach(oo),e.__h=[],St=0)),xs=te},P.diffed=function(t){_l&&_l(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&($u.push(e)!==1&&gl===P.requestAnimationFrame||((gl=P.requestAnimationFrame)||Xp)(Qp)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Yr&&(n.__=n.__V),n.i=void 0,n.__V=Yr})),xs=te=null},P.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Jr),n.__h=n.__h.filter(function(r){return!r.__||oo(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],P.__e(r,n.__v)}}),bl&&bl(t,e)},P.unmount=function(t){yl&&yl(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Jr(r)}catch(i){e=i}}),n.__H=void 0,e&&P.__e(e,n.__v))};var Il=typeof requestAnimationFrame=="function";function Xp(t){var e,n=function(){clearTimeout(r),Il&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Il&&(e=requestAnimationFrame(n))}function Jr(t){var e=te,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),te=e}function oo(t){var e=te;t.__c=t.__(),te=e}function Bo(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Hu(t,e){return typeof e=="function"?e(t):e}function Gu(t,e){for(var n in e)t[n]=e[n];return t}function ao(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Rs(t,e){return t===e&&(t!==0||1/t==1/e)||t!=t&&e!=e}function lo(t){this.props=t}function Zp(t,e){function n(i){var s=this.props.ref,o=s==i.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,i)||!o:ao(this.props,i)}function r(i){return this.shouldComponentUpdate=n,ze(t,i)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(lo.prototype=new Ye).isPureReactComponent=!0,lo.prototype.shouldComponentUpdate=function(t,e){return ao(this.props,t)||ao(this.state,e)};var wl=P.__b;P.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),wl&&wl(t)};var eg=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Vu(t){function e(n){var r=Gu({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=eg,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var Cl=function(t,e){return t==null?null:Je(Je(t).map(e))},tg={map:Cl,forEach:Cl,count:function(t){return t?Je(t).length:0},only:function(t){var e=Je(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:Je},ng=P.__e;P.__e=function(t,e,n,r){if(t.then){for(var i,s=e;s=s.__;)if((i=s.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}ng(t,e,n,r)};var El=P.unmount;function qu(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Gu({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return qu(r,e,n)})),t}function zu(t,e,n){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return zu(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=n)),t}function Qr(){this.__u=0,this.t=null,this.__b=null}function ju(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function rg(t){var e,n,r;function i(s){if(e||(e=t()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw e;return ze(n,s)}return i.displayName="Lazy",i.__f=!0,i}function Bn(){this.u=null,this.o=null}P.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),El&&El(t)},(Qr.prototype=new Ye).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=ju(r.__v),s=!1,o=function(){s||(s=!0,n.__R=null,i?i(a):a())};n.__R=o;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=zu(c,c.__c.__P,c.__c.__O)}var u;for(r.setState({__a:r.__b=null});u=r.t.pop();)u.forceUpdate()}},l=e.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(o,o)},Qr.prototype.componentWillUnmount=function(){this.t=[]},Qr.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=qu(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__a&&ze(Ce,null,t.fallback);return i&&(i.__h=null),[ze(Ce,null,e.__a?null:t.children),i]};var Sl=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function ig(t){return this.getChildContext=function(){return t.context},t.children}function sg(t){var e=this,n=t.i;e.componentWillUnmount=function(){an(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),t.__v?(e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),an(ze(ig,{context:e.context},t.__v),e.l)):e.l&&e.componentWillUnmount()}function Uo(t,e){var n=ze(sg,{__v:t,i:e});return n.containerInfo=e,n}(Bn.prototype=new Ye).__a=function(t){var e=this,n=ju(e.__v),r=e.o.get(t);return r[0]++,function(i){var s=function(){e.props.revealOrder?(r.push(i),Sl(e,t,r)):i()};n?n(s):s()}},Bn.prototype.render=function(t){this.u=null,this.o=new Map;var e=Je(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},Bn.prototype.componentDidUpdate=Bn.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Sl(t,n,e)})};var Ku=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,og=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ag=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,lg=/[A-Z0-9]/g,cg=typeof document<"u",ug=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function dg(t,e,n){return e.__k==null&&(e.textContent=""),an(t,e),typeof n=="function"&&n(),t?t.__c:null}function hg(t,e,n){return Uu(t,e),typeof n=="function"&&n(),t?t.__c:null}Ye.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Ye.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Tl=P.event;function fg(){}function pg(){return this.cancelBubble}function gg(){return this.defaultPrevented}P.event=function(t){return Tl&&(t=Tl(t)),t.persist=fg,t.isPropagationStopped=pg,t.isDefaultPrevented=gg,t.nativeEvent=t};var Wo,vg={enumerable:!1,configurable:!0,get:function(){return this.class}},Dl=P.vnode;P.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,i={};for(var s in n){var o=n[s];if(!(s==="value"&&"defaultValue"in n&&o==null||cg&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var a=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&o===!0?o="":a==="ondoubleclick"?s="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||ug(n.type)?a==="onfocus"?s="onfocusin":a==="onblur"?s="onfocusout":ag.test(s)?s=a:r.indexOf("-")===-1&&og.test(s)?s=s.replace(lg,"-$&").toLowerCase():o===null&&(o=void 0):a=s="oninput",a==="oninput"&&i[s=a]&&(s="oninputCapture"),i[s]=o}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Je(n.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=Je(n.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",vg)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),e.props=i}(t),t.$$typeof=Ku,Dl&&Dl(t)};var xl=P.__r;P.__r=function(t){xl&&xl(t),Wo=t.__c};var Rl=P.diffed;P.diffed=function(t){Rl&&Rl(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Wo=null};var mg={ReactCurrentDispatcher:{current:{readContext:function(t){return Wo.__n[t.__c].props.value}}}};function _g(t){return ze.bind(null,t)}function Yu(t){return!!t&&t.$$typeof===Ku}function bg(t){return Yu(t)?Wu.apply(null,arguments):t}function yg(t){return!!t.__k&&(an(null,t),!0)}function Ig(t){return t&&(t.base||t.nodeType===1&&t)||null}var Ju=function(t,e){return t(e)},wg=function(t,e){return t(e)},Cg=Ce;function Qu(t){t()}function Eg(t){return t}function Sg(){return[!1,Qu]}var Tg=yn;function Dg(t,e){var n=e(),r=ie({h:{__:n,v:e}}),i=r[0].h,s=r[1];return yn(function(){i.__=n,i.v=e,Rs(i.__,e())||s({h:i})},[t,n,e]),_e(function(){return Rs(i.__,i.v())||s({h:i}),t(function(){Rs(i.__,i.v())||s({h:i})})},[t]),n}var Z={useState:ie,useId:Jp,useReducer:Fo,useEffect:_e,useLayoutEffect:yn,useInsertionEffect:Tg,useTransition:Sg,useDeferredValue:Eg,useSyncExternalStore:Dg,startTransition:Qu,useRef:$,useImperativeHandle:jp,useMemo:Pe,useCallback:Kp,useContext:Hi,useDebugValue:Yp,version:"17.0.2",Children:tg,render:dg,hydrate:hg,unmountComponentAtNode:yg,createPortal:Uo,createElement:ze,createContext:Hp,createFactory:_g,cloneElement:bg,createRef:Bp,Fragment:Ce,isValidElement:Yu,findDOMNode:Ig,Component:Ye,PureComponent:lo,memo:Zp,forwardRef:Vu,flushSync:wg,unstable_batchedUpdates:Ju,StrictMode:Cg,Suspense:Qr,SuspenseList:Bn,lazy:rg,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:mg};function co(t,e){return co=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},co(t,e)}function Xu(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,co(t,e)}function k(){return k=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},k.apply(this,arguments)}function Yn(t){"@babel/helpers - typeof";return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yn(t)}function xg(t,e){if(Yn(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Yn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Rg(t){var e=xg(t,"string");return Yn(e)==="symbol"?e:String(e)}function Pg(t,e,n){return e=Rg(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Al(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pl(Object(n),!0).forEach(function(r){Pg(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Te(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Nl=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Ps=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ol={INIT:"@@redux/INIT"+Ps(),REPLACE:"@@redux/REPLACE"+Ps(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Ps()}};function Ag(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Zu(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Te(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Te(1));return n(Zu)(t,e)}if(typeof t!="function")throw new Error(Te(2));var i=t,s=e,o=[],a=o,l=!1;function c(){a===o&&(a=o.slice())}function u(){if(l)throw new Error(Te(3));return s}function d(g){if(typeof g!="function")throw new Error(Te(4));if(l)throw new Error(Te(5));var v=!0;return c(),a.push(g),function(){if(v){if(l)throw new Error(Te(6));v=!1,c();var b=a.indexOf(g);a.splice(b,1),o=null}}}function h(g){if(!Ag(g))throw new Error(Te(7));if(typeof g.type>"u")throw new Error(Te(8));if(l)throw new Error(Te(9));try{l=!0,s=i(s,g)}finally{l=!1}for(var v=o=a,m=0;m<v.length;m++){var b=v[m];b()}return g}function f(g){if(typeof g!="function")throw new Error(Te(10));i=g,h({type:Ol.REPLACE})}function p(){var g,v=d;return g={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(Te(11));function I(){b.next&&b.next(u())}I();var y=v(I);return{unsubscribe:y}}},g[Nl]=function(){return this},g}return h({type:Ol.INIT}),r={dispatch:h,subscribe:d,getState:u,replaceReducer:f},r[Nl]=p,r}function kl(t,e){return function(){return e(t.apply(this,arguments))}}function Ml(t,e){if(typeof t=="function")return kl(t,e);if(typeof t!="object"||t===null)throw new Error(Te(16));var n={};for(var r in t){var i=t[r];typeof i=="function"&&(n[r]=kl(i,e))}return n}function ed(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function Ng(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(Te(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=ed.apply(void 0,a)(i.dispatch),Al(Al({},i),{},{dispatch:s})}}}function Og(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var td=Z.createContext(null);function kg(t){t()}var nd=kg,Mg=function(e){return nd=e},Lg=function(){return nd};function Fg(){var t=Lg(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],s=e;s;)i.push(s),s=s.next;return i},subscribe:function(i){var s=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!s||e===null||(s=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var Ll={notify:function(){},get:function(){return[]}};function rd(t,e){var n,r=Ll;function i(d){return l(),r.subscribe(d)}function s(){r.notify()}function o(){u.onStateChange&&u.onStateChange()}function a(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=Fg())}function c(){n&&(n(),n=void 0,r.clear(),r=Ll)}var u={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:c,getListeners:function(){return r}};return u}var id=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?yn:_e;function Bg(t){var e=t.store,n=t.context,r=t.children,i=Pe(function(){var a=rd(e);return{store:e,subscription:a}},[e]),s=Pe(function(){return e.getState()},[e]);id(function(){var a=i.subscription;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,s]);var o=n||td;return Z.createElement(o.Provider,{value:i},r)}function ai(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var sd={exports:{}},j={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe=typeof Symbol=="function"&&Symbol.for,$o=pe?Symbol.for("react.element"):60103,Ho=pe?Symbol.for("react.portal"):60106,Gi=pe?Symbol.for("react.fragment"):60107,Vi=pe?Symbol.for("react.strict_mode"):60108,qi=pe?Symbol.for("react.profiler"):60114,zi=pe?Symbol.for("react.provider"):60109,ji=pe?Symbol.for("react.context"):60110,Go=pe?Symbol.for("react.async_mode"):60111,Ki=pe?Symbol.for("react.concurrent_mode"):60111,Yi=pe?Symbol.for("react.forward_ref"):60112,Ji=pe?Symbol.for("react.suspense"):60113,Ug=pe?Symbol.for("react.suspense_list"):60120,Qi=pe?Symbol.for("react.memo"):60115,Xi=pe?Symbol.for("react.lazy"):60116,Wg=pe?Symbol.for("react.block"):60121,$g=pe?Symbol.for("react.fundamental"):60117,Hg=pe?Symbol.for("react.responder"):60118,Gg=pe?Symbol.for("react.scope"):60119;function ke(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case $o:switch(t=t.type,t){case Go:case Ki:case Gi:case qi:case Vi:case Ji:return t;default:switch(t=t&&t.$$typeof,t){case ji:case Yi:case Xi:case Qi:case zi:return t;default:return e}}case Ho:return e}}}function od(t){return ke(t)===Ki}j.AsyncMode=Go;j.ConcurrentMode=Ki;j.ContextConsumer=ji;j.ContextProvider=zi;j.Element=$o;j.ForwardRef=Yi;j.Fragment=Gi;j.Lazy=Xi;j.Memo=Qi;j.Portal=Ho;j.Profiler=qi;j.StrictMode=Vi;j.Suspense=Ji;j.isAsyncMode=function(t){return od(t)||ke(t)===Go};j.isConcurrentMode=od;j.isContextConsumer=function(t){return ke(t)===ji};j.isContextProvider=function(t){return ke(t)===zi};j.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o};j.isForwardRef=function(t){return ke(t)===Yi};j.isFragment=function(t){return ke(t)===Gi};j.isLazy=function(t){return ke(t)===Xi};j.isMemo=function(t){return ke(t)===Qi};j.isPortal=function(t){return ke(t)===Ho};j.isProfiler=function(t){return ke(t)===qi};j.isStrictMode=function(t){return ke(t)===Vi};j.isSuspense=function(t){return ke(t)===Ji};j.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Gi||t===Ki||t===qi||t===Vi||t===Ji||t===Ug||typeof t=="object"&&t!==null&&(t.$$typeof===Xi||t.$$typeof===Qi||t.$$typeof===zi||t.$$typeof===ji||t.$$typeof===Yi||t.$$typeof===$g||t.$$typeof===Hg||t.$$typeof===Gg||t.$$typeof===Wg)};j.typeOf=ke;sd.exports=j;var Vg=sd.exports,Vo=Vg,qg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ad={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qo={};qo[Vo.ForwardRef]=jg;qo[Vo.Memo]=ad;function Fl(t){return Vo.isMemo(t)?ad:qo[t.$$typeof]||qg}var Kg=Object.defineProperty,Yg=Object.getOwnPropertyNames,Bl=Object.getOwnPropertySymbols,Jg=Object.getOwnPropertyDescriptor,Qg=Object.getPrototypeOf,Ul=Object.prototype;function ld(t,e,n){if(typeof e!="string"){if(Ul){var r=Qg(e);r&&r!==Ul&&ld(t,r,n)}var i=Yg(e);Bl&&(i=i.concat(Bl(e)));for(var s=Fl(t),o=Fl(e),a=0;a<i.length;++a){var l=i[a];if(!zg[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=Jg(e,l);try{Kg(t,l,c)}catch{}}}}return t}var Xg=ld;const Wl=Og(Xg);var cd={exports:{}},Q={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zi=60103,es=60106,gr=60107,vr=60108,mr=60114,_r=60109,br=60110,yr=60112,Ir=60113,zo=60120,wr=60115,Cr=60116,ud=60121,dd=60122,hd=60117,fd=60129,pd=60131;if(typeof Symbol=="function"&&Symbol.for){var ge=Symbol.for;Zi=ge("react.element"),es=ge("react.portal"),gr=ge("react.fragment"),vr=ge("react.strict_mode"),mr=ge("react.profiler"),_r=ge("react.provider"),br=ge("react.context"),yr=ge("react.forward_ref"),Ir=ge("react.suspense"),zo=ge("react.suspense_list"),wr=ge("react.memo"),Cr=ge("react.lazy"),ud=ge("react.block"),dd=ge("react.server.block"),hd=ge("react.fundamental"),fd=ge("react.debug_trace_mode"),pd=ge("react.legacy_hidden")}function je(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Zi:switch(t=t.type,t){case gr:case mr:case vr:case Ir:case zo:return t;default:switch(t=t&&t.$$typeof,t){case br:case yr:case Cr:case wr:case _r:return t;default:return e}}case es:return e}}}var Zg=_r,ev=Zi,tv=yr,nv=gr,rv=Cr,iv=wr,sv=es,ov=mr,av=vr,lv=Ir;Q.ContextConsumer=br;Q.ContextProvider=Zg;Q.Element=ev;Q.ForwardRef=tv;Q.Fragment=nv;Q.Lazy=rv;Q.Memo=iv;Q.Portal=sv;Q.Profiler=ov;Q.StrictMode=av;Q.Suspense=lv;Q.isAsyncMode=function(){return!1};Q.isConcurrentMode=function(){return!1};Q.isContextConsumer=function(t){return je(t)===br};Q.isContextProvider=function(t){return je(t)===_r};Q.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zi};Q.isForwardRef=function(t){return je(t)===yr};Q.isFragment=function(t){return je(t)===gr};Q.isLazy=function(t){return je(t)===Cr};Q.isMemo=function(t){return je(t)===wr};Q.isPortal=function(t){return je(t)===es};Q.isProfiler=function(t){return je(t)===mr};Q.isStrictMode=function(t){return je(t)===vr};Q.isSuspense=function(t){return je(t)===Ir};Q.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===gr||t===mr||t===fd||t===vr||t===Ir||t===zo||t===pd||typeof t=="object"&&t!==null&&(t.$$typeof===Cr||t.$$typeof===wr||t.$$typeof===_r||t.$$typeof===br||t.$$typeof===yr||t.$$typeof===hd||t.$$typeof===ud||t[0]===dd)};Q.typeOf=je;cd.exports=Q;var cv=cd.exports,uv=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],dv=["reactReduxForwardedRef"],hv=[],fv=[null,null];function pv(t,e){var n=t[1];return[e.payload,n+1]}function $l(t,e,n){id(function(){return t.apply(void 0,e)},n)}function gv(t,e,n,r,i,s,o){t.current=r,e.current=i,n.current=!1,s.current&&(s.current=null,o())}function vv(t,e,n,r,i,s,o,a,l,c){if(t){var u=!1,d=null,h=function(){if(!u){var g=e.getState(),v,m;try{v=r(g,i.current)}catch(b){m=b,d=b}m||(d=null),v===s.current?o.current||l():(s.current=v,a.current=v,o.current=!0,c({type:"STORE_UPDATED",payload:{error:m}}))}};n.onStateChange=h,n.trySubscribe(),h();var f=function(){if(u=!0,n.tryUnsubscribe(),n.onStateChange=null,d)throw d};return f}}var mv=function(){return[null,0]};function _v(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,i=r===void 0?function(I){return"ConnectAdvanced("+I+")"}:r,s=n.methodName,o=s===void 0?"connectAdvanced":s,a=n.renderCountProp,l=a===void 0?void 0:a,c=n.shouldHandleStateChanges,u=c===void 0?!0:c,d=n.storeKey,h=d===void 0?"store":d;n.withRef;var f=n.forwardRef,p=f===void 0?!1:f,g=n.context,v=g===void 0?td:g,m=ai(n,uv),b=v;return function(y){var x=y.displayName||y.name||"Component",S=i(x),R=k({},m,{getDisplayName:i,methodName:o,renderCountProp:l,shouldHandleStateChanges:u,storeKey:h,displayName:S,wrappedComponentName:x,WrappedComponent:y}),N=m.pure;function O(E){return t(E.dispatch,R)}var K=N?Pe:function(E){return E()};function q(E){var T=Pe(function(){var Pn=E.reactReduxForwardedRef,Ds=ai(E,dv);return[E.context,Pn,Ds]},[E]),D=T[0],M=T[1],G=T[2],ne=Pe(function(){return D&&D.Consumer&&cv.isContextConsumer(Z.createElement(D.Consumer,null))?D:b},[D,b]),z=Hi(ne),se=!!E.store&&!!E.store.getState&&!!E.store.dispatch;z&&z.store;var le=se?E.store:z.store,dt=Pe(function(){return O(le)},[le]),Nt=Pe(function(){if(!u)return fv;var Pn=rd(le,se?null:z.subscription),Ds=Pn.notifyNestedSubs.bind(Pn);return[Pn,Ds]},[le,se,z]),We=Nt[0],ht=Nt[1],Br=Pe(function(){return se?z:k({},z,{subscription:We})},[se,z,We]),Ur=Fo(pv,hv,mv),ws=Ur[0],Qt=ws[0],Cs=Ur[1];if(Qt&&Qt.error)throw Qt.error;var ll=$(),Es=$(G),Wr=$(),cl=$(!1),Ss=K(function(){return Wr.current&&G===Es.current?Wr.current:dt(le.getState(),G)},[le,Qt,G]);$l(gv,[Es,ll,cl,G,Ss,Wr,ht]),$l(vv,[u,le,We,dt,Es,ll,cl,Wr,ht,Cs],[le,We,dt]);var Ts=Pe(function(){return Z.createElement(y,k({},Ss,{ref:M}))},[M,y,Ss]),Lp=Pe(function(){return u?Z.createElement(ne.Provider,{value:Br},Ts):Ts},[ne,Ts,Br]);return Lp}var Ee=N?Z.memo(q):q;if(Ee.WrappedComponent=y,Ee.displayName=q.displayName=S,p){var Se=Z.forwardRef(function(T,D){return Z.createElement(Ee,k({},T,{reactReduxForwardedRef:D}))});return Se.displayName=S,Se.WrappedComponent=y,Wl(Se,y)}return Wl(Ee,y)}}function Hl(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function As(t,e){if(Hl(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!Hl(t[n[i]],e[n[i]]))return!1;return!0}function bv(t,e){var n={},r=function(o){var a=t[o];typeof a=="function"&&(n[o]=function(){return e(a.apply(void 0,arguments))})};for(var i in t)r(i);return n}function jo(t){return function(n,r){var i=t(n,r);function s(){return i}return s.dependsOnOwnProps=!1,s}}function Gl(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function gd(t,e){return function(r,i){i.displayName;var s=function(a,l){return s.dependsOnOwnProps?s.mapToProps(a,l):s.mapToProps(a)};return s.dependsOnOwnProps=!0,s.mapToProps=function(a,l){s.mapToProps=t,s.dependsOnOwnProps=Gl(t);var c=s(a,l);return typeof c=="function"&&(s.mapToProps=c,s.dependsOnOwnProps=Gl(c),c=s(a,l)),c},s}}function yv(t){return typeof t=="function"?gd(t):void 0}function Iv(t){return t?void 0:jo(function(e){return{dispatch:e}})}function wv(t){return t&&typeof t=="object"?jo(function(e){return bv(t,e)}):void 0}const Cv=[yv,Iv,wv];function Ev(t){return typeof t=="function"?gd(t):void 0}function Sv(t){return t?void 0:jo(function(){return{}})}const Tv=[Ev,Sv];function Dv(t,e,n){return k({},n,t,e)}function xv(t){return function(n,r){r.displayName;var i=r.pure,s=r.areMergedPropsEqual,o=!1,a;return function(c,u,d){var h=t(c,u,d);return o?(!i||!s(h,a))&&(a=h):(o=!0,a=h),a}}}function Rv(t){return typeof t=="function"?xv(t):void 0}function Pv(t){return t?void 0:function(){return Dv}}const Av=[Rv,Pv];var Nv=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Ov(t,e,n,r){return function(s,o){return n(t(s,o),e(r,o),o)}}function kv(t,e,n,r,i){var s=i.areStatesEqual,o=i.areOwnPropsEqual,a=i.areStatePropsEqual,l=!1,c,u,d,h,f;function p(I,y){return c=I,u=y,d=t(c,u),h=e(r,u),f=n(d,h,u),l=!0,f}function g(){return d=t(c,u),e.dependsOnOwnProps&&(h=e(r,u)),f=n(d,h,u),f}function v(){return t.dependsOnOwnProps&&(d=t(c,u)),e.dependsOnOwnProps&&(h=e(r,u)),f=n(d,h,u),f}function m(){var I=t(c,u),y=!a(I,d);return d=I,y&&(f=n(d,h,u)),f}function b(I,y){var x=!o(y,u),S=!s(I,c,y,u);return c=I,u=y,x&&S?g():x?v():S?m():f}return function(y,x){return l?b(y,x):p(y,x)}}function Mv(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,i=e.initMergeProps,s=ai(e,Nv),o=n(t,s),a=r(t,s),l=i(t,s),c=s.pure?kv:Ov;return c(o,a,l,t,s)}var Lv=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Ns(t,e,n){for(var r=e.length-1;r>=0;r--){var i=e[r](t);if(i)return i}return function(s,o){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+o.wrappedComponentName+".")}}function Fv(t,e){return t===e}function Bv(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?_v:n,i=e.mapStateToPropsFactories,s=i===void 0?Tv:i,o=e.mapDispatchToPropsFactories,a=o===void 0?Cv:o,l=e.mergePropsFactories,c=l===void 0?Av:l,u=e.selectorFactory,d=u===void 0?Mv:u;return function(f,p,g,v){v===void 0&&(v={});var m=v,b=m.pure,I=b===void 0?!0:b,y=m.areStatesEqual,x=y===void 0?Fv:y,S=m.areOwnPropsEqual,R=S===void 0?As:S,N=m.areStatePropsEqual,O=N===void 0?As:N,K=m.areMergedPropsEqual,q=K===void 0?As:K,Ee=ai(m,Lv),Se=Ns(f,s,"mapStateToProps"),E=Ns(p,a,"mapDispatchToProps"),T=Ns(g,c,"mergeProps");return r(d,k({methodName:"connect",getDisplayName:function(M){return"Connect("+M+")"},shouldHandleStateChanges:!!f,initMapStateToProps:Se,initMapDispatchToProps:E,initMergeProps:T,pure:I,areStatesEqual:x,areOwnPropsEqual:R,areStatePropsEqual:O,areMergedPropsEqual:q},Ee))}}const vd=Bv();Mg(Ju);function Uv(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function md(t,e){var n=ie(function(){return{inputs:e,result:t()}})[0],r=$(!0),i=$(n),s=r.current||!!(e&&i.current.inputs&&Uv(e,i.current.inputs)),o=s?i.current:{inputs:e,result:t()};return _e(function(){r.current=!1,i.current=o},[o]),o.result}function Wv(t,e){return md(function(){return t},e)}var H=md,A=Wv,$v=!0,Os="Invariant failed";function Hv(t,e){if(!t){if($v)throw new Error(Os);var n=typeof e=="function"?e():e,r=n?"".concat(Os,": ").concat(n):Os;throw new Error(r)}}var He=function(e){var n=e.top,r=e.right,i=e.bottom,s=e.left,o=r-s,a=i-n,l={top:n,right:r,bottom:i,left:s,width:o,height:a,x:s,y:n,center:{x:(r+s)/2,y:(i+n)/2}};return l},Ko=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},Vl=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},Gv=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},ks={top:0,right:0,bottom:0,left:0},Yo=function(e){var n=e.borderBox,r=e.margin,i=r===void 0?ks:r,s=e.border,o=s===void 0?ks:s,a=e.padding,l=a===void 0?ks:a,c=He(Ko(n,i)),u=He(Vl(n,o)),d=He(Vl(u,l));return{marginBox:c,borderBox:He(n),paddingBox:u,contentBox:d,margin:i,border:o,padding:l}},Le=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var i=Number(n);return isNaN(i)&&Hv(!1),i},Vv=function(){return{x:window.pageXOffset,y:window.pageYOffset}},li=function(e,n){var r=e.borderBox,i=e.border,s=e.margin,o=e.padding,a=Gv(r,n);return Yo({borderBox:a,border:i,margin:s,padding:o})},ci=function(e,n){return n===void 0&&(n=Vv()),li(e,n)},_d=function(e,n){var r={top:Le(n.marginTop),right:Le(n.marginRight),bottom:Le(n.marginBottom),left:Le(n.marginLeft)},i={top:Le(n.paddingTop),right:Le(n.paddingRight),bottom:Le(n.paddingBottom),left:Le(n.paddingLeft)},s={top:Le(n.borderTopWidth),right:Le(n.borderRightWidth),bottom:Le(n.borderBottomWidth),left:Le(n.borderLeftWidth)};return Yo({borderBox:e,margin:r,padding:i,border:s})},bd=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return _d(n,r)},ql=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function qv(t,e){return!!(t===e||ql(t)&&ql(e))}function zv(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!qv(t[n],e[n]))return!1;return!0}function he(t,e){e===void 0&&(e=zv);var n,r=[],i,s=!1;function o(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return s&&n===this&&e(a,r)||(i=t.apply(this,a),s=!0,n=this,r=a),i}return o}var jv=function(e){var n=[],r=null,i=function(){for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];n=a,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return i.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},i};const Jn=jv;function yd(t,e){}yd.bind(null,"warn");yd.bind(null,"error");function mt(){}function Kv(t,e){return k({},t,{},e)}function Fe(t,e,n){var r=e.map(function(i){var s=Kv(n,i.options);return t.addEventListener(i.eventName,i.fn,s),function(){t.removeEventListener(i.eventName,i.fn,s)}});return function(){r.forEach(function(s){s()})}}var Yv="Invariant failed";function ui(t){this.message=t}ui.prototype.toString=function(){return this.message};function w(t,e){if(!t)throw new ui(Yv)}var Jv=function(t){Xu(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.callbacks=null,r.unbind=mt,r.onWindowError=function(a){var l=r.getCallbacks();l.isDragging()&&l.tryAbort();var c=a.error;c instanceof ui&&a.preventDefault()},r.getCallbacks=function(){if(!r.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return r.callbacks},r.setCallbacks=function(a){r.callbacks=a},r}var n=e.prototype;return n.componentDidMount=function(){this.unbind=Fe(window,[{eventName:"error",fn:this.onWindowError}])},n.componentDidCatch=function(i){if(i instanceof ui){this.setState({});return}throw i},n.componentWillUnmount=function(){this.unbind()},n.render=function(){return this.props.children(this.setCallbacks)},e}(Z.Component),Qv=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,di=function(e){return e+1},Xv=function(e){return`
  You have lifted an item in position `+di(e.source.index)+`
`},Id=function(e,n){var r=e.droppableId===n.droppableId,i=di(e.index),s=di(n.index);return r?`
      You have moved the item from position `+i+`
      to position `+s+`
    `:`
    You have moved the item from position `+i+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+s+`
  `},wd=function(e,n,r){var i=n.droppableId===r.droppableId;return i?`
      The item `+e+`
      has been combined with `+r.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+r.draggableId+`
      in list `+r.droppableId+`
    `},Zv=function(e){var n=e.destination;if(n)return Id(e.source,n);var r=e.combine;return r?wd(e.draggableId,e.source,r):"You are over an area that cannot be dropped on"},zl=function(e){return`
  The item has returned to its starting position
  of `+di(e.index)+`
`},em=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+zl(e.source)+`
    `;var n=e.destination,r=e.combine;return n?`
      You have dropped the item.
      `+Id(e.source,n)+`
    `:r?`
      You have dropped the item.
      `+wd(e.draggableId,e.source,r)+`
    `:`
    The item has been dropped while not over a drop area.
    `+zl(e.source)+`
  `},Xr={dragHandleUsageInstructions:Qv,onDragStart:Xv,onDragUpdate:Zv,onDragEnd:em},fe={x:0,y:0},me=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},Ae=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},_t=function(e,n){return e.x===n.x&&e.y===n.y},In=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},Gt=function(e,n,r){var i;return r===void 0&&(r=0),i={},i[e]=n,i[e==="x"?"y":"x"]=r,i},Qn=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},jl=function(e,n){return Math.min.apply(Math,n.map(function(r){return Qn(e,r)}))},Cd=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},tm=function(t,e){var n=He({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},Er=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},Kl=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},nm={top:0,right:0,bottom:0,left:0},rm=function(e,n){return n?Er(e,n.scroll.diff.displacement):e},im=function(e,n,r){if(r&&r.increasedBy){var i;return k({},e,(i={},i[n.end]=e[n.end]+r.increasedBy[n.line],i))}return e},sm=function(e,n){return n&&n.shouldClipSubject?tm(n.pageMarginBox,e):He(e)},cn=function(t){var e=t.page,n=t.withPlaceholder,r=t.axis,i=t.frame,s=rm(e.marginBox,i),o=im(s,r,n),a=sm(o,i);return{page:e,withPlaceholder:n,active:a}},Jo=function(t,e){t.frame||w(!1);var n=t.frame,r=Ae(e,n.scroll.initial),i=In(r),s=k({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:i},max:n.scroll.max}}),o=cn({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:s}),a=k({},t,{frame:s,subject:o});return a};function hi(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function Qo(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function Pt(t,e){if(t.find)return t.find(e);var n=Qo(t,e);if(n!==-1)return t[n]}function Ed(t){return Array.prototype.slice.call(t)}var Sd=he(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),Td=he(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),ts=he(function(t){return hi(t)}),om=he(function(t){return hi(t)}),wn=he(function(t,e){var n=om(e).filter(function(r){return t===r.descriptor.droppableId}).sort(function(r,i){return r.descriptor.index-i.descriptor.index});return n});function Xo(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function ns(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var rs=he(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),am=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.insideDestination,s=t.previousImpact;if(!r.isCombineEnabled)return null;var o=Xo(s);if(!o)return null;function a(g){var v={type:"COMBINE",combine:{draggableId:g,droppableId:r.descriptor.id}};return k({},s,{at:v})}var l=s.displaced.all,c=l.length?l[0]:null;if(e)return c?a(c):null;var u=rs(n,i);if(!c){if(!u.length)return null;var d=u[u.length-1];return a(d.descriptor.id)}var h=Qo(u,function(g){return g.descriptor.id===c});h===-1&&w(!1);var f=h-1;if(f<0)return null;var p=u[f];return a(p.descriptor.id)},Cn=function(t,e){return t.descriptor.droppableId===e.descriptor.id},Dd={point:fe,value:0},Xn={invisible:{},visible:{},all:[]},lm={displaced:Xn,displacedBy:Dd,at:null},Be=function(t,e){return function(n){return t<=n&&n<=e}},xd=function(t){var e=Be(t.top,t.bottom),n=Be(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);if(i)return!0;var s=e(r.top)||e(r.bottom),o=n(r.left)||n(r.right),a=s&&o;if(a)return!0;var l=r.top<t.top&&r.bottom>t.bottom,c=r.left<t.left&&r.right>t.right,u=l&&c;if(u)return!0;var d=l&&o||c&&s;return d}},cm=function(t){var e=Be(t.top,t.bottom),n=Be(t.left,t.right);return function(r){var i=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);return i}},Zo={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},Rd={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},um=function(t){return function(e){var n=Be(e.top,e.bottom),r=Be(e.left,e.right);return function(i){return t===Zo?n(i.top)&&n(i.bottom):r(i.left)&&r(i.right)}}},dm=function(e,n){var r=n.frame?n.frame.scroll.diff.displacement:fe;return Er(e,r)},hm=function(e,n,r){return n.subject.active?r(n.subject.active)(e):!1},fm=function(e,n,r){return r(n)(e)},ea=function(e){var n=e.target,r=e.destination,i=e.viewport,s=e.withDroppableDisplacement,o=e.isVisibleThroughFrameFn,a=s?dm(n,r):n;return hm(a,r,o)&&fm(a,i,o)},pm=function(e){return ea(k({},e,{isVisibleThroughFrameFn:xd}))},Pd=function(e){return ea(k({},e,{isVisibleThroughFrameFn:cm}))},gm=function(e){return ea(k({},e,{isVisibleThroughFrameFn:um(e.destination.axis)}))},vm=function(e,n,r){if(typeof r=="boolean")return r;if(!n)return!0;var i=n.invisible,s=n.visible;if(i[e])return!1;var o=s[e];return o?o.shouldAnimate:!0};function mm(t,e){var n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return He(Ko(n,r))}function Zn(t){var e=t.afterDragging,n=t.destination,r=t.displacedBy,i=t.viewport,s=t.forceShouldAnimate,o=t.last;return e.reduce(function(l,c){var u=mm(c,r),d=c.descriptor.id;l.all.push(d);var h=pm({target:u,destination:n,viewport:i,withDroppableDisplacement:!0});if(!h)return l.invisible[c.descriptor.id]=!0,l;var f=vm(d,o,s),p={draggableId:d,shouldAnimate:f};return l.visible[d]=p,l},{all:[],visible:{},invisible:{}})}function _m(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function Yl(t){var e=t.insideDestination,n=t.inHomeList,r=t.displacedBy,i=t.destination,s=_m(e,{inHomeList:n});return{displaced:Xn,displacedBy:r,at:{type:"REORDER",destination:{droppableId:i.descriptor.id,index:s}}}}function fi(t){var e=t.draggable,n=t.insideDestination,r=t.destination,i=t.viewport,s=t.displacedBy,o=t.last,a=t.index,l=t.forceShouldAnimate,c=Cn(e,r);if(a==null)return Yl({insideDestination:n,inHomeList:c,displacedBy:s,destination:r});var u=Pt(n,function(g){return g.descriptor.index===a});if(!u)return Yl({insideDestination:n,inHomeList:c,displacedBy:s,destination:r});var d=rs(e,n),h=n.indexOf(u),f=d.slice(h),p=Zn({afterDragging:f,destination:r,displacedBy:s,last:o,viewport:i.frame,forceShouldAnimate:l});return{displaced:p,displacedBy:s,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:a}}}}function Tt(t,e){return!!e.effected[t]}var bm=function(t){var e=t.isMovingForward,n=t.destination,r=t.draggables,i=t.combine,s=t.afterCritical;if(!n.isCombineEnabled)return null;var o=i.draggableId,a=r[o],l=a.descriptor.index,c=Tt(o,s);return c?e?l:l-1:e?l+1:l},ym=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.insideDestination,i=t.location;if(!r.length)return null;var s=i.index,o=e?s+1:s-1,a=r[0].descriptor.index,l=r[r.length-1].descriptor.index,c=n?l:l+1;return o<a||o>c?null:o},Im=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.draggable,i=t.draggables,s=t.destination,o=t.insideDestination,a=t.previousImpact,l=t.viewport,c=t.afterCritical,u=a.at;if(u||w(!1),u.type==="REORDER"){var d=ym({isMovingForward:e,isInHomeList:n,location:u.destination,insideDestination:o});return d==null?null:fi({draggable:r,insideDestination:o,destination:s,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:d})}var h=bm({isMovingForward:e,destination:s,displaced:a.displaced,draggables:i,combine:u.combine,afterCritical:c});return h==null?null:fi({draggable:r,insideDestination:o,destination:s,viewport:l,last:a.displaced,displacedBy:a.displacedBy,index:h})},wm=function(t){var e=t.displaced,n=t.afterCritical,r=t.combineWith,i=t.displacedBy,s=!!(e.visible[r]||e.invisible[r]);return Tt(r,n)?s?fe:In(i.point):s?i.point:fe},Cm=function(t){var e=t.afterCritical,n=t.impact,r=t.draggables,i=ns(n);i||w(!1);var s=i.draggableId,o=r[s].page.borderBox.center,a=wm({displaced:n.displaced,afterCritical:e,combineWith:s,displacedBy:n.displacedBy});return me(o,a)},Ad=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},Em=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},ta=function(e,n,r){return n[e.crossAxisStart]+r.margin[e.crossAxisStart]+r.borderBox[e.crossAxisSize]/2},Jl=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Gt(n.line,r.marginBox[n.end]+Ad(n,i),ta(n,r.marginBox,i))},Ql=function(e){var n=e.axis,r=e.moveRelativeTo,i=e.isMoving;return Gt(n.line,r.marginBox[n.start]-Em(n,i),ta(n,r.marginBox,i))},Sm=function(e){var n=e.axis,r=e.moveInto,i=e.isMoving;return Gt(n.line,r.contentBox[n.start]+Ad(n,i),ta(n,r.contentBox,i))},Tm=function(t){var e=t.impact,n=t.draggable,r=t.draggables,i=t.droppable,s=t.afterCritical,o=wn(i.descriptor.id,r),a=n.page,l=i.axis;if(!o.length)return Sm({axis:l,moveInto:i.page,isMoving:a});var c=e.displaced,u=e.displacedBy,d=c.all[0];if(d){var h=r[d];if(Tt(d,s))return Ql({axis:l,moveRelativeTo:h.page,isMoving:a});var f=li(h.page,u.point);return Ql({axis:l,moveRelativeTo:f,isMoving:a})}var p=o[o.length-1];if(p.descriptor.id===n.descriptor.id)return a.borderBox.center;if(Tt(p.descriptor.id,s)){var g=li(p.page,In(s.displacedBy.point));return Jl({axis:l,moveRelativeTo:g,isMoving:a})}return Jl({axis:l,moveRelativeTo:p.page,isMoving:a})},uo=function(t,e){var n=t.frame;return n?me(e,n.scroll.diff.displacement):e},Dm=function(e){var n=e.impact,r=e.draggable,i=e.droppable,s=e.draggables,o=e.afterCritical,a=r.page.borderBox.center,l=n.at;return!i||!l?a:l.type==="REORDER"?Tm({impact:n,draggable:r,draggables:s,droppable:i,afterCritical:o}):Cm({impact:n,draggables:s,afterCritical:o})},is=function(t){var e=Dm(t),n=t.droppable,r=n?uo(n,e):e;return r},Nd=function(t,e){var n=Ae(e,t.scroll.initial),r=In(n),i=He({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),s={frame:i,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}};return s};function Xl(t,e){return t.map(function(n){return e[n]})}function xm(t,e){for(var n=0;n<e.length;n++){var r=e[n].visible[t];if(r)return r}return null}var Rm=function(t){var e=t.impact,n=t.viewport,r=t.destination,i=t.draggables,s=t.maxScrollChange,o=Nd(n,me(n.scroll.current,s)),a=r.frame?Jo(r,me(r.frame.scroll.current,s)):r,l=e.displaced,c=Zn({afterDragging:Xl(l.all,i),destination:r,displacedBy:e.displacedBy,viewport:o.frame,last:l,forceShouldAnimate:!1}),u=Zn({afterDragging:Xl(l.all,i),destination:a,displacedBy:e.displacedBy,viewport:n.frame,last:l,forceShouldAnimate:!1}),d={},h={},f=[l,c,u];l.all.forEach(function(g){var v=xm(g,f);if(v){h[g]=v;return}d[g]=!0});var p=k({},e,{displaced:{all:l.all,invisible:d,visible:h}});return p},Pm=function(t,e){return me(t.scroll.diff.displacement,e)},na=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.viewport,i=Pm(r,e),s=Ae(i,n.page.borderBox.center);return me(n.client.borderBox.center,s)},Od=function(t){var e=t.draggable,n=t.destination,r=t.newPageBorderBoxCenter,i=t.viewport,s=t.withDroppableDisplacement,o=t.onlyOnMainAxis,a=o===void 0?!1:o,l=Ae(r,e.page.borderBox.center),c=Er(e.page.borderBox,l),u={target:c,destination:n,withDroppableDisplacement:s,viewport:i};return a?gm(u):Pd(u)},Am=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,i=t.draggables,s=t.previousImpact,o=t.viewport,a=t.previousPageBorderBoxCenter,l=t.previousClientSelection,c=t.afterCritical;if(!r.isEnabled)return null;var u=wn(r.descriptor.id,i),d=Cn(n,r),h=am({isMovingForward:e,draggable:n,destination:r,insideDestination:u,previousImpact:s})||Im({isMovingForward:e,isInHomeList:d,draggable:n,draggables:i,destination:r,insideDestination:u,previousImpact:s,viewport:o,afterCritical:c});if(!h)return null;var f=is({impact:h,draggable:n,droppable:r,draggables:i,afterCritical:c}),p=Od({draggable:n,destination:r,newPageBorderBoxCenter:f,viewport:o.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(p){var g=na({pageBorderBoxCenter:f,draggable:n,viewport:o});return{clientSelection:g,impact:h,scrollJumpRequest:null}}var v=Ae(f,a),m=Rm({impact:h,viewport:o,destination:r,draggables:i,maxScrollChange:v});return{clientSelection:l,impact:m,scrollJumpRequest:v}},Ie=function(e){var n=e.subject.active;return n||w(!1),n},Nm=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,r=t.source,i=t.droppables,s=t.viewport,o=r.subject.active;if(!o)return null;var a=r.axis,l=Be(o[a.start],o[a.end]),c=ts(i).filter(function(d){return d!==r}).filter(function(d){return d.isEnabled}).filter(function(d){return!!d.subject.active}).filter(function(d){return xd(s.frame)(Ie(d))}).filter(function(d){var h=Ie(d);return e?o[a.crossAxisEnd]<h[a.crossAxisEnd]:h[a.crossAxisStart]<o[a.crossAxisStart]}).filter(function(d){var h=Ie(d),f=Be(h[a.start],h[a.end]);return l(h[a.start])||l(h[a.end])||f(o[a.start])||f(o[a.end])}).sort(function(d,h){var f=Ie(d)[a.crossAxisStart],p=Ie(h)[a.crossAxisStart];return e?f-p:p-f}).filter(function(d,h,f){return Ie(d)[a.crossAxisStart]===Ie(f[0])[a.crossAxisStart]});if(!c.length)return null;if(c.length===1)return c[0];var u=c.filter(function(d){var h=Be(Ie(d)[a.start],Ie(d)[a.end]);return h(n[a.line])});return u.length===1?u[0]:u.length>1?u.sort(function(d,h){return Ie(d)[a.start]-Ie(h)[a.start]})[0]:c.sort(function(d,h){var f=jl(n,Kl(Ie(d))),p=jl(n,Kl(Ie(h)));return f!==p?f-p:Ie(d)[a.start]-Ie(h)[a.start]})[0]},Zl=function(e,n){var r=e.page.borderBox.center;return Tt(e.descriptor.id,n)?Ae(r,n.displacedBy.point):r},Om=function(e,n){var r=e.page.borderBox;return Tt(e.descriptor.id,n)?Er(r,In(n.displacedBy.point)):r},km=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,r=t.destination,i=t.insideDestination,s=t.afterCritical,o=i.filter(function(a){return Pd({target:Om(a,s),destination:r,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(a,l){var c=Qn(e,uo(r,Zl(a,s))),u=Qn(e,uo(r,Zl(l,s)));return c<u?-1:u<c?1:a.descriptor.index-l.descriptor.index});return o[0]||null},Sr=he(function(e,n){var r=n[e.line];return{value:r,point:Gt(e.line,r)}}),Mm=function(e,n,r){var i=e.axis;if(e.descriptor.mode==="virtual")return Gt(i.line,n[i.line]);var s=e.subject.page.contentBox[i.size],o=wn(e.descriptor.id,r),a=o.reduce(function(u,d){return u+d.client.marginBox[i.size]},0),l=a+n[i.line],c=l-s;return c<=0?null:Gt(i.line,c)},kd=function(e,n){return k({},e,{scroll:k({},e.scroll,{max:n})})},Md=function(e,n,r){var i=e.frame;Cn(n,e)&&w(!1),e.subject.withPlaceholder&&w(!1);var s=Sr(e.axis,n.displaceBy).point,o=Mm(e,s,r),a={placeholderSize:s,increasedBy:o,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!i){var l=cn({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:e.frame});return k({},e,{subject:l})}var c=o?me(i.scroll.max,o):i.scroll.max,u=kd(i,c),d=cn({page:e.subject.page,withPlaceholder:a,axis:e.axis,frame:u});return k({},e,{subject:d,frame:u})},Lm=function(e){var n=e.subject.withPlaceholder;n||w(!1);var r=e.frame;if(!r){var i=cn({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return k({},e,{subject:i})}var s=n.oldFrameMaxScroll;s||w(!1);var o=kd(r,s),a=cn({page:e.subject.page,axis:e.axis,frame:o,withPlaceholder:null});return k({},e,{subject:a,frame:o})},Fm=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,r=t.insideDestination,i=t.draggable,s=t.draggables,o=t.destination,a=t.viewport,l=t.afterCritical;if(!n){if(r.length)return null;var c={displaced:Xn,displacedBy:Dd,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:0}}},u=is({impact:c,draggable:i,droppable:o,draggables:s,afterCritical:l}),d=Cn(i,o)?o:Md(o,i,s),h=Od({draggable:i,destination:d,newPageBorderBoxCenter:u,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return h?c:null}var f=e[o.axis.line]<=n.page.borderBox.center[o.axis.line],p=function(){var v=n.descriptor.index;return n.descriptor.id===i.descriptor.id||f?v:v+1}(),g=Sr(o.axis,i.displaceBy);return fi({draggable:i,insideDestination:r,destination:o,viewport:a,displacedBy:g,last:Xn,index:p})},Bm=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,r=t.draggable,i=t.isOver,s=t.draggables,o=t.droppables,a=t.viewport,l=t.afterCritical,c=Nm({isMovingForward:e,pageBorderBoxCenter:n,source:i,droppables:o,viewport:a});if(!c)return null;var u=wn(c.descriptor.id,s),d=km({pageBorderBoxCenter:n,viewport:a,destination:c,insideDestination:u,afterCritical:l}),h=Fm({previousPageBorderBoxCenter:n,destination:c,draggable:r,draggables:s,moveRelativeTo:d,insideDestination:u,viewport:a,afterCritical:l});if(!h)return null;var f=is({impact:h,draggable:r,droppable:c,draggables:s,afterCritical:l}),p=na({pageBorderBoxCenter:f,draggable:r,viewport:a});return{clientSelection:p,impact:h,scrollJumpRequest:null}},Ne=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},Um=function(e,n){var r=Ne(e);return r?n[r]:null},Wm=function(t){var e=t.state,n=t.type,r=Um(e.impact,e.dimensions.droppables),i=!!r,s=e.dimensions.droppables[e.critical.droppable.id],o=r||s,a=o.axis.direction,l=a==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||a==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(l&&!i)return null;var c=n==="MOVE_DOWN"||n==="MOVE_RIGHT",u=e.dimensions.draggables[e.critical.draggable.id],d=e.current.page.borderBoxCenter,h=e.dimensions,f=h.draggables,p=h.droppables;return l?Am({isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,destination:o,draggables:f,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):Bm({isMovingForward:c,previousPageBorderBoxCenter:d,draggable:u,isOver:o,draggables:f,droppables:p,viewport:e.viewport,afterCritical:e.afterCritical})};function kt(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function Ld(t){var e=Be(t.top,t.bottom),n=Be(t.left,t.right);return function(i){return e(i.y)&&n(i.x)}}function $m(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function Hm(t){var e=t.pageBorderBox,n=t.draggable,r=t.candidates,i=n.page.borderBox.center,s=r.map(function(o){var a=o.axis,l=Gt(o.axis.line,e.center[a.line],o.page.borderBox.center[a.crossAxisLine]);return{id:o.descriptor.id,distance:Qn(i,l)}}).sort(function(o,a){return a.distance-o.distance});return s[0]?s[0].id:null}function Gm(t){var e=t.pageBorderBox,n=t.draggable,r=t.droppables,i=ts(r).filter(function(s){if(!s.isEnabled)return!1;var o=s.subject.active;if(!o||!$m(e,o))return!1;if(Ld(o)(e.center))return!0;var a=s.axis,l=o.center[a.crossAxisLine],c=e[a.crossAxisStart],u=e[a.crossAxisEnd],d=Be(o[a.crossAxisStart],o[a.crossAxisEnd]),h=d(c),f=d(u);return!h&&!f?!0:h?c<l:u>l});return i.length?i.length===1?i[0].descriptor.id:Hm({pageBorderBox:e,draggable:n,candidates:i}):null}var Fd=function(e,n){return He(Er(e,n))},Vm=function(t,e){var n=t.frame;return n?Fd(e,n.scroll.diff.value):e};function Bd(t){var e=t.displaced,n=t.id;return!!(e.visible[n]||e.invisible[n])}function qm(t){var e=t.draggable,n=t.closest,r=t.inHomeList;return n?r&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var zm=function(t){var e=t.pageBorderBoxWithDroppableScroll,n=t.draggable,r=t.destination,i=t.insideDestination,s=t.last,o=t.viewport,a=t.afterCritical,l=r.axis,c=Sr(r.axis,n.displaceBy),u=c.value,d=e[l.start],h=e[l.end],f=rs(n,i),p=Pt(f,function(v){var m=v.descriptor.id,b=v.page.borderBox.center[l.line],I=Tt(m,a),y=Bd({displaced:s,id:m});return I?y?h<=b:d<b-u:y?h<=b+u:d<b}),g=qm({draggable:n,closest:p,inHomeList:Cn(n,r)});return fi({draggable:n,insideDestination:i,destination:r,viewport:o,last:s,displacedBy:c,index:g})},jm=4,Km=function(t){var e=t.draggable,n=t.pageBorderBoxWithDroppableScroll,r=t.previousImpact,i=t.destination,s=t.insideDestination,o=t.afterCritical;if(!i.isCombineEnabled)return null;var a=i.axis,l=Sr(i.axis,e.displaceBy),c=l.value,u=n[a.start],d=n[a.end],h=rs(e,s),f=Pt(h,function(g){var v=g.descriptor.id,m=g.page.borderBox,b=m[a.size],I=b/jm,y=Tt(v,o),x=Bd({displaced:r.displaced,id:v});return y?x?d>m[a.start]+I&&d<m[a.end]-I:u>m[a.start]-c+I&&u<m[a.end]-c-I:x?d>m[a.start]+c+I&&d<m[a.end]+c-I:u>m[a.start]+I&&u<m[a.end]-I});if(!f)return null;var p={displacedBy:l,displaced:r.displaced,at:{type:"COMBINE",combine:{draggableId:f.descriptor.id,droppableId:i.descriptor.id}}};return p},Ud=function(t){var e=t.pageOffset,n=t.draggable,r=t.draggables,i=t.droppables,s=t.previousImpact,o=t.viewport,a=t.afterCritical,l=Fd(n.page.borderBox,e),c=Gm({pageBorderBox:l,draggable:n,droppables:i});if(!c)return lm;var u=i[c],d=wn(u.descriptor.id,r),h=Vm(u,l);return Km({pageBorderBoxWithDroppableScroll:h,draggable:n,previousImpact:s,destination:u,insideDestination:d,afterCritical:a})||zm({pageBorderBoxWithDroppableScroll:h,draggable:n,destination:u,insideDestination:d,last:s.displaced,viewport:o,afterCritical:a})},ra=function(t,e){var n;return k({},t,(n={},n[e.descriptor.id]=e,n))},Ym=function(e){var n=e.previousImpact,r=e.impact,i=e.droppables,s=Ne(n),o=Ne(r);if(!s||s===o)return i;var a=i[s];if(!a.subject.withPlaceholder)return i;var l=Lm(a);return ra(i,l)},Jm=function(t){var e=t.draggable,n=t.draggables,r=t.droppables,i=t.previousImpact,s=t.impact,o=Ym({previousImpact:i,impact:s,droppables:r}),a=Ne(s);if(!a)return o;var l=r[a];if(Cn(e,l)||l.subject.withPlaceholder)return o;var c=Md(l,e,n);return ra(o,c)},Wn=function(t){var e=t.state,n=t.clientSelection,r=t.dimensions,i=t.viewport,s=t.impact,o=t.scrollJumpRequest,a=i||e.viewport,l=r||e.dimensions,c=n||e.current.client.selection,u=Ae(c,e.initial.client.selection),d={offset:u,selection:c,borderBoxCenter:me(e.initial.client.borderBoxCenter,u)},h={selection:me(d.selection,a.scroll.current),borderBoxCenter:me(d.borderBoxCenter,a.scroll.current),offset:me(d.offset,a.scroll.diff.value)},f={client:d,page:h};if(e.phase==="COLLECTING")return k({phase:"COLLECTING"},e,{dimensions:l,viewport:a,current:f});var p=l.draggables[e.critical.draggable.id],g=s||Ud({pageOffset:h.offset,draggable:p,draggables:l.draggables,droppables:l.droppables,previousImpact:e.impact,viewport:a,afterCritical:e.afterCritical}),v=Jm({draggable:p,impact:g,previousImpact:e.impact,draggables:l.draggables,droppables:l.droppables}),m=k({},e,{current:f,dimensions:{draggables:l.draggables,droppables:v},impact:g,viewport:a,scrollJumpRequest:o||null,forceShouldAnimate:o?!1:null});return m};function Qm(t,e){return t.map(function(n){return e[n]})}var Wd=function(t){var e=t.impact,n=t.viewport,r=t.draggables,i=t.destination,s=t.forceShouldAnimate,o=e.displaced,a=Qm(o.all,r),l=Zn({afterDragging:a,destination:i,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:s,last:o});return k({},e,{displaced:l})},$d=function(t){var e=t.impact,n=t.draggable,r=t.droppable,i=t.draggables,s=t.viewport,o=t.afterCritical,a=is({impact:e,draggable:n,draggables:i,droppable:r,afterCritical:o});return na({pageBorderBoxCenter:a,draggable:n,viewport:s})},Hd=function(t){var e=t.state,n=t.dimensions,r=t.viewport;e.movementMode!=="SNAP"&&w(!1);var i=e.impact,s=r||e.viewport,o=n||e.dimensions,a=o.draggables,l=o.droppables,c=a[e.critical.draggable.id],u=Ne(i);u||w(!1);var d=l[u],h=Wd({impact:i,viewport:s,destination:d,draggables:a}),f=$d({impact:h,draggable:c,droppable:d,draggables:a,viewport:s,afterCritical:e.afterCritical});return Wn({impact:h,clientSelection:f,state:e,dimensions:o,viewport:s})},Xm=function(t){return{index:t.index,droppableId:t.droppableId}},Gd=function(t){var e=t.draggable,n=t.home,r=t.draggables,i=t.viewport,s=Sr(n.axis,e.displaceBy),o=wn(n.descriptor.id,r),a=o.indexOf(e);a===-1&&w(!1);var l=o.slice(a+1),c=l.reduce(function(f,p){return f[p.descriptor.id]=!0,f},{}),u={inVirtualList:n.descriptor.mode==="virtual",displacedBy:s,effected:c},d=Zn({afterDragging:l,destination:n,displacedBy:s,last:null,viewport:i.frame,forceShouldAnimate:!1}),h={displaced:d,displacedBy:s,at:{type:"REORDER",destination:Xm(e.descriptor)}};return{impact:h,afterCritical:u}},Zm=function(t,e){return{draggables:t.draggables,droppables:ra(t.droppables,e)}},e_=function(t){var e=t.draggable,n=t.offset,r=t.initialWindowScroll,i=li(e.client,n),s=ci(i,r),o=k({},e,{placeholder:k({},e.placeholder,{client:i}),client:i,page:s});return o},t_=function(t){var e=t.frame;return e||w(!1),e},n_=function(t){var e=t.additions,n=t.updatedDroppables,r=t.viewport,i=r.scroll.diff.value;return e.map(function(s){var o=s.descriptor.droppableId,a=n[o],l=t_(a),c=l.scroll.diff.value,u=me(i,c),d=e_({draggable:s,offset:u,initialWindowScroll:r.scroll.initial});return d})},r_=function(t){var e=t.state,n=t.published,r=n.modified.map(function(I){var y=e.dimensions.droppables[I.droppableId],x=Jo(y,I.scroll);return x}),i=k({},e.dimensions.droppables,{},Sd(r)),s=Td(n_({additions:n.additions,updatedDroppables:i,viewport:e.viewport})),o=k({},e.dimensions.draggables,{},s);n.removals.forEach(function(I){delete o[I]});var a={droppables:i,draggables:o},l=Ne(e.impact),c=l?a.droppables[l]:null,u=a.draggables[e.critical.draggable.id],d=a.droppables[e.critical.droppable.id],h=Gd({draggable:u,home:d,draggables:o,viewport:e.viewport}),f=h.impact,p=h.afterCritical,g=c&&c.isCombineEnabled?e.impact:f,v=Ud({pageOffset:e.current.page.offset,draggable:a.draggables[e.critical.draggable.id],draggables:a.draggables,droppables:a.droppables,previousImpact:g,viewport:e.viewport,afterCritical:p}),m=k({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:v,onLiftImpact:f,dimensions:a,afterCritical:p,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return m;var b=k({phase:"DROP_PENDING"},m,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return b},ho=function(e){return e.movementMode==="SNAP"},Ms=function(e,n,r){var i=Zm(e.dimensions,n);return!ho(e)||r?Wn({state:e,dimensions:i}):Hd({state:e,dimensions:i})};function Ls(t){return t.isDragging&&t.movementMode==="SNAP"?k({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var ec={phase:"IDLE",completed:null,shouldFlush:!1},i_=function(t,e){if(t===void 0&&(t=ec),e.type==="FLUSH")return k({},ec,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&w(!1);var n=e.payload,r=n.critical,i=n.clientSelection,s=n.viewport,o=n.dimensions,a=n.movementMode,l=o.draggables[r.draggable.id],c=o.droppables[r.droppable.id],u={selection:i,borderBoxCenter:l.client.borderBox.center,offset:fe},d={client:u,page:{selection:me(u.selection,s.scroll.initial),borderBoxCenter:me(u.selection,s.scroll.initial),offset:me(u.selection,s.scroll.diff.value)}},h=ts(o.droppables).every(function(Cs){return!Cs.isFixedOnPage}),f=Gd({draggable:l,home:c,draggables:o.draggables,viewport:s}),p=f.impact,g=f.afterCritical,v={phase:"DRAGGING",isDragging:!0,critical:r,movementMode:a,dimensions:o,initial:d,current:d,isWindowScrollAllowed:h,impact:p,afterCritical:g,onLiftImpact:p,viewport:s,scrollJumpRequest:null,forceShouldAnimate:null};return v}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&w(!1);var m=k({phase:"COLLECTING"},t,{phase:"COLLECTING"});return m}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||w(!1),r_({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;kt(t)||w(!1);var b=e.payload.client;return _t(b,t.current.client.selection)?t:Wn({state:t,clientSelection:b,impact:ho(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return Ls(t);kt(t)||w(!1);var I=e.payload,y=I.id,x=I.newScroll,S=t.dimensions.droppables[y];if(!S)return t;var R=Jo(S,x);return Ms(t,R,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;kt(t)||w(!1);var N=e.payload,O=N.id,K=N.isEnabled,q=t.dimensions.droppables[O];q||w(!1),q.isEnabled===K&&w(!1);var Ee=k({},q,{isEnabled:K});return Ms(t,Ee,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;kt(t)||w(!1);var Se=e.payload,E=Se.id,T=Se.isCombineEnabled,D=t.dimensions.droppables[E];D||w(!1),D.isCombineEnabled===T&&w(!1);var M=k({},D,{isCombineEnabled:T});return Ms(t,M,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;kt(t)||w(!1),t.isWindowScrollAllowed||w(!1);var G=e.payload.newScroll;if(_t(t.viewport.scroll.current,G))return Ls(t);var ne=Nd(t.viewport,G);return ho(t)?Hd({state:t,viewport:ne}):Wn({state:t,viewport:ne})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!kt(t))return t;var z=e.payload.maxScroll;if(_t(z,t.viewport.scroll.max))return t;var se=k({},t.viewport,{scroll:k({},t.viewport.scroll,{max:z})});return k({phase:"DRAGGING"},t,{viewport:se})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&w(!1);var le=Wm({state:t,type:e.type});return le?Wn({state:t,impact:le.impact,clientSelection:le.clientSelection,scrollJumpRequest:le.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var dt=e.payload.reason;t.phase!=="COLLECTING"&&w(!1);var Nt=k({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:dt});return Nt}if(e.type==="DROP_ANIMATE"){var We=e.payload,ht=We.completed,Br=We.dropDuration,Ur=We.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||w(!1);var ws={phase:"DROP_ANIMATING",completed:ht,dropDuration:Br,newHomeClientOffset:Ur,dimensions:t.dimensions};return ws}if(e.type==="DROP_COMPLETE"){var Qt=e.payload.completed;return{phase:"IDLE",completed:Qt,shouldFlush:!1}}return t},s_=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},o_=function(e){return{type:"LIFT",payload:e}},a_=function(e){return{type:"INITIAL_PUBLISH",payload:e}},l_=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},c_=function(){return{type:"COLLECTION_STARTING",payload:null}},u_=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},d_=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},h_=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},Vd=function(e){return{type:"MOVE",payload:e}},f_=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},p_=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},g_=function(){return{type:"MOVE_UP",payload:null}},v_=function(){return{type:"MOVE_DOWN",payload:null}},m_=function(){return{type:"MOVE_RIGHT",payload:null}},__=function(){return{type:"MOVE_LEFT",payload:null}},ia=function(){return{type:"FLUSH",payload:null}},b_=function(e){return{type:"DROP_ANIMATE",payload:e}},sa=function(e){return{type:"DROP_COMPLETE",payload:e}},qd=function(e){return{type:"DROP",payload:e}},y_=function(e){return{type:"DROP_PENDING",payload:e}},zd=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},I_=function(t){return function(e){var n=e.getState,r=e.dispatch;return function(i){return function(s){if(s.type!=="LIFT"){i(s);return}var o=s.payload,a=o.id,l=o.clientSelection,c=o.movementMode,u=n();u.phase==="DROP_ANIMATING"&&r(sa({completed:u.completed})),n().phase!=="IDLE"&&w(!1),r(ia()),r(s_({draggableId:a,movementMode:c}));var d={shouldPublishImmediately:c==="SNAP"},h={draggableId:a,scrollOptions:d},f=t.startPublishing(h),p=f.critical,g=f.dimensions,v=f.viewport;r(a_({critical:p,dimensions:g,clientSelection:l,movementMode:c,viewport:v}))}}}},w_=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},oa={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},er={opacity:{drop:0,combining:.7},scale:{drop:.75}},aa={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Ot=aa.outOfTheWay+"s "+oa.outOfTheWay,$n={fluid:"opacity "+Ot,snap:"transform "+Ot+", opacity "+Ot,drop:function(e){var n=e+"s "+oa.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+Ot,placeholder:"height "+Ot+", width "+Ot+", margin "+Ot},tc=function(e){return _t(e,fe)?null:"translate("+e.x+"px, "+e.y+"px)"},fo={moveTo:tc,drop:function(e,n){var r=tc(e);return r?n?r+" scale("+er.scale.drop+")":r:null}},po=aa.minDropTime,jd=aa.maxDropTime,C_=jd-po,nc=1500,E_=.6,S_=function(t){var e=t.current,n=t.destination,r=t.reason,i=Qn(e,n);if(i<=0)return po;if(i>=nc)return jd;var s=i/nc,o=po+C_*s,a=r==="CANCEL"?o*E_:o;return Number(a.toFixed(2))},T_=function(t){var e=t.impact,n=t.draggable,r=t.dimensions,i=t.viewport,s=t.afterCritical,o=r.draggables,a=r.droppables,l=Ne(e),c=l?a[l]:null,u=a[n.descriptor.droppableId],d=$d({impact:e,draggable:n,draggables:o,afterCritical:s,droppable:c||u,viewport:i}),h=Ae(d,n.client.borderBox.center);return h},D_=function(t){var e=t.draggables,n=t.reason,r=t.lastImpact,i=t.home,s=t.viewport,o=t.onLiftImpact;if(!r.at||n!=="DROP"){var a=Wd({draggables:e,impact:o,destination:i,viewport:s,forceShouldAnimate:!0});return{impact:a,didDropInsideDroppable:!1}}if(r.at.type==="REORDER")return{impact:r,didDropInsideDroppable:!0};var l=k({},r,{displaced:Xn});return{impact:l,didDropInsideDroppable:!0}},x_=function(t){var e=t.getState,n=t.dispatch;return function(r){return function(i){if(i.type!=="DROP"){r(i);return}var s=e(),o=i.payload.reason;if(s.phase==="COLLECTING"){n(y_({reason:o}));return}if(s.phase!=="IDLE"){var a=s.phase==="DROP_PENDING"&&s.isWaiting;a&&w(!1),s.phase==="DRAGGING"||s.phase==="DROP_PENDING"||w(!1);var l=s.critical,c=s.dimensions,u=c.draggables[s.critical.draggable.id],d=D_({reason:o,lastImpact:s.impact,afterCritical:s.afterCritical,onLiftImpact:s.onLiftImpact,home:s.dimensions.droppables[s.critical.droppable.id],viewport:s.viewport,draggables:s.dimensions.draggables}),h=d.impact,f=d.didDropInsideDroppable,p=f?Xo(h):null,g=f?ns(h):null,v={index:l.draggable.index,droppableId:l.droppable.id},m={draggableId:u.descriptor.id,type:u.descriptor.type,source:v,reason:o,mode:s.movementMode,destination:p,combine:g},b=T_({impact:h,draggable:u,dimensions:c,viewport:s.viewport,afterCritical:s.afterCritical}),I={critical:s.critical,afterCritical:s.afterCritical,result:m,impact:h},y=!_t(s.current.client.offset,b)||!!m.combine;if(!y){n(sa({completed:I}));return}var x=S_({current:s.current.client.offset,destination:b,reason:o}),S={newHomeClientOffset:b,dropDuration:x,completed:I};n(b_(S))}}}},Kd=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function R_(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function P_(t){var e=t.onWindowScroll;function n(){e(Kd())}var r=Jn(n),i=R_(r),s=mt;function o(){return s!==mt}function a(){o()&&w(!1),s=Fe(window,[i])}function l(){o()||w(!1),r.cancel(),s(),s=mt}return{start:a,stop:l,isActive:o}}var A_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},N_=function(t){var e=P_({onWindowScroll:function(r){t.dispatch(f_({newScroll:r}))}});return function(n){return function(r){!e.isActive()&&r.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&A_(r)&&e.stop(),n(r)}}},O_=function(t){var e=!1,n=!1,r=setTimeout(function(){n=!0}),i=function(o){e||n||(e=!0,t(o),clearTimeout(r))};return i.wasCalled=function(){return e},i},k_=function(){var t=[],e=function(s){var o=Qo(t,function(c){return c.timerId===s});o===-1&&w(!1);var a=t.splice(o,1),l=a[0];l.callback()},n=function(s){var o=setTimeout(function(){return e(o)}),a={timerId:o,callback:s};t.push(a)},r=function(){if(t.length){var s=[].concat(t);t.length=0,s.forEach(function(o){clearTimeout(o.timerId),o.callback()})}};return{add:n,flush:r}},M_=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},L_=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},F_=function(e,n){if(e===n)return!0;var r=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,i=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return r&&i},An=function(e,n){n()},Hr=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},Fs=function(e,n,r,i){if(!e){r(i(n));return}var s=O_(r),o={announce:s};e(n,o),s.wasCalled()||r(i(n))},B_=function(t,e){var n=k_(),r=null,i=function(h,f){r&&w(!1),An("onBeforeCapture",function(){var p=t().onBeforeCapture;if(p){var g={draggableId:h,mode:f};p(g)}})},s=function(h,f){r&&w(!1),An("onBeforeDragStart",function(){var p=t().onBeforeDragStart;p&&p(Hr(h,f))})},o=function(h,f){r&&w(!1);var p=Hr(h,f);r={mode:f,lastCritical:h,lastLocation:p.source,lastCombine:null},n.add(function(){An("onDragStart",function(){return Fs(t().onDragStart,p,e,Xr.onDragStart)})})},a=function(h,f){var p=Xo(f),g=ns(f);r||w(!1);var v=!F_(h,r.lastCritical);v&&(r.lastCritical=h);var m=!M_(r.lastLocation,p);m&&(r.lastLocation=p);var b=!L_(r.lastCombine,g);if(b&&(r.lastCombine=g),!(!v&&!m&&!b)){var I=k({},Hr(h,r.mode),{combine:g,destination:p});n.add(function(){An("onDragUpdate",function(){return Fs(t().onDragUpdate,I,e,Xr.onDragUpdate)})})}},l=function(){r||w(!1),n.flush()},c=function(h){r||w(!1),r=null,An("onDragEnd",function(){return Fs(t().onDragEnd,h,e,Xr.onDragEnd)})},u=function(){if(r){var h=k({},Hr(r.lastCritical,r.mode),{combine:null,destination:null,reason:"CANCEL"});c(h)}};return{beforeCapture:i,beforeStart:s,start:o,update:a,flush:l,drop:c,abort:u}},U_=function(t,e){var n=B_(t,e);return function(r){return function(i){return function(s){if(s.type==="BEFORE_INITIAL_CAPTURE"){n.beforeCapture(s.payload.draggableId,s.payload.movementMode);return}if(s.type==="INITIAL_PUBLISH"){var o=s.payload.critical;n.beforeStart(o,s.payload.movementMode),i(s),n.start(o,s.payload.movementMode);return}if(s.type==="DROP_COMPLETE"){var a=s.payload.completed.result;n.flush(),i(s),n.drop(a);return}if(i(s),s.type==="FLUSH"){n.abort();return}var l=r.getState();l.phase==="DRAGGING"&&n.update(l.critical,l.impact)}}}},W_=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var r=t.getState();r.phase!=="DROP_ANIMATING"&&w(!1),t.dispatch(sa({completed:r.completed}))}}},$_=function(t){var e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(i){return function(s){if((s.type==="FLUSH"||s.type==="DROP_COMPLETE"||s.type==="DROP_ANIMATION_FINISHED")&&r(),i(s),s.type==="DROP_ANIMATE"){var o={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var l=t.getState();l.phase==="DROP_ANIMATING"&&t.dispatch(zd())}};n=requestAnimationFrame(function(){n=null,e=Fe(window,[o])})}}}},H_=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},G_=function(t){var e=!1;return function(){return function(n){return function(r){if(r.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(r.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(r.type==="DROP_COMPLETE"){e=!1;var i=r.payload.completed.result;i.combine&&t.tryShiftRecord(i.draggableId,i.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},V_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},q_=function(t){return function(e){return function(n){return function(r){if(V_(r)){t.stop(),n(r);return}if(r.type==="INITIAL_PUBLISH"){n(r);var i=e.getState();i.phase!=="DRAGGING"&&w(!1),t.start(i);return}n(r),t.scroll(e.getState())}}}},z_=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(qd({reason:r.reason})))}}}},j_=ed,K_=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,r=t.styleMarshal,i=t.getResponders,s=t.announce,o=t.autoScroller;return Zu(i_,j_(Ng(w_(r),H_(e),I_(e),x_,W_,$_,z_,q_(o),N_,G_(n),U_(i,s))))},Bs=function(){return{additions:{},removals:{},modified:{}}};function Y_(t){var e=t.registry,n=t.callbacks,r=Bs(),i=null,s=function(){i||(n.collectionStarting(),i=requestAnimationFrame(function(){i=null;var u=r,d=u.additions,h=u.removals,f=u.modified,p=Object.keys(d).map(function(m){return e.draggable.getById(m).getDimension(fe)}).sort(function(m,b){return m.descriptor.index-b.descriptor.index}),g=Object.keys(f).map(function(m){var b=e.droppable.getById(m),I=b.callbacks.getScrollWhileDragging();return{droppableId:m,scroll:I}}),v={additions:p,removals:Object.keys(h),modified:g};r=Bs(),n.publish(v)}))},o=function(u){var d=u.descriptor.id;r.additions[d]=u,r.modified[u.descriptor.droppableId]=!0,r.removals[d]&&delete r.removals[d],s()},a=function(u){var d=u.descriptor;r.removals[d.id]=!0,r.modified[d.droppableId]=!0,r.additions[d.id]&&delete r.additions[d.id],s()},l=function(){i&&(cancelAnimationFrame(i),i=null,r=Bs())};return{add:o,remove:a,stop:l}}var Yd=function(t){var e=t.scrollHeight,n=t.scrollWidth,r=t.height,i=t.width,s=Ae({x:n,y:e},{x:i,y:r}),o={x:Math.max(0,s.x),y:Math.max(0,s.y)};return o},Jd=function(){var t=document.documentElement;return t||w(!1),t},Qd=function(){var t=Jd(),e=Yd({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},J_=function(){var t=Kd(),e=Qd(),n=t.y,r=t.x,i=Jd(),s=i.clientWidth,o=i.clientHeight,a=r+s,l=n+o,c=He({top:n,left:r,right:a,bottom:l}),u={frame:c,scroll:{initial:t,current:t,max:e,diff:{value:fe,displacement:fe}}};return u},Q_=function(t){var e=t.critical,n=t.scrollOptions,r=t.registry,i=J_(),s=i.scroll.current,o=e.droppable,a=r.droppable.getAllByType(o.type).map(function(d){return d.callbacks.getDimensionAndWatchScroll(s,n)}),l=r.draggable.getAllByType(e.draggable.type).map(function(d){return d.getDimension(s)}),c={draggables:Td(l),droppables:Sd(a)},u={dimensions:c,critical:e,viewport:i};return u};function rc(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var r=t.droppable.getById(n.descriptor.droppableId);return r.descriptor.mode==="virtual"}var X_=function(t,e){var n=null,r=Y_({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),i=function(f,p){t.droppable.exists(f)||w(!1),n&&e.updateDroppableIsEnabled({id:f,isEnabled:p})},s=function(f,p){n&&(t.droppable.exists(f)||w(!1),e.updateDroppableIsCombineEnabled({id:f,isCombineEnabled:p}))},o=function(f,p){n&&(t.droppable.exists(f)||w(!1),e.updateDroppableScroll({id:f,newScroll:p}))},a=function(f,p){n&&t.droppable.getById(f).callbacks.scroll(p)},l=function(){if(n){r.stop();var f=n.critical.droppable;t.droppable.getAllByType(f.type).forEach(function(p){return p.callbacks.dragStopped()}),n.unsubscribe(),n=null}},c=function(f){n||w(!1);var p=n.critical.draggable;f.type==="ADDITION"&&rc(t,p,f.value)&&r.add(f.value),f.type==="REMOVAL"&&rc(t,p,f.value)&&r.remove(f.value)},u=function(f){n&&w(!1);var p=t.draggable.getById(f.draggableId),g=t.droppable.getById(p.descriptor.droppableId),v={draggable:p.descriptor,droppable:g.descriptor},m=t.subscribe(c);return n={critical:v,unsubscribe:m},Q_({critical:v,registry:t,scrollOptions:f.scrollOptions})},d={updateDroppableIsEnabled:i,updateDroppableIsCombineEnabled:s,scrollDroppable:a,updateDroppableScroll:o,startPublishing:u,stopPublishing:l};return d},Xd=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},Z_=function(t){window.scrollBy(t.x,t.y)},eb=he(function(t){return ts(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),tb=function(e,n){var r=Pt(eb(n),function(i){return i.frame||w(!1),Ld(i.frame.pageMarginBox)(e)});return r},nb=function(t){var e=t.center,n=t.destination,r=t.droppables;if(n){var i=r[n];return i.frame?i:null}var s=tb(e,r);return s},bt={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},rb=function(t,e){var n=t[e.size]*bt.startFromPercentage,r=t[e.size]*bt.maxScrollAtPercentage,i={startScrollingFrom:n,maxScrollValueAt:r};return i},Zd=function(t){var e=t.startOfRange,n=t.endOfRange,r=t.current,i=n-e;if(i===0)return 0;var s=r-e,o=s/i;return o},la=1,ib=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return bt.maxPixelScroll;if(t===e.startScrollingFrom)return la;var n=Zd({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),r=1-n,i=bt.maxPixelScroll*bt.ease(r);return Math.ceil(i)},ic=bt.durationDampening.accelerateAt,sc=bt.durationDampening.stopDampeningAt,sb=function(t,e){var n=e,r=sc,i=Date.now(),s=i-n;if(s>=sc)return t;if(s<ic)return la;var o=Zd({startOfRange:ic,endOfRange:r,current:s}),a=t*bt.ease(o);return Math.ceil(a)},oc=function(t){var e=t.distanceToEdge,n=t.thresholds,r=t.dragStartTime,i=t.shouldUseTimeDampening,s=ib(e,n);return s===0?0:i?Math.max(sb(s,r),la):s},ac=function(t){var e=t.container,n=t.distanceToEdges,r=t.dragStartTime,i=t.axis,s=t.shouldUseTimeDampening,o=rb(e,i),a=n[i.end]<n[i.start];return a?oc({distanceToEdge:n[i.end],thresholds:o,dragStartTime:r,shouldUseTimeDampening:s}):-1*oc({distanceToEdge:n[i.start],thresholds:o,dragStartTime:r,shouldUseTimeDampening:s})},ob=function(t){var e=t.container,n=t.subject,r=t.proposedScroll,i=n.height>e.height,s=n.width>e.width;return!s&&!i?r:s&&i?null:{x:s?0:r.x,y:i?0:r.y}},ab=Cd(function(t){return t===0?0:t}),eh=function(t){var e=t.dragStartTime,n=t.container,r=t.subject,i=t.center,s=t.shouldUseTimeDampening,o={top:i.y-n.top,right:n.right-i.x,bottom:n.bottom-i.y,left:i.x-n.left},a=ac({container:n,distanceToEdges:o,dragStartTime:e,axis:Zo,shouldUseTimeDampening:s}),l=ac({container:n,distanceToEdges:o,dragStartTime:e,axis:Rd,shouldUseTimeDampening:s}),c=ab({x:l,y:a});if(_t(c,fe))return null;var u=ob({container:n,subject:r,proposedScroll:c});return u?_t(u,fe)?null:u:null},lb=Cd(function(t){return t===0?0:t>0?1:-1}),ca=function(){var t=function(n,r){return n<0?n:n>r?n-r:0};return function(e){var n=e.current,r=e.max,i=e.change,s=me(n,i),o={x:t(s.x,r.x),y:t(s.y,r.y)};return _t(o,fe)?null:o}}(),th=function(e){var n=e.max,r=e.current,i=e.change,s={x:Math.max(r.x,n.x),y:Math.max(r.y,n.y)},o=lb(i),a=ca({max:s,current:r,change:o});return!a||o.x!==0&&a.x===0||o.y!==0&&a.y===0},ua=function(e,n){return th({current:e.scroll.current,max:e.scroll.max,change:n})},cb=function(e,n){if(!ua(e,n))return null;var r=e.scroll.max,i=e.scroll.current;return ca({current:i,max:r,change:n})},da=function(e,n){var r=e.frame;return r?th({current:r.scroll.current,max:r.scroll.max,change:n}):!1},ub=function(e,n){var r=e.frame;return!r||!da(e,n)?null:ca({current:r.scroll.current,max:r.scroll.max,change:n})},db=function(t){var e=t.viewport,n=t.subject,r=t.center,i=t.dragStartTime,s=t.shouldUseTimeDampening,o=eh({dragStartTime:i,container:e.frame,subject:n,center:r,shouldUseTimeDampening:s});return o&&ua(e,o)?o:null},hb=function(t){var e=t.droppable,n=t.subject,r=t.center,i=t.dragStartTime,s=t.shouldUseTimeDampening,o=e.frame;if(!o)return null;var a=eh({dragStartTime:i,container:o.pageMarginBox,subject:n,center:r,shouldUseTimeDampening:s});return a&&da(e,a)?a:null},lc=function(t){var e=t.state,n=t.dragStartTime,r=t.shouldUseTimeDampening,i=t.scrollWindow,s=t.scrollDroppable,o=e.current.page.borderBoxCenter,a=e.dimensions.draggables[e.critical.draggable.id],l=a.page.marginBox;if(e.isWindowScrollAllowed){var c=e.viewport,u=db({dragStartTime:n,viewport:c,subject:l,center:o,shouldUseTimeDampening:r});if(u){i(u);return}}var d=nb({center:o,destination:Ne(e.impact),droppables:e.dimensions.droppables});if(d){var h=hb({dragStartTime:n,droppable:d,subject:l,center:o,shouldUseTimeDampening:r});h&&s(d.descriptor.id,h)}},fb=function(t){var e=t.scrollWindow,n=t.scrollDroppable,r=Jn(e),i=Jn(n),s=null,o=function(u){s||w(!1);var d=s,h=d.shouldUseTimeDampening,f=d.dragStartTime;lc({state:u,scrollWindow:r,scrollDroppable:i,dragStartTime:f,shouldUseTimeDampening:h})},a=function(u){s&&w(!1);var d=Date.now(),h=!1,f=function(){h=!0};lc({state:u,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:f,scrollDroppable:f}),s={dragStartTime:d,shouldUseTimeDampening:h},h&&o(u)},l=function(){s&&(r.cancel(),i.cancel(),s=null)};return{start:a,stop:l,scroll:o}},pb=function(t){var e=t.move,n=t.scrollDroppable,r=t.scrollWindow,i=function(c,u){var d=me(c.current.client.selection,u);e({client:d})},s=function(c,u){if(!da(c,u))return u;var d=ub(c,u);if(!d)return n(c.descriptor.id,u),null;var h=Ae(u,d);n(c.descriptor.id,h);var f=Ae(u,h);return f},o=function(c,u,d){if(!c||!ua(u,d))return d;var h=cb(u,d);if(!h)return r(d),null;var f=Ae(d,h);r(f);var p=Ae(d,f);return p},a=function(c){var u=c.scrollJumpRequest;if(u){var d=Ne(c.impact);d||w(!1);var h=s(c.dimensions.droppables[d],u);if(h){var f=c.viewport,p=o(c.isWindowScrollAllowed,f,h);p&&i(c,p)}}};return a},gb=function(t){var e=t.scrollDroppable,n=t.scrollWindow,r=t.move,i=fb({scrollWindow:n,scrollDroppable:e}),s=pb({move:r,scrollWindow:n,scrollDroppable:e}),o=function(c){if(c.phase==="DRAGGING"){if(c.movementMode==="FLUID"){i.scroll(c);return}c.scrollJumpRequest&&s(c)}},a={scroll:o,start:i.start,stop:i.stop};return a},un="data-rbd",dn=function(){var t=un+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),go=function(){var t=un+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),vb=function(){var t=un+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),cc={contextId:un+"-scroll-container-context-id"},mb=function(e){return function(n){return"["+n+'="'+e+'"]'}},Nn=function(e,n){return e.map(function(r){var i=r.styles[n];return i?r.selector+" { "+i+" }":""}).join(" ")},_b="pointer-events: none;",bb=function(t){var e=mb(t),n=function(){var a=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(dn.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:a,dragging:_b,dropAnimating:a}}}(),r=function(){var a=`
      transition: `+$n.outOfTheWay+`;
    `;return{selector:e(go.contextId),styles:{dragging:a,dropAnimating:a,userCancel:a}}}(),i={selector:e(vb.contextId),styles:{always:"overflow-anchor: none;"}},s={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},o=[r,n,i,s];return{always:Nn(o,"always"),resting:Nn(o,"resting"),dragging:Nn(o,"dragging"),dropAnimating:Nn(o,"dropAnimating"),userCancel:Nn(o,"userCancel")}},Oe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?yn:_e,Us=function(){var e=document.querySelector("head");return e||w(!1),e},uc=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function yb(t,e){var n=H(function(){return bb(t)},[t]),r=$(null),i=$(null),s=A(he(function(d){var h=i.current;h||w(!1),h.textContent=d}),[]),o=A(function(d){var h=r.current;h||w(!1),h.textContent=d},[]);Oe(function(){!r.current&&!i.current||w(!1);var d=uc(e),h=uc(e);return r.current=d,i.current=h,d.setAttribute(un+"-always",t),h.setAttribute(un+"-dynamic",t),Us().appendChild(d),Us().appendChild(h),o(n.always),s(n.resting),function(){var f=function(g){var v=g.current;v||w(!1),Us().removeChild(v),g.current=null};f(r),f(i)}},[e,o,s,n.always,n.resting,t]);var a=A(function(){return s(n.dragging)},[s,n.dragging]),l=A(function(d){if(d==="DROP"){s(n.dropAnimating);return}s(n.userCancel)},[s,n.dropAnimating,n.userCancel]),c=A(function(){i.current&&s(n.resting)},[s,n.resting]),u=H(function(){return{dragging:a,dropping:l,resting:c}},[a,l,c]);return u}var nh=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function ss(t){return t instanceof nh(t).HTMLElement}function Ib(t,e){var n="["+dn.contextId+'="'+t+'"]',r=Ed(document.querySelectorAll(n));if(!r.length)return null;var i=Pt(r,function(s){return s.getAttribute(dn.draggableId)===e});return!i||!ss(i)?null:i}function wb(t){var e=$({}),n=$(null),r=$(null),i=$(!1),s=A(function(h,f){var p={id:h,focus:f};return e.current[h]=p,function(){var v=e.current,m=v[h];m!==p&&delete v[h]}},[]),o=A(function(h){var f=Ib(t,h);f&&f!==document.activeElement&&f.focus()},[t]),a=A(function(h,f){n.current===h&&(n.current=f)},[]),l=A(function(){r.current||i.current&&(r.current=requestAnimationFrame(function(){r.current=null;var h=n.current;h&&o(h)}))},[o]),c=A(function(h){n.current=null;var f=document.activeElement;f&&f.getAttribute(dn.draggableId)===h&&(n.current=h)},[]);Oe(function(){return i.current=!0,function(){i.current=!1;var h=r.current;h&&cancelAnimationFrame(h)}},[]);var u=H(function(){return{register:s,tryRecordFocus:c,tryRestoreFocusRecorded:l,tryShiftRecord:a}},[s,c,l,a]);return u}function Cb(){var t={draggables:{},droppables:{}},e=[];function n(d){return e.push(d),function(){var f=e.indexOf(d);f!==-1&&e.splice(f,1)}}function r(d){e.length&&e.forEach(function(h){return h(d)})}function i(d){return t.draggables[d]||null}function s(d){var h=i(d);return h||w(!1),h}var o={register:function(h){t.draggables[h.descriptor.id]=h,r({type:"ADDITION",value:h})},update:function(h,f){var p=t.draggables[f.descriptor.id];p&&p.uniqueId===h.uniqueId&&(delete t.draggables[f.descriptor.id],t.draggables[h.descriptor.id]=h)},unregister:function(h){var f=h.descriptor.id,p=i(f);p&&h.uniqueId===p.uniqueId&&(delete t.draggables[f],r({type:"REMOVAL",value:h}))},getById:s,findById:i,exists:function(h){return!!i(h)},getAllByType:function(h){return hi(t.draggables).filter(function(f){return f.descriptor.type===h})}};function a(d){return t.droppables[d]||null}function l(d){var h=a(d);return h||w(!1),h}var c={register:function(h){t.droppables[h.descriptor.id]=h},unregister:function(h){var f=a(h.descriptor.id);f&&h.uniqueId===f.uniqueId&&delete t.droppables[h.descriptor.id]},getById:l,findById:a,exists:function(h){return!!a(h)},getAllByType:function(h){return hi(t.droppables).filter(function(f){return f.descriptor.type===h})}};function u(){t.draggables={},t.droppables={},e.length=0}return{draggable:o,droppable:c,subscribe:n,clean:u}}function Eb(){var t=H(Cb,[]);return _e(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var ha=Z.createContext(null),pi=function(){var t=document.body;return t||w(!1),t},Sb={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},Tb=function(e){return"rbd-announcement-"+e};function Db(t){var e=H(function(){return Tb(t)},[t]),n=$(null);_e(function(){var s=document.createElement("div");return n.current=s,s.id=e,s.setAttribute("aria-live","assertive"),s.setAttribute("aria-atomic","true"),k(s.style,Sb),pi().appendChild(s),function(){setTimeout(function(){var l=pi();l.contains(s)&&l.removeChild(s),s===n.current&&(n.current=null)})}},[e]);var r=A(function(i){var s=n.current;if(s){s.textContent=i;return}},[]);return r}var xb=0,Rb={separator:"::"};function fa(t,e){return e===void 0&&(e=Rb),H(function(){return""+t+e.separator+xb++},[e.separator,t])}function Pb(t){var e=t.contextId,n=t.uniqueId;return"rbd-hidden-text-"+e+"-"+n}function Ab(t){var e=t.contextId,n=t.text,r=fa("hidden-text",{separator:"-"}),i=H(function(){return Pb({contextId:e,uniqueId:r})},[r,e]);return _e(function(){var o=document.createElement("div");return o.id=i,o.textContent=n,o.style.display="none",pi().appendChild(o),function(){var l=pi();l.contains(o)&&l.removeChild(o)}},[i,n]),i}var os=Z.createContext(null);function rh(t){var e=$(t);return _e(function(){e.current=t}),e}function Nb(){var t=null;function e(){return!!t}function n(o){return o===t}function r(o){t&&w(!1);var a={abandon:o};return t=a,a}function i(){t||w(!1),t=null}function s(){t&&(t.abandon(),i())}return{isClaimed:e,isActive:n,claim:r,release:i,tryAbandon:s}}var Ob=9,kb=13,pa=27,ih=32,Mb=33,Lb=34,Fb=35,Bb=36,Ub=37,Wb=38,$b=39,Hb=40,Gr,Gb=(Gr={},Gr[kb]=!0,Gr[Ob]=!0,Gr),sh=function(t){Gb[t.keyCode]&&t.preventDefault()},as=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=Pt(e,function(r){return"on"+r in document});return n||t}(),oh=0,dc=5;function Vb(t,e){return Math.abs(e.x-t.x)>=dc||Math.abs(e.y-t.y)>=dc}var hc={type:"IDLE"};function qb(t){var e=t.cancel,n=t.completed,r=t.getPhase,i=t.setPhase;return[{eventName:"mousemove",fn:function(o){var a=o.button,l=o.clientX,c=o.clientY;if(a===oh){var u={x:l,y:c},d=r();if(d.type==="DRAGGING"){o.preventDefault(),d.actions.move(u);return}d.type!=="PENDING"&&w(!1);var h=d.point;if(Vb(h,u)){o.preventDefault();var f=d.actions.fluidLift(u);i({type:"DRAGGING",actions:f})}}}},{eventName:"mouseup",fn:function(o){var a=r();if(a.type!=="DRAGGING"){e();return}o.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(o){r().type==="DRAGGING"&&o.preventDefault(),e()}},{eventName:"keydown",fn:function(o){var a=r();if(a.type==="PENDING"){e();return}if(o.keyCode===pa){o.preventDefault(),e();return}sh(o)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){r().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(o){var a=r();if(a.type==="IDLE"&&w(!1),a.actions.shouldRespectForcePress()){e();return}o.preventDefault()}},{eventName:as,fn:e}]}function zb(t){var e=$(hc),n=$(mt),r=H(function(){return{eventName:"mousedown",fn:function(d){if(!d.defaultPrevented&&d.button===oh&&!(d.ctrlKey||d.metaKey||d.shiftKey||d.altKey)){var h=t.findClosestDraggableId(d);if(h){var f=t.tryGetLock(h,o,{sourceEvent:d});if(f){d.preventDefault();var p={x:d.clientX,y:d.clientY};n.current(),c(f,p)}}}}}},[t]),i=H(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(d){if(!d.defaultPrevented){var h=t.findClosestDraggableId(d);if(h){var f=t.findOptionsForDraggable(h);f&&(f.shouldRespectForcePress||t.canGetLock(h)&&d.preventDefault())}}}}},[t]),s=A(function(){var d={passive:!1,capture:!0};n.current=Fe(window,[i,r],d)},[i,r]),o=A(function(){var u=e.current;u.type!=="IDLE"&&(e.current=hc,n.current(),s())},[s]),a=A(function(){var u=e.current;o(),u.type==="DRAGGING"&&u.actions.cancel({shouldBlockNextClick:!0}),u.type==="PENDING"&&u.actions.abort()},[o]),l=A(function(){var d={capture:!0,passive:!1},h=qb({cancel:a,completed:o,getPhase:function(){return e.current},setPhase:function(p){e.current=p}});n.current=Fe(window,h,d)},[a,o]),c=A(function(d,h){e.current.type!=="IDLE"&&w(!1),e.current={type:"PENDING",point:h,actions:d},l()},[l]);Oe(function(){return s(),function(){n.current()}},[s])}var Xt;function jb(){}var Kb=(Xt={},Xt[Lb]=!0,Xt[Mb]=!0,Xt[Bb]=!0,Xt[Fb]=!0,Xt);function Yb(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:function(s){if(s.keyCode===pa){s.preventDefault(),n();return}if(s.keyCode===ih){s.preventDefault(),r();return}if(s.keyCode===Hb){s.preventDefault(),t.moveDown();return}if(s.keyCode===Wb){s.preventDefault(),t.moveUp();return}if(s.keyCode===$b){s.preventDefault(),t.moveRight();return}if(s.keyCode===Ub){s.preventDefault(),t.moveLeft();return}if(Kb[s.keyCode]){s.preventDefault();return}sh(s)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:as,fn:n}]}function Jb(t){var e=$(jb),n=H(function(){return{eventName:"keydown",fn:function(s){if(s.defaultPrevented||s.keyCode!==ih)return;var o=t.findClosestDraggableId(s);if(!o)return;var a=t.tryGetLock(o,u,{sourceEvent:s});if(!a)return;s.preventDefault();var l=!0,c=a.snapLift();e.current();function u(){l||w(!1),l=!1,e.current(),r()}e.current=Fe(window,Yb(c,u),{capture:!0,passive:!1})}}},[t]),r=A(function(){var s={passive:!1,capture:!0};e.current=Fe(window,[n],s)},[n]);Oe(function(){return r(),function(){e.current()}},[r])}var Ws={type:"IDLE"},Qb=120,Xb=.15;function Zb(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(i){i.preventDefault()}},{eventName:"keydown",fn:function(i){if(n().type!=="DRAGGING"){e();return}i.keyCode===pa&&i.preventDefault(),e()}},{eventName:as,fn:e}]}function ey(t){var e=t.cancel,n=t.completed,r=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(s){var o=r();if(o.type!=="DRAGGING"){e();return}o.hasMoved=!0;var a=s.touches[0],l=a.clientX,c=a.clientY,u={x:l,y:c};s.preventDefault(),o.actions.move(u)}},{eventName:"touchend",fn:function(s){var o=r();if(o.type!=="DRAGGING"){e();return}s.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(s){if(r().type!=="DRAGGING"){e();return}s.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(s){var o=r();o.type==="IDLE"&&w(!1);var a=s.touches[0];if(a){var l=a.force>=Xb;if(l){var c=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){c&&e();return}if(c){if(o.hasMoved){s.preventDefault();return}e();return}s.preventDefault()}}}},{eventName:as,fn:e}]}function ty(t){var e=$(Ws),n=$(mt),r=A(function(){return e.current},[]),i=A(function(f){e.current=f},[]),s=H(function(){return{eventName:"touchstart",fn:function(f){if(!f.defaultPrevented){var p=t.findClosestDraggableId(f);if(p){var g=t.tryGetLock(p,a,{sourceEvent:f});if(g){var v=f.touches[0],m=v.clientX,b=v.clientY,I={x:m,y:b};n.current(),d(g,I)}}}}}},[t]),o=A(function(){var f={capture:!0,passive:!1};n.current=Fe(window,[s],f)},[s]),a=A(function(){var h=e.current;h.type!=="IDLE"&&(h.type==="PENDING"&&clearTimeout(h.longPressTimerId),i(Ws),n.current(),o())},[o,i]),l=A(function(){var h=e.current;a(),h.type==="DRAGGING"&&h.actions.cancel({shouldBlockNextClick:!0}),h.type==="PENDING"&&h.actions.abort()},[a]),c=A(function(){var f={capture:!0,passive:!1},p={cancel:l,completed:a,getPhase:r},g=Fe(window,ey(p),f),v=Fe(window,Zb(p),f);n.current=function(){g(),v()}},[l,r,a]),u=A(function(){var f=r();f.type!=="PENDING"&&w(!1);var p=f.actions.fluidLift(f.point);i({type:"DRAGGING",actions:p,hasMoved:!1})},[r,i]),d=A(function(f,p){r().type!=="IDLE"&&w(!1);var g=setTimeout(u,Qb);i({type:"PENDING",point:p,actions:f,longPressTimerId:g}),c()},[c,r,i,u]);Oe(function(){return o(),function(){n.current();var p=r();p.type==="PENDING"&&(clearTimeout(p.longPressTimerId),i(Ws))}},[r,o,i]),Oe(function(){var f=Fe(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return f},[])}var ny={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function ah(t,e){if(e==null)return!1;var n=!!ny[e.tagName.toLowerCase()];if(n)return!0;var r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:ah(t,e.parentElement)}function ry(t,e){var n=e.target;return ss(n)?ah(t,n):!1}var iy=function(t){return He(t.getBoundingClientRect()).center};function sy(t){return t instanceof nh(t).Element}var oy=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=Pt(e,function(r){return r in Element.prototype});return n||t}();function lh(t,e){return t==null?null:t[oy](e)?t:lh(t.parentElement,e)}function ay(t,e){return t.closest?t.closest(e):lh(t,e)}function ly(t){return"["+dn.contextId+'="'+t+'"]'}function cy(t,e){var n=e.target;if(!sy(n))return null;var r=ly(t),i=ay(n,r);return!i||!ss(i)?null:i}function uy(t,e){var n=cy(t,e);return n?n.getAttribute(dn.draggableId):null}function dy(t,e){var n="["+go.contextId+'="'+t+'"]',r=Ed(document.querySelectorAll(n)),i=Pt(r,function(s){return s.getAttribute(go.id)===e});return!i||!ss(i)?null:i}function hy(t){t.preventDefault()}function Vr(t){var e=t.expected,n=t.phase,r=t.isLockActive;return t.shouldWarn,!(!r()||e!==n)}function ch(t){var e=t.lockAPI,n=t.store,r=t.registry,i=t.draggableId;if(e.isClaimed())return!1;var s=r.draggable.findById(i);return!(!s||!s.options.isEnabled||!Xd(n.getState(),i))}function fy(t){var e=t.lockAPI,n=t.contextId,r=t.store,i=t.registry,s=t.draggableId,o=t.forceSensorStop,a=t.sourceEvent,l=ch({lockAPI:e,store:r,registry:i,draggableId:s});if(!l)return null;var c=i.draggable.getById(s),u=dy(n,c.descriptor.id);if(!u||a&&!c.options.canDragInteractiveElements&&ry(u,a))return null;var d=e.claim(o||mt),h="PRE_DRAG";function f(){return c.options.shouldRespectForcePress}function p(){return e.isActive(d)}function g(S,R){Vr({expected:S,phase:h,isLockActive:p,shouldWarn:!0})&&r.dispatch(R())}var v=g.bind(null,"DRAGGING");function m(S){function R(){e.release(),h="COMPLETED"}h!=="PRE_DRAG"&&(R(),h!=="PRE_DRAG"&&w(!1)),r.dispatch(o_(S.liftActionArgs)),h="DRAGGING";function N(O,K){if(K===void 0&&(K={shouldBlockNextClick:!1}),S.cleanup(),K.shouldBlockNextClick){var q=Fe(window,[{eventName:"click",fn:hy,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(q)}R(),r.dispatch(qd({reason:O}))}return k({isActive:function(){return Vr({expected:"DRAGGING",phase:h,isLockActive:p,shouldWarn:!1})},shouldRespectForcePress:f,drop:function(K){return N("DROP",K)},cancel:function(K){return N("CANCEL",K)}},S.actions)}function b(S){var R=Jn(function(O){v(function(){return Vd({client:O})})}),N=m({liftActionArgs:{id:s,clientSelection:S,movementMode:"FLUID"},cleanup:function(){return R.cancel()},actions:{move:R}});return k({},N,{move:R})}function I(){var S={moveUp:function(){return v(g_)},moveRight:function(){return v(m_)},moveDown:function(){return v(v_)},moveLeft:function(){return v(__)}};return m({liftActionArgs:{id:s,clientSelection:iy(u),movementMode:"SNAP"},cleanup:mt,actions:S})}function y(){var S=Vr({expected:"PRE_DRAG",phase:h,isLockActive:p,shouldWarn:!0});S&&e.release()}var x={isActive:function(){return Vr({expected:"PRE_DRAG",phase:h,isLockActive:p,shouldWarn:!1})},shouldRespectForcePress:f,fluidLift:b,snapLift:I,abort:y};return x}var py=[zb,Jb,ty];function gy(t){var e=t.contextId,n=t.store,r=t.registry,i=t.customSensors,s=t.enableDefaultSensors,o=[].concat(s?py:[],i||[]),a=ie(function(){return Nb()})[0],l=A(function(b,I){b.isDragging&&!I.isDragging&&a.tryAbandon()},[a]);Oe(function(){var b=n.getState(),I=n.subscribe(function(){var y=n.getState();l(b,y),b=y});return I},[a,n,l]),Oe(function(){return a.tryAbandon},[a.tryAbandon]);for(var c=A(function(m){return ch({lockAPI:a,registry:r,store:n,draggableId:m})},[a,r,n]),u=A(function(m,b,I){return fy({lockAPI:a,registry:r,contextId:e,store:n,draggableId:m,forceSensorStop:b,sourceEvent:I&&I.sourceEvent?I.sourceEvent:null})},[e,a,r,n]),d=A(function(m){return uy(e,m)},[e]),h=A(function(m){var b=r.draggable.findById(m);return b?b.options:null},[r.draggable]),f=A(function(){a.isClaimed()&&(a.tryAbandon(),n.getState().phase!=="IDLE"&&n.dispatch(ia()))},[a,n]),p=A(a.isClaimed,[a]),g=H(function(){return{canGetLock:c,tryGetLock:u,findClosestDraggableId:d,findOptionsForDraggable:h,tryReleaseLock:f,isLockClaimed:p}},[c,u,d,h,f,p]),v=0;v<o.length;v++)o[v](g)}var vy=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function On(t){return t.current||w(!1),t.current}function my(t){var e=t.contextId,n=t.setCallbacks,r=t.sensors,i=t.nonce,s=t.dragHandleUsageInstructions,o=$(null),a=rh(t),l=A(function(){return vy(a.current)},[a]),c=Db(e),u=Ab({contextId:e,text:s}),d=yb(e,i),h=A(function(O){On(o).dispatch(O)},[]),f=H(function(){return Ml({publishWhileDragging:l_,updateDroppableScroll:u_,updateDroppableIsEnabled:d_,updateDroppableIsCombineEnabled:h_,collectionStarting:c_},h)},[h]),p=Eb(),g=H(function(){return X_(p,f)},[p,f]),v=H(function(){return gb(k({scrollWindow:Z_,scrollDroppable:g.scrollDroppable},Ml({move:Vd},h)))},[g.scrollDroppable,h]),m=wb(e),b=H(function(){return K_({announce:c,autoScroller:v,dimensionMarshal:g,focusMarshal:m,getResponders:l,styleMarshal:d})},[c,v,g,m,l,d]);o.current=b;var I=A(function(){var O=On(o),K=O.getState();K.phase!=="IDLE"&&O.dispatch(ia())},[]),y=A(function(){var O=On(o).getState();return O.isDragging||O.phase==="DROP_ANIMATING"},[]),x=H(function(){return{isDragging:y,tryAbort:I}},[y,I]);n(x);var S=A(function(O){return Xd(On(o).getState(),O)},[]),R=A(function(){return kt(On(o).getState())},[]),N=H(function(){return{marshal:g,focus:m,contextId:e,canLift:S,isMovementAllowed:R,dragHandleUsageInstructionsId:u,registry:p}},[e,g,u,m,S,R,p]);return gy({contextId:e,store:b,registry:p,customSensors:r,enableDefaultSensors:t.enableDefaultSensors!==!1}),_e(function(){return I},[I]),Z.createElement(os.Provider,{value:N},Z.createElement(Bg,{context:ha,store:b},t.children))}var _y=0;function by(){return H(function(){return""+_y++},[])}function yy(t){var e=by(),n=t.dragHandleUsageInstructions||Xr.dragHandleUsageInstructions;return Z.createElement(Jv,null,function(r){return Z.createElement(my,{nonce:t.nonce,contextId:e,setCallbacks:r,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var uh=function(e){return function(n){return e===n}},Iy=uh("scroll"),wy=uh("auto"),fc=function(e,n){return n(e.overflowX)||n(e.overflowY)},Cy=function(e){var n=window.getComputedStyle(e),r={overflowX:n.overflowX,overflowY:n.overflowY};return fc(r,Iy)||fc(r,wy)},Ey=function(){return!1},Sy=function t(e){return e==null?null:e===document.body?Ey()?e:null:e===document.documentElement?null:Cy(e)?e:t(e.parentElement)},vo=function(t){return{x:t.scrollLeft,y:t.scrollTop}},Ty=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},Dy=function(t){var e=Sy(t),n=Ty(t);return{closestScrollable:e,isFixedOnPage:n}},xy=function(t){var e=t.descriptor,n=t.isEnabled,r=t.isCombineEnabled,i=t.isFixedOnPage,s=t.direction,o=t.client,a=t.page,l=t.closest,c=function(){if(!l)return null;var f=l.scrollSize,p=l.client,g=Yd({scrollHeight:f.scrollHeight,scrollWidth:f.scrollWidth,height:p.paddingBox.height,width:p.paddingBox.width});return{pageMarginBox:l.page.marginBox,frameClient:p,scrollSize:f,shouldClipSubject:l.shouldClipSubject,scroll:{initial:l.scroll,current:l.scroll,max:g,diff:{value:fe,displacement:fe}}}}(),u=s==="vertical"?Zo:Rd,d=cn({page:a,withPlaceholder:null,axis:u,frame:c}),h={descriptor:e,isCombineEnabled:r,isFixedOnPage:i,axis:u,isEnabled:n,client:o,page:a,frame:c,subject:d};return h},Ry=function(e,n){var r=bd(e);if(!n||e!==n)return r;var i=r.paddingBox.top-n.scrollTop,s=r.paddingBox.left-n.scrollLeft,o=i+n.scrollHeight,a=s+n.scrollWidth,l={top:i,right:a,bottom:o,left:s},c=Ko(l,r.border),u=Yo({borderBox:c,margin:r.margin,border:r.border,padding:r.padding});return u},Py=function(t){var e=t.ref,n=t.descriptor,r=t.env,i=t.windowScroll,s=t.direction,o=t.isDropDisabled,a=t.isCombineEnabled,l=t.shouldClipSubject,c=r.closestScrollable,u=Ry(e,c),d=ci(u,i),h=function(){if(!c)return null;var p=bd(c),g={scrollHeight:c.scrollHeight,scrollWidth:c.scrollWidth};return{client:p,page:ci(p,i),scroll:vo(c),scrollSize:g,shouldClipSubject:l}}(),f=xy({descriptor:n,isEnabled:!o,isCombineEnabled:a,isFixedOnPage:r.isFixedOnPage,direction:s,client:u,page:d,closest:h});return f},Ay={passive:!1},Ny={passive:!0},pc=function(t){return t.shouldPublishImmediately?Ay:Ny};function gi(t){var e=Hi(t);return e||w(!1),e}var qr=function(e){return e&&e.env.closestScrollable||null};function Oy(t){var e=$(null),n=gi(os),r=fa("droppable"),i=n.registry,s=n.marshal,o=rh(t),a=H(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),l=$(a),c=H(function(){return he(function(y,x){e.current||w(!1);var S={x:y,y:x};s.updateDroppableScroll(a.id,S)})},[a.id,s]),u=A(function(){var y=e.current;return!y||!y.env.closestScrollable?fe:vo(y.env.closestScrollable)},[]),d=A(function(){var y=u();c(y.x,y.y)},[u,c]),h=H(function(){return Jn(d)},[d]),f=A(function(){var y=e.current,x=qr(y);y&&x||w(!1);var S=y.scrollOptions;if(S.shouldPublishImmediately){d();return}h()},[h,d]),p=A(function(y,x){e.current&&w(!1);var S=o.current,R=S.getDroppableRef();R||w(!1);var N=Dy(R),O={ref:R,descriptor:a,env:N,scrollOptions:x};e.current=O;var K=Py({ref:R,descriptor:a,env:N,windowScroll:y,direction:S.direction,isDropDisabled:S.isDropDisabled,isCombineEnabled:S.isCombineEnabled,shouldClipSubject:!S.ignoreContainerClipping}),q=N.closestScrollable;return q&&(q.setAttribute(cc.contextId,n.contextId),q.addEventListener("scroll",f,pc(O.scrollOptions))),K},[n.contextId,a,f,o]),g=A(function(){var y=e.current,x=qr(y);return y&&x||w(!1),vo(x)},[]),v=A(function(){var y=e.current;y||w(!1);var x=qr(y);e.current=null,x&&(h.cancel(),x.removeAttribute(cc.contextId),x.removeEventListener("scroll",f,pc(y.scrollOptions)))},[f,h]),m=A(function(y){var x=e.current;x||w(!1);var S=qr(x);S||w(!1),S.scrollTop+=y.y,S.scrollLeft+=y.x},[]),b=H(function(){return{getDimensionAndWatchScroll:p,getScrollWhileDragging:g,dragStopped:v,scroll:m}},[v,p,g,m]),I=H(function(){return{uniqueId:r,descriptor:a,callbacks:b}},[b,a,r]);Oe(function(){return l.current=I.descriptor,i.droppable.register(I),function(){e.current&&v(),i.droppable.unregister(I)}},[b,a,v,I,s,i.droppable]),Oe(function(){e.current&&s.updateDroppableIsEnabled(l.current.id,!t.isDropDisabled)},[t.isDropDisabled,s]),Oe(function(){e.current&&s.updateDroppableIsCombineEnabled(l.current.id,t.isCombineEnabled)},[t.isCombineEnabled,s])}function $s(){}var gc={width:0,height:0,margin:nm},ky=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate;return n||i==="close"?gc:{height:r.client.borderBox.height,width:r.client.borderBox.width,margin:r.client.margin}},My=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,i=e.animate,s=ky({isAnimatingOpenOnMount:n,placeholder:r,animate:i});return{display:r.display,boxSizing:"border-box",width:s.width,height:s.height,marginTop:s.margin.top,marginRight:s.margin.right,marginBottom:s.margin.bottom,marginLeft:s.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:i!=="none"?$n.placeholder:null}};function Ly(t){var e=$(null),n=A(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),r=t.animate,i=t.onTransitionEnd,s=t.onClose,o=t.contextId,a=ie(t.animate==="open"),l=a[0],c=a[1];_e(function(){return l?r!=="open"?(n(),c(!1),$s):e.current?$s:(e.current=setTimeout(function(){e.current=null,c(!1)}),n):$s},[r,l,n]);var u=A(function(h){h.propertyName==="height"&&(i(),r==="close"&&s())},[r,s,i]),d=My({isAnimatingOpenOnMount:l,animate:t.animate,placeholder:t.placeholder});return Z.createElement(t.placeholder.tagName,{style:d,"data-rbd-placeholder-context-id":o,onTransitionEnd:u,ref:t.innerRef})}var Fy=Z.memo(Ly),ga=Z.createContext(null),By=function(t){Xu(e,t);function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=t.call.apply(t,[this].concat(s))||this,r.state={isVisible:!!r.props.on,data:r.props.on,animate:r.props.shouldAnimate&&r.props.on?"open":"none"},r.onClose=function(){r.state.animate==="close"&&r.setState({isVisible:!1})},r}e.getDerivedStateFromProps=function(i,s){return i.shouldAnimate?i.on?{isVisible:!0,data:i.on,animate:"open"}:s.isVisible?{isVisible:!0,data:s.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!i.on,data:i.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var i={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(i)},e}(Z.PureComponent),vc={dragging:5e3,dropAnimating:4500},Uy=function(e,n){return n?$n.drop(n.duration):e?$n.snap:$n.fluid},Wy=function(e,n){return e?n?er.opacity.drop:er.opacity.combining:null},$y=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function Hy(t){var e=t.dimension,n=e.client,r=t.offset,i=t.combineWith,s=t.dropping,o=!!i,a=$y(t),l=!!s,c=l?fo.drop(r,o):fo.moveTo(r),u={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:Uy(a,s),transform:c,opacity:Wy(o,l),zIndex:l?vc.dropAnimating:vc.dragging,pointerEvents:"none"};return u}function Gy(t){return{transform:fo.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function Vy(t){return t.type==="DRAGGING"?Hy(t):Gy(t)}function qy(t,e,n){n===void 0&&(n=fe);var r=window.getComputedStyle(e),i=e.getBoundingClientRect(),s=_d(i,r),o=ci(s,n),a={client:s,tagName:e.tagName.toLowerCase(),display:r.display},l={x:s.marginBox.width,y:s.marginBox.height},c={descriptor:t,placeholder:a,displaceBy:l,client:s,page:o};return c}function zy(t){var e=fa("draggable"),n=t.descriptor,r=t.registry,i=t.getDraggableRef,s=t.canDragInteractiveElements,o=t.shouldRespectForcePress,a=t.isEnabled,l=H(function(){return{canDragInteractiveElements:s,shouldRespectForcePress:o,isEnabled:a}},[s,a,o]),c=A(function(f){var p=i();return p||w(!1),qy(n,p,f)},[n,i]),u=H(function(){return{uniqueId:e,descriptor:n,options:l,getDimension:c}},[n,c,l,e]),d=$(u),h=$(!0);Oe(function(){return r.draggable.register(d.current),function(){return r.draggable.unregister(d.current)}},[r.draggable]),Oe(function(){if(h.current){h.current=!1;return}var f=d.current;d.current=u,r.draggable.update(u,f)},[u,r.draggable])}function jy(t){t.preventDefault()}function Ky(t){var e=$(null),n=A(function(O){e.current=O},[]),r=A(function(){return e.current},[]),i=gi(os),s=i.contextId,o=i.dragHandleUsageInstructionsId,a=i.registry,l=gi(ga),c=l.type,u=l.droppableId,d=H(function(){return{id:t.draggableId,index:t.index,type:c,droppableId:u}},[t.draggableId,t.index,c,u]),h=t.children,f=t.draggableId,p=t.isEnabled,g=t.shouldRespectForcePress,v=t.canDragInteractiveElements,m=t.isClone,b=t.mapped,I=t.dropAnimationFinished;if(!m){var y=H(function(){return{descriptor:d,registry:a,getDraggableRef:r,canDragInteractiveElements:v,shouldRespectForcePress:g,isEnabled:p}},[d,a,r,v,g,p]);zy(y)}var x=H(function(){return p?{tabIndex:0,role:"button","aria-describedby":o,"data-rbd-drag-handle-draggable-id":f,"data-rbd-drag-handle-context-id":s,draggable:!1,onDragStart:jy}:null},[s,o,f,p]),S=A(function(O){b.type==="DRAGGING"&&b.dropping&&O.propertyName==="transform"&&I()},[I,b]),R=H(function(){var O=Vy(b),K=b.type==="DRAGGING"&&b.dropping?S:null,q={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":s,"data-rbd-draggable-id":f,style:O,onTransitionEnd:K},dragHandleProps:x};return q},[s,x,f,b,S,n]),N=H(function(){return{draggableId:d.id,type:d.type,source:{index:d.index,droppableId:d.droppableId}}},[d.droppableId,d.id,d.index,d.type]);return h(R,b.snapshot,N)}var dh=function(t,e){return t===e},hh=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},Yy=function(e){return e.combine?e.combine.draggableId:null},Jy=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function Qy(){var t=he(function(i,s){return{x:i,y:s}}),e=he(function(i,s,o,a,l){return{isDragging:!0,isClone:s,isDropAnimating:!!l,dropAnimation:l,mode:i,draggingOver:o,combineWith:a,combineTargetFor:null}}),n=he(function(i,s,o,a,l,c,u){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:l,combineWith:c,mode:s,offset:i,dimension:o,forceShouldAnimate:u,snapshot:e(s,a,l,c,null)}}}),r=function(s,o){if(s.isDragging){if(s.critical.draggable.id!==o.draggableId)return null;var a=s.current.client.offset,l=s.dimensions.draggables[o.draggableId],c=Ne(s.impact),u=Jy(s.impact),d=s.forceShouldAnimate;return n(t(a.x,a.y),s.movementMode,l,o.isClone,c,u,d)}if(s.phase==="DROP_ANIMATING"){var h=s.completed;if(h.result.draggableId!==o.draggableId)return null;var f=o.isClone,p=s.dimensions.draggables[o.draggableId],g=h.result,v=g.mode,m=hh(g),b=Yy(g),I=s.dropDuration,y={duration:I,curve:oa.drop,moveTo:s.newHomeClientOffset,opacity:b?er.opacity.drop:null,scale:b?er.scale.drop:null};return{mapped:{type:"DRAGGING",offset:s.newHomeClientOffset,dimension:p,dropping:y,draggingOver:m,combineWith:b,mode:v,forceShouldAnimate:null,snapshot:e(v,f,m,b,y)}}}return null};return r}function fh(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var Xy={mapped:{type:"SECONDARY",offset:fe,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:fh(null)}};function Zy(){var t=he(function(o,a){return{x:o,y:a}}),e=he(fh),n=he(function(o,a,l){return a===void 0&&(a=null),{mapped:{type:"SECONDARY",offset:o,combineTargetFor:a,shouldAnimateDisplacement:l,snapshot:e(a)}}}),r=function(a){return a?n(fe,a,!0):null},i=function(a,l,c,u){var d=c.displaced.visible[a],h=!!(u.inVirtualList&&u.effected[a]),f=ns(c),p=f&&f.draggableId===a?l:null;if(!d){if(!h)return r(p);if(c.displaced.invisible[a])return null;var g=In(u.displacedBy.point),v=t(g.x,g.y);return n(v,p,!0)}if(h)return r(p);var m=c.displacedBy.point,b=t(m.x,m.y);return n(b,p,d.shouldAnimate)},s=function(a,l){if(a.isDragging)return a.critical.draggable.id===l.draggableId?null:i(l.draggableId,a.critical.draggable.id,a.impact,a.afterCritical);if(a.phase==="DROP_ANIMATING"){var c=a.completed;return c.result.draggableId===l.draggableId?null:i(l.draggableId,c.result.draggableId,c.impact,c.afterCritical)}return null};return s}var eI=function(){var e=Qy(),n=Zy(),r=function(s,o){return e(s,o)||n(s,o)||Xy};return r},tI={dropAnimationFinished:zd},nI=vd(eI,tI,null,{context:ha,pure:!0,areStatePropsEqual:dh})(Ky);function ph(t){var e=gi(ga),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:Z.createElement(nI,t)}function gh(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;return Z.createElement(ph,k({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}))}function rI(t){var e=Hi(os);e||w(!1);var n=e.contextId,r=e.isMovementAllowed,i=$(null),s=$(null),o=t.children,a=t.droppableId,l=t.type,c=t.mode,u=t.direction,d=t.ignoreContainerClipping,h=t.isDropDisabled,f=t.isCombineEnabled,p=t.snapshot,g=t.useClone,v=t.updateViewportMaxScroll,m=t.getContainerForClone,b=A(function(){return i.current},[]),I=A(function(q){i.current=q},[]);A(function(){return s.current},[]);var y=A(function(q){s.current=q},[]),x=A(function(){r()&&v({maxScroll:Qd()})},[r,v]);Oy({droppableId:a,type:l,mode:c,direction:u,isDropDisabled:h,isCombineEnabled:f,ignoreContainerClipping:d,getDroppableRef:b});var S=Z.createElement(By,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(q){var Ee=q.onClose,Se=q.data,E=q.animate;return Z.createElement(Fy,{placeholder:Se,onClose:Ee,innerRef:y,animate:E,contextId:n,onTransitionEnd:x})}),R=H(function(){return{innerRef:I,placeholder:S,droppableProps:{"data-rbd-droppable-id":a,"data-rbd-droppable-context-id":n}}},[n,a,S,I]),N=g?g.dragging.draggableId:null,O=H(function(){return{droppableId:a,type:l,isUsingCloneFor:N}},[a,N,l]);function K(){if(!g)return null;var q=g.dragging,Ee=g.render,Se=Z.createElement(ph,{draggableId:q.draggableId,index:q.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(E,T){return Ee(E,T,q)});return Z.createPortal(Se,m())}return Z.createElement(ga.Provider,{value:O},o(R,p),K())}var Hs=function(e,n){return e===n.droppable.type},mc=function(e,n){return n.draggables[e.draggable.id]},iI=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=k({},e,{shouldAnimatePlaceholder:!1}),r=he(function(o){return{draggableId:o.id,type:o.type,source:{index:o.index,droppableId:o.droppableId}}}),i=he(function(o,a,l,c,u,d){var h=u.descriptor.id,f=u.descriptor.droppableId===o;if(f){var p=d?{render:d,dragging:r(u.descriptor)}:null,g={isDraggingOver:l,draggingOverWith:l?h:null,draggingFromThisWith:h,isUsingPlaceholder:!0};return{placeholder:u.placeholder,shouldAnimatePlaceholder:!1,snapshot:g,useClone:p}}if(!a)return n;if(!c)return e;var v={isDraggingOver:l,draggingOverWith:h,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:u.placeholder,shouldAnimatePlaceholder:!0,snapshot:v,useClone:null}}),s=function(a,l){var c=l.droppableId,u=l.type,d=!l.isDropDisabled,h=l.renderClone;if(a.isDragging){var f=a.critical;if(!Hs(u,f))return n;var p=mc(f,a.dimensions),g=Ne(a.impact)===c;return i(c,d,g,g,p,h)}if(a.phase==="DROP_ANIMATING"){var v=a.completed;if(!Hs(u,v.critical))return n;var m=mc(v.critical,a.dimensions);return i(c,d,hh(v.result)===c,Ne(v.impact)===c,m,h)}if(a.phase==="IDLE"&&a.completed&&!a.shouldFlush){var b=a.completed;if(!Hs(u,b.critical))return n;var I=Ne(b.impact)===c,y=!!(b.impact.at&&b.impact.at.type==="COMBINE"),x=b.critical.droppable.id===c;return I?y?e:n:x?e:n}return n};return s},sI={updateViewportMaxScroll:p_};function oI(){return document.body||w(!1),document.body}var aI={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:oI},va=vd(iI,sI,null,{context:ha,pure:!0,areStatePropsEqual:dh})(rI);va.defaultProps=aI;var lI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},cI=Object.defineProperty,uI=Object.defineProperties,dI=Object.getOwnPropertyDescriptors,vi=Object.getOwnPropertySymbols,vh=Object.prototype.hasOwnProperty,mh=Object.prototype.propertyIsEnumerable,_c=(t,e,n)=>e in t?cI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,bc=(t,e)=>{for(var n in e||(e={}))vh.call(e,n)&&_c(t,n,e[n]);if(vi)for(var n of vi(e))mh.call(e,n)&&_c(t,n,e[n]);return t},hI=(t,e)=>uI(t,dI(e)),fI=(t,e)=>{var n={};for(var r in t)vh.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&vi)for(var r of vi(t))e.indexOf(r)<0&&mh.call(t,r)&&(n[r]=t[r]);return n},Ue=(t,e,n)=>{const r=i=>{var s=i,{color:o="currentColor",size:a=24,stroke:l=2,children:c}=s,u=fI(s,["color","size","stroke","children"]);return ze("svg",bc(hI(bc({},lI),{width:a,height:a,stroke:o,"stroke-width":l,class:`tabler-icon tabler-icon-${t}`}),u),[...n.map(([d,h])=>ze(d,h)),...Je(c)])};return r.displayName=`${e}`,r},_h=Ue("align-justified","IconAlignJustified",[["path",{d:"M4 6l16 0",key:"svg-0"}],["path",{d:"M4 12l16 0",key:"svg-1"}],["path",{d:"M4 18l12 0",key:"svg-2"}]]),pI=Ue("brand-github-filled","IconBrandGithubFilled",[["path",{d:"M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z",fill:"currentColor",key:"svg-0",strokeWidth:"0"}]]),gI=Ue("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),vI=Ue("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),bh=Ue("checkbox","IconCheckbox",[["path",{d:"M9 11l3 3l8 -8",key:"svg-0"}],["path",{d:"M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9",key:"svg-1"}]]),mI=Ue("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]]),_I=Ue("edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]),bI=Ue("layout-cards","IconLayoutCards",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",key:"svg-1"}]]),yI=Ue("palette","IconPalette",[["path",{d:"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25",key:"svg-0"}],["path",{d:"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}]]),ma=Ue("plus","IconPlus",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M5 12l14 0",key:"svg-1"}]]),yh=Ue("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]]),tr=Ue("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]),II=0;function _(t,e,n,r,i,s){var o,a,l={};for(a in e)a=="ref"?o=e[a]:l[a]=e[a];var c={type:t,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--II,__source:i,__self:s};if(typeof t=="function"&&(o=t.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return P.vnode&&P.vnode(c),c}const hn=Vu(function({children:e,styles:n,active:r=!0,placeholder:i,defaultValue:s,onKeyDown:o,onBlur:a,onBlurCapture:l,minRows:c,maxRows:u,maxLength:d},h){const[f,p]=ie(c),g=v=>{const m=v.target,{lineHeight:b}=window.getComputedStyle(m),I=m.rows;m.rows=c;const y=~~(m.scrollHeight/parseFloat(b));y===I&&(m.rows=y),y>=u&&(m.rows=u,m.scrollTop=m.scrollHeight),p(y<u?y:u)};return _(Ce,{children:r?_("textarea",{class:`height-auto box-border w-full resize-none overflow-hidden bg-inherit leading-6 
             outline-none ${n}`,ref:h,rows:f,spellCheck:!1,maxLength:d,placeholder:i,onChange:g,defaultValue:s,onKeyDown:o,onBlur:a,onBlurCapture:l,children:e}):_("div",{children:e})})}),wI=({setActive:t,addTodo:e})=>{const n=$(null),r=()=>{var s;const i=(s=n.current)==null?void 0:s.value;i&&(e(i),n.current.value="",n.current.rows=1,n.current.focus())};return _e(()=>{var i;(i=n.current)==null||i.focus()},[]),_("div",{class:"flex flex-col gap-2",children:[_(hn,{ref:n,styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2 px-3 py-1 text-slate-950 border-slate-300",placeholder:"Enter a description for this item...",minRows:1,maxRows:2,maxLength:30}),_("div",{class:"flex gap-2",children:[_("button",{class:"w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",type:"submit",onClick:()=>r(),children:"Add item"}),_("button",{class:"rounded-md px-1 hover:bg-slate-300",onClick:()=>t(!1),children:_(tr,{})})]})]})},CI=({completed:t,content:e,updateTodo:n,removeTodo:r})=>{const[i,s]=ie(!1);return _("div",{class:"relative flex w-full items-center gap-2 rounded p-1 hover:bg-slate-300",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onTouchStart:()=>s(!0),onTouchEnd:()=>s(!1),children:[_("div",{class:"relative m-1 h-5 w-5 shrink-0 self-start",children:_("input",{class:"checked:before:tick flex h-full w-full appearance-none items-center justify-center  rounded border-2 border-slate-300 bg-slate-100 outline-none  checked:border-slate-900 checked:bg-slate-900",type:"checkbox",checked:t,onChange:a=>{const l=a.target;n(l.checked)},children:_(vI,{})})}),_("span",{class:`${t&&"line-through"} max-w-full break-all`,children:e}),i&&_("div",{class:"absolute right-[0.3125rem] top-[0.3125rem]",onClick:()=>r(),children:_("button",{class:"rounded p-1 text-slate-500 hover:text-slate-900",children:_(yh,{size:18})})})]})};var Hn=(t=>(t.Card="card",t.List="list",t))(Hn||{}),mi=(t=>(t[t.normal=0]="normal",t[t.editing=1]="editing",t[t.dialog=2]="dialog",t))(mi||{});const Zr={red:"#f87462",orange:"#faa53d",yellow:"#e2b203",green:"#4bce97",blue:"#579dff",purple:"#9f8fef",pink:"#e774bb"},EI=({setActive:t,listTitle:e,content:n,description:r,todos:i,color:s,changeContent:o,changeDescription:a,changeTodos:l,changeColor:c,removeCard:u})=>{const d=$(null),h=$(null),[f,p]=ie(!1),[g,v]=ie(i??[]),{normal:m}=mi,b=()=>{t(m),!(!d.current||!h.current)&&(o(d.current.value),a(h.current.value),l(g))},I=R=>{v([...g,{content:R,completed:!1}])},y=R=>{const N=[...g];N.splice(R,1),v(N)},x=(R,N)=>{const O=[...g];O[R].completed=N,v(O)},S=()=>{if(!g.length)return"0%";const R=g.filter(O=>O.completed).length,N=g.length;return`${Math.floor(R/N*100)}%`};return Uo(_("div",{class:"max-w-screen fixed left-0 top-0 flex h-dynamic max-h-dynamic w-screen cursor-pointer  content-center justify-center bg-slate-900/75 p-2 lg:py-16",onClick:b,children:_("div",{class:`flex h-fit max-h-full w-full cursor-default flex-col gap-4 overflow-y-auto 
               overflow-x-hidden rounded-xl bg-slate-200 px-6 py-4 lg:max-w-2xl ${s&&"border-t-[3rem]"}`,style:{borderColor:s},onClick:R=>R.stopPropagation(),children:[_("div",{children:[_("div",{class:"flex items-center gap-2 p-2",children:[_(bI,{class:"text-slate-500"}),_("h1",{class:"h-fit w-full px-3 py-1 font-semibold",children:"Title"}),_("div",{class:"-m-2 cursor-pointer rounded bg-slate-300 p-1 text-slate-500  hover:text-slate-900",onClick:()=>b(),children:_(tr,{})})]}),_("div",{class:"ml-[3.25rem]",children:_(hn,{ref:d,styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 border-slate-300  rounded border-2 font-semibold px-3 py-1 text-slate-950",minRows:1,maxRows:4,maxLength:100,children:n})}),_("div",{class:"mx-[3.25rem] mt-1 text-slate-500",children:["In list",_("strong",{class:"font-semibold",children:[" ",e]})]})]}),_("div",{children:[_("div",{class:"flex items-center gap-2 p-2",children:[_(_h,{class:"text-slate-500"}),_("h1",{class:"h-fit px-3 py-1 font-semibold",children:"Description"})]}),_("div",{class:"ml-[3.25rem]",children:_(hn,{ref:h,placeholder:"Add a more detailed description...",styles:"focus:border-slate-900 focus:bg-slate-50 bg-slate-100 rounded border-2 px-3 py-1 text-slate-950 border-slate-300",minRows:2,maxRows:4,maxLength:100,children:r})})]}),_("div",{children:[_("div",{class:"flex items-center gap-2 p-2 pb-0",children:[_(bh,{class:"text-slate-500"}),_("h1",{class:"h-fit px-3 py-1 font-semibold",children:"Checklist"})]}),_("div",{class:"flex items-center gap-2 px-2 pb-2",children:[_("div",{class:"relative",children:_("div",{class:"absolute -ml-2 -mt-3 w-10 text-center",children:S()})}),_("div",{class:"relative my-2 -mr-2 ml-[2.75rem] h-2 w-full rounded bg-slate-300",children:_("div",{class:"absolute h-2 rounded bg-slate-900 transition-all duration-500",style:{width:S()}})})]}),_("div",{class:"-mr-[3.25rem] flex flex-col px-[3.25rem] pb-4 empty:pb-1",children:g.map((R,N)=>_(CI,{...R,updateTodo:O=>x(N,O),removeTodo:()=>y(N)},N))}),_("div",{class:"mb-2 ml-[3.25rem]",children:f?_(wI,{setActive:R=>p(R),addTodo:I}):_("button",{class:"flex items-center gap-2 rounded-md bg-slate-900 px-2  py-1 text-slate-50 hover:bg-slate-950",onClick:()=>p(!0),children:[_(ma,{size:18})," Add an item"]})})]}),_("div",{class:"mb-4",children:[_("div",{class:"flex items-center gap-2 p-2",children:[_(yI,{class:"text-slate-500"}),_("h1",{class:"h-fit px-3 py-1 font-semibold",children:"Color"})]}),_("div",{class:"ml-[3.25rem] flex gap-1",children:[Object.values(Zr).map((R,N)=>_("button",{class:`h-8 w-8 rounded-md border-2 ${R===s?"border-slate-900":"border-transparent"}`,style:{backgroundColor:R},onClick:()=>c(R)},N)),_("button",{class:`flex content-center justify-center rounded-md border-2 border-slate-300 
              bg-slate-300 p-[0.125rem] text-slate-600 hover:border-slate-900 
              hover:text-slate-900 ${!s&&"border-slate-900 text-slate-900"}`,onClick:()=>c(""),children:_(tr,{})})]})]}),_("button",{class:"mb-1 flex w-full items-center justify-center rounded-md bg-slate-300 p-1  font-semibold text-slate-500 hover:text-slate-900",onClick:()=>u(),children:"Archive this card"})]})}),document.body)};function SI({close:t,changeContent:e}){return _(Ce,{children:[Uo(_("div",{class:"max-w-screen fixed left-0 top-0 z-0 flex h-dynamic max-h-dynamic w-screen  cursor-pointer content-center justify-center bg-slate-900/75",onClick:t}),document.body),_("div",{class:"absolute flex gap-2",children:[_("button",{class:"relative z-10 w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",onClick:()=>{e(),t()},children:"Save"}),_("button",{class:"z-10 rounded-md bg-slate-200 px-1 hover:bg-slate-300 ",onClick:t,children:_(tr,{})})]})]})}const TI=({id:t,listTitle:e,index:n,content:r,description:i,todos:s,color:o,changeContent:a,changeDescription:l,removeCard:c,changeTodos:u,changeColor:d})=>{const[h,f]=ie(!1),{normal:p,editing:g,dialog:v}=mi,[m,b]=ie(mi.normal),I=$(null);return _e(()=>{m===g&&I.current&&(I.current.focus(),I.current.selectionStart=I.current.value.length),f(!1)},[m]),_(Ce,{children:[_(gh,{draggableId:t,index:n,isDragDisabled:m===g,children:(y,x)=>_(AI,{style:y.draggableProps.style,snapshot:x,children:S=>_("div",{ref:y.innerRef,...y.draggableProps,...y.dragHandleProps,style:{...S,borderColor:o},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onClick:()=>b(g),class:`min-h-10 relative mb-2 flex flex-col
                      break-all rounded-md px-3 py-2 shadow-[0_1px_1px_0_0_1px_0_0_1px_0] 
                      shadow-slate-300 ${x.isDragging?"bg-slate-100 ":"bg-slate-50"} ${o&&"border-t-[12px]"} ${m===g||x.isDragging?"z-10":"z-0"}`,children:[_(hn,{ref:I,active:m===g,placeholder:"Enter a title for this card...",minRows:1,maxRows:5,maxLength:120,children:r}),h&&m===p&&_("div",{class:"absolute right-0 top-0 m-[0.1875rem] rounded bg-slate-200",children:_(Ih,{clickHandler:()=>b(v),icon:_(_I,{})})}),_("div",{class:"mt-1 flex items-center gap-3 text-slate-500 empty:mt-0",children:[i&&_(_h,{size:16}),s!=null&&s.length?_("div",{class:"flex items-center gap-1",children:[_(bh,{size:16}),_("p",{children:[s.filter(R=>R.completed).length,"/",s.length]})]}):null]})]})})}),m===g&&_(SI,{close:()=>b(p),changeContent:()=>{var y;return a(((y=I.current)==null?void 0:y.value)||r)}}),m===v&&_(EI,{setActive:y=>b(y),listTitle:e,content:r,description:i,todos:s,color:o,changeContent:a,changeDescription:l,changeTodos:u,changeColor:d,removeCard:c})]})},DI=({addCard:t})=>{const[e,n]=ie(!1),r=$(null),i=()=>{const s=r.current;!s||!s.value||(t(s.value),s.value="",s.rows=1,s.focus())};return e?_("div",{class:"flex w-full flex-col gap-2 p-2 pt-0",children:[_("div",{class:"flex content-center rounded-md bg-slate-50 px-3 py-2  shadow-[0_1px_1px_0_0_1px_0_0_1px_0] shadow-slate-300 focus:outline-none",children:_(hn,{ref:r,placeholder:"Enter a title for this card...",minRows:1,maxRows:5,maxLength:120})}),_("div",{class:"flex gap-2",children:[_("button",{class:"w-fit rounded-md bg-slate-900 px-3 py-1 text-slate-50 hover:bg-slate-950",type:"submit",onClick:()=>i(),children:"Add card"}),_("button",{class:"rounded-md px-1 hover:bg-slate-300",onClick:()=>n(!1),children:_(tr,{})})]})]}):_("div",{class:"p-2 pt-0",children:_("button",{onClick:()=>n(!0),class:"flex w-full items-center gap-2 rounded-md px-2 py-1 text-left hover:bg-slate-300",children:[_(ma,{size:18}),"Add a card"]})})},xI=({title:t,changeTitle:e,removeList:n,snapshot:r})=>{const i=$(null),[s,o]=ie(!1),[a,l]=ie(t),[c,u]=ie(!1),d=f=>{const p=f.target,g=p.value;g?(e(g),l(g)):p.value=a},h=f=>{if(f.key!=="Enter")return;f.preventDefault(),f.target.blur(),o(!1)};return _e(()=>{!r.isDragging&&!s||u(!1)},[r,s]),_("div",{class:"flex",children:[_("div",{class:"relative flex w-full items-center p-2",children:[_("div",{class:`absolute left-0 top-0 h-full w-full ${s?"hidden":"cursor-pointer"}`,onClick:()=>{var f;o(!0),(f=i.current)==null||f.focus()}}),_(hn,{ref:i,styles:"box-border min-h-9 w-full cursor-pointer resize-none overflow-hidden break-words rounded  border-2 border-slate-200 bg-inherit px-3 py-1 font-semibold focus:cursor-text  focus:border-slate-900 focus:bg-slate-50 focus:outline-none",minRows:1,maxRows:4,maxLength:70,onKeyDown:h,onBlur:d,onBlurCapture:()=>{o(!1)},defaultValue:t})]}),_("div",{class:"m-2 ml-0",children:[_(Ih,{icon:_(mI,{}),clickHandler:()=>u(!c)}),c&&!s&&_("div",{class:"absolute z-10 mt-2 grid w-64 divide-y rounded-md  bg-slate-50 shadow-sm shadow-black/40",children:[_("div",{class:"px-4 py-3 text-center",children:"List actions"}),_("div",{class:"mx-2 py-2",children:_("button",{class:"mx-0 flex w-full items-center gap-2 rounded-md px-2 py-1 text-left  hover:bg-slate-300",onClick:()=>n(),children:[_(yh,{size:16}),"Archive this list"]})})]})]})]})},RI=({title:t,cards:e,changeContent:n,changeDescription:r,changeTodos:i,changeColor:s,removeCard:o})=>_(Ce,{children:e==null?void 0:e.map((a,l)=>_(TI,{id:a.id,index:l,listTitle:t,content:a.content,description:a.description,todos:a.todos,color:a.color,changeContent:c=>n(l,c),changeDescription:c=>r(l,c),changeTodos:c=>i(l,c),changeColor:c=>s(l,c),removeCard:()=>o(l)},a.id))}),PI=({addList:t})=>_("button",{class:"mx-4 my-8 flex items-center gap-2 whitespace-nowrap rounded-md bg-slate-700 p-3 px-2  py-1 text-slate-50 hover:bg-slate-600",onClick:()=>t("New list"),children:[_(ma,{size:18}),"Add another list"]}),AI=({snapshot:t,style:e,children:n})=>{const r=$(0),[i,s]=ie(),[o,a]=ie(0),[l,c]=ie(0),u=f=>f/(1+Math.abs(f)),d=()=>{if(!t.isDragging||!e.transform){r.current=requestAnimationFrame(d);return}const f=e.transform,p=parseInt(f.match(/translate\(.{1,}\)/g)[0].match(/-?[0-9]{1,}/g)[0]),g=p-o;let v=l*.9+u(g)*1.4;Math.abs(v)<.01&&(v=0),s(`${f} rotate(${v}deg)`),c(v),a(p)},h=f=>f.isDragging&&!f.dropAnimation?{...e,transform:i}:e;return _e(()=>{r.current=requestAnimationFrame(d)},[i,l,o]),_e(()=>{if(!t.isDragging){cancelAnimationFrame(r.current);return}return r.current=requestAnimationFrame(d),()=>{cancelAnimationFrame(r.current)}}),_(Ce,{children:n(h(t))})},NI=[{title:"to do",cards:[{id:Ke(),content:"add sprites"},{id:Ke(),content:"implement main menu"},{id:Ke(),content:"add sounds",todos:[{content:"victory.wav",completed:!0},{content:"game_over.wav",completed:!1},{content:"soundtrack.wav",completed:!1}],color:Zr.purple}]},{title:"in progress",cards:[{id:Ke(),content:"write story",description:"need to outline the story and write the script",todos:[{content:"ask friends for feedback",completed:!1}],color:Zr.red},{id:Ke(),content:"add levels",color:Zr.red},{id:Ke(),content:"send demo to friends"},{id:Ke(),content:"marketing"}]},{title:"done",cards:[{id:Ke(),content:"implement player movement"},{id:Ke(),content:"meet with investors to discuss marketing strategy and budget"}]}],OI=({user:t,signIn:e,signOut:n,updateLists:r})=>_("div",{class:"flex w-full content-center items-center border-b-2 border-b-slate-800 px-8 py-6  font-bold text-slate-50",children:_("div",{class:"flex items-center gap-4",children:[_("div",{class:"relative whitespace-nowrap text-2xl md:text-3xl",children:"trello clone"}),_("div",{class:"relative flex h-8 w-8 items-center justify-center",children:[_(gI,{class:"absolute"}),_("a",{class:"absolute flex cursor-pointer content-center items-center justify-center  fill-slate-50 opacity-0 transition hover:opacity-100",href:"https://github.com/chompaa/trello-clone",target:"_blank",children:_(pI,{})})]}),t?_("button",{class:"whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50  hover:text-slate-900",onClick:()=>n(),children:"Sign out"}):_(Ce,{children:[_("button",{class:"whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50  hover:text-slate-900",onClick:()=>e(),children:"Sign in"}),_("button",{class:"whitespace-nowrap rounded-md border-2 border-slate-50 px-2 py-1 hover:bg-slate-50  hover:text-slate-900",onClick:()=>r(NI),children:"Demo"})]})]})}),kI=({list:t,index:e,changeTitle:n,changeContent:r,changeDescription:i,addCard:s,removeCard:o,changeTodos:a,changeColor:l,removeList:c,placeholderProps:u})=>_(gh,{draggableId:`${e}`,index:e,children:(d,h)=>_("div",{ref:d.innerRef,...d.draggableProps,class:"mx-4 my-8 h-full rounded-xl shadow-sm shadow-black",children:_("div",{class:"w-72 rounded-xl bg-slate-200",children:[_("div",{...d.dragHandleProps,class:"rounded-t-xl",children:_(xI,{title:t.title,changeTitle:n,removeList:c,snapshot:h})}),_(va,{droppableId:`${e}`,type:Hn.Card,children:(f,p)=>_("div",{ref:f.innerRef,...f.droppableProps,class:"relative px-2",children:[_(RI,{title:t.title,cards:t.cards,changeContent:r,changeDescription:i,removeCard:o,changeTodos:a,changeColor:l}),f.placeholder,p.isDraggingOver&&_("div",{class:"absolute rounded-md bg-slate-300",style:{top:u.clientY,left:u.clientX,width:u.clientWidth,height:u.offsetHeight}})]})}),_(DI,{addCard:s})]})})}),Ih=({clickHandler:t,icon:e,disabled:n})=>_(Ce,{children:!n&&_("button",{onClick:r=>{r.stopPropagation(),t()},class:"flex content-center items-center justify-center rounded p-2 text-slate-500  hover:bg-slate-300",children:Wu(e,{size:18})})});/**
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
 */const wh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(t,e){if(!t)throw En(e)},En=function(t){return new Error("Firebase Database ("+wh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ch=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},_a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),r.push(n[u],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ch(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new LI;const h=s<<2|a>>4;if(r.push(h),c!==64){const f=a<<4&240|c>>2;if(r.push(f),d!==64){const p=c<<6&192|d;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eh=function(t){const e=Ch(t);return _a.encodeByteArray(e,!0)},_i=function(t){return Eh(t).replace(/\./g,"")},bi=function(t){try{return _a.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FI(t){return Sh(void 0,t)}function Sh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!BI(n)||(t[n]=Sh(t[n],e[n]));return t}function BI(t){return t!=="__proto__"}/**
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
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WI=()=>UI().__FIREBASE_DEFAULTS__,$I=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bi(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return WI()||$I()||HI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Th=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GI=t=>{const e=Th(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dh=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config},xh=t=>{var e;return(e=ba())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function VI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[_i(JSON.stringify(n)),_i(JSON.stringify(o)),a].join(".")}/**
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
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ya(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function qI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Rh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zI(){const t=ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ph(){return wh.NODE_ADMIN===!0}function jI(){try{return typeof indexedDB=="object"}catch{return!1}}function KI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const YI="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YI,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tr.prototype.create)}}class Tr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new At(i,a,r)}}function JI(t,e){return t.replace(QI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QI=/\{\$([^}]+)}/g;/**
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
 */function nr(t){return JSON.parse(t)}function oe(t){return JSON.stringify(t)}/**
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
 */const Ah=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=nr(bi(s[0])||""),n=nr(bi(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},XI=function(t){const e=Ah(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ZI=function(t){const e=Ah(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ii(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yc(s)&&yc(o)){if(!Ii(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yc(t){return t!==null&&typeof t=="object"}/**
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
 */function Sn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class ew{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function tw(t,e){const n=new nw(t,e);return n.subscribe.bind(n)}class nw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gs),i.error===void 0&&(i.error=Gs),i.complete===void 0&&(i.complete=Gs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gs(){}function Ia(t,e){return`${t} failed: ${e} argument `}/**
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
 */const iw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cs=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class sw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ls;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aw(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ow(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ow(t){return t===Mt?void 0:t}function aw(t){return t.instantiationMode==="EAGER"}/**
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
 */class lw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const cw={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},uw=Y.INFO,dw={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},hw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=dw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wa{constructor(e){this.name=e,this._logLevel=uw,this._logHandler=hw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const fw=(t,e)=>e.some(n=>t instanceof n);let Ic,wc;function pw(){return Ic||(Ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gw(){return wc||(wc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nh=new WeakMap,_o=new WeakMap,Oh=new WeakMap,Vs=new WeakMap,Ca=new WeakMap;function vw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Nh.set(n,t)}).catch(()=>{}),Ca.set(e,t),e}function mw(t){if(_o.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_o.set(t,e)}let bo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _o.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Oh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _w(t){bo=t(bo)}function bw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qs(this),e,...n);return Oh.set(r,e.sort?e.sort():[e]),yt(r)}:gw().includes(t)?function(...e){return t.apply(qs(this),e),yt(Nh.get(this))}:function(...e){return yt(t.apply(qs(this),e))}}function yw(t){return typeof t=="function"?bw(t):(t instanceof IDBTransaction&&mw(t),fw(t,pw())?new Proxy(t,bo):t)}function yt(t){if(t instanceof IDBRequest)return vw(t);if(Vs.has(t))return Vs.get(t);const e=yw(t);return e!==t&&(Vs.set(t,e),Ca.set(e,t)),e}const qs=t=>Ca.get(t);function Iw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yt(o.result),l.oldVersion,l.newVersion,yt(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ww=["get","getKey","getAll","getAllKeys","count"],Cw=["put","add","delete","clear"],zs=new Map;function Cc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zs.get(e))return zs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Cw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ww.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return zs.set(e,s),s}_w(t=>({...t,get:(e,n,r)=>Cc(e,n)||t.get(e,n,r),has:(e,n)=>!!Cc(e,n)||t.has(e,n)}));/**
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
 */class Ew{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",Ec="0.9.13";/**
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
 */const qt=new wa("@firebase/app"),Tw="@firebase/app-compat",Dw="@firebase/analytics-compat",xw="@firebase/analytics",Rw="@firebase/app-check-compat",Pw="@firebase/app-check",Aw="@firebase/auth",Nw="@firebase/auth-compat",Ow="@firebase/database",kw="@firebase/database-compat",Mw="@firebase/functions",Lw="@firebase/functions-compat",Fw="@firebase/installations",Bw="@firebase/installations-compat",Uw="@firebase/messaging",Ww="@firebase/messaging-compat",$w="@firebase/performance",Hw="@firebase/performance-compat",Gw="@firebase/remote-config",Vw="@firebase/remote-config-compat",qw="@firebase/storage",zw="@firebase/storage-compat",jw="@firebase/firestore",Kw="@firebase/firestore-compat",Yw="firebase",Jw="9.23.0";/**
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
 */const Io="[DEFAULT]",Qw={[yo]:"fire-core",[Tw]:"fire-core-compat",[xw]:"fire-analytics",[Dw]:"fire-analytics-compat",[Pw]:"fire-app-check",[Rw]:"fire-app-check-compat",[Aw]:"fire-auth",[Nw]:"fire-auth-compat",[Ow]:"fire-rtdb",[kw]:"fire-rtdb-compat",[Mw]:"fire-fn",[Lw]:"fire-fn-compat",[Fw]:"fire-iid",[Bw]:"fire-iid-compat",[Uw]:"fire-fcm",[Ww]:"fire-fcm-compat",[$w]:"fire-perf",[Hw]:"fire-perf-compat",[Gw]:"fire-rc",[Vw]:"fire-rc-compat",[qw]:"fire-gcs",[zw]:"fire-gcs-compat",[jw]:"fire-fst",[Kw]:"fire-fst-compat","fire-js":"fire-js",[Yw]:"fire-js-all"};/**
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
 */const wi=new Map,wo=new Map;function Xw(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pn(t){const e=t.name;if(wo.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;wo.set(e,t);for(const n of wi.values())Xw(n,t);return!0}function Ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Zw={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Tr("app","Firebase",Zw);/**
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
 */class eC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Tn=Jw;function kh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Io,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw It.create("bad-app-name",{appName:String(i)});if(n||(n=Dh()),!n)throw It.create("no-options");const s=wi.get(i);if(s){if(Ii(n,s.options)&&Ii(r,s.config))return s;throw It.create("duplicate-app",{appName:i})}const o=new lw(i);for(const l of wo.values())o.addComponent(l);const a=new eC(n,r,o);return wi.set(i,a),a}function Mh(t=Io){const e=wi.get(t);if(!e&&t===Io&&Dh())return kh();if(!e)throw It.create("no-app",{appName:t});return e}function wt(t,e,n){var r;let i=(r=Qw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}pn(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tC="firebase-heartbeat-database",nC=1,rr="firebase-heartbeat-store";let js=null;function Lh(){return js||(js=Iw(tC,nC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(rr)}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),js}async function rC(t){try{return await(await Lh()).transaction(rr).objectStore(rr).get(Fh(t))}catch(e){if(e instanceof At)qt.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function Sc(t,e){try{const r=(await Lh()).transaction(rr,"readwrite");await r.objectStore(rr).put(e,Fh(t)),await r.done}catch(n){if(n instanceof At)qt.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function Fh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iC=1024,sC=30*24*60*60*1e3;class oC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Tc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=sC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Tc(),{heartbeatsToSend:n,unsentEntries:r}=aC(this._heartbeatsCache.heartbeats),i=_i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Tc(){return new Date().toISOString().substring(0,10)}function aC(t,e=iC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jI()?KI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dc(t){return _i(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cC(t){pn(new Vt("platform-logger",e=>new Ew(e),"PRIVATE")),pn(new Vt("heartbeat",e=>new oC(e),"PRIVATE")),wt(yo,Ec,t),wt(yo,Ec,"esm2017"),wt("fire-js","")}cC("");var uC="firebase",dC="9.23.0";/**
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
 */wt(uC,dC,"app");const xc="@firebase/database",Rc="0.14.4";/**
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
 */let Bh="";function hC(t){Bh=t}/**
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
 */class fC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:nr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class pC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Uh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fC(e)}}catch{}return new pC},Bt=Uh("localStorage"),Co=Uh("sessionStorage");/**
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
 */const tn=new wa("@firebase/database"),gC=function(){let t=1;return function(){return t++}}(),Wh=function(t){const e=iw(t),n=new ew;n.update(e);const r=n.digest();return _a.encodeByteArray(r)},Dr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Dr.apply(null,r):typeof r=="object"?e+=oe(r):e+=r,e+=" "}return e};let $t=null,Pc=!0;const vC=function(t,e){C(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(tn.logLevel=Y.VERBOSE,$t=tn.log.bind(tn),e&&Co.set("logging_enabled",!0)):typeof t=="function"?$t=t:($t=null,Co.remove("logging_enabled"))},be=function(...t){if(Pc===!0&&(Pc=!1,$t===null&&Co.get("logging_enabled")===!0&&vC(!0)),$t){const e=Dr.apply(null,t);$t(e)}},xr=function(t){return function(...e){be(t,...e)}},Eo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Dr(...t);tn.error(e)},at=function(...t){const e=`FIREBASE FATAL ERROR: ${Dr(...t)}`;throw tn.error(e),new Error(e)},xe=function(...t){const e="FIREBASE WARNING: "+Dr(...t);tn.warn(e)},mC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$h=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_C=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gn="[MIN_NAME]",zt="[MAX_NAME]",Dn=function(t,e){if(t===e)return 0;if(t===gn||e===zt)return-1;if(e===gn||t===zt)return 1;{const n=Ac(t),r=Ac(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},bC=function(t,e){return t===e?0:t<e?-1:1},kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+oe(e))},Sa=function(t){if(typeof t!="object"||t===null)return oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=oe(e[r]),n+=":",n+=Sa(t[e[r]]);return n+="}",n},Hh=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gh=function(t){C(!$h(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},yC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const CC=new RegExp("^-?(0*)\\d{1,10}$"),EC=-2147483648,SC=2147483647,Ac=function(t){if(CC.test(t)){const e=Number(t);if(e>=EC&&e<=SC)return e}return null},xn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},TC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class DC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xe(e)}}class nn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nn.OWNER="owner";/**
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
 */const Ta="5",Vh="v",qh="s",zh="r",jh="f",Kh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yh="ls",Jh="p",So="ac",Qh="websocket",Xh="long_polling";/**
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
 */class Zh{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function RC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ef(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===Qh)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xh)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);RC(t)&&(n.ns=t.namespace);const i=[];return Re(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class PC{constructor(){this.counters_={}}incrementCounter(e,n=1){ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FI(this.counters_)}}/**
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
 */const Ks={},Ys={};function Da(t){const e=t.toString();return Ks[e]||(Ks[e]=new PC),Ks[e]}function AC(t,e){const n=t.toString();return Ys[n]||(Ys[n]=e()),Ys[n]}/**
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
 */class NC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&xn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Nc="start",OC="close",kC="pLPCommand",MC="pRTLPCB",tf="id",nf="pw",rf="ser",LC="cb",FC="seg",BC="ts",UC="d",WC="dframe",sf=1870,of=30,$C=sf-of,HC=25e3,GC=3e4;class en{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xr(e),this.stats_=Da(n),this.urlFn=l=>(this.appCheckToken&&(l[So]=this.appCheckToken),ef(n,Xh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GC)),_C(()=>{if(this.isClosed_)return;this.scriptTagHolder=new xa((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Nc)this.id=a,this.password=l;else if(o===OC)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Nc]="t",r[rf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[LC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Vh]=Ta,this.transportSessionId&&(r[qh]=this.transportSessionId),this.lastSessionId&&(r[Yh]=this.lastSessionId),this.applicationId&&(r[Jh]=this.applicationId),this.appCheckToken&&(r[So]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kh.test(location.hostname)&&(r[zh]=jh);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){en.forceAllow_=!0}static forceDisallow(){en.forceDisallow_=!0}static isAvailable(){return en.forceAllow_?!0:!en.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yC()&&!IC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Eh(n),i=Hh(r,$C);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WC]="t",r[tf]=e,r[nf]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class xa{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gC(),window[kC+this.uniqueCallbackIdentifier]=e,window[MC+this.uniqueCallbackIdentifier]=n,this.myIFrame=xa.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tf]=this.myID,e[nf]=this.myPW,e[rf]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+of+r.length<=sf;){const o=this.pendingSegs.shift();r=r+"&"+FC+i+"="+o.seg+"&"+BC+i+"="+o.ts+"&"+UC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(HC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const VC=16384,qC=45e3;let Ci=null;typeof MozWebSocket<"u"?Ci=MozWebSocket:typeof WebSocket<"u"&&(Ci=WebSocket);class $e{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xr(this.connId),this.stats_=Da(n),this.connURL=$e.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Vh]=Ta,typeof location<"u"&&location.hostname&&Kh.test(location.hostname)&&(o[zh]=jh),n&&(o[qh]=n),r&&(o[Yh]=r),i&&(o[So]=i),s&&(o[Jh]=s),ef(e,Qh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bt.set("previous_websocket_failure",!0);try{let r;Ph(),this.mySock=new Ci(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ci!==null&&!$e.forceDisallow_}static previouslyFailed(){return Bt.isInMemoryStorage||Bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=nr(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hh(n,VC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$e.responsesRequiredToBeHealthy=2;$e.healthyTimeout=3e4;/**
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
 */class ir{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[en,$e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$e&&$e.isAvailable();let r=n&&!$e.previouslyFailed();if(e.webSocketOnly&&(n||xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$e];else{const i=this.transports_=[];for(const s of ir.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ir.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ir.globalTransportInitialized_=!1;/**
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
 */const zC=6e4,jC=5e3,KC=10*1024,YC=100*1024,Js="t",Oc="d",JC="s",kc="r",QC="e",Mc="o",Lc="a",Fc="n",Bc="p",XC="h";class ZC{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xr("c:"+this.id+":"),this.transportManager_=new ir(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>KC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Js in e){const n=e[Js];n===Lc?this.upgradeIfSecondaryHealthy_():n===kc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kn("t",e),r=kn("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kn("t",e),r=kn("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kn(Js,e);if(Oc in e){const r=e[Oc];if(n===XC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Fc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JC?this.onConnectionShutdown_(r):n===kc?this.onReset_(r):n===QC?Eo("Server Error: "+r):n===Mc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Eo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ta!==r&&xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Gn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(jC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class af{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class lf{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ei extends lf{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ya()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ei}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Uc=32,Wc=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new J("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dt(t){return t.pieces_.length-t.pieceNum_}function X(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function cf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function uf(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function df(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof J)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new J(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function we(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return we(X(t),X(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hf(t,e){if(Dt(t)!==Dt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ge(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Dt(t)>Dt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class tE{constructor(e,n){this.errorPrefix_=n,this.parts_=uf(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=cs(this.parts_[r]);ff(this)}}function nE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cs(e),ff(t)}function rE(t){const e=t.parts_.pop();t.byteLength_-=cs(e),t.parts_.length>0&&(t.byteLength_-=1)}function ff(t){if(t.byteLength_>Wc)throw new Error(t.errorPrefix_+"has a key path longer than "+Wc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Uc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Uc+") or object contains a cycle "+Lt(t))}function Lt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ra extends lf{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Ra}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Mn=1e3,iE=60*5*1e3,$c=30*1e3,sE=1.3,oE=3e4,aE="server_kill",Hc=3;class ot extends af{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ot.nextPersistentConnectionId_++,this.log_=xr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mn,this.maxReconnectDelay_=iE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Ph())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ra.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(oe(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ls,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;ot.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ct(e,"w")){const r=fn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ZI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$c)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=XI(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Eo("Unrecognized action received from server: "+oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oE&&(this.reconnectDelay_=Mn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ot.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new ZC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{xe(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(aE)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&xe(d),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mo(this.interruptReasons_)&&(this.reconnectDelay_=Mn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Sa(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new J(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hc&&(this.reconnectDelay_=$c,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Bh.replace(/\./g,"-")]=1,ya()?e["framework.cordova"]=1:Rh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ei.getInstance().currentlyOnline();return mo(this.interruptReasons_)&&e}}ot.nextPersistentConnectionId_=0;ot.nextConnectionId_=0;/**
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
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
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
 */class us{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new B(gn,e),i=new B(gn,n);return this.compare(r,i)!==0}minPost(){return B.MIN}}/**
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
 */let zr;class pf extends us{static get __EMPTY_NODE(){return zr}static set __EMPTY_NODE(e){zr=e}compare(e,n){return Dn(e.name,n.name)}isDefinedOn(e){throw En("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(zt,zr)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,zr)}toString(){return".key"}}const rn=new pf;/**
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
 */class jr{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ue.RED,this.left=i??De.EMPTY_NODE,this.right=s??De.EMPTY_NODE}copy(e,n,r,i,s){return new ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ue.RED=!0;ue.BLACK=!1;class lE{copy(e,n,r,i,s){return this}insert(e,n,r){return new ue(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ue.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ue.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new jr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new jr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new jr(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new lE;/**
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
 */function cE(t,e){return Dn(t.name,e.name)}function Pa(t,e){return Dn(t,e)}/**
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
 */let To;function uE(t){To=t}const gf=function(t){return typeof t=="number"?"number:"+Gh(t):"string:"+t},vf=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ct(e,".sv"),"Priority must be a string or number.")}else C(t===To||t.isEmpty(),"priority of unexpected type.");C(t===To||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gc;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vf(this.priorityNode_)}static set __childrenNodeConstructor(e){Gc=e}static get __childrenNodeConstructor(){return Gc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:W(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||Dt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(X(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gh(this.value_):e+=this.value_,this.lazyHash_=Wh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),s=ce.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let mf,_f;function dE(t){mf=t}function hE(t){_f=t}class fE extends us{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Dn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(zt,new ce("[PRIORITY-POST]",_f))}makePost(e,n){const r=mf(e);return new B(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const re=new fE;/**
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
 */const pE=Math.log(2);class gE{constructor(e){const n=s=>parseInt(Math.log(s)/pE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Si=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new ue(h,d.node,ue.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),g=i(f+1,c);return d=t[f],h=n?n(d):d,new ue(h,d.node,ue.BLACK,p,g)}},s=function(l){let c=null,u=null,d=t.length;const h=function(p,g){const v=d-p,m=d;d-=p;const b=i(v+1,m),I=t[v],y=n?n(I):I;f(new ue(y,I.node,g,null,b))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));g?h(v,ue.BLACK):(h(v,ue.BLACK),h(v,ue.RED))}return u},o=new gE(t.length),a=s(o);return new De(r||e,a)};/**
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
 */let Qs;const Zt={};class rt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(Zt&&re,"ChildrenNode.ts has not been loaded"),Qs=Qs||new rt({".priority":Zt},{".priority":re}),Qs}get(e){const n=fn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return ct(this.indexSet_,e.toString())}addIndex(e,n){C(e!==rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(B.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Si(r,e.getCompare()):a=Zt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new rt(u,c)}addToIndexes(e,n){const r=yi(this.indexes_,(i,s)=>{const o=fn(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===Zt)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(B.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Si(a,o.getCompare())}else return Zt;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new B(e.name,a))),l.insert(e,e.node)}});return new rt(r,this.indexSet_)}removeFromIndexes(e,n){const r=yi(this.indexes_,i=>{if(i===Zt)return i;{const s=n.get(e.name);return s?i.remove(new B(e.name,s)):i}});return new rt(r,this.indexSet_)}}/**
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
 */let Ln;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&vf(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ln||(Ln=new L(new De(Pa),null,rt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ln:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(X(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new B(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ln:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{C(W(e)!==".priority"||Dt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(X(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(re,(o,a)=>{n[o]=a.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gf(this.getPriority().val())+":"),this.forEachChild(re,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Wh(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new B(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rr?-1:0}withIndex(e){if(e===rn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(re),i=n.getIterator(re);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vE extends L{constructor(){super(new De(Pa),L.EMPTY_NODE,rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Rr=new vE;Object.defineProperties(B,{MIN:{value:new B(gn,L.EMPTY_NODE)},MAX:{value:new B(zt,Rr)}});pf.__EMPTY_NODE=L.EMPTY_NODE;ce.__childrenNodeConstructor=L;uE(Rr);hE(Rr);/**
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
 */const mE=!0;function de(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,de(e))}if(!(t instanceof Array)&&mE){const n=[];let r=!1;if(Re(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=de(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new B(o,l)))}}),n.length===0)return L.EMPTY_NODE;const s=Si(n,cE,o=>o.name,Pa);if(r){const o=Si(n,re.getCompare());return new L(s,de(e),new rt({".priority":o},{".priority":re}))}else return new L(s,de(e),rt.Default)}else{let n=L.EMPTY_NODE;return Re(t,(r,i)=>{if(ct(t,r)&&r.substring(0,1)!=="."){const s=de(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(de(e))}}dE(de);/**
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
 */class _E extends us{constructor(e){super(),this.indexPath_=e,C(!U(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Dn(e.name,n.name):s}makePost(e,n){const r=de(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new B(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Rr);return new B(zt,e)}toString(){return uf(this.indexPath_,0).join("/")}}/**
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
 */class bE extends us{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Dn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const r=de(e);return new B(n,r)}toString(){return".value"}}const yE=new bE;/**
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
 */function bf(t){return{type:"value",snapshotNode:t}}function vn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function or(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function IE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Aa{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(sr(n,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vn(n,r)):o.trackChildChange(or(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(re,(i,s)=>{n.hasChild(i)||r.trackChildChange(sr(i,s))}),n.isLeafNode()||n.forEachChild(re,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(or(i,s,o))}else r.trackChildChange(vn(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ar{constructor(e){this.indexedFilter_=new Aa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ar.getStartPost_(e),this.endPost_=ar.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new B(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(re,(o,a)=>{s.matches(new B(o,a))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class wE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ar(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new B(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new B(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(or(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(sr(n,d));const g=a.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(vn(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(sr(c.name,c.node)),s.trackChildChange(vn(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
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
 */class Na{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=re}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gn}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===re}copy(){const e=new Na;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function CE(t){return t.loadsAllData()?new Aa(t.getIndex()):t.hasLimit()?new wE(t):new ar(t)}function Vc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===re?n="$priority":t.index_===yE?n="$value":t.index_===rn?n="$key":(C(t.index_ instanceof _E,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=oe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=oe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+oe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=oe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function qc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==re&&(e.i=t.index_.toString()),e}/**
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
 */class Ti extends af{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ti.getListenId_(e,r),a={};this.listens_[o]=a;const l=Vc(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),fn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=Ti.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Vc(e._queryParams),r=e._path.toString(),i=new ls;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Sn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=nr(a.responseText)}catch{xe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&xe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class EE{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Di(){return{value:null,children:new Map}}function yf(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,Di());const i=t.children.get(r);e=X(e),yf(i,e,n)}}function Do(t,e,n){t.value!==null?n(e,t.value):SE(t,(r,i)=>{const s=new J(e.toString()+"/"+r);Do(i,s,n)})}function SE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class TE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const zc=10*1e3,DE=30*1e3,xE=5*60*1e3;class RE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new TE(e);const r=zc+(DE-zc)*Math.random();Gn(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(i,s)=>{s>0&&ct(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Gn(this.reportStats_.bind(this),Math.floor(Math.random()*2*xE))}}/**
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
 */var Ve;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ve||(Ve={}));function If(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Oa(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ka(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xi{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ve.ACK_USER_WRITE,this.source=If()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new xi(V(),n,this.revert)}}else return C(W(this.path)===e,"operationForChild called for unrelated child."),new xi(X(this.path),this.affectedTree,this.revert)}}/**
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
 */class lr{constructor(e,n){this.source=e,this.path=n,this.type=Ve.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new lr(this.source,V()):new lr(this.source,X(this.path))}}/**
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
 */class jt{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ve.OVERWRITE}operationForChild(e){return U(this.path)?new jt(this.source,V(),this.snap.getImmediateChild(e)):new jt(this.source,X(this.path),this.snap)}}/**
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
 */class cr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ve.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new jt(this.source,V(),n.value):new cr(this.source,V(),n)}else return C(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new cr(this.source,X(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class xt{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class PE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function AE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(IE(o.childName,o.snapshotNode))}),Fn(t,i,"child_removed",e,r,n),Fn(t,i,"child_added",e,r,n),Fn(t,i,"child_moved",s,r,n),Fn(t,i,"child_changed",e,r,n),Fn(t,i,"value",e,r,n),i}function Fn(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>OE(t,a,l)),o.forEach(a=>{const l=NE(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function NE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function OE(t,e,n){if(e.childName==null||n.childName==null)throw En("Should only compare child_ events.");const r=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ds(t,e){return{eventCache:t,serverCache:e}}function Vn(t,e,n,r){return ds(new xt(e,n,r),t.serverCache)}function wf(t,e,n,r){return ds(t.eventCache,new xt(e,n,r))}function Ri(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Kt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Xs;const kE=()=>(Xs||(Xs=new De(bC)),Xs);class ee{constructor(e,n=kE()){this.value=e,this.children=n}static fromObject(e){let n=new ee(null);return Re(e,(r,i)=>{n=n.set(new J(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(U(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(X(e),n);return s!=null?{path:ae(new J(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(X(e)):new ee(null)}}set(e,n){if(U(e))return new ee(n,this.children);{const r=W(e),s=(this.children.get(r)||new ee(null)).set(X(e),n),o=this.children.insert(r,s);return new ee(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(X(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ee(null):new ee(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(X(e)):null}}setTree(e,n){if(U(e))return n;{const r=W(e),s=(this.children.get(r)||new ee(null)).setTree(X(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ee(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(X(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(X(e),ae(n,i),r):new ee(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class qe{constructor(e){this.writeTree_=e}static empty(){return new qe(new ee(null))}}function qn(t,e,n){if(U(e))return new qe(new ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=we(i,e);return s=s.updateChild(o,n),new qe(t.writeTree_.set(i,s))}else{const i=new ee(n),s=t.writeTree_.setTree(e,i);return new qe(s)}}}function jc(t,e,n){let r=t;return Re(n,(i,s)=>{r=qn(r,ae(e,i),s)}),r}function Kc(t,e){if(U(e))return qe.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new qe(n)}}function xo(t,e){return Jt(t,e)!=null}function Jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(we(n.path,e)):null}function Yc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(re,(r,i)=>{e.push(new B(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new B(r,i.value))}),e}function Ct(t,e){if(U(e))return t;{const n=Jt(t,e);return n!=null?new qe(new ee(n)):new qe(t.writeTree_.subtree(e))}}function Ro(t){return t.writeTree_.isEmpty()}function mn(t,e){return Cf(V(),t.writeTree_,e)}function Cf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Cf(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function hs(t,e){return Df(e,t)}function ME(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qn(t.visibleWrites,e,n)),t.lastWriteId=r}function LE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function FE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&BE(a,r.path)?i=!1:Ge(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return UE(t),!0;if(r.snap)t.visibleWrites=Kc(t.visibleWrites,r.path);else{const a=r.children;Re(a,l=>{t.visibleWrites=Kc(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function BE(t,e){if(t.snap)return Ge(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ge(ae(t.path,n),e))return!0;return!1}function UE(t){t.visibleWrites=Ef(t.allWrites,WE,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function WE(t){return t.visible}function Ef(t,e,n){let r=qe.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ge(n,o)?(a=we(n,o),r=qn(r,a,s.snap)):Ge(o,n)&&(a=we(o,n),r=qn(r,V(),s.snap.getChild(a)));else if(s.children){if(Ge(n,o))a=we(n,o),r=jc(r,a,s.children);else if(Ge(o,n))if(a=we(o,n),U(a))r=jc(r,V(),s.children);else{const l=fn(s.children,W(a));if(l){const c=l.getChild(X(a));r=qn(r,V(),c)}}}else throw En("WriteRecord should have .snap or .children")}}return r}function Sf(t,e,n,r,i){if(!r&&!i){const s=Jt(t.visibleWrites,e);if(s!=null)return s;{const o=Ct(t.visibleWrites,e);if(Ro(o))return n;if(n==null&&!xo(o,V()))return null;{const a=n||L.EMPTY_NODE;return mn(o,a)}}}else{const s=Ct(t.visibleWrites,e);if(!i&&Ro(s))return n;if(!i&&n==null&&!xo(s,V()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Ge(c.path,e)||Ge(e,c.path))},a=Ef(t.allWrites,o,e),l=n||L.EMPTY_NODE;return mn(a,l)}}}function $E(t,e,n){let r=L.EMPTY_NODE;const i=Jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(re,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ct(t.visibleWrites,e);return n.forEachChild(re,(o,a)=>{const l=mn(Ct(s,new J(o)),a);r=r.updateImmediateChild(o,l)}),Yc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ct(t.visibleWrites,e);return Yc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function HE(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(xo(t.visibleWrites,s))return null;{const o=Ct(t.visibleWrites,s);return Ro(o)?i.getChild(n):mn(o,i.getChild(n))}}function GE(t,e,n,r){const i=ae(e,n),s=Jt(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ct(t.visibleWrites,i);return mn(o,r.getNode().getImmediateChild(n))}else return null}function VE(t,e){return Jt(t.visibleWrites,e)}function qE(t,e,n,r,i,s,o){let a;const l=Ct(t.visibleWrites,e),c=Jt(l,V());if(c!=null)a=c;else if(n!=null)a=mn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=h.getNext();for(;f&&u.length<i;)d(f,r)!==0&&u.push(f),f=h.getNext();return u}else return[]}function zE(){return{visibleWrites:qe.empty(),allWrites:[],lastWriteId:-1}}function Pi(t,e,n,r){return Sf(t.writeTree,t.treePath,e,n,r)}function Ma(t,e){return $E(t.writeTree,t.treePath,e)}function Jc(t,e,n,r){return HE(t.writeTree,t.treePath,e,n,r)}function Ai(t,e){return VE(t.writeTree,ae(t.treePath,e))}function jE(t,e,n,r,i,s){return qE(t.writeTree,t.treePath,e,n,r,i,s)}function La(t,e,n){return GE(t.writeTree,t.treePath,e,n)}function Tf(t,e){return Df(ae(t.treePath,e),t.writeTree)}function Df(t,e){return{treePath:t,writeTree:e}}/**
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
 */class KE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,or(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,sr(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vn(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,or(r,e.snapshotNode,i.oldSnap));else throw En("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class YE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const xf=new YE;class Fa{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return La(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kt(this.viewCache_),s=jE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function JE(t){return{filter:t}}function QE(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function XE(t,e,n,r,i){const s=new KE;let o,a;if(n.type===Ve.OVERWRITE){const c=n;c.source.fromUser?o=Po(t,e,c.path,c.snap,r,i,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!U(c.path),o=Ni(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Ve.MERGE){const c=n;c.source.fromUser?o=e0(t,e,c.path,c.children,r,i,s):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ao(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Ve.ACK_USER_WRITE){const c=n;c.revert?o=r0(t,e,c.path,r,i,s):o=t0(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Ve.LISTEN_COMPLETE)o=n0(t,e,n.path,r,s);else throw En("Unknown operation type: "+n.type);const l=s.getChanges();return ZE(e,o,l),{viewCache:o,changes:l}}function ZE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ri(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(bf(Ri(e)))}}function Rf(t,e,n,r,i,s){const o=e.eventCache;if(Ai(r,n)!=null)return e;{let a,l;if(U(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Kt(e),u=c instanceof L?c:L.EMPTY_NODE,d=Ma(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Pi(r,Kt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=W(n);if(c===".priority"){C(Dt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Jc(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=X(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Jc(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=La(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return Vn(e,a,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Ni(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(U(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),f,null)}else{const f=W(n);if(!l.isCompleteForPath(n)&&Dt(n)>1)return e;const p=X(n),v=l.getNode().getImmediateChild(f).updateChild(p,r);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,xf,null)}const d=wf(e,c,l.isFullyInitialized()||U(n),u.filtersNodes()),h=new Fa(i,d,s);return Rf(t,d,n,i,h,a)}function Po(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new Fa(i,e,s);if(U(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Vn(e,c,!0,t.filter.filtersNodes());else{const d=W(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Vn(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=X(n),f=a.getNode().getImmediateChild(d);let p;if(U(h))p=r;else{const g=u.getCompleteChild(d);g!=null?cf(h)===".priority"&&g.getChild(df(h)).isEmpty()?p=g:p=g.updateChild(h,r):p=L.EMPTY_NODE}if(f.equals(p))l=e;else{const g=t.filter.updateChild(a.getNode(),d,p,h,u,o);l=Vn(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Qc(t,e){return t.eventCache.isCompleteForChild(e)}function e0(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ae(n,l);Qc(e,W(u))&&(a=Po(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ae(n,l);Qc(e,W(u))||(a=Po(t,a,u,c,i,s,o))}),a}function Xc(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Ao(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;U(n)?c=r:c=new ee(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Xc(t,f,h);l=Ni(t,l,new J(d),p,i,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=Xc(t,p,h);l=Ni(t,l,new J(d),g,i,s,o,a)}}),l}function t0(t,e,n,r,i,s,o){if(Ai(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(U(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ni(t,e,n,l.getNode().getChild(n),i,s,a,o);if(U(n)){let c=new ee(null);return l.getNode().forEachChild(rn,(u,d)=>{c=c.set(new J(u),d)}),Ao(t,e,n,c,i,s,a,o)}else return e}else{let c=new ee(null);return r.foreach((u,d)=>{const h=ae(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ao(t,e,n,c,i,s,a,o)}}function n0(t,e,n,r,i){const s=e.serverCache,o=wf(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return Rf(t,o,n,r,xf,i)}function r0(t,e,n,r,i,s){let o;if(Ai(r,n)!=null)return e;{const a=new Fa(r,e,i),l=e.eventCache.getNode();let c;if(U(n)||W(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Pi(r,Kt(e));else{const d=e.serverCache.getNode();C(d instanceof L,"serverChildren would be complete if leaf node"),u=Ma(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=W(n);let d=La(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,X(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,L.EMPTY_NODE,X(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pi(r,Kt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ai(r,V())!=null,Vn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class i0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Aa(r.getIndex()),s=CE(r);this.processor_=JE(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(L.EMPTY_NODE,a.getNode(),null),u=new xt(l,o.isFullyInitialized(),i.filtersNodes()),d=new xt(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=ds(d,u),this.eventGenerator_=new PE(this.query_)}get query(){return this.query_}}function s0(t){return t.viewCache_.serverCache.getNode()}function o0(t){return Ri(t.viewCache_)}function a0(t,e){const n=Kt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Zc(t){return t.eventRegistrations_.length===0}function l0(t,e){t.eventRegistrations_.push(e)}function eu(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function tu(t,e,n,r){e.type===Ve.MERGE&&e.source.queryId!==null&&(C(Kt(t.viewCache_),"We should always have a full cache before handling merges"),C(Ri(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=XE(t.processor_,i,e,n,r);return QE(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Pf(t,s.changes,s.viewCache.eventCache.getNode(),null)}function c0(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(re,(s,o)=>{r.push(vn(s,o))}),n.isFullyInitialized()&&r.push(bf(n.getNode())),Pf(t,r,n.getNode(),e)}function Pf(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return AE(t.eventGenerator_,e,n,i)}/**
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
 */let Oi;class Af{constructor(){this.views=new Map}}function u0(t){C(!Oi,"__referenceConstructor has already been defined"),Oi=t}function d0(){return C(Oi,"Reference.ts has not been loaded"),Oi}function h0(t){return t.views.size===0}function Ba(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),tu(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(tu(o,e,n,r));return s}}function Nf(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Pi(n,i?r:null),l=!1;a?l=!0:r instanceof L?(a=Ma(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const c=ds(new xt(a,l,!1),new xt(r,i,!1));return new i0(e,c)}return o}function f0(t,e,n,r,i,s){const o=Nf(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),l0(o,n),c0(o,n)}function p0(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Rt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(eu(c,n,r)),Zc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(eu(l,n,r)),Zc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Rt(t)&&s.push(new(d0())(e._repo,e._path)),{removed:s,events:o}}function Of(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Et(t,e){let n=null;for(const r of t.views.values())n=n||a0(r,e);return n}function kf(t,e){if(e._queryParams.loadsAllData())return fs(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Mf(t,e){return kf(t,e)!=null}function Rt(t){return fs(t)!=null}function fs(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ki;function g0(t){C(!ki,"__referenceConstructor has already been defined"),ki=t}function v0(){return C(ki,"Reference.ts has not been loaded"),ki}let m0=1;class nu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=zE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lf(t,e,n,r,i){return ME(t.pendingWriteTree_,e,n,r,i),i?Ar(t,new jt(If(),e,n)):[]}function Ut(t,e,n=!1){const r=LE(t.pendingWriteTree_,e);if(FE(t.pendingWriteTree_,e)){let s=new ee(null);return r.snap!=null?s=s.set(V(),!0):Re(r.children,o=>{s=s.set(new J(o),!0)}),Ar(t,new xi(r.path,s,n))}else return[]}function Pr(t,e,n){return Ar(t,new jt(Oa(),e,n))}function _0(t,e,n){const r=ee.fromObject(n);return Ar(t,new cr(Oa(),e,r))}function b0(t,e){return Ar(t,new lr(Oa(),e))}function y0(t,e,n){const r=Wa(t,n);if(r){const i=$a(r),s=i.path,o=i.queryId,a=we(s,e),l=new lr(ka(o),a);return Ha(t,s,l)}else return[]}function Ff(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Mf(o,e))){const l=p0(o,e,n,r);h0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,f)=>Rt(f));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const f=E0(h);for(let p=0;p<f.length;++p){const g=f[p],v=g.query,m=$f(t,g);t.listenProvider_.startListening(zn(v),ur(t,v),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(zn(e),null):c.forEach(h=>{const f=t.queryToTagMap.get(ps(h));t.listenProvider_.stopListening(zn(h),f)}))}S0(t,c)}return a}function Bf(t,e,n,r){const i=Wa(t,r);if(i!=null){const s=$a(i),o=s.path,a=s.queryId,l=we(o,e),c=new jt(ka(a),l,n);return Ha(t,o,c)}else return[]}function I0(t,e,n,r){const i=Wa(t,r);if(i){const s=$a(i),o=s.path,a=s.queryId,l=we(o,e),c=ee.fromObject(n),u=new cr(ka(a),l,c);return Ha(t,o,u)}else return[]}function w0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,f)=>{const p=we(h,i);s=s||Et(f,p),o=o||Rt(f)});let a=t.syncPointTree_.get(i);a?(o=o||Rt(a),s=s||Et(a,V())):(a=new Af,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=Et(p,V());g&&(s=s.updateImmediateChild(f,g))}));const c=Mf(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=ps(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=T0();t.queryToTagMap.set(h,f),t.tagToQueryMap.set(f,h)}const u=hs(t.pendingWriteTree_,i);let d=f0(a,e,n,u,s,l);if(!c&&!o&&!r){const h=kf(a,e);d=d.concat(D0(t,e,h))}return d}function Ua(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=we(o,e),c=Et(a,l);if(c)return c});return Sf(i,e,s,n,!0)}function C0(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=we(c,n);r=r||Et(u,d)});let i=t.syncPointTree_.get(n);i?r=r||Et(i,V()):(i=new Af,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new xt(r,!0,!1):null,a=hs(t.pendingWriteTree_,e._path),l=Nf(i,e,a,s?o.getNode():L.EMPTY_NODE,s);return o0(l)}function Ar(t,e){return Uf(e,t.syncPointTree_,null,hs(t.pendingWriteTree_,V()))}function Uf(t,e,n,r){if(U(t.path))return Wf(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Et(i,V()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Tf(r,o);s=s.concat(Uf(a,l,c,u))}return i&&(s=s.concat(Ba(i,t,r,n))),s}}function Wf(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Et(i,V()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Tf(r,o),u=t.operationForChild(o);u&&(s=s.concat(Wf(u,a,l,c)))}),i&&(s=s.concat(Ba(i,t,r,n))),s}function $f(t,e){const n=e.query,r=ur(t,n);return{hashFn:()=>(s0(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?y0(t,n._path,r):b0(t,n._path);{const s=wC(i,n);return Ff(t,n,null,s)}}}}function ur(t,e){const n=ps(e);return t.queryToTagMap.get(n)}function ps(t){return t._path.toString()+"$"+t._queryIdentifier}function Wa(t,e){return t.tagToQueryMap.get(e)}function $a(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function Ha(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=hs(t.pendingWriteTree_,e);return Ba(r,n,i,null)}function E0(t){return t.fold((e,n,r)=>{if(n&&Rt(n))return[fs(n)];{let i=[];return n&&(i=Of(n)),Re(r,(s,o)=>{i=i.concat(o)}),i}})}function zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(v0())(t._repo,t._path):t}function S0(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ps(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function T0(){return m0++}function D0(t,e,n){const r=e._path,i=ur(t,e),s=$f(t,n),o=t.listenProvider_.startListening(zn(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)C(!Rt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!U(c)&&u&&Rt(u))return[fs(u).query];{let h=[];return u&&(h=h.concat(Of(u).map(f=>f.query))),Re(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(zn(u),ur(t,u))}}return o}/**
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
 */class Ga{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ga(n)}node(){return this.node_}}class Va{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Va(this.syncTree_,n)}node(){return Ua(this.syncTree_,this.path_)}}const x0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ru=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return R0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return P0(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},R0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},P0=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},A0=function(t,e,n,r){return qa(e,new Va(n,t),r)},Hf=function(t,e,n){return qa(t,new Ga(e),n)};function qa(t,e,n){const r=t.getPriority().val(),i=ru(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ru(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ce(a,de(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ce(i))),o.forEachChild(re,(a,l)=>{const c=qa(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class za{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ja(t,e){let n=e instanceof J?e:new J(e),r=t,i=W(n);for(;i!==null;){const s=fn(r.node.children,i)||{children:{},childCount:0};r=new za(i,r,s),n=X(n),i=W(n)}return r}function Rn(t){return t.node.value}function Gf(t,e){t.node.value=e,No(t)}function Vf(t){return t.node.childCount>0}function N0(t){return Rn(t)===void 0&&!Vf(t)}function gs(t,e){Re(t.node.children,(n,r)=>{e(new za(n,t,r))})}function qf(t,e,n,r){n&&!r&&e(t),gs(t,i=>{qf(i,e,!0,r)}),n&&r&&e(t)}function O0(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Nr(t){return new J(t.parent===null?t.name:Nr(t.parent)+"/"+t.name)}function No(t){t.parent!==null&&k0(t.parent,t.name,t)}function k0(t,e,n){const r=N0(n),i=ct(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,No(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,No(t))}/**
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
 */const M0=/[\[\].#$\/\u0000-\u001F\u007F]/,L0=/[\[\].#$\u0000-\u001F\u007F]/,Zs=10*1024*1024,zf=function(t){return typeof t=="string"&&t.length!==0&&!M0.test(t)},jf=function(t){return typeof t=="string"&&t.length!==0&&!L0.test(t)},F0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jf(t)},B0=function(t,e,n,r){r&&e===void 0||Ka(Ia(t,"value"),e,n)},Ka=function(t,e,n){const r=n instanceof J?new tE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Lt(r));if(typeof e=="function")throw new Error(t+"contains a function "+Lt(r)+" with contents = "+e.toString());if($h(e))throw new Error(t+"contains "+e.toString()+" "+Lt(r));if(typeof e=="string"&&e.length>Zs/3&&cs(e)>Zs)throw new Error(t+"contains a string greater than "+Zs+" utf8 bytes "+Lt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Re(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!zf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Lt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nE(r,o),Ka(t,a,r),rE(r)}),i&&s)throw new Error(t+' contains ".value" child '+Lt(r)+" in addition to actual children.")}},Kf=function(t,e,n,r){if(!(r&&n===void 0)&&!jf(n))throw new Error(Ia(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},U0=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Kf(t,e,n,r)},W0=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!zf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!F0(n))throw new Error(Ia(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class H0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yf(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!hf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ze(t,e,n){Yf(t,n),G0(t,r=>Ge(r,e)||Ge(e,r))}function G0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(V0(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function V0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();$t&&be("event: "+n.toString()),xn(r)}}}/**
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
 */const q0="repo_interrupt",z0=25;class j0{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new H0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Di(),this.transactionQueueTree_=new za,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function K0(t,e,n){if(t.stats_=Da(t.repoInfo_),t.forceRestClient_||TC())t.server_=new Ti(t.repoInfo_,(r,i,s,o)=>{iu(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>su(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ot(t.repoInfo_,e,(r,i,s,o)=>{iu(t,r,i,s,o)},r=>{su(t,r)},r=>{J0(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=AC(t.repoInfo_,()=>new RE(t.stats_,t.server_)),t.infoData_=new EE,t.infoSyncTree_=new nu({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Pr(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ja(t,"connected",!1),t.serverSyncTree_=new nu({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ze(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Y0(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ya(t){return x0({timestamp:Y0(t)})}function iu(t,e,n,r,i){t.dataUpdateCount++;const s=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=yi(n,c=>de(c));o=I0(t.serverSyncTree_,s,l,i)}else{const l=de(n);o=Bf(t.serverSyncTree_,s,l,i)}else if(r){const l=yi(n,c=>de(c));o=_0(t.serverSyncTree_,s,l)}else{const l=de(n);o=Pr(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ms(t,s)),Ze(t.eventQueue_,a,o)}function su(t,e){Ja(t,"connected",e),e===!1&&Z0(t)}function J0(t,e){Re(e,(n,r)=>{Ja(t,n,r)})}function Ja(t,e,n){const r=new J("/.info/"+e),i=de(n);t.infoData_.updateSnapshot(r,i);const s=Pr(t.infoSyncTree_,r,i);Ze(t.eventQueue_,r,s)}function Jf(t){return t.nextWriteId_++}function Q0(t,e,n){const r=C0(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=de(i).withIndex(e._queryParams.getIndex());w0(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Pr(t.serverSyncTree_,e._path,s);else{const a=ur(t.serverSyncTree_,e);o=Bf(t.serverSyncTree_,e._path,s,a)}return Ze(t.eventQueue_,e._path,o),Ff(t.serverSyncTree_,e,n,null,!0),s},i=>(vs(t,"get for query "+oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function X0(t,e,n,r,i){vs(t,"set",{path:e.toString(),value:n,priority:r});const s=Ya(t),o=de(n,r),a=Ua(t.serverSyncTree_,e),l=Hf(o,a,s),c=Jf(t),u=Lf(t.serverSyncTree_,e,l,c,!0);Yf(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||xe("set at "+e+" failed: "+h);const g=Ut(t.serverSyncTree_,c,!p);Ze(t.eventQueue_,e,g),tS(t,i,h,f)});const d=tp(t,e);ms(t,d),Ze(t.eventQueue_,d,[])}function Z0(t){vs(t,"onDisconnectEvents");const e=Ya(t),n=Di();Do(t.onDisconnect_,V(),(i,s)=>{const o=A0(i,s,t.serverSyncTree_,e);yf(n,i,o)});let r=[];Do(n,V(),(i,s)=>{r=r.concat(Pr(t.serverSyncTree_,i,s));const o=tp(t,i);ms(t,o)}),t.onDisconnect_=Di(),Ze(t.eventQueue_,V(),r)}function eS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(q0)}function vs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function tS(t,e,n,r){e&&xn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Qf(t,e,n){return Ua(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Qa(t,e=t.transactionQueueTree_){if(e||_s(t,e),Rn(e)){const n=Zf(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nS(t,Nr(e),n)}else Vf(e)&&gs(e,n=>{Qa(t,n)})}function nS(t,e,n){const r=n.map(c=>c.currentWriteId),i=Qf(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];C(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=we(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{vs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Ut(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_s(t,ja(t.transactionQueueTree_,e)),Qa(t,t.transactionQueueTree_),Ze(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)xn(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{xe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ms(t,e)}},o)}function ms(t,e){const n=Xf(t,e),r=Nr(n),i=Zf(t,n);return rS(t,i,r),r}function rS(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=we(n,l.path);let u=!1,d;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Ut(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=z0)u=!0,d="maxretry",i=i.concat(Ut(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Qf(t,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Ka("transaction failed: Data returned ",f,l.path);let p=de(f);typeof f=="object"&&f!=null&&ct(f,".priority")||(p=p.updatePriority(h.getPriority()));const v=l.currentWriteId,m=Ya(t),b=Hf(p,h,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=b,l.currentWriteId=Jf(t),o.splice(o.indexOf(v),1),i=i.concat(Lf(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(Ut(t.serverSyncTree_,v,!0))}else u=!0,d="nodata",i=i.concat(Ut(t.serverSyncTree_,l.currentWriteId,!0))}Ze(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}_s(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)xn(r[a]);Qa(t,t.transactionQueueTree_)}function Xf(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&Rn(r)===void 0;)r=ja(r,n),e=X(e),n=W(e);return r}function Zf(t,e){const n=[];return ep(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ep(t,e,n){const r=Rn(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);gs(e,i=>{ep(t,i,n)})}function _s(t,e){const n=Rn(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Gf(e,n.length>0?n:void 0)}gs(e,r=>{_s(t,r)})}function tp(t,e){const n=Nr(Xf(t,e)),r=ja(t.transactionQueueTree_,e);return O0(r,i=>{eo(t,i)}),eo(t,r),qf(r,i=>{eo(t,i)}),n}function eo(t,e){const n=Rn(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ut(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Gf(e,void 0):n.length=s+1,Ze(t.eventQueue_,Nr(e),i);for(let o=0;o<r.length;o++)xn(r[o])}}/**
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
 */function iS(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const ou=function(t,e){const n=oS(t),r=n.namespace;n.domain==="firebase.com"&&at(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&at("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zh(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new J(n.pathString)}},oS=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=iS(t.substring(u,d)));const h=sS(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class aS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+oe(this.snapshot.exportVal())}}class lS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class cS{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Xa{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:cf(this._path)}get ref(){return new ut(this._repo,this._path)}get _queryIdentifier(){const e=qc(this._queryParams),n=Sa(e);return n==="{}"?"default":n}get _queryObject(){return qc(this._queryParams)}isEqual(e){if(e=Me(e),!(e instanceof Xa))return!1;const n=this._repo===e._repo,r=hf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+eE(this._path)}}class ut extends Xa{constructor(e,n){super(e,n,new Na,!1)}get parent(){const e=df(this._path);return e===null?null:new ut(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class dr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),r=Mi(this.ref,e);return new dr(this._node.getChild(n),r,re)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new dr(i,Mi(this.ref,r),re)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function au(t,e){return t=Me(t),t._checkNotDeleted("ref"),e!==void 0?Mi(t._root,e):t._root}function Mi(t,e){return t=Me(t),W(t._path)===null?U0("child","path",e,!1):Kf("child","path",e,!1),new ut(t._repo,ae(t._path,e))}function uS(t,e){t=Me(t),W0("set",t._path),B0("set",e,t._path,!1);const n=new ls;return X0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function dS(t){t=Me(t);const e=new cS(()=>{}),n=new Za(e);return Q0(t._repo,t,n).then(r=>new dr(r,new ut(t._repo,t._path),t._queryParams.getIndex()))}class Za{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new aS("value",this,new dr(e.snapshotNode,new ut(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lS(this,e,n):null}matches(e){return e instanceof Za?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}u0(ut);g0(ut);/**
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
 */const hS="FIREBASE_DATABASE_EMULATOR_HOST",Oo={};let fS=!1;function pS(t,e,n,r){t.repoInfo_=new Zh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function gS(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||at("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ou(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[hS]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=ou(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new nn(nn.OWNER):new xC(t.name,t.options,e);$0("Invalid Firebase Database URL",o),U(o.path)||at("Database URL must point to the root of a Firebase Database (not including a child path).");const d=mS(a,t,u,new DC(t.name,n));return new _S(d,t)}function vS(t,e){const n=Oo[e];(!n||n[t.key]!==t)&&at(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eS(t),delete n[t.key]}function mS(t,e,n,r){let i=Oo[e.name];i||(i={},Oo[e.name]=i);let s=i[t.toURLString()];return s&&at("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new j0(t,fS,n,r),i[t.toURLString()]=s,s}class _S{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(K0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ut(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&at("Cannot call "+e+" on a deleted database.")}}function lu(t=Mh(),e){const n=Ea(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=GI("database");r&&bS(n,...r)}return n}function bS(t,e,n,r={}){t=Me(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&at("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&at('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new nn(nn.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:VI(r.mockUserToken,t.app.options.projectId);s=new nn(o)}pS(i,e,n,s)}/**
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
 */function yS(t){hC(Tn),pn(new Vt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return gS(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),wt(xc,Rc,t),wt(xc,Rc,"esm2017")}ot.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ot.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};yS();function el(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function np(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IS=np,rp=new Tr("auth","Firebase",np());/**
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
 */const Li=new wa("@firebase/auth");function wS(t,...e){Li.logLevel<=Y.WARN&&Li.warn(`Auth (${Tn}): ${t}`,...e)}function ei(t,...e){Li.logLevel<=Y.ERROR&&Li.error(`Auth (${Tn}): ${t}`,...e)}/**
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
 */function et(t,...e){throw tl(t,...e)}function Qe(t,...e){return tl(t,...e)}function ip(t,e,n){const r=Object.assign(Object.assign({},IS()),{[e]:n});return new Tr("auth","Firebase",r).create(e,{appName:t.name})}function CS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(t,"argument-error"),ip(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function tl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rp.create(t,...e)}function F(t,e,...n){if(!t)throw tl(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ei(e),new Error(e)}function lt(t,e){t||it(e)}/**
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
 */function ko(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ES(){return cu()==="http:"||cu()==="https:"}function cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function SS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ES()||qI()||"connection"in navigator)?navigator.onLine:!0}function TS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Or{constructor(e,n){this.shortDelay=e,this.longDelay=n,lt(n>e,"Short delay should be less than long delay!"),this.isMobile=ya()||Rh()}get(){return SS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nl(t,e){lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class sp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const DS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xS=new Or(3e4,6e4);function op(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,r,i={}){return ap(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Sn(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),sp.fetch()(lp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function ap(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DS),e);try{const i=new PS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Kr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kr(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ip(t,u,c);et(t,u)}}catch(i){if(i instanceof At)throw i;et(t,"network-request-failed",{message:String(i)})}}async function RS(t,e,n,r,i={}){const s=await kr(t,e,n,r,i);return"mfaPendingCredential"in s&&et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nl(t.config,i):`${t.config.apiScheme}://${i}`}class PS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),xS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function AS(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function NS(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function OS(t,e=!1){const n=Me(t),r=await n.getIdToken(e),i=rl(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jn(to(i.auth_time)),issuedAtTime:jn(to(i.iat)),expirationTime:jn(to(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function to(t){return Number(t)*1e3}function rl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ei("JWT malformed, contained fewer than 3 sections"),null;try{const i=bi(n);return i?JSON.parse(i):(ei("Failed to decode base64 JWT payload"),null)}catch(i){return ei("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kS(t){const e=rl(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&MS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await hr(t,NS(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?US(s.providerUserInfo):[],a=BS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new cp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function FS(t){const e=Me(t);await Fi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function BS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function US(t){return t.map(e=>{var{providerId:n}=e,r=el(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WS(t,e){const n=await ap(t,{},async()=>{const r=Sn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lp(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fr;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function ft(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=el(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new cp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await hr(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return OS(this,e)}reload(){return FS(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hr(this,AS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:y,isAnonymous:x,providerData:S,stsTokenManager:R}=n;F(I&&R,e,"internal-error");const N=fr.fromJSON(this.name,R);F(typeof I=="string",e,"internal-error"),ft(d,e.name),ft(h,e.name),F(typeof y=="boolean",e,"internal-error"),F(typeof x=="boolean",e,"internal-error"),ft(f,e.name),ft(p,e.name),ft(g,e.name),ft(v,e.name),ft(m,e.name),ft(b,e.name);const O=new Ht({uid:I,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:x,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:N,createdAt:m,lastLoginAt:b});return S&&Array.isArray(S)&&(O.providerData=S.map(K=>Object.assign({},K))),v&&(O._redirectEventId=v),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new fr;i.updateFromServerResponse(n);const s=new Ht({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fi(s),s}}/**
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
 */const uu=new Map;function st(t){lt(t instanceof Function,"Expected a class definition");let e=uu.get(t);return e?(lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uu.set(t,e),e)}/**
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
 */class up{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}up.type="NONE";const du=up;/**
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
 */function ti(t,e,n){return`firebase:${t}:${e}:${n}`}class sn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ti(this.userKey,i.apiKey,s),this.fullPersistenceKey=ti("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sn(st(du),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||st(du);const o=ti(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Ht._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new sn(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new sn(s,e,r))}}/**
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
 */function hu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gp(e))return"Blackberry";if(vp(e))return"Webos";if(il(e))return"Safari";if((e.includes("chrome/")||hp(e))&&!e.includes("edge/"))return"Chrome";if(pp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dp(t=ye()){return/firefox\//i.test(t)}function il(t=ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hp(t=ye()){return/crios\//i.test(t)}function fp(t=ye()){return/iemobile/i.test(t)}function pp(t=ye()){return/android/i.test(t)}function gp(t=ye()){return/blackberry/i.test(t)}function vp(t=ye()){return/webos/i.test(t)}function bs(t=ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $S(t=ye()){var e;return bs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HS(){return zI()&&document.documentMode===10}function mp(t=ye()){return bs(t)||pp(t)||vp(t)||gp(t)||/windows phone/i.test(t)||fp(t)}function GS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _p(t,e=[]){let n;switch(t){case"Browser":n=hu(ye());break;case"Worker":n=`${hu(ye())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tn}/${r}`}async function bp(t,e){return kr(t,"GET","/v2/recaptchaConfig",op(t,e))}function fu(t){return t!==void 0&&t.enterprise!==void 0}class yp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function VS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ip(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VS().appendChild(r)})}function qS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const zS="https://www.google.com/recaptcha/enterprise.js?render=",jS="recaptcha-enterprise",KS="NO_RECAPTCHA";class YS{constructor(e){this.type=jS,this.auth=Mr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{bp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new yp(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;fu(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(KS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&fu(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ip(zS+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class JS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class QS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pu(this),this.idTokenSubscription=new pu(this),this.beforeStateQueue=new JS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=st(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(st(e))})}async initializeRecaptchaConfig(){const e=await bp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new yp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new YS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&st(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[st(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_p(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mr(t){return Me(t)}class pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=tw(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function XS(t,e){const n=Ea(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ii(s,e??{}))return i;et(i,"already-initialized")}return n.initialize({options:e})}function ZS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(st);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eT(t,e,n){const r=Mr(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=wp(e),{host:o,port:a}=tT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nT()}function wp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tT(t){const e=wp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gu(o)}}}function gu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
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
 */async function on(t,e){return RS(t,"POST","/v1/accounts:signInWithIdp",op(t,e))}/**
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
 */const rT="http://localhost";class Yt extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=el(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return on(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,on(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,on(e,n)}buildRequest(){const e={requestUri:rT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sn(n)}return e}}/**
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
 */class sl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lr extends sl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pt extends Lr{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";pt.PROVIDER_ID="facebook.com";/**
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
 */class tt extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tt.credential(n,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
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
 */class gt extends Lr{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com";gt.PROVIDER_ID="github.com";/**
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
 */class vt extends Lr{constructor(){super("twitter.com")}static credential(e,n){return Yt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
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
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ht._fromIdTokenResponse(e,r,i),o=vu(r);return new _n({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vu(r);return new _n({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Bi extends At{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bi(e,n,r,i)}}function Ep(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(t,s,e,r):s})}async function iT(t,e,n=!1){const r=await hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",r)}/**
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
 */async function sT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await hr(t,Ep(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=rl(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),_n._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
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
 */async function oT(t,e,n=!1){const r="signIn",i=await Ep(t,r,e),s=await _n._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function aT(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function lT(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function cT(t){return Me(t).signOut()}const Ui="__sak";/**
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
 */class Sp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function uT(){const t=ye();return il(t)||bs(t)}const dT=1e3,hT=10;class Tp extends Sp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uT()&&GS(),this.fallbackToPolling=mp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},dT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tp.type="LOCAL";const fT=Tp;/**
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
 */class Dp extends Sp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dp.type="SESSION";const xp=Dp;/**
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
 */function pT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ys(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await pT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ys.receivers=[];/**
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
 */function ol(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ol("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Xe(){return window}function vT(t){Xe().location.href=t}/**
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
 */function Rp(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function mT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _T(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bT(){return Rp()?self:null}/**
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
 */const Pp="firebaseLocalStorageDb",yT=1,Wi="firebaseLocalStorage",Ap="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Is(t,e){return t.transaction([Wi],e?"readwrite":"readonly").objectStore(Wi)}function IT(){const t=indexedDB.deleteDatabase(Pp);return new Fr(t).toPromise()}function Mo(){const t=indexedDB.open(Pp,yT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wi,{keyPath:Ap})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wi)?e(r):(r.close(),await IT(),e(await Mo()))})})}async function mu(t,e,n){const r=Is(t,!0).put({[Ap]:e,value:n});return new Fr(r).toPromise()}async function wT(t,e){const n=Is(t,!1).get(e),r=await new Fr(n).toPromise();return r===void 0?null:r.value}function _u(t,e){const n=Is(t,!0).delete(e);return new Fr(n).toPromise()}const CT=800,ET=3;class Np{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ET)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ys._getInstance(bT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mT(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_T()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mo();return await mu(e,Ui,"1"),await _u(e,Ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mu(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_u(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Is(i,!1).getAll();return new Fr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Np.type="LOCAL";const ST=Np;new Or(3e4,6e4);/**
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
 */function Op(t,e){return e?st(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class al extends Cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,n){return on(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TT(t){return oT(t.auth,new al(t),t.bypassAuthState)}function DT(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),sT(n,new al(t),t.bypassAuthState)}async function xT(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),iT(n,new al(t),t.bypassAuthState)}/**
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
 */class kp{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TT;case"linkViaPopup":case"linkViaRedirect":return xT;case"reauthViaPopup":case"reauthViaRedirect":return DT;default:et(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RT=new Or(2e3,1e4);async function PT(t,e,n){const r=Mr(t);CS(t,e,sl);const i=Op(r,n);return new Wt(r,"signInViaPopup",e,i).executeNotNull()}class Wt extends kp{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wt.currentPopupAction&&Wt.currentPopupAction.cancel(),Wt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RT.get())};e()}}Wt.currentPopupAction=null;/**
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
 */const AT="pendingRedirect",ni=new Map;class NT extends kp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ni.get(this.auth._key());if(!e){try{const r=await OT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ni.set(this.auth._key(),e)}return this.bypassAuthState||ni.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OT(t,e){const n=LT(e),r=MT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kT(t,e){ni.set(t._key(),e)}function MT(t){return st(t._redirectPersistence)}function LT(t){return ti(AT,t.config.apiKey,t.name)}async function FT(t,e,n=!1){const r=Mr(t),i=Op(r,e),o=await new NT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const BT=10*60*1e3;class UT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BT&&this.cachedEventUids.clear(),this.cachedEventUids.has(bu(e))}saveEventToCache(e){this.cachedEventUids.add(bu(e)),this.lastProcessedEventTime=Date.now()}}function bu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mp(t);default:return!1}}/**
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
 */async function $T(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
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
 */const HT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GT=/^https?/;async function VT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $T(t);for(const n of e)try{if(qT(n))return}catch{}et(t,"unauthorized-domain")}function qT(t){const e=ko(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GT.test(n))return!1;if(HT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const zT=new Or(3e4,6e4);function yu(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jT(t){return new Promise((e,n)=>{var r,i,s;function o(){yu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yu(),n(Qe(t,"network-request-failed"))},timeout:zT.get()})}if(!((i=(r=Xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Xe().gapi)===null||s===void 0)&&s.load)o();else{const a=qS("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Qe(t,"network-request-failed"))},Ip(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ri=null,e})}let ri=null;function KT(t){return ri=ri||jT(t),ri}/**
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
 */const YT=new Or(5e3,15e3),JT="__/auth/iframe",QT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function eD(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nl(e,QT):`https://${t.config.authDomain}/${JT}`,r={apiKey:e.apiKey,appName:t.name,v:Tn},i=ZT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Sn(r).slice(1)}`}async function tD(t){const e=await KT(t),n=Xe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:eD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(t,"network-request-failed"),a=Xe().setTimeout(()=>{s(o)},YT.get());function l(){Xe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const nD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rD=500,iD=600,sD="_blank",oD="http://localhost";class Iu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aD(t,e,n,r=rD,i=iD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ye().toLowerCase();n&&(a=hp(c)?sD:n),dp(c)&&(e=e||oD,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if($S(c)&&a!=="_self")return lD(e||"",a),new Iu(null);const d=window.open(e||"",a,u);F(d,t,"popup-blocked");try{d.focus()}catch{}return new Iu(d)}function lD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cD="__/auth/handler",uD="emulator/auth/handler",dD=encodeURIComponent("fac");async function wu(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Tn,eventId:i};if(e instanceof sl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Lr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${dD}=${encodeURIComponent(l)}`:"";return`${hD(t)}?${Sn(a).slice(1)}${c}`}function hD({config:t}){return t.emulator?nl(t,uD):`https://${t.authDomain}/${cD}`}/**
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
 */const no="webStorageSupport";class fD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xp,this._completeRedirectFn=FT,this._overrideRedirectResult=kT}async _openPopup(e,n,r,i){var s;lt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wu(e,n,r,ko(),i);return aD(e,o,ol())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wu(e,n,r,ko(),i);return vT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await tD(e),r=new UT(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(no,{type:no},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[no];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mp()||il()||bs()}}const pD=fD;var Cu="@firebase/auth",Eu="0.23.2";/**
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
 */class gD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mD(t){pn(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_p(t)},c=new QS(r,i,s,l);return ZS(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pn(new Vt("auth-internal",e=>{const n=Mr(e.getProvider("auth").getImmediate());return(r=>new gD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(Cu,Eu,vD(t)),wt(Cu,Eu,"esm2017")}/**
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
 */const _D=5*60,bD=xh("authIdTokenMaxAge")||_D;let Su=null;const yD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bD)return;const i=n==null?void 0:n.token;Su!==i&&(Su=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ro(t=Mh()){const e=Ea(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XS(t,{popupRedirectResolver:pD,persistence:[ST,fT,xp]}),r=xh("authTokenSyncURL");if(r){const s=yD(r);lT(n,s,()=>s(n.currentUser)),aT(n,o=>s(o))}const i=Th("auth");return i&&eT(n,`http://${i}`),n}mD("Browser");function ID(){const t="data-rbd-drag-handle-draggable-id",e="data-rbd-droppable-id";kh({apiKey:"AIzaSyDCI-G8rde1guG1vIVhBzb9p1e8jzSP3a4",authDomain:"trello-clone-b3c76.firebaseapp.com",databaseURL:"https://trello-clone-b3c76-default-rtdb.europe-west1.firebasedatabase.app",projectId:"trello-clone-b3c76",storageBucket:"trello-clone-b3c76.appspot.com",messagingSenderId:"712863136216",appId:"1:712863136216:web:00020f5948777f3f415aad"});const r=new tt,[i,s]=ie(void 0),[o,a]=ie([]),[l,c]=ie({}),u=E=>{if(a(E),!i)return;const T=lu();uS(au(T,`users/${i}`),{lists:E})},d=(E,T,D)=>{const[M]=E.splice(T,1);return E.splice(D,0,M),E},h=(E,T,D,M)=>{const G=Array.from(E),ne=Array.from(T),[z]=G.splice(D.index,1);ne.splice(M.index,0,z);const se={};return se[D.droppableId]=G,se[M.droppableId]=ne,se},f=E=>{u([...o,{title:E,cards:[]}])},p=E=>{const T=[...o];T.splice(E,1),u(T)},g=(E,T)=>{const D=[...o];D[E].cards||(D[E].cards=[]),D[E].cards.push({id:Ke(),content:T}),u(D)},v=(E,T)=>{const D=[...o];D[E].cards.splice(T,1),u(D)},m=(E,T,D)=>{const M=[...o];M[E].cards[T].color=D,u(M)},b=(E,T,D)=>{const M=[...o];M[E].cards[T].todos=D,u(M)},I=(E,T,D)=>{const M=[...o];M[E].cards[T].description=D,u(M)},y=(E,T,D)=>{const M=[...o];M[E].cards[T].content=D,u(M)},x=(E,T)=>{const D=[...o];D[E].title=T,u(D)},S=(E,T,D)=>parseFloat(E.paddingTop)+T.slice(0,D).reduce((M,G)=>{const ne=window.getComputedStyle(G),z=parseFloat(ne.marginBottom),se=parseFloat(ne.borderTopWidth);return M+G.clientHeight+z+se},0),R=E=>{const T=K(E.draggableId);if(!T)return;const{offsetHeight:D,clientWidth:M}=T,G=E.source.index,ne=T.parentElement,z=window.getComputedStyle(ne);ne&&c({clientX:parseFloat(z.paddingLeft),clientY:S(z,[...ne.children],G),clientWidth:M,offsetHeight:D})},N=E=>{c({});const{source:T,destination:D,type:M}=E;if(!D)return;const G=parseInt(T.droppableId),ne=parseInt(D.droppableId),z=[...o];switch(M){case Hn.List:d(z,T.index,D.index);break;case Hn.Card:if(G===ne){d(z[G].cards,T.index,D.index);break}else{const se=h(o[G].cards,o[ne].cards,T,D);z[G].cards=se[G],z[ne].cards=se[ne]}}u(z)},O=E=>{if(!E.destination)return;const T=K(E.draggableId);if(!T||!T.parentElement)return;const D=T.parentElement;if(!D)return;const M=window.getComputedStyle(D),{offsetHeight:G,clientWidth:ne}=T,z=E.destination.index,se=E.source.index,le=[...T.parentElement.children],dt=le[se];le.splice(se,1);const Nt=q(E.destination.droppableId),We=[...Nt.children];let ht;T.parentElement===Nt?ht=[...le.slice(0,z),dt,...le.slice(z+1)]:ht=[...We.slice(0,z),dt,...We.slice(z+1)],c({clientX:parseFloat(M.paddingLeft),clientY:S(M,ht,z),clientWidth:ne,offsetHeight:G})},K=E=>{const T=`[${t}='${E}']`;return document.querySelector(T)},q=E=>{const T=`[${e}='${E}']`;return document.querySelector(T)},Ee=()=>{const E=ro();PT(E,r)},Se=()=>{const E=ro();cT(E).then(()=>{a([]),s(void 0)})};return _e(()=>{ro().onAuthStateChanged(T=>{if(!T)return;s(T.uid);const D=lu();dS(Mi(au(D),`users/${T.uid}`)).then(M=>{M.exists()?a(M.val().lists):u([])})})},[]),_("div",{children:[_(OI,{signIn:Ee,signOut:Se,user:i,updateLists:u}),_("div",{class:"mx-4 flex select-none items-start text-slate-950",children:[_(yy,{onDragStart:R,onDragEnd:N,onDragUpdate:O,children:_(va,{droppableId:"all-lists",direction:"horizontal",type:Hn.List,children:E=>_("div",{ref:E.innerRef,...E.droppableProps,class:"flex",children:[o==null?void 0:o.map((T,D)=>_(kI,{list:T,index:D,changeTitle:M=>x(D,M),changeContent:(M,G)=>y(D,M,G),changeDescription:(M,G)=>I(D,M,G),addCard:M=>g(D,M),removeCard:M=>v(D,M),changeTodos:(M,G)=>b(D,M,G),changeColor:(M,G)=>m(D,M,G),removeList:()=>p(D),placeholderProps:l})),E.placeholder]})})}),_(PI,{addList:f})]})]})}an(_(ID,{}),document.getElementById("app"));
