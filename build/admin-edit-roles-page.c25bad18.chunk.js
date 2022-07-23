"use strict";(self.webpackChunkmyjourney_api_v_2=self.webpackChunkmyjourney_api_v_2||[]).push([[2544],{50287:(ae,L,t)=>{t.r(L),t.d(L,{default:()=>k});var e=t(53547),s=t(68547),M=t(49656),B=t(92699),u=t(5493),x=t(19408),T=t(78862),D=t(62031),y=t(9008),G=t(80831),N=t(68717),Z=t.n(N),z=t(27361),C=t.n(z),b=t(97132),O=t(79160),S=t(34626),$=t(67826),A=t(49425),H=t(59626),V=t(55967),W=t(45697),g=t.n(W);const R=({disabled:r,role:a,values:n,errors:i,onChange:d,onBlur:c})=>{const{formatMessage:o}=(0,b.useIntl)();return e.createElement(e.Fragment,null,e.createElement(u.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(y.Stack,{spacing:4},e.createElement($.Flex,{justifyContent:"space-between"},e.createElement(u.Box,null,e.createElement(u.Box,null,e.createElement(A.Typography,{fontWeight:"bold"},a?a.name:o({id:"global.details",defaultMessage:"Details"}))),e.createElement(u.Box,null,e.createElement(A.Typography,{textColor:"neutral500",variant:"pi"},a?a.description:o({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(x.Button,{disabled:!0,variant:"secondary"},o({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount}))),e.createElement(S.Grid,{gap:4},e.createElement(S.GridItem,{col:6},e.createElement(V.TextInput,{disabled:r,name:"name",error:i.name&&o({id:i.name}),label:o({id:"global.name",defaultMessage:"Name"}),onChange:d,onBlur:c,value:n.name||""})),e.createElement(S.GridItem,{col:6},e.createElement(H.Textarea,{disabled:r,label:o({id:"global.description",defaultMessage:"Description"}),name:"description",error:i.name&&o({id:i.name}),onChange:d,onBlur:c},n.description||""))))))};R.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},R.propTypes={disabled:g().bool,errors:g().object.isRequired,onBlur:g().func.isRequired,onChange:g().func.isRequired,role:g().object,values:g().object};const J=R;var I=t(32104),F=t(53209);const K=F.Ry().shape({name:F.Z_().required(s.translatedErrors.required)});var Q=t(25108),X=(r,a,n)=>new Promise((i,d)=>{var c=l=>{try{v(n.next(l))}catch(E){d(E)}},o=l=>{try{v(n.throw(l))}catch(E){d(E)}},v=l=>l.done?i(l.value):Promise.resolve(l.value).then(c,o);v((n=n.apply(r,a)).next())});const Y=()=>{const r=(0,s.useNotification)(),{formatMessage:a}=(0,b.useIntl)(),{params:{id:n}}=(0,M.useRouteMatch)("/settings/roles/:id"),[i,d]=(0,e.useState)(!1),c=(0,e.useRef)(),{lockApp:o,unlockApp:v}=(0,s.useOverlayBlocker)(),{trackUsage:l}=(0,s.useTracking)(),{isLoading:E,data:w}=(0,I.U_)(n),{role:p,permissions:q,isLoading:U,onSubmitSucceeded:_}=(0,I.Dq)(n),ee=f=>X(void 0,null,function*(){try{o(),d(!0);const{permissionsToSend:m,didUpdateConditions:h}=c.current.getPermissions();yield(0,s.request)(`/admin/roles/${n}`,{method:"PUT",body:f}),p.code!=="strapi-super-admin"&&(yield(0,s.request)(`/admin/roles/${n}/permissions`,{method:"PUT",body:{permissions:m}}),h&&l("didUpdateConditions")),c.current.setFormAfterSubmit(),_({name:f.name,description:f.description}),r({type:"success",message:{id:"notification.success.saved"}})}catch(m){Q.error(m.response);const h=C()(m,"response.payload.message","An error occured"),P=C()(m,"response.payload.data.permissions[0]",h);r({type:"warning",message:P})}finally{d(!1),v()}}),j=p.code==="strapi-super-admin";return e.createElement(D.Main,null,e.createElement(s.SettingsPageTitle,{name:"Roles"}),e.createElement(G.Formik,{enableReinitialize:!0,initialValues:{name:p.name,description:p.description},onSubmit:ee,validationSchema:K,validateOnChange:!1},({handleSubmit:f,values:m,errors:h,handleChange:P,handleBlur:te})=>e.createElement("form",{onSubmit:f},e.createElement(e.Fragment,null,e.createElement(T.HeaderLayout,{primaryAction:e.createElement(y.Stack,{horizontal:!0,spacing:2},e.createElement(x.Button,{disabled:p.code==="strapi-super-admin",onClick:f,loading:i,size:"L"},a({id:"global.save",defaultMessage:"Save"}))),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(s.Link,{startIcon:e.createElement(Z(),null),to:"/settings/roles"},a({id:"global.back",defaultMessage:"Back"}))}),e.createElement(T.ContentLayout,null,e.createElement(y.Stack,{spacing:6},e.createElement(J,{isLoading:U,disabled:j,errors:h,values:m,onChange:P,onBlur:te,role:p}),!E&&!U?e.createElement(u.Box,{shadow:"filterShadow",hasRadius:!0},e.createElement(O.Z,{isFormDisabled:j,permissions:q,ref:c,layout:w})):e.createElement(u.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.LoadingIndicatorPage,null))))))))},k=()=>{const r=(0,e.useMemo)(()=>({read:B.Z.settings.roles.read,update:B.Z.settings.roles.update}),[]),{isLoading:a,allowedActions:{canRead:n,canUpdate:i}}=(0,s.useRBAC)(r);return a?e.createElement(s.LoadingIndicatorPage,null):!n&&!i?e.createElement(M.Redirect,{to:"/"}):e.createElement(Y,null)}}}]);
