(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1TsT":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=!("undefined"===typeof window||!window.document||!window.document.createElement);var i=void 0;function r(){return void 0===i&&(i=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}catch(i){}return t}()),i}function a(t){t.handlers===t.nextHandlers&&(t.nextHandlers=t.handlers.slice())}function s(t){this.target=t,this.events={}}s.prototype.getEventHandlers=function(t,e){var n,o=String(t)+" "+String((n=e)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},s.prototype.handleEvent=function(t,e,n){var o=this.getEventHandlers(t,e);o.handlers=o.nextHandlers,o.handlers.forEach((function(t){t&&t(n)}))},s.prototype.add=function(t,e,n){var o=this,i=this.getEventHandlers(t,n);a(i),0===i.nextHandlers.length&&(i.handleEvent=this.handleEvent.bind(this,t,n),this.target.addEventListener(t,i.handleEvent,n)),i.nextHandlers.push(e);var r=!0;return function(){if(r){r=!1,a(i);var s=i.nextHandlers.indexOf(e);i.nextHandlers.splice(s,1),0===i.nextHandlers.length&&(o.target&&o.target.removeEventListener(t,i.handleEvent,n),i.handleEvent=void 0)}}};var c="__consolidated_events_handlers__";function l(t,e,n,o){t[c]||(t[c]=new s(t));var i=function(t){if(t)return r()?t:!!t.capture}(o);return t[c].add(e,n,i)}},"1lG9":function(t,e){t.exports="/_next/static/images/unknown-a42b81145294b2487878d462881ab403.png"},"3WsN":function(t,e){t.exports="/_next/static/images/planet-db853b11718abb817bea8629cfd70338.jpg"},C2np:function(t,e){t.exports="/_next/static/images/mocroverse-e975b9d035a1578f838d3310b76f9b99.png"},JUaj:function(t,e,n){"use strict";var o=n("nJbZ"),i=n.n(o),r=n("Oxif"),a=n.n(r),s=n("pscC"),c=n.n(s),l=n("C2np"),p=n.n(l),u=n("3WsN"),d=n.n(u),f=n("iXZr"),v=n.n(f),m=n("eRfy"),h=n.n(m),g=n("NP/K"),w=n.n(g),b=n("1lG9"),x=n.n(b);e.a=function(t){switch(t){case"Cluster":return i.a;case"Dream":return a.a;case"Fantasy town":return c.a;case"Microverse":return p.a;case"Planet":return d.a;case"Resort":return v.a;case"Space station":return h.a;case"TV":return w.a;default:return x.a}}},"NP/K":function(t,e){t.exports="/_next/static/images/tv-83094fcb96c37f68b00d86e7fb85afbd.png"},Oxif:function(t,e){t.exports="/_next/static/images/dream-182178ba9683fe578bae67c7d4345f42.png"},RXBc:function(t,e,n){"use strict";n.r(e);var o=n("rePB"),i=n("q1tI"),r=n.n(i),a=n("R/WZ"),s=n("8k0H"),c=n("Ji2X"),l=n("hlFM"),p=n("KQm4"),u=n("tRbT"),d=n("ofer"),f=n("YFqc"),v=n.n(f),m=n("JUaj"),h=n("Y24N"),g=n("uuth"),w=n("ttZb"),b=n("hvsa"),x=r.a.createElement,y=Object(a.a)((function(t){return{root:{width:"100%",flexGrow:1,maxWidth:"100%",padding:t.spacing(1.25,1)},gridItem:Object(o.a)({display:"flex",paddingLeft:0,marginBottom:t.spacing(.625)},t.breakpoints.up("sm"),{"&:nth-child(odd)":{paddingRight:"2.5px"},"&:nth-child(even)":{paddingLeft:"2.5px"}}),imgContainer:{width:"100%",maxWidth:"37%",minHeight:"140px"},img:{display:"block",width:"100%",height:"100%",objectFit:"cover"},descriptionContainer:{backgroundColor:t.palette.locations,width:"100%",padding:t.spacing(2,2,1.6),position:"relative"},planetName:{color:t.palette.common.white,fontSize:"1.5rem",lineHeight:"1.75rem",fontWeight:"bold",marginBottom:t.spacing(1),letterSpacing:"0.1px",textDecoration:"none"},planetType:{color:t.palette.common.white,fontSize:"1.125rem",lineHeight:"1.313rem",marginBottom:t.spacing(1.5)},residentsContainer:{display:"flex",justifyContent:"flex-start",maxWidth:"76%",position:"absolute",bottom:"12px"},residentImg:{maxWidth:"26%",marginRight:"11%","&:last-child":{marginRight:0}}}})),_=function(){var t=y(),e=Object(w.a)(b.d,{notifyOnNetworkStatusChange:!0}),n=e.data,o=e.fetchMore,i=e.networkStatus;return x(u.a,{container:!0,spacing:0},void 0!==n&&n.locations.results.map((function(e,i){var r=e.id,a=e.name,s=e.type,c=e.residents;return x(u.a,{item:!0,xs:12,sm:6,key:r,className:t.gridItem},n.locations.info.next&&i===n.locations.results.length-2&&x(g.a,{onEnter:function(){return o({variables:{page:n.locations.info.next},updateQuery:function(t,e){var n=e.fetchMoreResult;return n?{locations:{__typename:"Locations",results:[].concat(Object(p.a)(t.locations.results),Object(p.a)(n.locations.results)),info:{__typename:"Info",next:n.locations.info.next}}}:t}})}}),x(v.a,{href:"/rick-and-morty-db/locations/[id]",as:"/rick-and-morty-db/locations/".concat(r)},x("a",{className:t.imgContainer},x("img",{src:"/rick-and-morty-db"+Object(m.a)(s),className:t.img}))),x(l.a,{className:t.descriptionContainer},x(d.a,{className:t.planetName,component:"h3"},x(v.a,{href:"/rick-and-morty-db/locations/[id]",as:"/rick-and-morty-db/locations/".concat(r)},x("a",{className:t.planetName},a))),x(d.a,{className:t.planetType},s),x(l.a,{className:t.residentsContainer},c.slice(0,3).map((function(e,n){var o=e.image,i=e.id;return x(v.a,{key:n,href:"/rick-and-morty-db/residents/[id]",as:"/rick-and-morty-db/residents/".concat(i)},x("a",{className:t.residentImg},x("img",{src:o,className:t.img})))})))))})),(3===i||1===i)&&x(h.a,null))},O=r.a.createElement,T=Object(a.a)((function(t){return{root:Object(o.a)({width:"100%",flexGrow:1,maxWidth:"100%",padding:t.spacing(1.25,1),margin:"0 auto"},t.breakpoints.up("md"),{maxWidth:"960px"})}}));e.default=function(){var t=T();return O(s.a,null,O(c.a,{className:t.root},O(l.a,null,O(_,null))))}},eRfy:function(t,e){t.exports="/_next/static/images/space_station-bc9ed29f2c863b14e4263122afdc0460.png"},iXZr:function(t,e){t.exports="/_next/static/images/resort-486bd9b1e71ce05cf8a9ed5101f549ec.png"},nJbZ:function(t,e){t.exports="/_next/static/images/cluster-548f8d37864bc3bfa6efafea8daf3a6f.png"},pscC:function(t,e){t.exports="/_next/static/images/fantasy_town-30ffe4d466bf4995284296c855b5a9c2.png"},tRbT:function(t,e,n){"use strict";var o=n("Ff2n"),i=n("wx14"),r=n("q1tI"),a=(n("17x9"),n("iuhU")),s=n("H2TA"),c=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var u=r.forwardRef((function(t,e){var n=t.alignContent,s=void 0===n?"stretch":n,c=t.alignItems,l=void 0===c?"stretch":c,p=t.classes,u=t.className,d=t.component,f=void 0===d?"div":d,v=t.container,m=void 0!==v&&v,h=t.direction,g=void 0===h?"row":h,w=t.item,b=void 0!==w&&w,x=t.justify,y=void 0===x?"flex-start":x,_=t.lg,O=void 0!==_&&_,T=t.md,E=void 0!==T&&T,j=t.sm,S=void 0!==j&&j,N=t.spacing,k=void 0===N?0:N,B=t.wrap,C=void 0===B?"wrap":B,P=t.xl,W=void 0!==P&&P,R=t.xs,H=void 0!==R&&R,L=t.zeroMinWidth,z=void 0!==L&&L,I=Object(o.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=Object(a.a)(p.root,u,m&&[p.container,0!==k&&p["spacing-xs-".concat(String(k))]],b&&p.item,z&&p.zeroMinWidth,"row"!==g&&p["direction-xs-".concat(String(g))],"wrap"!==C&&p["wrap-xs-".concat(String(C))],"stretch"!==l&&p["align-items-xs-".concat(String(l))],"stretch"!==s&&p["align-content-xs-".concat(String(s))],"flex-start"!==y&&p["justify-xs-".concat(String(y))],!1!==H&&p["grid-xs-".concat(String(H))],!1!==S&&p["grid-sm-".concat(String(S))],!1!==E&&p["grid-md-".concat(String(E))],!1!==O&&p["grid-lg-".concat(String(O))],!1!==W&&p["grid-xl-".concat(String(W))]);return r.createElement(f,Object(i.a)({className:A,ref:e},I))})),d=Object(s.a)((function(t){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return c.forEach((function(o){var i=t.spacing(o);0!==i&&(n["spacing-".concat(e,"-").concat(o)]={margin:"-".concat(p(i,2)),width:"calc(100% + ".concat(p(i),")"),"& > $item":{padding:p(i,2)}})})),n}(t,"xs"),{},t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var o={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var i="".concat(Math.round(t/12*1e8)/1e6,"%");o[e]={flexBasis:i,flexGrow:0,maxWidth:i}}else o[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(t,o):t[e.breakpoints.up(n)]=o}(e,t,n),e}),{}))}),{name:"MuiGrid"})(u);e.a=d},uuth:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return _}));var o=n("1TsT"),i=(n("17x9"),n("q1tI")),r=n.n(i),a=n("TOwV");function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e){var n,o=(n=t,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"===typeof o)return o;var i=function(t){if("%"===t.slice(-1))return parseFloat(t.slice(0,-1))/100}(t);return"number"===typeof i?i*e:void 0}var d="above",f="inside",v="below",m="invisible";function h(t){return"string"===typeof t.type}var g,w="<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.";var b=[];function x(t){b.push(t),g||(g=setTimeout((function(){var t;for(g=null;t=b.shift();)t()}),0));var e=!0;return function(){if(e){e=!1;var n=b.indexOf(t);-1!==n&&(b.splice(n,1),!b.length&&g&&(clearTimeout(g),g=null))}}}var y={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},_=function(e){function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=p(this,c(n).call(this,t))).refElement=function(t){e._ref=t},e}var i,g,b;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(n,e),i=n,(g=[{key:"componentDidMount",value:function(){var t=this;n.getWindow()&&(this.cancelOnNextTick=x((function(){t.cancelOnNextTick=null;var e=t.props,n=e.children;e.debug,function(t,e){if(t&&!h(t)&&!e)throw new Error(w)}(n,t._ref),t._handleScroll=t._handleScroll.bind(t),t.scrollableAncestor=t._findScrollableAncestor(),t.scrollEventListenerUnsubscribe=Object(o.a)(t.scrollableAncestor,"scroll",t._handleScroll,{passive:!0}),t.resizeEventListenerUnsubscribe=Object(o.a)(window,"resize",t._handleScroll,{passive:!0}),t._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var t=this;n.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=x((function(){t.cancelOnNextTick=null,t._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){n.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var e=this.props,n=e.horizontal,o=e.scrollableAncestor;if(o)return function(e){return"window"===e?t.window:e}(o);for(var i=this._ref;i.parentNode;){if((i=i.parentNode)===document.body)return window;var r=window.getComputedStyle(i),a=(n?r.getPropertyValue("overflow-x"):r.getPropertyValue("overflow-y"))||r.getPropertyValue("overflow");if("auto"===a||"scroll"===a)return i}return window}},{key:"_handleScroll",value:function(t){if(this._ref){var e=this._getBounds(),n=function(t){return t.viewportBottom-t.viewportTop===0?m:t.viewportTop<=t.waypointTop&&t.waypointTop<=t.viewportBottom?f:t.viewportTop<=t.waypointBottom&&t.waypointBottom<=t.viewportBottom?f:t.waypointTop<=t.viewportTop&&t.viewportBottom<=t.waypointBottom?f:t.viewportBottom<t.waypointTop?v:t.waypointTop<t.viewportTop?d:m}(e),o=this._previousPosition,i=this.props,r=(i.debug,i.onPositionChange),a=i.onEnter,s=i.onLeave,c=i.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var l={currentPosition:n,previousPosition:o,event:t,waypointTop:e.waypointTop,waypointBottom:e.waypointBottom,viewportTop:e.viewportTop,viewportBottom:e.viewportBottom};r.call(this,l),n===f?a.call(this,l):o===f&&s.call(this,l),c&&(o===v&&n===d||o===d&&n===v)&&(a.call(this,{currentPosition:f,previousPosition:o,event:t,waypointTop:e.waypointTop,waypointBottom:e.waypointBottom,viewportTop:e.viewportTop,viewportBottom:e.viewportBottom}),s.call(this,{currentPosition:n,previousPosition:f,event:t,waypointTop:e.waypointTop,waypointBottom:e.waypointBottom,viewportTop:e.viewportTop,viewportBottom:e.viewportBottom}))}}}},{key:"_getBounds",value:function(){var t,e,n=this.props,o=n.horizontal,i=(n.debug,this._ref.getBoundingClientRect()),r=i.left,a=i.top,s=i.right,c=i.bottom,l=o?r:a,p=o?s:c;this.scrollableAncestor===window?(t=o?window.innerWidth:window.innerHeight,e=0):(t=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,e=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var d=this.props,f=d.bottomOffset;return{waypointTop:l,waypointBottom:p,viewportTop:e+u(d.topOffset,t),viewportBottom:e+t-u(f,t)}}},{key:"render",value:function(){var t=this,e=this.props.children;return e?h(e)||Object(a.isForwardRef)(e)?r.a.cloneElement(e,{ref:function(n){t.refElement(n),e.ref&&("function"===typeof e.ref?e.ref(n):e.ref.current=n)}}):r.a.cloneElement(e,{innerRef:this.refElement}):r.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&s(i.prototype,g),b&&s(i,b),n}(r.a.PureComponent);_.above=d,_.below=v,_.inside=f,_.invisible=m,_.getWindow=function(){if("undefined"!==typeof window)return window},_.defaultProps=y,_.displayName="Waypoint"}).call(this,n("yLpj"))},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",1,2,0,3,4]]]);