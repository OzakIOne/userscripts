// ==UserScript==
// @name        Ygg remove 0 seeds
// @namespace   Violentmonkey Scripts
// @match       *://*.yggtorrent.*/engine/search*
// @grant       none
// @version     2.2
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/ygg/src/shazamlinks.user.js
// ==/UserScript==
const interval = setInterval(()=>{
    let tbody, child;
    document.querySelector('h1.title') && (tbody = document.querySelectorAll('tbody')[1], child = tbody?.childNodes, child?.forEach((child)=>{
        let seed = child.childNodes[15];
        seed && '0' === seed.innerText && (child.style.display = 'none');
    }), clearInterval(interval));
}, 50);
l(interval);
    }();
}, 50);
