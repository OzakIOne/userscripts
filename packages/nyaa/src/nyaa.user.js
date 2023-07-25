// ==UserScript==
// @name        Nyaa remove 0 seeds
// @namespace   Violentmonkey Scripts
// @match       https://nyaa.si/*
// @grant       none
// @version     1.0
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/nyaa/src/shazamlinks.user.js
// ==/UserScript==
const interval = setInterval(()=>{
    document.querySelector('h1.title') && function() {
        let tbodys = document.querySelectorAll('tbody > *');
        tbodys.forEach((row)=>{
            row.childNodes[11]?.textContent === '0' && row.remove();
        }), clearInterval(interval);
    }();
}, 50);
remove();
    }), clearInterval(interval));
}, 50);
