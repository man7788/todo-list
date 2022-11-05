import { elementFactory } from './factory';

function createSide() {
  const sideDiv = elementFactory('side-container').element;
  const content = createSideContent().sideMenu;
  
  sideDiv.appendChild(content);
  
  return sideDiv;
}

function createSideContent() {
  const sideMenu = elementFactory('side-menu').element;
  const sideInbox = elementFactory('side-button').element;
  const sideProject = elementFactory('side-button').element;
  const projectDiv = elementFactory('side-project-container').element;
  sideInbox.textContent = 'Inbox';

  sideProject.textContent = 'Projects';

  sideMenu.append(sideInbox, sideProject, projectDiv);
  
  return { sideMenu, sideInbox, sideProject };
}


export { createSide, createSideContent };
