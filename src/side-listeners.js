import { createTodoClick } from './add-card';
import { putStorage, showStorage , cardData } from './storage';
import { checkStorage } from './read-storage';
import { createInboxContent } from './inbox';

function findElement() {
  const menuInbox = document.querySelector('.side-button:nth-child(1)');
  const mainContent = document.querySelector('.content');
  const inboxContent = document.querySelector('.inbox-content');
  const wipeContent = document.querySelector('.content > *');

  return { menuInbox, mainContent, inboxContent, wipeContent };
}

function createSideClick() {
  const inbox = findElement().menuInbox;
  // putStorage('inbox', findElement().inboxContent);
  inbox.addEventListener('click', loadInbox);
}

function loadInbox() {
  const load = findElement().mainContent;
  findElement().wipeContent.remove();
  // load.appendChild(showStorage().storage['inbox']);
  createInboxContent();
  checkStorage('inbox');
  createTodoClick();
}

export { createSideClick }