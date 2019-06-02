(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{162:function(e,t,a){var r;e.exports=(r=a(166))&&r.default||r},163:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(33),c=a.n(l),o=(a(162),n.a.createContext({})),d=function(e){return n.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(144);function u(e){var t=e.children,a=e.to;return n.a.createElement(c.a,{to:a,className:"btn"},t)}u.propTypes={children:s.a.node.isRequired,to:s.a.string.isRequired};a(34);var m=a(74),f=a.n(m);a(145);function p(e){var t=e.children,a=e.display,r=e.level,i=f()(e,["children","display","level"]),s="h"+r,l="heading-"+(a||r);return n.a.createElement(s,Object.assign({},i,{className:l}),t)}p.propTypes={children:s.a.node.isRequired,level:s.a.number.isRequired,display:s.a.number};var h=p;a(146);function g(e){var t=e.action,a=e.description,r=e.img,i=e.image,s=e.subtitle,l=e.title,c=e.url,o=i||r&&n.a.createElement("img",{src:r,alt:l});return n.a.createElement("div",{className:"feature"},n.a.createElement("div",{className:"feature_wrap"},o&&n.a.createElement("div",{className:"feature_img"},o),n.a.createElement("div",{className:"feature_body"},l&&n.a.createElement(h,{level:3,display:3,className:"feature_title"},l),s&&n.a.createElement(h,{level:4,className:"feature_subtitle"},s),a&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),t&&c&&n.a.createElement("p",null,n.a.createElement("a",{href:c,className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer"},t)))))}g.defaultProps={action:"",description:"",img:"",image:null,subtitle:"",title:"",url:""},g.propTypes={action:s.a.string,description:s.a.string,img:s.a.string,image:s.a.element,subtitle:s.a.string,title:s.a.string,url:s.a.string};var v=g,y=a(174),b=a.n(y),E=(a(171),a(175)),S=a.n(E),w=a(7),N=a.n(w),z=a(176),M=a.n(z),R=(a(147),function(e){function t(t){var a;return(a=e.call(this,t)||this).sleep=function(e){for(var t=(new Date).getTime();(new Date).getTime()<t+e;);},a.onSubmit=function(){var e=S()(b.a.mark(function e(t){var r,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=t.target.yourmail.value||null){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,M()(r,{});case 7:n=e.sent,a.setState({showSuccess:!0}),a.setState({successMsg:n.msg}),a.setState({showError:!1}),a.setState({errorMsg:""}),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(4),a.setState({showSuccess:!1}),a.setState({successMsg:""}),a.setState({showError:!0}),a.setState({errorMsg:e.t0});case 20:case"end":return e.stop()}},e,null,[[4,14]])}));return function(t){return e.apply(this,arguments)}}(),a.state={showSuccess:!1,showError:!1,successMsg:"",errorMsg:""},a}return N()(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:"form"},n.a.createElement(h,{level:2,display:3},"Join our mailing list for event details!"),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("label",{className:"input-label",htmlFor:"mc-email"},"Email Address ",n.a.createElement("span",{className:"input-label-required","aria-hidden":"true"},"*")),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{name:"yourmail",type:"email",autoComplete:"email",className:"input-text",id:"mc-email"}),n.a.createElement("div",{className:"vh","aria-hidden":"true"},n.a.createElement("input",{type:"text",name:"b_06171f6f72f2a30896831ca94_43888fbe48",tabIndex:"-1",defaultValue:""})),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Subscribe")))),n.a.createElement("br",null),n.a.createElement("div",{className:this.state.showSuccess?"alert alert-success":"alert alert-success hideme",dangerouslySetInnerHTML:{__html:this.state.successMsg}}),n.a.createElement("div",{className:this.state.showError?"alert alert-danger":"alert alert-danger hideme",dangerouslySetInnerHTML:{__html:this.state.errorMsg}}))},t}(r.Component));a(148);var L=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(R,null),n.a.createElement("ul",{className:"footer_links"},n.a.createElement("li",null,"© ",(new Date).getFullYear()," Fog City Pack, LLC"),n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.facebook.com/fogcitypack/"},"Facebook")),n.a.createElement("li",null,n.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.instagram.com/fogcitypack/"},"Instagram"))))};function _(e){var t=e.children,a=e.to;return n.a.createElement(c.a,{to:a,className:"nav_item",activeClassName:"nav_item-active"},t)}_.propTypes={children:s.a.node.isRequired,to:s.a.string.isRequired};var k=_;a(149);function I(e){return n.a.createElement("nav",{className:"nav"},n.a.createElement("ul",{className:"nav_list"},n.a.createElement("li",{className:"nav_listItem"},n.a.createElement(k,{to:"/bios"},"Bios")),n.a.createElement("li",{className:"nav_listItem"},n.a.createElement(k,{to:"/events"},"Events")),n.a.createElement("li",{className:"nav_listItem"},n.a.createElement(k,{to:"/news"},"News"))))}I.propTypes={items:s.a.array},I.defaultProps={items:[]};var T=I,q=a(167),C=a.n(q);a(150);function O(e){var t=e.siteTitle;return n.a.createElement("header",{className:"header"},n.a.createElement(c.a,{className:"header_logo",to:"/"},n.a.createElement(C.a,null),n.a.createElement("span",{className:"vh"},t)),n.a.createElement(T,null))}O.propTypes={siteTitle:s.a.string},O.defaultProps={siteTitle:""};var x=O,j=a(168),P=(a(151),function(e){var t=e.children;return n.a.createElement(d,{query:"67665984",render:function(e){return n.a.createElement("div",{className:"page beta"},n.a.createElement("div",{className:"page_header"},n.a.createElement("div",{className:"page_container"},n.a.createElement(x,{siteTitle:e.site.siteMetadata.title}))),n.a.createElement("main",{className:"page_body"},n.a.createElement("div",{className:"page_container"},t)),n.a.createElement("div",{className:"page_footer"},n.a.createElement("div",{className:"page_container"},n.a.createElement(L,null))))},data:j})});P.propTypes={children:s.a.node.isRequired};var F=P;a(165),a(152);function V(e){var t=e.image,a=e.name,r=e.url;return n.a.createElement("a",{className:"grid_item",href:r,target:"_blank",rel:"noopener noreferrer"},t,n.a.createElement("span",{className:"vh"},a))}V.propTypes={image:s.a.element.isRequired,name:s.a.string.isRequired,url:s.a.string.isRequired};var W=V;a(153);function H(e){var t=e.children;return n.a.createElement("div",{className:"grid"},t)}H.propTypes={children:s.a.node.isRequired};var D=H;a(154);function G(e){var t=e.children,a=f()(e,["children"]);return n.a.createElement("div",Object.assign({className:"section"},a),t)}G.propTypes={children:s.a.node.isRequired};var J=G,B=a(169),U=a(177),A=a.n(U);function Q(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title,l=B.data.site,c=t||l.siteMetadata.description;return n.a.createElement(A.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}Q.defaultProps={lang:"en",meta:[],keywords:[],description:""},Q.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired};var Y=Q;a.d(t,"a",function(){return v}),a.d(t,"b",function(){return h}),a.d(t,"c",function(){return F}),a.d(t,"d",function(){return W}),a.d(t,"e",function(){return D}),a.d(t,"g",function(){return J}),a.d(t,"f",function(){return Y})},166:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(55),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},167:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,[r.createElement("path",{d:"M151.9 17.5l-.3 3.1 6.9.6-.2 2.9-6.9-.6-.5 5.6-3.2-.3 1.2-14.4 11 .9-.2 2.9-7.8-.7zM167.6 31.6c-4.4-.9-6.8-4.8-5.9-8.9.9-4 4.7-6.6 9.1-5.7 4.4.9 6.8 4.8 5.9 8.9-.9 4-4.7 6.6-9.1 5.7zm5.8-6.4c.5-2.4-.8-4.8-3.3-5.4-2.5-.5-4.7 1.1-5.2 3.5s.8 4.8 3.3 5.4c2.6.6 4.7-1 5.2-3.5zM183.9 36.3c-4.2-1.5-6-5.6-4.6-9.6 1.4-3.9 5.6-5.9 9.7-4.4 2.4.9 3.7 2.1 4.6 3.8l-2.7 1.6c-.7-1.3-1.5-2.1-3-2.7-2.2-.8-4.6.5-5.4 2.8-.9 2.5.1 4.9 2.5 5.8 1.1.4 2.2.5 3.1.2l.7-1.9-3-1.1.9-2.6 5.9 2.2-2.2 5.9c-1.8.7-4.1.9-6.5 0zM203.2 45.6c-3.7-2.2-4.7-6.6-2.6-10.2 2.1-3.5 6.5-4.9 10.3-2.6 2.3 1.4 3.3 3 3.8 4.8l-2.9 1c-.4-1.4-1.1-2.5-2.4-3.3-2.1-1.2-4.6-.4-5.9 1.8-1.3 2.1-.8 4.8 1.3 6 1.4.8 2.6.8 4.1.5l.7 2.8c-2.1.6-4 .6-6.4-.8zM210.3 49.9l8.4-11.7 2.6 1.9-8.4 11.7-2.6-1.9zM228 49.2l-7.5 8.8-2.4-2.1 7.5-8.8-3.3-2.9 1.9-2.2 9.1 7.8-1.9 2.2-3.4-2.8zM234.5 63.6l-4.2 3.9-2.2-2.3 4.2-3.9 2.6-10 2.5 2.7-1.9 6.5 6.6-1.4 2.5 2.6-10.1 1.9zM245.3 80l-1.3-2-3.6 2.4-1.7-2.7 12.1-7.9 3.2 4.9c1.9 2.9 1.3 5.7-1.1 7.4-2.9 1.8-5.8.6-7.6-2.1zm5.7-.6c1.2-.8 1.3-2 .4-3.4l-1.4-2-3.7 2.4 1.4 2.1c.9 1.3 2.2 1.6 3.3.9zM250 97.3l2.3-2.6-2.8-5.4-3.5.3-1.5-2.9 15.8-1.1 1.3 2.6-10.2 12.1-1.4-3zm7.6-8.8l-5 .4 1.7 3.4 3.3-3.8zM253.8 107.5c-1.4-4 .6-8.1 4.5-9.5 3.9-1.4 8.1.4 9.6 4.5.9 2.6.6 4.4-.2 6.1l-2.9-1.1c.6-1.4.8-2.7.3-4-.8-2.3-3.3-3.3-5.6-2.4-2.3.8-3.7 3.1-2.8 5.5.6 1.6 1.5 2.3 2.9 3l-1.2 2.6c-2.1-.8-3.6-2-4.6-4.7zM258.7 124.2l5-5.7-2.1-1.2-4.3 1-.7-3.1 14.1-3.2.7 3.1-6.2 1.4 7.4 4.3.8 3.7-7.3-4.4-6.8 7.8-.6-3.7z",key:0}),r.createElement("path",{d:"M142.8 259.3c-62.1 0-112.7-50.5-112.7-112.7S80.7 33.9 142.8 33.9s112.7 50.5 112.7 112.7S205 259.3 142.8 259.3zm0-222.6C82.2 36.7 32.9 86 32.9 146.6c0 60.6 49.3 109.9 109.9 109.9 60.6 0 109.9-49.3 109.9-109.9.1-60.6-49.2-109.9-109.9-109.9z",key:1}),r.createElement("path",{d:"M133.4 129.1h-.3c.1.2.2.2.3 0z",key:2}),r.createElement("path",{d:"M162.2 124c.5 0 1 .6 1.1 1.5.1.9-.2 1.7-.7 1.7-.5.1-1-.6-1.2-1.5-.1-.8.1-1.4.5-1.7-.1 0-.2 0-.3.1-2.9.5-21.6-5.3-27.4-7.6.3 3.8-.3 11.3-.9 12.5h.2c-1.3 4.7-3.3 11-4.9 13.7-2.5 4.3-18.2 22.3-20.9 25.9-2.7 3.5-7.4 19.8-8.7 23.7-.9 2.6-2.5 7.7-1.9 12.4-1.2 1.3-3.5 3.3-4.2 3.8-.9.6-1.6 1.9-1.3 3.1.3 1.1 1 2.6 2.3 2.5 1.3-.1 3.5-2.3 4.3-2.1.5.1 1.5-.1 2.4-.3 2.6 3 1.8 4 3.6 6.6-.7 1-1.3 1.9-1.5 2.3-.3.7-1.5 2.5.5 3.4 2 .9 19.7 4.8 21.4 4.4 1.8-.4 6.4.5 7.5.1 1.1-.4 2.7-1 2.5-2.1-.2-1.1-1.6-2.5-3.3-2.9-1.7-.4-1.5-.8-3.8-.8s-7.6.3-9.9-.4c-1.1-.3-2.5-2.2-2.2-3.1.1-.4.3-.8.5-1.2 5.1-1.6 10.7-4.1 11.8-4.9.2-.2.5-.4.7-.7 2 .4 3.4.7 3.9.6 1.6-.2 5.6.7 6.6.4 1-.3 2.4-.8 2.3-1.7-.1-1-1.3-2.2-2.8-2.6-1.5-.4-1.3-.7-3.3-.8-.9-.1-2.3-.1-3.8-.1.6-1.4 1-2.8.9-3.8.1-.1.2-.3.4-.4-.8-2.9-4.2-8.1-7.9-9.6 4.1.1 7.6 6.6 8.4 9.1 4.3-4.7 8.4-9.2 9.6-10.2 1.5-1.3 6.7-4.7 11.9-7.9.8 1.5 1.6 2.9 1.8 3.9.4 2.8 3.3 11.4 4.1 18.2.8 6.7 1.6 10.1 1.9 11.9.4 2.6 2.8 2.2 3.2 2.8.4.6 5 6.6 7.5 8.9.9.8 9.5.5 9.6-.2.2-1.1.4-1.5-.5-2.4-.9-.9-4.9-2-6.4-3.2-1.4-1.2-5.2-6.2-5.4-13-.4-4.7-2-17-3.2-21.5 1.4 3.8 3.1 15.3 3.6 21 1.3 1.5 2.8 2.9 3.8 3.7 1.8 1.5 8.8 1.1 9.2-.4.4-1.6-1.8-2.4-2.7-2.9-.9-.5-4.3-.1-5.1-.9-.8-.9-1.9-5-2.9-7.7-.9-2.8-1.2-10.4-3-15.3-1.3-3.6-.9-9.2-.8-13.1 4-5.2 7.3-12.6 7.8-14.7.8-2.9-1.4-13.7-3.8-17.7-2.3-4-6.4-10.3-9.6-18.2-.2-.4-.3-.8-.4-1.1-.3 0-.6.3-1.1.5zM162.7 101.2c.7-.6 2.7-.7 3.6-1 2.5 2.5 4.7 1.8 6.1.8.5-.3 1.1-1 2.1-.7 1 .3 4.8-.6 5.6-1.5.8-.8 3.3-4.7 3.6-5.6.3-1 1.2-2.2 1.6-3.1.2-.3.3-2.4-.7-3.1-.5-.4-1.6-.4-3.7-.8-.7-.1-1-.4-2-.5-4.3-.6-10.8-1.4-12.4-2.6-1.6-1.2-5.8-5.2-12.4-5.3-.7 0-1.3 0-1.9.1-.2-.9-.5-1.8-.8-2.3-.9-1.6-2.1-2.3-2-4.6 0-2.3.6-4.6 0-5.5-.6-.9-1.2-2.2-1.7-2.9-.5-.6-.8-1.1-1.1-.5-.3.6-.3 2-.1 2.8.2.5-.8 3.6-1.2 5.8.2 1.6.7 3.7 1.5 4.6 1.4 1.6 1.8 2.3 2 3.6-.4-1.4-1.5-2.5-2.4-3.3-.6-.5-1.2-2.7-1.4-4.4-.7-1.8-1.2-3.8-1.9-5.3-1.1-2.6-1.3-2.6-1.9-3.3-.6-.6-1.4-.8-1.7-.2-.2.6-.2 1 .2 1.2.4.2.2 4.5-.1 6-.3 1.5-1.6 6.8-1.9 8.7-.3 2-1 6.4-.3 7.2.4.4.7 1.2 1.1 1.8-1.1 2.7-2 5.3-2.3 6.2-.8 1.9-2.4 16.3-2.1 21.3 5.8 2.5 25.1 6.7 27.1 6.6.4 0 .8-.3 1.1-.6-.4-1.1-.8-2.1-1.2-3.2-.1-1.2-.2-2.3-.4-3.1-.3-1.3-.9-2.1-1.4-3.2 0-.2-.1-.3-.2-.5-.4-1-.6-2.2-.7-4.2 0-3.4 3.5-4.8 4.3-5.4zM212.1 138.8c-.1-1.3-.7-2.3-2-2.3-1.1 0-1.8.7-1.8 1.7 0 2.9 5.2 3 5.2 7.2 0 2.1-1.2 3.3-3.3 3.3-2 0-3.3-1.5-3.3-3.7h1.3c0 1.5.8 2.5 2.1 2.5 1.2 0 1.9-.8 1.9-2.1 0-3-5.2-3.3-5.2-7 0-1.8 1.3-3 3.1-3 1.9 0 3.1 1.3 3.2 3.5h-1.2zM216.8 135.5h5.6v1.2h-4.2v4.4h3.1v1.2h-3.1v6.2h-1.4v-13zM56.6 135.6l2.3 9.9 2.2-9.9h2.2v13.1H62v-12l-2.7 12h-.9l-2.7-12v12h-1.3v-13.1h2.2zM69.1 135.6l2.3 9.9 2.2-9.9h2.2v13.1h-1.3v-12l-2.7 12h-.9l-2.7-12v12h-1.3v-13.1h2.2zM80.1 135.6l2 4.6 1.8-4.6h1.5l-2.6 6.1 3.1 7h-1.5l-2.4-5.5-2.1 5.5h-1.5l2.8-7-2.7-6.1h1.6zM89.4 135.6l2.3 10.4 2.3-10.4h1.4l-3.1 13.1H91l-3-13.1h1.4z",key:3}),r.createElement("path",{d:"M264.7 146.6c0 67.2-54.7 121.9-121.9 121.9S21 213.8 21 146.6c0-66.7 53.8-121 120.3-121.8l-.1-5.4C71.8 20.3 15.6 77 15.6 146.6c0 70.2 57.1 127.3 127.3 127.3s127.3-57.1 127.3-127.3c0-4.6-.3-9.2-.7-13.6l-5.4.6c.4 4.2.6 8.6.6 13z",key:4})])}n.defaultProps={viewBox:"0 0 288 288"},e.exports=n,n.default=n},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Fog City Pack"}}}}},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Fog City Pack",description:"Fog City Pack is a family of pups in San Francisco. We host social and educational events in San Francisco's kink community.",author:"Joe Cocco"}}}}},172:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(35)),l=r(a(74)),c=r(a(77)),o=r(a(0)),d=r(a(4)),u=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},p=new WeakMap;var h=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+n+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=o.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},u,{onLoad:s,onError:d,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});v.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:n,fadeIn:i,hasNoScript:c,seenBefore:l},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,m=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=this.state.imgLoaded||!1===this.state.fadeIn,N=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,c.default)({opacity:w?1:0,transition:N?"opacity "+b+"ms":"none"},l),M="boolean"==typeof y?"lightgray":y,R={transitionDelay:b+"ms"},L=(0,c.default)({opacity:this.state.imgLoaded?0:1},N&&R,l,m),_={title:t,alt:this.state.isVisible?"":a,style:L,className:f};if(p){var k=p;return o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},o.default.createElement(E,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),M&&o.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&R)}),k.base64&&o.default.createElement(v,(0,c.default)({src:k.base64},_)),k.tracedSVG&&o.default.createElement(v,(0,c.default)({src:k.tracedSVG},_)),this.state.isVisible&&o.default.createElement("picture",null,k.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),o.default.createElement(v,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:a,title:t},k))}}))}if(h){var I=h,T=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete T.display,o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},M&&o.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:M,width:I.width,opacity:this.state.imgLoaded?0:1,height:I.height},N&&R)}),I.base64&&o.default.createElement(v,(0,c.default)({src:I.base64},_)),I.tracedSVG&&o.default.createElement(v,(0,c.default)({src:I.tracedSVG},_)),this.state.isVisible&&o.default.createElement("picture",null,I.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),o.default.createElement(v,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:a,title:t},I))}}))}return null},t}(o.default.Component);y.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=y;t.default=S},173:function(e,t,a){"use strict";a(75);var r=function(e,t){return e.edges.find(function(e){return e.node.childImageSharp&&e.node.childImageSharp.fluid.originalName===t})};a.d(t,"a",function(){return r})}}]);
//# sourceMappingURL=2-143ca128185968e9f7e4.js.map