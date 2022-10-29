import { createHeader } from './header';
import { createASide } from './aside';
import { createArticle } from './article';
import { createFooter } from './footer';

// function placeHeader() {
//   container.appendChild(createHeader());
// }

// function placeASide() {
//   container.appendChild(createASide());
// }

// function placeArticle() {
//   container.appendChild(createArticle());
// }

// function placeFooter() {
//   container.appendChild(createFooter());
// }

function placeLayout() {
  container.appendChild(createHeader());
  container.appendChild(createASide());
  container.appendChild(createArticle());
  container.appendChild(createFooter());
}

export { placeLayout };