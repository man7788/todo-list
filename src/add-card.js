import { 
  elementFactory, 
  formFactory, 
  inputFactory, 
  selectFactory, 
  buttonFactory
} from './factory';
import { cardData, putJSON} from './storage';

function addButtonListener(add, item, title, descript, date, priority) {
  add.addEventListener('click', function() {
    cardShrink(
      item,
      title.value,
      descript.value,
      date.value,
      priority,
    )
    item.remove();
    //------------------------------------------------------------------------------------------------
    const output = cardData(title.value, descript.value, date.value, priority.value).data;
    putJSON('inbox' ,title.value, output);
  });
}

function expandButtonListener(expand, item, title, descript, date, priority) {
  expand.addEventListener('click', function() {
    cardOutput( 
      item,
      title,
      descript,
      date,
      priority,
    )
    item.remove();
  });
}

function editButtonListener(edit, item, title, descript, date, priority) {
  const target = findElement().cardContainer;
  const editCard = cardFactory('', '', '', 'Save', title, descript, date, priority).cardItem;

  edit.addEventListener('click', function() {
    target.insertBefore(editCard, item);
    item.remove();
  });
}

function delButtonListener(del, item) {
  del.addEventListener('click', function() {
    item.remove();
  });
}

function shrinkButtonListener(shrink, item, title, descript, date, priority) {
  shrink.addEventListener('click', function() {
    cardShrink(
      item,
      title,
      descript,
      date,
      priority,
    )
    item.remove();
});
}

function changeColor(value, item) {
  switch (value) {
    case 'High':
      item.style.background = "rgba(255, 0, 0, 0.4)";
      break;
    case 'Normal':
      item.style.background = "rgba(0, 128, 0, 0.4)";
      break;  
    case 'Low':
      item.style.background = "rgba(0, 0, 255, 0.4)";
      break;
    default:
      item.style.background = "rgba(40, 40, 40)";
  }
}

const cardFactory = (title, descript, date, button, editTitle, editDes, editDate, editPri) => {
  const cardItem = elementFactory('card-item').element;
  const form = formFactory('todo-form').element;
  const cardTitle = inputFactory('text', title, editTitle).element;
  const cardDescript = inputFactory('text', descript, editDes).element;
  const cardDate = inputFactory('date', date, editDate).element;
  const cardPriority = selectFactory('Priority', 'High', 'Normal', 'Low', editPri).element;
  const add = buttonFactory('button', 'add-button', button).element;

  addButtonListener(add, cardItem, cardTitle, cardDescript, cardDate, cardPriority );

  // if (editPri !== undefined) {
  //   let selected = editPri.selectedIndex;
  //   cardPriority.options[selected].setAttribute('selected', 'selected');
  // }

  form.append(cardTitle, cardDescript, cardDate, cardPriority);
  cardItem.append(form, add);

  return { cardItem, cardTitle, cardDescript, cardDate, cardPriority };
}

function cardShrink(item, title, descript, date, priority) {
  const cardContainer = findElement().cardContainer;
  const cardItem = elementFactory('card-item-shrink').element;
  const cardTitle = elementFactory('card-title-shrink').element;
  const expand = buttonFactory('button', 'expand-button', 'Expand').element;
  const del = buttonFactory('button', 'del-button', 'X').element;

  cardTitle.textContent = title;
  
  if (typeof priority === 'string') {
    changeColor(priority, cardItem);
  } else {
    changeColor(priority.value, cardItem);
  }

  cardItem.append(cardTitle, expand, del)
  if (item == '') {
    cardContainer.append(cardItem)
  } else { 
    cardContainer.insertBefore(cardItem, item)
  }

  expandButtonListener(expand, cardItem, title, descript, date, priority);
  delButtonListener(del, cardItem);
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
  const shrink = buttonFactory('button', 'shrink-button', 'Shrink').element;

  cardTitle.textContent = title;
  cardDescript.textContent = descript;
  cardDate.textContent = date;

  if (typeof priority === 'string') {
    cardPriority.textContent = 'Priority: ' + priority;
    changeColor(priority, cardItem);
  } else {
    cardPriority.textContent = 'Priority: ' + priority.value;
    changeColor(priority.value, cardItem);
  }

  cardItem.append(cardTitle, cardDescript, cardDate, cardPriority, shrink, edit, del);
  cardContainer.insertBefore(cardItem, item)

  editButtonListener(edit, cardItem, title, descript, date, priority);
  delButtonListener(del, cardItem);
  shrinkButtonListener(shrink, cardItem, title, descript, date, priority);
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

export { createTodoClick, cardShrink };