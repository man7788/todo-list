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

export { elementFactory, traverseAppend }