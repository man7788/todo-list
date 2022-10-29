const elementFactory = (name) => {
  let element = document.createElement('div');
  element.classList.add(name);
  return { element };
}

function createFooter() {
const footerDiv = elementFactory('footer-container').element;
const footerTitle = elementFactory('footer-title').element;

footerTitle.textContent = 'Copy Right ©2022';
footerDiv.appendChild(footerTitle);
return footerDiv;
}

export { createFooter };