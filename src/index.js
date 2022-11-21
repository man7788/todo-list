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

    // Save button should upadte current data instead of saving new data
    // Update new key to storage
    // Save storage using new key




    // Prevent new todo using duplicated names
    // Delete project buttons


    // Add back to selection after delete card
    // Disable add todo button if no todo available
