import"./assets/modulepreload-polyfill-3cfb730f.js";const i=document.querySelector(".form");i.addEventListener("submit",e=>{e.preventDefault();const s=parseInt(i.delay.value,10),r=i.state.value;o(s,r).then(t=>{iziToast.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{iziToast.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})});function o(e,s){return new Promise((r,t)=>{setTimeout(()=>{s==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
