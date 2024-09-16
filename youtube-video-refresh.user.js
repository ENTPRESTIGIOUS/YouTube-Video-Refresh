// ==UserScript==
// @name         YouTube Refresh on /watch Link
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Perform a full refresh (Ctrl + F5) when navigating to a YouTube video (i.e., URLs containing /watch)
// @author       ENTPRESTIGIOUS + ChatGPT
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to perform a full refresh (no cache)
    const fullRefresh = () => {
        window.location.reload(true); // True forces a hard reload (no cache)
    };

    // Detect URL changes and refresh if the URL contains '/watch'
    const observeUrlChange = () => {
        let lastUrl = window.location.href;

        new MutationObserver(() => {
            const currentUrl = window.location.href;

            // Refresh if navigating to a /watch video link
            if (currentUrl !== lastUrl && currentUrl.includes('/watch')) {
                lastUrl = currentUrl;
                fullRefresh(); // Perform a full refresh
            }
        }).observe(document, { subtree: true, childList: true });
    };

    // Start observing URL changes
    observeUrlChange();
})();
