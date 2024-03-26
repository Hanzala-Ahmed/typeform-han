"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5568],{5568:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(85893),i=n(57427),o=n(67294),a=n(9008),s=n.n(a),c=n(45697),l=n.n(c),p=n(47328),u=n(91072),g=n(53353),d=n(91801),m=function(e){var t=e.currentUrl,n=e.locales,r=(0,o.useMemo)(function(){return n.map(function(e){return{href:(0,d.toCanonicalURL)(e.href),hreflang:e.title.toLowerCase()}})},[n]),i=(0,o.useMemo)(function(){var e,n=null!==(e=r.find(function(e){return e.hreflang===u.DEFAULT_LANGUAGE_CODE}))&&void 0!==e?e:r[0];return n?{href:n.href,hreflang:u.X_DEFAULT_LOCALE}:{href:(0,d.toCanonicalURL)(t),hreflang:u.X_DEFAULT_LOCALE}},[t,r]);return(0,o.useMemo)(function(){return(0,g._)(r).concat([i])},[i,r])},h=function(e){var t=e.currentUrl,n=e.hrefLangLinks,i=m({currentUrl:t,locales:e.locales}),a=(0,o.useMemo)(function(){return null!=n?n:i},[n,i]),s=new Set([u.LANGUAGE_CODES.german,u.LANGUAGE_CODES.french]);return a.filter(function(e){var t=e.hreflang;return!s.has(t)}).map(function(e){return(0,r.jsx)("link",{href:e.href,hrefLang:e.hreflang,rel:"alternate","data-testid":"href-lang-link"},"".concat(e.hreflang,":").concat(e.href))})};h.displayName="HrefLangLinks",h.defaultProps={hrefLangLinks:null,locales:[]},h.propTypes={currentUrl:l().string,hrefLangLinks:l().arrayOf(l().shape({href:l().string,hreflang:l().string})),locales:l().arrayOf(i.pC)};var f=n(85001),y=n(98358),w=function(e){var t=e.description,n=e.publisher,i=e.canonical,o=e.currentUrl,a=e.noIndex,s=e.isUsingContentfulImageAsset,c=[];return c.push((0,r.jsx)("meta",{charSet:"utf-8"},"charset")),c.push((0,r.jsx)("link",{href:(0,y.k)("manifest.json"),rel:"manifest"},"manifest")),c.push((0,r.jsx)("link",{href:(0,d.toCanonicalURL)(i||o),rel:"canonical"},"canonical")),c.push((0,r.jsx)("link",{href:(0,d.toCanonicalURL)(i||o),media:"handheld",rel:"alternate"},"handheld")),c.push((0,r.jsx)("meta",{content:"width=device-width, initial-scale=1.0",name:"viewport"},"viewport")),t&&c.push((0,r.jsx)("meta",{content:t,name:"description"},"description")),a&&c.push((0,r.jsx)("meta",{content:"noindex, nofollow",name:"robots"},"robots")),n&&c.push((0,r.jsx)("link",{href:n,rel:"publisher"},"publisher")),s&&(c.push((0,r.jsx)("link",{href:f.IMAGE_CDN_URL,rel:"preconnect"},"contentful-preconnect")),c.push((0,r.jsx)("link",{href:f.IMAGE_CDN_URL,rel:"dns-prefetch"},"contentful-dns-prefetch"))),c.push((0,r.jsx)("meta",{content:"7wr2jyy3v93ogsfohbxtdtu6ty5zlm",name:"facebook-domain-verification"},"facebook-domain-verification")),c};w.defaultProps={noIndex:!1,isUsingContentfulImageAsset:!1,description:"",hreflangEs:"",hreflangEn:"",publisher:"",canonical:"",currentUrl:""},w.propTypes={description:l().string,hreflangEs:l().string,hreflangEn:l().string,publisher:l().string,canonical:l().string,currentUrl:l().string,noIndex:l().bool,isUsingContentfulImageAsset:l().bool};var b="website",k=function(e){return e.split("-").map(function(e,t){return 1===t?e.toUpperCase():e}).join("_")},x=function(e){var t=e.availableLocales,n=void 0===t?[]:t,i=e.cardCreator,o=e.cardDescription,a=e.cardImage,s=e.cardSite,c=e.cardTitle,l=e.ogDescription,p=e.ogImage,u=e.ogImageWidth,m=e.ogImageHeight,h=e.ogImageAlt,f=e.ogLocale,y=e.ogSiteName,w=e.ogTitle,x=e.ogType,v=void 0===x?b:x,L=e.currentUrl,_=[];return v&&_.push((0,r.jsx)("meta",{content:v,property:"og:type"},"og:type")),f&&_.push((0,r.jsx)("meta",{content:k(f),property:"og:locale"},"og:locale")),n.length>0&&(_=(0,g._)(_).concat((0,g._)(n.filter(function(e){return 0!==e.locale.indexOf(f)}).map(function(e){return(0,r.jsx)("meta",{content:k(e.locale),property:"og:locale:alternate"},e.locale)})))),f&&_.push((0,r.jsx)("meta",{content:f.toLowerCase(),httpEquiv:"content-language"},"content-language")),w&&_.push((0,r.jsx)("meta",{content:w,property:"og:title"},"og:title")),l&&_.push((0,r.jsx)("meta",{content:l,property:"og:description"},"og:description")),p&&(_.push((0,r.jsx)("meta",{content:p,property:"og:image"},"og:image")),_.push((0,r.jsx)("meta",{content:p,property:"og:image:secure_url"},"og:image:secure_url"))),u&&_.push((0,r.jsx)("meta",{content:u,property:"og:image:width"},"og:image:width")),m&&_.push((0,r.jsx)("meta",{content:m,property:"og:image:height"},"og:image:height")),h&&_.push((0,r.jsx)("meta",{content:h,property:"og:image:alt"},"og:image:alt")),L&&_.push((0,r.jsx)("meta",{content:(0,d.toCanonicalURL)(L),property:"og:url"},"og:url")),y&&_.push((0,r.jsx)("meta",{content:y,property:"og:site_name"},"og:site_name")),c&&(_.push((0,r.jsx)("meta",{content:"summary_large_image",property:"twitter:card"},"twitter:card")),_.push((0,r.jsx)("meta",{content:c,property:"twitter:title"},"twitter:title"))),o&&_.push((0,r.jsx)("meta",{content:o,property:"twitter:description"},"twitter:description")),a&&_.push((0,r.jsx)("meta",{content:a,property:"twitter:image"},"twitter:image")),s&&_.push((0,r.jsx)("meta",{content:s,name:"twitter:site"},"twitter:site")),i&&_.push((0,r.jsx)("meta",{content:i,name:"twitter:creator"},"twitter:creator")),_};x.propTypes={availableLocales:l().arrayOf(i.pC),cardCreator:l().string,cardDescription:l().string,cardImage:l().string,cardSite:l().string,cardSummary:l().string,cardTitle:l().string,ogDescription:l().string,ogImage:l().string,ogImageWidth:l().oneOfType([l().number,l().string]),ogImageHeight:l().oneOfType([l().number,l().string]),ogImageAlt:l().string,ogLocale:l().string,ogSiteName:l().string,ogTitle:l().string,ogType:l().string,ogUrl:l().string},x.defaultProps={availableLocales:[],cardCreator:"",cardDescription:"",cardImage:"",cardSite:"",cardSummary:"",cardTitle:"",ogDescription:"",ogImage:"",ogImageWidth:"",ogImageHeight:"",ogImageAlt:"",ogLocale:"",ogSiteName:"",ogTitle:"",ogType:b,ogUrl:""};var v={__html:JSON.stringify(JSON.parse('{"@context":"https://schema.org","@type":"WebSite","founder":[{"@type":"Person","name":"David Okuniev","url":"https://www.linkedin.com/in/david-okuniev-a845b66/","description":"David Okuniev","@id":"https://www.linkedin.com/in/david-okuniev-a845b66/"},{"@type":"Person","name":"Robert Mu\xf1oz","description":"Robert Mu\xf1oz","url":"https://www.linkedin.com/in/robertmunoztypeform/","@id":"https://www.linkedin.com/in/robertmunoztypeform/"}],"subjectOf":{"@type":"VideoObject","name":"Get Conversational Video Object","uploadDate":"2018-06-01T00:00:00+0000","description":"Get Conversation Video","embedUrl":"https://typeform-2.wistia.com/medias/oayizyy8pl","contentUrl":"https://typeform-2.wistia.com/medias/oayizyy8pl","duration":"PT28S","thumbnailUrl":"https://typeform-2.wistia.com/medias/oayizyy8pl","@id":"https://typeform-2.wistia.com/medias/oayizyy8pl"},"url":"https://www.typeform.com/","areaServed":[{"@type":"Country","name":"Australia","@id":"https://en.wikipedia.org/wiki/Australia"},{"@type":"Country","name":"United States","@id":"https://en.wikipedia.org/wiki/United_States"},{"@type":"Country","name":"UK","url":"https://en.wikipedia.org/wiki/United_Kingdom","@id":"https://en.wikipedia.org/wiki/United_Kingdom"},{"@type":"Country","name":"Canada","url":"https://en.wikipedia.org/wiki/Canada","@id":"https://en.wikipedia.org/wiki/Canada"}],"additionalType":["https://en.wikipedia.org/wiki/Form_(HTML)","https://en.wikipedia.org/wiki/Software_as_a_service","https://en.wikipedia.org/wiki/Typeform_(service)","https://en.wikipedia.org/wiki/Survey_data_collection#Online_surveys"],"sameAs":["https://www.facebook.com/typeform/","https://www.linkedin.com/company/typeform-com/","https://twitter.com/typeform","https://www.youtube.com/channel/UC2nRv6J0FsJVePJTLhUDKgg","https://www.instagram.com/typeform/"],"description":"The versatile data collection tool for professionals.  Typeform makes asking easy & answering refreshing.","logo":{"@type":"ImageObject","url":"https://d2zuht7lq201qy.cloudfront.net/dist/img/icons/favicon-32x32.png","height":"32","width":"32","name":"Typeform Logo","@id":"https://d2zuht7lq201qy.cloudfront.net/dist/img/icons/favicon-32x32.png"},"address":{"@type":"PostalAddress","streetAddress":"Carrer Bac de Roda  163, Local 1","addressLocality":"Barcelona","postalCode":"08018","addressCountry":"Spain"},"contactPoint":{"@type":"ContactPoint","areaServed":[{"@id":"https://en.wikipedia.org/wiki/United_States"},{"@id":"https://en.wikipedia.org/wiki/United_Kingdom"},{"@id":"https://en.wikipedia.org/wiki/Canada"},{"@id":"https://en.wikipedia.org/wiki/Australia"}],"availableLanguage":"https://en.wikipedia.org/wiki/English_language","name":"Contact Point Typeform","contactType":"sales","@id":"https://hellofrom.typeform.com/to/PGWNkN?source=PublicSite"},"name":"Typeform","email":"social@typeform.com","@id":"https://www.typeform.com/"}'))},L=function(){return(0,r.jsx)("script",{dangerouslySetInnerHTML:v,type:"application/ld+json"})},_=n(8186),j=n(76341),C=n(67462),R=n(93128),T=/^<(h[1-6]+).*>(.*)<\/\1>/i,U=/faq/i,A=/<script[^>]*>(?:(?!<\/script>)[^])*<\/script>/gi,O=function(e){var t=[],n=-1;return e.split("\n").forEach(function(e){var r,i=(0,R._)(null!==(r=e.trim().match(T))&&void 0!==r?r:[],3),o=(i[0],i[1],i[2]);o?t[++n]={"@type":"Question",name:o,acceptedAnswer:{"@type":"Answer",text:""}}:n>=0&&(t[n].acceptedAnswer.text+=e)}),{"@context":"https://schema.org","@type":"FAQPage",mainEntity:t.map(function(e){return(0,C._)((0,j._)({},e),{acceptedAnswer:(0,C._)((0,j._)({},e.acceptedAnswer),{text:e.acceptedAnswer.text.replace(A,"")})})}).filter(function(e){return""!==e.acceptedAnswer.text.trim()})}},S=function(e){var t=e.article;if(!t||!U.test(t.label_names.join(" ")))return null;var n={__html:JSON.stringify(O(t.body))};return(0,r.jsx)("script",{"data-testid":"faq-structure",dangerouslySetInnerHTML:n,type:"application/ld+json"},"faq-structure")};S.propTypes={article:l().shape({label_names:l().array,body:l().string})},S.defaultProps={article:null},S.displayName="FaqStructure";var q=(0,o.memo)(S),I=function(e){var t=e.availableLocales,n=e.currentUrl,i=e.hrefLangLinks,a=e.title,c=e.titleSuffix,l=e.isRetainActive,u=e.article,g=(0,o.useMemo)(function(){return w(e)},[e]),d=h({currentUrl:n,hrefLangLinks:i,locales:t}),m=(0,o.useMemo)(function(){return[(0,r.jsx)("link",{href:"/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"},"apple-touch-icon"),(0,r.jsx)("link",{href:"/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"},"favicon-32x32"),(0,r.jsx)("link",{href:"/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"},"favicon-16x16"),(0,r.jsx)("link",{href:"/site.webmanifest",rel:"manifest"},"manifest"),(0,r.jsx)("link",{color:_.NeutralColors.Ink,href:"/safari-pinned-tab.svg",rel:"mask-icon"},"safari-icon"),(0,r.jsx)("meta",{content:_.NeutralColors.Ink,name:"msapplication-TileColor"},"msapplication-TileColor"),(0,r.jsx)("meta",{content:_.NeutralColors.Ink,name:"theme-color"},"theme-color")]},[]),f=(0,o.useMemo)(function(){return x(e)},[e]);return(0,r.jsxs)(s(),{children:[(0,r.jsx)(p.h0,{}),(0,r.jsx)("title",{children:"".concat(a).concat(c||"")},"title"),g,d,m,f,(0,r.jsx)(L,{}),l&&(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              (function(i,s,o,g,r,a,m){i[o]=i[o]||function(){(i[o].q=i[o].q||[]).push(arguments)};\n              a=s.createElement(g);m=s.getElementsByTagName(g)[0];a.async=1;a.src=r+'?auth='+\n              s.getElementById(o+'-js').getAttribute('data-pw-auth');m.parentNode.insertBefore(a,m);\n              })(window,document,'profitwell','script','https://public.profitwell.com/js/profitwell.js');\n              profitwell('start', {});\n              "},"data-pw-auth":"3e9cfb440db56df5e327e141de27a4f6",id:"profitwell-js"}),(0,r.jsx)(q,{article:u})]})};I.propTypes={availableLocales:l().arrayOf(i.pC),hrefLangLinks:l().arrayOf(l().object),title:l().string,titleSuffix:l().string,isRetainActive:l().bool,currentUrl:l().string,article:l().object},I.defaultProps={availableLocales:[],hrefLangLinks:null,title:"",titleSuffix:"",currentUrl:"",cardCreator:"@typeform",cardSite:"@typeform",ogSiteName:"Typeform",publisher:"https://plus.google.com/+Typeform",isRetainActive:!1,article:null},I.displayName="DocumentHead";var E=I},57427:function(e,t,n){n.d(t,{$X:function(){return R},At:function(){return z},Bf:function(){return T},Ct:function(){return k},L9:function(){return w},LA:function(){return x},M1:function(){return f},P3:function(){return g},RA:function(){return j},Uv:function(){return u},Vb:function(){return S},WT:function(){return d},_F:function(){return _},bL:function(){return p},hi:function(){return h},iK:function(){return U},jS:function(){return L},kh:function(){return q},pC:function(){return m},rS:function(){return O},si:function(){return C},uT:function(){return b},x0:function(){return N},xA:function(){return v}});var r=n(45697),i=n.n(r),o=n(43217),a=n(36032),s=n(74293),c=n(63792),l=n(91072).DEFAULT_LANGUAGE_CODE,p=i().oneOf(["left","center","right"]),u=i().oneOf(["alternateRightToLeft","alternateLeftToRight","left","right"]),g=i().oneOf(["none","bulleted","numbered"]),d=i().oneOf(["h1","h2","h3","h4","h5","h6"]),m=i().shape({locale:i().string,href:i().string,title:i().string}),h=i().shape({content:i().oneOfType([i().object,i().arrayOf(i().object)]),data:i().object,marks:i().array,nodeType:i().string,value:i().string}),f={contentType:i().string,details:i().shape({size:i().number,image:i().shape({width:i().number,height:i().number})}),fileName:i().string,url:i().string},y=i().oneOf(["_self","_blank","_parent","_top"]),w={background:i().string,buttonSize:i().string,contentTextSize:i().number,isInlined:i().bool,text:i().string.isRequired,textColor:i().string,target:y,url:i().string.isRequired},b=i().shape({contentType:i().string,html:h,data:i().object}),k={background:i().string,containerSizeOverride:i().number,contentAlignment:p,contentTextSize:i().number,description:i().oneOfType([b,i().bool]),descriptionAlignment:p,heading:i().oneOfType([i().string,i().bool]),headingAlignment:p,headingColor:i().string,headingLevel:d,lazyLoadAssets:i().bool,padY:i().number,textColor:i().string},x={id:i().string,props:i().shape({asset:i().shape(f),cta:i().shape({id:i().string,props:i().shape(w)}),description:b,heading:i().string,headingLevel:d})},v={asset:i().shape(f),description:b,title:i().string,url:i().string};i().shape({fields:i().object});var L={availableLocales:i().arrayOf(m),pageContent:i().object,locale:i().oneOf(s.LANGUAGES),language:i().oneOf(s.LANGUAGES),userCountryCode:i().string},_={availableLocales:[],locale:l,language:l,pageContent:{},userCountryCode:null},j={content:i().shape({url:i().string.isRequired})},C=i().shape({slug:i().string.isRequired,name:i().string.isRequired,bio:b});i().shape({slug:i().string.isRequired,name:i().string.isRequired,color:i().string.isRequired});var R={content:i().shape({text:i().string.isRequired})},T={content:i().shape({title:i().string,wistiaVideoId:i().string,youtubeVideoId:i().string})},U={color:i().string,content:h},A={color:i().string.isRequired,content:h},O={content:i().shape({image:i().shape(o.mI)}),disableLazyLoad:i().bool},S={content:i().shape({audioFile:o.Di})},q={content:i().shape({bookmarkSlug:i().string.isRequired,sectionTitle:i().string,sectionTitleColor:i().string,backgroundImage:i().shape(o.mI),backgroundColor:i().string,noBackground:i().bool}),onComponentInView:i().func};i().arrayOf(i().shape({slug:i().string.isRequired,author:C,title:i().string.isRequired,subtitle:i().string,mainImage:i().shape(o.mI),readTime:i().shape({text:i().string.isRequired})}));var I={text:i().string.isRequired,url:i().string.isRequired,isPrimary:i().bool,tagline:i().string,uppercase:i().bool,verticalPadding:i().number,borderWidth:i().number,borderRadius:i().number,fontWeight:i().number},E={color:i().string.isRequired,content:i().shape(I)},N=i().shape({blocks:i().arrayOf(i().oneOfType([h,i().shape(E),i().shape(U),i().shape(o._m),i().shape(T),i().shape(j),i().shape(a.T),i().shape(A),i().shape(O),i().shape(S),i().shape(q),i().shape(R)]))}),P=i().shape({amount:i().number.isRequired,base_amount:i().number.isRequired,scale:i().number.isRequired,tax_amount:i().number.isRequired,tax_rate:i().number.isRequired,currency:i().shape({code:i().string.isRequired}).isRequired,policy:i().string}),D=i().shape({price:P.isRequired,discountedPrice:P.isRequired}),z=i().shape({pricing:i().shape({monthly:D.isRequired,yearly:D.isRequired})});i().shape({item:i().string.isRequired,item_type:i().string.isRequired,category:i().oneOf(c.aA).isRequired,typeform_version:i().oneOf(c.Kr).isRequired,typeform_property:i().oneOf(c.rl).isRequired,label:i().string,value:i().string,location:i().string})},91801:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"toCanonicalURL",{enumerable:!0,get:function(){return i}});var r=(0,n(10260)._(n(11752)).default)().publicRuntimeConfig,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=r.APP_PUBLIC_BASE_URL,n=new URL(e,t);n.protocol="https";var i=n.origin,o=decodeURIComponent(n.pathname);return i+"".concat(o,"/").replace(/\/*$/,"/")};e.exports={isRedirectedFromTypeformNotFound:function(e){var t=new URL(e);return!!["typeform-deleted","typeform-incorrectURL"].includes(t.searchParams.get("utm_content"))||t.searchParams.has("not_found")},toCanonicalURL:i}}}]);
//# sourceMappingURL=5568-a8fd7b796601e322.js.map