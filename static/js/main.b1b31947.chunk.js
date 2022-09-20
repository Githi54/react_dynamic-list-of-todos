(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),l=c(2),n=c(1),i=(c(10),c(11),c(3)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.callbackTodo,s=e.selectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:d()("fas",{"fa-check":e.completed})})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()("far",{"fa-eye":e!==s},{"fa-eye-slash":e===s})})})})})]},e.id)}))})]})},j=function(e){var t=e.filterBy,c=e.setFilterBy,s=e.query,a=e.setQuery;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){c(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){a(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),s.trim()&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")},children:"x"})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var u=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.todo,c=e.callbackTodo,s=Object(n.useState)(null),a=Object(l.a)(s,2),i=a[0],r=a[1];Object(n.useEffect)((function(){var e;t&&(e=t.userId,b("/users/".concat(e))).then(r)}),[t]);return t&&Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),i?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null),r(null)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(o.jsx)("strong",{className:d()({"has-text-danger":!(null!==t&&void 0!==t&&t.completed)},{"has-text-success":null===t||void 0===t?void 0:t.completed}),children:null!==t&&void 0!==t&&t.completed?"Done":"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===i||void 0===i?void 0:i.email),children:null===i||void 0===i?void 0:i.name})]})]})]}):Object(o.jsx)(u,{})]})};function m(e,t){return e.toLowerCase().includes(t.toLowerCase())}var O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),i=Object(l.a)(a,2),d=i[0],O=i[1],x=Object(n.useState)("all"),f=Object(l.a)(x,2),v=f[0],p=f[1],N=Object(n.useState)(""),y=Object(l.a)(N,2),g=y[0],k=y[1],w=Object(n.useState)(c),T=Object(l.a)(w,2),C=T[0],S=T[1];return Object(n.useEffect)((function(){b("/todos").then(s)}),[]),Object(n.useEffect)((function(){switch(v){case"all":S(c.filter((function(e){return m(e.title,g)})));break;case"active":S(c.filter((function(e){return!e.completed})).filter((function(e){return m(e.title,g)})));break;case"completed":S(c.filter((function(e){return e.completed})).filter((function(e){return m(e.title,g)})));break;default:throw new Error("Warning!")}}),[c,v,g]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{filterBy:v,setFilterBy:p,query:g,setQuery:k})}),Object(o.jsx)("div",{className:"block",children:c.length?Object(o.jsx)(r,{todos:C,callbackTodo:O,selectedTodo:d}):Object(o.jsx)(u,{})})]})})}),Object(o.jsx)(h,{todo:d,callbackTodo:O})]})};a.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b1b31947.chunk.js.map