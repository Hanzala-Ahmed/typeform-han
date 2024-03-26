"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6720],{56720:function(e,n,t){t.d(n,{Z:function(){return U}});var i,o,r=t(93128),s=t(91072),a=t(52717),c=t(67294),l=t(45697),u=t.n(l),p=t(24754),f=t(73292),d=t(81180),h=t(8186);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach(function(n){(0,d.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var m=(i={},(0,f._)(i,s.LANGUAGE_CODES.english,"English"),(0,f._)(i,s.LANGUAGE_CODES.spanish,"Espa\xf1ol"),i),b=(o={},(0,f._)(o,s.LANGUAGE_CODES.french,"Fran\xe7ais"),(0,f._)(o,s.LANGUAGE_CODES.german,"Deutsch"),o),O={positive:h.NeutralColors.Grey700,negative:h.NeutralColors.White},w={positive:h.NeutralColors.White,negative:h.NeutralColors.Grey500},C=v(v({},m),b);Object.keys(C);var y={TOP:"top",BOTTOM:"bottom"},x=t(28913),j=t(86969),k=t(78384),I=k.ZP.div.withConfig({componentId:"sc-saqyu6-0"}).withConfig({componentId:"sc-a9e82213-0"})(["display:flex;"]),P=k.ZP.span.withConfig({componentId:"sc-saqyu6-1"}).withConfig({componentId:"sc-a9e82213-1"})(["color:",";font-size:",";line-height:",";font-weight:",";&:hover{color:",";}"],function(e){return e.palette===a.YI.Positive?O.positive:O.negative},x.JB.xSmall,x.Nv.large,x.Ue.regular,function(e){return e.palette===a.YI.Positive?h.NeutralColors.Grey500:O.positive}),L=k.ZP.div.withConfig({componentId:"sc-saqyu6-2"}).withConfig({componentId:"sc-a9e82213-2"})(["margin-right:8px;line-height:0;"]),N=k.ZP.div.withConfig({componentId:"sc-saqyu6-3"}).withConfig({componentId:"sc-a9e82213-3"})(["line-height:0;margin-left:4px;"]),E=k.ZP.div.withConfig({componentId:"sc-saqyu6-4"}).withConfig({componentId:"sc-a9e82213-4"})(["line-height:0;position:relative;"]),S="#f0f0f0",q=(0,k.ZP)(I).withConfig({componentId:"sc-saqyu6-5"}).withConfig({componentId:"sc-a9e82213-5"})(["appearance:none;margin:0;border:none;max-width:100%;text-align:left;color:inherit;cursor:pointer;min-height:32px;background-color:",";&:hover,&:focus[data-focus-visible]{background-color:",";}text-decoration:none;outline:none;width:100%;&[aria-disabled='true']{pointer-events:none;cursor:default;}&:hover{text-decoration:none;}"],function(e){return e.isFirstLanguageSelected?S:w.positive},S),G=(0,k.ZP)(P).withConfig({componentId:"sc-saqyu6-6"}).withConfig({componentId:"sc-a9e82213-6"})(["color:",";line-height:2.4;font-weight:200;font-size:",";padding:6px 23px;"],h.NeutralColors.Ink,x.JB.small),_=k.ZP.button.withConfig({componentId:"sc-saqyu6-7"}).withConfig({componentId:"sc-a9e82213-7"})(["background:none;border:none;padding:0;font:inherit;cursor:pointer;outline:none;display:flex;align-items:center;color:",";&:hover{color:",";}"],function(e){return O[e.palette]},h.NeutralColors.Grey500),R=k.ZP.div.withConfig({componentId:"sc-saqyu6-8"}).withConfig({componentId:"sc-a9e82213-8"})(["background-color:",";border-radius:8px;box-shadow:",";padding:8px 0;position:absolute;z-index:1;pointer-events:none;transform:scale(0.85);transform-origin:bottom left;will-change:transform,opacity;visibility:hidden;opacity:0;transition:transform 150ms ease-in,opacity 150ms ease-in,visibility 150ms ease-in;",";",""],h.NeutralColors.White,j.g.medium,function(e){return e.position===y.TOP?"bottom: 2rem":"top: 2rem"},function(e){return e.isOpen&&(0,k.iv)(["pointer-events:initial;opacity:1;visibility:visible;transform:scale(1);"])}),Z=t(85893),D=function(e){var n=e.options,t=e.isOpen,i=e.setIsOpen,o=e.onLanguageSwitcherOptionClick,s=e.position,a=(0,r._)((0,c.useState)(!0),2),l=a[0],u=a[1],p=(0,c.useCallback)(function(){return i(!1)},[i]);(0,c.useEffect)(function(){return document.addEventListener("click",p),function(){document.removeEventListener("click",p)}},[p]);var f=(0,c.useCallback)(function(e){e.currentTarget.focus({preventScroll:!0}),u(!1)},[]),d=(0,c.useCallback)(function(e){e.currentTarget.blur(),u(!1)},[]),h=(0,c.useCallback)(function(e){return function(n){o({option:e,event:n})}},[o]);return(0,Z.jsx)(R,{role:"menu",isOpen:t,position:s,children:n.map(function(e,n){var t=e.href,i=e.label,o=e.locale,r=Object.keys(b).includes(o)?"noindex,nofollow":void 0;return(0,Z.jsx)(q,{as:"a",href:t,onClick:h({href:t,label:i,locale:o}),onMouseEnter:f,onMouseLeave:d,isFirstLanguageSelected:l&&0===n,role:"menuitem","data-testid":"language-item",rel:r,children:(0,Z.jsx)(G,{href:t,children:i},o)},i)})})};D.propTypes={options:u().arrayOf(u().shape({locale:u().string,label:u().string,href:u().string}).isRequired).isRequired,isOpen:u().bool.isRequired,position:u().oneOf(Object.values(y)).isRequired,setIsOpen:u().func.isRequired,onLanguageSwitcherOptionClick:u().func.isRequired},D.displayName="LanguagesMenu";var T=function(e){var n=O[e.palette];return(0,Z.jsx)("svg",{fill:"none",height:"5",viewBox:"0 0 9 5",width:"9",xmlns:"http://www.w3.org/2000/svg",children:(0,Z.jsx)("path",{clipRule:"evenodd",d:"M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z",fill:n,fillRule:"evenodd"})})};T.displayName="CaretDown",T.propTypes={palette:u().oneOf(a.rY).isRequired};var A=(0,c.memo)(T),M=function(){var e=h.NeutralColors.Grey700;return(0,Z.jsx)("svg",{height:"17",viewBox:"0 0 20 20",width:"17",xmlns:"http://www.w3.org/2000/svg",children:(0,Z.jsx)("path",{d:"M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z",fill:e,fillRule:"evenodd"})})};M.displayName="Globe",M.propTypes={palette:u().oneOf([a.YI.Positive,a.YI.Negative]).isRequired};var Y=(0,c.memo)(M),z=function(e){var n=e.pageLocales,t=e.onLanguageSwitcherOptionClick,i=e.position,o=e.palette,a=(0,c.useRef)(),l=(0,r._)((0,c.useState)(!1),2),u=l[0],f=l[1],d=(0,p.Hv)().locale,h=(0,c.useCallback)(function(e){return Object.keys(e).map(function(t){return{locale:t,label:e[t],href:(n.find(function(e){return e.title===t})||{}).href||(t===s.LANGUAGE_CODES.english?"/":"/".concat(t))}})},[n]),g=(0,c.useMemo)(function(){var e=n.map(function(e){return e.title}),t=Object.fromEntries(Object.entries(m).filter(function(n){var t=(0,r._)(n,1)[0];return e.includes(t)})),i=Object.keys(b).find(function(e){return e===d});return i&&(t[i]=b[i]),h(t)},[h,d,n]),v=(0,c.useCallback)(function(e){e.stopPropagation(),f(function(e){return!e})},[]);return(0,Z.jsxs)(E,{children:[(0,Z.jsx)(D,{options:g,onLanguageSwitcherOptionClick:t,isOpen:u,setIsOpen:f,triggerRef:a,position:i}),(0,Z.jsxs)(_,{onClick:v,ref:a,children:[(0,Z.jsx)(L,{children:(0,Z.jsx)(Y,{palette:o})}),(0,Z.jsx)(P,{palette:o,children:C[d]}),(0,Z.jsx)(N,{children:(0,Z.jsx)(A,{palette:o})})]})]})};z.displayName="LanguageSwitcher",z.propTypes={pageLocales:u().arrayOf(u().shape({title:u().oneOf(Object.keys(C)),href:u().string})).isRequired,position:u().oneOf(Object.values(y)),palette:u().oneOf(a.rY),onLanguageSwitcherOptionClick:u().func.isRequired},z.defaultProps={position:y.TOP,palette:a.YI.Positive};var U=(0,c.memo)(z)}}]);
//# sourceMappingURL=6720-4db0e17be93a37c8.js.map