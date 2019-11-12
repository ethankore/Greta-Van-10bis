const checkbox = document.querySelector('#modals');
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

observer.observe(checkbox, config);