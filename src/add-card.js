import { 
  elementFactory, 
  formFactory, 
  inputFactory, 
  selectFactory, 
  buttonFactory
} from './factory';
import { cardData, putJSON, putKey, removeJSON} from './storage';
import { findKeys, findExistKey} from './read-storage';
import { addToProject } from './projects';

function addButtonListener(add, item, title, descript, date, priority, editTitle) {
  add.addEventListener('click', function(e) {
    const output = cardData(title.value, descript.value, date.value, priority.value).data;
    
    const regex = /.+/;
    let text = e.composedPath();
    text = text[3].innerText;
    let result = regex.exec(text);
    let parent = result[0];
    let searchParent = result[0];
    if (searchParent == 'Inbox') {
      searchParent = 'inbox';
    }

    const buttonName = e.target.childNodes[0].textContent;
    
    const exist = findExistKey(searchParent, title.value);
    console.log(exist);
    console.log(searchParent);

    
    // 1. Plain new inbox, no name check needed
    if (findKeys('inbox').length == 0 && parent == 'Inbox') {
      cardShrink(
        item,
        title.value,
        descript.value,
        date.value,
        priority,
        );

      item.remove();
      putJSON('inbox', title.value, output);

      console.log('Item added fresh inbox');
      // 2. Inbox with items, check name for duplicate
    } else if (exist == true && buttonName == 'Add') {
      alert('Todo already exists.');
      console.log('Name already exists');
      
      // 3. Add card with no name duplicate
    } else if (!exist == true && buttonName == 'Add') { 
      cardShrink(
        item,
        title.value,
        descript.value,
        date.value,
        priority,
        );

      item.remove();
      console.log('Item added no duplicate name');
      putJSON('inbox', title.value, output);
      
        // 3. Edit card with name change, check name for duplicate
    } else if (title.value !== editTitle && exist == true && buttonName == 'Save') {
      alert('Name already exists.');
      console.log('Name already exists');
      
      // 4. Edit card without name change, no name check needed
    } else if ((title.value == editTitle && exist == true && buttonName == 'Save') ||
    (title.value !== editTitle && exist !== true && buttonName == 'Save')) {
      console.log('Edit without name change / Edit without name duplicate');
      cardShrink(
        item,
        title.value,
        descript.value,
        date.value,
        priority,
        )
      item.remove();
      
      if (parent !== 'Inbox') {
        if (editTitle !== undefined) { 
          putKey(parent, editTitle, title.value);
        }
        putJSON(parent, title.value, output);
        findElement().select.remove()
        addToProject(parent);
      } else {
        if (editTitle !== undefined) { 
          putKey('inbox', editTitle, title.value);
        }
        putJSON('inbox', title.value, output);
      }
    }
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

function delButtonListener(del, item, type, key) {
  del.addEventListener('click', function(e) {
    removeJSON(type, key);

    const regex = /.+/;
    let text = e.composedPath();
    text = text[3].innerText;
    let result = regex.exec(text);
    let parent = result[0];

    check:
    if (parent !== 'Inbox') {
      findElement().select.remove()
      addToProject(type);
    } else {
      break check;
    }

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

  addButtonListener(add, cardItem, cardTitle, cardDescript, cardDate, cardPriority, editTitle);

  if (editPri !== undefined) {
    if (typeof editPri === 'string') {
      for (let i = 0; i < cardPriority.options.length; i++) {
        if (cardPriority.options[i].textContent == editPri) {
          cardPriority.options[i].setAttribute('selected', 'selected');
        }
      }
    } else {
      let selected = editPri.selectedIndex;
      cardPriority.options[selected].setAttribute('selected', 'selected');
    }
  }
  
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
  const inboxTitle = findElement().inboxTitle;
  const projectTitle = findElement().projectTitle;

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

  if (inboxTitle !== null) {
    delButtonListener(del, cardItem, inboxTitle.textContent.toLowerCase(), cardTitle.textContent );
  } else {
    delButtonListener(del, cardItem, projectTitle.textContent, cardTitle.textContent );
  }

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
  const shrink = buttonFactory('button', 'shrink-button', 'Shrink').element;
  const inboxTitle = findElement().inboxTitle;
  const projectTitle = findElement().projectTitle;

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
  
  if (inboxTitle !== null) {
    delButtonListener(del, cardItem, inboxTitle.textContent.toLowerCase(), cardTitle.textContent );
  } else {
    delButtonListener(del, cardItem, projectTitle.textContent, cardTitle.textContent );
  }

  editButtonListener(edit, cardItem, title, descript, date, priority);
  shrinkButtonListener(shrink, cardItem, title, descript, date, priority);
}

function findElement() {
  const newButton = document.querySelector('.new-todo-div');
  const cardContainer = document.querySelector('.card-container');
  const inboxTitle = document.querySelector('.inbox-title');
  const projectTitle = document.querySelector('.project-title');
  const select = document.querySelector('.new-project-div > select');

  return { newButton, cardContainer, inboxTitle, projectTitle, select }

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