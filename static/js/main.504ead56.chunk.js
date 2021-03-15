(this["webpackJsonpmarvel-comix"]=this["webpackJsonpmarvel-comix"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(18),l=c.n(s),a=(c(27),c(3)),r=c(4),o=(c(28),c(8)),j=c.n(o),d=c(19),m=c(20),u=c.n(m),b=c(21),h=c.n(b),O=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,n,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="f36e1b15baf00be2ff61c947e88add3d","fc1e647f7727f1e75c0ee797dd1fa793040b678b",c=toString(new Date),n=h()(c+"fc1e647f7727f1e75c0ee797dd1fa793040b678b"+t),i=u.a.get("http://gateway.marvel.com/v1/public/comics",{params:{apikey:t,limit:100,hash:n,ts:c},responseType:"json"}).then((function(e){return e.data.data.results.reverse()})),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=(c(50),c(51),c(0)),x=function(e){var t=e.callBack,c=e.comics;return Object(f.jsx)("input",{type:"text",className:"FilterInput",onChange:function(e){var n=e.target.value,i=c.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));t(i)},placeholder:"Type something to filter"})},g=function(e){var t=e.handleFilter,c=e.comics;return Object(f.jsx)("div",{className:"header",children:Object(f.jsx)(x,{callBack:t,comics:c})})},p=c(22),v=(c(53),c(54),c(55),function(e){var t=e.comic,c=e.size;return function(){if(t.images.length>0){var e=t.images[0].path;return Object(f.jsx)("img",{className:c+"comicImg",src:e+("medium"===c?"/portrait_medium.jpg":"xlarge"===c?"/portrait_xlarge.jpg":"small"===c?"/portrait_small.jpg":"uncanny"===c?"/portrait_uncanny.jpg":"/portrait_medium.jpg"),alt:t.title})}return Object(f.jsx)("div",{className:"imgPlaceholder",children:Object(f.jsx)("span",{children:"No image"})})}()}),C=function(e){var t=e.comic,c=e.onSelect,i=e.isSelected,s=e.onToggleModal,l=Object(n.useState)({clicked:!1}),a=Object(r.a)(l,2),o=a[0],j=a[1],d=o.clicked,m=i?"Unselect":"Select";return Object(f.jsxs)("li",{className:i?"comic selected":"comic",onClick:function(){j({clicked:!d})},children:[Object(f.jsx)(v,{comic:t,size:"xlarge"}),Object(f.jsx)("span",{className:"comicTitle",children:t.title}),d?Object(f.jsx)("div",{className:"comicOptions",children:Object(f.jsxs)("div",{className:"btnsBox",children:[Object(f.jsx)("button",{className:"btn comicDetails",onClick:function(){return s(t)},children:"Details"}),Object(f.jsx)("button",{className:"btn selectComic",onClick:function(){return c(t)},children:m})]})}):null]})},N=function(e){var t=e.comics,c=e.selectedComics,n=e.onSelectComic,i=e.toggleModal,s=function(e){if(c)if(c.includes(e)){var t=c.filter((function(t){return t!==e}));n(t)}else n([].concat(Object(p.a)(c),[e]));else n([e])},l=function(e){var t=!1;return c&&c.includes(e)&&(t=!0),t};return Object(f.jsx)("ul",{className:"comicList",children:null!==t&&t.length>0?t.map((function(e,t){return Object(f.jsx)(C,{comic:e,onSelect:s,isSelected:l(e),onToggleModal:i},t)})):null!==t&&0===t.length?Object(f.jsx)("div",{className:"loading nope",children:Object(f.jsx)("p",{children:"No Comics found."})}):Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("p",{children:"Loading Comics..."})})})},k=(c(56),function(e){var t=e.name,c=e.onClick,n=e.show,i=e.disabled,s=void 0!==i&&i;return n?s?Object(f.jsx)("button",{className:s?"button disabled":"button",children:t}):Object(f.jsx)("button",{className:s?"button disabled":"button",onClick:function(){return c()},children:t}):null}),w=(c(57),c(58),function(e){var t=e.onClick;return Object(f.jsx)("button",{className:"closeButton",onClick:t,children:"X"})}),S=(c(59),function(e){var t=e.title,c=e.list;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"listTitle",children:t}),c.length>0?Object(f.jsx)("ul",{className:"inlineList",children:c.map((function(e,t){return Object(f.jsxs)("li",{children:[e.name," | "]},t)}))}):Object(f.jsx)("p",{className:"errorMsg",children:"Not available"})]})}),T=(c(60),function(e){var t=e.description;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h3",{className:"descriptionTitle",children:"Description"}),t?Object(f.jsx)("p",{className:"comicDescription",dangerouslySetInnerHTML:{__html:t}}):Object(f.jsx)("p",{className:"errorMsg",children:"Not available"})]})}),y=function(e){var t=e.show,c=e.content,n=e.onToggle;return function(e){return e?Object(f.jsx)("div",{className:t?"modalBackground":"modalBackground hide",children:Object(f.jsxs)("div",{className:"innerContainer",children:[Object(f.jsx)(w,{onClick:function(){return n(null)}}),Object(f.jsx)("div",{className:"column image",children:Object(f.jsx)(v,{comic:e,size:"uncanny"})}),Object(f.jsxs)("div",{className:"column infos",children:[Object(f.jsx)("h2",{className:"comicTitle",children:e.title}),Object(f.jsx)(S,{title:"Creators",list:e.creators.items}),Object(f.jsx)(S,{title:"Characters",list:e.characters.items}),Object(f.jsx)(T,{description:e.description})]})]})}):null}(c)},M=(c(61),function(e){var t=e.show,c=e.selectedComics,i=e.onToggle,s=Object(n.useState)({disabledEmail:!0}),l=Object(r.a)(s,2),a=l[0],o=l[1],j=a.disabledEmail,d=function(e){var t=e.target.value;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.toLowerCase())?o({disabledEmail:!1}):o({disabledEmail:!0})},m=function(){i(),o({disabledEmail:!0})};return t?Object(f.jsx)("div",{className:"mailerBG",children:Object(f.jsxs)("div",{className:"innerContainer",children:[Object(f.jsx)("h2",{className:"titleContainer",children:"Send comics via email"}),Object(f.jsx)(w,{onClick:function(){return m()}}),Object(f.jsx)("label",{htmlFor:"email",className:"emailLabel",children:"Send to:"}),Object(f.jsx)("input",{type:"email",name:"email",id:"email",className:"emailInput",onChange:d}),Object(f.jsxs)("table",{className:"comicsTable",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{className:"imageColumn",children:"Image"}),Object(f.jsx)("th",{className:"titleColumn",children:"Title"}),Object(f.jsx)("th",{className:"descriptionColumn",children:"Details"})]})}),Object(f.jsx)("tbody",{children:c&&c.length>0?c.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)(v,{comic:e,size:"medium"})}),Object(f.jsx)("td",{children:e.title}),Object(f.jsxs)("td",{children:[Object(f.jsx)(S,{title:"Creators",list:e.creators.items}),Object(f.jsx)(S,{title:"Characters",list:e.characters.items}),Object(f.jsx)(T,{description:e.description})]})]},t)})):null})]}),Object(f.jsx)(k,{name:"Send",disabled:j,show:!0,onClick:function(){return m(),void alert("The email has been sent! Thanks!")}})]})}):null}),B=(c(62),function(){return Object(f.jsx)("div",{className:"footer",children:Object(f.jsxs)("p",{children:["\xa92021 Create by ",Object(f.jsx)("a",{className:"t14g",target:"_blank",rel:"noreferrer",href:"https://github.com/T14g",children:"T14g"})]})})});var L=function(){var e=Object(n.useState)({comics:[],filteredComics:null,selectedComics:[],showingModal:!1,modalContent:null,showMailer:!1}),t=Object(r.a)(e,2),c=t[0],i=t[1],s=c.comics,l=c.filteredComics,o=c.selectedComics,j=c.showingModal,d=c.modalContent,m=c.showMailer;Object(n.useEffect)((function(){O().then((function(e){i({comics:e,filteredComics:e})}))}),[]);var u=function(e){i(Object(a.a)(Object(a.a)({},c),{},{showingModal:!j,modalContent:e}))},b=function(){i(Object(a.a)(Object(a.a)({},c),{},{showMailer:!m}))};return Object(f.jsxs)("div",{className:j||m?"App blockScroll":"App",children:[Object(f.jsx)(g,{handleFilter:function(e){i(Object(a.a)(Object(a.a)({},c),{},{filteredComics:e}))},comics:s}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(N,{comics:l,onSelectComic:function(e){i(Object(a.a)(Object(a.a)({},c),{},{selectedComics:e}))},selectedComics:o,toggleModal:u}),Object(f.jsx)(k,{name:"Share Selected",show:void 0!==o&&0!==o.length,onClick:b})]}),Object(f.jsx)(y,{show:j,content:d,onToggle:u}),Object(f.jsx)(M,{show:m,selectedComics:o,onToggle:b}),Object(f.jsx)(B,{})]})};l.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.504ead56.chunk.js.map