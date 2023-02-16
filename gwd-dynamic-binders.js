(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var p=this||self;function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=aa:r=ba;return r.apply(null,arguments)}
function u(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}function ca(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.M=function(d,e,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}}function da(a){return a};function ea(){return null}function fa(a){return a};function v(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}ca(v,Error);v.prototype.name="CustomError";function w(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");v.call(this,c+a[d])}ca(w,v);w.prototype.name="AssertionError";var ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ia=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ja=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,
b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d};function ka(a){return Array.prototype.concat.apply([],arguments)}function la(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function ma(a,b){return ka.apply([],ja(a,b))};var x=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function y(){var a=p.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return-1!=y().indexOf(a)};var na=z("Opera"),A=z("Trident")||z("MSIE"),oa=z("Edge"),pa=z("Gecko")&&!(-1!=y().toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),qa=-1!=y().toLowerCase().indexOf("webkit")&&!z("Edge");function ra(){var a=p.document;return a?a.documentMode:void 0}var ua;
a:{var va="",wa=function(){var a=y();if(pa)return/rv:([^\);]+)(\)|;)/.exec(a);if(oa)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(qa)return/WebKit\/(\S+)/.exec(a);if(na)return/(?:Version)[ \/]?(\S+)/.exec(a)}();wa&&(va=wa?wa[1]:"");if(A){var xa=ra();if(null!=xa&&xa>parseFloat(va)){ua=String(xa);break a}}ua=va}var ya=ua,za;if(p.document&&A){var Aa=ra();za=Aa?Aa:parseInt(ya,10)||void 0}else za=void 0;var Ba=za;function Ca(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function B(a){var b={},c;for(c in a)b[c]=a[c];return b};var C;function D(a,b){this.g=a===Da&&b||"";this.j=Ea}D.prototype.i=!0;D.prototype.h=function(){return this.g};var Ea={},Da={};function E(a,b){this.g=b===G?a:""}E.prototype.toString=function(){return this.g.toString()};E.prototype.i=!0;E.prototype.h=function(){return this.g.toString()};function H(a){return a instanceof E&&a.constructor===E?a.g:"type_error:SafeUrl"}var Fa=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ga=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Ha(a){a instanceof E||(a="object"==typeof a&&a.i?a.h():String(a),Ga.test(a)?a=new E(a,G):(a=String(a).replace(/(%0A|%0D)/g,""),a=a.match(Fa)?new E(a,G):null));return a||Ia}var G={},Ia=new E("about:invalid#zClosurez",G);var I={};function J(a,b){this.g=b===I?a:"";this.i=!0}J.prototype.h=function(){return this.g};J.prototype.toString=function(){return this.g.toString()};function Ja(a){return a instanceof J&&a.constructor===J?a.g:"type_error:SafeStyle"}var Ka=new J("",I);
function La(a){if(a instanceof E)return'url("'+H(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof D)a=a instanceof D&&a.constructor===D&&a.j===Ea?a.g:"type_error:Const";else{a=String(a);var b=a.replace(Ma,"$1").replace(Ma,"$1").replace(Na,"url");if(Oa.test(b)){if(b=!Pa.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&Qa(a)}a=b?Ra(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new w("Value does not allow [{;}], got: %s.",
[a]);return a}function Qa(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Oa=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),Na=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Ma=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),Pa=/\/\*/;
function Ra(a){return a.replace(Na,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,k,g){f=k;return g});b=Ha(d).h();return c+f+b+f+e})};var K={};function L(a,b){this.g=b===K?a:"";this.i=!0}L.prototype.toString=function(){return this.g.toString()};function Sa(a){function b(d){Array.isArray(d)?d.forEach(b):c+=Ta(d)}var c="";Array.prototype.forEach.call(arguments,b);return new L(c,K)}L.prototype.h=function(){return this.g};function Ta(a){return a instanceof L&&a.constructor===L?a.g:"type_error:SafeStyleSheet"}var Ua=new L("",K);var Va={};function M(a,b){this.g=b===Va?a:"";this.i=!0}M.prototype.h=function(){return this.g.toString()};M.prototype.toString=function(){return this.g.toString()};function N(a){return a instanceof M&&a.constructor===M?a.g:"type_error:SafeHtml"}
function Wa(a){if(void 0===C){var b=null;var c=p.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:da,createScript:da,createScriptURL:da})}catch(d){p.console&&p.console.error(d.message)}C=b}else C=b}a=(b=C)?b.createHTML(a):a;return new M(a,Va)}var Ya=new M(p.trustedTypes&&p.trustedTypes.emptyHTML||"",Va);var Za=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=N(Ya);return!b.parentElement});function $a(a,b){if(Za())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=N(b)};function O(){var a=document;var b="SPAN";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function ab(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};var bb={"* ARIA-CHECKED":!0,"* ARIA-COLCOUNT":!0,"* ARIA-COLINDEX":!0,"* ARIA-CONTROLS":!0,"* ARIA-DESCRIBEDBY":!0,"* ARIA-DISABLED":!0,"* ARIA-EXPANDED":!0,"* ARIA-GOOG-EDITABLE":!0,"* ARIA-HASPOPUP":!0,"* ARIA-HIDDEN":!0,"* ARIA-LABEL":!0,"* ARIA-LABELLEDBY":!0,"* ARIA-MULTILINE":!0,"* ARIA-MULTISELECTABLE":!0,"* ARIA-ORIENTATION":!0,"* ARIA-PLACEHOLDER":!0,"* ARIA-READONLY":!0,"* ARIA-REQUIRED":!0,"* ARIA-ROLEDESCRIPTION":!0,"* ARIA-ROWCOUNT":!0,"* ARIA-ROWINDEX":!0,"* ARIA-SELECTED":!0,"* ABBR":!0,
"* ACCEPT":!0,"* ACCESSKEY":!0,"* ALIGN":!0,"* ALT":!0,"* AUTOCOMPLETE":!0,"* AXIS":!0,"* BGCOLOR":!0,"* BORDER":!0,"* CELLPADDING":!0,"* CELLSPACING":!0,"* CHAROFF":!0,"* CHAR":!0,"* CHECKED":!0,"* CLEAR":!0,"* COLOR":!0,"* COLSPAN":!0,"* COLS":!0,"* COMPACT":!0,"* COORDS":!0,"* DATETIME":!0,"* DIR":!0,"* DISABLED":!0,"* ENCTYPE":!0,"* FACE":!0,"* FRAME":!0,"* HEIGHT":!0,"* HREFLANG":!0,"* HSPACE":!0,"* ISMAP":!0,"* LABEL":!0,"* LANG":!0,"* MAX":!0,"* MAXLENGTH":!0,"* METHOD":!0,"* MULTIPLE":!0,
"* NOHREF":!0,"* NOSHADE":!0,"* NOWRAP":!0,"* OPEN":!0,"* READONLY":!0,"* REQUIRED":!0,"* REL":!0,"* REV":!0,"* ROLE":!0,"* ROWSPAN":!0,"* ROWS":!0,"* RULES":!0,"* SCOPE":!0,"* SELECTED":!0,"* SHAPE":!0,"* SIZE":!0,"* SPAN":!0,"* START":!0,"* SUMMARY":!0,"* TABINDEX":!0,"* TITLE":!0,"* TYPE":!0,"* VALIGN":!0,"* VALUE":!0,"* VSPACE":!0,"* WIDTH":!0},cb={"* USEMAP":!0,"* ACTION":!0,"* CITE":!0,"* HREF":!0,"* LONGDESC":!0,"* SRC":!0,"LINK HREF":!0,"* FOR":!0,"* HEADERS":!0,"* NAME":!0,"A TARGET":!0,
"* CLASS":!0,"* ID":!0,"* STYLE":!0};var P={};
function db(a){var b=P.hasOwnProperty(a)?P[a]:null;if(b)return b;65536<Object.keys(P).length&&(P={});var c=[0,0,0,0],d=RegExp("\\\\[0-9A-Fa-f]{1,5}\\s","g");b=eb(a,RegExp("\\\\[0-9A-Fa-f]{6}\\s?","g"));b=eb(b,d);b=eb(b,/\\./g);b=b.replace(RegExp(":not\\(([^\\)]*)\\)","g"),"     $1 ");b=b.replace(RegExp("{[^]*","gm"),"");b=Q(b,c,RegExp("(\\[[^\\]]+\\])","g"),2);b=Q(b,c,RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)","g"),1);b=Q(b,c,RegExp("(\\.[^\\s\\+>~\\.\\[:]+)","g"),2);b=Q(b,c,/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,3);
b=Q(b,c,/(:[\w-]+\([^\)]*\))/gi,2);b=Q(b,c,/(:[^\s\+>~\.\[:]+)/g,2);b=b.replace(/[\*\s\+>~]/g," ");b=b.replace(/[#\.]/g," ");Q(b,c,/([^\s\+>~\.\[:]+)/g,3);b=c;return P[a]=b}function Q(a,b,c,d){return a.replace(c,function(e){b[d]+=1;return Array(e.length+1).join(" ")})}function eb(a,b){return a.replace(b,function(c){return Array(c.length+1).join("A")})};var fb={rgb:!0,rgba:!0,alpha:!0,rect:!0,image:!0,"linear-gradient":!0,"radial-gradient":!0,"repeating-linear-gradient":!0,"repeating-radial-gradient":!0,"cubic-bezier":!0,matrix:!0,perspective:!0,rotate:!0,rotate3d:!0,rotatex:!0,rotatey:!0,steps:!0,rotatez:!0,scale:!0,scale3d:!0,scalex:!0,scaley:!0,scalez:!0,skew:!0,skewx:!0,skewy:!0,translate:!0,translate3d:!0,translatex:!0,translatey:!0,translatez:!0},gb=/[\n\f\r"'()*<>]/g,hb={"\n":"%0a","\f":"%0c","\r":"%0d",'"':"%22","'":"%27","(":"%28",")":"%29",
"*":"%2a","<":"%3c",">":"%3e"};function ib(a){return hb[a]}
function jb(a,b,c){b=x(b);if(""==b)return null;var d=String(b.slice(0,4)).toLowerCase();if(0==("url("<d?-1:"url("==d?0:1)){if(!b.endsWith(")")||1<(b?b.split("(").length-1:0)||1<(b?b.split(")").length-1:0)||!c)a=null;else{a:for(b=b.substring(4,b.length-1),d=0;2>d;d++){var e="\"'".charAt(d);if(b.charAt(0)==e&&b.charAt(b.length-1)==e){b=b.substring(1,b.length-1);break a}}a=c?(a=c(b,a))&&"about:invalid#zClosurez"!=H(a)?'url("'+H(a).replace(gb,ib)+'")':null:null}return a}if(0<b.indexOf("(")){if(/"|'/.test(b))return null;
for(a=/([\-\w]+)\(/g;c=a.exec(b);)if(!(c[1].toLowerCase()in fb))return null}return b};function T(a,b){a=p[a];return a&&a.prototype?(b=Object.getOwnPropertyDescriptor(a.prototype,b))&&b.get||null:null}function U(a,b){return(a=p[a])&&a.prototype&&a.prototype[b]||null}var kb=T("Element","attributes")||T("Node","attributes"),lb=U("Element","hasAttribute"),mb=U("Element","getAttribute"),nb=U("Element","setAttribute"),ob=U("Element","removeAttribute");T("Element","innerHTML")||T("HTMLElement","innerHTML");
var pb=U("Element","getElementsByTagName"),qb=U("Element","matches")||U("Element","msMatchesSelector"),rb=T("Node","nodeName"),sb=T("Node","nodeType"),tb=T("Node","parentNode");T("Node","childNodes");var ub=T("HTMLElement","style")||T("Element","style"),vb=T("HTMLStyleElement","sheet"),wb=U("CSSStyleDeclaration","getPropertyValue"),xb=U("CSSStyleDeclaration","setProperty"),yb=T("Element","namespaceURI")||T("Node","namespaceURI");
function V(a,b,c,d){if(a)return a.apply(b);a=b[c];if(!d(a))throw Error("Clobbering detected");return a}function W(a,b,c,d){if(a)return a.apply(b,d);if(A&&10>document.documentMode){if(!b[c].call)throw Error("IE Clobbering detected");}else if("function"!=typeof b[c])throw Error("Clobbering detected");return b[c].apply(b,d)}function zb(a){return V(kb,a,"attributes",function(b){return b instanceof NamedNodeMap})}
function Ab(a,b,c){try{W(nb,a,"setAttribute",[b,c])}catch(d){if(-1==d.message.indexOf("A security problem occurred"))throw d;}}function Bb(a){return V(ub,a,"style",function(b){return b instanceof CSSStyleDeclaration})}function Cb(a){return V(vb,a,"sheet",function(b){return b instanceof CSSStyleSheet})}function X(a){return V(rb,a,"nodeName",function(b){return"string"==typeof b})}function Db(a){return V(sb,a,"nodeType",function(b){return"number"==typeof b})}
function Y(a){return V(tb,a,"parentNode",function(b){return!(b&&"string"==typeof b.name&&b.name&&"parentnode"==b.name.toLowerCase())})}function Eb(a,b){return W(wb,a,a.getPropertyValue?"getPropertyValue":"getAttribute",[b])||""}function Fb(a,b,c){W(xb,a,a.setProperty?"setProperty":"setAttribute",[b,c])}function Gb(a){return V(yb,a,"namespaceURI",function(b){return"string"==typeof b})};var Hb=A&&10>document.documentMode?null:RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)","g"),Ib={"-webkit-border-horizontal-spacing":!0,"-webkit-border-vertical-spacing":!0};
function Jb(a,b,c){var d=[];Kb(la(a.cssRules)).forEach(function(e){if(b&&!/[a-zA-Z][\w-:\.]*/.test(b))throw Error("Invalid container id");if(!(b&&A&&10==document.documentMode&&/\\['"]/.test(e.selectorText))){var f=b?e.selectorText.replace(Hb,"#"+b+" $1"):e.selectorText,h=d.push;e=Lb(e.style,c);if(-1!=f.indexOf("<"))throw Error("Selector does not allow '<', got: "+f);var k=f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(k))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+
f);a:{for(var g={"(":")","[":"]"},m=[],t=0;t<k.length;t++){var q=k[t];if(g[q])m.push(g[q]);else{b:{var n=void 0;for(n in g)if(g[n]==q){n=!0;break b}n=!1}if(n&&m.pop()!=q){k=!1;break a}}}k=0==m.length}if(!k)throw Error("() and [] in selector must be balanced, got: "+f);if(!(e instanceof J)){k="";for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(!/^[-_a-zA-Z0-9]+$/.test(l))throw Error("Name allows only [-_a-zA-Z0-9], got: "+l);g=e[l];null!=g&&(g=Array.isArray(g)?g.map(La).join(" "):La(g),
k+=l+":"+g+";")}e=k?new J(k,I):Ka}h.call(d,new L(f+"{"+Ja(e).replace(/</g,"\\3C ")+"}",K))}});return Sa(d)}function Kb(a){return a.filter(function(b){return b instanceof CSSStyleRule||b.type==CSSRule.STYLE_RULE})}function Mb(a,b,c){a=Nb("<style>"+a+"</style>");return null==a||null==a.sheet?Ua:Jb(a.sheet,void 0!=b?b:null,c)}function Nb(a){a=Wa("<html><head></head><body>"+a+"</body></html>");return(new DOMParser).parseFromString(N(a),"text/html").body.children[0]}
function Lb(a,b){if(!a)return Ka;var c=document.createElement("div").style;Ob(a).forEach(function(d){var e=qa&&d in Ib?d:d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i,"");0!=e.lastIndexOf("--",0)&&0!=e.lastIndexOf("var",0)&&(d=Eb(a,d),d=jb(e,d,b),null!=d&&Fb(c,e,d))});return new J(c.cssText||"",I)}
function Pb(a){var b=Array.from(W(pb,a,"getElementsByTagName",["STYLE"])),c=ma(b,function(h){return la(Cb(h).cssRules)});c=Kb(c);for(var d=[],e=0;e<c.length;e++)d[e]={index:e,u:c[e]};d.sort(function(h,k){var g=db(h.u.selectorText),m=db(k.u.selectorText);a:{for(var t=Math.min(g.length,m.length),q=0;q<t;q++){var n=g[q],l=m[q];n=n>l?1:n<l?-1:0;if(0!=n){m=n;break a}}g=g.length;m=m.length;m=g>m?1:g<m?-1:0}return m||h.index-k.index});for(e=0;e<d.length;e++)c[e]=d[e].u;c.reverse();a=document.createTreeWalker(a,
NodeFilter.SHOW_ELEMENT,null,!1);for(var f;f=a.nextNode();)c.forEach(function(h){W(qb,f,f.matches?"matches":"msMatchesSelector",[h.selectorText])&&h.style&&Qb(f,h.style)});b.forEach(ab)}function Qb(a,b){var c=Ob(a.style);Ob(b).forEach(function(d){if(!(0<=c.indexOf(d))){var e=Eb(b,d);Fb(a.style,d,e)}})}
function Ob(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";"array"==b||"object"==b&&"number"==typeof a.length?a=la(a):(a=Ca(a),b=ha(a,"cssText"),0<=b&&Array.prototype.splice.call(a,b,1));return a};var Rb="undefined"!=typeof WeakMap&&-1!=WeakMap.toString().indexOf("[native code]"),Sb=0;function Tb(){this.g=[];this.i=[];this.h="data-elementweakmap-index-"+Sb++}Tb.prototype.set=function(a,b){if(W(lb,a,"hasAttribute",[this.h])){var c=parseInt(W(mb,a,"getAttribute",[this.h])||null,10);this.i[c]=b}else c=this.i.push(b)-1,Ab(a,this.h,c.toString()),this.g.push(a);return this};
Tb.prototype.get=function(a){if(W(lb,a,"hasAttribute",[this.h]))return a=parseInt(W(mb,a,"getAttribute",[this.h])||null,10),this.i[a]};Tb.prototype.clear=function(){this.g.forEach(function(a){W(ob,a,"removeAttribute",[this.h])},this);this.g=[];this.i=[]};var Ub;(Ub=!A)||(Ub=10<=Number(Ba));var Vb=Ub,Wb=!A||null==document.documentMode;function Xb(){};var Yb={APPLET:!0,AUDIO:!0,BASE:!0,BGSOUND:!0,EMBED:!0,FORM:!0,IFRAME:!0,ISINDEX:!0,KEYGEN:!0,LAYER:!0,LINK:!0,META:!0,OBJECT:!0,SCRIPT:!0,SVG:!0,STYLE:!0,TEMPLATE:!0,VIDEO:!0};var Zb={A:!0,ABBR:!0,ACRONYM:!0,ADDRESS:!0,AREA:!0,ARTICLE:!0,ASIDE:!0,B:!0,BDI:!0,BDO:!0,BIG:!0,BLOCKQUOTE:!0,BR:!0,BUTTON:!0,CAPTION:!0,CENTER:!0,CITE:!0,CODE:!0,COL:!0,COLGROUP:!0,DATA:!0,DATALIST:!0,DD:!0,DEL:!0,DETAILS:!0,DFN:!0,DIALOG:!0,DIR:!0,DIV:!0,DL:!0,DT:!0,EM:!0,FIELDSET:!0,FIGCAPTION:!0,FIGURE:!0,FONT:!0,FOOTER:!0,FORM:!0,H1:!0,H2:!0,H3:!0,H4:!0,H5:!0,H6:!0,HEADER:!0,HGROUP:!0,HR:!0,I:!0,IMG:!0,INPUT:!0,INS:!0,KBD:!0,LABEL:!0,LEGEND:!0,LI:!0,MAIN:!0,MAP:!0,MARK:!0,MENU:!0,METER:!0,NAV:!0,
NOSCRIPT:!0,OL:!0,OPTGROUP:!0,OPTION:!0,OUTPUT:!0,P:!0,PRE:!0,PROGRESS:!0,Q:!0,S:!0,SAMP:!0,SECTION:!0,SELECT:!0,SMALL:!0,SOURCE:!0,SPAN:!0,STRIKE:!0,STRONG:!0,STYLE:!0,SUB:!0,SUMMARY:!0,SUP:!0,TABLE:!0,TBODY:!0,TD:!0,TEXTAREA:!0,TFOOT:!0,TH:!0,THEAD:!0,TIME:!0,TR:!0,TT:!0,U:!0,UL:!0,VAR:!0,WBR:!0};var $b={"ANNOTATION-XML":!0,"COLOR-PROFILE":!0,"FONT-FACE":!0,"FONT-FACE-SRC":!0,"FONT-FACE-URI":!0,"FONT-FACE-FORMAT":!0,"FONT-FACE-NAME":!0,"MISSING-GLYPH":!0};
function ac(a){a=a||new bc;cc(a);this.h=B(a.h);this.l=B(a.L);this.i=B(a.C);this.v=a.v;a.F.forEach(function(b){if(0!=b.lastIndexOf("data-",0))throw new w('Only "data-" attributes allowed, got: %s.',[b]);if(0==b.lastIndexOf("data-sanitizer-",0))throw new w('Attributes with "%s" prefix are not allowed, got: %s.',["data-sanitizer-",b]);this.h["* "+b.toUpperCase()]=dc},this);a.D.forEach(function(b){b=b.toUpperCase();if(-1==b.indexOf("-")||$b[b])throw new w("Only valid custom element tag names allowed, got: %s.",
[b]);this.i[b]=!0},this);this.s=a.j;this.j=a.K;this.g=null;this.m=a.s}ca(ac,Xb);function ec(a){return function(b,c){return(b=a(x(b),c))&&"about:invalid#zClosurez"!=H(b)?H(b):null}}function bc(){this.h={};ia([bb,cb],function(a){Ca(a).forEach(function(b){this.h[b]=dc},this)},this);this.i={};this.F=[];this.D=[];this.L=B(Yb);this.C=B(Zb);this.v=!1;this.H=Ha;this.m=this.g=this.G=this.j=ea;this.K=null;this.l=this.s=!1}
function fc(a,b){return function(c,d,e,f){c=a(c,d,e,f);return null==c?null:b(c,d,e,f)}}function Z(a,b,c,d){a[c]&&!b[c]&&(a[c]=fc(a[c],d))}
function cc(a){if(a.l)throw Error("HtmlSanitizer.Builder.build() can only be used once.");Z(a.h,a.i,"* USEMAP",gc);var b=ec(a.H);["* ACTION","* CITE","* HREF"].forEach(function(d){Z(this.h,this.i,d,b)},a);var c=ec(a.j);["* LONGDESC","* SRC","LINK HREF"].forEach(function(d){Z(this.h,this.i,d,c)},a);["* FOR","* HEADERS","* NAME"].forEach(function(d){Z(this.h,this.i,d,u(hc,this.G))},a);Z(a.h,a.i,"A TARGET",u(ic,["_blank","_self"]));Z(a.h,a.i,"* CLASS",u(jc,a.g));Z(a.h,a.i,"* ID",u(kc,a.g));Z(a.h,a.i,
"* STYLE",u(a.m,c));a.l=!0}function lc(a,b){a||(a="*");return(a+" "+b).toUpperCase()}function mc(a,b,c,d){if(!d.o)return null;b=Ja(Lb(d.o,function(e,f){c.J=f;e=a(e,c);var h;null==e?h=null:h=new E(e,G);return h}));return""==b?null:b}function dc(a){return x(a)}function ic(a,b){b=x(b);return 0<=ha(a,b.toLowerCase())?b:null}function gc(a){return(a=x(a))&&"#"==a.charAt(0)?a:null}function hc(a,b,c){return a(x(b),c)}
function jc(a,b,c){b=b.split(/(?:\s+)/);for(var d=[],e=0;e<b.length;e++){var f=a(b[e],c);f&&d.push(f)}return 0==d.length?null:d.join(" ")}function kc(a,b,c){return a(x(b),c)}function nc(a,b){var c=b.data;(b=Y(b))&&"style"==X(b).toLowerCase()&&!("STYLE"in a.l)&&"STYLE"in a.i&&(c=Ta(Mb(c,a.g,r(function(d,e){return this.s(d,{J:e})},a))));return document.createTextNode(c)};/*

 SPDX-License-Identifier: Apache-2.0
*/
var oc;window.gwd=window.gwd||{};window.gwd.binders=window.gwd.binders||{};
window.gwd.binders.html=function(a,b){if("undefined"!=typeof b){var c=document.querySelector("gwd-text-helper");c&&c.saveInitialText(a);oc||(c=new bc,c.m=mc,c.g=fa,oc=new ac(c));c=oc;var d=!("STYLE"in c.l)&&"STYLE"in c.i;d="*"==c.j&&d?"sanitizer-"+(Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)):c.j;c.g=d;if(Vb){d=b;if(Vb){b=O();c.g&&"*"==c.j&&(b.id=c.g);c.m&&(d=Nb("<div>"+d+"</div>"),Pb(d),d=d.innerHTML);d=Wa(d);var e=document.createElement("template");
if(Wb&&"content"in e)$a(e,d),e=e.content;else{var f=document.implementation.createHTMLDocument("x");e=f.body;$a(f.body,d)}d=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,null,!1);for(e=Rb?new WeakMap:new Tb;f=d.nextNode();){c:{var h=c;var k=f;switch(Db(k)){case 3:h=nc(h,k);break c;case 1:if("TEMPLATE"==X(k).toUpperCase())h=null;else{var g=X(k).toUpperCase();if(g in h.l||"http://www.w3.org/1999/xhtml"!=Gb(k))var m=null;else h.i[g]?m=document.createElement(g):(m=O(),h.v&&
Ab(m,"data-sanitizer-original-tag",g.toLowerCase()));if(m){var t=m,q=zb(k);if(null!=q)for(var n=0;g=q[n];n++)if(g.specified){var l=h;var R=k,S=g,F=S.name;if(0==F.lastIndexOf("data-sanitizer-",0))l=null;else{var Xa=X(R);S=S.value;var sa={tagName:x(Xa).toLowerCase(),attributeName:x(F).toLowerCase()},ta={o:void 0};"style"==sa.attributeName&&(ta.o=Bb(R));R=lc(Xa,F);R in l.h?(l=l.h[R],l=l(S,sa,ta)):(F=lc(null,F),F in l.h?(l=l.h[F],l=l(S,sa,ta)):l=null)}null!==l&&Ab(t,g.name,l)}h=m}else h=null}break c;
default:h=null}}if(h){if(1==Db(h)&&e.set(f,h),f=Y(f),k=!1,f)g=Db(f),m=X(f).toLowerCase(),t=Y(f),11!=g||t?"body"==m&&t&&(g=Y(t))&&!Y(g)&&(k=!0):k=!0,g=null,k||!f?g=b:1==Db(f)&&(g=e.get(f)),g.content&&(g=g.content),g.appendChild(h)}else for(h=f;f=h.firstChild;)h.removeChild(f)}e.clear&&e.clear();c=b}else c=O();0<zb(c).length&&(b=O(),b.appendChild(c),c=b);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"))}else c="";c=Wa(c);if(void 0!==a.tagName){if("script"===
a.tagName.toLowerCase())throw Error("");if("style"===a.tagName.toLowerCase())throw Error("");}a.innerHTML=N(c)}};}).call(this);