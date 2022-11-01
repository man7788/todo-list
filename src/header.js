import { elementFactory } from "./factory";

function createHeader() {
  const headerDiv = elementFactory('header-container').element;
  const content = createHeaderContent();

  headerDiv.appendChild(content);

  return headerDiv;
}

function createHeaderContent() {
  const headerTitle = elementFactory('header-title').element;

  headerTitle.textContent = 'Todo List';

  return headerTitle;

}

export { createHeader };