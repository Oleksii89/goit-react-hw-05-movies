"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{7047:function(e,t,n){n.d(t,{Z:function(){return s}});n(2791);var r,a=n(168),u=n(5867).ZP.ul(r||(r=(0,a.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),i=n(7689),c=n(1087),o=n(184),s=function(e){var t=e.movies,n=(0,i.TH)();return(0,o.jsx)(u,{children:t.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{state:{from:n},to:"/movies/".concat(e.id),children:e.original_title})},e.id)}))})}},680:function(e,t,n){n.r(t);var r=n(4165),a=n(5861),u=n(5510),i=n(7047),c=n(2791),o=n(9434),s=n(4390),p=n(184);t.default=function(){var e=(0,o.v9)((function(e){return e.movieList.moviesData})),t=(0,o.v9)((function(e){return e.movieList.isLoading})),n=(0,o.v9)((function(e){return e.movieList.error})),f=(0,o.I0)();return(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f({type:"movieList/setIsLoading",payload:!0}),e.next=4,(0,s.P0)();case 4:t=e.sent,f({type:"movieList/setMoviesData",payload:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),f({type:"movieList/setError",payload:e.t0.message});case 11:return e.prev=11,f({type:"movieList/setIsLoading",payload:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[f]),(0,p.jsxs)(p.Fragment,{children:[t&&(0,p.jsx)(u.a,{}),n&&(0,p.jsx)("p",{children:"error.message"}),(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(i.Z,{movies:e})]})}},4390:function(e,t,n){n.d(t,{Eb:function(){return p},P0:function(){return c},Pg:function(){return s},Ph:function(){return o},SM:function(){return f}});var r=n(4165),a=n(5861),u=n(1243),i="3373af60a4ee1fe7510a1a61c11380e1",c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("\nhttps://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("\nhttps://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t,"&include_adult=false&page=1&language=en-US"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.4e31a3fb.chunk.js.map