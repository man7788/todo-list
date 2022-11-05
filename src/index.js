import './style.css';
import { placeToContainer } from './layout';
import { createSideClick } from './side-listeners';
import { createTodoClick } from './add-card';
import { createFooterClick } from './footer-listeners';

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

