// ==UserScript==
// @name         Wanikani Self-Study Mobile Enhancements
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  improve mobile support for wanikani self-study
// @author       eh-am
// @match        *://*.wanikani.com/*
// @downloadUrl  https://raw.githubusercontent.com/eh-am/wanikani-self-study-mobile-enhancements/master/script.user.js
// @updateUrl    https://raw.githubusercontent.com/eh-am/wanikani-self-study-mobile-enhancements/master/script.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';

  GM_addStyle(`
	@media screen and (max-width: 600px) {
		#ss_quiz {
			max-width: 100vw;
			left: 0 !important;
			top: 0 !important;
			box-sizing: border-box;
		}

		#ss_quiz .cfgbar {
			display: flex;
		}

		#ss_quiz .atype {
			font-size: 1.2em !important;
		}


		#ss_quiz .qwrap {
			height: 6em !important;
		}


		#ss_quiz .qwrap .prev {
			line-height: initial;

			/* vertical align */
			position: absolute;
			top: 50%;
			left: 0;
			transform: translate(0, -50%);
		}

		#ss_quiz .qwrap .next {
			line-height: initial;

			/* vertical align */
			position: absolute;
			top: 50%;
			right: 0;
			transform: translate(0, -50%);
		}
	}
  `);
})();
