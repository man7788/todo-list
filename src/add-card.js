import { elementFactory, formFactory, inputFactory, selectFactory, buttonFactory } from "./factory";

function addButtonListener(add, item, title, descript, date, priority) {
  add.addEventListener('click', function() {
    cardShrink(
      item,
      title.value,
      descript.value,
      date.value,
      priority.value,
      'Expand')
    item.remove();
  });
}

function expandButtonListener(expand, item, title, descript, date, priority) {
  expand.addEventListener('click', function() {
    cardOutput( 
      item,
      title,
      descript,
      date,
      priority)
    item.remove();
  });
}

function addEditListener(edit, del, item, title, descript, date) {
  const target = findElement().cardContainer;
  const editCard = cardFactory(title, descript, date, 'Save').cardItem;
  edit.addEventListener('click', function() {
    target.insertBefore(editCard, item);
    item.remove();
  })
  del.addEventListener('click', function() {
    item.remove();
  })
}

const cardFactory = (title, descript, date, button) => {
  const cardItem = elementFactory('card-item').element;
  const form = formFactory().element;
  const cardTitle = inputFactory('text', title).element;
  const cardDescript = inputFactory('text', descript).element;
  const cardDate = inputFactory('date', date).element;
  const cardPriority = selectFactory('Priority', 'High', 'Normal', 'Low').element;
  const add = buttonFactory('button', 'add-button', button).element;

  addButtonListener(add, cardItem, cardTitle, cardDescript, cardDate, cardPriority);
  
  form.append(cardTitle, cardDescript, cardDate, cardPriority);
  cardItem.append(form, add);

  return { cardItem, cardTitle, cardDescript, cardDate, cardPriority };
}

function cardShrink(item, title, descript, date, priority, button) {
  const cardContainer = findElement().cardContainer;
  const cardItem = elementFactory('card-item-shrink').element;
  const cardTitle = elementFactory('card-title-shrink').element;
  const expand = buttonFactory('button', 'expand-button', button).element;

  cardTitle.textContent = title;
  cardItem.append(cardTitle, expand)
  cardContainer.insertBefore(cardItem, item)

  expandButtonListener(expand, cardItem, title, descript, date, priority);
}

function cardOutput (item, title, descript, date, priority) {
  const cardContainer = findElement().cardContainer;
  const cardItem = elementFactory('card-item').element;
  const cardTitle = elementFactory('card-title').element;
  const cardDescript = elementFactory('card-descript').element;
  const cardDate = elementFactory('card-date').element;
  const cardPriority = elementFactory('card-priority').element;
  const edit = buttonFactory('button', 'edit-button','Edit').element;
  const del = buttonFactory('button', 'del-button', 'X').element;

  cardTitle.textContent = title;
  cardDescript.textContent = descript;
  cardDate.textContent = date;
  cardPriority.textContent = 'Priority: ' + priority;
  
  cardItem.append(cardTitle, cardDescript, cardDate, cardPriority, edit, del);
  cardContainer.insertBefore(cardItem, item)
  addEditListener(edit, del, cardItem, title, descript, date);
}

function findElement() {
  const newButton = document.querySelector('.new-todo-div');
  const cardContainer = document.querySelector('.card-container');

  return { newButton, cardContainer }
}

function createTodoClick() {
  const target = findElement().newButton;
  target.addEventListener('click', addCard);
}

function addCard() {
  const target = findElement().cardContainer;
  const newCard = cardFactory('New Title', 'New Description', 'New Date', 'Add').cardItem;
  target.appendChild(newCard);
}

export { createTodoClick };