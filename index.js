import{a as w,S as P,i as n}from"./assets/vendor-8LKSFGxY.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S="https://pixabay.com/api/",q="55614752-bda5b7428fe7eb42fb14ee41b";async function f(a,t=1){const r={key:q,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await w.get(S,{params:r})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more"),E=new P(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});function g(a){const t=a.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
          </a>
          <div class="info">
            <p><b>Likes</b> ${r.likes}</p>
            <p><b>Views</b> ${r.views}</p>
            <p><b>Comments</b> ${r.comments}</p>
            <p><b>Downloads</b> ${r.downloads}</p>
          </div>
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",t),E.refresh()}function M(){m.innerHTML=""}function p(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function L(){h.classList.remove("hidden")}function l(){h.classList.add("hidden")}const B=document.querySelector(".form"),$=document.querySelector(".load-more");let i=1,c="",u=0;const v=15;B.addEventListener("submit",async a=>{if(a.preventDefault(),c=a.target.elements["search-text"].value.trim(),!!c){i=1,M(),l(),p();try{const t=await f(c,i);if(u=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(t.hits),Math.ceil(u/v)>1?L():(l(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Error loading images."})}finally{b()}}});$.addEventListener("click",async()=>{i+=1,l(),p();try{const a=await f(c,i);g(a.hits);const t=Math.ceil(u/v);i<t?L():(l(),n.info({message:"We're sorry, but you've reached the end of search results."}));const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch{n.error({message:"Error loading more images."})}finally{b()}});
//# sourceMappingURL=index.js.map
