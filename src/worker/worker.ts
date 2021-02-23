// This is the minified and stringified code of the midi-json-parser-worker package.
export const worker = `(()=>{var e={682:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},33:(e,t,r)=>{var n=r(682);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},487:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},392:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},603:(e,t,r)=>{var n=r(33),o=r(487),i=r(20),s=r(392);e.exports=function(e){return n(e)||o(e)||i(e)||s()},e.exports.default=e.exports,e.exports.__esModule=!0},20:(e,t,r)=>{var n=r(682);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},775:function(e,t,r){!function(e,t,r,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=o(t),s=o(r),a=o(n),u=function(e,t){return void 0===t?e:t.reduce((function(e,t){if("capitalize"===t){var r=e.charAt(0).toUpperCase(),n=e.slice(1);return"".concat(r).concat(n)}return"dashify"===t?s.default(e):"prependIndefiniteArticle"===t?"".concat(a.default(e)," ").concat(e):e}),e)},c=function(e){var t=e.name+e.modifiers.map((function(e){return"\\\\.".concat(e,"\\\\(\\\\)")})).join("");return new RegExp("\\\\$\\\\{".concat(t,"}"),"g")},f=function(e,t){for(var r=/\\\${([^.}]+)((\\.[^(]+\\(\\))*)}/g,n=[],o=r.exec(e);null!==o;){var s={modifiers:[],name:o[1]};if(void 0!==o[3])for(var a=/\\.[^(]+\\(\\)/g,f=a.exec(o[2]);null!==f;)s.modifiers.push(f[0].slice(1,-2)),f=a.exec(o[2]);n.push(s),o=r.exec(e)}var l=n.reduce((function(e,r){return e.map((function(e){return"string"==typeof e?e.split(c(r)).reduce((function(e,n,o){return 0===o?[n]:r.name in t?[].concat(i.default(e),[u(t[r.name],r.modifiers),n]):[].concat(i.default(e),[function(e){return u(e[r.name],r.modifiers)},n])}),[]):[e]})).reduce((function(e,t){return[].concat(i.default(e),i.default(t))}),[])}),[e]);return function(e){return l.reduce((function(t,r){return[].concat(i.default(t),"string"==typeof r?[r]:[r(e)])}),[]).join("")}},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=void 0===e.code?void 0:f(e.code,t),n=void 0===e.message?void 0:f(e.message,t);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0,i=void 0===o&&(t instanceof Error||void 0!==t.code&&"Exception"===t.code.slice(-9))?{cause:t,missingParameters:{}}:{cause:o,missingParameters:t},s=i.cause,a=i.missingParameters,u=void 0===n?new Error:new Error(n(a));return null!==s&&(u.cause=s),void 0!==r&&(u.code=r(a)),void 0!==e.status&&(u.status=e.status),u}return o};e.compile=l,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(603),r(881),r(507))},881:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e)throw new TypeError("expected a string");return e.trim().replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\\W/g,(e=>/[À-ž]/.test(e)?e:"-")).replace(/^-+|-+$/g,"").replace(/-{2,}/g,(e=>t&&t.condense?"-":e)).toLowerCase()}},107:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,i=2*o,s=function(e,t){return function(r){var s=t.get(r),a=void 0===s?r.size:s<i?s+1:0;if(!r.has(a))return e(r,a);if(r.size<o){for(;r.has(a);)a=Math.floor(Math.random()*i);return e(r,a)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(a);)a=Math.floor(Math.random()*n);return e(r,a)}},a=new WeakMap,u=r(a),c=s(u,a),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)},507:e=>{var t=function(e){var t,r,n=/\\w+/.exec(e);if(!n)return"an";var o=(r=n[0]).toLowerCase(),i=["honest","hour","hono"];for(t in i)if(0==o.indexOf(i[t]))return"an";if(1==o.length)return"aedhilmnorsx".indexOf(o)>=0?"an":"a";if(r.match(/(?!FJO|[HLMNS]Y.|RY[EO]|SQU|(F[LR]?|[HL]|MN?|N|RH?|S[CHKLMNPTVW]?|X(YL)?)[AEIOU])[FHLMNRSX][A-Z]/))return"an";var s=[/^e[uw]/,/^onc?e\\b/,/^uni([^nmd]|mo)/,/^u[bcfhjkqrst][aeiou]/];for(t=0;t<s.length;t++)if(o.match(s[t]))return"a";return r.match(/^U[NK][AIEO]/)?"a":r==r.toUpperCase()?"aedhilmnorsx".indexOf(o[0])>=0?"an":"a":"aeiou".indexOf(o[0])>=0||o.match(/^y(b[lor]|cl[ea]|fere|gg|p[ios]|rou|tt)/)?"an":"a"};void 0!==e.exports?e.exports=t:window.indefiniteArticle=t}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}(()=>{"use strict";var e=r(775);const t=-32603,n=-32602,o=-32601,i=(0,e.compile)({message:'The requested method called "\${method}" is not supported.',status:o}),s=(0,e.compile)({message:'The handler of the method called "\${method}" returned no required result.',status:t}),a=(0,e.compile)({message:'The handler of the method called "\${method}" returned an unexpected result.',status:t}),u=(0,e.compile)({message:'The specified parameter called "portId" with the given value "\${portId}" does not identify a port connected to this worker.',status:n});var c=r(107);const f=new Map,l=(e,t,r)=>({...t,connect:({port:r})=>{r.start();const n=e(r,t),o=(0,c.generateUniqueNumber)(f);return f.set(o,(()=>{n(),r.close(),f.delete(o)})),{result:o}},disconnect:({portId:e})=>{const t=f.get(e);if(void 0===t)throw u({portId:e.toString()});return t(),{result:null}},isSupported:async()=>{if(await new Promise((e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])}))){const e=r();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),d=(e,t,r=(()=>!0))=>{const n=l(d,t,r),o=((e,t)=>async({data:{id:r,method:n,params:o}})=>{const u=t[n];try{if(void 0===u)throw i({method:n});const t=void 0===o?u():u(o);if(void 0===t)throw s({method:n});const c=t instanceof Promise?await t:t;if(null===r){if(void 0!==c.result)throw a({method:n})}else{if(void 0===c.result)throw a({method:n});const{result:t,transferables:o=[]}=c;e.postMessage({id:r,result:t},o)}}catch(t){const{message:n,status:o=-32603}=t;e.postMessage({error:{code:o,message:n},id:r})}})(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},p=e=>e.toString(16).toUpperCase().padStart(2,"0"),m=(e,t=0,r=e.byteLength-(t-e.byteOffset))=>{const n=t+e.byteOffset,o=[],i=new Uint8Array(e.buffer,n,r);for(let e=0;e<r;e+=1)o[e]=p(i[e]);return o.join("")},g=(e,t=0,r=e.byteLength-(t-e.byteOffset))=>{const n=t+e.byteOffset,o=new Uint8Array(e.buffer,n,r);return String.fromCharCode.apply(null,o)},h=(e,t,r)=>{let n;const{offset:o,value:i}=b(e,t),s=e.getUint8(o);return n=240===s?w(e,o+1):255===s?y(e,o+1):x(s,e,o+1,r),{...n,event:{...n.event,delta:i},eventTypeByte:s}},v=e=>{if("MThd"!==g(e,0,4))throw new Error('Unexpected characters "'.concat(g(e,0,4),'" found instead of "MThd"'));if(6!==e.getUint32(4))throw new Error("The header has an unexpected length of ".concat(e.getUint32(4)," instead of 6"));const t=e.getUint16(8),r=e.getUint16(10);return{division:e.getUint16(12),format:t,numberOfTracks:r}},y=(e,t)=>{let r;const n=e.getUint8(t),{offset:o,value:i}=b(e,t+1);if(1===n)r={text:g(e,o,i)};else if(2===n)r={copyrightNotice:g(e,o,i)};else if(3===n)r={trackName:g(e,o,i)};else if(4===n)r={instrumentName:g(e,o,i)};else if(5===n)r={lyric:g(e,o,i)};else if(6===n)r={marker:g(e,o,i)};else if(8===n)r={programName:g(e,o,i)};else if(9===n)r={deviceName:g(e,o,i)};else if(10===n||11===n||12===n||13===n||14===n||15===n)r={metaTypeByte:p(n),text:g(e,o,i)};else if(32===n)r={channelPrefix:e.getUint8(o)};else if(33===n)r={midiPort:e.getUint8(o)};else if(47===n)r={endOfTrack:!0};else if(81===n)r={setTempo:{microsecondsPerQuarter:(e.getUint8(o)<<16)+(e.getUint8(o+1)<<8)+e.getUint8(o+2)}};else if(84===n){let t;const n=e.getUint8(o);0==(96&n)?t=24:32==(96&n)?t=25:64==(96&n)?t=29:96==(96&n)&&(t=30),r={smpteOffset:{frame:e.getUint8(o+3),frameRate:t,hour:31&n,minutes:e.getUint8(o+1),seconds:e.getUint8(o+2),subFrame:e.getUint8(o+4)}}}else if(88===n)r={timeSignature:{denominator:Math.pow(2,e.getUint8(o+1)),metronome:e.getUint8(o+2),numerator:e.getUint8(o),thirtyseconds:e.getUint8(o+3)}};else if(89===n)r={keySignature:{key:e.getInt8(o),scale:e.getInt8(o+1)}};else{if(127!==n)throw new Error('Cannot parse a meta event with a type of "'.concat(p(n),'"'));r={sequencerSpecificData:m(e,o,i)}}return{event:r,offset:o+i}},x=(e,t,r,n)=>{const o=0==(128&e)?n:null,i=(null===o?e:o)>>4;let s,a=null===o?r:r-1;if(8===i)s={noteOff:{noteNumber:t.getUint8(a),velocity:t.getUint8(a+1)}},a+=2;else if(9===i){const e=t.getUint8(a),r=t.getUint8(a+1);s=0===r?{noteOff:{noteNumber:e,velocity:r}}:{noteOn:{noteNumber:e,velocity:r}},a+=2}else if(10===i)s={keyPressure:{noteNumber:t.getUint8(a),pressure:t.getUint8(a+1)}},a+=2;else if(11===i)s={controlChange:{type:t.getUint8(a),value:t.getUint8(a+1)}},a+=2;else if(12===i)s={programChange:{programNumber:t.getUint8(a)}},a+=1;else if(13===i)s={channelPressure:{pressure:t.getUint8(a)}},a+=1;else{if(14!==i)throw new Error('Cannot parse a midi event with a type of "'.concat(p(i),'"'));s={pitchBend:t.getUint8(a)|t.getUint8(a+1)<<7},a+=2}return s.channel=15&(null===o?e:o),{event:s,offset:a}},w=(e,t)=>{const{offset:r,value:n}=b(e,t);return{event:{sysex:m(e,r,n)},offset:r+n}},U=(e,t)=>{if("MTrk"!==g(e,t,4))throw new Error('Unexpected characters "'.concat(g(e,t,4),'" found instead of "MTrk"'));const r=[],n=e.getUint32(t+4)+t+8;let o=null,i=t+8;for(;i<n;){const t=h(e,i,o),{event:n,eventTypeByte:s}=t;r.push(n),i=t.offset,void 0!==n.channel&&(128&s)>0&&(o=s)}return{offset:i,track:r}},b=(e,t)=>{let r=t,n=0;for(;;){const t=e.getUint8(r);if(r+=1,!(t>127))return n+=t,{offset:r,value:n};n+=127&t,n<<=7}};d(self,{parse:({arrayBuffer:e})=>({result:(e=>{const t=new DataView(e),r=v(t);let n=14;const o=[];for(let e=0,i=r.numberOfTracks;e<i;e+=1){let e;({offset:n,track:e}=U(t,n)),o.push(e)}return{division:r.division,format:r.format,tracks:o}})(e)})})})()})();`; // tslint:disable-line:max-line-length
