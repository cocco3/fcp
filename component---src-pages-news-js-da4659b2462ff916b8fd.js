(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{160:function(e,t,i){"use strict";i.r(t);i(75),i(177);var a=i(171),r=i.n(a),s=i(0),n=i.n(s),o=i(176),l=i.n(o),d=i(163),c=[{title:"Young Gays Are Sniffing Out the Pup Life",date:"2015-02-15",description:'In the dog-eat-dog world of San Francisco, everyone’s letting their inner pup out with the latest wave of "human canine" parties and clubs.',img:"news-vice.jpg",url:"https://www.vice.com/en_us/article/young-gays-are-sniffing-out-the-pup-life-979"},{title:"All in the Family",date:"2016-05-12",description:"Defining leather family is truly open to interpretation, but the rise in referencing and labeling as leather family… means that our leather and kink scene requires exactly the same closely connected and extended relationships that everyone needs.",img:"news-bay-area-reporter.jpg",url:"http://www.ebar.com/bartab/article.php?sec=leather&article=333"},{title:"Canis Majors",date:"2016-09-21",description:"The Fog City Pack could appear a little like a loose group of friends that quickly coalesced into a socially ambitious clique, but it's important to remember what drew the pups toward puppy-dom in the first place: loyalty, family, and kink.",img:"news-canis-majors.jpg",url:"http://www.sfweekly.com/culture/feature-culture/canis-majors/"},{title:"Trove Podcast - Ep 5 - The Pack",date:"2018-02-11",description:"When he came out in his teens, Turbo worried that family wasn't in his future. But after starting an altogether new kind of relationship in his mid-30s, Turbo finds a family where he never expected.",img:"news-the-trove.jpg",url:"https://www.thetrovepodcast.com/episodes/2018/2/11/episode-5-the-pack"},{title:"Teaching Young Dogs Old Tricks",date:"2019-02-05",description:"Exploring the role of mentorship in the gay “pup play” community.",img:"news-slate-old-dogs-new-tricks.jpeg",url:"https://slate.com/human-interest/2019/02/pup-play-fog-city-pack-mentorship.html"},{title:"We Live in Packs",date:"2019-04-26",description:"In San Francisco, the dogs are very out.",img:"news-nyt-we-live-in-packs.jpg",url:"https://www.nytimes.com/2019/04/26/style/pup-play.html"},{title:"Ruff! Inside the kinky world of pup play",date:"2019-05-09",description:"Pup play is a subculture of BDSM that has been around for some time, but the community and scene has blown up in recent years in San Francisco, where there are packs and parties.",img:"news-daily-mail.jpg",url:"https://www.dailymail.co.uk/news/article-7010681/Ruff-Inside-kinky-world-pup-play-San-Francisco-men-act-like-young-dogs.html"}];i.d(t,"pageQuery",function(){return u});t.default=function(e){var t=c.sort(function(e,t){return e.date>t.date?1:e.date<t.date?-1:0}).reverse().map(function(t,i){var a=t.img,s=e.data.newsImages.edges.find(function(e){return e.node.childImageSharp&&e.node.childImageSharp.fluid.originalName===a}),o=s&&n.a.createElement(l.a,{fluid:s.node.childImageSharp.fluid});return n.a.createElement(d.g,{key:i},n.a.createElement(d.a,{action:"Read More",description:t.description,image:o,subtitle:r()(t.date).format("MMMM DD, YYYY"),title:t.title,url:t.url}))});return n.a.createElement(d.c,null,n.a.createElement(d.f,{title:"News"}),t)};var u="635334312"},176:function(e,t,i){"use strict";var a=i(8);t.__esModule=!0,t.default=void 0;var r,s=a(i(7)),n=a(i(35)),o=a(i(74)),l=a(i(76)),d=a(i(0)),c=a(i(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),i=t.fluid?t.fluid.src:t.fixed.src;return f[i]||!1},h=new WeakMap;var g=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return i&&(i.observe(e),h.set(e,t)),function(){i.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+i+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+a+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+i+r+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:i,srcSet:a,src:r},u,{onLoad:n,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var i;i=e.call(this,t)||this;var a=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!0),"undefined"==typeof window&&(a=!1),t.critical&&(a=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},i.imageRef=d.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)((0,n.default)(i))),i.handleRef=i.handleRef.bind((0,n.default)((0,n.default)(i))),i}(0,s.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=u(e),i=t.fluid?t.fluid.src:t.fixed.src,f[i]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=u(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,w=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,k=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:E?1:0,transition:k?"opacity "+b+"ms":"none"},o),I="boolean"==typeof w?"lightgray":w,R={transitionDelay:b+"ms"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&R,o,f),O={title:t,alt:this.state.isVisible?"":i,style:j,className:p};if(h){var z=h;return d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),I&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&R)}),z.base64&&d.default.createElement(y,(0,l.default)({src:z.base64},O)),z.tracedSVG&&d.default.createElement(y,(0,l.default)({src:z.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(y,{alt:i,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:i,title:t},z))}}))}if(g){var T=g,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},s);return"inherit"===s.display&&delete C.display,d.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},I&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:I,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},k&&R)}),T.base64&&d.default.createElement(y,(0,l.default)({src:T.base64},O)),T.tracedSVG&&d.default.createElement(y,(0,l.default)({src:T.tracedSVG},O)),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(y,{alt:i,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:i,title:t},T))}}))}return null},t}(d.default.Component);w.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:b,sizes:v,fixed:b,fluid:v,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var S=w;t.default=S},177:function(e,t,i){"use strict";var a=i(11),r=i(25),s=i(26),n=i(18),o=[].sort,l=[1,2,3];a(a.P+a.F*(n(function(){l.sort(void 0)})||!n(function(){l.sort(null)})||!i(178)(o)),"Array",{sort:function(e){return void 0===e?o.call(s(this)):o.call(s(this),r(e))}})},178:function(e,t,i){"use strict";var a=i(18);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}}}]);
//# sourceMappingURL=component---src-pages-news-js-da4659b2462ff916b8fd.js.map