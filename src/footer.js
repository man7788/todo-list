import { elementFactory } from "./factory";

function createFooter() {
  const footerDiv = elementFactory('footer-container').element;
  const content = createFooterContent();

  footerDiv.appendChild(content);

  return footerDiv;
}

function createFooterContent() {
  const footerAdd = elementFactory('footer-add').element;
  const footerNewPrj = elementFactory('footer-new-prj').element;

  footerAdd.textContent = '+';
  footerNewPrj.textContent = 'New Project';

  return { footerAdd, footerNewPrj };
}

export { createFooter };