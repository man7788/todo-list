import { elementFactory } from "./factory";
import { traverseAppend } from "./factory";

function createInbox() {
  const inboxDiv = elementFactory('inbox-container').element;
  const content = createInboxContent();

  inboxDiv.appendChild(content);

  return inboxDiv;
}

function createInboxContent() {
  const inboxContent = elementFactory('inbox-content').element;
  const content = createInboxHeader();

  inboxContent.appendChild(content);


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

export { createInbox };