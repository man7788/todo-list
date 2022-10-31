import './style.css';
import { placeLayout } from './layout';

(function() {
  placeLayout();
})();

// const elementFactory = (name) => {
//   let element = document.createElement('div');
//   element.classList.add(name);
//   return { element };
// }

// const appendToDiv = (div, ...args) => {
//   let parent = div;
//   for (const arg in args) {
//     parent.append(arg)
//   }
//   return parent;
// }

// function createInboxHeader() {
//     const inboxHeaderDiv = elementFactory('inbox-header-container').element;
//     const inboxTitle = elementFactory('inbox-title').element;
//     const newTodoDiv = elementFactory('new-todo-div').element;
//     const inboxAdd = elementFactory('inbox-add').element;
//     const newTodo = elementFactory('new-todo').element;
  
//     inboxTitle.textContent = 'Inbox';
//     inboxAdd.textContent = '+';
//     newTodo.textContent = 'New Todo';
  
//     // appendToDiv(newTodoDiv, inboxAdd, newTodo);
//     newTodoDiv.append(inboxAdd, newTodo);
//     console.log(newTodoDiv);
//     // appendToDiv(inboxHeaderDiv, inboxTitle, newTodoDiv);
  
//     return inboxHeaderDiv;
//   }

//   createInboxHeader();