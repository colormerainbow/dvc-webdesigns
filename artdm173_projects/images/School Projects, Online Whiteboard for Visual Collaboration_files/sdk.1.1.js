/*! For license information please see sdk.1.1.js.LICENSE.txt */
(()=>{var e=[function(e,t,n){var o;o=function(){var e=!0,t=["name","version","osversion","appVersion"],n=["a","c","x","msie","msedge","chrome","firefox","safari","opera","yandexbrowser","webkit","gecko","tablet","mobile","ios","android","mac","linux","ipados","embedGenerator","uwpApp","uwpDesktopApp","uwpTeamApp","uwpPublicApp","desktopApp","mobileApp","tabletApp","webView","desktop","desktopWithTouch","isTouchSupported","isTouchSupportedAndNotDesktop","winDesktopAppWithTouch","appDetected","isPartnerApp","liveEmbedMode","canUseSyntheticMouseEvents","isPointerEventSupported","isZoomApp"];function o(o){const r=void 0!==o&&o.userAgent||"";function i(e){var t=r.match(e);return t&&t.length>1&&t[1]||""}function s(e){var t=r.match(e);return t&&t.length>1&&t[2]||""}function a(e,t){return e&&e.length>t&&e[t]||""}var c,u=i(/(ipod|iphone|ipad)/i).toLowerCase(),d=!/like android/i.test(r)&&/android/i.test(r),p=/nexus\s*[0-6]\s*/i.test(r),l=!p&&/nexus\s*[0-9]+/i.test(r),f=/CrOS/.test(r),m=/silk/i.test(r),v=/sailfish/i.test(r),E=/tizen/i.test(r),h=/(web|hpw)os/i.test(r),O=/windows phone/i.test(r),A=(/SamsungBrowser/i.test(r),!O&&/windows/i.test(r)),g=!u&&!m&&/macintosh/i.test(r),R=!d&&!v&&!E&&!h&&/linux/i.test(r),b=s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),_=i(/version\/(\d+(\.\d+)?)/i),S=/tablet/i.test(r)&&!/tablet pc/i.test(r),T=!S&&/[^-]mobi/i.test(r),w=/xbox/i.test(r);if(/opera/i.test(r))c={name:"Opera",opera:e,version:_||i(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)};else if(/opr\/|opios/i.test(r))c={name:"Opera",opera:e,version:i(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||_};else if(/SamsungBrowser/i.test(r))c={name:"Samsung Internet for Android",samsungBrowser:e,version:_||i(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)};else if(/coast/i.test(r))c={name:"Opera Coast",coast:e,version:_||i(/(?:coast)[\s\/](\d+(\.\d+)?)/i)};else if(/yabrowser/i.test(r))c={name:"Yandex Browser",yandexbrowser:e,version:_||i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)};else if(/ucbrowser/i.test(r))c={name:"UC Browser",ucbrowser:e,version:i(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)};else if(/mxios/i.test(r))c={name:"Maxthon",maxthon:e,version:i(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)};else if(/epiphany/i.test(r))c={name:"Epiphany",epiphany:e,version:i(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)};else if(/puffin/i.test(r))c={name:"Puffin",puffin:e,version:i(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)};else if(/sleipnir/i.test(r))c={name:"Sleipnir",sleipnir:e,version:i(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)};else if(/k-meleon/i.test(r))c={name:"K-Meleon",kMeleon:e,version:i(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)};else if(O)c={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},b?(c.msedge=e,c.version=b):(c.msie=e,c.version=i(/iemobile\/(\d+(\.\d+)?)/i));else if(/msie|trident/i.test(r))c={name:"Internet Explorer",msie:e,version:i(/(?:msie |rv:)(\d+(\.\d+)?)/i)};else if(f)c={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};else if(/edg([ea]|ios)/i.test(r))c={name:"Microsoft Edge",msedge:e,version:b};else if(/vivaldi/i.test(r))c={name:"Vivaldi",vivaldi:e,version:i(/vivaldi\/(\d+(\.\d+)?)/i)||_};else if(v)c={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)};else if(/seamonkey\//i.test(r))c={name:"SeaMonkey",seamonkey:e,version:i(/seamonkey\/(\d+(\.\d+)?)/i)};else if(/firefox|iceweasel|fxios/i.test(r))c={name:"Firefox",firefox:e,version:i(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(r)&&(c.firefoxos=e,c.osname="Firefox OS");else if(m)c={name:"Amazon Silk",silk:e,version:i(/silk\/(\d+(\.\d+)?)/i)};else if(/phantom/i.test(r))c={name:"PhantomJS",phantom:e,version:i(/phantomjs\/(\d+(\.\d+)?)/i)};else if(/slimerjs/i.test(r))c={name:"SlimerJS",slimer:e,version:i(/slimerjs\/(\d+(\.\d+)?)/i)};else if(/blackberry|\bbb\d+/i.test(r)||/rim\stablet/i.test(r))c={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:_||i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)};else if(h)c={name:"WebOS",osname:"WebOS",webos:e,version:_||i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(r)&&(c.touchpad=e);else if(/bada/i.test(r))c={name:"Bada",osname:"Bada",bada:e,version:i(/dolfin\/(\d+(\.\d+)?)/i)};else if(E)c={name:"Tizen",osname:"Tizen",tizen:e,version:i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||_};else if(/qupzilla/i.test(r))c={name:"QupZilla",qupzilla:e,version:i(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||_};else if(/chromium/i.test(r))c={name:"Chromium",chromium:e,version:i(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||_};else if(/chrome|crios|crmo/i.test(r))c={name:"Chrome",chrome:e,version:i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)};else if(d)c={name:"Android",version:_};else if(/safari|applewebkit/i.test(r))c={name:"Safari",safari:e},_&&(c.version=_);else if(u)c={name:"iphone"==u?"iPhone":"ipad"==u?"iPad":"iPod"},_&&(c.version=_);else if(/googlebot/i.test(r))c={name:"Googlebot",googlebot:e,version:i(/googlebot\/(\d+(\.\d+))/i)||_};else if(/zoomwebkit/i.test(r)){c={name:"Safari",safari:e};const t=void 0!==o&&o.platform||"";-1!=t.indexOf("MacIntel")&&(c.osname="macOS",c.mac=e),-1!=t.indexOf("Win")&&(c.osname="Windows",c.windows=e)}else c={name:i(/^(.*)\/(.*) /),version:s(/^(.*)\/(.*) /)};!c.msedge&&/(apple)?webkit/i.test(r)?(/(apple)?webkit\/537\.36/i.test(r)?(c.name=c.name||"Blink",c.blink=e):(c.name=c.name||"Webkit",c.webkit=e),!c.version&&_&&(c.version=_)):!c.opera&&/gecko\//i.test(r)&&(c.name=c.name||"Gecko",c.gecko=e,c.version=c.version||i(/gecko\/(\d+(\.\d+)?)/i)),c.windowsphone||!d&&!c.silk?!c.windowsphone&&u?(c[u]=e,c.ios=e,c.osname="iOS"):g?(c.mac=e,c.osname="macOS"):w?(c.xbox=e,c.osname="Xbox"):A?(c.windows=e,c.osname="Windows"):R&&(c.linux=e,c.osname="Linux"):(c.android=e,c.osname="Android");var D="";c.windows?D=function(e){switch(e){case"NT":return"NT";case"XP":case"NT 5.1":return"XP";case"NT 5.0":return"2000";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}(i(/Windows ((NT|XP)( \d\d?.\d)?)/i)):c.windowsphone?D=i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):c.mac?D=(D=i(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g,"."):u?D=(D=i(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):d?D=i(/android[ \/-](\d+(\.\d+)*)/i):c.webos?D=i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):c.blackberry?D=i(/rim\stablet\sos\s(\d+(\.\d+)*)/i):c.bada?D=i(/bada\/(\d+(\.\d+)*)/i):c.tizen&&(D=i(/tizen[\/\s](\d+(\.\d+)*)/i)),D&&(c.osversion=D);var I=!c.windows&&D.split(".")[0];S||l||"ipad"==u||d&&(3==I||I>=4&&!T)||c.silk?c.tablet=e:(T||"iphone"==u||"ipod"==u||d||p||c.blackberry||c.webos||c.bada)&&(c.mobile=e),c.msedge||c.msie&&c.version>=10||c.yandexbrowser&&c.version>=15||c.vivaldi&&c.version>=1||c.chrome&&c.version>=20||c.samsungBrowser&&c.version>=4||c.firefox&&c.version>=20||c.safari&&c.version>=6||c.opera&&c.version>=10||c.ios&&c.osversion&&c.osversion.split(".")[0]>=6||c.blackberry&&c.version>=10.1||c.chromium&&c.version>=20?c.a=e:c.msie&&c.version<10||c.chrome&&c.version<20||c.firefox&&c.version<20||c.safari&&c.version<6||c.opera&&c.version<10||c.ios&&c.osversion&&c.osversion.split(".")[0]<6||c.chromium&&c.version<20?c.c=e:c.x=e;var N=r.toLowerCase(),y="WinRTError"in window,L=N.indexOf(" electron/")>-1,C=N.indexOf(" realtimeboard/")>-1,M="ontouchstart"in document,P=void 0!==o&&o.maxTouchPoints>0,k=!!window.PointerEvent;if(c.mac&&P&&(c.mac=!1,c.tablet=!0,c.ios=!0,c.ipados=!0),/realtimeboard/i.test(r)&&(c.appDetected=!0,C=!0,c.desktopApp=!0,c.appVersion=i(/(?:realtimeboard)\/(\d+(\.\d+)*)/i)),/miroapp/i.test(r)){c.appDetected=!0;var x=r.match(/(?:miroapp)\/(tablet|mobile|desktop|uwp|uwpteam)\/(\d+(\.\d+)*)\/(android|ios|macos|windows)/i);c.appVersion=a(x,2);var W=a(x,1).toLowerCase(),B=a(x,3).toLowerCase();switch(W){case"tablet":c.tabletApp=!0,c.tablet=!0,c.mac=!1,c.mobileApp=!1,c.mobile=!1;break;case"mobile":c.mobileApp=!0,c.mobile=!0,c.mac=!1,c.tablet=!1,c.tabletApp=!1;break;case"desktop":C=!0,c.desktopApp=!0;break;case"uwp":y=!0,c.uwpDesktopApp=!0;break;case"uwpteam":y=!0,c.uwpTeamApp=!0}switch(B){case"ios":c.ios=!0,c.safari=!0,c.android=!1;break;case"android":c.android=!0,c.ios=!1,c.safari=!1}}/zoomapps/i.test(r)&&(c.isZoomApp=!0);var F,H=window._rtb_app_info_;if(H&&"uwp"===H.appType)switch(y=!0,c.appDetected=!0,c.appVersion=H.version,c.uwpPublicApp=H.isPublicUsage,void 0===c.uwpPublicApp&&(c.uwpPublicApp=!1),H.deviceType){case"desktop":c.uwpDesktopApp=!0;break;case"team":c.uwpTeamApp=!0}return c.isPartnerApp=!!/^airtabledesktop/i.test(r),c.uwpApp=y,c.desktopApp=y||L&&C,c.desktop=!c.mobile&&!c.tablet,c.isTouchSupported=L||y?P:M||P,c.desktopWithTouch=c.desktop&&c.isTouchSupported,c.isTouchSupportedAndNotDesktop=!c.desktop&&c.isTouchSupported&&!c.ipados,c.winDesktopAppWithTouch=y&&P,c.isPointerEventSupported=k,c.canUseSyntheticMouseEvents=!("ontouchstart"in document)||c.desktop||!!c.android||!!c.ipados,c.android&&c.tabletApp&&(c.canUseSyntheticMouseEvents=!1),c.winDesktopAppWithTouch&&(c.tablet=!0),Object.defineProperty(c,"webView",{enumerable:!0,configurable:!1,get:function(){return c.mobileApp||c.embedGenerator},set:function(){}}),c.chromium&&(c.chrome=c.chromium),F=c,t.forEach((function(e){F.hasOwnProperty(e)||(F[e]="")})),n.forEach((function(e){F.hasOwnProperty(e)||(F[e]=!1)})),c}var r=o(navigator);function i(e){return e.split(".").length}function s(e,t){var n,o=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(n=0;n<e.length;n++)o.push(t(e[n]));return o}function a(e){for(var t=Math.max(i(e[0]),i(e[1])),n=s(e,(function(e){var n=t-i(e);return s((e+=new Array(n+1).join(".0")).split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));--t>=0;){if(n[0][t]>n[1][t])return 1;if(n[0][t]!==n[1][t])return-1;if(0===t)return 0}}function c(e,t,n){var i=r;"object"==typeof t&&(n=t,t=void 0),void 0===t&&(t=!1),ua&&(i=o(n));var s=""+i.version;for(var c in e)if(e.hasOwnProperty(c)&&i[c]){if("string"!=typeof e[c])throw new Error("Browser version in the minVersion map should be a string: "+c+": "+String(e));return a([s,e[c]])<0}return t}return r.test=function(e){for(var t=0;t<e.length;++t){var n=e[t];if("string"==typeof n&&n in r)return!0}return!1},r.isUnsupportedBrowser=c,r.compareVersions=a,r.check=function(e,t,n){return!c(e,t,n)},r._detect=o,r.detect=o,r},e.exports?e.exports=o():n.amdD("bowser",o)}],t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.amdD=function(){throw new Error("define cannot be used indirect")},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};(()=>{"use strict";n.d(o,{getReceiver:()=>_e});var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};function t(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}function r(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}Object.create,Object.create;var i=function(e){function n(t,n,o){var r=this.constructor,i=e.call(this,n)||this;return Object.setPrototypeOf(i,r.prototype),i.name=t,i.commandId=o.commandId,i.pluginId=o.context.pluginId,i}return t(n,e),n}(Error),s=function(e){function n(t,n){var o=this,r=n instanceof Error?n.message:"Some error while command execution";return(o=e.call(this,"CommandExecutionError",r,t)||this).originalError=n,o}return t(n,e),n}(i),a=function(e){function n(t){return e.call(this,"CommandNotFoundError","Command for '".concat(JSON.stringify(t.context),"' not found"),t)||this}return t(n,e),n}(i),c=function(e){function n(t){return e.call(this,"CommandReceiverNotFoundError","Command ".concat(t.commandId," not found. Context ='").concat(JSON.stringify(t.context),"'"),t)||this}return t(n,e),n}(i),u=function(e){function n(t){return e.call(this,"CommandResponseByTokenNotFoundError","Response by token not found ".concat(t.commandToken),t)||this}return t(n,e),n}(i),d=function(){function e(e,t){this.waitingForResponseCommands=new Map,this.sendHandler=e,this.findReceiverByContext=t}return e.prototype.sendCommand=function(e,t,n){var o=this;return new Promise((function(r,i){var s="".concat(e,"-").concat(function(e,t){void 0===e&&(e=20);for(var n="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=o.charAt(Math.floor(Math.random()*o.length));return n}()),a={commandId:e,commandToken:s,context:t,data:n};o.waitingForResponseCommands.set(s,{resolve:r,reject:i}),o.sendHandler(a)}))},e.prototype.processCommand=function(t){var n,o,r=this;if(t.commandId===e.RESPONSE_COMMAND_ID){var i=this.waitingForResponseCommands.get(t.commandToken);if(i)return this.waitingForResponseCommands.delete(t.commandToken),t.errorInResponse?(i.reject(t.data),Promise.resolve({error:t.data})):(i.resolve(t.data),Promise.resolve({result:t.data}));var d=new u(t);return console.error(d.message),Promise.resolve({error:d})}var p=this.findReceiverByContext(t.context);if(!p)return d=new c(t),console.error(d.message),Promise.resolve({error:d});var l,f=t.commandId.slice(1).split("."),m=p;if(f.forEach((function(e,t){t===f.length-1?l=m[e]:m=m[e]})),!l)return d=new a(t),console.error(d.message),Promise.resolve({error:d});if(m.isInternal&&!0!==(null===(o=null===(n=m.controller.appInstallation)||void 0===n?void 0:n.application)||void 0===o?void 0:o.internal))return d=new c(t),Promise.resolve({error:d});try{var v=l.apply(m,t.data);return this.isPromise(v)?v.then((function(e){return r.sendResponse(t,e,!0),{result:e}})).catch((function(e){return console.error(e),r.sendResponse(t,"Some error while command execution",!1),{error:new s(t,e)}})):(this.sendResponse(t,v,!0),Promise.resolve({result:v}))}catch(e){return this.sendResponse(t,"Error while command execution: ".concat(e.message),!1),Promise.resolve({error:new s(t,e)})}},e.prototype.isPromise=function(e){return e&&void 0!==e.then&&void 0!==e.catch},e.prototype.sendResponse=function(t,n,o){var r={commandId:e.RESPONSE_COMMAND_ID,commandToken:t.commandToken,context:t.context,errorInResponse:!o,data:n};this.sendHandler(r)},e.RESPONSE_COMMAND_ID="IS_RESPONSE_FOR_SOME_COMMAND",e}();const p=d;var l;!function(e){e.HELLO_APP_FROM_IFRAME="HELLO_APP_FROM_IFRAME",e.HELLO_IFRAME_FROM_APP="HELLO_IFRAME_FROM_APP",e.IFRAME_CHANNEL_COMMAND="IFRAME_CHANNEL_COMMAND"}(l||(l={}));const f=l;var m="__receiverDescriptionFieldName";function v(e,t){var n;(n=e)[m]||(n[m]={methods:[],nestedReceivers:[]}),e[m].methods.push(t)}function E(e,t,n,o){n.methods.forEach((function(n){t[n]=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e+"."+n;return o(i,t)}})),n.nestedReceivers.forEach((function(n){t[n.key]={},E(e+"."+n.key,t[n.key],n.receiver,o)}))}var h=function(){};const O=function(e,t,n){this.type=e,this.data=t,this.preventDefault=n||h};var A=Promise.resolve(!0);function g(e){return"object"!=typeof e?(console.warn("WidgetMenuItem is '".concat(typeof e,"', but have to be 'object'")),!1):e.hasOwnProperty("tooltip")&&"string"==typeof e.tooltip?e.hasOwnProperty("svgIcon")&&"string"==typeof e.svgIcon?!(!e.hasOwnProperty("onClick")||"function"!=typeof e.onClick)||(console.warn("WidgetMenuItem.onClick is '".concat(typeof e.onClick,"', but have to be 'function'")),!1):(console.warn("WidgetMenuItem.svgIcon is '".concat(typeof e.svgIcon,"', but have to be 'string'")),!1):(console.warn("WidgetMenuItem.tooltip is '".concat(typeof e.tooltip,"', but have to be 'string'")),!1)}var R=function(){function e(e){this.buttonsClickListeners={},this.menuItemsClickListeners={},this.currentDraggableItemOptions={},this.eventDispatcher=e}return e.prototype.setDraggableItemOption=function(e,t){this.currentDraggableItemOptions[e]=t},e.prototype.setDraggableItem=function(e){this.currentDraggableItem=e},e.prototype.addOnWidgetSelectedListener=function(e){"function"!=typeof e?console.warn("getWidgetMenuItems but have to be 'function'"):this.getMenuItems=e},e.prototype.addButtonClickListener=function(e,t){this.buttonsClickListeners[e]=t},e.prototype.onWidgetsSelected=function(e,t){return n=this,o=void 0,i=function(){var n,o=this;return function(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(r){switch(r.label){case 0:return[4,this.getMenuItems(e,t)];case 1:return n=r.sent(),Array.isArray(n)||(n=[n]),n.every(g)?(n.forEach((function(e,t){e.onClick&&(o.menuItemsClickListeners["widgetMenuItems_".concat(t)]=e.onClick)})),[2,n.map((function(e){return{tooltip:e.tooltip,svgIcon:e.svgIcon}}))]):[2,[]]}}))},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}c((i=i.apply(n,o||[])).next())}));var n,o,r,i},e.prototype.callMenuItemClickListener=function(e){this.menuItemsClickListeners["widgetMenuItems_".concat(e)]()},e.prototype.dispatchEvent=function(e){var t=!1;return this.eventDispatcher.dispatchEvent(new O(e.type,e.data,(function(){t=!0}))),Promise.resolve(t)},e.prototype.callExtensionPointClickListener=function(e){this.buttonsClickListeners[e]()},e.prototype.areYouAlive=function(){return A},e.prototype.currentDraggableItemDropped=function(e,t,n){this.currentDraggableItemOptions[e]&&this.currentDraggableItem&&this.currentDraggableItemOptions[e].onDrop(t,n,this.currentDraggableItem)},e.prototype.currentDraggableItemCanceled=function(e){var t,n=null===(t=this.currentDraggableItemOptions[e])||void 0===t?void 0:t.onCancel;n&&n()},r([v],e.prototype,"onWidgetsSelected",null),r([v],e.prototype,"callMenuItemClickListener",null),r([v],e.prototype,"dispatchEvent",null),r([v],e.prototype,"callExtensionPointClickListener",null),r([v],e.prototype,"areYouAlive",null),r([v],e.prototype,"currentDraggableItemDropped",null),r([v],e.prototype,"currentDraggableItemCanceled",null),e}();const b=R;var _,S,T,w,D=Math.floor,I=function(){function e(){}return e.prototype.toMillis=function(e){return e},e.prototype.toSeconds=function(e){return D(e/1e3)},e.prototype.toMinutes=function(e){return D(e/6e4)},e.prototype.toHours=function(e){return D(e/36e5)},e.prototype.toDays=function(e){return D(e/864e5)},e}(),N=function(){function e(){}return e.prototype.toMillis=function(e){return 1e3*e},e.prototype.toSeconds=function(e){return e},e.prototype.toMinutes=function(e){return D(e/60)},e.prototype.toHours=function(e){return D(e/3600)},e.prototype.toDays=function(e){return D(e/86400)},e}(),y=function(){function e(){}return e.prototype.toMillis=function(e){return 6e4*e},e.prototype.toSeconds=function(e){return 60*e},e.prototype.toMinutes=function(e){return e},e.prototype.toHours=function(e){return D(e/60)},e.prototype.toDays=function(e){return D(e/1440)},e}(),L=function(){function e(){}return e.prototype.toMillis=function(e){return 36e5*e},e.prototype.toSeconds=function(e){return 3600*e},e.prototype.toMinutes=function(e){return 60*e},e.prototype.toHours=function(e){return e},e.prototype.toDays=function(e){return D(e/24)},e}(),C=function(){function e(){}return e.prototype.toMillis=function(e){return 864e5*e},e.prototype.toSeconds=function(e){return 86400*e},e.prototype.toMinutes=function(e){return 1440*e},e.prototype.toHours=function(e){return 24*e},e.prototype.toDays=function(e){return e},e}();new I,new N,new y,new L,new C,n(0);function M(e){var t,n,o,r,i,s,a,c,u=!1,d=f(),p=0,l=!1;function f(){return e.scrollHeight-parseInt(getComputedStyle(e).height,10)}function m(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function v(t){if(l)return!1;var n=!0;return t>d?(p=d,n=!1):t<0?(p=0,n=!1):p=t,e.scrollTop=p,n}function E(){var e,t,i;t=(e=Date.now())-r,r=e,i=p-o,o=p,n=1e3*i/(1+t)*.8+.2*n}function h(){var e,t;if(s)if(e=Date.now()-r,(t=-s*Math.exp(-e/325))>.5||t<-.5){var n=v(a+t);u=n,n&&requestAnimationFrame(h)}else u=!1,v(a)}function O(e){(function(e,t){var n,o=document.body;do{n=t(e),e=e.parentElement}while(!n&&null!=e&&e!=o);return!!n})(e.target,(function(e){return e.hasAttribute("no-custom-scroll")}))||(document.addEventListener("touchmove",A),document.addEventListener("touchend",g),S=R,l=!1,t=m(e),n=s=0,o=p,r=Date.now(),clearInterval(i),i=setInterval(E,100),function(e){var t=e.target;return!!t&&("A"===t.tagName||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||"SELECT"===t.tagName||"BUTTON"===t.tagName)}(e)||e.preventDefault(),u&&(u=!1,e.stopPropagation()))}function A(n){var o=m(n),r=t-o;return(r>5||r<-5)&&(t=o,_=e,v(p+r)),n.preventDefault(),!1}function g(e){R(),(n>10||n<-10)&&(s=.8*n,a=Math.round(p+s),r=Date.now(),requestAnimationFrame(h))}function R(){document.removeEventListener("touchmove",A),document.removeEventListener("touchend",g),_=void 0,clearInterval(i)}_=void 0;var b=setInterval((function(){c!==e.scrollHeight&&(c=e.scrollHeight,d=f(),_=void 0,l=!0,n=s=0)}),200);return e.addEventListener("touchstart",O,!0),function(){_=void 0,clearInterval(b),e.removeEventListener("touchstart",O,!0),document.removeEventListener("touchmove",A),document.removeEventListener("touchend",g),clearInterval(i)}}function P(){S&&S()}function k(e){return function(e){var t=function(e){var t=function(e){return e.originalEvent?e.originalEvent:e}(e);return t.touches?t.touches[0]:t}(e);return{x:t.clientX,y:t.clientY}}(e)}navigator.appVersion.indexOf("Win"),navigator.appVersion.indexOf("Mac"),navigator.appVersion.indexOf("X11"),navigator.appVersion.indexOf("Linux"),navigator.appVersion.indexOf("Android"),/iPad|iPhone|iPod/.test(navigator.platform),-1!==navigator.appVersion.indexOf("ZoomWebKit")&&(navigator.platform.indexOf("MacIntel"),navigator.platform.indexOf("Win")),window.devicePixelRatio;var x,W,B,F,H=!1;function G(e){w=k(e);var t,n=Math.abs(w.y-T.y);(t=x)&&t===_?H=!0:"horizontal"===F?(Math.abs(w.x-T.x)>4||n>20)&&(P(),W(),z()):Math.abs(w.y-T.y)>4&&(P(),W(),z())}function U(e,t,n,o,r){F=r,H=!1,x=t,W=o,B=n,T=k(e),document.addEventListener("mousemove",G),document.addEventListener("touchmove",G),document.addEventListener("mouseup",V),document.addEventListener("touchend",V),document.addEventListener("touchcancel",X)}function V(){H||B(),z()}function X(){z()}function z(){document.removeEventListener("mousemove",G),document.removeEventListener("touchmove",G),document.removeEventListener("mouseup",V),document.removeEventListener("touchend",V),document.removeEventListener("touchcancel",X)}var j=0;const Y=function(){function e(e){this.root=e}return e.prototype.initScrollableContainerWithDraggableImages=function(e,t){var n=++j;M(e);var o=this.root;function r(r){r.preventDefault();var i=function(e,t,n){var o=Array.from(t.querySelectorAll(n)).find((function(t){return t.contains(e)}));return o?o.attributes.getNamedItem("data-image-url").value:void 0}(r.target,e,t.draggableImageSelector);if(i){var s="touchstart"===r.type;U(r,e,(function(){o.onDraggableImageClick({url:i})}),(function(){var e={isTouchEvent:s,preview:{url:i},image:{url:i}};o.onDraggableImageStartDrag(n,e)}),"horizontal");var a=function(e){var t=e.touches[0];o.onDraggableItemTouchMove(n,t.clientX,t.clientY)},c=function(){o.onDraggableItemTouchEnd(n),d()},u=function(){o.onDraggableItemTouchCancel(n),d()},d=function(){e.removeEventListener("touchmove",a),e.removeEventListener("touchcancel",u),e.removeEventListener("touchend",c)};e.addEventListener("touchmove",a),e.addEventListener("touchcancel",u),e.addEventListener("touchend",c),r.stopPropagation()}}e.addEventListener("mousedown",r),e.addEventListener("touchstart",r),e.addEventListener("dragstart",(function(e){e.stopPropagation(),e.preventDefault()}))},e}(),K=function(){function e(){this._listeners={},this._removedListenersCount=0}return e.prototype.addEventListener=function(e,t,n){return void 0===n&&(n=null),this.addListenerWrapper(e,{thisArg:n,listener:t,removed:!1})},e.prototype.addEventListenerOnce=function(e,t,n){return void 0===n&&(n=null),this.addListenerWrapper(e,{thisArg:n,listener:t,removed:!1,once:!0})},e.prototype.addListenerWrapper=function(e,t){return this._listeners[e]||(this._listeners[e]=[]),!this.findListenerWrapper(e,t.listener,t.thisArg)&&(this._listeners[e].push(t),!0)},e.prototype.hasEventListener=function(e,t,n){return void 0===n&&(n=null),!(!this._listeners[e]||!this.findListenerWrapper(e,t,n))},e.prototype.findListenerWrapper=function(e,t,n){return this._listeners[e].find((function(e){return e.thisArg===n&&e.listener===t&&!1===e.removed}))},e.prototype.removeEventListener=function(e,t,n){void 0===n&&(n=null);var o=this._listeners[e],r=!1;if(o){var i=this._listeners[e].findIndex((function(e){return e.thisArg===n&&e.listener===t&&!1===e.removed}));-1!==i&&(this._inDispatch?(this._removedListenersCount++,o[i].removed=!0):o.splice(i,1),r=!0)}return r},e.prototype.dispatchEvent=function(e){var t=this,n=this._listeners[e.type];this._inDispatch=!0,n&&(e.target=this,n.some((function(n){var o=!1;return n.removed||(!1===n.listener.call(n.thisArg,e)&&(o=!0),n.once&&t.removeEventListener(e.type,n.listener,n.thisArg)),o})),this._removedListenersCount>0&&(this._removedListenersCount=0,this._listeners[e.type]=n.filter((function(e){return!e.removed})))),this._inDispatch=!1},e}();var Z;!function(e){e.SELECTION_UPDATED="SELECTION_UPDATED",e.WIDGETS_CREATED="WIDGETS_CREATED",e.WIDGETS_DELETED="WIDGETS_DELETED",e.WIDGETS_TRANSFORMATION_UPDATED="WIDGETS_TRANSFORMATION_UPDATED",e.COMMENT_CREATED="COMMENT_CREATED",e.ESC_PRESSED="ESC_PRESSED",e.CANVAS_CLICKED="CANVAS_CLICKED",e.ALL_WIDGETS_LOADED="ALL_WIDGETS_LOADED",e.DATA_BROADCASTED="DATA_BROADCASTED",e.METADATA_CHANGED="METADATA_CHANGED",e.ONLINE_USERS_CHANGED="ONLINE_USERS_CHANGED"}(Z||(Z={}));const q=Z;var J;!function(e){e[e.RECTANGLE=3]="RECTANGLE",e[e.CIRCLE=4]="CIRCLE",e[e.TRIANGLE=5]="TRIANGLE",e[e.BUBBLE=6]="BUBBLE",e[e.ROUNDER=7]="ROUNDER",e[e.RHOMBUS=8]="RHOMBUS",e[e.PARALL=10]="PARALL",e[e.STAR=11]="STAR",e[e.ARROW_RIGHT=12]="ARROW_RIGHT",e[e.ARROW_LEFT=13]="ARROW_LEFT",e[e.TEXT_RECT=14]="TEXT_RECT",e[e.PILL=15]="PILL",e[e.PENTAGON=16]="PENTAGON",e[e.HEXAGON=17]="HEXAGON",e[e.OCTAGON=18]="OCTAGON",e[e.TRAPEZE=19]="TRAPEZE",e[e.PREDEFINED_PROCESS=20]="PREDEFINED_PROCESS",e[e.ARROW_LEFT_RIGHT=21]="ARROW_LEFT_RIGHT",e[e.CLOUD=22]="CLOUD",e[e.BRACE_LEFT=23]="BRACE_LEFT",e[e.BRACE_RIGHT=24]="BRACE_RIGHT",e[e.CROSS=25]="CROSS",e[e.BARREL=26]="BARREL"}(J||(J={}));const Q=J;var $;!function(e){e[e.SQUARE=0]="SQUARE",e[e.RECTANGLE=1]="RECTANGLE"}($||($={}));const ee=$;var te;!function(e){e[e.DOTTED=0]="DOTTED",e[e.DASHED=1]="DASHED",e[e.NORMAL=2]="NORMAL",e[e.DASH_DOTTED=3]="DASH_DOTTED"}(te||(te={}));const ne=te;var oe;!function(e){e[e.ARIAL=0]="ARIAL",e[e.CURSIVE=1]="CURSIVE",e[e.ABRIL_FATFACE=2]="ABRIL_FATFACE",e[e.BANGERS=3]="BANGERS",e[e.EB_GARAMOND=4]="EB_GARAMOND",e[e.GEORGIA=5]="GEORGIA",e[e.GRADUATE=6]="GRADUATE",e[e.GRAVITAS_ONE=7]="GRAVITAS_ONE",e[e.FREDOKA_ONE=8]="FREDOKA_ONE",e[e.NIXIE_ONE=9]="NIXIE_ONE",e[e.OPEN_SANS=10]="OPEN_SANS",e[e.PERMANENT_MARKER=11]="PERMANENT_MARKER",e[e.PT_SANS=12]="PT_SANS",e[e.PT_SANS_NARROW=13]="PT_SANS_NARROW",e[e.PT_SERIF=14]="PT_SERIF",e[e.RAMMETTO_ONE=15]="RAMMETTO_ONE",e[e.ROBOTO=16]="ROBOTO",e[e.ROBOTO_CONDENSED=17]="ROBOTO_CONDENSED",e[e.ROBOTO_SLAB=18]="ROBOTO_SLAB",e[e.CAVEAT=19]="CAVEAT",e[e.TIMES_NEW_ROMAN=20]="TIMES_NEW_ROMAN",e[e.TITAN_ONE=21]="TITAN_ONE",e[e.LEMON_TUESDAY=22]="LEMON_TUESDAY",e[e.ROBOTO_MONO=23]="ROBOTO_MONO",e[e.NOTO_SANS=24]="NOTO_SANS",e[e.PLEX_SANS=25]="PLEX_SANS",e[e.PLEX_SERIF=26]="PLEX_SERIF",e[e.PLEX_MONO=27]="PLEX_MONO",e[e.SPOOF=28]="SPOOF",e[e.TIEMPOS_TEXT=29]="TIEMPOS_TEXT",e[e.NOTO_SERIF=1e3]="NOTO_SERIF",e[e.NOTO_SERIF_JP=1001]="NOTO_SERIF_JP",e[e.NOTO_SANS_JP=1002]="NOTO_SANS_JP",e[e.NOTO_SANS_HEBREW=1003]="NOTO_SANS_HEBREW",e[e.NOTO_SERIF_KR=1004]="NOTO_SERIF_KR",e[e.NOTO_SANS_KR=1005]="NOTO_SANS_KR",e[e.SERIF=1006]="SERIF",e[e.SANS_SERIF=1007]="SANS_SERIF",e[e.MONOSPACE=1008]="MONOSPACE"}(oe||(oe={}));const re=oe;var ie;!function(e){e[e.DASHED=1]="DASHED",e[e.NORMAL=2]="NORMAL",e[e.STRONG=3]="STRONG",e[e.DOTTED=4]="DOTTED"}(ie||(ie={}));const se=ie;var ae;!function(e){e[e.NONE=0]="NONE",e[e.ARC_ARROW=1]="ARC_ARROW",e[e.RHOMBUS=2]="RHOMBUS",e[e.FILLED_RHOMBUS=3]="FILLED_RHOMBUS",e[e.CIRCLE=4]="CIRCLE",e[e.FILLED_CIRCLE=5]="FILLED_CIRCLE",e[e.ARROW=6]="ARROW",e[e.OPEN_ARROW=7]="OPEN_ARROW",e[e.FILLED_ARROW=8]="FILLED_ARROW",e[e.ROUNDED_ARROW=9]="ROUNDED_ARROW",e[e.ERD_ONE=10]="ERD_ONE",e[e.ERD_MANY=11]="ERD_MANY",e[e.ERD_ONLY_ONE=12]="ERD_ONLY_ONE",e[e.ERD_ZERO_OR_ONE=13]="ERD_ZERO_OR_ONE",e[e.ERD_ONE_OR_MANY=14]="ERD_ONE_OR_MANY",e[e.ERD_ZERO_OR_MANY=15]="ERD_ZERO_OR_MANY"}(ae||(ae={}));const ce=ae;var ue;!function(e){e.LEFT="l",e.CENTER="c",e.RIGHT="r"}(ue||(ue={}));const de=ue;var pe;!function(e){e[e.LINE=1]="LINE",e[e.ARROW=2]="ARROW",e[e.ARROW_SKETCH=9]="ARROW_SKETCH",e[e.ARROW_SQUARE=3]="ARROW_SQUARE"}(pe||(pe={}));const le=pe;var fe;!function(e){e.TOP="t",e.MIDDLE="m",e.BOTTOM="b"}(fe||(fe={}));const me=fe;function ve(e,t,n){"function"==typeof n?n().catch((function(e){if(void 0!==e)throw new Error(e)})).then((function(n){n&&he(e,t,n)})):he(e,t,n)}function Ee(e,t){var n;_e().addOnWidgetSelectedListener(t),e.addButtonExtensionPoint(((n={}).hasWidgetMenuItems=!0,n))}function he(e,t,n){var o;e.addButtonExtensionPoint(((o={})[t]=function(e,t){!function(e,t){var n=Oe[e];if(!n)throw new Error("Unknown extension point: ".concat(e));n(t)}(e,t);var n={};for(var o in t)"onClick"!==o?n[o]=t[o]:_e().addButtonClickListener(e,t[o]);return n}(t,n),o))}var Oe={toolbar:function(e){Ae(e,"toolbar","title","string"),Ae(e,"toolbar","toolbarSvgIcon","string"),Ae(e,"toolbar","librarySvgIcon","string"),Ae(e,"toolbar","onClick","function")},bottomBar:function(e){Ae(e,"bottomBar","title","string"),Ae(e,"bottomBar","svgIcon","string"),Ae(e,"bottomBar","onClick","function")},exportMenu:function(e){Ae(e,"exportMenu","title","string"),Ae(e,"exportMenu","svgIcon","string"),Ae(e,"exportMenu","onClick","function")},getWidgetMenuItems:function(e){return!0},hasWidgetMenuItems:function(e){return!0}};function Ae(e,t,n,o){if(typeof e[n]!==o)throw new Error("".concat(n,":").concat(o," is required for 'extensionPoints.").concat(t,"'"))}var ge=0;var Re=new K,be=new b(Re);function _e(){return be}function Se(e,t){window.parent.postMessage({rtbSuperCommandID:e,data:t},"*")}var Te,we,De=new p((function(e){Se(f.IFRAME_CHANNEL_COMMAND,e)}),(function(e){return be})),Ie=function(e,t){return De.sendCommand(e,Te,t)},Ne=new Promise((function(e){we=e}));window.addEventListener("message",(function(e){switch(e.data.rtbEnableCommandsLog&&function(e,t,n,o){if(void 0===o&&(o=!1),n.data.rtbSuperCommandID)if(n.data.rtbSuperCommandID===f.IFRAME_CHANNEL_COMMAND){if("IS_RESPONSE_FOR_SOME_COMMAND"===n.data.data.commandId&&!o)return;console.info("%c".concat(e),"color: ".concat(t,";"),n.data.data.commandId,n.data)}else console.info("%c".concat(e),"color: ".concat(t,";"),n.data)}("APP → PLUGIN","blue",e,"showResponses"===e.data.rtbEnableCommandsLog),e.data.rtbSuperCommandID){case f.HELLO_IFRAME_FROM_APP:var t=e.data.data;Te=t,E("",ye,t.descriptor,Ie),ye.board&&(ye.board.ui.initDraggableItemsContainer=function(e){return function(t,n){var o=++ge;M(t),_e().setDraggableItemOption(o,n);var r=function(r){r.preventDefault();var i=function(e,t,n){return Array.from(t.querySelectorAll(n)).find((function(t){return t.contains(e)}))}(r.target,t,n.draggableItemSelector);if(i){_e().setDraggableItem(i);var s="touchstart"===r.type;U(r,t,(function(){n.onClick&&n.onClick(i)}),(function(){if(!n.getDraggableItemPreview)throw new Error("getDraggableItemPreview callback should be provided");var t=n.getDraggableItemPreview(i);e.onDraggableItemStartDrag(o,{isTouchEvent:s,preview:t})}),n.dragDirection||"horizontal");var a=function(t){var n=t.touches[0];e.onDraggableItemTouchMove(o,n.clientX,n.clientY)},c=function(){e.onDraggableItemTouchEnd(o),d()},u=function(){e.onDraggableItemTouchCancel(o),d(),n.onCancel&&n.onCancel()},d=function(){t.removeEventListener("touchmove",a),t.removeEventListener("touchcancel",u),t.removeEventListener("touchend",c)};t.addEventListener("touchmove",a),t.addEventListener("touchcancel",u),t.addEventListener("touchend",c),r.stopPropagation()}};t.addEventListener("mousedown",r),t.addEventListener("touchstart",r),t.addEventListener("dragstart",(function(e){e.stopPropagation(),e.preventDefault()}))}}(ye),ye.board.ui.resizeTo=(i=ye,s=function(e){i.board.ui.resizeToInner({width:e.clientWidth,height:e.clientHeight})},function(e){if("string"==typeof e){var t=document.querySelector(e);t&&s(t)}else"attributes"in e?s(e):i.board.ui.resizeToInner(e)}),ye.helpers=new Y(ye),function(e){e.board.utils={unionWidgetBounds:function(e){if(e.length<1)return{left:0,top:0,right:0,bottom:0,width:0,height:0,x:0,y:0};for(var t=e[0].bounds,n=t.left,o=t.top,r=t.right,i=t.bottom,s=1;s<e.length;s++)(t=e[s].bounds).left<n&&(n=t.left),t.top<o&&(o=t.top),t.right>r&&(r=t.right),t.bottom>i&&(i=t.bottom);var a=r-n,c=i-o;return{left:n,top:o,right:r,bottom:i,width:a,height:c,x:n+a/2,y:o+c/2}}}}(ye),function(e){e.board.viewport.getBoardUIPadding=function(){return{left:60,top:60,bottom:60,right:0}}}(ye),ye.enums={event:q,shapeType:Q,stickerType:ee,borderStyle:ne,fontFamily:re,textAlign:de,textAlignVertical:me,lineStyle:se,lineType:le,lineArrowheadStyle:ce},n=Re,(r=o=ye).addListener=function(e,t){return n.addEventListener(e,t),o.startListenEvent(e)},r.removeListener=function(e,t){return n.removeEventListener(e,t),Promise.resolve()},r.broadcastData=function(e){return o.broadcastEventInner({type:"BROADCAST_DATA",data:e})},window.addEventListener("keyup",(function(e){"Escape"===e.key&&o.broadcastEventInner({type:"ESC_PRESSED"})}))),function(e,t){e.getClientId=function(){return t}}(ye,t.pluginId),we();break;case f.IFRAME_CHANNEL_COMMAND:Ne.then((function(){De.processCommand(e.data.data)}))}var n,o,r,i,s}));var ye={onReady:function(e){Ne.then(e)},initializeSettings:function(e){return Ie(".initializeSettingsInner",[{iframeHeight:e?parseInt(e.iframeHeight,10):void 0}])},initialize:function(e){if(void 0===e&&(e={extensionPoints:{}}),!Ie)throw new Error("Call sdk methods inside onReady() callback");return ye.initializeInner().then((function(){!function(e,t){if(t.extensionPoints)for(var n in t.extensionPoints){var o=t.extensionPoints[n];"getWidgetMenuItems"===n?Ee(e,o):ve(e,n,o)}}(ye,e)}))}},Le=window;Le.miro=Le.rtb=ye,Se(f.HELLO_APP_FROM_IFRAME,{})})()})();