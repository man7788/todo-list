import { placeToContainer } from "./layout";
import { cardShrink } from "./add-card";
import { createSideProject } from "./footer-listeners";

//Check if stroage exsists
//If not, just do normal layout
//If yes, do normal and call add-cards/footer-listeners

function checkStorage(type) {
  if(!localStorage.getItem(type)) {
    return;
  } else {
    findStorage(type);
  }
}

function loadStorage(key, type) {
  const data = JSON.parse(localStorage.getItem(type));
  const title = data[key]['title'];
  const discript = data[key]['discript'];
  const date = data[key]['date'];
  const priority = data[key]['priority'];

  console.log(title, discript, date, priority);

  if (type == 'inbox') {
    cardShrink('', title, discript, date, priority);
  } else if (type == 'side') {
    createSideProject(title);
  }

  console.log(localStorage);
}

function findStorage(type) {
  const keyList = Object.keys(JSON.parse(localStorage[type]));

  console.log(keyList);
  for (let i = 0; i < keyList.length; i++) {
    loadStorage(keyList[i], type);
  }
}

export { checkStorage };
