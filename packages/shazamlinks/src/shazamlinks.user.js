"use strict";
// ==UserScript==
// @name        shazamlinks
// @namespace   Violentmonkey Scripts
// @match       https://www.shazam.com/*
// @grant       none
// @version     2.3
// @author      ozaki
// @description 17/06/2023 01:19:37
// @homepageURL https://github.com/OzakIOne/userscripts/
// @updateURL   https://github.com/OzakIOne/userscripts/blob/master/packages/shazamlinks/src/shazamlinks.user.js
// ==/UserScript==
function run() {
    const title = document.querySelector('div > h1');
    const artist = document.querySelector('div > h2');
    function createElement(text, url, color) {
        const element = document.createElement('div');
        const classNames = [
            'TrackPageHeader_action__dOiuH',
            'Button-module_container__WuvCi',
            'Button-module_shapePill__St97o',
            'Button-module_paddingBase__-mzTv',
        ];
        element.classList.add(...classNames);
        element.innerText = text;
        element.style.backgroundColor = color;
        element.style.flexBasis = 'auto';
        element.style.flexGrow = '0';
        element.addEventListener('click', () => window.open(url, '_blank'));
        return element;
    }
    const youtube = createElement('Youtube', `https://www.youtube.com/results?search_query=${title?.innerText}+${artist?.innerText}`, '#FF0000');
    const spotify = createElement('Spotify', `https://open.spotify.com/search/${title?.innerText} ${artist?.innerText}`, '#1DB954');
    const deezer = createElement('Deezer', `https://www.deezer.com/search/${title?.innerText} ${artist?.innerText}`, '#00C7F2');
    const soundcloud = createElement('SoundCloud', `https://soundcloud.com/search?q=${title?.innerText} ${artist?.innerText}`, '#FF5500');
    const container = document?.querySelector('div[data-section="header"]')?.nextElementSibling;
    container?.appendChild(youtube);
    container?.appendChild(spotify);
    container?.appendChild(deezer);
    container?.appendChild(soundcloud);
    clearInterval(interval);
}
const interval = setInterval(() => {
    if (document.querySelector('div > h1'))
        run();
}, 50);
