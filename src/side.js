import { elementFactory } from "./factory";
import { traverseAppend } from "./factory";


function createSide() {
  const sideDiv = elementFactory('side-container').element;
  const content = sideContent();
  
  traverseAppend(sideDiv, content);
  
  return sideDiv;
}

function sideContent() {
  const sideHome = elementFactory('side-button').element;
  const sideProject = elementFactory('side-button').element;
  
  sideHome.textContent = 'Inbox';
  sideProject.textContent = 'Projects';
  
  return { sideHome, sideProject };
}

export { createSide };
