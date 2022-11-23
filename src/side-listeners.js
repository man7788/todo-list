import { createTodoClick } from './add-card';
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
  inbox.addEventListener('click', loadInbox);
}

function loadInbox() {
  const load = findElement().mainContent;

  const p1 = new Promise((resolve) => {
    resolve(findElement().wipeContent.remove())
  });

  const p2 = new Promise((resolve) => {
    const clean = createInboxContent();
    resolve(load.append(clean));
  });
  
  p1.then(() => {
    p2.then (() => {
      checkStorage('inbox');
    });
  });
    
  createTodoClick();
}


export { createSideClick, loadInbox }