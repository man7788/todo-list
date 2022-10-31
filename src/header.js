import { elementFactory } from "./factory";
import { traverseAppend } from "./factory";

function createHeader() {
  const headerDiv = elementFactory('header-container').element;
  const content = headerContent();

  traverseAppend(headerDiv, content);

  return headerDiv;
}

function headerContent() {
  const headerTitle = elementFactory('header-title').element;

  headerTitle.textContent = 'Todo List';

  return { headerTitle };

}

export { createHeader };