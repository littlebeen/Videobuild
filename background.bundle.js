(()=>{"use strict";function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function n(n,t){var o;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(o=function(n,t){if(n){if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){o&&(n=o);var r=0,c=function(){};return{s:c,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,i=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,s=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw s}}}}var t=void 0;function o(e){(t=new WebSocket("ws://9littlebeen.xyz:8999")).onopen=function(e){console.log("connect Successfully"),chrome.tabs.query({active:!0,currentWindow:!0},(function(e){var t,o=n(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;chrome.tabs.sendMessage(r.id,{startConnect:!0})}}catch(e){o.e(e)}finally{o.f()}}))},t.onmessage=function(e){console.log("server",e.data);if(/^\d/g.test(e.data)){var o=Number(e.data);o?(chrome.storage.sync.set({myId:o}),chrome.runtime.sendMessage({myId:o},(function(e){}))):t.close(1e3,"true")}else if("{"===e.data[0]){var r=JSON.parse(e.data);"yourId"in r&&(chrome.storage.sync.set({yourId:Number(r.yourId)}),chrome.runtime.sendMessage({yourId:Number(r.yourId)},(function(e){}))),"message"in r&&chrome.runtime.sendMessage({message:r.message},(function(e){})),"play"in r&&chrome.tabs.query({active:!0,currentWindow:!0},(function(e){var t,o=n(e);try{for(o.s();!(t=o.n()).done;){var c=t.value;chrome.tabs.sendMessage(c.id,{play:r.play},(function(e){}))}}catch(e){o.e(e)}finally{o.f()}})),"time"in r&&chrome.tabs.query({active:!0,currentWindow:!0},(function(e){var t,o=n(e);try{for(o.s();!(t=o.n()).done;){var c=t.value;chrome.tabs.sendMessage(c.id,{time:r.time},(function(e){}))}}catch(e){o.e(e)}finally{o.f()}}))}},t.onclose=function(n){chrome.runtime.sendMessage({disconnect:!0},(function(e){})),"true"!==n.reason&&e?r(n,e):e?console.log("Connect close successfully"):console.log("Connection failed")};var r=function(e,n){console.log("Socket is closed. Reconnect will be attempted in 1 second. It is the last ".concat(n," times")),setTimeout((function(){o(n-1)}),1e3)}}var r=null;chrome.runtime.onMessage.addListener((function(e,n,c){if(console.log("local",e),c(""),r&&clearTimeout(r),r=setTimeout((function(){console.log("Not use for a long time. Connection will be closed."),t.close(1e3,"true")}),36e5),e.startConnect)o(5);else if(t){if(e.disconnect)return chrome.storage.sync.clear(),void t.close(1e3,"true");1===t.readyState&&t.send(JSON.stringify(e))}}))})();