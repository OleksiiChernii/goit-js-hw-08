var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequire4c75=o);var r=o("kEUo3");const l=document.querySelector("form"),n=r.throttle((e=>localStorage.setItem("feedback-form-state",JSON.stringify(e))),1e3),s={email:"",message:""};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;l[0].value=e.email,l[1].value=e.message}(),l.addEventListener("input",(e=>{"email"===e.target.name&&(console.log("email = ",e.target.value),s.email=e.target.value),"message"===e.target.name&&(console.log("message = ",e.target.value),s.message=e.target.value),n(s)})),l.addEventListener("submit",(e=>{e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),l[0].value="",l[1].value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.355d1e25.js.map
