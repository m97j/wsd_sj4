import{a as D}from"./axios-upsvKRUO.js";import{u as O}from"./wishlist-kUT7vjVH.js";import{_ as G,r as h,d as L,e as N,m as J,w as Q,o as s,c as n,a as d,F as z,f as S,p as b,t as k,b as M,q as X,l as Y,s as Z,u as A,v as $,x as _,j as T,y as V,i as B}from"./index-D2MLgGso.js";import{g as ee}from"./URL-BbuJMKW_.js";import{M as te}from"./MovieInfiniteScroll-BmVJ_Ihk.js";const oe={name:"MovieGrid",props:{fetchUrl:{type:String,required:!0}},setup(w){const r=h([]),o=h(1),e=h(null),u=h(4),l=h(20),t=h(window.innerWidth<=768);h("grid");let c=null;const{wishlist:v,loadWishlist:P,toggleWishlist:U,isInWishlist:R}=O(),E=async()=>{try{const f=Math.ceil(6);let g=[];for(let i=1;i<=f;i++){const m=await D.get(w.fetchUrl,{params:{page:i,per_page:l}});g=[...g,...m.data.results]}r.value=g.slice(0,120)}catch(a){console.error("Error fetching movies:",a)}},F=a=>`https://image.tmdb.org/t/p/w300${a}`,W=()=>{if(e.value){const a=e.value.offsetWidth,f=window.innerHeight-e.value.offsetTop,g=t.value?90:200,i=t.value?150:220,m=t.value?10:15,y=-10;u.value=Math.floor(a/(g+m));const p=Math.floor(f/(i+y));l.value=u.value*p}},H=L(()=>{const a=(o.value-1)*l.value,f=a+l.value;return r.value.slice(a,f).reduce((i,m,y)=>{const p=Math.floor(y/u.value);return i[p]||(i[p]=[]),i[p].push(m),i},[])}),x=L(()=>Math.ceil(r.value.length/l.value)),q=()=>{o.value<x.value&&o.value++},K=()=>{o.value>1&&o.value--},I=()=>{t.value=window.innerWidth<=768,W()},j=a=>{C(),c=setTimeout(()=>{U(a)},2e3)},C=()=>{c&&(clearTimeout(c),c=null)};return N(()=>{E(),W(),P(),window.addEventListener("resize",I)}),J(()=>{window.removeEventListener("resize",I)}),Q([u,l],()=>{o.value=1}),{visibleMovieGroups:H,currentPage:o,totalPages:x,getImageUrl:F,nextPage:q,prevPage:K,gridContainer:e,rowSize:u,startWishlistTimer:j,clearWishlistTimer:C,toggleWishlist:U,isInWishlist:R}}},se={class:"movie-grid",ref:"gridContainer"},ae=["onMouseup"],ie=["src","alt"],ne={class:"movie-title"},re={key:0,class:"wishlist-indicator"},le={key:0,class:"pagination"},ce=["disabled"],de=["disabled"];function ue(w,r,o,e,u,l){return s(),n("div",se,[d("div",{class:b(["grid-container",w.currentView])},[(s(!0),n(z,null,S(e.visibleMovieGroups,(t,c)=>(s(),n("div",{key:c,class:b(["movie-row",{full:t.length===e.rowSize}])},[(s(!0),n(z,null,S(t,v=>(s(),n("div",{key:v.id,class:"movie-card",onMouseup:P=>e.toggleWishlist(v)},[d("img",{src:e.getImageUrl(v.poster_path),alt:v.title},null,8,ie),d("div",ne,k(v.title),1),e.isInWishlist(v.id)?(s(),n("div",re,"👍")):M("",!0)],40,ae))),128))],2))),128))],2),e.totalPages>1?(s(),n("div",le,[d("button",{onClick:r[0]||(r[0]=(...t)=>e.prevPage&&e.prevPage(...t)),disabled:e.currentPage===1},"< 이전",8,ce),d("span",null,k(e.currentPage)+" / "+k(e.totalPages),1),d("button",{onClick:r[1]||(r[1]=(...t)=>e.nextPage&&e.nextPage(...t)),disabled:e.currentPage===e.totalPages},"다음 >",8,de)])):M("",!0)],512)}const ve=G(oe,[["render",ue],["__scopeId","data-v-acab3a9b"]]),he={class:"popular-container"},ge={key:0},fe={class:"view-toggle"},me={key:1},pe=X({__name:"home-popular",setup(w){Y.add(Z,A);const o=ee("5a2a3dec198ef93f98d7ee1257818fb8");o||console.error("유효한 fetchURL이 생성되지 않았습니다. API 키를 확인하세요.");const e=h("grid"),u=()=>{e.value="grid",t()},l=()=>{e.value="list",c()},t=()=>{document.body.style.overflow="hidden"},c=()=>{document.body.style.overflow="auto"};return N(()=>{t()}),$(()=>{c()}),(v,P)=>(s(),n("div",he,[_(o)?(s(),n("div",ge,[d("div",fe,[d("button",{onClick:u,class:b({active:e.value==="grid"})},[T(_(B),{icon:["fas","th"]})],2),d("button",{onClick:l,class:b({active:e.value==="list"})},[T(_(B),{icon:["fas","bars"]})],2)]),e.value==="grid"?(s(),V(ve,{key:0,title:"인기 영화",fetchUrl:_(o)},null,8,["fetchUrl"])):M("",!0),e.value==="list"?(s(),V(te,{key:1,title:"인기 영화",fetchUrl:_(o)},null,8,["fetchUrl"])):M("",!0)])):(s(),n("p",me,"영화를 불러오는 중입니다. 잠시만 기다려주세요..."))]))}}),ye=G(pe,[["__scopeId","data-v-7330e24c"]]);export{ye as default};