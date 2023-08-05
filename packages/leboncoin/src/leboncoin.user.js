// ==UserScript==
// @name        leboncoin remove selled items
// @namespace   Violentmonkey Scripts
// @match       https://www.leboncoin.fr/recherche*
// @grant       none
// @version     1.0
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/leboncoin/src/leboncoin.user.js
// ==/UserScript==
const interval = setInterval(()=>{
    document.querySelector('div.src__Box-sc-10d053g-0.jISaOx') && function() {
        let itemsWithTag = document.querySelectorAll('div > span.bg-neutral-container'), itemsArray = Array.from(itemsWithTag), selledItems = itemsArray.filter((item)=>'Vendu' === item.innerText);
        selledItems.forEach((item)=>{
            let parent = item.closest('div.styles_adCard__HQRFN.styles_classified__rnsg4');
            console.log('parent', parent), parent && parent.remove();
        }), clearInterval(interval);
    }();
}, 50);
