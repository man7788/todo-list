import { createHeader } from './header';
import { createSide } from './side';
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
  container.appendChild(createSide());
  container.appendChild(createArticle());
  container.appendChild(createFooter());
}

export { placeLayout };