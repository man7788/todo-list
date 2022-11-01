import { elementFactory } from "./factory";
import { traverseAppend } from "./factory";

function createHome() {
  const homeDiv = elementFactory('home-container').element;
  const content = createInboxContent();

  inboxDiv.appendChild(content);

  return inboxDiv;
}

function createHomeInboxContent() {
  const homeContent = elementFactory('home-content').element;
  const headerContent = createInboxHeader();
  const cardContent = createCard();

  inboxContent.append(headerContent, cardContent);

  return inboxContent;
}

function createHomeHeader() {
  const homeHeaderDiv = elementFactory('home-header-container').element;
  const homeTitle = elementFactory('home-title').element;
  // const newTodoDiv = elementFactory('new-todo-div').element;
  // const inboxAdd = elementFactory('inbox-add').element;
  // const newTodo = elementFactory('new-todo').element;

  homeTitle.textContent = 'Home';
  // inboxAdd.textContent = '+';
  // newTodo.textContent = 'New Todo';

  newTodoDiv.append(inboxAdd, newTodo);
  homeHeaderDiv.append(inboxTitle);

  return homeHeaderDiv;
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