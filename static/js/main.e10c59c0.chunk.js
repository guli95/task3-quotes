(this["webpackJsonpquotes-app"]=this["webpackJsonpquotes-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),c=n(3),a=n.n(c),s=(n(12),n(4)),i=n(5),u=n(7),d=n(6),h=n(0),l=function(t){var e=t.index,n=t.quotesHistory,r=t.error;return r?Object(h.jsx)("h1",{children:"There is no previous quote. Generate a new one"}):0===e&&!1===r?Object(h.jsx)("h1",{children:"Generate a quote"}):e>0?Object(h.jsxs)("p",{children:["Quote for your day: ",Object(h.jsxs)("span",{children:['"',n[e-1].quote,'" ~',n[e-1].author]})]}):void 0},f=function(t){return Object(h.jsx)("button",{onClick:t.action,children:t.text})},j=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={data:["https://picsum.photos/id/220/1280/853"],index:0,error:!1,imgId:[],quotesHistory:[],url:"https://picsum.photos/id/49/1280/853",loader:!0},t.fetchImg=function(){return fetch(t.state.url).then((function(){return t.setState({loader:!1})})).catch((function(t){console.error("Error:",t)}))},t.getPreviousQuote=function(){if(!(t.state.index>0))return t.setState({error:!0});t.setState((function(t){return{index:t.index-1,url:t.imgId[t.index-1],loader:!0}})),t.fetchImg()},t.addQuote=function(){var e=Math.floor(Math.random()*t.state.data.length);t.setState((function(n){return{quotesHistory:n.quotesHistory.concat(t.state.data[e]),index:n.index+1,error:!1,url:"https://picsum.photos/id/".concat(n.index+50,"/1280/853"),imgId:n.imgId.concat(t.state.url),loader:!0}})),fetch(t.state.url).then((function(){return t.setState({loader:!1})})).catch((function(t){console.error("Error:",t)}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(t){return t.json()})).then((function(e){return t.setState((function(t){return{data:t.data.concat(e)}}))})).catch((function(t){console.error("Error:",t)})),this.fetchImg()}},{key:"render",value:function(){var t=this.state,e=t.index,n=t.quotesHistory,r=t.error;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"img",style:{backgroundImage:"url(".concat(this.state.url,")")},children:[this.state.loader?Object(h.jsx)("div",{className:"loader"}):"",Object(h.jsx)(l,{error:r,index:e,quotesHistory:n})]}),Object(h.jsxs)("div",{className:"button-wrapper",children:[Object(h.jsx)(f,{action:this.addQuote,text:"Next Quote"}),Object(h.jsx)(f,{action:this.getPreviousQuote,text:"Previous Quote"})]})]})}}]),n}(o.a.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),r(t),o(t),c(t),a(t)}))};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.e10c59c0.chunk.js.map