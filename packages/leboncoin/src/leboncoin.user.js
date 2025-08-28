"use strict";
// ==UserScript==
// @name        leboncoin remove selled items
// @namespace   Violentmonkey Scripts
// @match       https://www.leboncoin.fr/recherche*
// @grant       none
// @version     1.2
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/leboncoin/src/leboncoin.user.js
// ==/UserScript==
function run() {
    const itemsWithTag = [
        ...document.querySelectorAll('[data-spark-component="tag"]'),
    ];
    const selledItems = itemsWithTag.filter((item) => item.innerText === 'Vendu');
    selledItems.forEach((item) => {
        const parent = item.closest('article');
        if (parent)
            parent.remove();
    });
    clearInterval(interval);
}
const interval = setInterval(() => {
    if (document.querySelector('main'))
        run();
}, 50);
