import { createInbox } from './inbox';
import { createProject } from './projects';


function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const menuProjects = document.querySelector('.side-button:nth-child(2)');
  const mainContent = document.querySelector('.content')
  return { menuInbox, menuProjects, mainContent };
}

function createClick() {
  const inbox = findElement().menuInbox;
  const project = findElement().menuProjects;
  inbox.addEventListener('click', loadInbox);
  project.addEventListener('click', loadProject);
}

function loadInbox() {
  const load = findElement().mainContent;
  load.replaceChildren();
  load.appendChild(createInbox());
}

function loadProject() {
  const load = findElement().mainContent;
  load.replaceChildren();
  load.appendChild(createProject());
}
export { createClick }