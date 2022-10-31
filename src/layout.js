import { createHeader } from './header';
import { createSide } from './side';
import { createFooter } from './footer';
import { createInbox } from './inbox';

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
  container.appendChild(createInbox());
  container.appendChild(createFooter());
}

export { placeLayout };