(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,n,t){e.exports={login:"Login_login__2Px22",actions:"Login_actions__1b5Oz"}},,function(e,n,t){e.exports={control:"Input_control__7JYPz",invalid:"Input_invalid__1XscM"}},,function(e,n,t){e.exports={card:"Card_card__1te4P"}},function(e,n,t){e.exports={button:"Button_button__2lgkF"}},function(e,n,t){e.exports={home:"Home_home__3idT9"}},function(e,n,t){e.exports={nav:"Navigation_nav__JfAVK"}},function(e,n,t){e.exports={"main-header":"MainHeader_main-header__2OmAM"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),i=t(6),a=t.n(i),l=(t(16),t(2)),s=t(7),u=t.n(s),r=t(0),d=function(e){return Object(r.jsx)("div",{className:"".concat(u.a.card," ").concat(e.className),children:e.children})},j=t(5),b=t.n(j),f=o.a.forwardRef((function(e,n){var t=Object(c.useRef)(),o=function(){t.current.focus()};return Object(c.useImperativeHandle)(n,(function(){return{focus:o}})),Object(r.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===e.isValid?b.a.invalid:""),children:[Object(r.jsx)("label",{htmlFor:e.id,children:e.label}),Object(r.jsx)("input",{ref:t,type:e.type,id:e.id,value:e.value,onChange:e.onChange,onBlur:e.onBlur})]})})),g=t(3),O=t.n(g),v=t(8),h=t.n(v),x=function(e){return Object(r.jsx)("button",{type:e.type||"button",className:"".concat(h.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},m=o.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,n){}}),p=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),o=t[0],i=t[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&i(!0)}),[]);return Object(r.jsx)(m.Provider,{value:{isLoggedIn:o,onLogout:function(){localStorage.removeItem("isLoggedIn"),i(!1)},onLogin:function(){localStorage.setItem("isLoggedIn","1"),i(!0)}},children:e.children})},_=m,L=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.includes("@")}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.includes("@")}:{value:"",isValid:!1}},I=function(e,n){return"USER_PASSWORD"===n.type?{value:n.val,isValid:n.val.trim().length>6}:"INPUT_BLUR"===n.type?{value:e.value,isValid:e.value.trim().length>6}:{value:"",isValid:!1}},N=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),o=t[0],i=t[1],a=Object(c.useReducer)(L,{value:"",isValid:null}),s=Object(l.a)(a,2),u=s[0],j=s[1],b=Object(c.useReducer)(I,{value:"",isValid:null}),g=Object(l.a)(b,2),v=g[0],h=g[1];Object(c.useEffect)((function(){return console.log("EFFECT RUNNING"),function(){console.log("EFFECT RUNNING")}}),[]);var m=u.isValid,p=v.isValid,N=Object(c.useContext)(_),C=Object(c.useRef)(),y=Object(c.useRef)();Object(c.useEffect)((function(){console.log("Checking for validity from useEffect()");var e=setTimeout((function(){console.log("Checking for validation"),i(m&&p)}),2e3);return function(){console.log("CLEAN UP"),clearTimeout(e)}}),[m,p]);return Object(r.jsx)(d,{className:O.a.login,children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o?N.onLogin(u.value,v.value):m?y.current.focus():C.current.focus()},children:[Object(r.jsx)(f,{ref:C,isValid:m,id:"email",label:"E-Mail",type:"email",value:u.value,onChange:function(e){j({type:"USER_INPUT",val:e.target.value})},onBlur:function(){j({type:"INPUT_BLUR"})}}),Object(r.jsx)(f,{ref:y,isValid:p,id:"password",label:"Password",type:"password",value:v.value,onChange:function(e){h({type:"USER_PASSWORD",val:e.target.value})},onBlur:function(){h({type:"INPUT_BLUR"})}}),Object(r.jsx)("div",{className:O.a.actions,children:Object(r.jsx)(x,{type:"submit",className:O.a.btn,children:"Login"})})]})})},C=t(9),y=t.n(C),R=function(e){var n=Object(c.useContext)(_);return Object(r.jsxs)(d,{className:y.a.home,children:[Object(r.jsx)("h1",{children:"Welcome back!"}),Object(r.jsx)(x,{onClick:n.onLogout,children:"Log Out"})]})},U=t(10),E=t.n(U),P=function(e){var n=Object(c.useContext)(_);return Object(r.jsx)("nav",{className:E.a.nav,children:Object(r.jsxs)("ul",{children:[n.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Users"})}),n.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"/",children:"Admin"})}),n.isLoggedIn&&Object(r.jsx)("li",{children:Object(r.jsx)("button",{onClick:n.onLogout,children:"Logout"})})]})})},S=t(11),V=t.n(S),T=function(e){return Object(r.jsxs)("header",{className:V.a["main-header"],children:[Object(r.jsx)("h1",{children:"A Typical Page"}),Object(r.jsx)(P,{onLogout:e.onLogout})]})};var k=function(){var e=Object(c.useContext)(_);return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(T,{}),Object(r.jsxs)("main",{children:[!e.isLoggedIn&&Object(r.jsx)(N,{}),e.isLoggedIn&&Object(r.jsx)(R,{})]})]})};a.a.render(Object(r.jsx)(p,{children:Object(r.jsx)(k,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c05fdb07.chunk.js.map