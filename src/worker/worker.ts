// This is the minified and stringified code of the midi-json-parser-worker package.
export const worker = `!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){!function(e,t,n,r){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(t),a=o(n),s=o(r),u=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var n=e.charAt(0).toUpperCase(),r=e.slice(1);return"".concat(n).concat(r)}return"dashify"===t?a.default(e):"prependIndefiniteArticle"===t?"".concat(s.default(e)," ").concat(e):e}),e)},c=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},f=function(e,t){for(var n=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,r=[],o=n.exec(e);null!==o;){var a={modifiers:[],name:o[1]};if(void 0!==o[3])for(var s=/\\.[^(]+\\(\\)/g,f=s.exec(o[2]);null!==f;)a.modifiers.push(f[0].slice(1,-2)),f=s.exec(o[2]);r.push(a),o=n.exec(e)}var l=r.reduce((function(e,n){return e.map((function(e){return"string"==typeof e?e.split(c(n)).reduce((function(e,r,o){return 0===o?[r]:n.name in t?[].concat(i.default(e),[u(t[n.name],n.modifiers),r]):[].concat(i.default(e),[function(e){return u(e[n.name],n.modifiers)},r])}),[]):[e]})).reduce((function(e,t){return[].concat(i.default(e),i.default(t))}),[])}),[e]);return function(e){return l.reduce((function(t,n){return[].concat(i.default(t),"string"==typeof n?[n]:[n(e)])}),[]).join("")}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=void 0===e.code?void 0:f(e.code,t),r=void 0===e.message?void 0:f(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},a=i.cause,s=i.missingParameters,u=void 0===r?new Error:new Error(r(s));return null!==a&&(u.cause=a),void 0!==n&&(u.code=n(s)),void 0!==e.status&&(u.status=e.status),u}return o};e.compile=l,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(3),n(8),n(9))},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t,n){!function(e){"use strict";var t=function(e){return function(t){var n=e(t);return t.add(n),n}},n=function(e){return function(t,n){return e.set(t,n),n}},r=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,i=2*o,a=function(e,t){return function(n){var a=t.get(n),s=void 0===a?n.size:a<i?a+1:0;if(!n.has(s))return e(n,s);if(n.size<o){for(;n.has(s);)s=Math.floor(Math.random()*i);return e(n,s)}if(n.size>r)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;n.has(s);)s=Math.floor(Math.random()*r);return e(n,s)}},s=new WeakMap,u=n(s),c=a(u,s),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,n){var r=n(4),o=n(5),i=n(6),a=n(7);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},function(e,t,n){var r=n(1);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t,n){var r=n(1);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,e=>/[À-ž]/.test(e)?e:"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,e=>t&&t.condense?"-":e).toLowerCase()}},function(e,t,n){var r=function(e){var t,n,r=/\\w+/.exec(e);if(!r)return"an";var o=(n=r[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(n.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var a=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<a.length;t++)if(o.match(a[t]))return"a";return n.match(/^U[NK][AIEO]/)?"a":n==n.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=r:window.indefiniteArticle=r},function(e,t,n){"use strict";n.r(t);var r=n(0);const o=-32603,i=-32602,a=-32601,s=Object(r.compile)({message:'The requested method called "\${method}" is not supported.',status:a}),u=Object(r.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:o}),c=Object(r.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:o}),f=Object(r.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:i});var l=n(2);const d=new Map,m=(e,t,n)=>({...t,connect:({port:n})=>{n.start();const r=e(n,t),o=Object(l.generateUniqueNumber)(d);return d.set(o,()=>{r(),n.close(),d.delete(o)}),{result:o}},disconnect:({portId:e})=>{const t=d.get(e);if(void 0===t)throw f({portId:e.toString()});return t(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:n,port2:r}=new MessageChannel;n.onmessage=({data:t})=>e(null!==t),r.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),p=(e,t,n=(()=>!0))=>{const r=m(p,t,n),o=((e,t)=>async({data:{id:n,method:r,params:o}})=>{const i=t[r];try{if(void 0===i)throw s({method:r});const t=void 0===o?i():i(o);if(void 0===t)throw u({method:r});const a=t instanceof Promise?await t:t;if(null===n){if(void 0!==a.result)throw c({method:r})}else{if(void 0===a.result)throw c({method:r});const{result:t,transferables:o=[]}=a;e.postMessage({id:n,result:t},o)}}catch(t){const{message:r,status:o=-32603}=t;e.postMessage({error:{code:o,message:r},id:n})}})(e,r);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},g=e=>e.toString(16).toUpperCase().padStart(2,"0"),h=(e,t=0,n=e.byteLength-(t-e.byteOffset))=>{const r=t+e.byteOffset,o=[],i=new Uint8Array(e.buffer,r,n);for(let e=0;e<n;e+=1)o[e]=g(i[e]);return o.join("")},v=(e,t=0,n=e.byteLength-(t-e.byteOffset))=>{const r=t+e.byteOffset,o=new Uint8Array(e.buffer,r,n);return String.fromCharCode.apply(null,o)},y=(e,t,n)=>{let r;const{offset:o,value:i}=M(e,t),a=e.getUint8(o);return r=240===a?x(e,o+1):255===a?w(e,o+1):U(a,e,o+1,n),{...r,event:{...r.event,delta:i},eventTypeByte:a}},b=e=>{if("MThd"!==v(e,0,4))throw new Error('Unexpected characters "'.concat(v(e,0,4),'" found instead of "MThd"'));if(6!==e.getUint32(4))throw new Error("The header has an unexpected length of ".concat(e.getUint32(4)," instead of 6"));const t=e.getUint16(8),n=e.getUint16(10);return{division:e.getUint16(12),format:t,numberOfTracks:n}},w=(e,t)=>{let n;const r=e.getUint8(t),{offset:o,value:i}=M(e,t+1);if(1===r)n={text:v(e,o,i)};else if(2===r)n={copyrightNotice:v(e,o,i)};else if(3===r)n={trackName:v(e,o,i)};else if(4===r)n={instrumentName:v(e,o,i)};else if(5===r)n={lyric:v(e,o,i)};else if(6===r)n={marker:v(e,o,i)};else if(8===r)n={programName:v(e,o,i)};else if(9===r)n={deviceName:v(e,o,i)};else if(10===r||11===r||12===r||13===r||14===r||15===r)n={metaTypeByte:g(r),text:v(e,o,i)};else if(32===r)n={channelPrefix:e.getUint8(o)};else if(33===r)n={midiPort:e.getUint8(o)};else if(47===r)n={endOfTrack:!0};else if(81===r)n={setTempo:{microsecondsPerQuarter:(e.getUint8(o)<<16)+(e.getUint8(o+1)<<8)+e.getUint8(o+2)}};else if(84===r){let t;const r=e.getUint8(o);0==(96&r)?t=24:32==(96&r)?t=25:64==(96&r)?t=29:96==(96&r)&&(t=30),n={smpteOffset:{frame:e.getUint8(o+3),frameRate:t,hour:31&r,minutes:e.getUint8(o+1),seconds:e.getUint8(o+2),subFrame:e.getUint8(o+4)}}}else if(88===r)n={timeSignature:{denominator:Math.pow(2,e.getUint8(o+1)),metronome:e.getUint8(o+2),numerator:e.getUint8(o),thirtyseconds:e.getUint8(o+3)}};else if(89===r)n={keySignature:{key:e.getInt8(o),scale:e.getInt8(o+1)}};else{if(127!==r)throw new Error('Cannot parse a meta event with a type of "'.concat(g(r),'"'));n={sequencerSpecificData:h(e,o,i)}}return{event:n,offset:o+i}},U=(e,t,n,r)=>{const o=0==(128&e)?r:null,i=(null===o?e:o)>>4;let a,s=null===o?n:n-1;if(8===i)a={noteOff:{noteNumber:t.getUint8(s),velocity:t.getUint8(s+1)}},s+=2;else if(9===i){const e=t.getUint8(s),n=t.getUint8(s+1);a=0===n?{noteOff:{noteNumber:e,velocity:n}}:{noteOn:{noteNumber:e,velocity:n}},s+=2}else if(10===i)a={keyPressure:{noteNumber:t.getUint8(s),pressure:t.getUint8(s+1)}},s+=2;else if(11===i)a={controlChange:{type:t.getUint8(s),value:t.getUint8(s+1)}},s+=2;else if(12===i)a={programChange:{programNumber:t.getUint8(s)}},s+=1;else if(13===i)a={channelPressure:{pressure:t.getUint8(s)}},s+=1;else{if(14!==i)throw new Error('Cannot parse a midi event with a type of "'.concat(g(i),'"'));a={pitchBend:t.getUint8(s)|t.getUint8(s+1)<<7},s+=2}return a.channel=15&(null===o?e:o),{event:a,offset:s}},x=(e,t)=>{const{offset:n,value:r}=M(e,t);return{event:{sysex:h(e,n,r)},offset:n+r}},O=(e,t)=>{if("MTrk"!==v(e,t,4))throw new Error('Unexpected characters "'.concat(v(e,t,4),'" found instead of "MTrk"'));const n=[],r=e.getUint32(t+4)+t+8;let o=null,i=t+8;for(;i<r;){const t=y(e,i,o),{event:r,eventTypeByte:a}=t;n.push(r),i=t.offset,void 0!==r.channel&&(128&a)>0&&(o=a)}return{offset:i,track:n}},M=(e,t)=>{let n=t,r=0;for(;;){const t=e.getUint8(n);if(n+=1,!(t>127))return r+=t,{offset:n,value:r};r+=127&t,r<<=7}};p(self,{parse:({arrayBuffer:e})=>({result:(e=>{const t=new DataView(e),n=b(t);let r=14;const o=[];for(let e=0,i=n.numberOfTracks;e<i;e+=1){let e;({offset:r,track:e}=O(t,r)),o.push(e)}return{division:n.division,format:n.format,tracks:o}})(e)})})}]);`; // tslint:disable-line:max-line-length
