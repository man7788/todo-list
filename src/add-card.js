import { elementFactory } from "./factory";

const cardFactory = (title, descript, date, priority) => {
  const cardItem = elementFactory('card-item').element;
  const cardTitle = elementFactory('card-title').element;
  const cardDescript = elementFactory('card-descript').element;
  const cardPriority = elementFactory('card-priority').element;
  const cardDate = elementFactory('card-date').element;
  
  cardTitle.textContent = title;
  cardDescript.textContent = descript;
  cardPriority.textContent = 'Priority: ' + priority;
  cardDate.textContent = date;

  cardItem.append(cardTitle, cardDescript, cardDate, cardPriority);

  return { cardItem };
}

function findElement() {
  const addButton = document.querySelector('.new-todo');
  const cardContainer = document.querySelector('.card-container');
  return { addButton, cardContainer }
}

function createTodoClick() {
  const target = findElement().addButton;
  target.addEventListener('click', addCard);
}

function addCard() {
  const target = findElement().cardContainer;
  const newCard = cardFactory('This is a title', 'This is some description', 'Mon, June 18', 'High').cardItem;
  target.appendChild(newCard);
}
export { createTodoClick };