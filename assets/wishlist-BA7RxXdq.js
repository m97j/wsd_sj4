import{r as c}from"./index-CQlkgD6E.js";function u(){const s=c([]),i=()=>{try{const t=localStorage.getItem("movieWishlist");t&&(s.value=JSON.parse(t))}catch(t){console.error("찜 목록을 불러오는 중 문제가 발생했습니다:",t)}},l=()=>{try{localStorage.setItem("movieWishlist",JSON.stringify(s.value))}catch(t){console.error("찜 목록을 저장하는 중 문제가 발생했습니다:",t)}},r=t=>{const e=s.value.findIndex(a=>a.id===t.id);e===-1?(s.value.push(t),alert(`${t.title}이(가) 찜 목록에 추가되었습니다.`)):(s.value.splice(e,1),alert(`${t.title}이(가) 찜 목록에서 삭제되었습니다.`)),l()},o=t=>s.value.some(e=>e.id===t),n=()=>s.value.length===0;return i(),{wishlist:s,toggleWishlist:r,isInWishlist:o,isWishlistEmpty:n,loadWishlist:i}}export{u};