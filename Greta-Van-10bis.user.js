// ==UserScript==
// @name         Greta Van 10bis
// @version      1.1.0
// @description  Automatically opt-out from ordering Plastic cutlery on 10bis.co.il
// @author       Tal Koren (https://github.com/tkore)
// @match        http*://*.10bis.co.il/*
// @match        http*://10bis.co.il/*
// @grant        none
// ==/UserScript==

(function() {
  const modalsElement = document.querySelector('#modals');

  const config = { childList: true, subtree: true };

  const callback = mutationsList => {
    for (let mutation of mutationsList) {
      const cutleryCheckbox = mutation.target.querySelector('#dont_want_cutlery');

      if (cutleryCheckbox && !cutleryCheckbox.checked) {
        cutleryCheckbox.click();
      }
    }
  }

  const observer = new MutationObserver(callback);

  observer.observe(modalsElement, config);
})();