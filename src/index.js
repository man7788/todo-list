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

checkStorage('inbox');
checkStorage('side');


// localStorage.clear();


