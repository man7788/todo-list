import { elementFactory, formFactory, inputFactory, selectFactory, buttonFactory } from "./factory";

function addButtonListener(add, item, title, descript, date, priority) {
  add.addEventListener('click', function() {
    item.remove();
    cardOutput(title.value,
      descript.value,
      date.value,
      priority.value)
  });
}

function addEditListener(edit, item, title, descript, date) {
  const target = findElement().cardContainer;
  const editCard = cardFactory(title, descript, date, 'Save').cardItem;
  edit.addEventListener('click', function() {
    item.remove();
    target.appendChild(editCard);
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

  return { cardItem };
}

function cardOutput (title, descript, date, priority) {
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
  cardContainer.append(cardItem)
  addEditListener(edit, cardItem, cardTitle.textContent, cardDescript.textContent, cardDate.textContent);

}

function findElement() {
  const newButton = document.querySelector('.new-todo-div');
  const cardContainer = document.querySelector('.card-container');
  const cardTitle = document.querySelector('.card-title');
  const cardDescript = document.querySelector('.card-descript');
  const cardDate = document.querySelector('.card-date');
  const cardPriority = document.querySelector('.card-priority');
  const edit = document.querySelector('#edit-button');

  return { newButton, cardContainer, cardTitle, cardDescript, cardDate, cardPriority, edit }
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