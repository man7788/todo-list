import { elementFactory } from './factory';
import { createHeader } from './header';
import { createSide } from './side';
import { createInboxContent } from './inbox';

function createDiv() {
  const contentDiv = elementFactory('content').element;
  return { contentDiv };
}

function placeToContainer() {
  const contentDiv= placeToParent().contentDiv;
  container.appendChild(createHeader());
  container.appendChild(createSide());
  container.appendChild(contentDiv);
}

function placeToParent() {
const contentDiv = createDiv().contentDiv;

contentDiv.appendChild(createInboxContent());

return { contentDiv };
}

export { placeToContainer };