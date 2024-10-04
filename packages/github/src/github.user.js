"use strict";
// ==UserScript==
// @name        Github Clean Trending
// @namespace   Violentmonkey Scripts
// @match       https://github.com/trending
// @grant       none
// @version     1.1
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/github/src/github.user.js
// ==/UserScript==
function run() {
    const articles = document.querySelectorAll('article');
    articles.forEach((article) => {
        const star = article.querySelector('div > div');
        if (star?.classList.contains('on'))
            article.style.display = 'none';
    });
    clearInterval(interval);
}
const interval = setInterval(() => {
    if (document.querySelector('article > div > div'))
        run();
}, 50);
