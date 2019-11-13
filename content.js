(() => {
  const modalsElement = document.querySelector('#modals');

  if (!modalsElement) return;

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