import { createHeader } from './header';
import { createSide } from './side';
import { createFooter } from './footer';
import { createInbox } from './inbox';

function placeLayout() {
  container.appendChild(createHeader());
  container.appendChild(createSide());
  container.appendChild(createInbox());
  container.appendChild(createFooter());
}

export { placeLayout };