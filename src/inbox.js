import { elementFactory } from "./factory";

function createInbox() {
  const mainContent = elementFactory('content').element;
  const inboxDiv = elementFactory('inbox-container').element;
  const content = createInboxContent();

  inboxDiv.appendChild(content);
  mainContent.appendChild(inboxDiv);


  return mainContent;
}

function createInboxContent() {
  const inboxContent = elementFactory('inbox-content').element;
  const headerContent = createInboxHeader();
  const cardContent = createCard();

  inboxContent.append(headerContent, cardContent);


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

function createCard() {
  const cardDiv = elementFactory('card-container').element;
  const cardItem = elementFactory('card-item').element;
  const cardDate = elementFactory('card-date').element;
  const cardTitle = elementFactory('card-title').element;

  cardDate.textContent = 'Mon, June 18';
  cardTitle.textContent = 'This is some text place-holders';

  cardItem.append(cardTitle, cardDate);
  cardDiv.append(cardItem);

  return cardDiv;
}

export { createInbox };