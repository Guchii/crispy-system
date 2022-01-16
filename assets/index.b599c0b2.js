import{b as i}from"./vendor.186e9396.js";const c=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};c();async function l(){try{let n=(await fetch("https://1.1.1.1/cdn-cgi/trace").then(r=>r.text())).trim().split(`
`).map(r=>r.split("="));return Object.fromEntries(n)}catch{return-1}}async function d(o){let r=await(await fetch(`https://restcountries.com/v3.1/alpha/${o}`)).json();const{name:{common:a},flag:e}=r[0];return{name:a,flag:e}}i(document.querySelectorAll("#app span:not(#flag)"),{speed:150}).start();const u=async()=>{const{ip:o,loc:n}=await l(),{name:r,flag:a}=await d(n);document.querySelector("#app").innerHTML=`
    <a href="https://1.1.1.1/cdn-cgi/trace">https://1.1.1.1/cdn-cgi/trace</a>
    <div id="main">
      <span id="ip">${o}</span>
      <div class="country">
        <span>${r}</span>
        <span id="flag">${a}</span>
      </div>
    </div>
`,i(document.querySelectorAll("#app span:not(#flag)"),{speed:150}).start().reveal(1e3)};u();
