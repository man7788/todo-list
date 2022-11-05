import { createInboxContent } from './inbox';
import { createProjectContent } from './projects';
import { createTodoClick } from './add-card';

function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const menuProjects = document.querySelector('.side-button:nth-child(2)');
  const mainContent = document.querySelector('.content')
  return { menuInbox, menuProjects, mainContent };
}

function createSideClick() {
  const inbox = findElement().menuInbox;
  const project = findElement().menuProjects;
  inbox.addEventListener('click', loadInbox);
  project.addEventListener('click', loadProject);
}

function loadInbox() {
  const load = findElement().mainContent;
  document.querySelector('.content > *').remove();
  load.appendChild(createInboxContent());
  createTodoClick();
}

function loadProject() {
  const load = findElement().mainContent;
  document.querySelector('.content > *').remove();
  load.appendChild(createProjectContent());
}

export { createSideClick }