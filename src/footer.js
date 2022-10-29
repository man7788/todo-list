const elementFactory = (name) => {
  let element = document.createElement('div');
  element.classList.add(name);
  return { element };
}

function createFooter() {
const footerDiv = elementFactory('footer-container').element;

return footerDiv;
}

export { createFooter };