"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{225:function(A,t,e){e.d(t,{Rw:function(){return o},TP:function(){return i},V0:function(){return s},tx:function(){return p},zv:function(){return u}});var r=e(861),n=e(757),c=e.n(n),a=e(243),o=function(){var A=(0,r.Z)(c().mark((function A(){var t,e;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?api_key=183c3cacc9c38c09c14d38798ccfe9d7",A.prev=1,A.next=4,a.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=183c3cacc9c38c09c14d38798ccfe9d7");case 4:return t=A.sent,e=t.data,A.abrupt("return",e);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(){return A.apply(this,arguments)}}(),i=function(){var A=(0,r.Z)(c().mark((function A(t){var e,r,n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=183c3cacc9c38c09c14d38798ccfe9d7"),A.prev=1,A.next=4,a.Z.get(e);case 4:return r=A.sent,n=r.data,A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(t){return A.apply(this,arguments)}}(),s=function(){var A=(0,r.Z)(c().mark((function A(t){var e,r,n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="https://api.themoviedb.org/3/search/movie?api_key=183c3cacc9c38c09c14d38798ccfe9d7&query=".concat(t),A.prev=1,A.next=4,a.Z.get(e);case 4:return r=A.sent,n=r.data,A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(t){return A.apply(this,arguments)}}(),u=function(){var A=(0,r.Z)(c().mark((function A(t){var e,r,n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=183c3cacc9c38c09c14d38798ccfe9d7"),A.prev=1,A.next=4,a.Z.get(e);case 4:return r=A.sent,n=r.data,A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(t){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(c().mark((function A(t){var e,r,n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=183c3cacc9c38c09c14d38798ccfe9d7"),A.prev=1,A.next=4,a.Z.get(e);case 4:return r=A.sent,n=r.data,A.abrupt("return",n);case 9:A.prev=9,A.t0=A.catch(1),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[1,9]])})));return function(t){return A.apply(this,arguments)}}()},247:function(A,t,e){e.r(t);var r=e(861),n=e(439),c=e(757),a=e.n(c),o=e(791),i=e(689),s=e(264),u=e(225),p=e(198),l=e(184);t.default=function(){var A=(0,o.useState)([]),t=(0,n.Z)(A,2),e=t[0],c=t[1],f=(0,o.useState)(!1),d=(0,n.Z)(f,2),h=d[0],v=d[1],g=(0,o.useState)(!1),m=(0,n.Z)(g,2),x=m[0],N=m[1],w=(0,i.UO)(null).id;return(0,o.useEffect)((function(){var A=function(){var A=(0,r.Z)(a().mark((function A(){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,v(!0),A.next=4,(0,u.zv)(w);case 4:if(t=A.sent,null!==(e=t.cast).length){A.next=8;break}return A.abrupt("return",s.Notify.failure("Oops! Something went wrong!"));case 8:c(e),A.next=15;break;case 11:A.prev=11,A.t0=A.catch(0),N(!0),console.error(A.t0);case 15:return A.prev=15,v(!1),A.finish(15);case 18:case"end":return A.stop()}}),A,null,[[0,11,15,18]])})));return function(){return A.apply(this,arguments)}}();A()}),[w]),(0,l.jsxs)("div",{children:[h,x&&(0,l.jsx)("p",{children:"Oops! Something went wrong!"}),e.length>0?(0,l.jsx)("ul",{children:e.map((function(A){var t=A.profile_path?"https://image.tmdb.org/t/p/w92".concat(A.profile_path):p;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:t,alt:"NonPhoto"}),(0,l.jsx)("p",{children:A.original_name}),(0,l.jsxs)("p",{children:["Character: ",A.character]})]},A.id)}))}):(0,l.jsx)("p",{children:"We don't have any casts for this movie."})]})}},198:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIBBAMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUH/8QALhABAAICAQIDBgYDAQAAAAAAAAECAxExBBITIUEUUmFxgZEFNFFTVKEyseEl/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APogAAAAAAABoSCNGkpgFe1PasAp2p7V9J0DPtO1po0DLtO1ppAKdp2roBXSUokEAAAAAAAAAAAAAAAAAALKxysBCRaIAiE6TELREgrpOl9J7QZ6NNO1HaDPSNNNImAZTCNNNKzAKIlaUSCoAAAAAAAAAAAAAAAAAEcrQrHK8AtC0QiIXiATELRBWPNpEArELdroxdJkv59vbH6y6Y6bDijeW25BwUx2tOq1mflDS/SXx4pyW15ejrt1MVjWGnl8U4Lzmpkpk89/6B5kwpMN70mszE8wpaoMZhSYazCloBnKktLcM5BUAAAAAAAAAAAAAAAAACOWlYZxy0qC8NK13MRHMqQ0rzAPQxdBqN5r6j9IdPTxgi1q4YiZjmf+sbz7R0MXjfdXn6H4dHnf5QDpvE34y9sfBj7LTe/Emfm561m+TUc7lplw2x6mfOAaey0/cXx4K4790ZHITHlEzHlIOnL09Ml5t36medac/U9LXFi763mfNSXRm/IU+gPOszlrZnIMrMrNbMrcgqAAAAAAAAAAAAAAAAABHLSrOOWleAaQvDOq8A9H8Nyedsc8Tw26Onh5stJ9OHnYck471tHpO3s1rXv8Ss/5VgHBS80y90frLXLn8WIjWoj025p3N57fOd+juw9PWuPV4ibTz8Ac+Ok3tERx6/B2ZMNbUivHanFirjiYjfn6tAeZnr4eSa+no2zfkKfQ/EK+VL/SVeon/wA+n0BwzwyleZZ2kFLMrctbMrAqAAAAAAAAAAAAAAAAABHK8KRytALxK8SzhbYNYl6/4dk78HbPNfJ40StW81/xmYB6nseSLTauXU/Lhb2bP/In+3mRlv71vut4t/et9welHT5/35/tHs2f+RP3l53iX9+33PEt71vuD0LdJltGrZtx8do62vh9DFZnziYh53iX9+33Vte0xqbTPzkETKkyTKsyCLKStMqyCoAAAAAAAAAAAAAAAAACyqQWTtVILxKYlTaYkGm09zLadg07ibM9mwW2iZV2TIJ2rMomUAn0VlKJBAAAAAAAAAAAAAAAAAACUAJSgBKVTYLG1dmwX2bU2bBbaNo2bBIgBKJNgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q=="}}]);
//# sourceMappingURL=247.f674c779.chunk.js.map