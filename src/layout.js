import { elementFactory } from './factory';
import { createHeader } from './header';
import { createSide } from './side';
// import { createFooter } from './footer';
import { createInbox } from './inbox';
import { createProject } from './projects';

function placeLayout() {
  container.appendChild(createHeader());
  container.appendChild(createSide());
  container.appendChild(createInbox());
  // container.appendChild(createProject());
  // container.appendChild(createFooter());
}


export { placeLayout };