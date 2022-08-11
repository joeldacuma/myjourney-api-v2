"use strict";(self.webpackChunkmyjourney_api_v_2=self.webpackChunkmyjourney_api_v_2||[]).push([[3981],{36717:(Be,T,t)=>{t.r(T),t.d(T,{default:()=>Re});var n=t(53547),y=t(97132),s=t(78384),H=t(15482),b=t(49656),u=t(68547),P=t(35395),G=t(80117),p=t(94117),g=t(39272);const I=t.p+"fb376b132d18bf4522ca.png";var j=t(59942);const D=e=>Object.entries(e).every(([,a])=>Object.entries(a).every(([,o])=>o));var O=t(9524),E=t(40264),v=t(33483),F=t(64459),W=t(64290),A=t.n(W),V=t(45697),r=t.n(V),$=t(96392),z=t(89285),c=t(99872);const S=({type:e,title:a,number:o,content:l,hasLine:d})=>{const{formatMessage:f}=(0,y.useIntl)();return n.createElement(p.Box,null,n.createElement(E.Flex,null,n.createElement(p.Box,{minWidth:(0,u.pxToRem)(30),marginRight:5},n.createElement($.Z,{type:e,number:o})),n.createElement(v.Typography,{variant:"delta",as:"h3"},f(a))),n.createElement(E.Flex,{alignItems:"flex-start"},n.createElement(E.Flex,{justifyContent:"center",minWidth:(0,u.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},d&&n.createElement(z.Z,{type:e,minHeight:e===c.lW?(0,u.pxToRem)(85):(0,u.pxToRem)(65)})),n.createElement(p.Box,{marginTop:2},e===c.lW&&l)))};S.defaultProps={content:void 0,number:void 0,type:c.VM,hasLine:!0},S.propTypes={content:r().node,number:r().number,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,type:r().oneOf([c.lW,c.hx,c.VM]),hasLine:r().bool};const K=S,w=(e,a)=>e===-1||a<e?c.hx:a>e?c.VM:c.lW,B=({sections:e,currentSectionKey:a})=>{const o=e.findIndex(l=>l.key===a);return n.createElement(p.Box,null,e.map((l,d)=>n.createElement(K,{key:l.key,title:l.title,content:l.content,number:d+1,type:w(o,d),hasLine:d!==e.length-1})))};B.defaultProps={currentSectionKey:void 0},B.propTypes={sections:r().arrayOf(r().shape({key:r().string.isRequired,title:r().shape({id:r().string,defaultMessage:r().string}).isRequired,content:r().node})).isRequired,currentSectionKey:r().string};const Me=null;var Le=t(64729),N=Object.defineProperty,x=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,M=(e,a,o)=>a in e?N(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,J=(e,a)=>{for(var o in a||(a={}))U.call(a,o)&&M(e,o,a[o]);if(x)for(var o of x(a))Z.call(a,o)&&M(e,o,a[o]);return e};const He=()=>{var e;const{guidedTourState:a,setSkipped:o}=useGuidedTour(),{formatMessage:l}=useIntl(),{trackUsage:d}=useTracking(),f=Object.entries(layout).map(([m,i])=>({key:m,title:i.home.title,content:React.createElement(LinkButton,{onClick:()=>d(i.home.trackingEvent),to:i.home.cta.target,endIcon:React.createElement(ArrowRight,null)},l(i.home.cta.title))})),k=(e=f.map(m=>J({isDone:Object.entries(a[m.key]).every(([,i])=>i)},m)).find(m=>!m.isDone))==null?void 0:e.key,C=()=>{o(!0),d("didSkipGuidedtour")};return React.createElement(Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},React.createElement(Stack,{spacing:6},React.createElement(Typography,{variant:"beta",as:"h2"},l({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),React.createElement(StepperHomepage,{sections:f,currentSectionKey:k})),React.createElement(Flex,{justifyContent:"flex-end"},React.createElement(Button,{variant:"tertiary",onClick:C},l({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},be=null;var Y=t(22499),Q=t(10407),Pe=t(74657),X=t(42365),q=t.n(X),_=t(94869),ee=t.n(_),te=t(70450),ne=t.n(te),ae=t(73910),oe=t.n(ae),re=t(3849),le=t.n(re),ie=t(90431),se=t.n(ie);const ce=(0,s.default)(ee())`
  path {
    fill: #7289da !important;
  }
`,de=(0,s.default)(ne())`
  > path:first-child {
    fill: #ff4500;
  }
`,L=(0,s.default)(oe())`
  > path:first-child {
    fill: #8e75ff;
  }
  > path:nth-child(2) {
    fill: #8e75ff;
  }
  > path:nth-child(3) {
    fill: #8e75ff;
  }
`,me=(0,s.default)(le())`
  path {
    fill: #1da1f2 !important;
  }
`,pe=(0,s.default)(se())`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,ue=[{name:"Github",link:"https://github.com/strapi/strapi/",icon:n.createElement(q(),{fill:"#7289DA"}),alt:"github"},{name:"Discord",link:"https://slack.strapi.io/",icon:n.createElement(ce,null),alt:"discord"},{name:"Reddit",link:"https://www.reddit.com/r/Strapi/",icon:n.createElement(de,null),alt:"reddit"},{name:"Twitter",link:"https://twitter.com/strapijs",icon:n.createElement(me,null),alt:"twitter"},{name:"Forum",link:"https://forum.strapi.io",icon:n.createElement(pe,null),alt:"forum"},{name:"Blog",link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:n.createElement(L,null),alt:"blog"},{name:"We are hiring!",link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:n.createElement(L,null),alt:"career"}],ge=(0,s.default)(Y.LinkButton)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:e})=>e.spaces[6]};
    height: ${({theme:e})=>e.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,fe=(0,s.default)(g.Grid)`
  row-gap: ${({theme:e})=>e.spaces[2]};
  column-gap: ${({theme:e})=>e.spaces[4]};
`,Ge=()=>{const{formatMessage:e}=useIntl();return React.createElement(Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},React.createElement(Box,{paddingBottom:7},React.createElement(Stack,{spacing:5},React.createElement(Stack,{spacing:3},React.createElement(Typography,{variant:"delta",as:"h2",id:"join-the-community"},e({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),React.createElement(Typography,{textColor:"neutral600"},e({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),React.createElement(Link,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:React.createElement(ExternalLink,null)},e({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),React.createElement(fe,null,ue.map(a=>React.createElement(GridItem,{col:6,s:12,key:a.name},React.createElement(ge,{size:"L",startIcon:a.icon,variant:"tertiary",href:a.link,isExternal:!0},a.name)))))},Ie=null,he=(0,s.default)(v.Typography)`
  word-break: break-word;
`,ye=(0,s.default)(O.Stack)`
  align-items: flex-start;
`,R=({hasCreatedContentType:e,onCreateCT:a})=>{const{formatMessage:o}=(0,y.useIntl)();return n.createElement("div",null,n.createElement(p.Box,{paddingLeft:6,paddingBottom:10},n.createElement(ye,{spacing:5},n.createElement(v.Typography,{as:"h1",variant:"alpha"},o(e?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),n.createElement(he,{textColor:"neutral600",variant:"epsilon"},o(e?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),e?n.createElement(Q.Link,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):n.createElement(F.Button,{size:"L",onClick:a,endIcon:n.createElement(A(),null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};R.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},R.propTypes={hasCreatedContentType:r().bool,onCreateCT:r().func};const Ee=R;var je=t(97557),De=t(64214),Oe=t(91021),Fe=t(46884);const h=s.default.a`
  text-decoration: none;
`,We=()=>{const{formatMessage:e}=useIntl(),{trackUsage:a}=useTracking(),o=l=>{a(l)};return React.createElement(Stack,{spacing:5},React.createElement(h,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},React.createElement(ContentBox,{title:e({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:e({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:React.createElement(InformationSquare,null),iconBackground:"primary100"})),React.createElement(h,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},React.createElement(ContentBox,{title:e({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:e({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:React.createElement(CodeSquare,null),iconBackground:"warning100"})),React.createElement(h,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},React.createElement(ContentBox,{title:e({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:e({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:React.createElement(PlaySquare,null),iconBackground:"secondary100"})),React.createElement(h,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},React.createElement(ContentBox,{title:e({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:e({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:React.createElement(FeatherSquare,null),iconBackground:"alternative100"})))},Ae=null,ve=(0,s.default)(p.Box)`
  position: absolute;
  top: 0;
  right: 0;
  img {
    width: ${150/16}rem;
  }
`,Se=()=>{const{collectionTypes:e,singleTypes:a,isLoading:o}=(0,j.bP)(),{guidedTourState:l,isGuidedTourVisible:d,isSkipped:f}=(0,u.useGuidedTour)(),ke=!D(l)&&d&&!f,{push:k}=(0,b.useHistory)(),C=i=>{i.preventDefault(),k("/plugins/content-type-builder/content-types/create-content-type")},m=(0,n.useMemo)(()=>{const i=Ce=>Ce.filter(Te=>Te.isDisplayed);return i(e).length>1||i(a).length>0},[e,a]);return o?n.createElement(u.LoadingIndicatorPage,null):n.createElement(P.Layout,null,n.createElement(y.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},i=>n.createElement(H.Helmet,{title:i[0]})),n.createElement(G.Main,null,n.createElement(ve,null,n.createElement("img",{alt:"","aria-hidden":!0,src:I})),n.createElement(p.Box,{padding:10},n.createElement(g.Grid,null,n.createElement(g.GridItem,{col:8,s:12},n.createElement(Ee,{onCreateCT:C,hasCreatedContentType:m}))),n.createElement(g.Grid,{gap:6},n.createElement(g.GridItem,{col:8,s:12}),n.createElement(g.GridItem,{col:4,s:12})))))},Re=(0,n.memo)(Se)}}]);
