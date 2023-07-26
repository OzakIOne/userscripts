// ==UserScript==
// @name        Nyaa remove 0 seeds
// @namespace   Violentmonkey Scripts
// @match       https://nyaa.si/*
// @grant       none
// @version     1.0
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/nyaa/src/nyaa.user.js
// ==/UserScript==
const interval = setInterval(()=>{
    document.querySelector('h1.title') && (document.querySelectorAll('tbody > *').forEach((row)=>{
        row.childNodes[11]?.textContent === '0' && row.remove();
    }), clearInterval(interval));
}, 50);
w.remove();
        }), clearInterval(interval);
    }();
}, 50);
