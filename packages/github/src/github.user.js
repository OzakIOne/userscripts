// ==UserScript==
// @name        Github Clean Trending
// @namespace   Violentmonkey Scripts
// @match       https://github.com/trending
// @grant       none
// @version     1.0
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/github/src/github.user.js
// ==/UserScript==
const interval = setInterval(()=>{
    document.querySelector('article > div > div') && function() {
        let articles = document.querySelectorAll('article');
        articles.forEach((article)=>{
            let star = article.querySelector('div > div');
            star?.classList.contains('on') && (article.style.display = 'none');
        }), clearInterval(interval);
    }();
}, 50);
