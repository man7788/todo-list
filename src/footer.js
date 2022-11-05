import { elementFactory, inputFactory, buttonFactory } from './factory';

function createFooter() {
  const footerDiv = elementFactory('footer-container').element;
  const content = createFooterContent();

  footerDiv.append(content.footerAdd, content.footerNewPrj);

  return footerDiv;
}

function createFooterContent() {
  const footerAdd = elementFactory('footer-add').element;
  const footerNewPrj = inputFactory('text', 'New Project').element;

  footerAdd.textContent = '+';

  return { footerAdd, footerNewPrj };
}

export { createFooter, createFooterContent };