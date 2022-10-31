import { elementFactory } from "./factory";
import { traverseAppend } from "./factory";


function createFooter() {
  const footerDiv = elementFactory('footer-container').element;
  const content = footerContent();

  traverseAppend(footerDiv, content);

  return footerDiv;
}

function footerContent() {
  const footerAdd = elementFactory('footer-add').element;
  const footerNewPrj = elementFactory('footer-new-prj').element;

  footerAdd.textContent = '+';
  footerNewPrj.textContent = 'New Project';

  return { footerAdd, footerNewPrj };
}

export { createFooter };