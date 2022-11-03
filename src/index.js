import './style.css';
import { placeToContainer } from './layout';
import { createClick } from './side-listeners';
import { createTodoClick } from './add-card';

(function() {
  placeToContainer();
})();

(function() {
  createClick();
})();

(function() {
  createTodoClick();
})();



