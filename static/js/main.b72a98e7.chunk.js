(this["webpackJsonpremainders-frontend"]=this["webpackJsonpremainders-frontend"]||[]).push([[0],{61:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(17),c=n.n(r),i=(n(61),n(20)),o=n(7),u=n(15),l=n.n(u),j=n(26),d=n.n(j),h={api_url:window.API_URL},b=h.api_url+"/api/v1",x=null,O=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:x}},e.prev=1,e.next=4,d.a.get("".concat(b,"/latest"),t);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,d.a.get("".concat(b,"/search/").concat(t),n);case 3:return s=e.sent,console.log("search:"+s),e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={getLatest:function(){return d.a.get("".concat(b,"/latest")).then((function(e){return e.data}))},getSearch:m,setToken:function(e){x="Bearer ".concat(e)},getAsyncLatest:O},g=n(90),f=n(91),v=n(54),w=n(93),y=n(89),N=n(1),k=function(e){var t=e.hLog,n=e.setUsername,s=e.setPass;return Object(N.jsxs)(w.a,{className:"position-center",onSubmit:t,children:[Object(N.jsxs)(w.a.Group,{className:"mb-3",children:[Object(N.jsx)(w.a.Label,{className:"mt-1",children:"K\xe4ytt\xe4j\xe4"}),Object(N.jsx)(w.a.Control,{id:"username",placeholder:"k\xe4ytt\xe4j\xe4nimi",onChange:function(e){var t=e.target;return n(t.value)}})]}),Object(N.jsxs)(w.a.Group,{className:"mb-3",children:[Object(N.jsx)(w.a.Label,{className:"mt-1",children:"Salasana"}),Object(N.jsx)(w.a.Control,{id:"password",type:"password",placeholder:"salasana",onChange:function(e){var t=e.target;return s(t.value)}})]}),Object(N.jsx)(y.a,{id:"login",className:"mb-3",type:"submit",children:"Kirjaudu"})]})},S=n(94),C=function(e){var t=e.setShow,n=e.success,s=e.loginMsg;return n?n?Object(N.jsxs)(S.a,{variant:"success",onClose:function(){return t(!1)},transition:!0,dismissible:!0,children:[Object(N.jsx)(S.a.Heading,{children:"Onnistui"}),Object(N.jsx)("p",{children:s})]}):void 0:Object(N.jsxs)(S.a,{variant:"danger",onClose:function(){return t(!1)},dismissible:!0,children:[Object(N.jsx)(S.a.Heading,{children:"Virhe!"}),Object(N.jsx)("p",{children:s})]})},_=function(e){var t=e.hLog,n=e.setUsername,s=e.setPass,a=e.user,r=e.show,c=e.setShow,i=e.success,o=e.loginMsg;return Object(N.jsxs)(g.a,{id:"actionform",children:[Object(N.jsx)(f.a,{children:!0===r&&Object(N.jsx)(C,{setShow:c,success:i,loginMsg:o})}),Object(N.jsx)(f.a,{children:Object(N.jsx)(v.a,{children:null===a&&Object(N.jsx)(k,{hLog:t,setUsername:n,setPass:s})})})]})},A=n(95),L=function(e){var t=e.rm,n=e.idx;return Object(N.jsx)("div",{children:Object(N.jsx)(A.a,{children:Object(N.jsxs)(A.a.Body,{children:[Object(N.jsxs)(A.a.Text,{className:"text-center",children:[n+1,"."]}),Object(N.jsxs)(A.a.Text,{children:[Object(N.jsx)("strong",{children:"Vastaanottaja:"})," ",t.to]}),Object(N.jsxs)(A.a.Text,{children:[Object(N.jsx)("strong",{children:"Aihe:"})," ",t.title]}),Object(N.jsxs)(A.a.Text,{children:[Object(N.jsx)("strong",{children:"Muistutus:"}),Object(N.jsx)("br",{})," ",t.message]}),Object(N.jsxs)(A.a.Text,{children:[Object(N.jsx)("strong",{children:"Generoitu:"})," ",t.updated_at]})]})})})},T=function(e){var t=e.rem;return Array.isArray(t)?Object(N.jsx)("div",{children:Object(N.jsx)(g.a,{className:"cardContainer",children:Object(N.jsx)(f.a,{xs:1,md:2,lg:3,className:"g-4",children:t.map((function(e,t){return Object(N.jsx)(v.a,{children:Object(N.jsx)(L,{rm:e,idx:t})},t)}))})})}):Object(N.jsx)("div",{children:Object(N.jsx)(g.a,{children:Object(N.jsx)(f.a,{xs:1,md:2,lg:3,className:"g-4",children:Object(N.jsx)(v.a,{children:Object(N.jsx)(L,{rm:[{to:"testivastaanottaja",title:"testikortti",message:"Jos n\xe4et t\xe4m\xe4n viestin, ohjelma ei saa dataa palvelimelta",updated_at:new Date}],idx:0})})})})})},U=n(92),M=n(53),P=function(e){var t=e.search,n=e.setFlt;return Object(N.jsxs)(w.a,{className:"d-flex p-2",onSubmit:t,children:[Object(N.jsx)(M.a,{className:"me-2",id:"ctrl",type:"text",placeholder:"hakuteksti",onChange:function(e){var t=e.target;return n(t.value)}}),Object(N.jsx)(y.a,{id:"searchbtn",className:"bg-info pr-5",variant:"primary",type:"submit",children:"Hae"})]})},I=function(e){var t=e.user;return Object(N.jsx)(g.a,{children:Object(N.jsxs)("p",{className:"text-light",id:"logged",children:["Kirjautuneena"," ",t.uname," "]})})},B=function(e){var t=e.user,n=e.search,s=e.setFlt,a=e.logout;return Object(N.jsx)(U.a,{className:"navbar fixed-top navbar-light bg-secondary",children:Object(N.jsxs)(g.a,{children:[Object(N.jsx)(U.a.Brand,{className:"text-light",href:"#home",children:"Muistutusten selaus"}),Object(N.jsx)(U.a.Toggle,{}),Object(N.jsxs)(U.a.Collapse,{className:"justify-content-end",children:[null!==t&&Object(N.jsx)(I,{user:t}),null!==t&&Object(N.jsx)(P,{search:n,setFlt:s}),Object(N.jsx)("p",{children:" "}),null!==t&&Object(N.jsx)(y.a,{className:"text-light ml-5",onClick:a,children:"Kirjaudu ulos"})]})]})})},F=function(){return Object(N.jsxs)("footer",{children:[Object(N.jsx)("p",{className:"foottext",children:"Riveria"}),Object(N.jsxs)("p",{children:["Photo by"," ",Object(N.jsx)("a",{href:"https://unsplash.com/@freegraphictoday?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"AbsolutVision"})," ","on"," ",Object(N.jsx)("a",{href:"https://unsplash.com/@freegraphictoday?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]})]})},J=h.api_url+"/login",K=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post(J,t);case 2:return n=e.sent,e.abrupt("return",n.data.token);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V={login:K},D=function(e){"Request failed with status code 401"===e.message?(console.log(e),window.alert("Istunto vanhentunut")):"Network Error"===e.message?window.alert("Yhteys ei toimi"):console.log(e.message)},E=(n(85),n(86),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(""),c=Object(o.a)(r,2),u=c[0],j=c[1],d=Object(s.useState)(""),h=Object(o.a)(d,2),b=h[0],x=h[1],O=Object(s.useState)(""),m=Object(o.a)(O,2),g=m[0],f=m[1],v=Object(s.useState)(null),w=Object(o.a)(v,2),y=w[0],k=w[1],S=Object(s.useState)(!1),C=Object(o.a)(S,2),A=C[0],L=C[1],U=Object(s.useState)(!1),M=Object(o.a)(U,2),P=M[0],I=M[1],J=Object(s.useState)(""),K=Object(o.a)(J,2),E=K[0],G=K[1];Object(s.useEffect)((function(){}),[]);var H=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={uname:b,token:""},e.next=5,V.login({username:b,password:g});case 5:return n.token=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),p.setToken(n.token),k(n),x(""),f(""),e.next=13,p.getAsyncLatest();case 13:s=e.sent,a(s),G("Olet nyt kirjautunut!"),I(!0),L(!0),e.next=25;break;case 20:e.prev=20,e.t0=e.catch(1),G("V\xe4\xe4r\xe4 k\xe4ytt\xe4j\xe4tunnus tai salasana!"),I(!1),L(!0);case 25:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){window.localStorage.removeItem("loggedUser"),window.location.reload()};return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(B,{user:y,search:function(e){e.preventDefault(),p.getSearch(u).then((function(e){a(e)})).catch((function(e){D(e),R()}))},setFlt:j,logout:R}),Object(N.jsx)(_,{hLog:H,setUsername:x,setPass:f,user:y,setShow:L,show:A,success:P,loginMsg:E}),null!==y&&Object(N.jsx)(T,{rem:n}),Object(N.jsx)(F,{})]})});c.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(E,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.b72a98e7.chunk.js.map