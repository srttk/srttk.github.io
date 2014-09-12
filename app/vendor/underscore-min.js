(function(){var s=this,L=s._,o={},k=Array.prototype,p=Object.prototype,z=k.push,i=k.slice,q=k.concat,m=p.toString,M=p.hasOwnProperty,A=k.forEach,B=k.map,C=k.reduce,D=k.reduceRight,E=k.filter,F=k.every,G=k.some,r=k.indexOf,H=k.lastIndexOf,p=Array.isArray,I=Object.keys,t=Function.prototype.bind,b=function(a){return a instanceof b?a:this instanceof b?void(this._wrapped=a):new b(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;
b.VERSION="1.6.0";var j=b.each=b.forEach=function(a,d,c){if(null==a)return a;if(A&&a.forEach===A)a.forEach(d,c);else if(a.length===+a.length)for(var e=0,f=a.length;f>e;e++){if(d.call(c,a[e],e,a)===o)return}else for(var g=b.keys(a),e=0,f=g.length;f>e;e++)if(d.call(c,a[g[e]],g[e],a)===o)return;return a};b.map=b.collect=function(a,d,b){var e=[];return null==a?e:B&&a.map===B?a.map(d,b):(j(a,function(a,g,h){e.push(d.call(b,a,g,h))}),e)};b.reduce=b.foldl=b.inject=function(a,d,c,e){var f=arguments.length>
2;if(null==a&&(a=[]),C&&a.reduce===C)return e&&(d=b.bind(d,e)),f?a.reduce(d,c):a.reduce(d);if(j(a,function(a,b,l){f?c=d.call(e,c,a,b,l):(c=a,f=!0)}),!f)throw new TypeError("Reduce of empty array with no initial value");return c};b.reduceRight=b.foldr=function(a,d,c,e){var f=arguments.length>2;if(null==a&&(a=[]),D&&a.reduceRight===D)return e&&(d=b.bind(d,e)),f?a.reduceRight(d,c):a.reduceRight(d);var g=a.length;if(g!==+g)var h=b.keys(a),g=h.length;if(j(a,function(b,i,j){i=h?h[--g]:--g;f?c=d.call(e,
c,a[i],i,j):(c=a[i],f=!0)}),!f)throw new TypeError("Reduce of empty array with no initial value");return c};b.find=b.detect=function(a,d,b){var e;return J(a,function(a,g,h){return d.call(b,a,g,h)?(e=a,!0):void 0}),e};b.filter=b.select=function(a,d,b){var e=[];return null==a?e:E&&a.filter===E?a.filter(d,b):(j(a,function(a,g,h){d.call(b,a,g,h)&&e.push(a)}),e)};b.reject=function(a,d,c){return b.filter(a,function(a,b,g){return!d.call(c,a,b,g)},c)};b.every=b.all=function(a,d,c){d||(d=b.identity);var e=
!0;return null==a?e:F&&a.every===F?a.every(d,c):(j(a,function(a,b,h){return(e=e&&d.call(c,a,b,h))?void 0:o}),!!e)};var J=b.some=b.any=function(a,d,c){d||(d=b.identity);var e=!1;return null==a?e:G&&a.some===G?a.some(d,c):(j(a,function(a,b,h){return e||(e=d.call(c,a,b,h))?o:void 0}),!!e)};b.contains=b.include=function(a,d){return null==a?!1:r&&a.indexOf===r?a.indexOf(d)!=-1:J(a,function(a){return a===d})};b.invoke=function(a,d){var c=i.call(arguments,2),e=b.isFunction(d);return b.map(a,function(a){return(e?
d:a[d]).apply(a,c)})};b.pluck=function(a,d){return b.map(a,b.property(d))};b.where=function(a,d){return b.filter(a,b.matches(d))};b.findWhere=function(a,d){return b.find(a,b.matches(d))};b.max=function(a,d,c){if(!d&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.max.apply(Math,a);var e=-1/0,f=-1/0;return j(a,function(a,b,l){b=d?d.call(c,a,b,l):a;b>f&&(e=a,f=b)}),e};b.min=function(a,d,c){if(!d&&b.isArray(a)&&a[0]===+a[0]&&a.length<65535)return Math.min.apply(Math,a);var e=1/0,f=1/0;return j(a,
function(a,b,l){b=d?d.call(c,a,b,l):a;f>b&&(e=a,f=b)}),e};b.shuffle=function(a){var d,c=0,e=[];return j(a,function(a){d=b.random(c++);e[c-1]=e[d];e[d]=a}),e};b.sample=function(a,d,c){return null==d||c?(a.length!==+a.length&&(a=b.values(a)),a[b.random(a.length-1)]):b.shuffle(a).slice(0,Math.max(0,d))};var u=function(a){return null==a?b.identity:b.isFunction(a)?a:b.property(a)};b.sortBy=function(a,d,c){return d=u(d),b.pluck(b.map(a,function(a,b,g){return{value:a,index:b,criteria:d.call(c,a,b,g)}}).sort(function(a,
d){var b=a.criteria,c=d.criteria;if(b!==c){if(b>c||b===void 0)return 1;if(c>b||c===void 0)return-1}return a.index-d.index}),"value")};var v=function(a){return function(d,b,e){var f={};return b=u(b),j(d,function(g,h){var l=b.call(e,g,h,d);a(f,l,g)}),f}};b.groupBy=v(function(a,d,c){b.has(a,d)?a[d].push(c):a[d]=[c]});b.indexBy=v(function(a,b,c){a[b]=c});b.countBy=v(function(a,d){b.has(a,d)?a[d]++:a[d]=1});b.sortedIndex=function(a,b,c,e){for(var c=u(c),b=c.call(e,b),f=0,g=a.length;g>f;){var h=f+g>>>1;
c.call(e,a[h])<b?f=h+1:g=h}return f};b.toArray=function(a){return a?b.isArray(a)?i.call(a):a.length===+a.length?b.map(a,b.identity):b.values(a):[]};b.size=function(a){return null==a?0:a.length===+a.length?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,c){return null==a?void 0:null==b||c?a[0]:0>b?[]:i.call(a,0,b)};b.initial=function(a,b,c){return i.call(a,0,a.length-(null==b||c?1:b))};b.last=function(a,b,c){return null==a?void 0:null==b||c?a[a.length-1]:i.call(a,Math.max(a.length-b,
0))};b.rest=b.tail=b.drop=function(a,b,c){return i.call(a,null==b||c?1:b)};b.compact=function(a){return b.filter(a,b.identity)};var K=function(a,d,c){return d&&b.every(a,b.isArray)?q.apply(c,a):(j(a,function(a){b.isArray(a)||b.isArguments(a)?d?z.apply(c,a):K(a,d,c):c.push(a)}),c)};b.flatten=function(a,b){return K(a,b,[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.partition=function(a,b){var c=[],e=[];return j(a,function(a){(b(a)?c:e).push(a)}),[c,e]};b.uniq=b.unique=function(a,
d,c,e){b.isFunction(d)&&(e=c,c=d,d=!1);var c=c?b.map(a,c,e):a,f=[],g=[];return j(c,function(c,e){(d?e&&g[g.length-1]===c:b.contains(g,c))||(g.push(c),f.push(a[e]))}),f};b.union=function(){return b.uniq(b.flatten(arguments,!0))};b.intersection=function(a){var d=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(d,function(d){return b.contains(d,a)})})};b.difference=function(a){var d=q.apply(k,i.call(arguments,1));return b.filter(a,function(a){return!b.contains(d,a)})};b.zip=function(){for(var a=
b.max(b.pluck(arguments,"length").concat(0)),d=Array(a),c=0;a>c;c++)d[c]=b.pluck(arguments,""+c);return d};b.object=function(a,b){if(null==a)return{};for(var c={},e=0,f=a.length;f>e;e++)b?c[a[e]]=b[e]:c[a[e][0]]=a[e][1];return c};b.indexOf=function(a,d,c){if(null==a)return-1;var e=0,f=a.length;if(c){if("number"!=typeof c)return e=b.sortedIndex(a,d),a[e]===d?e:-1;e=0>c?Math.max(0,f+c):c}if(r&&a.indexOf===r)return a.indexOf(d,c);for(;f>e;e++)if(a[e]===d)return e;return-1};b.lastIndexOf=function(a,b,
c){if(null==a)return-1;var e=null!=c;if(H&&a.lastIndexOf===H)return e?a.lastIndexOf(b,c):a.lastIndexOf(b);for(c=e?c:a.length;c--;)if(a[c]===b)return c;return-1};b.range=function(a,b,c){arguments.length<=1&&(b=a||0,a=0);for(var c=arguments[2]||1,e=Math.max(Math.ceil((b-a)/c),0),f=0,g=Array(e);e>f;)g[f++]=a,a+=c;return g};var w=function(){};b.bind=function(a,d){var c,e;if(t&&a.bind===t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;return c=i.call(arguments,2),e=function(){if(!(this instanceof
e))return a.apply(d,c.concat(i.call(arguments)));w.prototype=a.prototype;var b=new w;w.prototype=null;var g=a.apply(b,c.concat(i.call(arguments)));return Object(g)===g?g:b}};b.partial=function(a){var d=i.call(arguments,1);return function(){for(var c=0,e=d.slice(),f=0,g=e.length;g>f;f++)e[f]===b&&(e[f]=arguments[c++]);for(;c<arguments.length;)e.push(arguments[c++]);return a.apply(this,e)}};b.bindAll=function(a){var d=i.call(arguments,1);if(0===d.length)throw Error("bindAll must be passed function names");
return j(d,function(d){a[d]=b.bind(a[d],a)}),a};b.memoize=function(a,d){var c={};return d||(d=b.identity),function(){var e=d.apply(this,arguments);return b.has(c,e)?c[e]:c[e]=a.apply(this,arguments)}};b.delay=function(a,b){var c=i.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,d,c){var e,f,g,h=null,l=0;c||(c={});var i=function(){l=c.leading===!1?0:b.now();h=null;g=a.apply(e,
f);e=f=null};return function(){var j=b.now();l||c.leading!==!1||(l=j);var k=d-(j-l);return e=this,f=arguments,0>=k?(clearTimeout(h),h=null,l=j,g=a.apply(e,f),e=f=null):h||c.trailing===!1||(h=setTimeout(i,k)),g}};b.debounce=function(a,d,c){var e,f,g,h,i,j=function(){var k=b.now()-h;d>k?e=setTimeout(j,d-k):(e=null,c||(i=a.apply(g,f),g=f=null))};return function(){g=this;f=arguments;h=b.now();var k=c&&!e;return e||(e=setTimeout(j,d)),k&&(i=a.apply(g,f),g=f=null),i}};b.once=function(a){var b,c=!1;return function(){return c?
b:(c=!0,b=a.apply(this,arguments),a=null,b)}};b.wrap=function(a,d){return b.partial(d,a)};b.compose=function(){var a=arguments;return function(){for(var b=arguments,c=a.length-1;c>=0;c--)b=[a[c].apply(this,b)];return b[0]}};b.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}};b.keys=function(a){if(!b.isObject(a))return[];if(I)return I(a);var d=[],c;for(c in a)b.has(a,c)&&d.push(c);return d};b.values=function(a){for(var d=b.keys(a),c=d.length,e=Array(c),f=0;c>f;f++)e[f]=
a[d[f]];return e};b.pairs=function(a){for(var d=b.keys(a),c=d.length,e=Array(c),f=0;c>f;f++)e[f]=[d[f],a[d[f]]];return e};b.invert=function(a){for(var d={},c=b.keys(a),e=0,f=c.length;f>e;e++)d[a[c[e]]]=c[e];return d};b.functions=b.methods=function(a){var d=[],c;for(c in a)b.isFunction(a[c])&&d.push(c);return d.sort()};b.extend=function(a){return j(i.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a};b.pick=function(a){var b={},c=q.apply(k,i.call(arguments,1));return j(c,function(c){c in
a&&(b[c]=a[c])}),b};b.omit=function(a){var d={},c=q.apply(k,i.call(arguments,1)),e;for(e in a)b.contains(c,e)||(d[e]=a[e]);return d};b.defaults=function(a){return j(i.call(arguments,1),function(b){if(b)for(var c in b)a[c]===void 0&&(a[c]=b[c])}),a};b.clone=function(a){return b.isObject(a)?b.isArray(a)?a.slice():b.extend({},a):a};b.tap=function(a,b){return b(a),a};var x=function(a,d,c,e){if(a===d)return 0!==a||1/a==1/d;if(null==a||null==d)return a===d;a instanceof b&&(a=a._wrapped);d instanceof b&&
(d=d._wrapped);var f=m.call(a);if(f!=m.call(d))return!1;switch(f){case "[object String]":return a==String(d);case "[object Number]":return a!=+a?d!=+d:0==a?1/a==1/d:a==+d;case "[object Date]":case "[object Boolean]":return+a==+d;case "[object RegExp]":return a.source==d.source&&a.global==d.global&&a.multiline==d.multiline&&a.ignoreCase==d.ignoreCase}if("object"!=typeof a||"object"!=typeof d)return!1;for(var g=c.length;g--;)if(c[g]==a)return e[g]==d;var g=a.constructor,h=d.constructor;if(g!==h&&(!b.isFunction(g)||
!(g instanceof g&&b.isFunction(h)&&h instanceof h))&&"constructor"in a&&"constructor"in d)return!1;c.push(a);e.push(d);g=0;h=!0;if("[object Array]"==f){if(g=a.length,h=g==d.length)for(;g--&&(h=x(a[g],d[g],c,e)););}else{for(var i in a)if(b.has(a,i)&&(g++,!(h=b.has(d,i)&&x(a[i],d[i],c,e))))break;if(h){for(i in d)if(b.has(d,i)&&!g--)break;h=!g}}return c.pop(),e.pop(),h};b.isEqual=function(a,b){return x(a,b,[],[])};b.isEmpty=function(a){if(null==a)return!0;if(b.isArray(a)||b.isString(a))return 0===a.length;
for(var d in a)if(b.has(a,d))return!1;return!0};b.isElement=function(a){return!(!a||1!==a.nodeType)};b.isArray=p||function(a){return"[object Array]"==m.call(a)};b.isObject=function(a){return a===Object(a)};j(["Arguments","Function","String","Number","Date","RegExp"],function(a){b["is"+a]=function(b){return m.call(b)=="[object "+a+"]"}});b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});"function"!=typeof/./&&(b.isFunction=function(a){return"function"==typeof a});
b.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};b.isNaN=function(a){return b.isNumber(a)&&a!=+a};b.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"==m.call(a)};b.isNull=function(a){return null===a};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return M.call(a,b)};b.noConflict=function(){return s._=L,this};b.identity=function(a){return a};b.constant=function(a){return function(){return a}};b.property=function(a){return function(b){return b[a]}};b.matches=
function(a){return function(b){if(b===a)return!0;for(var c in a)if(a[c]!==b[c])return!1;return!0}};b.times=function(a,b,c){for(var e=Array(Math.max(0,a)),f=0;a>f;f++)e[f]=b.call(c,f);return e};b.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))};b.now=Date.now||function(){return(new Date).getTime()};var n={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};n.unescape=b.invert(n.escape);var N={escape:RegExp("["+b.keys(n.escape).join("")+"]","g"),
unescape:RegExp("("+b.keys(n.unescape).join("|")+")","g")};b.each(["escape","unescape"],function(a){b[a]=function(b){return null==b?"":(""+b).replace(N[a],function(b){return n[a][b]})}});b.result=function(a,d){if(null!=a){var c=a[d];return b.isFunction(c)?c.call(a):c}};b.mixin=function(a){j(b.functions(a),function(d){var c=b[d]=a[d];b.prototype[d]=function(){var a=[this._wrapped];z.apply(a,arguments);a=c.apply(b,a);return this._chain?b(a).chain():a}})};var O=0;b.uniqueId=function(a){var b=++O+"";
return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var y=/(.)^/,P={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},Q=/\\|'|\r|\n|\t|\u2028|\u2029/g;b.template=function(a,d,c){var e,c=b.defaults({},c,b.templateSettings),f=RegExp([(c.escape||y).source,(c.interpolate||y).source,(c.evaluate||y).source].join("|")+"|$","g"),g=0,h="__p+='";a.replace(f,function(b,c,d,e,f){return h+=a.slice(g,f).replace(Q,
function(a){return"\\"+P[a]}),c&&(h+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'"),d&&(h+="'+\n((__t=("+d+"))==null?'':__t)+\n'"),e&&(h+="';\n"+e+"\n__p+='"),g=f+b.length,b});h+="';\n";c.variable||(h="with(obj||{}){\n"+h+"}\n");h="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+h+"return __p;\n";try{e=new Function(c.variable||"obj","_",h)}catch(i){throw i.source=h,i;}if(d)return e(d,b);d=function(a){return e.call(this,a,b)};return d.source="function("+
(c.variable||"obj")+"){\n"+h+"}",d};b.chain=function(a){return b(a).chain()};b.mixin(b);j(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var d=k[a];b.prototype[a]=function(){var c=this._wrapped;return d.apply(c,arguments),"shift"!=a&&"splice"!=a||0!==c.length||delete c[0],this._chain?b(c).chain():c}});j(["concat","join","slice"],function(a){var d=k[a];b.prototype[a]=function(){var a=d.apply(this._wrapped,arguments);return this._chain?b(a).chain():a}});b.extend(b.prototype,
{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}});"function"==typeof define&&define.amd&&define("underscore",[],function(){return b})}).call(this);