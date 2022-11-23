import { elementFactory } from './factory';
import { putJSON } from './storage';

function createInboxContent() {
  const inboxContent = elementFactory('inbox-content').element;
  const headerContent = createInboxHeader();
  const cardContainer = elementFactory('card-container').element;

  inboxContent.append(headerContent, cardContainer);
  
  if (!localStorage.getItem('inbox')) {
    putJSON('inbox');
  }

  return inboxContent;
}

function createInboxHeader() {
  const inboxHeaderDiv = elementFactory('inbox-header-container').element;
  const inboxTitle = elementFactory('inbox-title').element;
  const newTodoDiv = elementFactory('new-todo-div').element;
  const inboxAdd = elementFactory('inbox-add').element;
  const newTodo = elementFactory('new-todo').element;

  inboxTitle.textContent = 'Inbox';
  inboxAdd.textContent = '+';
  newTodo.textContent = 'New Todo';

  newTodoDiv.append(inboxAdd, newTodo);
  inboxHeaderDiv.append(inboxTitle, newTodoDiv);

  return inboxHeaderDiv;
}

export { createInboxContent };