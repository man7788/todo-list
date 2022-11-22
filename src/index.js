import './style.css';
import { placeToContainer } from './layout';
import { createSideClick } from './side-listeners';
import { createTodoClick } from './add-card';
import { createFooterClick } from './footer-listeners';
import { checkStorage } from './read-storage';

(function() {
  placeToContainer();
})();

(function() {
  createSideClick();
})();

(function() {
  createTodoClick();
})();

(function() {
  createFooterClick();
})();

(function() {
  checkStorage('inbox');
  checkStorage('side');
})();

// localStorage.clear();

    // Prevent new todo using duplicated names
    // Prevent edit todo using duplicated names
    // Prevent add to project to add duplicated names todo
    // Delete project buttons
