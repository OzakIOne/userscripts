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

function run() {
  const tbody = document.querySelectorAll('tbody')[1];
  const child = tbody?.childNodes as NodeListOf<HTMLElement>;

  child?.forEach((child) => {
    const seed = child.childNodes[15] as HTMLElement;
    if (seed && seed.innerText === '0') child.style.display = 'none';
  });

  clearInterval(interval);
}

const interval = setInterval(() => {
  if (document.querySelector('h1.title')) run();
}, 50);
