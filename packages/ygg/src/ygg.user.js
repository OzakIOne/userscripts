"use strict";
// ==UserScript==
// @name        Ygg remove 0 seeds
// @namespace   Violentmonkey Scripts
// @match       *://*.yggtorrent.*/engine/search*
// @grant       none
// @version     2.3
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/ygg/src/ygg.user.js
// ==/UserScript==
function run() {
    const tbody = document.querySelectorAll('tbody')[1];
    const children = tbody?.childNodes;
    children?.forEach((child) => {
        const element = child;
        const seed = element.childNodes[15];
        if (seed && seed.innerText === '0')
            element.style.display = 'none';
    });
    clearInterval(interval);
}
const interval = setInterval(() => {
    if (document.querySelector('tbody'))
        run();
}, 50);
