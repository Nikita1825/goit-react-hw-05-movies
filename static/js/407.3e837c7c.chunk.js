"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{225:function(A,e,t){t.d(e,{Rw:function(){return i},TP:function(){return s},V0:function(){return o},tx:function(){return p},zv:function(){return u}});var r=t(861),n=t(757),c=t.n(n),a=t(243),i=function(){var A=(0,r.Z)(c().mark((function A(){var e,t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?api_key=183c3cacc9c38c09c14d38798ccfe9d7",A.prev=1,A.next=4,a.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=183c3cacc9c38c09c14d38798ccfe9d7");case 4:return e=A.sent,t=e.data,A.abrupt("return",t);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(){return A.apply(this,arguments)}}(),s=function(){var A=(0,r.Z)(c().mark((function A(e){var t,r,n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=183c3cacc9c38c09c14d38798ccfe9d7"),A.prev=1,A.next=4,a.Z.get(t);case 4:return r=A.sent,n=r.data,A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(e){return A.apply(this,arguments)}}(),o=function(){var A=(0,r.Z)(c().mark((function A(e){var t,r,n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="https://api.themoviedb.org/3/search/movie?api_key=183c3cacc9c38c09c14d38798ccfe9d7&query=".concat(e),A.prev=1,A.next=4,a.Z.get(t);case 4:return r=A.sent,n=r.data,A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(e){return A.apply(this,arguments)}}(),u=function(){var A=(0,r.Z)(c().mark((function A(e){var t,r,n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=183c3cacc9c38c09c14d38798ccfe9d7"),A.prev=1,A.next=4,a.Z.get(t);case 4:return r=A.sent,n=r.data,A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(e){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(c().mark((function A(e){var t,r,n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=183c3cacc9c38c09c14d38798ccfe9d7"),A.prev=1,A.next=4,a.Z.get(t);case 4:return r=A.sent,n=r.data,A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(e){return A.apply(this,arguments)}}()},407:function(A,e,t){t.r(e),t.d(e,{default:function(){return h}});var r=t(861),n=t(439),c=t(757),a=t.n(c),i=t(791),s=t(689),o=t(87),u=t(264),p=t(225),l="details_back__ZMo+U",d="details_goBack__EhFcf",v=t(198),f=t(184),h=function(){var A,e,t,c=(0,i.useState)(!1),h=(0,n.Z)(c,2),x=h[0],g=h[1],m=(0,i.useState)(!1),w=(0,n.Z)(m,2),N=w[0],k=w[1],B=(0,i.useState)(null),j=(0,n.Z)(B,2),b=j[0],E=j[1],y=(0,s.UO)().id,z=(0,s.TH)(),Z=(0,i.useRef)(null!==(A=null===(e=z.state)||void 0===e?void 0:e.from)&&void 0!==A?A:"/");(0,i.useEffect)((function(){var A=function(){var A=(0,r.Z)(a().mark((function A(){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,g(!0),A.next=4,(0,p.TP)(y);case 4:if(null!==(e=A.sent)){A.next=7;break}return A.abrupt("return",u.Notify.failure("Oops! Something went wrong!"));case 7:E(e),A.next=14;break;case 10:A.prev=10,A.t0=A.catch(0),k(!0),console.error(A.t0);case 14:return A.prev=14,g(!1),A.finish(14);case 17:case"end":return A.stop()}}),A,null,[[0,10,14,17]])})));return function(){return A.apply(this,arguments)}}();A()}),[y]);var Q=null!==b&&void 0!==b&&b.poster_path?"https://image.tmdb.org/t/p/w200".concat(b.poster_path):v,I=b?10*b.vote_average:null;return(0,f.jsxs)("main",{children:[x,N&&(0,f.jsx)("p",{children:"Oops! Something went wrong!"}),(0,f.jsx)(o.rU,{className:d,to:Z.current,children:(0,f.jsx)("button",{className:l,children:"\u2190 Go back"})}),b&&(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:Q,alt:"error"}),(0,f.jsx)("h2",{children:b.original_title}),(0,f.jsxs)("p",{children:["User Score: ",I,"%"]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:null!==(t=b.overview)&&void 0!==t?t:"There is no review"}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("p",{children:b.genres.map((function(A){return A.name})).join(" ")})]}),(0,f.jsx)("div",{children:(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"cast",children:"cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"reviews",children:"reviews"})})]})})]}),(0,f.jsx)(s.j3,{})]})}},198:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIBBAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUH/8QALhABAAICAQIDBgYDAQAAAAAAAAECAxExBBITIUEUUmFxgZEFNFFTVKEyseEl/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APogAAAAAAABoSCNGkpgFe1PasAp2p7V9J0DPtO1po0DLtO1ppAKdp2roBXSUokEAAAAAAAAAAAAAAAAAALKxysBCRaIAiE6TELREgrpOl9J7QZ6NNO1HaDPSNNNImAZTCNNNKzAKIlaUSCoAAAAAAAAAAAAAAAAAEcrQrHK8AtC0QiIXiATELRBWPNpEArELdroxdJkv59vbH6y6Y6bDijeW25BwUx2tOq1mflDS/SXx4pyW15ejrt1MVjWGnl8U4Lzmpkpk89/6B5kwpMN70mszE8wpaoMZhSYazCloBnKktLcM5BUAAAAAAAAAAAAAAAAACOWlYZxy0qC8NK13MRHMqQ0rzAPQxdBqN5r6j9IdPTxgi1q4YiZjmf+sbz7R0MXjfdXn6H4dHnf5QDpvE34y9sfBj7LTe/Emfm561m+TUc7lplw2x6mfOAaey0/cXx4K4790ZHITHlEzHlIOnL09Ml5t36medac/U9LXFi763mfNSXRm/IU+gPOszlrZnIMrMrNbMrcgqAAAAAAAAAAAAAAAAABHLSrOOWleAaQvDOq8A9H8Nyedsc8Tw26Onh5stJ9OHnYck471tHpO3s1rXv8Ss/5VgHBS80y90frLXLn8WIjWoj025p3N57fOd+juw9PWuPV4ibTz8Ac+Ok3tERx6/B2ZMNbUivHanFirjiYjfn6tAeZnr4eSa+no2zfkKfQ/EK+VL/SVeon/wA+n0BwzwyleZZ2kFLMrctbMrAqAAAAAAAAAAAAAAAAABHK8KRytALxK8SzhbYNYl6/4dk78HbPNfJ40StW81/xmYB6nseSLTauXU/Lhb2bP/In+3mRlv71vut4t/et9welHT5/35/tHs2f+RP3l53iX9+33PEt71vuD0LdJltGrZtx8do62vh9DFZnziYh53iX9+33Vte0xqbTPzkETKkyTKsyCLKStMqyCoAAAAAAAAAAAAAAAAACyqQWTtVILxKYlTaYkGm09zLadg07ibM9mwW2iZV2TIJ2rMomUAn0VlKJBAAAAAAAAAAAAAAAAAACUAJSgBKVTYLG1dmwX2bU2bBbaNo2bBIgBKJNgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=="}}]);
//# sourceMappingURL=407.3e837c7c.chunk.js.map