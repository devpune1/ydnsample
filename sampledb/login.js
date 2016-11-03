
(function (name, definition, context) {if (typeof context['module'] !== 'undefined' && context['module']['exports']) {context['module']['exports'] = definition.apply(context);}else if (typeof context['define'] !== 'undefined' && context['define'] === 'function' && context['define']['amd']) {define(name, [], definition);}else {context[name] = definition();}})('ydn', function () {var l,q=this;function r(a){return void 0!==a}function aa(){}
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function t(a){return"array"==ba(a)}function w(a){var b=ba(a);return"array"==b||"object"==b&&"number"==typeof a.length}function x(a){return"string"==typeof a}function ca(a){return"boolean"==typeof a}function y(a){return"number"==typeof a}function da(a){return"function"==ba(a)}function A(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;
function ga(a,b,c){return a.call.apply(a.bind,arguments)}function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function ia(a,b,c){ia=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return ia.apply(null,arguments)}var la=Date.now||function(){return+new Date};
function ma(a,b){var c=a.split("."),d=q;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&r(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}}function B(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Eb=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function na(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function oa(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function pa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,pa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}B(pa,Error);pa.prototype.name="CustomError";function qa(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a}var ra={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},sa={"'":"\\'"};
function D(a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=c+1,g;if(!(g=ra[d])){if(!(31<e&&127>e))if(d in sa)d=sa[d];else if(d in ra)d=sa[d]=ra[d];else{e=d;g=d.charCodeAt(0);if(31<g&&127>g)e=d;else{if(256>g){if(e="\\x",16>g||256<g)e+="0"}else e="\\u",4096>g&&(e+="0");e+=g.toString(16).toUpperCase()}d=sa[d]=e}g=d}b[f]=g}b.push('"');return b.join("")};function ta(a,b,c){this.f=c;this.c=a;this.g=b;this.b=0;this.a=null}ta.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.c();return a};ta.prototype.put=function(a){this.g(a);this.b<this.f&&(this.b++,a.next=this.a,this.a=a)};function ua(){this.b=this.a=null}var wa=new ta(function(){return new va},function(a){a.reset()},100);ua.prototype.add=function(a,b){var c=wa.get();c.a=a;c.b=b;c.next=null;this.b?this.b.next=c:this.a=c;this.b=c};function xa(){var a=ya,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function va(){this.next=this.b=this.a=null}va.prototype.reset=function(){this.next=this.b=this.a=null};var za=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(x(a))return x(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Aa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=x(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ba=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function Ca(a,b){var c=Da(a,b,void 0);return 0>c?null:x(a)?a.charAt(c):a[c]}function Da(a,b,c){for(var d=a.length,e=x(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Ea(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Fa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}function Ga(a,b){if(!w(a)||!w(b)||a.length!=b.length)return!1;for(var c=a.length,d=Ha,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}function Ha(a,b){return a===b};var Ia;a:{var Ja=q.navigator;if(Ja){var Ka=Ja.userAgent;if(Ka){Ia=Ka;break a}}Ia=""}function E(a){return-1!=Ia.indexOf(a)};function La(a,b){for(var c=w(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],r(a));c++);return a};function Ma(){return E("Opera")||E("OPR")}function Na(){return(E("Chrome")||E("CriOS"))&&!Ma()&&!E("Edge")};function Oa(a){q.setTimeout(function(){throw a;},0)}var Pa;
function Qa(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=ia(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.Ta;c.Ta=null;a()}};return function(a){d.next={Ta:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}};function Sa(a,b){Ta||Ua();Va||(Ta(),Va=!0);ya.add(a,b)}var Ta;function Ua(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);Ta=function(){a.then(Wa)}}else Ta=function(){var a=Wa;!da(q.setImmediate)||q.Window&&q.Window.prototype&&!E("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(Pa||(Pa=Qa()),Pa(a)):q.setImmediate(a)}}var Va=!1,ya=new ua;function Wa(){for(var a=null;a=xa();){try{a.a.call(a.b)}catch(b){Oa(b)}wa.put(a)}Va=!1};function Xa(a,b){this.a=Ya;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=aa)try{var c=this;a.call(b,function(a){Za(c,$a,a)},function(a){Za(c,ab,a)})}catch(d){Za(this,ab,d)}}var Ya=0,$a=2,ab=3;function bb(){this.next=this.c=this.b=this.f=this.a=null;this.g=!1}bb.prototype.reset=function(){this.c=this.b=this.f=this.a=null;this.g=!1};var cb=new ta(function(){return new bb},function(a){a.reset()},100);function db(a,b,c){var d=cb.get();d.f=a;d.b=b;d.c=c;return d}
Xa.prototype.then=function(a,b,c){return eb(this,da(a)?a:null,da(b)?b:null,c)};na(Xa);function gb(a){a.a==Ya&&Sa(function(){var a=new hb(void 0);jb(this,a)},a)}function jb(a,b){if(a.a==Ya)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.g||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==Ya&&1==d?jb(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):kb(c),lb(c,e,ab,b)))}a.c=null}else Za(a,ab,b)}function mb(a,b){a.b||a.a!=$a&&a.a!=ab||nb(a);a.f?a.f.next=b:a.b=b;a.f=b}
function eb(a,b,c,d){var e=db(null,null,null);e.a=new Xa(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;e.b=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof hb?g(b):a(e)}catch(m){g(m)}}:g});e.a.c=a;mb(a,e);return e.a}Xa.prototype.l=function(a){this.a=Ya;Za(this,$a,a)};Xa.prototype.m=function(a){this.a=Ya;Za(this,ab,a)};
function Za(a,b,c){if(a.a==Ya){a==c&&(b=ab,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.l,g=a.m;if(e instanceof Xa)mb(e,db(f||aa,g||null,a)),d=!0;else if(oa(e))e.then(f,g,a),d=!0;else{if(A(e))try{var h=e.then;if(da(h)){ob(e,h,f,g,a);d=!0;break a}}catch(k){g.call(a,k);d=!0;break a}d=!1}}d||(a.i=c,a.a=b,a.c=null,nb(a),b!=ab||c instanceof hb||pb(a,c))}}
function ob(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}function g(a){h||(h=!0,c.call(e,a))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function nb(a){a.h||(a.h=!0,Sa(a.j,a))}function kb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}Xa.prototype.j=function(){for(var a=null;a=kb(this);)lb(this,a,this.a,this.i);this.h=!1};
function lb(a,b,c,d){if(c==ab&&b.b&&!b.g)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,qb(b,c,d);else try{b.g?b.f.call(b.c):qb(b,c,d)}catch(e){rb.call(null,e)}cb.put(b)}function qb(a,b,c){b==$a?a.f.call(a.c,c):a.b&&a.b.call(a.c,c)}function pb(a,b){a.g=!0;Sa(function(){a.g&&rb.call(null,b)})}var rb=Oa;function hb(a){pa.call(this,a)}B(hb,pa);hb.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function F(a,b){this.j=[];this.N=b||null;this.b=this.c=!1;this.f=void 0;this.T=this.w=this.l=!1;this.h=0;this.i=null;this.F=0}l=F.prototype;l.ja=function(a,b){this.l=!1;sb(this,a,b)};function sb(a,b,c){a.c=!0;a.f=c;a.b=!b;a.Ca()}function tb(a){if(a.c){if(!a.T)throw new ub;a.T=!1}}l.callback=function(a){tb(this);sb(this,!0,a)};l.s=function(a){tb(this);sb(this,!1,a)};l.G=function(a,b){return vb(this,a,null,b)};l.Ra=function(a,b){return vb(this,null,a,b)};l.Qa=function(a,b){return vb(this,a,a,b)};
function vb(a,b,c,d){a.j.push([b,c,d]);a.c&&a.Ca();return a}l.then=function(a,b,c){var d,e,f=new Xa(function(a,b){d=a;e=b});vb(this,d,function(a){e(a)});return f.then(a,b,c)};na(F);F.prototype.va=function(a){vb(this,a.callback,a.s,a);return this};function wb(a){return Ba(a.j,function(a){return da(a[1])})}
F.prototype.Ca=function(){this.h&&this.c&&wb(this)&&(xb(this.h),this.h=0);this.i&&(this.i.F--,delete this.i);for(var a=this.f,b=!1,c=!1;this.j.length&&!this.l;){var d=this.j.shift(),e=d[0],f=d[1],d=d[2];if(e=this.b?f:e)try{var g=e.call(d||this.N,a);r(g)&&(this.b=this.b&&(g==a||g instanceof Error),this.f=a=g);if(oa(a)||"function"===typeof q.Promise&&a instanceof q.Promise)this.l=c=!0}catch(h){a=h,this.b=!0,wb(this)||(b=!0)}}this.f=a;c&&(c=ia(this.ja,this,!0),g=ia(this.ja,this,!1),a instanceof F?(vb(a,
c,g),a.w=!0):a.then(c,g));b&&(a=new yb(a),zb[a.a]=a,this.h=a.a)};function ub(){pa.call(this)}B(ub,pa);ub.prototype.message="Deferred has already fired";ub.prototype.name="AlreadyCalledError";function yb(a){this.a=q.setTimeout(ia(this.c,this),0);this.b=a}yb.prototype.c=function(){delete zb[this.a];window.console.error(this.b.stack);throw this.b;};var zb={};function xb(a){var b=zb[a];b&&(q.clearTimeout(b.a),delete zb[a])};function Ab(){return E("iPhone")&&!E("iPod")&&!E("iPad")};var Cb=Ma(),Db=E("Trident")||E("MSIE"),Eb=E("Edge"),Fb=E("Gecko")&&!(-1!=Ia.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Gb=-1!=Ia.toLowerCase().indexOf("webkit")&&!E("Edge");Gb&&E("Mobile");E("Macintosh");E("Windows");E("Linux")||E("CrOS");var Hb=q.navigator||null;Hb&&(Hb.appVersion||"").indexOf("X11");E("Android");Ab();E("iPad");
function Ib(){var a=Ia;if(Fb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Eb)return/Edge\/([\d\.]+)/.exec(a);if(Db)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Gb)return/WebKit\/(\S+)/.exec(a)}(function(){if(Cb&&q.opera){var a;var b=q.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=Ib())&&(a=b?b[1]:"");return Db&&(b=(b=q.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();function Jb(){}function Kb(){};function Lb(){}function Mb(){};function G(a){pa.call(this,a);this.name="ydn.error.ArgumentException"}B(G,pa);function Nb(a){pa.call(this,a);this.name="ydn.error.NotSupportedException"}B(Nb,pa);function Ob(a){pa.call(this,a);this.name="ydn.error.InvalidOperationException"}B(Ob,pa);function Pb(a){Error.captureStackTrace?Error.captureStackTrace(this,Pb):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.InternalError"}B(Pb,Error);Pb.prototype.name="ydn.error.InternalError";function Qb(a,b){F.call(this,0,b);this.g=[]}B(Qb,F);l=Qb.prototype;l.Sa=function(a,b){this.g.push([a,b]);return this};function Rb(a,b){for(var c=0;c<a.g.length;c++)a.g[c][0].call(a.g[c][1],b)}l.callback=function(a){this.g.length=0;Qb.B.callback.call(this,a)};l.s=function(a){this.g.length=0;Qb.B.s.call(this,a)};l.va=function(a){Qb.B.va.call(this,a);a instanceof Qb&&a.Sa(function(a){Rb(this,a)},this);return this};l.yb=function(){return this};var Sb={READ_ONLY:"readonly",READ_WRITE:"readwrite",VERSION_CHANGE:"versionchange"},H=Sb.READ_ONLY,I=Sb.READ_WRITE,Tb=Sb.VERSION_CHANGE,J=q.indexedDB;F.prototype.done=F.prototype.G;F.prototype.fail=F.prototype.Ra;F.prototype.always=F.prototype.Qa;Qb.prototype.then=Qb.prototype.then;function Ub(a,b){var c,d;2==arguments.length&&x(arguments[1])?(c=!0,d=arguments[1].split(".")):d=(c=w(b))?b:arguments;for(c=c?0:1;c<d.length&&(a=a[d[c]],r(a));c++);return a}var Vb={};
function Wb(a){a=[a];for(var b=new Xb,c=0,d,e;void 0!==(e=a.pop());){0===c%4&&12<c+4&&(b.write(c),c=0);d=typeof e;if(e instanceof Array)if(c+=4,0<e.length){a.push(Vb);for(d=e.length;d--;)a.push(e[d]);continue}else b.write(c);else if("number"===d)c+=1,b.write(c),Yb(b,e);else if(e instanceof Date)c+=2,b.write(c),Yb(b,e.valueOf());else if("string"===d){c+=3;b.write(c);c=b;for(d=0;d<e.length;d++){var f=e.charCodeAt(d);126>=f?c.write(f+1):16510>=f?(f-=127,c.write(128|f>>8,f&255)):c.write(192|f>>10,f>>
2|255,(f|3)<<6)}c.write(0)}else if(e===Vb)b.write(0);else return"";c=0}return b.trim().toString()}
function Yb(a,b){var c,d,e;c=b;var f=e=d=0;if(0!==c)if(isFinite(c)){0>c&&(d=1,c=-c);f=0;if(2.2250738585072014E-308<=c){for(e=c;1>e;)f--,e*=2;for(;2<=e;)f++,e/=2;e=f+1023}f=e?Math.floor(4503599627370496*(c/Math.pow(2,f)-1)):Math.floor(c/4.9E-324)}else e=2047,isNaN(c)?f=0x8000000000000:-Infinity===c&&(d=1);c=d;d=e;e=f;c&&(e=0xfffffffffffff-e,d=2047-d);a.write((c?0:128)|d>>4);a.write((d&15)<<4|0|e/281474976710656);e%=281474976710656;c=0|e/4294967296;a.write(c>>8,c&255);e%=4294967296;c=0|e/65536;a.write(c>>
8,c&255);c=e%65536;a.write(c>>8,c&255)}function Zb(a){var b=$b(a)|0,c=b>>7?!1:!0,d=c?-1:1,e=(b&127)<<4,b=$b(a)|0,e=e+(b>>4);c&&(e=2047-e);for(var b=[c?15-(b&15):b&15],f=6;f--;)b.push(c?255-($b(a)|0):$b(a)|0);a=0;for(f=7;f--;)a=a/256+b[f];a/=16;return 0===a&&0===e?0:(a+1)*Math.pow(2,e-1023)*d}
function ac(a){for(var b=[],c=0,d=0,e=0,f,g;;){f=$b(a);if(0===f||null==f)break;0===c?(g=f>>6,2>g&&!isNaN(f)?b.push(String.fromCharCode(f-1)):(c=g,d=f<<10,e++)):2===c?(b.push(String.fromCharCode(d+f+127)),c=d=e=0):2===e?(d+=f<<2,e++):(b.push(String.fromCharCode(d|f>>6)),c=d=e=0)}return b.join("")}function bc(a){this.a=null;this.b=a;this.c=this.b.length-1;this.index=-1}function $b(a){return a.a=a.index<a.c?parseInt(a.b.charAt(++a.index)+a.b.charAt(++a.index),16):null}
function Xb(){this.a=[];this.b=void 0}Xb.prototype.write=function(a){for(var b=0;b<arguments.length;b++)this.b=arguments[b].toString(16),this.a.push(2===this.b.length?this.b:this.b="0"+this.b)};Xb.prototype.trim=function(){for(var a=this.a.length;"00"===this.a[--a];);this.a.length=++a;return this};Xb.prototype.toString=function(){return this.a.length?this.a.join(""):""};function cc(a,b){var c=Wb(a),d=Wb(b);return c>d?1:c==d?0:-1};function K(a,b,c){Qb.call(this,0,c);this.v=a;this.g=[];this.m=[];this.X=[];this.a=null;this.aa="";this.I=0}B(K,Qb);l=K.prototype;l.aa="";l.logger=null;function dc(a,b,c){a.a=b;a.aa=c;if(b){for(c=0;c<a.m.length;c++)a.m[c][0].call(a.m[c][1],b);a.m.length=0}}function ec(a){var b=new K(a.v);a.I++;dc(b,a.a,a.aa+"C"+a.I);return b}l.qb=function(){return!!this.a};
l.abort=function(){if(this.a)if(da(this.a.abort))this.a.abort();else if(da(this.a.executeSql))this.a.executeSql("ABORT",[],function(){},function(){return!0});else throw new Nb;else throw new fc("");};function L(a,b,c){var d=a.X.shift();c=!!c;d?d[0].call(d[1],b,c,function(b,c){L(a,b,c)}):c?a.s(b):a.callback(b)}function gc(a,b,c){a.X.push([b,c])}function M(a,b,c){a.a?b.call(c,a.a):a.m.push([b,c])}l.callback=function(a){K.B.callback.call(this,a)};l.s=function(a){K.B.s.call(this,a)};
function hc(a){var b="";a.aa&&(b=a.a?"*":"",b="["+a.aa+b+"]");return a.v+b}function ic(a,b){var c=new K(a);L(c,b);return c}l.toString=function(){return"Request:"+hc(this)};
l.Ca=function(){this.h&&this.c&&wb(this)&&(xb(this.h),this.h=0);this.i&&(this.i.F--,delete this.i);for(var a=this.f,b=!1;this.j.length&&!this.l;){var c=this.j.shift(),d=c[0],e=c[1],c=c[2];if(d=this.b?e:d)d=d.call(c||this.N,a),r(d)&&(this.b=this.b&&(d==a||d instanceof Error),this.f=a=d),oa(a)&&(this.l=b=!0)}this.f=a;b&&(b=ia(this.ja,this,!0),d=ia(this.ja,this,!1),a instanceof F?(vb(a,b,d),a.w=!0):a.then(b,d))};
l.toJSON=function(){var a=(this.aa||"").match(/B(\d+)T(\d+)(?:Q(\d+?))?(?:R(\d+))?/)||[];return{method:this.v?this.v.split(":"):[],branchNo:parseFloat(a[1]),transactionNo:parseFloat(a[2]),queueNo:parseFloat(a[3]),requestNo:parseFloat(a[4])}};var jc=J&&J.cmp?ia(J.cmp,J):cc,kc=[];E("Firefox");Ab()||E("iPod");E("iPad");!E("Android")||Na()||E("Firefox")||Ma()||E("Silk");Na();var lc=E("Safari")&&!(Na()||E("Coast")||Ma()||E("Edge")||E("Silk")||E("Android"))&&!(Ab()||E("iPad")||E("iPod"));function mc(){0!=nc&&(this[ea]||(this[ea]=++fa));this.Oa=this.Oa;this.pb=this.pb}var nc=0;mc.prototype.Oa=!1;function oc(a,b){this.type=a;this.target=b}oc.prototype.preventDefault=function(){};function pc(a,b){oc.call(this,a,b)}B(pc,oc);pc.prototype.b=function(){return this.a};function qc(a,b,c,d,e){oc.call(this,a,b);this.version=c;this.mb=d;this.$a=e}B(qc,pc);l=qc.prototype;l.name="ReadyEvent";l.version=NaN;l.mb=NaN;l.$a=null;l.Cb=function(){return this.version};l.tb=function(){return this.mb};l.sb=function(){return this.$a};function rc(a,b,c){oc.call(this,c||"error",a);this.error=b}B(rc,pc);rc.prototype.toString=function(){return this.name+":"+(this.error?this.error:"")};
rc.prototype.name="ErrorEvent";rc.prototype.error=null;rc.prototype.c=function(){return this.error};function sc(a,b){rc.call(this,a,b,"fail")}B(sc,rc);sc.prototype.name="FailEvent";function tc(a,b,c){var d;if(A(a))d=a.store,b=a.id,null!=a.parent&&(c=new tc(a.parent));else if(r(b))d=a;else if(d=a.lastIndexOf("^|"),b=a,0<d&&(b=a.substr(d),c=new tc(a.substring(0,d))),b=b.split("^:"),d=b[0],b=b[1],!r(b))throw Error("Invalid key value: "+a);this.a=d;this.b=b;this.parent=c||null}l=tc.prototype;l.toJSON=function(){var a={store:this.a,id:this.b};this.parent&&(a.parent=this.parent.toJSON());return a};
l.valueOf=function(){return(this.parent?this.parent.valueOf()+"^|":"")+this.a+"^:"+this.b};l.toString=function(){return this.valueOf().replace("^|","|").replace("^:",":")};l.Ab=function(){return this.a};l.rb=function(){return this.b};function uc(a){return t(a.b)?a.b.join("^|"):a.b instanceof Date?+a.b:a.b}l.zb=function(){return this.parent};function vc(a){if(w(a)){for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}return a};function N(a,b,c,d){a>b&&(b=a=void 0);null===a&&(a=void 0);null===b&&(b=void 0);this.lower=a;this.upper=b;this.lowerOpen=!!c;this.upperOpen=!!d}l=N.prototype;l.lower=void 0;l.upper=void 0;l.lowerOpen=!1;l.upperOpen=!1;l.toJSON=function(){var a;a=this||{};return{lower:a.lower,upper:a.upper,lowerOpen:a.lowerOpen,upperOpen:a.upperOpen}};function wc(a){return xc(a)}function yc(a){return new N(a,a,!1,!1)}function zc(a,b,c,d){return new N(a,b,c,d)}function Ac(a,b){return new N(void 0,a,void 0,!!b)}
function Bc(a,b){return new N(a,void 0,!!b,void 0)}function Cc(a){var b;if(t(a))b=Ea(a),b.push("\uffff");else if(x(a))b=a+"\uffff";else if(y(a))b=a+2.220460492503131E-16,a-=2.220460492503131E-16;else return yc(a);return zc(a,b,!1,!0)}function xc(a){return null!=a?null!=a.upper&&null!=a.lower?Dc.bound(a.lower,a.upper,!!a.lowerOpen,!!a.upperOpen):null!=a.upper?Dc.upperBound(a.upper,a.upperOpen):null!=a.lower?Dc.lowerBound(a.lower,a.lowerOpen):null:null}
l.ua=function(a){var b=this.lower,c=this.upper,d=this.lowerOpen,e=this.upperOpen;null!=a.lower&&(null==this.lower||a.lower>=this.lower)&&(b=a.lower,d=a.lowerOpen||this.lowerOpen);null!=a.upper&&(null==this.upper||a.upper<=this.upper)&&(c=a.upper,e=a.upperOpen||this.upperOpen);return zc(b,c,d,e)};
function Ec(a,b,c,d,e){if(c)if(c.lowerOpen||c.upperOpen||null==c.lower||null==c.upper||0!==jc(c.lower,c.upper)){if(null!=c.lower){var f=c.lowerOpen?" > ":" >= ";d.push(a+f+"?");e.push(Fc(c.lower,b))}null!=c.upper&&(f=c.upperOpen?" < ":" <= ",d.push(a+f+"?"),e.push(Fc(c.upper,b)))}else d.push(a+" = ?"),e.push(Fc(c.lower,b))}var Dc=q.IDBKeyRange||q.webkitIDBKeyRange||N;function Gc(a,b,c,d,e,f){r(e)||(e=t(a)?a.join(", "):a);if(null!=a&&!x(a)&&!w(a))throw new G("index keyPath for "+e+" must be a string or array, but "+a+" is "+typeof a);!r(a)&&r(e)&&(a=e.replace(/[,\s]/g,""));this.keyPath=a;this.h=w(this.keyPath);this.a=e;this.type=Hc(b);if(r(b)){if(!r(this.type))throw new G("type invalid in index: "+this.a);if(t(this.keyPath))throw new G('composite key for store "'+this.a+'" must not specified type');}this.unique=!!c;this.multiEntry=!!d;this.i=x(this.type)?this.type:
Ic;this.f=x(e)?e:t(a)?this.keyPath.join(","):a;this.c=D(this.f);this.b=this.h?null:this.keyPath.split(".");this.g=f||null}var Ic="TEXT";function Fc(a,b){if("DATE"==b){if(a instanceof Date)return+a}else return null!=b?a:Wb(a)}
function Jc(a,b){var c;if("DATE"==b)c=new Date(a);else if(r(b))c=a;else{for(var d=c=[],e,f=[],g,h,k=new bc(a);null!=$b(k);)if(0===k.a)d=f.pop();else{if(null===k.a)break;do{g=k.a/4|0;e=k.a%4;for(var m=0;m<g;m++)h=[],d.push(h),f.push(d),d=h;if(0===e&&12<k.a+4)$b(k);else break}while(1);1===e?d.push(Zb(k)):2===e?d.push(new Date(Zb(k))):3===e?d.push(ac(k)):0===e&&(d=f.pop())}c=c[0]}return c}var Kc=["BLOB","DATE","INTEGER","NUMERIC",Ic];function Hc(a){if(x(a))return a=za(Kc,a),Kc[a]}
Gc.prototype.getName=function(){return this.a};Gc.prototype.toJSON=function(){return{name:this.a,keyPath:this.keyPath,type:this.type,unique:this.unique,multiEntry:this.multiEntry}};Gc.prototype.clone=function(){var a=t(this.keyPath)?Ea(this.keyPath):this.keyPath;return new Gc(a,this.type,this.unique,this.multiEntry,this.a,this.g)};
function Lc(a,b){return null!=a||null!=b?null!=a?null!=b?w(a)&&w(b)?Ga(a,b)?null:"expect: "+a+", but: "+b:Mc(a,b)?null:"expect: "+a+", but: "+b:"keyPath: "+a+" no longer defined":"newly define "+b:null}Gc.prototype.hint=function(a){if(!a)return this;var b=t(this.keyPath)?Ea(this.keyPath):this.keyPath,c=this.type;r(a.type)||"TEXT"!=c||(c=void 0);return new Gc(b,c,this.unique,this.multiEntry,a.a)};function Nc(a,b,c,d,e,f,g,h){if(!x(a))throw new G("store name must be a string");this.f=a;this.keyPath=r(b)?b:null;this.i=w(this.keyPath);if(null!==this.keyPath&&!x(this.keyPath)&&!this.i)throw new G("keyPath must be a string or array");this.b=!!c;var k;if(null!=d){k=Hc(d);if(!r(k))throw new G('type "'+d+'" for primary key in store "'+this.f+'" is invalid.');if(this.i)throw new G('composite key for store "'+this.f+'" must not specified type');}this.type=null!=k?k:this.b?"INTEGER":void 0;this.h=x(this.keyPath)?
this.keyPath.split("."):[];this.a=e||[];a=[];for(b=0;b<this.a.length;b++){c=this.a[b].getName();if(0<=a.indexOf(c))throw new G('index "'+c+'" already defined in store: '+this.f);a.push(c)}this.J=!!f;this.W=!!g;this.m=x(this.type)?this.type:Ic;this.g=t(this.keyPath)?this.keyPath.join(","):x(this.keyPath)?this.keyPath:"_ROWID_";this.c=D(this.g);this.l=!!h;this.j=[]}l=Nc.prototype;l.J=!1;l.W=!1;
l.toJSON=function(){for(var a=[],b=0;b<this.a.length;b++)a.push(this.a[b].toJSON());return{name:this.f,keyPath:this.keyPath,autoIncrement:this.b,type:this.type,indexes:a}};
function Oc(a){var b=[],c=a.indexes||[];if(t(c))for(var d=0;d<c.length;d++){var e;e=c[d];e=new Gc(e.keyPath,e.type,e.unique,e.multiEntry,e.name,e.generator);r(e.keyPath)&&e.keyPath===a.keyPath||b.push(e)}return new Nc(a.name,a.keyPath,a.autoIncrement,"undefined"===a.type||"null"===a.type?void 0:a.type,b,a.dispatchEvents,a.fixed,a.encrypted)}
function Pc(a,b,c,d,e,f,g){a=Qc(a,b,c,d,e,f,g);b="";0!=c&&(b+="SELECT "+a.select);b+=" FROM "+a.from;a.o&&(b+=" WHERE "+a.o);a.group&&(b+=" GROUP BY "+a.group);a.M&&(b+=" ORDER BY "+a.M);return b}
function Qc(a,b,c,d,e,f,g){var h={select:"",from:"",o:"",group:"",M:""},k=a.g,m=a.c,n=null;d!==k&&x(d)&&(n=Rc(a,d));var p=!!n,u=d||k,v=D(u),z=p?n.type:a.type,C=p&&n.multiEntry;h.from=R(a);6===c?h.select="COUNT("+m+")":3===c||1===c||2===c?(h.select=m,null!=d&&d!=k&&(h.select+=", "+v)):h.select="*";d=g?"DISTINCT ":"";k=[];C?(C=D("ydn.db.me:"+a.getName()+":"+n.getName()),h.select=6===c?"COUNT("+d+C+"."+v+")":3===c||1===c||2===c?"DISTINCT "+R(a)+"."+m+", "+C+"."+v+" AS "+u:"DISTINCT "+R(a)+".*, "+C+"."+
v+" AS "+u,h.from=C+" INNER JOIN "+R(a)+" USING ("+m+")",null!=e&&(Ec(C+"."+v,z,e,k,b),0<k.length&&(h.o=h.o?h.o+(" AND "+k.join(" AND ")):k.join(" AND ")))):null!=e&&(Ec(v,z,e,k,b),0<k.length&&(h.o=h.o?h.o+(" AND "+k.join(" AND ")):k.join(" AND ")));p&&!n.unique&&g&&(h.group=v);a=f?"DESC":"ASC";h.M=v+" "+a;p&&(h.M+=", "+m+" "+a);return h}
function Sc(a,b,c,d,e,f,g,h,k){var m,n,p,u;null!=e?(m=e.lower,n=e.upper,p=e.lowerOpen,u=e.upperOpen,f?null!=n?(e=jc(h,n),-1==e?(n=h,u=k):0==e&&(u=k||u)):(n=h,u=k):null!=m?(e=jc(h,m),1==e?(m=h,p=k):0==e&&(p=k||p)):(m=h,p=k)):f?(n=h,u=k):(m=h,p=k);e=new N(m,n,!!p,!!u);d=d?Rc(a,d):null;b=Qc(a,c,b,d?d.f:a.g,e,f,g);b="SELECT "+b.select+" FROM "+b.from+(b.o?" WHERE "+b.o:"")+(b.group?" GROUP BY "+b.group:"")+" ORDER BY "+b.M;d&&(b+=", "+a.c+(f?"DESC":"ASC"));return b}
function Tc(a,b,c,d,e,f,g,h,k,m){var n=Rc(a,d),p=n.f;d=n.c;var u=a.c,v=k?" <":" >",v=g?v+" ":v+"= ";g=Fc(f,n.type);h=Fc(h,a.type);n="";e?(a=Qc(a,c,b,p,e,k,m),a.o+=" AND ",n=d+v+"?",c.push(g)):(e=k?Ac(f,!0):Bc(f,!0),a=Qc(a,c,b,p,e,k,m),n=a.o,a.o="");a.o+="("+n+" OR ("+d+" = ? AND "+u+v+"?))";c.push(g);c.push(h);return"SELECT "+a.select+" FROM "+a.from+" WHERE "+a.o+(a.group?" GROUP BY "+a.group:"")+" ORDER BY "+a.M}l.clone=function(){return Oc(this.toJSON())};
l.index=function(a){return this.a[a]||null};function Rc(a,b){return Ca(a.a,function(a){return a.getName()==b})}function Uc(a,b){return b===a.keyPath?!0:Ba(a.a,function(a){return a.getName()==b})}function R(a){return D(a.f)}
function Vc(a,b){if(!b)return a;var c=a.b,d=t(a.keyPath)?Ea(a.keyPath):a.keyPath,e=a.type,f=Aa(a.a,function(a){return a.clone()});r(b.type)||"TEXT"!=e||(e=void 0);t(b.keyPath)&&x(d)&&d==b.keyPath.join(",")&&(d=Ea(b.keyPath));for(var g=0,h=b.a.length;g<h;g++)if(b.a[g].h)for(var k=b.a[g].getName(),m=f.length-1;0<=m;m--)if(0<=k.indexOf(f[m].getName())){f[m]=b.a[g].clone();break}for(g=0;g<f.length;g++)(h=Rc(b,f[g].getName()))&&(f[g]=f[g].hint(h));return new Nc(b.f,d,c,e,f)}l.getName=function(){return this.f};
function Wc(a){return!!a.keyPath}function Xc(a,b,c){if(b){if(!a.keyPath&&null!=c)return c;if(a.i){c=[];for(var d=0;d<a.keyPath.length;d++)c.push(Ub(b,a.keyPath[d]));return c}if(a.keyPath)return La(b,a.h)}}function Yc(a,b,c){for(var d=0;d<a.h.length;d++){var e=a.h[d];if(d==a.h.length-1){b[e]=c;break}r(b[e])||(b[e]={});b=b[e]}}
function Zc(a,b,c){var d=[],e=[];c=r(c)?c:Xc(a,b);r(c)&&(e.push(a.c),d.push(Fc(c,a.type)));for(var f=0;f<a.a.length;f++){var g=a.a[f];if(!g.multiEntry&&g.getName()!==a.keyPath&&"_default_"!=g.getName()){var h;h=g;var k=b;if(null!=k)if(w(h.keyPath)){for(var m=[],n=0,p=h.keyPath.length;n<p;n++){var u=Ub(k,h.keyPath[n]);m[n]=u}h=m}else h=Ub(k,h.keyPath);else h=void 0;null!=h&&(d.push(Fc(h,g.type)),e.push(g.c))}}a.W?a.W&&!a.keyPath&&0==a.a.length&&(x(b)&&-1==b.indexOf(";base64,")?d.push(b):d.push(S(b)),
e.push("_default_")):(d.push(S(b)),e.push("_default_"));a=[];for(f=d.length-1;0<=f;f--)a[f]="?";return{Va:e,gb:a,values:d,key:c}}
function $c(a,b){if(!b)return"missing store: "+a.f;if(a.f!=b.f)return"store name, expect: "+a.f+", but: "+b.f;var c=Lc(a.keyPath,b.keyPath);if(c)return"keyPath, "+c;if(r(a.b)&&r(b.b)&&a.b!=b.b)return"autoIncrement, expect:  "+a.b+", but: "+b.b;if(a.a.length!=b.a.length)return"indexes length, expect:  "+a.a.length+", but: "+b.a.length;if(r(a.type)&&r(b.type)&&(w(a.type)?!Ga(a.type,b.type):a.type!=b.type))return"data type, expect:  "+a.type+", but: "+b.type;for(c=0;c<a.a.length;c++){var d=Rc(b,a.a[c].getName()),
e;e=a.a[c];if(d)if(e.a!=d.a)e="name, expect: "+e.a+", but: "+d.a;else{var f=Lc(e.keyPath,d.keyPath);e=f?"keyPath, "+f:null!=e.unique&&null!=d.unique&&e.unique!=d.unique?"unique, expect: "+e.unique+", but: "+d.unique:null!=e.multiEntry&&null!=d.multiEntry&&e.multiEntry!=d.multiEntry?"multiEntry, expect: "+e.multiEntry+", but: "+d.multiEntry:r(e.type)&&r(d.type)&&(w(e.type)?!Ga(e.type,d.type):e.type!=d.type)?"data type, expect: "+e.type+", but: "+d.type:""}else e="no index for "+e.a;if(0<e.length)return'index "'+
a.a[c].getName()+'" '+e}return""}function ad(a,b){if(b)for(var c=0;c<a.a.length;c++){var d=a.a[c],e=b;if(d.g){var f=d.g(e),g=typeof f;if("string"==g||"number"==g||f instanceof Date||t(f)){for(g=0;g<d.b.length-1;g++)A(e[d.b[g]])||(e[d.b[g]]={});e[d.b[d.b.length-1]]=f}}}}function T(a,b,c,d,e){for(var f=0;f<a.j.length;f++)d!==f&&a.j[f].call(e,b,c)}function bd(a,b){for(var c=0;c<a.a.length;c++)if(a.a[c].getName()==b)return c;return-1};function cd(a){return!x(a)||/^[\s\xa0]*$/.test(a)?{}:JSON.parse(a)}function dd(a){var b;try{b=S(a)}catch(c){b=""}return b?b.substr(0,70)+(70<b.length?"...":""):""}function S(a){return JSON.stringify(a,void 0,void 0)};function ed(a){this.a=a};function fd(a,b){this.name=a;this.a=b}fd.prototype.getName=function(){return this.name};fd.prototype.count=function(){return this.a.length};fd.prototype.index=function(a){return this.a[a]};function gd(a){if(!t(a.sources))throw new G("indexes require for full text search index "+a.name+", but "+a.sources+" of type "+typeof a.sources+" found.");var b=a.sources.map(function(a){return new ed(a.storeName)});return new fd(a.name,b)};function hd(a,b){var c,d,e=b;if(A(a)){d=a;c=d.version;for(var e=[],f=d.stores||[],g=0;g<f.length;g++){var h=Oc(f[g]);e.push(h)}}else x(a)?c=0==a.length?void 0:parseFloat(a):y(a)&&(c=a);if(r(c)){if(!y(c)||0>c)throw new G("Invalid version: "+c+" ("+a+")");isNaN(c)&&(c=void 0)}if(r(b)&&(!t(b)||0<b.length&&!(b[0]instanceof Nc)))throw new G("stores");this.version=c;this.oa=!r(this.version);this.stores=e||[];c=[];if(d&&d.fullTextCatalogs)for(g=0;g<d.fullTextCatalogs.length;g++)e=gd(d.fullTextCatalogs[g]),
c[g]=e,U(this,e.getName())||(f=[new Gc("k",Ic),new Gc("v",Ic)],e=new Nc(e.getName(),"id",!1,void 0,f,!1,!1,!1),this.stores.push(e));this.a=c}l=hd.prototype;l.toJSON=function(){var a=Aa(this.stores,function(a){return a.toJSON()}),b={};b.stores=a;r(this.version)&&(b.version=this.version);return b};l.oa=!1;l.S=function(){return!1};function id(a){return Aa(a.stores,function(a){return a.getName()})}l.$=function(a){return this.stores[a]||null};l.count=function(){return this.stores.length};
function U(a,b){return Ca(a.stores,function(a){return a.getName()==b})}function jd(a,b){return Ba(a.stores,function(a){return a.getName()==b})}
function kd(a,b,c,d){if(!b||a.stores.length!=b.stores.length)return"Number of store: "+a.stores.length+" vs "+b.stores.length;for(var e=0;e<a.stores.length;e++){var f=U(b,a.stores[e].getName());if(f){c&&(f=Vc(f,a.stores[e]));if(d)for(var g=f,h=a.stores[e],k=0;k<h.a.length;k++){var m=h.a[k];Uc(g,m.getName())||"BLOB"!=m.type||(m=new Gc(m.keyPath,m.type,m.unique,m.multiEntry,m.getName()),g.a.push(m))}f=$c(a.stores[e],f);if(0<f.length)return'store: "'+a.stores[e].getName()+'" '+f}else return'missing object store "'+
a.stores[e].getName()+'"'}return""};function ld(a,b){hd.call(this,a,b)}B(ld,hd);ld.prototype.S=function(){return!0};function md(a,b){a.stores.push(b)};function nd(a){Error.captureStackTrace?Error.captureStackTrace(this,nd):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.ArgumentException"}B(nd,Error);function od(a){Error.captureStackTrace?Error.captureStackTrace(this,od):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.NotSupportedException"}B(nd,Error);od.prototype.name="ydn.error.NotSupportedException";
function pd(a){Error.captureStackTrace?Error.captureStackTrace(this,pd):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.InternalError"}B(pd,Error);pd.prototype.name="ydn.InternalError";function qd(a){Error.captureStackTrace?Error.captureStackTrace(this,qd):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.ConstraintError"}B(qd,Error);qd.prototype.name="ydn.error.ConstraintError";B(nd,Error);
function rd(a){Error.captureStackTrace?Error.captureStackTrace(this,rd):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.InvalidOperationError"}B(rd,Error);function Mc(a,b){var c;c=c||{};if(null!=a&&null!=b){if(w(a)&&w(b)){if(a.length!=b.length)return!1;for(var d=0;d<a.length;d++)if(-1==Da(b,function(b){return Mc(b,a[d])}))return!1;return!0}if(w(a))return 1==a.length&&Mc(a[0],b);if(w(b))return 1==b.length&&Mc(b[0],a);if(A(a)&&A(a)){for(var e in a)if(a.hasOwnProperty(e)&&!c[e]){var f=Mc(a[e],b[e]);if(!f)return!1}for(e in b)if(b.hasOwnProperty(e)&&!c[e]&&(f=Mc(a[e],b[e]),!f))return!1;return!0}return a===b}return!1}
function sd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return a[b]};/*
 Copyright 2012 YDN Authors, Yathit. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");.
*/
function V(a,b,c){c=c||{};this.m=c.mechanisms||(lc||Ab()||E("iPad")||E("iPod")?Fa(td,1):td);this.l=c.size;this.v=r(c.connectionTimeout)?c.connectionTimeout:6E4;this.a=null;this.g=[];this.na=!1;var d;if(b instanceof hd)d=b;else if(A(b)){c.autoSchema||!r(b.stores)?d=new ld(b):d=new hd(b);var e=b.stores?b.stores.length:0;for(c=0;c<e;c++){var f=U(d,b.stores[c].name);b.stores[c].Sync&&f.getName()}}else d=new ld;this.c=d;for(c=0;c<this.c.count();c++)this.c.$(c).l&&this.c.$(c).getName();r(a)&&this.j(a);
this.f=new F}V.prototype.logger=null;V.prototype.w=function(a){if(r(a)){var b=function(b){a(b.toJSON());a=void 0};if(this.a)this.a.O(b);else{var c=this;this.transaction(function(a){c.a.O(b,a)},null,H)}}return this.c?this.c.toJSON():null};V.prototype.j=function(a){if(this.a)throw new Ob("Already connected with "+this.h);this.h=a;ud(this)};V.prototype.getName=function(){return this.h};var td="indexeddb sqlite websql localstorage sessionstorage userdata memory".split(" ");l=V.prototype;l.Aa=function(){return null};
function ud(a){function b(b,e){b?(a.Wa=NaN,d.lb=function(){},d.Ka=function(){a.a=null},d.ab=function(){},setTimeout(function(){vd(a,e);wd(a)},10),c.callback(e)):(setTimeout(function(){vd(a,new sc(a,e));if(a.g)for(var b;b=a.g.shift();)b.C&&b.C("error",e)},10),c.s(e))}for(var c=new F,d=null,e=a.m,f=0;f<e.length;f++){var g=e[f].toLowerCase();if(d=a.Aa(g)){d=a.Aa(g);break}}null===d?(e=new qd("No storage mechanism found."),b(!1,new sc(a,e))):vb(d.connect(a.h,a.c),function(a){this.a=d;b(!0,new qc("ready",
this,parseFloat(d.kb()),parseFloat(a),null))},function(a){b(!1,a)},a)}l.La=function(){if(this.a)return this.a.jb()};l.qa=function(a,b){var c=this.f,d=new F;c.va(d);d.Qa(a,b)};function vd(a,b){setTimeout(function(){a.c.oa&&a.f.c||(b instanceof rc?a.f.s(b.error):a.f.callback())},4)}function xd(a){return!!a.a&&a.a.Ja()}l.close=function(){this.a&&(this.a.close(),this.a=null)};l.Bb=function(){return this.a?this.a.ib():null};l.Wa=NaN;
function wd(a){var b=a.g.shift();b&&a.transaction(b.ma,b.wb,b.mode,b.C);a.Wa=la()}l.na=!1;l.transaction=function(a,b,c,d){var e=b;x(b)?e=[b]:null!=b||(e=null);if(this.a&&this.a.Ja()&&!this.na){var f=this,g=r(c)?c:H;g==Tb&&(this.na=!0);this.a.Ba(function(b){a(b);a=null},e,g,function(a,b){da(d)&&(d(a,b),d=void 0);g==Tb&&(f.na=!1);wd(f)})}else this.g.push({ma:a,wb:e,mode:c||H,C:d})};V.prototype.close=V.prototype.close;V.prototype.getType=V.prototype.La;V.prototype.getName=V.prototype.getName;V.prototype.getSchema=V.prototype.w;V.prototype.onReady=V.prototype.qa;V.prototype.setName=V.prototype.j;V.prototype.transaction=V.prototype.transaction;V.prototype.db=V.prototype.Bb;ma("ydn.db.version","1.4.3");ma("ydn.db.cmp",jc);ma("ydn.db.deleteDatabase",function(a,b){for(var c,d=0;d<kc.length;d++){var e=kc[d](a,b);e&&(c=e)}return c||ic("vc",null)});qc.prototype.name=qc.prototype.name;
qc.prototype.getVersion=qc.prototype.Cb;qc.prototype.getOldVersion=qc.prototype.tb;qc.prototype.getOldSchema=qc.prototype.sb;rc.prototype.getError=rc.prototype.c;K.prototype.abort=K.prototype.abort;K.prototype.canAbort=K.prototype.qb;Qb.prototype.progress=Qb.prototype.Sa;Qb.prototype.promise=Qb.prototype.yb;ma("ydn.db.KeyRange",N);N.only=yc;N.bound=zc;N.upperBound=Ac;N.lowerBound=Bc;function yd(a){Error.captureStackTrace?Error.captureStackTrace(this,yd):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ConstraintError"}B(yd,Error);yd.prototype.name="ConstraintError";function zd(a){Error.captureStackTrace?Error.captureStackTrace(this,zd):this.stack=Error().stack||"";a&&(this.message=String(a))}B(zd,Error);zd.prototype.name="ydn.db.InternalError";
function fc(a){Error.captureStackTrace?Error.captureStackTrace(this,fc):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="InvalidStateError"}B(fc,Error);function Ad(a){Error.captureStackTrace?Error.captureStackTrace(this,Ad):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="InvalidAccessError"}B(Ad,Error);function Bd(a){Error.captureStackTrace?Error.captureStackTrace(this,Bd):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="NotFoundError"}
B(Bd,Error);Bd.prototype.name="NotFoundError";function Cd(a,b){Error.captureStackTrace?Error.captureStackTrace(this,Cd):this.stack=Error().stack||"";b&&(this.message=String(b));this.message+=" :"+a.message+" ["+a.code+"]";this.name="SQLError"}B(Cd,Error);function Dd(a,b){Error.captureStackTrace?Error.captureStackTrace(this,Dd):this.stack=Error().stack||"";b&&(this.message=String(b));this.message+=" :"+a.message;this.name="SecurityError"}B(Dd,Error);
function Ed(a){Error.captureStackTrace?Error.captureStackTrace(this,Ed):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.db.SqlParseError"}B(Ed,Error);function Fd(a){Error.captureStackTrace?Error.captureStackTrace(this,Fd):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.db.TimeoutError"}B(Fd,Error);function Gd(a,b){this.a=b}Gd.prototype.logger=null;function Hd(a){this.f=a;this.a=null;this.b=0}Hd.prototype.logger=null;Hd.prototype.D=null;function Id(a){return!!a.a&&!a.c}Hd.prototype.C=null;function Jd(a,b,c,d,e,f){this.F=a;this.I=b;this.c=this.g=0;this.w=d;this.v=e;this.i=c||Kd;this.j=f||0}Jd.prototype.logger=null;Jd.prototype.type=function(){return this.F.La()};Jd.prototype.b=function(){return this.F};Jd.prototype.ia=function(){return"B"+this.I+"T"+this.g};var Kd="single";function Ld(){throw new fc("No active transaction");};function Md(a,b,c,d,e,f){Jd.call(this,a,b,c,d,e,f);this.f=[];this.h=[];this.a=new Hd(b);this.l=f||0;this.m=!1}B(Md,Jd);l=Md.prototype;l.logger=null;
function Nd(a,b,c){if("multi"==a.i)a:if(a=a.a,!a.D||!a.mode||c!=a.mode&&(a.mode!=I||c!=H)||b.length>a.D.length)b=!1;else{for(c=0;c<b.length;c++)if(-1==a.D.indexOf(b[c])){b=!1;break a}b=!0}else if("repeat"==a.i)a:if(a=a.a,a.D&&a.mode&&c==a.mode&&a.D.length==b.length){for(c=0;c<b.length;c++)if(-1==a.D.indexOf(b[c])){b=!1;break a}b=!0}else b=!1;else b="all"==a.i?!0:!1;return b}function Od(a){var b=0<a.f.length?a.f[0].D:null,c=0<a.f.length?a.f[0].mode:null;return null!=b&&null!=c?Nd(a,b,c):!1}
l.abort=function(){Ld()};
l.da=function(a,b,c,d){var e=x(b)?[b]:b,f=r(c)?c:H,g=this;if(this.a.a||!xd(this.b())&&this.m)this.f.push({ma:a,D:b,mode:f||H,C:d});else{d&&this.h.push(d);if(this.l&&this.g>=this.l)throw new Ob("Exceed maximum number of transactions of "+this.l);this.m=!0;this.b().transaction(function(c){var d=g.a;d.a=c;d.c=!1;d.D=b;d.mode=f;d.b++;d.C=null;S(b);a(g);for(a=null;Od(g);)c=g.f.shift(),c.C&&g.h.push(c.C),c.ma()},e,f,function(a,b){var c=g.a;c.a&&(c.a=null,c.D=null,c.mode=null,da(c.C)&&c.C(a,b),c.C=null);
for(c=0;c<g.h.length;c++)(0,g.h[c])(a,b);g.h.length=0;(c=g.f.shift())&&g.da(c.ma,c.D,c.mode,c.C);g.c=0})}};l.ia=function(){var a=this.a;return"B"+a.f+"T"+a.b};l.request=function(a,b,c,d){function e(a,b){f.a=null;d&&d(a,b)}var f=new K(a);a=c||H;var g=this;Id(this.a)&&Nd(this,b,a)?(b=this.a.a,this.c++,dc(f,b,this.ia()+"R"+this.c),this.h.push(e)):g.da(function(){var a=g.a.a;g.c++;dc(f,a,g.ia()+"R"+g.c)},b,a,e);return f};l.getName=function(){return this.b().getName()};function Pd(a,b){Md.call(this,a,b)}B(Pd,Md);Pd.prototype.logger=null;Pd.prototype.request=function(a,b,c){var d,e,f,g=Pd.B.request.call(this,a,b,c,function(a,b){g.a=null;if(d)"complete"!=a&&(f=!0,e=b),d(e,f);else{var c=new Fd;L(g,c,!0)}});gc(g,function(a,b,c){f=b;e=a;d=c});return g};function Qd(a,b,c){this.g=a;this.c=b;this.a=c;this.f=null}Qd.prototype.logger=null;Qd.prototype.h=function(){return this.a.g};Qd.prototype.abort=function(){this.a.abort()};function X(a){if(!a.f){var b;b=a.g;var c=b.La();if("indexeddb"==c)b=new Rd(0,b.c);else if("websql"==c||"sqlite"==c)b=new Sd(0,b.c);else throw new Pb("No executor for "+c);a.f=b}return a.f}Qd.prototype.b=function(){return this.g};
function Td(a,b){var c=x(b)?b:A(b)?b.name:void 0;if(!x(c))throw new G("store name "+c+" must be a string, but "+typeof c);var d=U(a.c,c);if(!d){if(!a.c.S())throw new G('store name "'+c+'" not found.');var e=d=Oc(A(b)?b:{name:c});var f=a.b(),g=e instanceof Nc?e:Oc(e),e=U(f.c,e.name);if(0==$c(g,e).length)(new F).callback(!1);else if(f.c instanceof ld)md(f.c,g),f.a?(f.a.close(),f.a=null,ud(f)):(new F).callback(!1);else throw new qd("");}else if(a.c.S()&&A(b)&&(f=Oc(b),f=$c(d,f)))throw new Nb(f);if(!d)throw new Bd(c);
return d};function Y(a,b,c){Qd.call(this,a,b,c)}B(Y,Qd);l=Y.prototype;l.logger=null;
l.count=function(a,b,c,d){var e,f,g,h;if(null!=a)if(t(a)){if(r(c)||r(b))throw new G("too many arguments.");f=a;for(var k=0;k<f.length;k++)if(!jd(this.c,f[k]))throw new G('store name "'+f[k]+'" at '+k+" not found.");Mb("countStores: "+S(f));e=this.a.request("d",f);M(e,function(){X(this).za(e,f)},this)}else if(x(a)){k=U(this.c,a);if(!k)throw new G('store name "'+a+'" not found.');f=[a];if(x(b))g=b,A(c)?h=xc(c):h=null;else if(A(b)||null==b)if(A(b))h=xc(b);else{if(null!=b)throw new G("key range must be  an object but found "+
dd(b)+" of type "+typeof b);h=null}else throw new G('invalid second argument for count "'+dd(c)+'" of type '+typeof b);Mb("countKeyRange: "+a+" "+(g?g:"")+S(h));e=this.a.request("d",f);T(k,e,arguments);M(e,function(){X(this).ka(e,f[0],h,g,!!d)},this)}else throw new G("Invalid store name or store names.");else k=id(this.c),e=this.a.request("d",k),gc(e,function(a,b,c){if(b)c(a,!0);else{for(var d=b=0;d<a.length;d++)b+=a[d];c(b,!1)}},this),M(e,function(){X(this).za(e,f)},this);return e};
l.get=function(a,b){var c=this,d;if(a instanceof tc){var e=a,f=e.a,g=U(this.c,f);if(!g){if(this.c.S()){if(xd(this.b()))return ic("e",void 0);d=new K("e");this.b().qa(function(){vb(c.get(a,b),function(a){d.callback(a)},function(a){d.s(a)})});return d}throw new G("Store: "+f+" not found.");}var h=e.b;d=this.a.request("ek",[f]);T(g,d,arguments,void 0,this);M(d,function(){X(this).Da(d,f,h)},this)}else if(x(a)&&r(b)){var k=a,g=U(this.c,k);if(!g){if(this.c.S()){if(xd(this.b()))return ic("e",void 0);d=new K("e");
this.b().qa(function(){vb(c.get(a,b),function(a){d.callback(a)},function(a){d.s(a)})});return d}throw new G('Store name "'+k+'" not found.');}var m=b;d=this.a.request("e",[k]);T(g,d,arguments,void 0,this);M(d,function(){X(this).Da(d,k,m)},this)}else throw new G("get require valid input arguments.");return d};
l.ub=function(a,b,c,d,e){var f=U(this.c,a),g,h,k,m=null;A(b)&&(m=xc(b));if(r(c))if(y(c))g=c;else throw new G("limit must be a number, but "+c+" is "+typeof c);else g=100;if(r(d))if(y(d))h=d;else throw new G("offset must be a number, but "+d+" is "+typeof d);else h=0;if(r(e))if(ca(e))k=e;else throw new G("reverse must be a boolean, but "+e+" is "+typeof e);var n=this.a.request("g",[a]);T(f,n,arguments);M(n,function(){X(this).R(n,2,a,null,m,g,h,k,!1)},this);return n};
l.ca=function(a,b,c,d,e,f,g){var h,k,m,n,p,u=U(this.c,a);h=xc(c);if(y(d))k=d;else{if(r(d))throw new G("limit must be a number");k=100}if(y(e))m=e;else{if(r(e))throw new G("offset must be a number");m=0}if(r(f))if(ca(f))n=f;else throw new G("reverse must be a boolean");if(r(g))if(ca(g))p=g;else throw new G("unique must be a boolean");var v=this.a.request("i",[a]);T(u,v,arguments);M(v,function(){X(this).R(v,2,a,b,h,k,m,n,p)},this);return v};
l.keys=function(a,b,c,d,e,f,g){var h=U(this.c,a);return this.c.S()&&!h?ic("g",[]):x(b)?this.ca(a,b,c,d,e,f,g):this.ub(a,b,c,d,e)};
l.values=function(a,b,c,d,e,f,g){var h=this,k;if(x(a)){var m=a,n=U(this.c,m);if(!n){if(this.c.S()){if(xd(this.b()))return ic("s",[]);k=new K("s");this.b().qa(function(){vb(h.values(a,b,c,d,e,f),function(a){k.callback(a)},function(a){k.s(a)})});return k}throw new Bd(m);}if(t(b)){var p=b;k=this.a.request("v",[m]);T(n,k,arguments,void 0,this);M(k,function(){X(this).Xa(k,m,p)},this)}else k=x(b)?this.fa(m,b,c,d,e,f,g):this.xb(m,b,c,d,e)}else if(t(a))if(a[0]instanceof tc){for(var n=[],u=a,v=0;v<u.length;v++){var z=
u[v].a;if(!jd(this.c,z)){if(this.c.S())return n=[],n[u.length-1]=void 0,ic("e",n);throw new G("Store: "+z+" not found.");}0<=za(n,z)||n.push(z)}Mb("listByKeys: "+S(n)+" "+u.length+" keys");k=this.a.request("w",n);M(k,function(){X(this).Ya(k,u)},this)}else throw new G("first argumentmust be array of ydn.db.Key, but "+a[0]+" of "+typeof a[0]+" found.");else throw new G("first argument "+a+" is invalid.");return k};
l.xb=function(a,b,c,d,e){var f=U(this.c,a),g,h,k,m=null;A(b)&&(m=xc(b));if(r(c))if(y(c))g=c;else throw new G("limit must be a number, but "+c+" is "+typeof c);else g=100;if(r(d))if(y(d))h=d;else throw new G("offset must be a number, but "+d+" is "+typeof d);else h=0;if(r(e))if(ca(e))k=e;else throw new G("reverse must be a boolean, but "+e+" is "+typeof e);var n=this.a.request("s",[a]);T(f,n,arguments);M(n,function(){X(this).R(n,4,a,null,m,g,h,k,!1)},this);return n};
l.fa=function(a,b,c,d,e,f,g){var h=U(this.c,a),k,m,n,p,u=xc(c);if(r(d))if(y(d))k=d;else throw new G("limit must be a number.");else k=100;if(r(e))if(y(e))m=e;else throw new G("offset must be a number.");else m=0;if(ca(f))n=f;else if(r(f))throw new G("reverse must be a boolean, but "+f);if(r(g))if(ca(g))p=g;else throw new G("unique must be a boolean");var v=this.a.request("u",[a]);T(h,v,arguments);M(v,function(){X(this).R(v,4,a,b,u,k,m,n,p)},this);return v};
l.add=function(a,b,c){if(t(b))return this.ha(a,b,c);var d=Td(this,a),e=d.getName(),f;if(x(d.keyPath)&&r(c))throw new G("key must not be provided while the store uses in-line key.");if(!d.keyPath&&!d.b&&!r(c))throw new G("out-of-line key must be provided for store: "+e);if(t(b)){for(a=0;a<b.length;a++)ad(d,b[a]);f=this.a.request("b",[e],I);M(f,function(){X(this).K(f,!1,!1,e,b,c)},this);d.J&&f.G(function(){this.b();this.b()},this)}else if(A(b))Xc(d,b,c),ad(d,b),f=this.a.request("a",[e],I),M(f,function(){X(this).K(f,
!1,!0,e,[b],[c])},this),d.J&&f.G(function(){this.b();d.getName();this.b()},this);else throw new G("record must be an object or array list of objects, but "+b+" of type "+typeof b+" found.");return f};
l.ha=function(a,b,c){var d=Td(this,a),e=d.getName(),f;if(x(d.keyPath)&&r(c))throw new G("key must not be provided while the store uses in-line key.");if(!d.keyPath&&!d.b&&!r(c))throw new G("out-of-line key must be provided for store: "+e);if(t(b)){for(a=0;a<b.length;a++)ad(d,b[a]);f=this.a.request("b",[e],I);M(f,function(){X(this).K(f,!1,!1,e,b,c)},this);d.J&&f.G(function(){this.b();d.getName();this.b()},this)}else throw new G("record must be an array list of objects, but "+b+" of type "+typeof b+
" found.");return f};
l.put=function(a,b,c){var d,e=this;if(a instanceof tc){var f=a,g=f.a,h=U(this.c,g);if(!h)throw new G('store "'+g+'" not found.');if(h.keyPath){var k=Xc(h,b);if(null!=k){if(0!=jc(k,f.b))throw new G("Inline key must be "+f+" but "+k+" found.");}else Yc(h,b,f.b);return this.put(g,b)}return this.put(g,b,f.b)}if(t(a)){for(var m=a,n=b,f=[],g=0,h=m.length;g<h;g++){k=m[g].a;-1==za(f,k)&&f.push(k);var p=U(this.c,k);if(!p)throw new G('store "'+k+'" not found.');p.keyPath&&Yc(p,n[g],m[g].b)}Mb("putByKeys: to "+S(f)+
" "+n.length+" objects");for(g=0;g<n.length;g++)ad(p,n[g]);d=this.a.request("l",f,I);T(p,d,arguments);M(d,function(){X(e).bb(d,n,m)},this)}else if(x(a)||A(a)){var p=Td(this,a),u=p.getName();if(p.keyPath&&r(c))throw new G("key must not be provided while the store uses in-line key.");if(!p.keyPath&&!p.b&&!r(c))throw new G("out-of-line key must be provided for store: "+u);if(t(b)){for(var v=b,z=c,g=0;g<v.length;g++)ad(p,v[g]);d=this.a.request("k",[u],I);T(p,d,arguments);M(d,function(){X(this).K(d,!0,
!1,u,v,z)},this);p.J&&d.G(function(){this.b();this.b()},this)}else if(A(b)){var C=b,W=c;if(r(q.Blob)&&C instanceof Blob&&p.W&&!p.keyPath&&0==p.a.length&&Gb)d=new K("j"),f=new FileReader,f.onload=function(a){var b=a.target.result,c=e.a.request("j",[u],I);T(p,c,[u,C,W]);M(c,function(){X(e).K(c,!0,!0,u,[b],[W])},this);vb(c,function(a){d.callback(a)},function(a){d.s(a)})},f.onerror=function(a){d.s(a)},f.onabort=function(a){d.s(a)},f.readAsDataURL(C);else{ad(p,C);d=this.a.request("j",[u],I);var ka=[u,
C,W];T(p,d,ka);M(d,function(){var a=r(W)?[ka[2]]:void 0;X(e).K(d,!0,!0,u,[ka[1]],a)},this)}p.J&&d.G(function(){this.b();this.b()},this)}else throw new G("put record value must be Object or array of Objects");}else throw new G("the first argument of put must be store name, store schema or array of keys.");return d};
l.ra=function(a,b,c){var d,e=Td(this,a),f=e.getName();if(e.keyPath&&r(c))throw new G("key must not be provided while the store uses in-line key.");if(!e.keyPath&&!e.b&&!r(c))throw new G("out-of-line key must be provided for store: "+f);for(var g=b,h=c,k=0;k<g.length;k++)ad(e,g[k]);d=this.a.request("k",[f],I);T(e,d,arguments);M(d,function(){X(this).K(d,!0,!1,f,g,h)},this);e.J&&d.G(function(){this.b();this.b()},this);return d};
l.clear=function(a,b){var c;if(x(a)){var d=U(this.c,a);if(!d)throw new G('store name "'+a+'" not found.');if(A(b)){var e=xc(b);if(null===e)throw new G("clear method requires a valid non-null KeyRange object.");Mb("clearByKeyRange: "+a+":"+S(e));c=this.a.request("c",[a],I);T(d,c,[a,e]);M(c,function(){X(this).Ua(c,a,e)},this)}else{if(r(b))throw new G("clear method requires a valid KeyRange object as second argument, but found "+b+" of type "+typeof b);c=this.a.request("c",[a],I);M(c,function(){X(this).wa(c,
[a])},this)}}else if(!r(a)||t(a)&&x(a[0])){var f=a||id(this.c);Mb("clearByStores: "+S(f));c=this.a.request("c",f,I);M(c,function(){X(this).wa(c,f)},this)}else throw new G('first argument "'+a+'" is invalid.');return c};
l.ta=function(a,b,c){var d;if(x(a)){var e=U(this.c,a);if(!e)throw new G('store name "'+a+'" not found.');if(r(c))if(x(b)){var f=Rc(e,b);if(!f)throw new G("index: "+b+" not found in "+a);if(A(c)||null===c){var g=xc(c);Mb("removeByIndexKeyRange: "+a+":"+f.getName()+" "+a);d=this.a.request("p",[a],I);M(d,function(){X(this).cb(d,a,f.getName(),g)},this)}else throw new G("key range "+c+' is invalid type "'+typeof c+'".');}else throw new G('index name "'+b+'" must be a string, but '+typeof b+" found.");
else if(x(b)||y(b)||w(b)||b instanceof Date){d=this.a.request("m",[a],I);var h=[a,b];T(e,d,h);M(d,function(){X(this).Ga(d,a,h[1])},this);e.J&&d.G(function(){this.b();this.b()},this)}else if(A(b))g=xc(b),Mb("removeByKeyRange: "+a+":"+S(g)),d=this.a.request("n",[a],I),T(e,d,[a,g]),M(d,function(){X(this).eb(d,a,g)},this),e.J&&d.G(function(){this.b();this.b()},this);else throw new G('Invalid key or key range "'+b+'" of type '+typeof b);}else if(a instanceof tc){var k=a.a,e=U(this.c,k);d=this.a.request("m",
[k],I);var m=[k,a.b];T(e,d,m);M(d,function(){X(this).Ga(d,k,m[1])},this)}else if(t(a)){b=[];c=0;for(e=a.length;c<e;c++){var n=a[c].a;-1==za(b,n)&&b.push(n)}if(1>b.length)throw new G('at least one valid key required in key list "'+dd(a)+'"');d=this.a.request("o",b,I);M(d,function(){X(this).fb(d,a)},this)}else throw new G('first argument requires store name, key (ydn.db.Key) or list of keys (array) , but "'+dd(a)+'" ('+ba(a)+") found.");return d};function Ud(a,b,c,d){this.f=a;this.a=Ea(c);this.c=d;this.b=[]}Ud.prototype.f=null;function Vd(a,b,c){if(a.f)c&&a.b.push(c),b(a.f);else throw new Pb("tx committed on ParallelTxExecutor");};function Wd(a,b,c,d,e,f){Jd.call(this,a,b,c,d,e,f);this.a=null}B(Wd,Jd);l=Wd.prototype;l.logger=null;l.abort=function(){Ld()};
l.nb=function(a,b){var c;if("multi"==this.i)a:if(c=this.a,!c.a||!c.c||b!=c.c&&(c.c!=I||b!=H)||a.length>c.a.length)c=!1;else{for(var d=0;d<a.length;d++)if(-1==c.a.indexOf(a[d])){c=!1;break a}c=!0}else if("repeat"==this.i)a:if(c=this.a,c.a&&c.c&&b==c.c&&c.a.length==a.length){for(d=0;d<a.length;d++)if(-1==c.a.indexOf(a[d])){c=!1;break a}c=!0}else c=!1;else c="all"==this.i?!0:!1;return c};
l.da=function(a,b,c,d){function e(c){h.g++;k=new Ud(c,0,b,g);S(b);h.a=k;Vd(h.a,a,d)}function f(a,b){if(k){for(var c=k,d=0;d<c.b.length;d++)c.b[d](a,b);c.b.length=0;c.f=null;c.a=null;c.b=null}h.c=0}this.w&&(b=this.w);this.v&&(c=this.v);var g=r(c)?c:H,h=this,k;if(this.a&&this.a.f&&this.nb(b,g))Vd(this.a,a,d);else{if(this.j&&this.g>=this.j)throw new Ob("Exceed maximum number of transactions of "+this.j);this.b().transaction(e,b,g,f)}};
l.request=function(a,b,c,d){var e=new K(a),f=this;this.da(function(a){f.c++;dc(e,a,f.ia()+"R"+f.c)},b,c||H,function(a,b){e.a=null;d&&d(a,b)});return e};function Xd(a,b){Wd.call(this,a,b,Kd)}B(Xd,Wd);Xd.prototype.logger=null;Xd.prototype.nb=function(){return!1};Xd.prototype.request=function(a,b,c){var d,e,f,g=Xd.B.request.call(this,a,b,c,function(a,b){g.a=null;if(d)"complete"!=a&&(f=!0,e=b),d(e,f);else{var c=new Fd;L(g,c,!0)}});gc(g,function(a,b,c){f=b;e=a;d=c});return g};function Yd(a,b,c){V.call(this,a,b,c);this.Z=0;a=!0;b=Kd;c&&(r(c.isSerial)&&(a=!!c.isSerial),c.policy&&(b=c.policy));c=Zd(this,b,a);this.i=Zd(this,"atomic",!1);this.b=this.Y(c,this.i)}B(Yd,V);l=Yd.prototype;l.Z=0;l.ob=function(a,b,c,d,e,f){a=a||Kd;var g;"readonly"==d?g=H:"readwrite"==d&&(g=I);a=Zd(this,a,b,c,g,e);return this.Y(a,f?null:this.i)};l.Y=function(a){return new Qd(this,this.c,a)};
function Zd(a,b,c,d,e,f){if(c){if("multi"==b||"repeat"==b||"all"==b||b==Kd)return new Md(a,a.Z++,b,d,e,f);if("atomic"==b)return new Pd(a,a.Z++);throw new G('Invalid requestType "'+b+'"');}if("multi"==b||"repeat"==b||"all"==b||b==Kd)return new Wd(a,a.Z++,b,d,e,f);if("atomic"==b)return new Xd(a,a.Z++);throw new G('Invalid requestType "'+b+'"');}
l.vb=function(a,b,c){this.Z++;b=b||id(this.c);var d=H;if(c)if("readwrite"==c)d=I;else if("readonly"!=c)throw new G('Invalid transaction mode "'+c+'"');var e=Zd(this,"all",!1,b,d,1),f=this.Y(e,this.i),g=new K("q");e.da(function(b){dc(g,b,e.ia()+"R0");a(f)},b,d,function(a){g.a=null;L(g,e.g,"complete"!==a)});return g};l.Db=function(){return this.b?this.b.a.g:NaN};function Z(a,b,c){Yd.call(this,a,b,c);a=this.c;for(b=0;b<a.a.length;b++){c=a.a[b];var d=U(a,c.getName());if(d){if(!Uc(d,"k"))throw new G('full text index store "'+d.getName()+'" must have "keyword" index');if(!Uc(d,"v"))throw new G('full text index store "'+d.getName()+'" must have "keyword" index');if("id"!=d.keyPath)throw new G('full text index store "'+d.getName()+'" must use "id" as key path.');}else throw new G('full text index store "'+c.getName()+'" required.');for(d=0;d<c.count();d++){var e=
c.index(d),f=U(a,e.a);if(f)f.getName();else throw new G('full text source store "'+e.a+'" does not exist for full text index "'+c.getName()+'"');}}}B(Z,Yd);l=Z.prototype;l.Y=function(a){return new Y(this,this.c,a)};l.add=function(a,b,c){return this.b.add(a,b,c)};l.ha=function(a,b,c){return this.b.ha(a,b,c)};l.count=function(a,b,c,d){return this.b.count(a,b,c,d)};l.get=function(a,b){return this.b.get(a,b)};l.keys=function(a,b,c,d,e,f,g){return this.b.keys(a,b,c,d,e,f,g)};
l.ca=function(a,b,c,d,e,f,g){return this.b.ca(a,b,c,d,e,f,g)};l.values=function(a,b,c,d,e,f){return this.b.values(a,b,c,d,e,f)};l.fa=function(a,b,c,d,e,f,g){return this.b.fa(a,b,c,d,e,f,g)};l.put=function(a,b,c){return this.b.put(a,b,c)};l.ra=function(a,b,c){return this.b.ra(a,b,c)};l.clear=function(a,b,c){return this.b.clear(a,b,c)};l.ta=function(a,b,c){return this.b.ta(a,b,c)};Yd.prototype.branch=Yd.prototype.ob;Yd.prototype.getTxNo=Yd.prototype.Db;Qd.prototype.getTxNo=Qd.prototype.h;Yd.prototype.run=Yd.prototype.vb;Z.prototype.branch=Z.prototype.ob;Z.prototype.add=Z.prototype.add;Z.prototype.addAll=Z.prototype.ha;Z.prototype.get=Z.prototype.get;Z.prototype.keys=Z.prototype.keys;Z.prototype.keysByIndex=Z.prototype.ca;Z.prototype.values=Z.prototype.values;Z.prototype.valuesByIndex=Z.prototype.fa;Z.prototype.put=Z.prototype.put;Z.prototype.putAll=Z.prototype.ra;Z.prototype.clear=Z.prototype.clear;Z.prototype.remove=Z.prototype.ta;Z.prototype.count=Z.prototype.count;Y.prototype.add=Y.prototype.add;
Y.prototype.addAll=Y.prototype.ha;Y.prototype.get=Y.prototype.get;Y.prototype.keys=Y.prototype.keys;Y.prototype.keysByIndex=Y.prototype.ca;Y.prototype.values=Y.prototype.values;Y.prototype.valuesByIndex=Y.prototype.fa;Y.prototype.put=Y.prototype.put;Y.prototype.putAll=Y.prototype.ra;Y.prototype.clear=Y.prototype.clear;Y.prototype.remove=Y.prototype.ta;Y.prototype.count=Y.prototype.count;ma("ydn.db.Key",tc);tc.prototype.id=tc.prototype.rb;tc.prototype.parent=tc.prototype.zb;
tc.prototype.storeName=tc.prototype.Ab;ma("ydn.db.KeyRange",N);N.upperBound=Ac;N.lowerBound=Bc;N.bound=zc;N.only=yc;N.starts=Cc;pc.prototype.store_name=pc.prototype.a;pc.prototype.getStoreName=pc.prototype.b;function $d(a,b,c,d,e){if(!(b instanceof N))if(x(b)&&r(c)){var f,g,h,k;if("starts"==b||"^"==b)b=Cc(c);else{if("<"==b||"<="==b)f=c,h="<"==b;else if(">"==b||">="==b)g=c,k=">"==b;else if("="==b||"=="==b)f=g=c;else throw new G("invalid op: "+b);if("<"==d||"<="==d)f=e,h="<"==d;else if(">"==d||">="==d)g=e,k=">"==d;else if(r(d))throw new G("invalid op2: "+d);b=zc(g,f,k,h)}}else if(null!=b){if(!(b instanceof N))if(A(b))b=new N(b.lower,b.upper,b.lowerOpen,b.upperOpen);else throw new G("Invalid key range: "+
b+" of type "+typeof b);}else b=null;this.a=b;this.U=a}$d.prototype.U="";$d.prototype.ua=function(a){if(this.U!=a.U)return null;a=null!=this.a&&null!=a.a?this.a.ua(a.a):this.a||a.a;return new $d(this.U,a)};function ae(a,b,c,d){mc.call(this);this.b=c;this.a=c.getName();this.j=void 0;this.h=!1;this.V=null;this.m=a;this.w=this.l=!1;this.N=d||4;this.X=this.i=this.f=void 0;this.I=function(){throw new Pb;};this.T=function(){throw new Pb;};this.Pa=function(){}}B(ae,mc);l=ae.prototype;
l.Na=function(a,b,c,d,e){if(r(b)){a=this.b;if(t(b))a:{for(var f=0;f<a.a.length;f++)if(!Lc(a.a[f].keyPath,b)){b=a.a[f];break a}b=null}else b=Rc(a,b);this.j=b.getName()}this.h=x(this.j);this.V=c||null;this.w=this.l=!1;this.reverse="prev"==d||"prevunique"==d;this.unique="nextunique"==d||"prevunique"==d;this.dir=d;this.pa=e;this.X=this.i=this.f=void 0};l.dir="";l.V=null;l.unique=!1;l.reverse=!1;l.pa=!0;l.logger=null;function be(a,b){a.T(b);ce(a);a.l=!0}
l.L=function(a,b,c){null==a&&(this.l=!0);this.f=a;this.i=b;this.X=c;this.l?(this.I(),ce(this)):this.I(this.f)};function ce(a){null!=a.i?a.i=vc(a.i):a.i=void 0;null!=a.f?a.f=vc(a.f):a.f=void 0;a.Pa(a.w,a.f,a.i)}l.open=function(a,b,c,d){this.m=a;this.l=this.w=!1;this.f=c;this.i=d;this.openCursor(this.f,this.i)};function de(a){a.w=!0;ce(a)}l.P=function(){return this.h?this.i:this.f};l.Ma=function(){return this.pa?this.P():this.X};l.xa=function(){};l.ba=function(){};function ee(){};function fe(a,b,c,d,e,f,g){this.a=a;this.c=b;this.g=g;this.v=!!this.c;this.b=r(f)?f:!!x(this.c);a="next";d&&e?a="prevunique":d?a="prev":e&&(a="nextunique");this.f=a;this.i=xc(c);this.h=ge;this.m=NaN}B(fe,ee);fe.prototype.b=!0;function he(a,b,c){if(3<arguments.length)throw new G("too many argument");fe.call(this,a,void 0,b,c,void 0,!1)}B(he,fe);function ie(a,b,c,d,e){if(!x(b))throw new G("index name must be string");fe.call(this,a,b,c,d,e,!1)}B(ie,fe);var ge="init";l=fe.prototype;l.logger=null;
l.clone=function(){var a=new fe(this.a,this.c,this.i,je(this),ke(this),this.b,this.g);a.m=this.m;return a};l.unique=function(a){return new fe(this.a,this.c,this.i,je(this),a,this.b,this.g)};l.reverse=function(){return new fe(this.a,this.c,this.i,!je(this),ke(this),this.b,this.g)};function je(a){return"prev"===a.f||"prevunique"===a.f}function ke(a){return"nextunique"===a.f||"prevunique"===a.f}
l.load=function(a){a=a[0];a.Na(this.a,this.g||this.c,this.i,this.f,this.b);this.h="busy";var b=this;a.Pa=function(a,d,e){b.j=d;b.l=e;b.h=a?"rest":"done"};a.openCursor(this.j,this.l);return a};l.reset=function(a,b,c){a=a||ge;"busy"!=this.h&&(this.j=b,this.l=c,this.h=a)};l.stores=function(){return[this.a]};function le(a,b,c){Qd.call(this,a,b,c)}B(le,Y);l=le.prototype;l.logger=null;l.get=function(a,b){if(a instanceof fe){var c=a.a,d=U(this.c,c);if(!d)throw new G('store "'+c+'" not found.');var e=a.c;if(r(e)&&!Uc(d,e))throw new G('index "'+e+'" not found in store "'+c+'".');var f=this.a.request("f",[c]);M(f,function(){me(this,5,f,a,1)},this);return f}return le.B.get.call(this,a,b)};
l.Fa=function(a,b){var c=100;if(y(b)){if(c=b,1>c)throw new G("limit must be a positive value, but "+b);}else if(r(b))throw new G("limit must be a number,  but "+b);var d=this.a.request("h",[a.a]);M(d,function(){a.v?me(this,1,d,a,c):me(this,2,d,a,c)},this);return d};l.keys=function(a,b,c,d,e,f,g){return a instanceof fe?this.Fa(a,b):le.B.keys.call(this,a,b,c,d,e,f,g)};l.ya=function(a){var b=this.a.request("d",[a.a]);M(b,function(){me(this,6,b,a)},this);return b};
l.count=function(a,b,c,d){if(a instanceof fe){if(r(b)||r(c))throw new G("too many arguments.");return this.ya(a)}return le.B.count.call(this,a,b,c,d)};l.Ha=function(a,b){var c;if(y(b)){if(c=b,1>c)throw new G("limit must be a positive value, but "+c);}else if(r(b))throw new G("limit must be a number, but "+b);var d=this.a.request("t",[a.a]);M(d,function(){a.b?me(this,2,d,a,c):me(this,4,d,a,c)},this);return d};
l.values=function(a,b,c,d,e,f){return a instanceof fe?this.Ha(a,b):le.B.values.call(this,a,b,c,d,e,f)};
l.open=function(a,b,c,d){c=c||H;var e=this,f=this.a.request("i5",b.stores(),c);M(f,function(c){for(var h=hc(f),k=b.stores(),m=[],n=0;n<k.length;n++)m[n]=X(e).b(c,h,k[n]);var p=b.load(m);p.T=function(a){L(f,a,!0)};p.I=function(b){if(null!=b){var c=a.call(d,p);!0===c?(p.l=!1,p.w=!1,p.openCursor(void 0,void 0)):A(c)?!0===c.restart?(b=c["continue"],c=c.continuePrimary,p.l=!1,p.w=!1,p.openCursor(c,b)):null!=c["continue"]?p.ba(c["continue"]):null!=c.continuePrimary?p.xa(c.continuePrimary):(de(p),L(f,void 0)):
null===c?(de(p),L(f,void 0)):null!=c?p.ba(c):p.advance(1)}else de(p),L(f,void 0)}},this);return f};function me(a,b,c,d,e){var f=[],g=c.a,h=hc(c);a=X(a);for(var k=[],m=d.stores(),n=0;n<m.length;n++)k[n]=a.b(g,h,m[n]);var p=d.load(k);p.T=function(a){de(p);L(c,a,!0)};var u=0,v=!1;p.I=function(a){v||(v=!0);null!=a?(p.P(),u++,1==b?f.push(a):2==b?f.push(p.P()):3==b?f.push([a,p.P()]):6!=b&&f.push(p.Ma()),5==b?(de(p),L(c,f[0])):6==b||!r(e)||u<e?p.ba():(de(p),L(c,f))):(de(p),L(c,5==b?f[0]:6==b?u:f))}};function ne(a,b,c){Z.call(this,a,b,c)}B(ne,Z);l=ne.prototype;l.Y=function(a){return new le(this,this.c,a)};l.open=function(a,b,c,d){return this.b.open(a,b,c,d)};l.ya=function(a){return this.b.ya(a)};l.Ha=function(a,b){return this.b.Ha(a,b)};l.Fa=function(a,b){return this.b.Fa(a,b)};function oe(a){if(!x(a))throw new nd;this.H=a;this.c=I;this.b=[];pe(this,a);this.ga=""}l=oe.prototype;l.H="";l.hb=NaN;l.Za=NaN;l.Ia=!1;l.ga="";
function pe(a,b){var c=b.split(/\sFROM\s/i);if(2==c.length){var d=c[1],c=c[0].match(/\s*?(SELECT|INSERT|UPDATE|DELETE)\s+(.*)/i);if(3==c.length){a.f=c[1].toUpperCase();if("SELECT"==a.f)a.c=H;else if("INSERT"==a.f)a.c=I;else if("UPDATE"==a.f)a.c=I;else if("DELETE"==a.f)a.c=I;else return;var c=c[2].trim(),e=c.match(/^(MIN|MAX|COUNT|AVG|SUM)/i);e?(a.g=e[0].toUpperCase(),c=c.replace(/^(MIN|MAX|COUNT|AVG|SUM)/i,"").trim()):a.g=void 0;"("==c.charAt(0)&&(")"==c.charAt(c.length-1)?c=c.substring(1,c.length-
1):new Ed("missing closing parentheses"));a.l=c;c=d.search(/(ORDER BY|LIMIT|OFFSET)/i);0<c?(a.a=d.substring(c),d=d.substring(0,c)):a.a="";c=d.search(/WHERE/i);0<c?(a.h=d.substring(c+6).trim(),d=d.substring(0,c)):a.h="";a.b=d.trim().split(",").map(function(a){a=qa(a,'"');a=qa(a,"'");return a.trim()})}}}function qe(a){if("*"==a.l)return null;a=a.l.split(",");return a=a.map(function(a){return qa(a.trim(),'"')})}l.toJSON=function(){return{sql:this.H}};
function re(a){function b(a){return Da(c,function(b){return b.U==a})}var c=[],d=/(.+?)(<=|>=|=|>|<)(.+)/i;if(0<a.h.length)for(var e=a.h.split("AND"),f=0;f<e.length;f++){var g=e[f],h=d.exec(g);if(h){var k=h[1].trim(),k=qa(k,'"'),k=qa(k,"'");if(0<k.length){var m=h[3].trim();0==m.lastIndexOf('"',0)?m=qa(m,'"'):0==m.lastIndexOf("'",0)?m=qa(m,"'"):m=parseFloat(m);h=new $d(k,h[2],m);k=b(k);if(0<=k){if(c[k]=c[k].ua(h),!c[k])return a.ga='where clause "'+g+'" conflict',null}else c.push(h)}else return a.ga=
'Invalid clause "'+g+'"',null}else return a.ga='Invalid clause "'+g+'"',null}return c}l.toString=function(){return oe.B.toString.call(this)};function se(a,b,c,d){ae.call(this,a,0,c,d);this.c=null}B(se,ae);l=se.prototype;l.logger=null;l.la=function(a){(a=a.target.result)?this.L(a.key,a.primaryKey,a.value):this.L()};
l.openCursor=function(a,b){function c(a,b,c){p.c=n;p.c.onsuccess=ia(p.la,p);p.L(a,p.h?b:void 0,c);n=null}var d=this.V,e=this.m.objectStore(this.a),f=x(this.j)?e.index(this.j):null;if(r(a))var g=f?!r(b):!0,h=d?d.lower:void 0,k=d?d.upper:void 0,m=d?!!d.lowerOpen:!1,d=d?!!d.upperOpen:!1,d=wc(this.reverse?new N(h,a,m,g):new N(a,k,g,d));var n;this.pa?f?n=null!=this.dir?f.openKeyCursor(d,this.dir):null!=d?f.openKeyCursor(d):f.openKeyCursor():n=null!=this.dir?e.openCursor(d,this.dir):null!=d?e.openCursor(d):
e.openCursor():f?n=null!=this.dir?f.openCursor(d,this.dir):null!=d?f.openCursor(d):f.openCursor():n=null!=this.dir?e.openCursor(d,this.dir):null!=d?e.openCursor(d):e.openCursor();var p=this;n.onerror=function(a){var b=n.error;a.preventDefault();be(p,b)};null!=a?n.onsuccess=function(d){if(d=d.target.result){var e=J.cmp(d.key,a),f=p.reverse?-1:1;if(e==f)c(d.key,d.primaryKey,d.value);else if(e==-f)d["continue"](a);else if(null!=b)if(J.cmp(d.primaryKey,b)==f)c(d.key,d.primaryKey,d.value);else d["continue"]();
else d["continue"]()}else c()}:(p.c=n,p.c.onsuccess=ia(p.la,p))};l.Ea=function(){return!!this.c};l.update=function(a){var b=this.c.result;if(b){var c=new F;a=b.update(a);a.onsuccess=function(a){c.callback(a.target.result)};a.onerror=function(a){a.preventDefault();c.s(a)};return c}throw new Ad("cursor gone");};
l.clear=function(){var a=this.c.result;if(a){var b=new F,a=a["delete"]();a.onsuccess=function(){b.callback(1)};a.onerror=function(a){a.preventDefault();b.s(a)};return b}throw new Ad("cursor gone");};l.advance=function(a){var b=this.c.result;if(1==a)b["continue"]();else b.advance(a)};
l.xa=function(a){var b,c=this.c.result,d=this;this.c.onsuccess=function(e){if(c=e.target.result)if(b=J.cmp(c.primaryKey,a),0==b||1==b&&!d.reverse||-1==b&&d.reverse)d.c.onsuccess=ia(d.la,d),d.L(c.key,d.h?c.primaryKey:void 0,c.value);else c["continue"]();else d.c.onsuccess=ia(d.la,d),d.L()};c["continue"]()};l.ba=function(a){var b=this.c.result;if(null!=a)b["continue"](a);else b["continue"]()};function te(a,b){this.a=b}B(te,Gd);l=te.prototype;l.logger=null;l.za=function(a,b){function c(e){var f=a.a.objectStore(b[e]).count();f.onsuccess=function(f){d[e]=f.target.result;e++;e==b.length?L(a,d):c(e)};f.onerror=function(b){b.preventDefault();L(a,f.error,!0)}}var d=[];0==b.length?L(a,[]):c(0)};
l.K=function(a,b,c,d,e,f){function g(d){if(null==e[d])if(k++,k==e.length)L(a,h,m);else{var u=d+10;u<e.length&&g(u)}var v,u=e[d];v=f&&null!=f[d]?b?n.put(u,f[d]):n.add(u,f[d]):b?n.put(u):n.add(u);v.onsuccess=function(b){k++;h[d]=b.target.result;k==e.length?L(a,c?h[0]:h,m):(b=d+10,b<e.length&&g(b))};v.onerror=function(b){k++;var f=v.error;dd(e[d]);h[d]=f;m=!0;b.preventDefault();k==e.length?L(a,c?h[0]:h,m):(b=d+10,b<e.length&&g(b))}}var h=[],k=0,m=!1,n=a.a.objectStore(d);if(0<e.length)for(d=0;10>d&&d<
e.length;d++)g(d);else L(a,[])};l.bb=function(a,b,c){function d(h){var m=c[h],n=a.a.objectStore(m.a),p;p=null===n.keyPath?n.put(b[h],m.b):n.put(b[h]);p.onsuccess=function(c){f++;e[h]=c.target.result;f==b.length?L(a,e,g):(c=h+10,c<b.length&&d(c))};p.onerror=function(c){f++;e[h]=p.error;g=!0;c.preventDefault();f==b.length?L(a,e,g):(c=h+10,c<b.length&&d(c))}}var e=[],f=0,g=!1;if(0<b.length)for(var h=0;10>h&&h<b.length;h++)d(h);else L(a,e,g)};
l.Ga=function(a,b,c){var d=a.a.objectStore(b).openCursor(Dc.only(c));d.onsuccess=function(b){if(b=b.target.result){var c=b["delete"]();c.onsuccess=function(){L(a,1)};c.onerror=function(){L(a,c.error,!0)}}else L(a,0)};d.onerror=function(b){b.preventDefault();L(a,d.error,!0)}};
l.fb=function(a,b){function c(h){h++;if(h>=b.length)0<g.length?L(a,g,!0):L(a,d);else{b[h].a!=e&&(e=b[h].a,f=a.a.objectStore(e));var k=f["delete"](b[h].b);k.onsuccess=function(){d++;c(h)};k.onerror=function(a){a.preventDefault();g[h]=k.error;c(h)}}}var d=0,e,f,g=[];c(-1)};
l.eb=function(a,b,c){var d=a.a.objectStore(b),e=d.count(c);e.onsuccess=function(b){var e=b.target.result,h=d["delete"](c);h.onsuccess=function(){L(a,e)};h.onerror=function(){L(a,h.error,!0)}};e.onerror=function(b){b.preventDefault();L(a,e.error,!0)}};l.Ua=function(a,b,c){var d=a.a.objectStore(b)["delete"](c);d.onsuccess=function(){L(a,void 0)};d.onerror=function(b){b.preventDefault();L(a,d.error,!0)}};
l.cb=function(a,b,c,d){var e=[],f=a.a.objectStore(b).index(c).openCursor(d),g=0;f.onsuccess=function(b){var c=b.target.result;if(c){var d=c["delete"]();d.onsuccess=function(){g++;c["continue"]()};d.onerror=function(a){e.push(d.error);a.preventDefault();c["continue"]()}}else 0<e.length?L(a,e,!0):L(a,g)};f.onerror=function(b){b.preventDefault();L(a,f.error,!0)}};
l.wa=function(a,b){for(var c=b.length,d=0,e=0;e<c;e++){var f=a.a.objectStore(b[e]).clear();f.onsuccess=function(){d++;d==c&&L(a,d)};f.onerror=function(b){d++;b.preventDefault();d==c&&L(a,f.error,!0)}}};
l.Da=function(a,b,c){var d=a.a.objectStore(b),e=d.get(c);e.onsuccess=function(b){var c=b.target.result;if(!d.keyPath&&0==d.indexNames.length&&Gb&&x(c)&&0<=c.indexOf(";base64,")){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substr(1,c.length-2));c=c.split(";base64,");b=c[0].split(":")[1];for(var c=window.atob(c[1]),e=c.length,k=new Uint8Array(e),m=0;m<e;++m)k[m]=c.charCodeAt(m);L(a,new Blob([k.buffer],{type:b}))}else L(a,b.target.result)};e.onerror=function(b){b.preventDefault();L(a,e.error,!0)}};
l.Xa=function(a,b,c){function d(b){if(null==c[b])if(f++,e[b]=void 0,f==h)L(a,e);else{var m=b+10;m<h&&d(m)}var n;n=g.get(c[b]);n.onsuccess=function(c){f++;e[b]=c.target.result;f==h?L(a,e):(c=b+10,c<h&&d(c))};n.onerror=function(b){f++;b.preventDefault();L(a,n.error,!0)}}var e=[];e.length=c.length;var f=0,g=a.a.objectStore(b),h=c.length;if(0<h)for(b=0;10>b&&b<h;b++)d(b);else L(a,[])};
l.Ya=function(a,b){function c(f){var h=b[f],k=a.a.objectStore(h.a).get(h.b);k.onsuccess=function(h){e++;d[f]=h.target.result;e==b.length?L(a,d):(h=f+10,h<b.length&&c(h))};k.onerror=function(b){e++;b.preventDefault();L(a,k.error,!0)}}var d=[];d.length=b.length;var e=0;if(0<b.length)for(var f=0;10>f&&f<b.length;f++)c(f);else L(a,[])};
l.ka=function(a,b,c,d){b=a.a.objectStore(b);c&&S(c);var e;null!=d?(d=b.index(d),e=null!=c?d.count(c):d.count()):e=null!=c?b.count(c):b.count();e.onsuccess=function(b){L(a,b.target.result)};e.onerror=function(b){b.preventDefault();L(a,e.error,!0)}};function ue(a,b,c,d){var e=b.getAll(c,d);e.onsuccess=function(b){L(a,b.target.result)};e.onerror=function(b){b.preventDefault();L(a,e.error,!0)}}
function ve(a,b,c,d){var e=b.getAllKeys(c,d);e.onsuccess=function(b){L(a,b.target.result)};e.onerror=function(b){b.preventDefault();L(a,e.error,!0)}}
l.R=function(a,b,c,d,e,f,g,h,k,m){var n=[],p=a.a.objectStore(c),u=h?k?"prevunique":"prev":k?"nextunique":"next";c=hc(a)+" "+b+" "+c+(d?":"+d:"")+(e?S(e):"");h&&(c+=" reverse");k&&(c+=" unique");if(m&&r(m[0])){var v=d?!r(m[1]):!0,z=m[0],C=e?e.lower:void 0,W=e?e.upper:void 0,ka=e?!!e.lowerOpen:!1;e=e?!!e.upperOpen:!1;e=wc(h?new N(C,z,ka,v):new N(z,W,v,e));c+=" starting from "+S(m[0]);r(m[1])&&(c+=", "+S(m[1]))}var O;if(1==b||2==b||3==b)if(d){c=p.index(d);if(2==b&&c.getAllKeys&&!k&&!g&&!h&&!m){ve(a,
c,e,f);return}O=c.openKeyCursor(e,u)}else{if(2==b&&p.getAllKeys&&!k&&!g&&!h&&!m){ve(a,p,e,f);return}O=p.openCursor(e,u)}else if(d){c=p.index(d);if(c.getAll&&!k&&!g&&!h&&!m){ue(a,c,e,f);return}O=c.openCursor(e,u)}else{if(p.getAll&&!k&&!g&&!h&&!m){ue(a,p,e,f);return}O=p.openCursor(e,u)}var P=!1;O.onsuccess=function(c){if(c=c.target.result){if(!P){if(0<g){P=!0;c.advance(g);return}if(m&&d&&r(m[0]))if(r(m[1])){var e=J.cmp(c.key,m[0]),k=h?-1:1;if(0==e){e=J.cmp(c.primaryKey,m[1]);if(0==e){P=!0;c["continue"]();
return}if(e==k)P=!0;else{c["continue"]();return}}else P=!0}else P=!0;else P=!0}1==b?n.push(c.key):2==b?n.push(c.primaryKey):3==b?(k={},d&&(k[d]=c.key),p.keyPath?k[p.keyPath]=c.primaryKey:k._ROWID_=c.primaryKey,n.push(k)):4==b?n.push(c.value):n.push([c.key,c.primaryKey,c.value]);if(n.length<f)c["continue"]();else m&&(m[0]=vc(c.key),m[1]=vc(c.primaryKey)),L(a,n)}else m&&(m[0]=void 0,m[1]=void 0),L(a,n)};O.onerror=function(b){b.preventDefault();L(a,O.error,!0)}};function we(a,b){this.a=b}B(we,te);we.prototype.logger=null;we.prototype.b=function(a,b,c,d){b=U(this.a,c);return new se(a,0,b,d)};function xe(a,b){this.a=b;this.c=a}xe.prototype.logger=null;xe.prototype.toJSON=function(){return{sql:this.a}};xe.prototype.toString=function(){return"idb.Node:"};
xe.prototype.b=function(a,b){var c=Ea(this.a.b)[0],d=this.a.i,e=this.a.hb,e=isNaN(e)?100:e,f=this.a.Za,f=isNaN(f)?0:f,g=this.a.j,h=qe(this.a),k=null,m=this.a.Ia;if(0==d.length)k=null;else if(1==d.length)k=xc(d[0].a);else throw new Nb("too many conditions.");null===h||gc(a,function(a,b,c){var d=a;b||(d=a.map(function(a){var b=h.length;if(1==b)return Ub(a,h[0]);for(var c={},d=0;d<b;d++)c[h[d]]=Ub(a,h[d]);return c}));c(d,b)});d=0<d.length?d[0].U:void 0;g&&g!=this.c.keyPath?b.R(a,4,c,g,k,e,f,m,!1):r(d)&&
d!=this.c.keyPath?b.R(a,4,c,d,k,e,f,m,!1):b.R(a,4,c,null,k,e,f,m,!1)};function ye(a,b){xe.call(this,a,b)}B(ye,xe);
ye.prototype.b=function(a,b){var c,d=Ea(this.a.b)[0],e=this.a.i,f=null;if(0==e.length)f=null;else if(1==e.length)f=xc(e[0].a);else throw new Nb("too many conditions.");var g=this.a.g,e=0<e.length?e[0].U:void 0;if("COUNT"==g)f?b.ka(a,d,f,e,!1):b.ka(a,d,null,void 0,!1);else{var h,k=qe(this.a);if(!k||0==k.length)throw new rd("field name require for reduce operation: "+g);k=k[0];if("MIN"==g)h=ze(k);else if("MAX"==g)h=Ae(k);else if("AVG"==g)c=0,h=Be(k);else if("SUM"==g)c=0,h=Ce(k);else throw new od(g);
var m;r(e)?m=new ie(d,e,f):m=new he(d,f);var d=b.b(a.a,hc(a),d,4),n=m.load([d]);n.T=function(b){L(a,b,!0)};var p=0;n.I=function(b){null!=b?(b=m.b?n.P():n.Ma(),c=h(b,c,p),n.advance(1),p++):L(a,c)}}};function Be(a){return function(b,c,d){r(c)||(c=0);return(c*d+b[a])/(d+1)}}function Ce(a){return function(b,c){return c+b[a]}}function ze(a){return function(b,c){var d=b[a];return r(c)?c<d?c:d:d}}function Ae(a){return function(b,c){var d=b[a];return r(c)?c>d?c:d:d}};function Rd(a,b){this.a=b}B(Rd,we);Rd.prototype.logger=null;
Rd.prototype.executeSql=function(a,b,c){if(c){for(var d=0;d<c.length;d++)b.H=b.H.replace("?",c[d]);pe(b,b.H)}b.i=re(b);if(b.i){c=b.a.length;if(d=/OFFSET\s+(\d+)/i.exec(b.a))b.Za=parseInt(d[1],10),c=b.a.search(/OFFSET/i);if(d=/LIMIT\s+(\d+)/i.exec(b.a))b.hb=parseInt(d[1],10),d=b.a.search(/LIMIT/i),d<c&&(c=d);(c=/ORDER BY\s+(.+)/i.exec(b.a.substr(0,c)))?(c=c[1].trim(),(d=c.match(/(ASC|DESC)/i))?(b.Ia="DESC"==d[0].toUpperCase(),c=c.replace(/\s+(ASC|DESC)/i,"")):b.Ia=!1,b.j=qa(qa(c,'"'),"'")):b.j=void 0;
c=""}else c=b.ga;if(c)throw new Ed(c);c=Ea(b.b);if(1==c.length){d=U(this.a,c[0]);if(!d)throw new Bd(c[0]);var e=qe(b);if(e)for(var f=0;f<e.length;f++)if(!Uc(d,e[f]))throw new Bd('Index "'+e[f]+'" not found in '+c[0]);var g;b.g?g=new ye(d,b):g=new xe(d,b);g.b(a,this)}else throw new od(b.H);};function De(a,b,c,d){ae.call(this,a,0,c,d);this.F=null;this.c=this.g=void 0}B(De,ae);l=De.prototype;l.logger=null;l.P=function(){return this.c};l.Na=function(a,b,c,d,e){De.B.Na.call(this,a,b,c,d,e);this.F=x(b)?Rc(this.b,b):null};l.Ma=function(){return this.v};function Ee(a,b){a.g=void 0;a.c=void 0;a.v=void 0;if(r(b))if(A(b)){var c=Jc(b[a.b.g],a.b.type);a.c=c;if(a.h){var d=Rc(a.b,a.j);a.g=Jc(b[a.j],d.type)}else a.g=c;a.v=a.pa?c:Fe(b,a.b)}else a.v=b}
function Ge(a,b,c){Rc(a.b,a.j);var d=[],e=a.j,f=a.V,g=a.g;if(null!=f){var h=f.lower,k=f.upper,m=f.lowerOpen,n=f.upperOpen;a.reverse?k=null!=k&&-1==jc(k,g)?k:g:h=null!=h&&1==jc(h,g)?h:g;null!=h&&null!=k?f=zc(h,k,!!m,!!n):f=null!=h?Dc.lowerBound(h,!!m):Dc.upperBound(k,!!n)}else f=a.reverse?Dc.upperBound(g):Dc.lowerBound(g);e=Qc(a.b,d,a.N,e,f,a.reverse,a.unique);c=a.reverse?Dc.upperBound(c,!1):Dc.lowerBound(c,!1);c=Qc(a.b,d,a.N,a.b.g,c,a.reverse,a.unique);e.o=e.o?e.o+(" AND "+c.o):c.o;c="SELECT "+e.select+
" FROM "+e.from+(e.o?" WHERE "+e.o:"")+(e.group?" GROUP BY "+e.group:"")+" ORDER BY "+e.M;c+=" LIMIT 1";Lb(a+": continuePrimary:  SQL: "+c+" : "+S(d));a.m.executeSql(c,d,function(c,d){0<d.rows.length?Ee(a,d.rows.item(0)):Ee(a);b.call(a,a.g,a.c,a.v);b=null},function(c,d){be(a,d);Ee(a);b.call(a,a.c,a.g,a.v);b=null;return!1})}
function He(a,b,c,d,e,f){var g=!d;d=[];a.h&&null!=f&&null!=c?c=Tc(a.b,a.N,d,a.F.getName(),a.V,c,g,f,a.reverse,a.unique):null!=c?(f=a.F?a.F.getName():null,c=Sc(a.b,a.N,d,f,a.V,a.reverse,a.unique,c,g)):(c=Pc(a.b,d,a.N,a.h?a.F.f:a.b.g,a.V,a.reverse,a.unique),a.h&&(c+=", "+a.b.c+" ASC"));c+=" LIMIT 1";0<e&&(c+=" OFFSET "+e);Lb(a+": continue:  SQL: "+c+" : "+S(d));a.m.executeSql(c,d,function(c,d){0<d.rows.length?Ee(a,d.rows.item(0)):Ee(a);b.call(a,a.g,a.c,a.v);b=null},function(c,d){be(a,d);Ee(a);b.call(a,
a.c,a.g,a.v);b=null;return!1})}l.Ea=function(){return!!this.m};l.update=function(a){if(!this.Ea())throw new Ad;var b=new F,c=this.P();a=Zc(this.b,a,c);var d="REPLACE INTO "+R(this.b)+" ("+a.Va.join(", ")+") VALUES ("+a.gb.join(", ")+")";Lb(this+': update "'+d+'" : '+S(a.values));this.m.executeSql(d,a.values,function(){b.callback(c)},function(a,c){b.s(c);return!1});return b};
l.advance=function(a){var b=this.g,c=this.c,d=!0;null==this.g||this.h&&null==this.c||(--a,d=!1);He(this,function(a,d,g){var h=null!=b&&null!=a&&0==jc(b,a);if(this.h){var k=null!=d&&null!=c&&0==jc(d,c);if(h&&k)throw new Pb("current: "+b+";"+c+" next: "+a+";"+d);}else if(h)throw new Pb("current: "+b+" next: "+a);this.L(a,d,g)},this.g,d,a,this.c)};l.ba=function(a){null!=a?He(this,this.L,a,!0):this.advance(1)};l.openCursor=function(a,b){He(this,this.L,a,!1,0,b)};
l.clear=function(){if(!this.Ea())throw new Ad;var a=new F,b=this.b.g,b="DELETE FROM "+R(this.b)+" WHERE "+b+" = ?",c=[this.P()];Lb(this+': clear "'+b+'" : '+S(c));this.m.executeSql(b,c,function(b,c){a.callback(c.rowsAffected)},function(b,c){a.s(c);return!1});return a};l.xa=function(a){var b=jc(a,this.c);if(0==b||1==b&&this.reverse||-1==b&&!this.reverse)throw new rd(this+" to continuePrimaryKey  from "+this.c+" to "+a+" on "+this.dir+" direction is wrong");Ge(this,this.L,a)};function Ie(a,b){this.a=b}B(Ie,Gd);l=Ie.prototype;l.logger=null;
function Fe(a,b){if(b.W&&!b.keyPath&&0==b.a.length&&a._default_){var c=a._default_;if(-1==c.indexOf(";base64,"))return cd(c);'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substr(1,c.length-2));for(var d=c.split(";base64,"),c=d[0].split(":")[1],d=window.atob(d[1]),e=d.length,f=new Uint8Array(e),g=0;g<e;++g)f[g]=d.charCodeAt(g);return new Blob([f.buffer],{type:c})}c=a._default_?cd(a._default_):{};null!=b.keyPath&&(d=Jc(a[b.keyPath],b.type),null!=d&&Yc(b,c,d));for(d=0;d<b.a.length;d++)if(e=b.index(d),
f=e.f,"_default_"!=f&&!e.h&&!e.multiEntry&&("DATE"==e.type||b.W)&&(g=Jc(a[f],e.type),r(g)))for(var f=c,h=0;h<e.b.length;h++)h==e.b.length-1?f[e.b[h]]=g:A(f[e.b[h]])||(f[e.b[h]]={});return c}
l.K=function(a,b,c,d,e,f){function g(b,d){if(null==e[b])if(n++,n==e.length)L(a,m,p);else{var z=b+2;z<e.length&&g(z,d)}var C;C=r(f)?Zc(h,e[b],f[b]):Zc(h,e[b]);z=k+R(h)+" ("+C.Va.join(", ")+") VALUES ("+C.gb.join(", ")+");";d.executeSql(z,C.values,function(f,z){function O(a,b){var c="ydn.db.me:"+h.getName()+":"+a.getName(),c=k+D(c)+" ("+h.c+", "+a.c+") VALUES (?, ?)",e=[Fc(P,h.type),Fc(b,a.type)];d.executeSql(c,e,function(){},function(){return!1})}n++;var P=r(C.key)?C.key:z.insertId;1>z.rowsAffected&&
(p=!0,P=new yd(P+" no-op"));for(var Q=0,ja=h.a.length;Q<ja;Q++){var fb=h.index(Q);if(fb.multiEntry)for(var ib=Ub(e[b],fb.keyPath),Bb=(ib?ib.length:0)||0,Ra=0;Ra<Bb;Ra++)O(fb,ib[Ra])}c?L(a,P):(m[b]=P,n==e.length?L(a,m,p):(Q=b+2,Q<e.length&&g(Q,f)))},function(d,f){n++;p=!0;6==f.code&&(f.name="ConstraintError");if(c)L(a,f,!0);else if(m[b]=f,n==e.length)L(a,m,p);else{var h=b+2;h<e.length&&g(h,d)}return!1})}b=!b;var h=U(this.a,d),k=b?"INSERT INTO ":"INSERT OR REPLACE INTO ";d=a.a;var m=[],n=0,p=!1;if(0<
e.length)for(b=0;2>b&&b<e.length;b++)g(b,d);else L(a,[])};
l.bb=function(a,b,c){if(0==c.length)L(a,[]);else{for(var d=[],e=0,f=0,g=this,h=function(h,k){for(var m=[],n=Wc(U(g.a,h)),p=n?void 0:[],u=0;u<k.length;u++)m.push(b[k[u]]),n||p.push(c[k[u]].b);n=ec(a);vb(n,function(b){for(var c=0;c<k.length;c++)d[k[c]]=b[c];e++;e==f&&L(a,d)},function(){e++;e==f&&L(a,d,!0)});g.K(n,!1,!1,h,m,p)},k="",m=[],n=[],p=0;p<c.length;p++){var u=c[p].a,v=c[p].b;u!=k?(f++,0<m.length&&h(k,m),m=[p],n=[v],k=u):(m.push(p),n.push(v))}0<m.length&&h(k,m)}};
l.Da=function(a,b,c){var d=a.a,e=U(this.a,b);b=e.c;c=[Fc(c,e.type)];b="SELECT * FROM "+R(e)+" WHERE "+b+" = ?";d.executeSql(b,c,function(b,c){if(0<c.rows.length){var d=c.rows.item(0);null!=d?(d=Fe(d,e),L(a,d)):L(a,void 0)}else L(a,void 0)},function(b,c){L(a,c,!0);return!1})};
l.Xa=function(a,b,c){function d(b,e){var n=h.c,p=[Fc(c[b],h.type)],n="SELECT * FROM "+R(h)+" WHERE "+n+" = ?";e.executeSql(n,p,function(e,m){g++;if(0<m.rows.length){var n=m.rows.item(0);null!=n&&(f[b]=Fe(n,h))}else f[b]=void 0;g==c.length?L(a,f):(n=b+10,n<c.length&&d(n,e))},function(e){g++;if(g==c.length)L(a,f);else{var h=b+10;h<c.length&&d(h,e)}return!1})}var e=a.a,f=[],g=0,h=U(this.a,b);if(0<c.length)for(b=0;10>b&&b<c.length;b++)d(b,e);else L(a,[])};
l.Ya=function(a,b){function c(d,h){var n=b[d],p=U(e.a,n.a),u=uc(n),n=p.c,u=[Fc(u,p.type)],n="SELECT * FROM "+R(p)+" WHERE "+n+" = ?";h.executeSql(n,u,function(e,h){g++;if(0<h.rows.length){var m=h.rows.item(0);null!=m&&(f[d]=Fe(m,p))}else f[d]=void 0;g==b.length?L(a,f):(m=d+10,m<b.length&&c(m,e))},function(b,c){L(a,c,!0);return!1})}var d=a.a,e=this,f=[],g=0;if(0<b.length)for(var h=0;10>h&&h<b.length;h++)c(h,d);else L(a,[])};
l.wa=function(a,b){function c(d,g){function h(a){a="ydn.db.me:"+k.getName()+":"+a.getName();a="DELETE FROM  "+D(a);g.executeSql(a,[])}var k=U(e.a,b[d]),m="DELETE FROM  "+R(k);g.executeSql(m,[],function(e){d==b.length-1?L(a,b.length):c(d+1,e)},function(b,c){L(a,c,!0);return!1});for(var m=0,n=k.a.length;m<n;m++){var p=k.index(m);p.multiEntry&&h(p)}}var d=a.a,e=this;0<b.length?c(0,d):L(a,0)};
l.fb=function(a,b){function c(h){if(h>=b.length)L(a,f,g);else{var k=U(e.a,b[h].a),m=Fc(b[h].b,k.type),n=" WHERE "+k.c+" = ?",p="DELETE FROM "+R(k)+n;d.executeSql(p,[m],function(){f++;c(h)},function(){g=!0;c(h);return!1});h++;for(var p=function(a){a="ydn.db.me:"+k.getName()+":"+a.getName();a="DELETE FROM  "+D(a)+n;d.executeSql(a,[m])},u=0,v=k.a.length;u<v;u++){var z=k.index(u);z.multiEntry&&p(z)}}}var d=a.a,e=this,f=0,g=!1;c(0)};
l.Ga=function(a,b,c){function d(a){a="ydn.db.me:"+f.getName()+":"+a.getName();a="DELETE FROM  "+D(a)+h;e.executeSql(a,[g])}var e=a.a,f=U(this.a,b),g=Fc(c,f.type),h=" WHERE "+f.c+" = ?";b="DELETE FROM "+R(f)+h;e.executeSql(b,[g],function(b,c){L(a,c.rowsAffected)},function(b,c){L(a,c,!0);return!1});b=0;for(c=f.a.length;b<c;b++){var k=f.index(b);k.multiEntry&&d(k)}};l.Ua=function(a,b,c){Je(this,a,b,void 0,c)};l.eb=function(a,b,c){Je(this,a,b,void 0,c)};l.cb=function(a,b,c,d){Je(this,a,b,c,d)};
function Je(a,b,c,d,e){function f(a){a="ydn.db.me:"+h.getName()+":"+a.getName();a="DELETE FROM  "+D(a)+m;g.executeSql(a,k)}var g=b.a,h=U(a.a,c);a="DELETE FROM "+R(h);c=[];var k=[],m="";null!=e&&(r(d)?(d=Rc(h,d),Ec(d.c,d.type,e,k,c)):Ec(h.c,h.type,e,k,c),m=" WHERE "+k.join(" AND "));g.executeSql(a+m,c,function(a,c){L(b,c.rowsAffected)},function(a,c){L(b,c,!0);return!1});e=0;for(d=h.a.length;e<d;e++)a=h.index(e),a.multiEntry&&f(a)}
l.za=function(a,b){function c(f){var g="SELECT COUNT(*) FROM "+D(b[f]);d.executeSql(g,[],function(d,g){var m=g.rows.item(0);e[f]=parseInt(m["COUNT(*)"],10);f++;f==b.length?L(a,e):c(f)},function(b,c){L(a,c,!0);return!1})}var d=a.a,e=[];0==b.length?L(a,0):c(0)};l.ka=function(a,b,c,d,e){var f=[];b=Pc(U(this.a,b),f,6,d,c,!1,e);a.a.executeSql(b,f,function(b,c){var d=c.rows.item(0);L(a,sd(d))},function(b,c){L(a,c,!0);return!1})};
l.R=function(a,b,c,d,e,f,g,h,k,m){var n=[],p=U(this.a,c),u=p.g,v=p.type,z=v,C=null!=d&&d!==u?Rc(p,d):null,W=d||u;C&&(z=C.type);c=[];if(m&&r(m[0])){var ka=m[0];C&&r(m[1])?(d=m[1],e=Tc(p,b,c,C.getName(),e,ka,!0,d,h,k)):e=Sc(p,b,c,d,e,h,k,ka,!0)}else e=Pc(p,c,b,W,e,h,k);y(f)&&(e+=" LIMIT "+f);y(g)&&(e+=" OFFSET "+g);S(c);a.a.executeSql(e,c,function(c,d){for(var e=d.rows.length,f,g=0;g<e;g++)f=d.rows.item(g),2==b?n[g]=Jc(f[u],v):1==b?n[g]=Jc(f[W],z):3==b?n[g]=[Jc(f[W],z),Jc(f[u],v)]:null!=f&&(n[g]=Fe(f,
p));m&&f&&(m[0]=Jc(f[W],z),m[1]=Jc(f[u],v));L(a,n)},function(b,c){L(a,c,!0);return!1})};function Ke(a,b){this.a=b}B(Ke,Ie);Ke.prototype.logger=null;Ke.prototype.b=function(a,b,c,d){b=U(this.a,c);return new De(a,0,b,d)};function Le(a,b){this.b=b;this.f=a;this.a=qe(b)}Le.prototype.logger=null;Le.prototype.toJSON=function(){return{sql:this.b.H}};Le.prototype.toString=function(){return"websql.Node:"};function Me(a,b){if(a.a){if(1==a.a.length){if(A(b))return La(b,a.a[0]);return}for(var c={},d=0;d<a.a.length;d++)c[a.a[d]]=La(b,a.a[d]);return c}return Fe(b,a.f)}
Le.prototype.c=function(a,b,c){var d=this,e=[];b.executeSql(this.b.H,c,function(b,c){for(var h=c.rows.length,k=0;k<h;k++){var m=c.rows.item(k);if(A(m)){var n=Me(d,m);e.push(n)}else e.push(n)}a(e)},function(b,c){a(c,!0);return!0})};function Ne(a,b){Le.call(this,a,b)}B(Ne,Le);Ne.prototype.c=function(a,b,c){b.executeSql(this.b.H,c,function(b,c){var f=c.rows.length;if(1==f)f=sd(c.rows.item(0)),a(f);else if(0==f)a(void 0);else throw new zd;},function(b,c){a(c,!0);return!0})};function Sd(a,b){this.a=b}B(Sd,Ke);Sd.prototype.logger=null;Sd.prototype.executeSql=function(a,b,c){var d=Ea(b.b);if(1==d.length){var e=U(this.a,d[0]);if(!e)throw new Bd(d[0]);var f=qe(b);if(f)for(var g=0;g<f.length;g++)if(!Uc(e,f[g]))throw new Bd('Index "'+f[g]+'" not found in '+d[0]);var h;b.g?h=new Ne(e,b):h=new Le(e,b);h.c(function(b,c){L(a,b,c)},a.a,c)}else throw new od(b.H);};function Oe(a,b,c){Qd.call(this,a,b,c)}B(Oe,le);Oe.prototype.executeSql=function(a,b){for(var c=new oe(a),d=Ea(c.b),e=0;e<d.length;e++){var f=U(this.c,d[e]);if(!f)throw new G("store: "+f+" not exists.");}var g=this.a.request("r",Ea(c.b),c.c);M(g,function(){X(this).executeSql(g,c,b||[])},this);return g};function Pe(a,b,c){Z.call(this,a,b,c)}B(Pe,ne);Pe.prototype.Y=function(a){return new Oe(this,this.c,a)};Pe.prototype.executeSql=function(a,b){return this.b.executeSql(a,b)};function Qe(a,b){this.u=null;this.ea=b||NaN}l=Qe.prototype;
l.connect=function(a,b){function c(a,c){for(var d=0;d<b.stores.length;d++)Re(a,c,b.stores[d]);for(var e=a.objectStoreNames,f=e.length,d=0;d<f;d++)jd(b,e[d])||a.deleteObjectStore(e[d])}function d(a,b){f.c||(r(b)?(e.u=null,f.s(b)):(e.u=a,e.u.onabort=function(){},e.u.onerror=function(){},e.u.onversionchange=function(a){if(e.u&&(e.u.onabort=null,e.u.onblocked=null,e.u.onerror=null,e.u.onversionchange=null,!a.defaultPrevented)){e.u.close();e.u=null;var b=Error();b.name=a.type;e.Ka(b)}},f.callback(parseFloat(g))))}
var e=this,f=new F,g=void 0,h=b.version,k;k=r(h)?J.open(a,h):J.open(a);k.onsuccess=function(f){var h=f.target.result;r(g)||(g=h.version);if(b.oa)e.O(function(e){if(b instanceof ld)for(var f=0;f<e.stores.length;f++)jd(b,e.stores[f].getName())||md(b,e.stores[f].clone());if(0<kd(b,e,!1,!0).length){e=y(h.version)?h.version+1:1;h.close();var g=J.open(a,e);g.onupgradeneeded=function(a){c(a.target.result,g.transaction)};g.onsuccess=function(a){d(a.target.result)};g.onerror=function(){d(null)}}else d(h)},
void 0,h);else if(b.version>h.version){var k=h.setVersion(b.version);k.a=function(a){d(null,a)};k.onsuccess=function(){c(h,k.transaction)}}else e.O(function(a){a=kd(b,a,!1,!0);0<a.length?d(null,new qd("different schema: "+a)):d(h)},void 0,h)};k.onupgradeneeded=function(a){a=a.target.result;g=NaN;c(a,k.transaction)};k.onerror=function(a){d(null,a)};k.onblocked=function(a){d(null,a)};y(this.ea)&&!isNaN(this.ea)&&setTimeout(function(){"done"!=k.readyState&&d(null,new Fd("connection timeout after "+e.ea))},
this.ea);return f};l.ea=18E4;l.Ka=function(){};l.lb=function(){};l.ab=function(){};l.jb=function(){return"indexeddb"};l.ib=function(){return this.u||null};l.Ja=function(){return!!this.u};l.logger=null;l.u=null;l.kb=function(){return this.u?parseFloat(this.u.version):void 0};
l.O=function(a,b,c){c=c||this.u;if(r(b)){if(null===b){if(0==c.objectStoreNames.length){a(new hd(c.version));return}throw new pd;}c=b.db}else{b=[];for(var d=c.objectStoreNames.length-1;0<=d;d--)b[d]=c.objectStoreNames[d];if(0==b.length){a(new hd(c.version));return}b=c.transaction(b,H)}for(var e=c.objectStoreNames,f=[],g=e.length,d=0;d<g;d++){for(var h=b.objectStore(e[d]),k=[],m=0,n=h.indexNames.length;m<n;m++){var p=h.index(h.indexNames[m]);k[m]=new Gc(p.keyPath,void 0,p.unique,p.multiEntry,p.name)}f[d]=
new Nc(h.name,h.keyPath,h.autoIncrement,void 0,k)}b=new hd(c.version,f);a(b)};
function Re(a,b,c){function d(){var b={autoIncrement:!!c.b};null!=c.keyPath&&(b.keyPath=c.keyPath);return a.createObjectStore(c.getName(),b)}Jb("Creating Object Store for "+c.getName()+" keyPath: "+c.keyPath);if(a.objectStoreNames.contains(c.getName())){b=b.objectStore(c.getName());Lc(c.keyPath||"",b.keyPath||"")?(a.deleteObjectStore(c.getName()),Jb("store: "+c.getName()+" deleted due to keyPath change."),b=d()):ca(b.autoIncrement)&&ca(c.b)&&b.autoIncrement!=c.b&&(a.deleteObjectStore(c.getName()),
Jb("store: "+c.getName()+" deleted due to autoIncrement change."),b=d());for(var e=b.indexNames,f=0;f<c.a.length;f++){var g=c.index(f);!e.contains(g.getName())&&g.g&&(b.clear(),Jb("store: "+c.getName()+" cleared since generator index need re-indexing."))}for(var h=0,k=0,m=0,f=0;f<c.a.length;f++){var g=c.index(f),n=!1;if(e.contains(g.getName())){var p=b.index(g.getName()),u=null!=p.unique&&null!=g.unique&&p.unique!=g.unique,v=null!=p.multiEntry&&null!=g.multiEntry&&p.multiEntry!=g.multiEntry,p=null!=
p.keyPath&&null!=g.keyPath&&!!Lc(p.keyPath,g.keyPath);if(u||v||p)b.deleteIndex(g.getName()),n=!0,h--,m++}else"BLOB"!=g.type&&(n=!0);n&&(g.unique||g.multiEntry?(n={unique:g.unique,multiEntry:g.multiEntry},b.createIndex(g.getName(),g.keyPath,n)):b.createIndex(g.getName(),g.keyPath),h++)}for(f=0;f<e.length;f++)Uc(c,e[f])||(b.deleteIndex(e[f]),k++)}else for(b=d(),f=0;f<c.a.length;f++)g=c.index(f),"BLOB"!=g.type&&(Lb("Creating index: "+g+" for "+c.getName()),g.unique||g.multiEntry?(n={unique:g.unique,
multiEntry:g.multiEntry},b.createIndex(g.getName(),g.keyPath,n)):b.createIndex(g.getName(),g.keyPath))}l.Ba=function(a,b,c,d){var e=this.u;if(!b){b=[];for(var f=e.objectStoreNames.length-1;0<=f;f--)b[f]=e.objectStoreNames[f]}0==b.length?a(null):(b=e.transaction(b,c),b.oncomplete=function(a){d("complete",a)},b.onabort=function(a){d("abort",a)},a(b),a=null)};l.close=function(){this.u.close()};
kc.push(function(a,b){if(!J||b&&"indexeddb"!=b)return null;var c=J.deleteDatabase(a),d=new K("vc");c.onblocked=function(a){Rb(d,a)};c.onerror=function(a){d.s(a)};c.onsuccess=function(a){d.callback(a)};return d});function Te(a,b){this.a=r(a)?a:4194304;this.b=b||"websql"}l=Te.prototype;
l.connect=function(a,b){function c(a,b){var c=a.version?parseInt(a.version,10):0,f=!1,g=0;a.changeVersion(a.version,(b.oa?isNaN(c)?1:c+1:b.version)+"",function(c){e.O(function(a){f=!0;for(var d=0;d<b.count();d++){var e=U(a,b.$(d).getName()),e=e?Vc(e,b.$(d)):null;Ue(c,b.$(d),function(a){a&&g++},e)}for(e=0;e<a.count();e++)if(d=a.$(e),!jd(b,d.getName()))if(b instanceof ld)md(b,d);else for(var h=Ve(d),d=0;d<h.length;d++)c.executeSql(h[d],[],function(){},function(a,b){throw b;})},c,a)},function(a){throw a;
},function(){f&&d(a)})}function d(a,b){r(b)?(e.A=null,g.s(b)):(e.A=a,g.callback(parseFloat(f)))}var e=this,f=NaN,g=new F,h=null;try{"sqlite"==this.b?q.sqlitePlugin?(h=q.sqlitePlugin.openDatabase(a,"",a,this.a),h.readTransaction||(h.readTransaction=h.transaction),h.changeVersion=function(a,b,c,d,e){h.transaction(c,d,e)}):(h=null,this.sa=Error("sqlitePlugin not found.")):h=q.openDatabase(a,"",a,this.a)}catch(k){if("SECURITY_ERR"==k.name)h=null,this.sa=new Dd(k);else throw k;}h?(f=h.version||"",null!=
b.version&&b.version==h.version?d(h):this.O(function(a){kd(b,a,!0,!1)?c(h,b):d(h)},null,h)):d(null,this.sa);return g};l.jb=function(){return this.b};l.sa=null;l.A=null;l.ib=function(){return this.A||null};l.logger=null;l.Ka=function(){};l.lb=function(){};function Ve(a){var b=[];b.push("DROP TABLE IF EXISTS "+D(a.getName()));for(var c=0,d=a.a.length;c<d;c++){var e=a.index(c);e.multiEntry&&(e="ydn.db.me:"+a.getName()+":"+e.getName(),e="DROP TABLE IF EXISTS "+D(e),b.push(e))}return b}
function We(a){var b=a.m,c="CREATE TABLE IF NOT EXISTS "+R(a)+" (",d=a.c,c=c+(d+" "+b+" PRIMARY KEY ");a.b&&(c+=" AUTOINCREMENT ");if(!a.W||!a.keyPath&&0==a.a.length)c+=" ,_default_ BLOB";for(var e=[],f=[d],g=0,h=a.a.length;g<h;g++){var k=a.index(g),m="";if(k.multiEntry){var m="ydn.db.me:"+a.getName()+":"+k.getName(),n=k.unique?" UNIQUE ":"",k="CREATE TABLE IF NOT EXISTS "+D(m)+" ("+d+" "+b+", "+k.c+" "+k.i+n+")";e.push(k)}else k.unique&&(m=" UNIQUE "),n=k.c,-1==f.indexOf(n)&&(c+=", "+n+" "+k.i+m,
f.push(n))}e.unshift(c+")");return e}l.kb=function(){return this.A?parseFloat(this.A.version):void 0};
l.O=function(a,b,c){function d(a,b){throw b;}function e(b,c){if(c&&c.rows){for(var d=0;d<c.rows.length;d++){var e=c.rows.item(d);if("__WebKitDatabaseInfoTable__"!=e.name&&"sqlite_sequence"!=e.name&&"table"==e.type){var f=null!==e&&"sql"in e?e.sql:void 0,v=f.substr(f.indexOf("("),f.lastIndexOf(")")).match(/(?:"[^"]*"|[^,])+/g),z=void 0,C,f=[],W=!1,ka=!1,O=0;for(;O<v.length;O++){var P=v[O].match(/\w+|"[^"]+"/g),Q=Aa(P,function(a){return a.toUpperCase()}),ja=qa(P[0],'"'),P=Hc(Q[1]);if(-1!=Q.indexOf("PRIMARY")&&
-1!=Q.indexOf("KEY")){C=P;if(x(ja)&&!/^[\s\xa0]*$/.test(ja)&&"_ROWID_"!=ja){var fb=ja.split(","),z=ja;1<fb.length&&(z=fb,C=void 0)}-1!=Q.indexOf("AUTOINCREMENT")&&(W=!0)}else if("_ROWID_"!=ja)if("_default_"==ja)ka=!0;else{var ib="UNIQUE"==Q[2];0==ja.lastIndexOf(e.tbl_name+"-",0)&&(ja=ja.substr(e.tbl_name.length+1));Q=new Gc(ja,P,ib);f.push(Q)}}if(0==e.name.lastIndexOf("ydn.db.me:",0)){if(z=e.name.split(":"),3<=z.length){var Bb=z[1],Ra=z[2],z=new Gc(Ra,P,ib,!0),v=Da(h,function(a){return a.getName()===
Bb});0<=v?(O=h[v],Q=bd(O,Ra),0<=Q?f[Q]=z:(Q=Da(f,function(a){return a.getName()==Ra}),0<=Q?f[Q]=z:f.push(z)),h[v]=new Nc(O.getName(),O.keyPath,W,C,f,void 0,!ka)):h.push(new Nc(Bb,void 0,!1,void 0,[z]));Lb('multi entry index "'+z.getName()+'" found in '+Bb+(-1==v?"*":""))}}else if(v=Da(h,function(a){return a.getName()===e.name}),0<=v){for(d=0;d<h[v].a.length;d++){var O=h[v].index(d),Se=O.getName();-1==Da(f,function(a){return a.getName()==Se})&&f.push(O)}h[v]=new Nc(e.name,z,W,C,f,void 0,!ka)}else f=
new Nc(e.name,z,W,C,f,void 0,!ka),h.push(f)}}d=new hd(g,h);a(d)}}var f=this,g=(c=c||this.A)&&c.version?parseFloat(c.version):void 0,g=isNaN(g)?void 0:g,h=[];b?b.executeSql("SELECT * FROM sqlite_master",[],e,d):c.readTransaction(function(b){f.O(a,b,c)},function(a){throw a;},e)};
function Ue(a,b,c,d){function e(b){a.executeSql(b,[],function(){f++;f==g.length&&(c(!0),c=null)},function(a,b){f++;f==g.length&&(c(!1),c=null);throw new Cd(b,'"');})}var f=0,g=We(b),h="Create";if(d){var k=$c(b,d);if(0==k.length){Lb("same table "+b.getName()+" exists.");c(!0);c=null;return}h="Modify";Kb("table: "+b.getName()+" has changed by "+k+" ALTER TABLE cannot run in WebSql, dropping old table.");g.unshift.apply(g,Ve(d))}Lb(h+" table: "+b.getName()+": "+g.join(";"));for(b=0;b<g.length;b++)e(g[b])}
l.Ja=function(){return!!this.A};l.close=function(){this.A=null};l.Ba=function(a,b,c,d){function e(a){d("abort",a)}function f(){d("complete",{type:"complete"})}function g(b){a(b)}null===this.A&&(a(null),d("abort",this.sa));c==H?this.A.readTransaction(g,e,f):c==Tb?this.A.changeVersion(this.A.version,this.A.version+1+"",g,e,f):this.A.transaction(g,e,f)};
kc.push(function(a,b){if(da(q.openDatabase)&&(!b||"websql"==b)){var c=new Te,d=new ld,d=c.connect(a,d),e=function(){};d.G(function(){c.Ba(function(a){a.executeSql('SELECT * FROM sqlite_master WHERE type = "table"',[],function(b,c){if(c&&c.rows)for(var d=c.rows.length,e=0,n=0;n<d;n++){var p=c.rows.item(n);"__WebKitDatabaseInfoTable__"!=p.name&&"sqlite_sequence"!=p.name&&(e++,a.executeSql("DROP TABLE "+p.name))}},function(a,b){throw b;})},[],I,e)});d.Ra(function(){})}});Te.prototype.ab=function(){};Yd.prototype.Aa=function(a){return"indexeddb"==a&&J?new Qe(0,this.v):"sqlite"==a&&q.sqlitePlugin?new Te(this.l,"sqlite"):"websql"==a&&da(q.openDatabase)?new Te(this.l):null};Pe.prototype.executeSql=Pe.prototype.executeSql;Oe.prototype.executeSql=Oe.prototype.executeSql;function Xe(a,b,c){Z.call(this,a,b,c)}B(Xe,Pe);ma("ydn.db.Storage",Xe); 

//# sourceMappingURL=ydn.db-is-sql.js.map
return ydn;}, (this || {}));
            
/*

var schema = {
    

stores: [{
    
    name: 'userinfo',    
 autoIncrement: true,

    
},
    
{
 name: 'user',    // required. object store name or TABLE name

    autoIncrement: true, // if true, key will be automatically created

    
},

{
    
    name : 'setting'    // required. object store name or TABLE name
    // if true, key will be automatically created
 
 

    
}]


};




*/

 









function getTextBoxData(windowId){
    
 var userData = [];
 
 var getTextBoxObj = {}; 
 
 var items = 0;   
  

   
            getTextBoxObj = document.getElementsByName(windowId);
      
            
    for( items = 0 ; items < getTextBoxObj.length ; items++ ){
        

    
        
        userData[items] = getTextBoxObj[items].value;
        
       
    }
 
  console.log(userData +""+items)
    
   

  return userData;
  
}


function register(object){
    
    
      var choice = "";
  
    
    
    choice = object.id;

  switch (choice) {
      
      case 'login':
        
             
              var userData = [];
              
             userData = getTextBoxData("loginformdiv");
           
            
            if(isTextBoxEmpty(userData,"loginformdiv")){
                
                
                    loginUser("loginformdiv");
                
                
                  setTimeout(clearTextBoxInput('loginformdiv'),100); 
                
            }
            else{
                
                console.log("Here");
                setTimeout(function (){ promptAboutEmpty("loginformdiv")},100); 
                
            }
            


          break;
          
         case 'signup':
            
        $(function() {
  $( "#userdate" ).datepicker({ dateFormat: 'dd-mm-yy' });


});             
clearInput('InputName');
                        
                         
                        
          break;
      
      
      
      default:
      
         break;
  }
    
    
    
    
}





function isTextBoxEmpty(userEnteredData,textBoxID){
    
    
    
    var items = 0, textboxObject = "",count = 0, flag = false ;
    
    var getTextBoxObj = {};
    
    getTextBoxObj = document.getElementsByName(textBoxID);
  
    for(items = 0 ; items < userEnteredData.length ; items++){
        
        
        
        
        if(userEnteredData[items] == "" ) {
                
           
                count = count + 1; 
                
                 getTextBoxObj[items].style.borderColor = "red";
                 getTextBoxObj[items].style.color= "red";
                 getTextBoxObj[items].value = "Cannot Be Empty";
              
                 getTextBoxObj[items].focus();
               
               
               
    
  
    
        }

        
        
    }
    
    console.log(count)
    
 if(count > 0) {
     
     
     return false;
     
 }   
else{
    
    
    return true ;
    
}    
    
    
    
    
    
}



function promptAboutInvalidData(textboxID,message,pos){
    
 
     
    var getTextBoxObj = {};
    
    getTextBoxObj = document.getElementById(textboxID);
    
       getTextBoxObj.setCustomValidity(message);
                    getTextBoxObj.style.borderColor = "red";
                    
                    getTextBoxObj.style.color = "black";
                   
                   getTextBoxObj.title =  message;
                   
       getTextBoxObj.onchange = function(){
                  $( function() {
                      
      $( document ).tooltip({
      
       
        
      position: {
          
        
              my: "left top",
        at: "right+5 top-5",
        collision: "none",
        color : 'red', 
        using: function( position, feedback ) {
          $( this ).css( position );
          $( this ).tooltip( "open" );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  } );
       }    
       
     
    
    
    
    
}


function promptAboutValidData(textboxID,message,pos){
    
    
     
    var getTextBoxObj = {};
    
    getTextBoxObj = document.getElementById(textboxID);
    
                    getTextBoxObj.style.borderColor = "lightblue";
                      getTextBoxObj.setCustomValidity("");
                    
                    getTextBoxObj.style.color = "black";
                    // getTextBoxObj.value = message ;
            
     
    
               
     
}






function promptAboutEmpty(textboxID){
    
    console.log("here in empty");
     var items = 0, textboxObject = "",count = 0, flag = false ;
    var count = 0; 
    var getTextBoxObj = {};
    
    getTextBoxObj = document.getElementsByName(textboxID);
    
    
    for(items = 0 ; items < getTextBoxObj.length ; items++){
        
        
        
        
        if(getTextBoxObj[items].value === "Cannot Be Empty" ){
                
                
                if(count >= items){
                    getTextBoxObj[items].focus();
                    
                }
                    
                    getTextBoxObj[items].style.borderColor = "red";
                    
                    getTextBoxObj[items].style.color = "black";
                    getTextBoxObj[items].value = "";
            
        }
        else{
            
                    getTextBoxObj[items].style.borderColor = "lightblue";
                    
                    getTextBoxObj[items].style.color = "black";
                   
        }

        
        
    }
    
    
    
    
}

function clearTextBoxInput(textID){
    
    
     var items = 0, textboxObject = "",count = 0, flag = false ;
    
    var getTextBoxObj = {};
    
    getTextBoxObj = document.getElementsByName(textID);
    
    
    for(items = 0 ; items <getTextBoxObj.length ; items++){
        
        
        
        
        if(getTextBoxObj[items].value){
                
                    getTextBoxObj[items].focus();
                    getTextBoxObj[items].style.borderColor = "";
                    getTextBoxObj[items].style.color = "black";
                    getTextBoxObj[items].value = "";
                      
                  
                      
        }

        
    }
    
    
    
    
}

function clearInput(textID){
    
    
     var items = 0, textboxObject = "",count = 0, flag = false ;
    
    var getTextBoxObj = {};
    
    getTextBoxObj = document.getElementsByName(textID);
    
    
    for(items = 0 ; items <getTextBoxObj.length ; items++){
        
        
        
        
        if(getTextBoxObj[items].value){
                
                  
                   
                    getTextBoxObj[items].value = "";
                     
                  
                      
        }

        
    }
    
    
    
    
}





function signUp(){
    
    
    
    var createDiv = "";
    var regPopupWindow;
    var formTitle;
    var titleName = "Sign In";
    var userTextBoxId = [];
  
    var items = 0;
    var textBoxImage = [];
    var registerButton = {};
    var closeButton = {};
   
    var userDataObject = {};
    var  checkBoxLabel = [];
    var title = "Sign-up";
    var getEncryptedKey = '';
    var userData = [];
   // clearTextBoxInput('regform');
    
    userTextBoxId  = ['Name','UserID','Mobile','Email','Date'];
    textBoxImage = ['images/name.png','images/name.png','images/phone.png','images/email.png','images/calendar.png','images/password.png'];

   
      
          var userData = [];
        
         
        /// if(isTextBoxEmpty('InputName')){
        try{
            
        
         userData = getTextBoxData('InputName');
        console.log( userData );
          if(validateTextboxInput(userData,'InputName') ){
         
         if(validateConfirmPassword(userData[5],userData[6])){
         
                getUserEnteredPassword(userData[5]);
        // console.log(getUserEnteredPassword(userData[5]));
         
                getEncryptedKey = getSessionKey();
                
              var key = generateHashKey(userData[1]+userData[5]);
              
              
                 userDataObject = getUserDataInObject(userTextBoxId,userData,getEncryptedKey);
      
                userDataObject["key"] = key;
               
                 storedUserRecords(userDataObject);

             
                  // regPopupWindow.style.display = "none";
              
                
                 $("#userdate").datepicker("disable");
                $('#myModal').modal('hide');
                
                 
         }
         
        
          }
          else{
         
               //setTimeout(function (){ promptAboutEmpty("loginformdiv")},500); 
               
              
          }
        }
        catch(e)
        {
            
            console.log( e.message);
            
        }
          
          
       //  }
      //   else{
             
              //setTimeout(function (){ promptAboutEmpty("loginformdiv")},500); 
             // $(".regform").reload("login.html");
       //  }
         
         
      
 // }
  
   //closeButton.onclick = function(){
     
   //regPopupWindow.style.display = "none";
      
     // $(".regform").load(location.href + ".regform");
      
//  }
    
 // createDiv.appendChild( registerButton);
 //createDiv.appendChild( closeButton)
  

   //regPopupWindow.appendChild(createDiv);
    
    
   //regPopupWindow.style.display="block";
    
    
    
    
}

function createButton(buttonObj,buttonId){
    

    
    
   buttonObj = document.createElement('input');
   buttonObj.type = "button";
   buttonObj.id = buttonId;


  return buttonObj;
    
}




function createImageButton(windowObject,imageIcon){
     
      
     var imageTextbox= new Image();
       imageTextbox.src = imageIcon;
            
   
    imageTextbox.type = "text";

    imageTextbox.style.width ="30px";
    imageTextbox.style.height = "20px";
    imageTextbox.style.marginLeft = "85px";

     imageTextbox.style.display = 'inline-block'; 
 
    windowObject.appendChild(imageTextbox);
    
    return windowObject;
    
    
}



function createTextBox(windowObject,textId,placeHolder){
    
    var textBox = "";
  


textBox = document.createElement('input');


if(placeHolder == 'Password' ){
    
    
  textBox.setAttribute('type', 'password');
    
    
}
else{
    
       textBox.setAttribute('type', 'text');
}


textBox.title = "Enter Your " + placeHolder;
textBox.name = textId;
textBox.class = textId;
textBox.id  = placeHolder;

textBox.style.width  = "200px";
textBox.style.height  = "30px";
textBox.style.marginTop  = "10px";

textBox.placeholder = "Enter Your "+ placeHolder + " Here"; 

textBox.onclick = function(){




            $( function() {
       $( document ).tooltip({
      
      position: {
        
        my: "left center",
        at: "right+20 center",
        collision: "none",
        using: function( position, feedback ) {
          $( this ).css( position );
          
          $( "<div>" )
          
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  } );
   $(textBox.id).tooltip('toggle');
       
    if(textBox.id == 'Date'){
        

           $(' #Date').datepicker( {
               
              changeMonth: true,
                changeYear: true,
               dateFormat: 'dd/mm/yy',
               yearRange: '1950:2016',
                  onSelect: function(date) {
                      
                      
                      
           
               }
        
        
    
    
    
}).focus();




    
          
         
         
    
    
}

}
windowObject.appendChild(textBox);
    
    return windowObject;
    
}

function setWindowSize(windowObject,widthSize,heightSize){
    
    windowObject.style.width = widthSize ;
    windowObject.style.height = heightSize ;
    
    return windowObject;
    
}


function storedUserRecords(userDataObject){
  
  var db = getUserInfoDatabaseObject();
  
  //db = getDatabaseObject();
  //db =  getUserInfoDatabaseObject(sessionStorage.getItem('databaseName'));
    
    try {
    db.put('userinfo',userDataObject).done(function(){
        
       alert("Record Entered ");
    });
    }
    catch(e){
        console.log( e.message +""+e.name);
        
    }
    
}

function getUserDataInObject(userDataKey,userDataValue,encryptionKey){
    
    var items =0;
    var dataObject = {};
    
    
    for(items = 0; items < userDataKey.length ; items++ ){
        
        
        if(validateTexboxId(userDataKey[items])){
        
        
            dataObject[userDataKey[items]] =   encryptData(userDataValue[items],encryptionKey) ;
       
       
        }
        
    }
    
    return dataObject;
}




function validateTexboxId(textboxId){
    
    
    if(textboxId == 'Password'){
        
        
        return false;
    }

    
    return true;
}





function createLabel(windowObject,labelName,mLeft,mTop,fsize){
    var label    = [];
    
    
    
   
    label = document.createElement('label');
    label.for = labelName;
    label.innerHTML = labelName; 
    label.style.display = 'block';
    label.style.fontSize = fsize;
    label.style.marginTop = mTop;
    label.style.marginLeft = mLeft;
 
         windowObject.appendChild(label);
  
  
    return  windowObject;
    
    
}











function generateEncryptedKey(userEnteredKey ){
    
   var count = 0;
   var items = 0;
   var  keySize = 16;
   
   
     console.log(userEnteredKey);
   var userKeyLength = userEnteredKey.length;
   var newUserKey = [];
   console.log(userEnteredKey)
    
    for(items = 0;items < keySize; items++) {
        
             if(count !== userKeyLength) {
                  
                  
                   newUserKey[items] =  userEnteredKey[count++];
                 
                 
                 
             }
        else {
               count = 0;
                newUserKey[items] =  userEnteredKey[count];
                
                
            }        
        
        
    }
    
      console.log( "n "+newUserKey);
    
                newUserKey =  newUserKey.join('');
       
             newUserKey =  generateHashKey(newUserKey);
          
                newUserKey = newUserKey.toString();
          
            console.log( "name password "+newUserKey)
     
                 return  newUserKey;   

    


}

   







function getUserEnteredPassword(textId){
    
    
    var getPassword = '';
    
 
   getPassword =   textId;
  
  console.log( getPassword )
  setSessionKey(getKeyName(),getPassword);
   
    
    
    
}



function setSessionKey(keyName,keyValue){
    
    
     sessionStorage.setItem(keyName,keyValue);
    
}



function getKeyName(){
    
    
    return "userKey";
    
}

function getSessionKey(){
    
    
    var  keyName = "";
    
    keyName = getKeyName();
   
    
   return sessionStorage.getItem(keyName);
    
    
    
    
}




 
 

 
 
 
 function validateTextboxInput(userData,textboxID){
     
     
     
     
     var items = 0;
   var count = 0;
     
    var validInput = [];  
     

    // console.log("DAta"+userData);

     

     
     for(items = 0 ; items < userData.length ; items++){
      
         
         switch(items){
             
             
             
             case 0 :
                 
                    if(userData[items]){
                   
                 
                    if(validateString(userData[items])){
                        validInput[items] = true;
                        promptAboutValidData("fullname",userData[items],items);
                        
                    }
                    else{
                        
                          validInput[items] = false;
                         
                        promptAboutInvalidData("fullname"," Only String Accepted With Space ",items);
                       
                       
                    }
                }
                else{
                    
                     validInput[items] = false;
                         
                        promptAboutInvalidData("fullname","Cannot Be Empty",items);
                       
                    
                    
                }    
                   
                    
                    
                    
                            
                 break;
                 
                case 1 :
                    
                   
                 
                 if(userData[items]){
                 
                    if(validateUserId(userData[items])){
                        
                          validInput[items] = true;
                          
                       promptAboutValidData("userid",userData[items],items);
                        
                    }
                    else{
                        
                          validInput[items] = false;
                       
                         promptAboutInvalidData("userid","Must be string or alpha-numeric ",items);
                        
                    }
                 }
                 else{
                     
                       validInput[items] = false;
                       
                         promptAboutInvalidData("userid","Cannot Be Empty",items);
                        
                     
                     
                     
                 }
                    
                   // console.log(validateUserId(userData[items]));
                            
                 break;
                 
                 
                 
                 
                 
                 
                  case 2 :
                 
                  
                 //   console.log(validateMobileNumber(userData[items]))
                    
                    
                    if(userData[items]){
                   
                    if(validateMobileNumber(userData[items])){
                        
                         validInput[items] = true;
                      promptAboutValidData("mobileno",userData[items],items)
                        
                    }
                    else{
                        
                         validInput[items] = false;
                         promptAboutInvalidData("mobileno","Only Number Accepted Up To 10 Digit",items);
                        
                       
                        
                    } 
                   }
                    
                  else{
                        
                         validInput[items] = false;
                         promptAboutInvalidData("mobileno","Cannot Be Empty",items);
                        
                       
                        
                    }  
                            
                 break;
                    
                 
                    case 3 :
                 
                    if(userData[items]){
                  
                    if(validateEmail(userData[items])){
                        
                        validInput[items] = true;
                        promptAboutValidData("email",userData[items],items)
                        
                    }
                    else{
                        
                        validInput[items] = false;
                        
                         promptAboutInvalidData("email","Enter Valid Email Address ",items);
                    }
                    }
                    else{
                        
                        
                         validInput[items] = false;
                        
                         promptAboutInvalidData("email","Cannot Be Empty",items);
                    }
                    
                    
                    
                 break;
                 
                 
                  case 4:
                 
                 
                  
                    if(userData[items]){
                          validInput[items] = true;
                       promptAboutValidData("userdate",userData[items],items);
                        
                    }
                    else{
                        
                          validInput[items] = false;
                       
                         promptAboutInvalidData("userdate","Cannot Be Empty",items);
                        
                    }
                    
                  
                            
                 break;
                 
                 
                 
                 
                 case 5 :
                   
                // console.log("case"+validatePassword(userData[items]))
                 
                 if(userData[items]){
                 
                    if(validatePassword(userData[items])){
                        
                          validInput[items] = true;
                       promptAboutValidData("password",userData[items],items);
                        
                    }
                    else{
                        
                          validInput[items] = false;
                       
                         promptAboutInvalidData("password","Must Be At Least 8 with 1 UpperCase,1 Digit and character",items);
                        
                    }
                 }
                 else{
                     
                       validInput[items] = false;
                       
                         promptAboutInvalidData("password","Cannot Be Empty",items);
                        
                     
                     
                     
                 }
                    
                   // console.log(validatePassword(userData[items]));
                            
                 break;
                 
        case 6:
             if(userData[items]){
                 
                    if(validatePassword(userData[items])){
                        
                          validInput[items] = true;
                       promptAboutValidData("confirm",userData[items],items);
                        
                    }
                    else{
                        
                          validInput[items] = false;
                       
                         promptAboutInvalidData("confirm","Must Be At Least 8 with 1 UpperCase,1 Digit and character",items);
                        
                    }
                 }
                 else{
                     
                       validInput[items] = false;
                       
                         promptAboutInvalidData("confirm","Cannot Be Empty",items);
                        
                     
                     
                     
                 }
                    
            
            
            
            
            break;
                 
                 
             default :
             
             break; 
             
         }
         
         
         
     }
     
     
     for(items = 0; items < validInput.length; items++){
         
         
         if(!validInput[items]){
             
             count = count + 1;
             
         }
         
     }
     
  
     if(count){
         
          
          
         return false;
         
     }
    else{
        
        
        return true;
        
    }
     
     
     
     
 }
 

function validateString(userEnteredName) {
    
    
    
      var namepattern= /^([a-zA-Z]*((\s)))+[a-zA-Z]*/;




    if(namepattern.test(userEnteredName))
    {
                
                 
                return true;
    }
    else{   
    
            
                
                return false;
    }
    

}

function validateEmail( userEnteredEmail ) {
    
    var emailpattern = /\S+@\S+\.\S+/;
  
  
  
    if(isFiledEmpty(userEnteredEmail) && emailpattern.test(userEnteredEmail)){
        
        return true;
        
        
    }
    else{
        
        return false;
    }
 
    
    
}


function validateMobileNumber(userEnterednumber){
    
    
    var numberpattern = /^[978]{1}[0-9]{9}$/;
    
  //  console.log( "asdasd" +numberpattern.test(userEnterednumber));
    
        if(isFiledEmpty(userEnterednumber) && numberpattern.test(userEnterednumber))
        {
        
     
              return true;
        
        
         }
         else
          {
        
              return false;
         }
   

}




function validatePassword(password){
    

var passPassword=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?!.*\s).{8,}/;


    
if(passPassword.test(password) && isFiledEmpty(password) ){
    
    
    
    return true
  
    
}

else{
    
    
    return false;
    
    
    
}


    
}




function getDatabaseObject(){
    
    var db = {};
    db_name = 'bDb';
    
   db = new ydn.db.Storage(db_name, schema);
    
    return db;
    
}

function loginUser(textboxID){
    
    
var userData = [] ;
var key ="";
var db = {};
var numberOfRecords = 0;

var items = 0 ;

var userName = "";

var userPassword = "";

var count = 0;

var decryptedName = "";

var name = "";


db = getUserInfoDatabaseObject();


//console.log("");

userData = getTextBoxData(textboxID);

userName = userData[0];
userPassword = userData[1];



try {
 


db.executeSql('Select * from userinfo').then(function(records){
    
    key = generateHashKey(userName + userPassword);
   console.log(key);
   //userPassword = generateHashKey(userPassword);
   
 
  
  for(items = 0 ; items < records.length ; items++){
      
      
   name = records[items].key;
 
     console.log(name);
      
      
      if(name.length){
      
     //console.log(validateCredential(userName,name));
      
          if(validateCredential(key,name)){
              
      
              count = count + 1; 
              
                setTimeout(addLoader(),100); 
                
               setSessionKey(getKeyName(), userPassword);
               
                 setSessionKey("databaseName",getRandowmName(userName));
                setSessionKey("userinfo",generateHashKey(userName));
            
              
               
             window.location.href = "../sampledb/entc.html";
              break;
              
              
          }  
          
      }
      
      
      
      
  }
  
 console.log(count)
  if(count == 0){
      
      
      alert('User Name or Password Invalid');
  }
  
  
    
});


}

catch(err) {
    
   alert(err.message);
}  
    
    
    
    
    
    
}


function validateCredential(userRecordName,userName){
    
 
   
    if(userName === userRecordName){
        
        
        return true;
        
    }
    else{
        
        return false;
    }
    
    
    
    
    
    
    
    
    
}









function isFiledEmpty( filedData ) {
    
    if(filedData ===""){
        
        return false;
    }
    else{
    
         return true;

    }
}


function getRandowmName(userName){
    
    
    
     var count = 0;
   var items = 0;
   var  keySize = 8;
   var userKeyLength = userName.length;
   var newUserKey = [];
   
    
    for(items = 0;items < keySize; items++) {
        
             if(count !== userKeyLength) {
                  
                  
                   newUserKey[items] =  userName[count++];
                 
                 
                 
             }
        else {
               count = 0;
                newUserKey[items] =  userName[count];
                
                
            }        
        
        
    }
    
     // console.log( "n "+newUserKey);
    
                newUserKey =  newUserKey.join('');
       
             newUserKey =  generateHashKey( newUserKey)
          
                newUserKey = newUserKey.toString();
          
           // console.log( "name password "+newUserKey)
     
                 return  newUserKey;   

    
    
    
    
    
    
    
    
    
    
    
    
}




function validateUserId(password){
    

var passPassword=/^[a-zA-Z0-9]+(?:[a-zA-Z0-9]+)*$/;


    
if(passPassword.test(password) && isFiledEmpty(password)  ){
    
    
    
    return true
  
    
}

else{
    
    
    return false;
    
    
    
}


    
}



function addLoader(){
    
    
        var loaderDiv  =  document.getElementById("registerform");
    
        var loadingDiv = document.createElement('label');
        loadingDiv.id = "sample";
        loadingDiv.value = "Loading Please Wait..." ;
         loadingDiv.style.fontSize = "20px" ;
          loadingDiv.style.color = "white" ;
         loadingDiv.style.display ="block";
         
         
          loaderDiv.style.display ="block";
        loaderDiv.appendChild(loadingDiv);
  
    
    
    
    
    
    
    
    
}

function getClear(){
    
   clearTextBoxInput('InputName');
      
  $('#myModal').modal('hide');
  
    
}






function validateConfirmPassword(Password,confirmPassword){
    
    if(Password != confirmPassword){
         document.getElementById('confirm').setCustomValidity("Passwords Don't Match");
     return false;   
        
    }
    else{
        
        
        return true;
    }
    
    
    
    
}




  
 

 
