import { createInboxContent } from './inbox';
import { createProjectContent } from './projects';

function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const menuProjects = document.querySelector('.side-button:nth-child(2)');
  const mainContent = document.querySelector('.content')
  const addButton = document.querySelector('.new-todo')
  return { menuInbox, menuProjects, mainContent, addButton };
}

function createClick() {
  const inbox = findElement().menuInbox;
  const project = findElement().menuProjects;
  inbox.addEventListener('click', loadInbox);
  project.addEventListener('click', loadProject);
}

function loadInbox() {
  const load = findElement().mainContent;
  document.querySelector('.content > *').remove();
  load.appendChild(createInboxContent());
}

function loadProject() {
  const load = findElement().mainContent;
  document.querySelector('.content > *').remove();
  load.appendChild(createProjectContent());
}

export { createClick }