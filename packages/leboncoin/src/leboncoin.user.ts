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

function run() {
  const itemsWithTag = document.querySelectorAll('div > span.bg-neutral-container');
  const itemsArray = Array.from(itemsWithTag) as HTMLSpanElement[];

  const selledItems = itemsArray.filter((item) => item.innerText === 'Vendu');

  selledItems.forEach((item) => {
    const parent = item.closest('div.styles_adCard__HQRFN.styles_classified__rnsg4');
    console.log('parent', parent);
    if (parent) parent.remove();
  });

  clearInterval(interval);
}

const interval = setInterval(() => {
  if (document.querySelector('div.src__Box-sc-10d053g-0.jISaOx')) run();
}, 50);
