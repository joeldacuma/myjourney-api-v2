"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[531],{395:function(t,n,e){var a=e(8580);n.__esModule=!0,n.default=void 0;var r=a(e(7294)),l=a(e(1932)),i=a(e(2728)),o=e(970),d=function(t){return r.default.useContext(o.OptionsContext).useAutoGen?r.default.createElement(l.default,t):r.default.createElement(i.default,t)};n.default=d},1932:function(t,n,e){var a=e(8580);n.__esModule=!0,n.default=void 0;var r=a(e(4362)),l=a(e(3246)),i=a(e(7294)),o=a(e(1272)),d=e(1597),u=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],s=function(t){var n=t.title,e=t.crumbs,a=t.crumbLabel,o=t.crumbSeparator,s=t.disableLinks,c=t.hiddenCrumbs,m=(0,l.default)(t,u);return i.default.createElement(i.default.Fragment,null,n&&i.default.createElement("span",{className:"breadcrumb__title"},n),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},e.map((function(t,n){return c.includes(t.pathname)?null:i.default.createElement(i.default.Fragment,{key:n+"-"+t.pathname},!s.includes(t.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement(d.Link,(0,r.default)({to:t.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":n===e.length-1?"page":null},m),a&&n===e.length-1?a:t.crumbLabel)),s.includes(t.pathname)&&i.default.createElement("li",{className:"breadcrumb__list__item"},i.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},m),a&&n===e.length-1?a:t.crumbLabel)),n===e.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},o))})))))};s.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},s.propTypes={title:o.default.string,crumbSeparator:o.default.oneOfType([o.default.string,o.default.element]),crumbs:o.default.arrayOf(o.default.shape({location:o.default.shape(),pathname:o.default.string.isRequired})).isRequired,crumbLabel:o.default.string,disableLinks:o.default.arrayOf(o.default.string),hiddenCrumbs:o.default.arrayOf(o.default.string)};var c=s;n.default=c},2728:function(t,n,e){var a=e(8580);n.__esModule=!0,n.default=void 0;var r=a(e(4362)),l=a(e(3246)),i=a(e(7294)),o=a(e(1272)),d=e(1597),u=e(970),s=a(e(1775)),c=["title","location","crumbLabel","crumbSeparator"],m=function(t){var n=t.title,e=t.location,a=t.crumbLabel,o=t.crumbSeparator,m=(0,l.default)(t,c),p=i.default.useContext(u.OptionsContext).usePathPrefix,b=(0,s.default)({location:(0,r.default)({},e,{pathname:p?e.pathname.replace(new RegExp("^"+p),""):e.pathname}),crumbLabel:a,crumbSeparator:o}).crumbs,f=void 0===b?[]:b;return i.default.createElement(i.default.Fragment,null,n&&i.default.createElement("span",{className:"breadcrumb__title"},n),i.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},i.default.createElement("ol",{className:"breadcrumb__list"},f.map((function(t,n){return i.default.createElement("li",{className:"breadcrumb__item",key:n},i.default.createElement(d.Link,(0,r.default)({to:t.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":n===f.length-1?"page":null},m),t.crumbLabel),n===f.length-1?null:i.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},t.crumbSeparator))})))))};m.defaultProps={title:"",crumbSeparator:" / "},m.propTypes={location:o.default.shape().isRequired,crumbLabel:o.default.string.isRequired,title:o.default.string,crumbSeparator:o.default.string};var p=m;n.default=p},3172:function(t,n,e){var a=e(8580);n.__esModule=!0;var r=a(e(395));n.Breadcrumb=r.default;var l=a(e(1932));n.AutoGenCrumb=l.default;var i=e(2623);n.BreadcrumbContext=i.BreadcrumbContext,n.BreadcrumbConsumer=i.BreadcrumbConsumer,n.BreadcrumbProvider=i.BreadcrumbProvider;var o=a(e(1775));n.useBreadcrumb=o.default},1775:function(t,n,e){var a=e(8580);n.__esModule=!0,n.default=void 0;var r=a(e(7294)),l=e(2623),i=function(t){var n=t.location,e=t.crumbLabel,a=t.crumbSeparator,i=r.default.useContext(l.BreadcrumbContext),o=i.crumbs,d=i.updateCrumbs;return r.default.useEffect((function(){d({location:n,crumbLabel:e,crumbSeparator:a})}),[n,e,a,d]),{crumbs:o}};n.default=i},3845:function(t,n,e){var a=e(3172);n.aG=a.Breadcrumb,a.BreadcrumbContext,a.BreadcrumbConsumer,a.BreadcrumbProvider,a.useBreadcrumb,a.AutoGenCrumb},5409:function(t,n,e){e.d(n,{Z:function(){return b}});var a,r,l=e(3845),i=e(8837),o=e(386),d=e(567),u=e(1401),s=e(3707),c=s.ZP.div(a||(a=(0,u.Z)(["\n    background-color: #fafafa;\n    padding: 60px 0;\n    "," {\n        padding: 80px 0;\n    }\n"])),s.Uh.medium),m=s.ZP.div(r||(r=(0,u.Z)(["\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #222;\n\n            padding: 10px 20px;\n            background-color: #ffebdf;\n            border-radius: 15px;\n\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #222;\n                font-size: 15px;\n                font-weight: 500;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active {\n                    color: #fea444;\n                }\n            }\n        }\n    }\n"]))),p=e(4382),b=function(t){t.crumbLabel;var n=t.location,e=t.pageContext.breadcrumb.crumbs,a=n.pathname.toLowerCase().split("/"),r=a[a.length-1].split("-");return(0,p.tZ)(c,null,(0,p.tZ)(i.Z,null,(0,p.tZ)(o.Z,null,(0,p.tZ)(d.Z,null,(0,p.tZ)(m,null,(0,p.tZ)(l.aG,{crumbs:e,crumbLabel:r.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))))}},7045:function(t,n,e){e.d(n,{Z:function(){return k}});e(7294);var a,r,l,i,o,d,u,s,c,m=e(8945),p=e(1401),b=e(3707),f=b.ZP.div(a||(a=(0,p.Z)(["\n    padding: 30px 35px 60px;\n    background-color: #ffffff;\n    border-radius: 15px;\n    position: relative;\n    margin-top: 40px;\n"]))),Z=b.ZP.div(r||(r=(0,p.Z)(["\n    display: flex;\n    align-items: center;\n    padding-bottom: 30px;\n    border-bottom: 1px solid #ddd;\n    margin-bottom: 30px;\n"]))),g=b.ZP.div(l||(l=(0,p.Z)(["\n    width: 70px;\n    flex: 0 0 auto;\n    margin-right: 20px;\n"]))),x=b.ZP.div(i||(i=(0,p.Z)([""]))),h=b.ZP.h4(o||(o=(0,p.Z)([""]))),v=b.ZP.p(d||(d=(0,p.Z)(["\n    color: ",";\n    font-size: 11px;\n    margin-top: 10px;\n    text-transform: uppercase;\n"])),(0,b.R)("colors.primary")),_=b.ZP.div(u||(u=(0,p.Z)([""]))),w=b.ZP.h5(s||(s=(0,p.Z)(["\n    margin-bottom: 25px;\n    line-height: 1.6;\n"]))),P=b.ZP.p(c||(c=(0,p.Z)(["\n    font-size: 14px;\n    line-height: 2;\n"]))),y=e(4382),k=function(t){var n=t.images,e=t.name,a=t.designation,r=t.title,l=t.desText,i=(0,m.d)(n[0]);return(0,y.tZ)(f,null,(0,y.tZ)(Z,null,(0,y.tZ)(g,null,(0,y.tZ)(m.G,{image:i,alt:e})),(0,y.tZ)(x,null,(0,y.tZ)(h,null,e),(0,y.tZ)(v,null,a))),(0,y.tZ)(_,null,(0,y.tZ)(w,null,r),(0,y.tZ)(P,null,l)))}},9559:function(t,n,e){e.r(n),e.d(n,{default:function(){return Dt}});var a,r,l,i,o,d,u,s,c,m,p,b,f,Z,g,x,h,v,_,w,P,y,k,N,C,S,L,E,U,B,z,T,G,j,I,O,R=e(7294),J=e(8290),M=e(1749),A=e(5409),Q=e(289),V=e(8945),q=e(8837),F=e(386),D=e(567),H=e(1597),K=e(1401),W=e(3707),X=W.ZP.div(a||(a=(0,K.Z)(["\n    padding-top: 60px;\n    padding-bottom: 60px;\n"]))),$=W.ZP.div(r||(r=(0,K.Z)(["\n    position: relative;\n    img {\n        width: 100%;\n        border-radius: 10px;\n    }\n    .video-link {\n        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n        display: block;\n        &:hover {\n            & .video-play,\n            & .video-play-sm {\n                transform: scale3d(1.15, 1.15, 1.15);\n            }\n        }\n    }\n"]))),Y=W.ZP.div(l||(l=(0,K.Z)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n"]))),tt=W.ZP.div(i||(i=(0,K.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    & .video-play {\n        position: relative;\n        width: 78px;\n        height: 78px;\n        background: ",";\n        border: 3px solid #fff;\n        box-shadow: 0 2px 41px 0 rgba(91, 99, 254, 0.36);\n        border-radius: 50%;\n        transition: all 1s cubic-bezier(0, 0, 0.2, 1) !important;\n        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.07);\n    }\n"])),(0,W.R)("colors.primary")),nt=W.ZP.span(o||(o=(0,K.Z)(['\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    line-height: 1;\n    margin-left: 1px;\n    &::before {\n        content: "";\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 0;\n        height: 0;\n        transform: translate(-50%, -50%);\n        border-top: 11px solid transparent;\n        border-bottom: 11px solid transparent;\n        border-left: 17px solid #fff;\n        border-top-width: 12px;\n        border-bottom-width: 12px;\n        border-left-width: 19px;\n        border-left-color: $white;\n    }\n']))),et=e(4382),at=function(){var t,n,e=(0,H.useStaticQuery)("285567995").aboutUsJson.about_us_video,a=e.video_link,r=e.about_video_bg,l=(0,V.d)(r.childrenImageSharp[0]);a&&(t=a.split("=",-1)[1],n=a.split(".")[1]);var i=(0,R.useState)(!1),o=i[0],d=i[1];return(0,et.tZ)(X,null,(0,et.tZ)(q.Z,null,(0,et.tZ)(F.Z,null,(0,et.tZ)(D.Z,null,(0,et.tZ)("div",{className:"video-link mt-30"},(0,et.tZ)($,null,(0,et.tZ)(V.G,{image:l,alt:""}),(0,et.tZ)(Y,null,(0,et.tZ)(tt,null,(0,et.tZ)("div",{className:"video-play",onClick:function(){return d(!0)},role:"button",tabIndex:"0",onKeyPress:function(){}},(0,et.tZ)(nt,null)))))),(0,et.tZ)(Q.Z,{channel:n,videoId:t,isOpen:o,setOpen:d})))))},rt=e(6616),lt=W.ZP.div(d||(d=(0,K.Z)(["\n    padding-bottom: 60px;\n"]))),it=W.ZP.div(u||(u=(0,K.Z)(["\n    background-color: #fafafa;\n    padding: 20px;\n    border-radius: 10px;\n    margin-top: 30px;\n    "," {\n        padding: 40px;\n    }\n    &.platform-d-flex {\n        display: flex;\n        flex-direction: column;\n        "," {\n            flex-direction: row;\n        }\n    }\n"])),W.Uh.xlarge,W.Uh.medium),ot=W.ZP.div(s||(s=(0,K.Z)(["\n    background-color: ",";\n    display: inline-block;\n    height: 90px;\n    width: 90px;\n    line-height: 90px;\n    text-align: center;\n    border-radius: 10px;\n    margin-bottom: 20px;\n    & .gatsby-image-wrapper-constrained {\n        vertical-align: middle !important;\n    }\n"])),(0,W.R)("colors.primary")),dt=W.ZP.div(c||(c=(0,K.Z)([""]))),ut=W.ZP.h3(m||(m=(0,K.Z)(["\n    margin-bottom: 20px;\n"]))),st=W.ZP.p(p||(p=(0,K.Z)([""]))),ct=W.ZP.p(b||(b=(0,K.Z)([""]))),mt=W.ZP.div(f||(f=(0,K.Z)(["\n    max-width: 100%;\n    padding-right: 20px;\n    "," {\n        max-width: 300px;\n    }\n"])),W.Uh.medium),pt=W.ZP.div(Z||(Z=(0,K.Z)(["\n    margin-left: 0px;\n    margin-top: 30px;\n    "," {\n        margin-left: 30px;\n        margin-top: 0px;\n    }\n    "," {\n        margin-left: 0px;\n    }\n    "," {\n        margin-left: 0px;\n    }\n"])),W.Uh.medium,W.Uh.large,W.Uh.xlarge),bt=W.ZP.div(g||(g=(0,K.Z)(["\n    position: relative;\n"]))),ft=W.ZP.div(x||(x=(0,K.Z)(["\n    position: absolute;\n    width: 100%;\n    bottom: 30px;\n    text-align: center;\n    left: 50%;\n    transform: translateX(-50%);\n"]))),Zt=function(){var t=(0,H.useStaticQuery)("2749556587").aboutUsJson,n=t.about_us_platform,a=n.image1,r=n.title,l=n.text1,i=n.text2,o=t.about_us_digital_publishing,d=o.image2,u=o.title,s=o.text1,c=o.text2,m=(0,V.d)(a),p=(0,V.d)(d);return(0,et.tZ)(lt,null,(0,et.tZ)(q.Z,null,(0,et.tZ)(F.Z,{className:"gx-5"},(0,et.tZ)(D.Z,{lg:4},(0,et.tZ)(it,null,(0,et.tZ)(ot,null,(0,et.tZ)(V.G,{image:m,alt:r})),(0,et.tZ)(dt,null,(0,et.tZ)(ut,null,r),(0,et.tZ)(st,null,l),(0,et.tZ)(ct,null,i)))),(0,et.tZ)(D.Z,{lg:8},(0,et.tZ)(it,{className:"platform-d-flex"},(0,et.tZ)(mt,null,(0,et.tZ)(ot,null,(0,et.tZ)(V.G,{image:p,alt:u})),(0,et.tZ)(dt,null,(0,et.tZ)(ut,null,u),(0,et.tZ)(st,null,s),(0,et.tZ)(ct,null,c))),(0,et.tZ)(pt,null,(0,et.tZ)(bt,null,(0,et.tZ)(V.S,{src:"../../../data/images/banners/about-ex-share.jpg",alt:"",__imageData:e(9746)}),(0,et.tZ)(ft,null,(0,et.tZ)(rt.Z,{path:"/contact-us",size:"large",shape:"rounded-10"},"Share your thinking"," ",(0,et.tZ)("i",{className:"icofont-long-arrow-right"}))))))))))},gt=W.ZP.div(h||(h=(0,K.Z)(["\n    padding: 30px 30px 30px 30px;\n    border-right: 1px solid #ddd;\n    border-bottom: 1px solid #ddd;\n    &:last-of-type {\n        border-bottom: none;\n    }\n    "," {\n        border-bottom: 1px solid #ddd;\n    }\n"])),W.Uh.medium),xt=W.ZP.h3(v||(v=(0,K.Z)(["\n    margin-bottom: 20px;\n"]))),ht=W.ZP.p(_||(_=(0,K.Z)([""]))),vt=function(t){var n=t.title,e=t.decText;return(0,et.tZ)(gt,null,(0,et.tZ)(xt,null,n),(0,et.tZ)(ht,null,e))},_t=W.ZP.div(w||(w=(0,K.Z)([""]))),wt=W.ZP.div(P||(P=(0,K.Z)(["\n    display: flex;\n    align-items: center;\n    border-top: 1px solid #ddd;\n    border-bottom: 1px solid #ddd;\n    flex-direction: column;\n    "," {\n        flex-direction: row;\n    }\n"])),W.Uh.medium),Pt=W.ZP.div(y||(y=(0,K.Z)(["\n    width: 100%;\n    flex: 0 0 auto;\n    border-left: 1px solid #ddd;\n    height: 100%;\n    border-bottom: 1px solid #ddd;\n    &:first-of-type {\n        border-left: none;\n    }\n    "," {\n        width: 50%;\n        border-bottom: none;\n    }\n"])),W.Uh.medium),yt=W.ZP.h2(k||(k=(0,K.Z)(["\n    font-size: 22px;\n    font-weight: 300;\n    margin-right: 30px;\n    margin-top: 30px;\n    margin-bottom: 30px;\n    span {\n        font-weight: 600;\n    }\n    "," {\n        font-size: 42px;\n    }\n    "," {\n        font-size: 52px;\n    }\n    "," {\n        font-size: 62px;\n    }\n"])),W.Uh.medium,W.Uh.large,W.Uh.xlarge),kt=function(){var t=(0,H.useStaticQuery)("2921391680").aboutUsJson,n=t.history_title,e=t.history;return(0,et.tZ)(_t,null,(0,et.tZ)(q.Z,null,(0,et.tZ)(F.Z,null,(0,et.tZ)(D.Z,null,(0,et.tZ)(wt,null,(0,et.tZ)(Pt,null,(0,et.tZ)(yt,{dangerouslySetInnerHTML:{__html:n}})),(0,et.tZ)(Pt,null,e.map((function(t){return(0,et.tZ)(vt,{key:t.id,title:t.title,decText:t.decText})}))))))))},Nt=e(1695),Ct=W.ZP.div(N||(N=(0,K.Z)(["\n    position: relative;\n    overflow: hidden;\n    margin-top: 40px;\n    &:hover {\n        .hover-action {\n            opacity: 1;\n            visibility: visible;\n        }\n    }\n"]))),St=W.ZP.div(C||(C=(0,K.Z)(["\n    img {\n        width: 100%;\n    }\n"]))),Lt=W.ZP.div(S||(S=(0,K.Z)(["\n    opacity: 0;\n    visibility: hidden;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0%;\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    text-align: center;\n    border-radius: 10px;\n    transition: all 0.3s ease-in-out;\n    background: -webkit-linear-gradient(\n        bottom,\n        rgba(0, 0, 0, 0.9) 0,\n        rgba(253, 195, 158, 0.9) 100%\n    );\n"]))),Et=W.ZP.div(L||(L=(0,K.Z)([""]))),Ut=W.ZP.div(E||(E=(0,K.Z)(["\n    margin-bottom: 20px;\n"]))),Bt=W.ZP.h6(U||(U=(0,K.Z)(["\n    color: #ffffff;\n"]))),zt=W.ZP.p(B||(B=(0,K.Z)(["\n    color: #ffc4a0;\n"]))),Tt=function(t){var n=t.name,e=t.designation,a=t.images,r=(0,V.d)(a[0]);return(0,et.tZ)(Ct,null,(0,et.tZ)(St,null,(0,et.tZ)(V.G,{image:r,alt:""})),(0,et.tZ)(Lt,{className:"hover-action"},(0,et.tZ)(Et,null,(0,et.tZ)(Nt.Z,{sx:{mt:"30px"},shape:"rounded-5",space:10,bgColor:"bgWhite",size:"sm"},(0,et.tZ)(Nt.I,{href:"https://www.facebook.com/"},(0,et.tZ)("i",{className:"icofont-facebook"})),(0,et.tZ)(Nt.I,{href:"https://twitter.com/home/"},(0,et.tZ)("i",{className:"icofont-twitter"})),(0,et.tZ)(Nt.I,{href:"https://www.linkedin.com/"},(0,et.tZ)("i",{className:"icofont-linkedin"})))),(0,et.tZ)(Ut,null,(0,et.tZ)(Bt,null,n),(0,et.tZ)(zt,null,e))))},Gt=W.ZP.div(z||(z=(0,K.Z)(["\n    padding-top: 100px;\n    padding-bottom: 100px;\n"]))),jt=function(){var t=(0,H.useStaticQuery)("534612959").teamJson,n=t.section_title,e=n.title,a=n.subTitle,r=t.team;return(0,et.tZ)(Gt,null,(0,et.tZ)(q.Z,null,(0,et.tZ)(F.Z,null,(0,et.tZ)(D.Z,{lg:12},(0,et.tZ)("div",{className:"section-title text-center"},(0,et.tZ)("h6",{className:"sub-title-primary mb-20"},a),(0,et.tZ)("h2",{className:"title"},e)))),(0,et.tZ)(F.Z,{className:"gx-5"},r&&r.map((function(t,n){return(0,et.tZ)(D.Z,{sm:6,md:6,lg:3,key:n},(0,et.tZ)(Tt,{images:t.images.childrenImageSharp,name:t.name,designation:t.designation}))})))))},It=e(1191),Ot=e(7045),Rt=e(7765),Jt=e(8391),Mt=W.ZP.div(T||(T=(0,K.Z)(["\n    background-color: #edf0f8;\n"]))),At=W.ZP.div(G||(G=(0,K.Z)(["\n    padding-top: 60px;\n    "," {\n        padding-top: 100px;\n    }\n    "," {\n    }\n"])),W.Uh.medium,W.Uh.large),Qt=W.ZP.div(j||(j=(0,K.Z)([""]))),Vt=W.ZP.div(I||(I=(0,K.Z)(["\n    display: flex;\n    justify-content: center;\n    margin-top: 50px;\n"]))),qt=W.ZP.div(O||(O=(0,K.Z)(["\n    width: 50px;\n    height: 50px;\n    line-height: 45px;\n    border: 2px solid #ffc4a0;\n    text-align: center;\n    font-size: 25px;\n    border-radius: 500000px;\n    color: #ffffff;\n    background-color: #ffc4a0;\n    transition: all 0.3s ease-in-out;\n    margin: 10px;\n"]))),Ft=function(){var t=(0,H.useStaticQuery)("2187174893").testimonialJson,n=t.section_title,e=n.title,a=n.subTitle,r=t.testimonial;return(0,It.tZ)(Mt,null,(0,It.tZ)(At,{sx:{pb:["80px","100px"]}},(0,It.tZ)(q.Z,null,(0,It.tZ)(F.Z,null,(0,It.tZ)(D.Z,{lg:12},(0,It.tZ)("div",{className:"section-title text-center"},(0,It.tZ)("h6",{className:"sub-title-primary mb-20"},a),(0,It.tZ)("h2",{className:"title"},e)))),(0,It.tZ)(Qt,null,(0,It.tZ)(Rt.Z,{layout:{nav:"testimonial-slider-navigation",dots:"testimonial-dots-style"},navigation:{nextEl:".testimonial-button-next",prevEl:".testimonial-button-prev"},slidesPerView:3,spaceBetween:30,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:1},768:{slidesPerView:2},992:{slidesPerView:3}}},r&&r.map((function(t,n){return(0,It.tZ)(Rt.o,{key:n},(0,It.tZ)(Ot.Z,{images:t.images.childrenImageSharp,name:t.name,designation:t.designation,title:t.title,desText:t.desText}))}))),(0,It.tZ)(Vt,null,(0,It.tZ)(qt,{className:"testimonial-button-next"},(0,It.tZ)("i",{className:"icofont-long-arrow-left"})),(0,It.tZ)(qt,{className:"testimonial-button-prev"},(0,It.tZ)("i",{className:"icofont-long-arrow-right"})))),(0,It.tZ)(Jt.Z,null))))},Dt=function(t){var n=t.location,e=t.pageContext;return(0,et.tZ)(J.Z,null,(0,et.tZ)(M.Z,{title:"About Us",pathname:"/"}),(0,et.tZ)(A.Z,{pageContext:e,location:n,title:"About Us"}),(0,et.tZ)(at,null),(0,et.tZ)(Zt,null),(0,et.tZ)(kt,null),(0,et.tZ)(jt,null),(0,et.tZ)(Ft,null))}},9746:function(t){t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8b8","images":{"fallback":{"src":"/static/91013160f2ce4e5d6ad7db92175ac5fb/4dd5e/about-ex-share.jpg","srcSet":"/static/91013160f2ce4e5d6ad7db92175ac5fb/dec5e/about-ex-share.jpg 91w,\\n/static/91013160f2ce4e5d6ad7db92175ac5fb/06bd4/about-ex-share.jpg 182w,\\n/static/91013160f2ce4e5d6ad7db92175ac5fb/4dd5e/about-ex-share.jpg 363w","sizes":"(min-width: 363px) 363px, 100vw"},"sources":[{"srcSet":"/static/91013160f2ce4e5d6ad7db92175ac5fb/778a9/about-ex-share.webp 91w,\\n/static/91013160f2ce4e5d6ad7db92175ac5fb/f41c9/about-ex-share.webp 182w,\\n/static/91013160f2ce4e5d6ad7db92175ac5fb/a7cae/about-ex-share.webp 363w","type":"image/webp","sizes":"(min-width: 363px) 363px, 100vw"}]},"width":363,"height":411}')}}]);
//# sourceMappingURL=component---src-pages-about-us-jsx-f7ca818f2484ef9f1614.js.map