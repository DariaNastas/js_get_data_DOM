function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r,e,n=((function(r){if(Array.isArray(r))return t(r)})(e=document.querySelectorAll(".population"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(t){return+t.textContent.split(",").join("")}),o=document.querySelector(".total-population"),a=document.querySelector(".average-population"),i=n.reduce(function(t,r){return t+r},0);r=n.length?i/n.length:0,o.textContent=i.toLocaleString("en-US"),a.textContent=r.toLocaleString("en-US");
//# sourceMappingURL=index.76f6c6a6.js.map
