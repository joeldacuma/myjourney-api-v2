"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[311],{395:function(e,a,t){var n=t(8580);a.__esModule=!0,a.default=void 0;var r=n(t(7294)),l=n(t(1932)),u=n(t(2728)),d=t(970),i=function(e){return r.default.useContext(d.OptionsContext).useAutoGen?r.default.createElement(l.default,e):r.default.createElement(u.default,e)};a.default=i},1932:function(e,a,t){var n=t(8580);a.__esModule=!0,a.default=void 0;var r=n(t(4362)),l=n(t(3246)),u=n(t(7294)),d=n(t(1272)),i=t(1597),o=["title","crumbs","crumbLabel","crumbSeparator","disableLinks","hiddenCrumbs"],c=function(e){var a=e.title,t=e.crumbs,n=e.crumbLabel,d=e.crumbSeparator,c=e.disableLinks,m=e.hiddenCrumbs,s=(0,l.default)(e,o);return u.default.createElement(u.default.Fragment,null,a&&u.default.createElement("span",{className:"breadcrumb__title"},a),u.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},u.default.createElement("ol",{className:"breadcrumb__list"},t.map((function(e,a){return m.includes(e.pathname)?null:u.default.createElement(u.default.Fragment,{key:a+"-"+e.pathname},!c.includes(e.pathname)&&u.default.createElement("li",{className:"breadcrumb__list__item"},u.default.createElement(i.Link,(0,r.default)({to:e.pathname,className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===t.length-1?"page":null},s),n&&a===t.length-1?n:e.crumbLabel)),c.includes(e.pathname)&&u.default.createElement("li",{className:"breadcrumb__list__item"},u.default.createElement("span",(0,r.default)({className:"breadcrumb__link__disabled"},s),n&&a===t.length-1?n:e.crumbLabel)),a===t.length-1?null:u.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},d))})))))};c.defaultProps={title:"",crumbSeparator:" / ",crumbLabel:null,disableLinks:[],hiddenCrumbs:[]},c.propTypes={title:d.default.string,crumbSeparator:d.default.oneOfType([d.default.string,d.default.element]),crumbs:d.default.arrayOf(d.default.shape({location:d.default.shape(),pathname:d.default.string.isRequired})).isRequired,crumbLabel:d.default.string,disableLinks:d.default.arrayOf(d.default.string),hiddenCrumbs:d.default.arrayOf(d.default.string)};var m=c;a.default=m},2728:function(e,a,t){var n=t(8580);a.__esModule=!0,a.default=void 0;var r=n(t(4362)),l=n(t(3246)),u=n(t(7294)),d=n(t(1272)),i=t(1597),o=t(970),c=n(t(1775)),m=["title","location","crumbLabel","crumbSeparator"],s=function(e){var a=e.title,t=e.location,n=e.crumbLabel,d=e.crumbSeparator,s=(0,l.default)(e,m),b=u.default.useContext(o.OptionsContext).usePathPrefix,f=(0,c.default)({location:(0,r.default)({},t,{pathname:b?t.pathname.replace(new RegExp("^"+b),""):t.pathname}),crumbLabel:n,crumbSeparator:d}).crumbs,p=void 0===f?[]:f;return u.default.createElement(u.default.Fragment,null,a&&u.default.createElement("span",{className:"breadcrumb__title"},a),u.default.createElement("nav",{className:"breadcrumb","aria-label":"Breadcrumb"},u.default.createElement("ol",{className:"breadcrumb__list"},p.map((function(e,a){return u.default.createElement("li",{className:"breadcrumb__item",key:a},u.default.createElement(i.Link,(0,r.default)({to:e.pathname||"",className:"breadcrumb__link",activeClassName:"breadcrumb__link__active","aria-current":a===p.length-1?"page":null},s),e.crumbLabel),a===p.length-1?null:u.default.createElement("span",{className:"breadcrumb__separator","aria-hidden":"true"},e.crumbSeparator))})))))};s.defaultProps={title:"",crumbSeparator:" / "},s.propTypes={location:d.default.shape().isRequired,crumbLabel:d.default.string.isRequired,title:d.default.string,crumbSeparator:d.default.string};var b=s;a.default=b},3172:function(e,a,t){var n=t(8580);a.__esModule=!0;var r=n(t(395));a.Breadcrumb=r.default;var l=n(t(1932));a.AutoGenCrumb=l.default;var u=t(2623);a.BreadcrumbContext=u.BreadcrumbContext,a.BreadcrumbConsumer=u.BreadcrumbConsumer,a.BreadcrumbProvider=u.BreadcrumbProvider;var d=n(t(1775));a.useBreadcrumb=d.default},1775:function(e,a,t){var n=t(8580);a.__esModule=!0,a.default=void 0;var r=n(t(7294)),l=t(2623),u=function(e){var a=e.location,t=e.crumbLabel,n=e.crumbSeparator,u=r.default.useContext(l.BreadcrumbContext),d=u.crumbs,i=u.updateCrumbs;return r.default.useEffect((function(){i({location:a,crumbLabel:t,crumbSeparator:n})}),[a,t,n,i]),{crumbs:d}};a.default=u},3845:function(e,a,t){var n=t(3172);a.aG=n.Breadcrumb,n.BreadcrumbContext,n.BreadcrumbConsumer,n.BreadcrumbProvider,n.useBreadcrumb,n.AutoGenCrumb},5409:function(e,a,t){t.d(a,{Z:function(){return f}});var n,r,l=t(3845),u=t(8837),d=t(386),i=t(567),o=t(1401),c=t(3707),m=c.ZP.div(n||(n=(0,o.Z)(["\n    background-color: #fafafa;\n    padding: 60px 0;\n    "," {\n        padding: 80px 0;\n    }\n"])),c.Uh.medium),s=c.ZP.div(r||(r=(0,o.Z)(["\n    & .breadcrumb {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 0 0;\n        margin-bottom: 1rem;\n        list-style: none;\n        justify-content: center;\n        ol {\n            list-style: none;\n            display: flex;\n            align-items: center;\n            color: #222;\n\n            padding: 10px 20px;\n            background-color: #ffebdf;\n            border-radius: 15px;\n\n            & .breadcrumb__separator {\n                margin-right: 10px;\n                margin-left: 10px;\n            }\n            .breadcrumb__link {\n                color: #222;\n                font-size: 15px;\n                font-weight: 500;\n                margin-bottom: 8px;\n                &.breadcrumb__link__active {\n                    color: #fea444;\n                }\n            }\n        }\n    }\n"]))),b=t(4382),f=function(e){e.crumbLabel;var a=e.location,t=e.pageContext.breadcrumb.crumbs,n=a.pathname.toLowerCase().split("/"),r=n[n.length-1].split("-");return(0,b.tZ)(m,null,(0,b.tZ)(u.Z,null,(0,b.tZ)(d.Z,null,(0,b.tZ)(i.Z,null,(0,b.tZ)(s,null,(0,b.tZ)(l.aG,{crumbs:t,crumbLabel:r.join(" "),disableLinks:["/events","/category","/profile","/date","/tag","/page","/blog","/blog/page","/blogs","/services"]}))))))}},6344:function(e,a,t){t.r(a),t.d(a,{default:function(){return F}});t(7294);var n,r,l,u,d,i,o,c,m,s,b,f=t(8290),p=t(1749),g=t(5409),Z=t(8837),_=t(386),h=t(567),v=t(1597),x=t(6616),k=t(1401),C=t(3707),L=C.ZP.form(n||(n=(0,k.Z)(["\n    margin-top: 30px;\n"]))),y=C.ZP.input(r||(r=(0,k.Z)(["\n    width: 100%;\n    background-color: #ffffff;\n    padding: 1px 20px;\n    color: #000000;\n    line-height: 47px;\n    border: none;\n    border-radius: 10px;\n    margin-bottom: 25px;\n    border: 1px solid #ddd;\n    height: 50px;\n    font-weight: 500;\n"]))),E=C.ZP.div(l||(l=(0,k.Z)(["\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px;\n"]))),P=C.ZP.div(u||(u=(0,k.Z)(["\n    display: flex;\n    align-items: center;\n"]))),w=C.ZP.input(d||(d=(0,k.Z)(['\n    &[type="checkbox"] {\n        position: relative;\n        background: 0 0;\n        border-width: 0;\n        -webkit-box-shadow: none;\n        box-shadow: none;\n        margin: 0 10px 0 3px;\n        cursor: pointer;\n        height: 16px;\n        width: 16px;\n    }\n']))),N=C.ZP.p(i||(i=(0,k.Z)(["\n    margin-bottom: 0;\n"]))),B=C.ZP.div(o||(o=(0,k.Z)([""]))),S=C.ZP.div(c||(c=(0,k.Z)(["\n    margin-top: 40px;\n"]))),R=C.ZP.p(m||(m=(0,k.Z)([""]))),O=t(4382),G=function(){return(0,O.tZ)(L,{action:"#"},(0,O.tZ)(y,{type:"text",placeholder:"Username"}),(0,O.tZ)(y,{type:"password",placeholder:"Password"}),(0,O.tZ)(E,null,(0,O.tZ)(P,null,(0,O.tZ)(w,{type:"checkbox"}),(0,O.tZ)(N,null,"Remember")),(0,O.tZ)("a",{href:"/"},"Forgot your password?")),(0,O.tZ)(B,null,(0,O.tZ)(x.Z,{type:"submit",size:"large",shape:"rounded-10"},"Log in")),(0,O.tZ)(S,null,(0,O.tZ)(R,null," ","Not a member? ",(0,O.tZ)(v.Link,{to:"/register"}," Register now"))))},M=C.ZP.div(s||(s=(0,k.Z)(["\n    padding-top: 80px;\n    padding-bottom: 80px;\n"]))),q=C.ZP.div(b||(b=(0,k.Z)([""]))),A=function(){return(0,O.tZ)(M,null,(0,O.tZ)(Z.Z,null,(0,O.tZ)(_.Z,null,(0,O.tZ)(h.Z,{lg:6,className:"m-auto"},(0,O.tZ)(q,null,(0,O.tZ)("div",{className:"login-header mb-40"},(0,O.tZ)("h3",null,"Log In Your Account")),(0,O.tZ)(G,null))))))},F=function(e){var a=e.location,t=e.pageContext;return(0,O.tZ)(f.Z,null,(0,O.tZ)(p.Z,{title:"Login",pathname:"/"}),(0,O.tZ)(g.Z,{pageContext:t,location:a}),(0,O.tZ)(A,null))}}}]);
//# sourceMappingURL=component---src-pages-login-jsx-e070e053b7597a0301a5.js.map