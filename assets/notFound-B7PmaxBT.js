import"./style-eT7jQErc.js";const s=`<!-- @license lucide-static v1.67.0 - ISC -->
<svg
  class="lucide lucide-arrow-left"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m12 19-7-7 7-7" />
  <path d="M19 12H5" />
</svg>
`,c=`<!-- @license lucide-static v1.67.0 - ISC -->
<svg
  class="lucide lucide-rotate-cw"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
</svg>
`,i={"arrow-left":s,"rotate-cw":c};document.querySelectorAll("[data-icon]").forEach(e=>{e.innerHTML=i[e.dataset.icon]});const o=window.matchMedia("(prefers-color-scheme: dark)");let t="system";try{const e=window.localStorage.getItem("portfolio-theme");["light","dark","system"].includes(e)&&(t=e)}catch{}function r(){const e=t==="system"?o.matches?"dark":"light":t;document.documentElement.dataset.theme=e,document.querySelector('meta[name="theme-color"]')?.setAttribute("content",e==="dark"?"#101814":"#f6f8f6")}r();o.addEventListener("change",()=>{t==="system"&&r()});const n=document.querySelector("#route-canvas"),a=document.querySelector("#retry-signal"),l=document.querySelector("#trace-status");a.addEventListener("click",()=>{n.classList.remove("is-running"),n.offsetWidth,n.classList.add("is-running"),l.textContent="Signal retried. Destination still unavailable."});
