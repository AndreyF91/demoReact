(this.webpackJsonpsamurai=this.webpackJsonpsamurai||[]).push([[0],{103:function(e,t,n){},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(37),a=n(3),s="ADD-MESSAGE",c={dialogsData:[{id:1,name:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439"},{id:2,name:"\u0410\u043a\u0430\u043a\u0438\u0439"},{id:3,name:"\u0414\u0430\u0437\u0434\u0440\u0430\u043f\u0435\u0440\u043c\u0430"},{id:4,name:"\u0410\u043d\u0434\u0440\u0435\u044f\u043d"},{id:5,name:"\u0411\u0430\u0440\u0430\u043d\u043a\u0438\u043d"},{id:6,name:"\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u0435\u0432"}],messagesData:[{id:1,message:"\u0422\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442"},{id:2,message:"\u0422\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 "},{id:3,message:"\u0422\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442 \u0442\u0435\u043a\u0441\u0442"}]},i=function(e){return{type:"ADD-MESSAGE",newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:e.messagesData.length+1,message:t.newMessage};return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[n])});default:return e}}},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));var r=n(127),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"a815d121-f88b-45aa-b9e2-be2373f0760c"}}),s={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},postStatus:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},deleteStatus:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getAuth:function(){return a.get("auth/me")},logIn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logOut:function(){return a.delete("auth/login")}},i={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={getCaptcha:function(){return a.get("/security/get-captcha-url")}}},158:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},256:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=(n(158),n(62)),c=n.n(s),i=n(12),o=n(27),u=n(28),l=n(30),d=n(29),f=(n(165),n(15)),j=n(7),b=n.p+"static/media/work_progress.7902837e.gif",p=(n(166),n(0)),h=function(e){return Object(p.jsx)("div",{className:"workInProgress_inner",children:Object(p.jsx)("img",{className:"workInProgress",src:b,alt:"\u0417\u0430\u0433\u043b\u0443\u0448\u043a\u0430"})})},m=(n(168),function(){return Object(p.jsx)("div",{className:"news",children:Object(p.jsx)(h,{})})}),O=(n(169),function(){return Object(p.jsx)("div",{className:"music",children:Object(p.jsx)(h,{})})}),g=(n(170),function(){return Object(p.jsx)("div",{className:"settings",children:Object(p.jsx)(h,{})})}),x=(n(71),function(e){return Object(p.jsxs)("div",{className:"people__cell",children:[Object(p.jsx)("a",{href:"/",className:"people__cell--ava",children:Object(p.jsx)("img",{src:e.friendAva,alt:"",className:"people__cell--img"})}),Object(p.jsx)("div",{className:"people__cell--name",children:e.friendName})]})}),v=function(e){var t=e.friend.map((function(e){return Object(p.jsx)(x,{friendName:e.friendName,friendAva:e.friendAva},e.id)}));return Object(p.jsxs)("div",{className:"sidebar__wrapper",children:[Object(p.jsx)("nav",{className:"sidebar",children:Object(p.jsxs)("ul",{className:"sidebar__list",children:[Object(p.jsx)("li",{className:"sidebar__list--item",children:Object(p.jsx)(f.b,{className:"sidebar__list--link",to:"/Person",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(p.jsx)("li",{className:"sidebar__list--item",children:Object(p.jsx)(f.b,{className:"sidebar__list--link",to:"/Dialogs",children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})}),Object(p.jsx)("li",{className:"sidebar__list--item",children:Object(p.jsx)(f.b,{className:"sidebar__list--link",to:"/News",children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(p.jsx)("li",{className:"sidebar__list--item",children:Object(p.jsx)(f.b,{className:"sidebar__list--link",to:"/Music",children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(p.jsx)("li",{className:"sidebar__list--item",children:Object(p.jsx)(f.b,{className:"sidebar__list--link",to:"/Users",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(p.jsx)("li",{className:"sidebar__list--item",children:Object(p.jsx)(f.b,{className:"sidebar__list--link",to:"/Settings",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})}),Object(p.jsxs)("div",{className:"sidebar__friends",children:[Object(p.jsxs)("div",{className:"sidebar__title",children:[Object(p.jsx)("h3",{children:"\u0414\u0440\u0443\u0437\u044c\u044f"}),Object(p.jsx)("span",{children:e.friend.length})]}),Object(p.jsx)("div",{className:"sidebar__friends--line"}),Object(p.jsx)("div",{className:"sidebar__friends--inner",children:Object(p.jsx)("div",{className:"people__row",children:t})})]})]})},_=Object(i.b)((function(e){return{friend:e.sidebar.friend}}),(function(e){return{}}))(v),w=n(10),N=n.n(w),y=n(16),S=n(37),P=n(3),k=n(14),A=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),r):e}))},C="FOLLOW",D="UNFOLLOW",T="SET-USERS",I="SET-CURRENT-PAGE",E="SET-USERS-TOTAL-COUNT",U="IS-FETCHING",M="FOLLOW-IN-PROGRESS",F={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followInProgress:[]},z=function(e){return{type:C,userID:e}},L=function(e){return{type:D,userID:e}},R=function(e){return{type:U,isFetching:e}},G=function(e,t){return{type:M,followStatus:e,userId:t}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(P.a)(Object(P.a)({},e),{},{users:A(e.users,t.userID,"id",{followed:!0})});case D:return Object(P.a)(Object(P.a)({},e),{},{users:A(e.users,t.userID,"id",{followed:!1})});case T:return Object(P.a)(Object(P.a)({},e),{},{users:Object(S.a)(t.users)});case I:return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case E:return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.totalCount});case U:return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case M:return Object(P.a)(Object(P.a)({},e),{},{followInProgress:t.followStatus?[].concat(Object(S.a)(e.followInProgress),[t.userId]):e.followInProgress.filter((function(e){return e!==t.userId}))});default:return e}},W=(n(191),n(93)),Z=(n(192),function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],a=1;a<=t;a++)n.push(a);var s=Math.ceil(t/10),c=Object(r.useState)(1),i=Object(W.a)(c,2),o=i[0],u=i[1],l=10*(o-1)+1,d=10*o;return Object(p.jsxs)("div",{className:"items__counter--list",children:[o>1&&Object(p.jsx)("button",{className:"items__counter--button",onClick:function(){return u(1)},children:"\u041d\u0430\u0447\u0430\u043b\u043e"}),o>1&&Object(p.jsx)("button",{className:"items__counter--button",onClick:function(){return u(o-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),n.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(p.jsx)("p",{onClick:function(n){e.onPageChanged(t)},className:"items__counter--item ".concat(e.currentPage===t&&"items__counter--selected"," "),children:t})})),s>o&&Object(p.jsx)("button",{className:"items__counter--button",onClick:function(){return u(o+1)},children:"\u0412\u043f\u0435\u0440\u0435\u0434"}),s>o&&Object(p.jsx)("button",{className:"items__counter--button",onClick:function(){return u(s)},children:"\u041a\u043e\u043d\u0435\u0446"})]})}),B=n(63),q=function(e){return Object(p.jsxs)("div",{className:"users__item",children:[Object(p.jsxs)("div",{className:"users__item--left",children:[Object(p.jsx)(f.b,{to:"/Person/"+e.user.id,children:Object(p.jsx)("a",{href:"/",className:"users__link",children:Object(p.jsx)("img",{className:"users__item--ava",src:null!=e.user.photos.small?e.user.photos.small:B.a,alt:""})})}),e.user.followed?Object(p.jsx)("button",{disabled:e.followStatus.some((function(t){return t===e.user.id})),onClick:function(){e.unfollowThunk(e.user.id)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):Object(p.jsx)("button",{disabled:e.followStatus.some((function(t){return t===e.user.id})),onClick:function(){e.followThunk(e.user.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("div",{className:"users__item--info",children:[Object(p.jsxs)("div",{className:"users__item--info--top",children:[Object(p.jsx)("div",{className:"users__item--info--name",children:Object(p.jsx)("p",{children:e.user.name})}),Object(p.jsxs)("div",{className:"users__item--info--location",children:["\u0441\u0442\u0440\u0430\u043d\u0430",", ","\u0433\u043e\u0440\u043e\u0434"]})]}),Object(p.jsx)("div",{className:"users__item--info--status",children:null===e.user.status?"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442":e.user.status})]})]})},J=function(e){return Object(p.jsxs)("section",{className:"users",children:[Object(p.jsx)("h2",{className:"users__title",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),Object(p.jsx)("div",{className:"users__counter",children:Object(p.jsx)(Z,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalItemsCount:e.totalUsersCount,pageSize:e.pageSize})}),Object(p.jsx)("div",{className:"users__item__wrapper",children:e.users.map((function(t){return Object(p.jsx)(q,{user:t,users:e.users,followStatus:e.followStatus,unfollowThunk:e.unfollowThunk,followThunk:e.followThunk},t.id)}))})]})},V=n(65),X=n(91),Y=n(11),K=function(e){return e.usersPage.users},$=function(e){return e.usersPage.pageSize},Q=function(e){return e.usersPage.totalUsersCount},ee=function(e){return e.usersPage.currentPage},te=function(e){return e.usersPage.isFetching},ne=function(e){return e.usersPage.followInProgress},re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[this.props.fetching?Object(p.jsx)(V.a,{}):null,Object(p.jsx)(J,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followStatus:this.props.followStat,followStatusInProgress:this.props.followStatus,followThunk:this.props.followThunk,unfollowThunk:this.props.unfollowThunk})]})}}]),n}(a.a.Component),ae=Object(Y.compose)(Object(i.b)((function(e){return{users:K(e),pageSize:$(e),totalUsersCount:Q(e),currentPage:ee(e),fetching:te(e),followStat:ne(e)}}),{follow:z,unfollow:L,setCurrentPage:function(e){return{type:I,currentPage:e}},followStatus:G,getUsers:function(e,t){return function(){var n=Object(y.a)(N.a.mark((function n(r){var a;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(R(!0)),n.next=3,k.d.getUsers(e,t);case 3:a=n.sent,r(R(!1)),r((c=a.items,{type:T,users:c})),r((s=a.totalCount,{type:E,totalCount:s}));case 7:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},followThunk:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(G(!0,e)),t.next=3,k.d.postStatus(e);case 3:0===t.sent.resultCode&&n(z(e)),n(G(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowThunk:function(e){return function(){var t=Object(y.a)(N.a.mark((function t(n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(G(!0,e)),t.next=3,k.d.deleteStatus(e);case 3:0===t.sent.resultCode&&n(L(e)),n(G(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),X.a)(re),se=(n(103),n.p+"static/media/logout.5f94b855.png"),ce=function(e){return Object(p.jsx)("header",{className:"header",children:Object(p.jsxs)("div",{className:"header__inner",children:[Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{className:"header__logo",src:"https://image.flaticon.com/icons/png/128/187/187902.png",alt:"logo"})}),Object(p.jsxs)("div",{className:"header__login",children:[e.isAuth?e.login:Object(p.jsx)(f.b,{to:"/login",children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435"}),Object(p.jsx)("div",{className:"header__ava",children:Object(p.jsx)("img",{className:"header__ava--login",src:e.userAva?e.userAva.small:B.a,alt:"userAva"})}),e.isAuth&&Object(p.jsx)("img",{onDoubleClick:e.logOut,className:"header__ava--logout",src:se,alt:"logout"})]})]})})},ie=n(33),oe="SET-USER-DATA",ue="SET-PROFILE-DATA",le="SET-CAPTCHA-URL",de={userId:null,email:null,login:null,photos:null,isAuth:!1,captchaUrl:null},fe=function(e,t,n,r){return{type:oe,data:{userId:e,email:t,login:n,isAuth:r}}},je=function(e){return{type:ue,photos:e}},be=function(e){return{type:le,payload:{captchaUrl:e}}},pe=function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){var n,r,a,s,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.getAuth();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(fe(a,s,c,!0)),k.b.getProfile(a).then((function(e){t(je(e.data.photos))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){var n,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.c.getCaptcha();case 2:n=e.sent,r=n.data.url,t(be(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(P.a)(Object(P.a)({},e),t.data);case ue:return Object(P.a)(Object(P.a)({},e),{},{photos:t.photos});case le:return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},Oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)(ce,Object(P.a)({},this.props))}}]),n}(a.a.Component),ge=Object(i.b)((function(e){return{userId:e.auth.userId,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth,userAva:e.auth.photos}}),{setAuthUserData:fe,setProfileData:je,logOut:function(){return function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.logOut();case 2:0===e.sent.data.resultCode&&(t(fe(null,null,null,!1)),t(je(null)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),xe=n(86),ve=n(125),_e=n(41),we=n(40),Ne=(n(256),Object(_e.b)(20)),ye=Object(ve.a)({form:"Login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(p.jsxs)("form",{className:"login__form",onSubmit:t,children:[Object(p.jsx)(xe.a,{className:"login__form--item",autoComplete:"off",type:"text",name:"login",placeholder:"Email-\u0430\u0434\u0440\u0435\u0441",component:we.a,validate:[_e.c,Ne,_e.a]}),Object(p.jsx)(xe.a,{className:"login__form--item",type:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",component:we.a,validate:[_e.c,Ne]}),Object(p.jsxs)("div",{className:"login__remember",children:[Object(p.jsx)(xe.a,{type:"checkbox",name:"rememberMe",component:we.a}),Object(p.jsx)("p",{children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})]}),n&&Object(p.jsx)("div",{className:"form__summaryError",children:n}),r&&Object(we.c)("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u0430\u043f\u0442\u0447\u0443","captcha",[_e.c],we.a,{},"login__form--item"),r&&Object(p.jsx)("img",{className:"login__captcha",src:r,alt:""}),Object(p.jsx)("button",{className:"login__btn",children:"\u0412\u043e\u0439\u0442\u0438"})]})})),Se=Object(i.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(y.a)(N.a.mark((function a(s){var c,i;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.logIn(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?s(pe()):(10===c.data.resultCode&&s(he()),i=c.data.messages.length>0?c.data.messages[0]:"\u041a\u0430\u043a\u0430\u044f-\u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430",s(Object(ie.a)("Login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(p.jsx)(j.a,{to:"/Person"}):Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(p.jsx)(ye,{captchaUrl:e.captchaUrl,onSubmit:function(t){var n=t.login,r=t.password,a=t.rememberMe,s=t.captcha;e.login(n,r,a,s)}})]})})),Pe="SET-INITIALIZED",ke={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Pe:return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},Ce=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),De=a.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",(function(e){console.warn("\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u041d\u0435\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 Promise. \u041f\u043e\u0437\u043e\u0440 \u0432\u0430\u043c! \u041f\u0440\u0438\u0447\u0438\u043d\u0430: "+e.reason)}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",(function(e){console.warn("\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u041d\u0435\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 Promise. \u041f\u043e\u0437\u043e\u0440 \u0432\u0430\u043c! \u041f\u0440\u0438\u0447\u0438\u043d\u0430: "+e.reason)}))}},{key:"render",value:function(){return this.props.initiaized?Object(p.jsx)(f.a,{children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)(ge,{}),Object(p.jsxs)("div",{className:"content__wrapper",children:[Object(p.jsx)(_,{}),Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.a,{exact:!0,from:"/",to:"/person"}),Object(p.jsx)(j.b,{path:"/person/:userId?",render:function(){return Object(p.jsx)(De,{})}}),Object(p.jsx)(j.b,{path:"/dialogs",render:function(){return Object(p.jsx)(Ce,{})}}),Object(p.jsx)(j.b,{path:"/news",render:function(){return Object(p.jsx)(m,{})}}),Object(p.jsx)(j.b,{path:"/music",render:function(){return Object(p.jsx)(O,{})}}),Object(p.jsx)(j.b,{path:"/settings",render:function(){return Object(p.jsx)(g,{})}}),Object(p.jsx)(j.b,{path:"/users",render:function(){return Object(p.jsx)(ae,{})}}),Object(p.jsx)(j.b,{path:"/login",render:function(){return Object(p.jsx)(Se,{})}}),Object(p.jsx)(j.b,{exact:!0,path:"*",render:function(){return Object(p.jsx)("div",{children:"404 not found"})}})]})})]})]})}):Object(p.jsx)(V.a,{})}}]),n}(a.a.Component),Ie=Object(Y.compose)(Object(i.b)((function(e){return{initiaized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pe());Promise.all([t]).then((function(){e({type:Pe})}))}}}))(Te),Ee=n(129),Ue=n(92),Me=n(124),Fe={friend:[{id:1,friendName:"\u041f\u043e\u043b\u044f",friendAva:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"},{id:2,friendName:"\u0412\u0430\u0441\u0438\u043b\u0438\u0439",friendAva:"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/366-mj-7703-fon-jj.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d144b28b5ebf828b7d2a1bb5b31efdb6"},{id:3,friendName:"\u0412\u0438\u043a\u0430",friendAva:"https://thumbs.dreamstime.com/b/bored-female-person-yawning-indoors-girl-covering-mouth-gray-background-closeup-redhead-woman-waiting-something-beautiful-199834115.jpg"},{id:4,friendName:"\u0410\u043a\u0430\u043a\u0438\u0439",friendAva:"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"},{id:5,friendName:"\u0412\u0438\u043d\u0446\u0435\u0441\u043b\u0430\u0432",friendAva:"https://static5.depositphotos.com/1000580/395/i/600/depositphotos_3954362-stock-photo-man-jump.jpg"},{id:6,friendName:"\u0413\u043b\u0430\u0444\u0438\u0440\u0430",friendAva:"https://www.freedigitalphotos.net/images/category-images/201.jpg"}]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},Le=n(130),Re=n(126),Ge=Object(Y.combineReducers)({profilePage:Ue.b,messagesPage:Me.b,sidebar:ze,usersPage:H,auth:me,form:Re.a,app:Ae}),He=Object(Y.createStore)(Ge,Object(Ee.composeWithDevTools)(Object(Y.applyMiddleware)(Le.a)));window.store=He;var We=He;c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(i.a,{store:We,children:Object(p.jsx)(Ie,{})})}),document.getElementById("root"))},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var r=n(3),a=n(131),s=(n(1),n(86)),c=(n(194),n(0)),i=["input","meta","Formtype"],o=function(e){var t=e.input,n=e.meta,s=e.Formtype,o=Object(a.a)(e,i);return Object(c.jsxs)("div",{className:"form__control ".concat(n.touched&&n.error&&"form__error"),children:[Object(c.jsx)(s,Object(r.a)(Object(r.a)({},t),o)),n.touched&&n.error&&Object(c.jsx)("span",{children:n.error})]})},u=function(e){return Object(c.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{Formtype:"textarea"}))},l=function(e){return Object(c.jsx)(o,Object(r.a)(Object(r.a)({},e),{},{Formtype:"input"}))},d=function(e,t,n,a){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5?arguments[5]:void 0;return Object(c.jsx)(s.a,Object(r.a)(Object(r.a)({placeholder:e,name:t,validate:n,component:a},i),{},{className:o}))}},41:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c"},a=function(e){return function(t){if(!(t&&t.length<=e))return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 - ".concat(e)}},s=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0440\u0435\u0441":void 0}},63:function(e,t,n){"use strict";t.a=n.p+"static/media/userDF.fa78afe4.png"},65:function(e,t,n){"use strict";var r=n.p+"static/media/loading.816e2b9b.gif",a=(n(193),n(0));t.a=function(e){return Object(a.jsx)("img",{className:"preloader",src:r,alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}},71:function(e,t,n){},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(3),a=n(27),s=n(28),c=n(30),i=n(29),o=n(1),u=n.n(o),l=n(12),d=n(7),f=n(0),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(r.a)({},this.props)):Object(f.jsx)(d.a,{to:"/login"})}}]),o}(u.a.Component);return Object(l.b)(j)(t)}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return x})),n.d(t,"h",(function(){return v})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return w}));var r=n(10),a=n.n(r),s=n(16),c=n(37),i=n(3),o=n(33),u=n(14),l="ADD-POST",d="SET-USER-PROFILE",f="SET-USER-STATUS",j="DELETE-POST",b="SAVE-PHOTO",p={postData:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0434\u0435\u043b\u0430?",likesCounter:1e3},{id:2,message:"\u041f\u0440\u0438\u0432\u0435\u0442 \u041c\u0438\u0440! ",likesCounter:200}],profile:null,status:""},h=function(e){return{type:"ADD-POST",myPostText:e}},m=function(e){return{type:d,profile:e}},O=function(e){return{type:f,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n(m(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=9;break}n(g(s)),t.next=11;break;case 9:return n(Object(o.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:e.postData.length+1,message:t.myPostText,likesCounter:0};return Object(i.a)(Object(i.a)({},e),{},{postData:[].concat(Object(c.a)(e.postData),[n])});case j:return Object(i.a)(Object(i.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[295,1,2]]]);
//# sourceMappingURL=main.7d43b6d9.chunk.js.map