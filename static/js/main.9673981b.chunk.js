(this.webpackJsonpmonsters_rolodex=this.webpackJsonpmonsters_rolodex||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(3),c=n.n(r),o=(n(12),n(4)),a=n(5),i=n(7),h=n(6),u=(n(13),n(0)),l=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(u.jsxs)("h2",{children:[" ",e.monster.name," "]}),Object(u.jsxs)("p",{children:[" ",e.monster.email," "]})]})},j=(n(15),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(l,{monster:e},e.id)}))})}),d=(n(16),function(e){return Object(u.jsx)("input",{className:"search-box",type:"search",placeholder:"search monsters",onChange:e.onSearchChange})}),m=(n(17),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Rolodex"}),Object(u.jsx)(d,{onSearchChange:this.onSearchChange}),Object(u.jsx)(j,{monsters:s})]})}}]),n}(s.Component));c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.9673981b.chunk.js.map