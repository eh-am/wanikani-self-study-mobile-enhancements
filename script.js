// ==UserScript==
// @name         Wanikani Self-Study Mobile Enhancements
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  improve mobile support for wanikani self-study
// @author       eh-am
// @match        *://*.wanikani.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(`
	@media screen and (max-width: 600px) {
		#ss_quiz {
			max-width: 100vw;
			left: 0 !important;
			box-sizing: border-box;
		}
	}
  `);
})();
