const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o;function a(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;console.log(`${t} ${Math.random()}}`),n.style.background=t}t.addEventListener("click",(function(t){o=setInterval(a,1e3)})),e.addEventListener("click",(function(t){clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.9e34eff3.js.map
