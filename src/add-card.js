import { elementFactory, formFactory, inputFactory, selectFactory, buttonFactory } from "./factory";

const cardFactory = () => {
  const cardItem = elementFactory('card-item').element;
  const form = formFactory().element;
  const title = inputFactory('text', 'New Title').element;
  const descript = inputFactory('text', 'New Description').element;
  const date = inputFactory('text', 'New Date').element;
  const priority = selectFactory('High', 'Normal', 'Low').element;
  const add = buttonFactory('submit').element;

  add.addEventListener('click', function(e) {
    e.preventDefault();
    form.parentNode.remove();
    cardOutput(title.value,
      descript.value,
      date.value,
      priority.value)
  });

  form.append(title, descript, date, priority, add);
  cardItem.append(form);

  return { cardItem };
}

function cardOutput (title, descript, date, priority) {
  const cardContainer = findElement().cardContainer;
  const cardItem = elementFactory('card-item').element;
  const cardTitle = elementFactory('card-title').element;
  const cardDescript = elementFactory('card-descript').element;
  const cardDate = elementFactory('card-date').element;
  const cardPriority = elementFactory('card-priority').element;
  
  cardItem.textContent = title;
  cardDescript.textContent = descript;
  cardDate.textContent = date;
  cardPriority.textContent = 'Priority: ' + priority;

  cardItem.append(cardTitle, cardDescript, cardDate, cardPriority);
  cardContainer.append(cardItem)
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
  const newCard = cardFactory('New Title', 'New Description', 'New Date', '').cardItem;
  target.appendChild(newCard);
}
export { createTodoClick };