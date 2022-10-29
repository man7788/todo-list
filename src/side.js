const elementFactory = (name) => {
  let element = document.createElement('div');
  element.classList.add(name);
  return { element };
};

const traverseAppend = (div, name) => {
  for (let key in name) {
    div.appendChild(name[key]);
  }
};

function createSide() {
  const sideDiv = elementFactory('side-container').element;
  const content = sideContent();
  
  traverseAppend(sideDiv, content);
  
  return sideDiv;
}

function sideContent() {
  const sideHome = elementFactory('side-home').element;
  const sideProject = elementFactory('side-home').element;
  
  sideHome.textContent = 'Home';
  sideProject.textContent = 'Project';
  
  return { sideHome, sideProject };
}

export { createSide };
