import{a as w,R as a}from"./vendor0.a8275b36.js";import{j as u,a as t,A as b,I as k,b as C,c as B,d as E,e as F,N,L as f}from"./vendor1.bfdb3b07.js";import{d as S,R as D,r as x}from"./vendor2.1a9bb498.js";const _=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};_();var g={},v=w.exports;g.createRoot=v.createRoot,g.hydrateRoot=v.hydrateRoot;var A={"header-content":"header-content__6NGTb"};const L=()=>u("div",{className:A["header-content"],children:[t(b,{alt:"avatar",src:"src/assets/svg/avatar.svg",style:{margin:"0 8px"}}),t("span",{children:"\u6728\u5B50\u51E1\u7684\u5C0F\u7AD9"})]});var M={};const R=()=>{const i=a.useMemo(()=>[{itemKey:"basic",text:"\u57FA\u7840\u7BC7",icon:t(k,{}),items:["\u6D4F\u89C8\u5668","\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5","HTML","CSS","JavaScript \u{1F31F}"]},{itemKey:"framework",text:"\u6846\u67B6\u7BC7",icon:t(C,{}),items:["Vue","React"]},{itemKey:"engineering",text:"\u5DE5\u7A0B\u7BC7",icon:t(B,{}),items:["Git","Webpack"]},{itemKey:"code",text:"\u624B\u6495\u4EE3\u7801",icon:t(E,{}),items:["\u9762\u8BD5\u9AD8\u9891\u624B\u6495\u4EE3\u7801\u9898 \u{1F31F}","\u5251\u6307 offer \u{1F31F}","LeetCode \u7B97\u6CD5\u601D\u8DEF","\u4F01\u4E1A\u7B14\u8BD5\u9898","\u667A\u529B\u9898"]},{itemKey:"combat",text:"\u5B9E\u6218\u7BC7",icon:t(F,{}),items:["VScode Plugin","Chrome Plugin","Mac \u4F7F\u7528\u5C0F\u6280\u5DE7"]}],[]),r=a.useMemo(()=>[i[0].itemKey],[]),s=a.useCallback(n=>{console.log("data",n)},[]),[l,e]=a.useState(!1),o=a.useCallback(n=>{e(n)},[]);return a.useEffect(()=>{const n=()=>{e(Boolean(window.innerWidth<1440))};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),t(N,{items:i,isCollapsed:l,onCollapseChange:o,limitIndent:!1,defaultOpenKeys:r,onClick:s,className:M["sider-nav"],footer:{collapseButton:!0}})};var y={"md-content":"md-content__cxhdH","md-toc":"md-toc__2-cEA"};const H=()=>{const[i,r]=a.useState("");a.useEffect(()=>{fetch("src/assets/browser.md").then(e=>e.text()).then(e=>{r(e)}).catch(()=>{console.log("\u52A0\u8F7D\u5931\u8D25")})},[]);const s=a.useRef(null),l=(e,o)=>{var h,p;const n=((h=s.current)==null?void 0:h.childNodes)||[];for(let m=0;m<n.length;m++){const c=n[m];if(((p=c==null?void 0:c.dataset)==null?void 0:p.id)===e){c==null||c.scrollIntoView();return}}};return u("div",{className:y["md-content"],ref:s,children:[t(S,{className:y["md-toc"],source:i,ordered:!0,onHashChange:l}),t(D,{children:i,remarkPlugins:[x]})]})},z="page__Dt2Ur";var d={page:z,"page-header":"page-header__GJ261","page-body":"page-body__wUw9J","page-sider":"page-sider__z-B0u"};function I(){const{Header:i,Sider:r,Content:s}=f;return u(f,{className:d.page,children:[t(i,{className:d["page-header"],children:t(L,{})}),u(f,{className:d["page-body"],children:[t(r,{className:d["page-sider"],children:t(R,{})}),t(s,{children:t(H,{})})]})]})}g.createRoot(document.getElementById("root")).render(t(a.StrictMode,{children:t(I,{})}));
