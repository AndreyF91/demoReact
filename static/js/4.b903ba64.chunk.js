(this.webpackJsonpsamurai=this.webpackJsonpsamurai||[]).push([[4],{295:function(e,t,s){},297:function(e,t,s){"use strict";s.r(t);var a=s(5),c=s(27),n=s(28),r=s(30),i=s(29),o=s(1),j=s.n(o),u=s(12),l=s(91),p=(s(295),s(0)),b=function(e){return Object(p.jsxs)("div",{className:"person__posts--area--item",children:[Object(p.jsx)("div",{className:"avatar"}),Object(p.jsx)("p",{className:"post__text",children:e.message}),Object(p.jsxs)("div",{className:"post__likes",children:[" \u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c ",Object(p.jsx)("span",{children:e.likesCounter})," "]})]})},d=s(123),O=s(124),f=s(45),h=s(63),x=Object(f.b)(10),m=Object(O.a)({form:"myPost"})((function(e){return Object(p.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(p.jsx)(d.a,{component:h.a,name:"myPostText",autoComplete:"off",className:"person__posts--textarea",validate:[f.c,x],type:"text",placeholder:"\u0427\u0442\u043e \u043d\u043e\u0432\u043e\u0433\u043e?"}),Object(p.jsx)("button",{className:"person__posts--btn",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),_=function(e){var t=e.postData.map((function(e){return Object(p.jsx)(b,{likesCounter:e.likesCounter,message:e.message},e.id)}));return Object(p.jsxs)("div",{className:"person__posts",children:[Object(p.jsx)("h3",{children:"\u041c\u043e\u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(p.jsx)(m,{onSubmit:function(t){e.addPost(t.myPostText)}}),Object(p.jsx)("div",{className:"person__posts--area",children:t})]})},v=Object(u.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(l.a)(t))}}}))(_),g=s(65),N=s(62),P=s(125),S=function(e){var t=Object(o.useState)(!0),s=Object(P.a)(t,2),a=s[0],c=s[1],n=Object(o.useState)(e.status),r=Object(P.a)(n,2),i=r[0],j=r[1];Object(o.useEffect)((function(){j(e.status)}),[e.status]);return Object(p.jsx)("div",{className:"profile__info",children:a?Object(p.jsx)("span",{onClick:function(){c(!1)},children:e.status||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441"}):Object(p.jsx)("input",{value:i,onChange:function(e){j(e.target.value)},onBlur:function(){c(!0),e.updateStatus(i)},onFocus:function(e){e.target.select()},autoFocus:!0,type:"text"})})},y=function(e){return e.profile?Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"person__header"}),Object(p.jsx)("div",{className:"person__avatar",children:Object(p.jsx)("img",{className:"person__avatar--img",src:null!=e.profile.photos.large?e.profile.photos.large:N.a,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",srcset:""})}),Object(p.jsxs)("div",{className:"person__info",children:[Object(p.jsx)("h3",{className:"person__name",children:e.profile.fullName}),Object(p.jsx)("div",{className:"person__line"}),Object(p.jsx)(S,{status:e.status,updateStatus:e.updateStatus}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:[" ",Object(p.jsx)("span",{children:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"}),"  2 \u044f\u043d\u0432\u0430\u0440\u044f"]}),Object(p.jsxs)("li",{children:[" ",Object(p.jsx)("span",{children:"\u0413\u043e\u0440\u043e\u0434:"}),"  \u041c\u0438\u043d\u0441\u043a"]}),Object(p.jsxs)("li",{children:[" ",Object(p.jsx)("span",{children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435:"}),"  \u0411\u0413\u0423'11"]}),Object(p.jsxs)("li",{children:[" ",Object(p.jsx)("span",{children:"\u0412\u0435\u0431\u0441\u0430\u0439\u0442:"})," ---"]})]})]})]}):Object(p.jsx)(g.a,{})},k=function(e){return Object(p.jsxs)("section",{className:"person",children:[Object(p.jsx)(y,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(p.jsx)(v,{})]})},C=s(10),w=s(90),D=s(9),I=function(e){Object(r.a)(s,e);var t=Object(i.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.myId),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(p.jsx)(k,Object(a.a)(Object(a.a)({},this.props),{},{profile:this.props.profile}))}}]),s}(j.a.Component);t.default=Object(D.compose)(Object(u.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,myId:e.auth.userId}}),{setUserProfile:l.e,getProfile:l.c,getStatus:l.d,updateStatus:l.f}),C.f,w.a)(I)}}]);
//# sourceMappingURL=4.b903ba64.chunk.js.map