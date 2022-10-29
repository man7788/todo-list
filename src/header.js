const elementFactory = (name) => {
  let element = document.createElement('div');
  element.classList.add(name);
  return { element };
}

function createHeader() {
const headerDiv = elementFactory('header-container').element;
const headerTitle = elementFactory('header-title').element;

headerTitle.textContent = 'Todo List';
headerDiv.appendChild(headerTitle);
return headerDiv;
}

export { createHeader };