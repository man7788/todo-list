import { createInboxContent } from './inbox';
import { createProjectContent } from './projects';
import { createTodoClick } from './add-card';

function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const mainContent = document.querySelector('.content');
  return { menuInbox, mainContent };
}

function createSideClick() {
  const inbox = findElement().menuInbox;
  inbox.addEventListener('click', loadInbox);
}

function loadInbox() {
  const load = findElement().mainContent;
  document.querySelector('.content > *').remove();
  load.appendChild(createInboxContent());
  createTodoClick();
}

export { createSideClick }