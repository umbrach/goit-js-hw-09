!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc");function i(n,t){var o=Math.random()>.3;new Promise((function(e,r){setTimeout((function(){o?e("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")):r("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}),t)})).then((function(n){return e(u).Notify.success(n)})).catch((function(n){return e(u).Notify.failure(n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(document.querySelector('input[name="delay"]').value),t=Number(document.querySelector('input[name="amount"]').value),o=Number(document.querySelector('input[name="step"]').value),r=0;r<t;r+=1){i(r+1,n+o*r)}}))}();
//# sourceMappingURL=03-promises.2c50de1e.js.map