(function(aa){function ba(){var a=this;this.implementThePolyfill=function(){var b=Element.prototype.setAttribute;Element.prototype.setAttribute=function(c,e){if("style"!==c.toLowerCase()&&b.apply(this,[c,e]),"style"===c.toLowerCase()){this.removeAttribute("style");c=a.strToObj(e);for(var f in c)this.style[f]=c[f]}}}}function oa(a,b,c){function e(h){if(!h)return null;h=h.trim();return";"!==h.charAt(h.length-1)&&(h+=";"),h.trim()}void 0===c&&(c=!1);var f=e(a.getAttribute("style")),k=e(b);b="";b=c&&
f?function(){for(var h=f.split(";").concat(k.split(";")).filter(function(D){return 0!==D.length}),x="",v="",w=h.length-1;0<=w;w--){var m=h[w].substring(0,h[w].indexOf(":")).trim();0>x.indexOf(m)&&(x+=m,v+=h[w]+";")}return v}():k;a.setAttribute("style",b)}function g(){var a=this;this.iabType=null;this.iabTypeAdded=!0;this.crossOrigin=null;this.isAmp=!1;this.domainId="";this.isPreview=this.isReset=!1;this.nonce=this.geoFromUrl="";this.setAttributePolyfillIsActive=!1;this.storageBaseURL="";this.addBannerSDKScript=
function(b){var c=a.getRegionSet(b);c.GCEnable||(a.updateGtmMacros(),a.gtmUpdated=!0);a.iabTypeAdded&&("IAB"!==c.Type&&"IAB2"!==c.Type||(a.iabType=c.Type,a.intializeIabStub()),"IAB2"!==c.Type&&a.removeTcf());var e=d.stubScriptElement.cloneNode(!0),f="";f=b.UseSDKRefactor?(d.isMigratedURL&&(e.src=d.storageBaseURL+"/scripttemplates/new/scripttemplates/"+d.stubFileName+".js"),d.storageBaseURL+"/scripttemplates/new/scripttemplates/"+b.Version+"/"+d.bannerScriptName):"5.11.0"===b.Version?(d.isMigratedURL&&
(e.src=d.storageBaseURL+"/scripttemplates/old/scripttemplates/"+d.stubFileName+".js"),d.storageBaseURL+"/scripttemplates/old/scripttemplates/5.11.0/"+d.bannerScriptName):(d.isMigratedURL&&(e.src=d.storageBaseURL+"/scripttemplates/"+d.stubFileName+".js"),d.storageBaseURL+"/scripttemplates/"+b.Version+"/"+d.bannerScriptName);"charset data-language data-document-language data-domain-script crossorigin data-ignore-ga".split(" ").forEach(function(k){d.stubScriptElement.getAttribute(k)&&e.setAttribute(k,
d.stubScriptElement.getAttribute(k))});a.isAmp=!!d.stubScriptElement.getAttribute("amp");window.otStubData={bannerBaseDataURL:d.bannerBaseDataURL,crossOrigin:a.crossOrigin,domainData:b,domainId:a.domainId,geoFromUrl:a.geoFromUrl,isAmp:a.isAmp,isPreview:a.isPreview,isReset:a.isReset,mobileOnlineURL:d.mobileOnlineURL,nonce:a.nonce,otDataLayer:a.otDataLayer,regionRule:c,setAttributePolyfillIsActive:a.setAttributePolyfillIsActive,storageBaseURL:a.storageBaseURL,stubElement:e,urlParams:a.urlParams,userLocation:d.userLocation,
gtmUpdated:a.gtmUpdated};a.jsonp(f,null)};this.intializeIabStub=function(){var b=window;a.iabTypeAdded?("IAB"===a.iabType?void 0===b.__cmp&&(window.__cmp=a.executeCmpApi):void 0===b.__tcfapi&&(window.__tcfapi=a.executeTcfApi),a.addIabFrame()):a.addBackwardIabFrame();b.receiveOTMessage=a.receiveIabMessage;(b.attachEvent||window.addEventListener)("message",b.receiveOTMessage,!1)};this.addIabFrame=function(){var b=window,c="IAB"===a.iabType?"__cmpLocator":"__tcfapiLocator";!b.frames[c]&&(b.document.body?
a.addLocator(c,"CMP"):setTimeout(a.addIabFrame,5))};this.addBackwardIabFrame=function(){var b=window;!b.frames.__cmpLocator&&(b.document.body?a.addLocator("__cmpLocator","CMP"):setTimeout(a.addIabFrame,5));!b.frames.__tcfapiLocator&&(b.document.body?a.addLocator("__tcfapiLocator","TCF"):setTimeout(a.addIabFrame,5))};this.addLocator=function(b,c){var e=window,f=e.document.createElement("iframe");oa(f,"display: none;",!0);f.name=b;f.setAttribute("title",c+" Locator");e.document.body.appendChild(f)};
this.receiveIabMessage=function(b){var c="string"==typeof b.data,e={};try{e=c?JSON.parse(b.data):b.data}catch(m){}if(e.__cmpCall&&"IAB"===a.iabType){var f=e.__cmpCall.callId,k=e.__cmpCall.command,h=e.__cmpCall.parameter;a.executeCmpApi(k,h,function(m,D){m={__cmpReturn:{returnValue:m,success:D,callId:f,command:k}};b.source.postMessage(c?JSON.stringify(m):m,b.origin)})}else e.__cmpCall&&"IAB2"===a.iabType&&console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");if(e.__tcfapiCall&&
"IAB2"===a.iabType){var x=e.__tcfapiCall.callId,v=e.__tcfapiCall.command,w=(h=e.__tcfapiCall.parameter,e.__tcfapiCall.version);a.executeTcfApi(v,h,function(m,D){m={__tcfapiReturn:{returnValue:m,success:D,callId:x,command:v}};b&&b.source&&b.source.postMessage&&b.source.postMessage(c?JSON.stringify(m):m,"*")},w)}else e.__tcfapiCall&&"IAB"===a.iabType&&console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")};this.executeCmpApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=
arguments[c];a.iabType="IAB";c=b[0];var e=b[1];b=b[2];if("function"==typeof b&&c)if(d.isStubReady&&d.IABCookieValue)switch(c){case "ping":a.getPingRequest(b,!0);break;case "getConsentData":a.getConsentDataRequest(b);break;default:a.addToQueue(c,e,b)}else a.addToQueue(c,e,b)};this.executeTcfApi=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if(a.iabType="IAB2",!b.length)return window.__tcfapi.a||[];c=b[0];var e=b[1],f=b[2];b=b[3];"function"==typeof f&&c&&("ping"===c?a.getPingRequest(f):
a.addToQueue(c,e,f,b))};this.addToQueue=function(b,c,e,f){var k=window,h="IAB"===a.iabType?"__cmp":"__tcfapi";k[h].a=k[h].a||[];k[h].a.push([b,c,e,f])};this.getPingRequest=function(b,c){if(void 0===c&&(c=!1),b){var e={},f=!1;"IAB"===a.iabType?(e={gdprAppliesGlobally:d.oneTrustIABgdprAppliesGlobally,cmpLoaded:c},f=!0):"IAB2"===a.iabType&&(e={gdprApplies:d.oneTrustIABgdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"stub",apiVersion:"2.0",cmpVersion:void 0,cmpId:void 0,gvlVersion:void 0,
tcfPolicyVersion:void 0},f=!0);b(e,f)}};this.getConsentDataRequest=function(b){b&&d.IABCookieValue&&b({gdprApplies:d.oneTrustIABgdprAppliesGlobally,hasGlobalScope:d.hasIABGlobalScope,consentData:d.IABCookieValue},!0)};this.initConsentSDK()}var E,l,ca,y,K,da,L,M,F,ea,r,fa,N,G,H,z,O,ha,A,ia,n,P,Q,ja,B,ka,t,la,R,ma,S,p,u,I,T,U,J,q,V,W,na,C,X,Y,Z,d=new function(){this.optanonCookieName="OptanonConsent";this.optanonHtmlGroupData=[];this.optanonHostData=[];this.genVendorsData=[];this.vendorsServiceData=
[];this.IABCookieValue="";this.oneTrustIABCookieName="eupubconsent";this.oneTrustIsIABCrossConsentEnableParam="isIABGlobal";this.isStubReady=!0;this.geolocationCookiesParam="geolocation";this.EUCOUNTRIES="BE BG CZ DK DE EE IE GR ES FR IT CY LV LT LU HU MT NL AT PL PT RO SI SK FI SE GB HR LI NO IS".split(" ");this.stubFileName="otSDKStub";this.DATAFILEATTRIBUTE="data-domain-script";this.bannerScriptName="otBannerSdk.js";this.mobileOnlineURL=[];this.isMigratedURL=!1;this.migratedCCTID="[[OldCCTID]]";
this.migratedDomainId="[[NewDomainId]]";this.userLocation={country:"",state:""}};(l=E=E||{})[l.Unknown=0]="Unknown";l[l.BannerCloseButton=1]="BannerCloseButton";l[l.ConfirmChoiceButton=2]="ConfirmChoiceButton";l[l.AcceptAll=3]="AcceptAll";l[l.RejectAll=4]="RejectAll";l[l.BannerSaveSettings=5]="BannerSaveSettings";l[l.ContinueWithoutAcceptingButton=6]="ContinueWithoutAcceptingButton";(y=ca=ca||{})[y.Banner=1]="Banner";y[y.PC=2]="PC";y[y.API=3]="API";(E=K=K||{}).AcceptAll="AcceptAll";E.RejectAll="RejectAll";
E.UpdateConsent="UpdateConsent";(L=da=da||{})[L.Purpose=1]="Purpose";L[L.SpecialFeature=2]="SpecialFeature";(K=M=M||{}).Legal="legal";K.UserFriendly="user_friendly";(M=F=F||{}).Top="top";M.Bottom="bottom";(r=ea=ea||{})[r.Banner=0]="Banner";r[r.PrefCenterHome=1]="PrefCenterHome";r[r.VendorList=2]="VendorList";r[r.CookieList=3]="CookieList";(N=fa=fa||{})[N.RightArrow=39]="RightArrow";N[N.LeftArrow=37]="LeftArrow";(F=G=G||{}).AfterTitle="AfterTitle";F.AfterDescription="AfterDescription";F.AfterDPD="AfterDPD";
(G=H=H||{}).PlusMinus="Plusminus";G.Caret="Caret";G.NoAccordion="NoAccordion";(H=z=z||{}).Consent="Consent";H.LI="LI";H.AddtlConsent="AddtlConsent";(z=O=O||{}).Iab1Pub="eupubconsent";z.Iab2Pub="eupubconsent-v2";z.Iab1Eu="euconsent";z.Iab2Eu="euconsent-v2";(A=ha=ha||{})[A.Disabled=0]="Disabled";A[A.Consent=1]="Consent";A[A.LegInt=2]="LegInt";(n=ia=ia||{})[n["Banner - Allow All"]=1]="Banner - Allow All";n[n["Banner - Reject All"]=2]="Banner - Reject All";n[n["Banner - Close"]=3]="Banner - Close";n[n["Preference Center - Allow All"]=
4]="Preference Center - Allow All";n[n["Preference Center - Reject All"]=5]="Preference Center - Reject All";n[n["Preference Center - Confirm"]=6]="Preference Center - Confirm";(O=P=P||{}).Active="1";O.InActive="0";(P=Q=Q||{}).Host="Host";P.GenVendor="GenVen";(B=ja=ja||{})[B.Host=1]="Host";B[B.GenVen=2]="GenVen";B[B.HostAndGenVen=3]="HostAndGenVen";(t=ka=ka||{})[t.minDays=1]="minDays";t[t.maxDays=30]="maxDays";t[t.maxYear=31536E3]="maxYear";t[t.maxSecToDays=86400]="maxSecToDays";(R=la=la||{})[R.RTL=
0]="RTL";R[R.LTR=1]="LTR";(S=ma=ma||{})[S.GoogleVendor=1]="GoogleVendor";S[S.GeneralVendor=2]="GeneralVendor";(u=p=p||{})[u.Days=1]="Days";u[u.Weeks=7]="Weeks";u[u.Months=30]="Months";u[u.Years=365]="Years";(Q=I=I||{}).Checkbox="Checkbox";Q.Toggle="Toggle";(I=T=T||{}).SlideIn="Slide_In";I.FadeIn="Fade_In";I.RemoveAnimation="Remove_Animation";(T=U=U||{}).Link="Link";T.Icon="Icon";(U=J=J||{}).consent="consent";U.set="set";(J=q=q||{}).update="update";J.default="default";J.ads_data_redaction="ads_data_redaction";
(q=V=V||{}).analytics_storage="analytics_storage";q.ad_storage="ad_storage";q.functionality_storage="functionality_storage";q.personalization_storage="personalization_storage";q.security_storage="security_storage";q.region="region";q.wait_for_update="wait_for_update";(V=W=W||{}).granted="granted";V.denied="denied";(C=na=na||{})[C.HostList=0]="HostList";C[C.IabVendors=1]="IabVendors";C[C.VendorServices=2]="VendorServices";(W=X=X||{}).OBJECT_TO_LI="ObjectToLI";W.LI_ACTIVE_IF_LEGAL_BASIS="LIActiveIfLegalBasis";
(X=Y=Y||{}).cookies="cookies";X.vendors="vendors";var pa=((Z={})[p.Days]="PCenterVendorListLifespanDay",Z[p.Weeks]="LfSpnWk",Z[p.Months]="PCenterVendorListLifespanMonth",Z[p.Years]="LfSpnYr",ba.prototype.camelize=function(a){return a.split("-").map(function(b,c){return 0===c?b:b[0].toUpperCase()+b.slice(1)}).join("")},ba.prototype.strToObj=function(a){var b={};a=a.split(";").map(function(f){return f.trim()});for(var c=0,e=void 0;c<a.length;++c)if(/:/.test(a[c])){if(!(e=a[c].split(/:(.+)/))[1])return null;
b[this.camelize(e[0])]=e[1].trim()}return b},ba);p=(g.prototype.initConsentSDK=function(){this.initCustomEventPolyfill();this.ensureHtmlGroupDataInitialised();this.setStubScriptElement();this.setOTDataLayer();this.getParam();this.fetchBannerSDKDependency();this.captureNonce()},g.prototype.captureNonce=function(){this.nonce=d.stubScriptElement.nonce||d.stubScriptElement.getAttribute("nonce")||null},g.prototype.fetchBannerSDKDependency=function(){this.setDomainDataFileURL();this.crossOrigin=d.stubScriptElement.getAttribute("crossorigin")||
null;this.otFetch(d.bannerDataParentURL,this.getLocation.bind(this))},g.prototype.getLocation=function(a){var b=a&&a.TenantFeatures,c=window.location.hostname,e=a.Domain,f=a.BulkDomainCheckUrl;b&&b.CookieV2BulkDomainManagement&&c!==e&&"PRODUCTION"===a.ScriptType&&(c={location:d.storageBaseURL.replace(/^https?:\/\//,""),domainId:this.domainId,url:c},this.otFetch(f,this.handleBulkDomainMgmt,!1,c,a));if(b&&b.CookieV2CSP&&this.nonce&&(this.setAttributePolyfillIsActive=!0,(new pa).implementThePolyfill()),
!a.RuleSet[0].Type)return this.iabTypeAdded=!1,window.__cmp=this.executeCmpApi,window.__tcfapi=this.executeTcfApi,this.intializeIabStub(),this.addBannerSDKScript(a);b=window;b.OneTrust&&b.OneTrust.geolocationResponse?(b=b.OneTrust.geolocationResponse,this.setGeoLocation(b.countryCode,b.stateCode),this.addBannerSDKScript(a)):(b=this.readCookieParam(d.optanonCookieName,d.geolocationCookiesParam))||a.SkipGeolocation?(this.setGeoLocation(b.split(";")[0],b.split(";")[1]),this.addBannerSDKScript(a)):this.getGeoLocation(a)},
g.prototype.handleBulkDomainMgmt=function(a,b){a.isValid&&(b.Domain=window.location.hostname)},g.prototype.getGeolocationURL=function(a){a.TenantFeatures;var b=""+d.stubScriptElement.getAttribute("src").split(d.stubFileName)[0]+a.Version;return RegExp("^file://","i").test(b)&&a.MobileSDK?(a="/"+a.GeolocationUrl.replace(/^(http|https):\/\//,"").split("/").slice(1).join("/")+".js",d.storageBaseURL+a):a.GeolocationUrl},g.prototype.geoLocationJsonCallback=function(a,b){b&&this.setGeoLocation(b.country,
b.state);this.addBannerSDKScript(a)},g.prototype.getGeoLocation=function(a){var b=this.getGeolocationURL(a);this.otFetch(b,this.geoLocationJsonCallback.bind(this,a),!0)},g.prototype.setOTDataLayer=function(){var a=d.stubScriptElement.hasAttribute("data-dLayer-ignore"),b=d.stubScriptElement.getAttribute("data-dLayer-ignore");this.otDataLayer={ignore:a&&"true"===b||a&&""===b,name:d.stubScriptElement.getAttribute("data-dLayer-name")||"dataLayer"}},g.prototype.setGeoLocation=function(a,b){void 0===b&&
(b="");d.userLocation={country:a,state:b}},g.prototype.otFetch=function(a,b,c,e,f){if(void 0===c&&(c=!1),void 0===e&&(e=null),RegExp("^file://","i").test(a))this.otFetchOfflineFile(a,b);else{d.mobileOnlineURL.push(a);var k=new XMLHttpRequest;if(k.onload=function(){f?b(JSON.parse(this.responseText),f):b(JSON.parse(this.responseText))},k.onerror=function(){b()},k.open("GET",a),c&&k.setRequestHeader("accept","application/json"),e)for(var h in e)k.setRequestHeader(h,e[h]);k.send()}},g.prototype.otFetchOfflineFile=
function(a,b){var c=(a=a.replace(".json",".js")).split("/"),e=c[c.length-1].split(".js")[0];this.jsonp(a,function(){b(window[e])})},g.prototype.jsonp=function(a,b){var c=document.createElement("script");c.setAttribute("src",a);this.nonce&&c.setAttribute("nonce",this.nonce);c.async=!0;c.type="text/javascript";this.crossOrigin&&c.setAttribute("crossorigin",this.crossOrigin);document.getElementsByTagName("head")[0].appendChild(c);RegExp("^file://","i").test(a)||d.mobileOnlineURL.push(a);b&&(c.onload=
c.onerror=function(){b()})},g.prototype.getRegionSet=function(a){var b,c=d.userLocation,e=a.RuleSet.filter(function(v){return!0===v.Default});if(!c.country&&!c.state)return e&&0<e.length?e[0]:null;e=c.state.toLowerCase();c=c.country.toLowerCase();for(var f=0;f<a.RuleSet.length;f++)if(!0===a.RuleSet[f].Global)var k=a.RuleSet[f];else{var h=a.RuleSet[f].States;if(h[c]&&0<=h[c].indexOf(e)){var x=a.RuleSet[f];break}0<=a.RuleSet[f].Countries.indexOf(c)&&(b=a.RuleSet[f])}return x||b||k},g.prototype.ensureHtmlGroupDataInitialised=
function(){this.initializeIABData();this.initializeGroupData();this.initializeHostData();this.initializeGenVenData()},g.prototype.initializeGroupData=function(){var a=this.readCookieParam(d.optanonCookieName,"groups");a&&(d.optanonHtmlGroupData=this.deserialiseStringToArray(a))},g.prototype.initializeHostData=function(){var a=this.readCookieParam(d.optanonCookieName,"hosts");a&&(d.optanonHostData=this.deserialiseStringToArray(a))},g.prototype.initializeGenVenData=function(){var a=this.readCookieParam(d.optanonCookieName,
"genVendors");a&&(d.genVendorsData=this.deserialiseStringToArray(a))},g.prototype.initializeIABData=function(){this.validateIABGDPRApplied();this.validateIABGlobalScope()},g.prototype.validateIABGlobalScope=function(){var a=this.readCookieParam(d.optanonCookieName,d.oneTrustIsIABCrossConsentEnableParam);a?"true"===a?(d.hasIABGlobalScope=!0,d.isStubReady=!1):(d.hasIABGlobalScope=!1,d.IABCookieValue=this.getCookie(d.oneTrustIABCookieName)):d.isStubReady=!1},g.prototype.validateIABGDPRApplied=function(){var a=
this.readCookieParam(d.optanonCookieName,d.geolocationCookiesParam).split(";")[0];a?this.isBoolean(a)?d.oneTrustIABgdprAppliesGlobally="true"===a:d.oneTrustIABgdprAppliesGlobally=0<=d.EUCOUNTRIES.indexOf(a):d.isStubReady=!1},g.prototype.isBoolean=function(a){return"true"===a||"false"===a},g.prototype.readCookieParam=function(a,b){var c;if(c=this.getCookie(a)){a={};var e=c.split("\x26");for(c=0;c<e.length;c+=1){var f=e[c].split("\x3d");a[decodeURIComponent(f[0])]=decodeURIComponent(f[1]).replace(/\+/g,
" ")}return b&&a[b]?a[b]:b&&!a[b]?"":a}return""},g.prototype.getCookie=function(a){if(this.isAmp)return(JSON.parse(window.localStorage.getItem(this.domainId))||{})[a]||null;var b,c=a+"\x3d",e=document.cookie.split(";");for(a=0;a<e.length;a+=1){for(b=e[a];" "==b.charAt(0);)b=b.substring(1,b.length);if(0==b.indexOf(c))return b.substring(c.length,b.length)}return null},g.prototype.updateGtmMacros=function(){var a,b=[],c=d.optanonHtmlGroupData.length;for(a=0;a<c;a++)this.endsWith(d.optanonHtmlGroupData[a],
":1")&&b.push(d.optanonHtmlGroupData[a].replace(":1",""));c=d.optanonHostData.length;for(a=0;a<c;a++)this.endsWith(d.optanonHostData[a],":1")&&b.push(d.optanonHostData[a].replace(":1",""));c=d.genVendorsData.length;for(a=0;a<c;a++)this.endsWith(d.genVendorsData[a],":1")&&b.push(d.genVendorsData[a].replace(":1",""));c=d.vendorsServiceData.length;for(a=0;a<c;a++)this.endsWith(d.vendorsServiceData[a],":1")&&b.push(d.vendorsServiceData[a].replace(":1",""));a=","+this.serialiseArrayToString(b)+",";window.OnetrustActiveGroups=
a;window.OptanonActiveGroups=a;c=window;this.otDataLayer.ignore||void 0===c[this.otDataLayer.name]?this.otDataLayer.ignore||(c[this.otDataLayer.name]=[{event:"OneTrustLoaded",OnetrustActiveGroups:a},{event:"OptanonLoaded",OptanonActiveGroups:a}]):c[this.otDataLayer.name].constructor===Array&&(c[this.otDataLayer.name].push({OnetrustActiveGroups:a}),c[this.otDataLayer.name].push({OptanonActiveGroups:a}));var e,f=new CustomEvent("consent.onetrust",{detail:b});!this.otDataLayer.ignore&&b.length&&(c[this.otDataLayer.name].constructor===
Array&&c[this.otDataLayer.name].push({event:"OneTrustGroupsUpdated",OnetrustActiveGroups:a}),e=new CustomEvent("OneTrustGroupsUpdated",{detail:b}));setTimeout(function(){window.dispatchEvent(f);e&&window.dispatchEvent(e)})},g.prototype.deserialiseStringToArray=function(a){return a?a.split(","):[]},g.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)},g.prototype.serialiseArrayToString=function(a){return a.toString()},g.prototype.setStubScriptElement=function(){d.stubScriptElement=
document.querySelector("script[src*\x3d'"+d.stubFileName+"']");var a=d.stubScriptElement&&0<=d.stubScriptElement.getAttribute("src").indexOf("did\x3d");d.stubScriptElement&&d.stubScriptElement.hasAttribute(d.DATAFILEATTRIBUTE)?this.domainId=d.stubScriptElement.getAttribute(d.DATAFILEATTRIBUTE).trim():a?this.domainId=d.stubScriptElement.getAttribute("src").split("did\x3d")[1]:d.stubScriptElement||(d.stubScriptElement=document.querySelector("script[src*\x3d'"+d.migratedCCTID+"']"),d.stubScriptElement&&
(d.isMigratedURL=!0,this.domainId=d.migratedDomainId.trim()))},g.prototype.setDomainDataFileURL=function(){var a=d.stubScriptElement.getAttribute("src"),b=-1<a.indexOf("/consent");a&&(d.isMigratedURL?d.storageBaseURL=a.split("/consent/"+d.migratedCCTID)[0]:d.storageBaseURL=b?a.split("/consent")[0]:a.split("/scripttemplates/"+d.stubFileName)[0]);this.storageBaseURL=d.storageBaseURL;this.isPreview&&-1===this.domainId.indexOf("test")?this.domainId+="-test":this.isPreview=!1;d.bannerBaseDataURL=d.storageBaseURL&&
d.storageBaseURL+"/consent/"+this.domainId;d.bannerDataParentURL=d.bannerBaseDataURL+"/"+this.domainId+".json"},g.prototype.initCustomEventPolyfill=function(){function a(b,c){c=c||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(b,c.bubbles,c.cancelable,c.detail),e}if("function"==typeof window.CustomEvent)return!1;a.prototype=window.Event.prototype;window.CustomEvent=a},g.prototype.removeTcf=function(){delete window.__tcfapi;var a=document.querySelectorAll("iframe[name\x3d'__tcfapiLocator']")[0];
a&&a.parentElement.removeChild(a)},g.prototype.getParamForIE=function(){return{get:function(a){a=(new RegExp("[?\x26]"+a+"\x3d([^\x26#]*)")).exec(window.location.search);return null===a?null:decodeURI(a[1])||""}}},g.prototype.getParam=function(){window.document.documentMode||!window.URLSearchParams?this.urlParams=this.getParamForIE():this.urlParams=new URLSearchParams(window.location.search);var a="true"===this.urlParams.get("otreset"),b="true"===this.urlParams.get("otpreview");this.geoFromUrl=(this.urlParams.get("otgeo")||
"").toLowerCase();var c=this.readCookieParam("otpreview","expiry"),e=this.readCookieParam("otpreview","geo");this.isReset=a||c&&new Date(c)<new Date;this.isPreview=!this.isReset&&(b||c&&new Date(c)>new Date);this.setGeoParam(this.geoFromUrl||e)},g.prototype.setGeoParam=function(a){if(a){var b=window;b.OneTrust||(b.OneTrust={});a=a.split(",");b.OneTrust.geolocationResponse={countryCode:a[0],stateCode:a[1]}}},g);Y=new p;return aa.OtSDKStub=p,aa.otSdkStub=Y,aa})({});