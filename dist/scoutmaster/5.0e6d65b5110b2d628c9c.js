(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Fg5a:function(o,t,e){"use strict";e.r(t),e.d(t,"IonIcon",function(){return n});var i=e("Bqjk"),n=function(){function o(){this.isVisible=!1,this.lazy=!0}return o.prototype.componentWillLoad=function(){var o=this;this.waitUntilVisible(this.el,"50px",function(){o.isVisible=!0,o.loadIcon()})},o.prototype.componentDidUnload=function(){this.io&&(this.io.disconnect(),this.io=void 0)},o.prototype.waitUntilVisible=function(o,t,e){var i=this;if(this.lazy&&this.win&&this.win.IntersectionObserver){var n=this.io=new this.win.IntersectionObserver(function(o){o[0].isIntersecting&&(n.disconnect(),i.io=void 0,e())},{rootMargin:t});n.observe(o)}else e()},o.prototype.loadIcon=function(){var o=this;if(!this.isServer&&this.isVisible){var t=this.getUrl();t&&function(o){var t=r.get(o);return t||(t=fetch(o,{cache:"force-cache"}).then(function(o){return o.ok?o.text():Promise.resolve(null)}),r.set(o,t)),t}(t).then(function(t){o.svgContent=function(o,t,e){if(t){var i=o.createDocumentFragment(),n=o.createElement("div");n.innerHTML=t,i.appendChild(n);for(var r=n.childNodes.length-1;r>=0;r--)"svg"!==n.childNodes[r].nodeName.toLowerCase()&&n.removeChild(n.childNodes[r]);var s=n.firstElementChild;if(s&&"svg"===s.nodeName.toLowerCase()&&(e&&s.setAttribute(e,""),function o(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var e=0;e<t.attributes.length;e++){var i=t.attributes[e].value;if("string"==typeof i&&0===i.toLowerCase().indexOf("on"))return!1}for(e=0;e<t.childNodes.length;e++)if(!o(t.childNodes[e]))return!1}return!0}(s)))return n.innerHTML}return""}(o.doc,t,o.el["s-sc"])})}if(!this.ariaLabel){var e=s(this.name,this.mode,this.ios,this.md);e&&(this.ariaLabel=e.replace("ios-","").replace("md-","").replace(/\-/g," "))}},o.prototype.getUrl=function(){var o=a(this.src);return o||((o=s(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(o):(o=a(this.icon))?o:(o=s(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(o):null)},o.prototype.getNamedUrl=function(o){return this.resourcesUrl+"svg/"+o+".svg"},o.prototype.hostData=function(){var o;return{role:"img",class:Object.assign({},function(o){var t;return o?((t={"ion-color":!0})["ion-color-"+o]=!0,t):null}(this.color),(o={},o["icon-"+this.size]=!!this.size,o))}},o.prototype.render=function(){return!this.isServer&&this.svgContent?Object(i.b)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(i.b)("div",{class:"icon-inner"})},Object.defineProperty(o,"is",{get:function(){return"ion-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return":host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important;--ion-color-base:currentColor}:host(.icon-small){font-size:var(--ion-icon-size-small,18px)!important}:host(.icon-large){font-size:var(--ion-icon-size-large,32px)!important}.icon-inner,svg{display:block;height:100%;width:100%}svg{fill:var(--ion-color-base);stroke:var(--ion-color-base)}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"},enumerable:!0,configurable:!0}),o}(),r=new Map;function s(o,t,e,i){return t=(t||"md").toLowerCase(),e&&"ios"===t?o=e.toLowerCase():i&&"md"===t?o=i.toLowerCase():o&&(o=o.toLowerCase(),/^md-|^ios-|^logo-/.test(o)||(o=t+"-"+o)),"string"!=typeof o||""===o.trim()?null:""!==o.replace(/[a-z]|-|\d/gi,"")?null:o}function a(o){return"string"==typeof o&&(o=o.trim()).length>0&&/(\/|\.)/.test(o)?o:null}}}]);