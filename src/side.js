import { elementFactory } from "./factory";
import { createEventListener } from "./factory";
import { loadNewPage } from "./factory";
import { createInbox } from "./inbox";

function createSide() {
  const sideDiv = elementFactory('side-container').element;
  const content = createSideContent().sideMenu;
  
  sideDiv.appendChild(content);
  
  return sideDiv;
}

function createSideContent() {
  const sideMenu = elementFactory('side-menu').element;
  // const sideHome = elementFactory('side-button').element;
  const sideInbox = elementFactory('side-button').element;
  const sideProject = elementFactory('side-button').element;
  // const projectDiv = createSideProject();
  
  // sideHome.textContent = 'Home';
  sideInbox.textContent = 'Inbox';
  sideProject.textContent = 'Projects';

  sideMenu.append( sideInbox, sideProject );
  
  return { sideMenu, sideInbox, sideProject };
}

// function createSideProject() {
//   const projectDiv = elementFactory('project-container').element;
//   const projectItem = elementFactory('project-title').element;

//   projectItem.textContent = 'Project Name';

//   projectDiv.appendChild(projectItem);

//   return projectDiv;
// }

export { createSide, createSideContent };
