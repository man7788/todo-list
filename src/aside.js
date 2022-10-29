const elementFactory = (name) => {
  let element = document.createElement('div');
  element.classList.add(name);
  return { element };
}

function createASide() {
const aSideDiv = elementFactory('aside-container').element;

return aSideDiv;
}

export { createASide };