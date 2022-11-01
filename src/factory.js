const elementFactory = (name) => {
  let element = document.createElement('div');
  element.classList.add(name);
  return { element };
}

const traverseAppend = (div, name) => {
  for (let key in name) {
    div.appendChild(name[key]);
  }
};

const createEventListener = (element, action, func) => {
  let node = document.querySelector(element);
  node.addEventListener(action, func);
}

const loadNewPage = (element) => {
  document.querySelector('div:nth-child(3)').replaceChildren();
  container.appendChild(element);
}

export { elementFactory, traverseAppend, createEventListener, loadNewPage }