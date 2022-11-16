import { placeToContainer } from "./layout";
import { cardShrink } from "./add-card";
import { createSideProject } from "./footer-listeners";
import { addToProject } from "./projects";

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

  if (type == 'inbox') {
    cardShrink('', title, discript, date, priority);
  } else if (type == 'side') {
    createSideProject(title);
  }
}

function findStorage(type) {
  const keyList = Object.keys(JSON.parse(localStorage[type]));
  for (let i = 0; i < keyList.length; i++) {
    loadStorage(keyList[i], type);
  }
}

function findKeys() {
  const keyList = Object.keys(JSON.parse(localStorage['inbox']));
  return keyList;
}

function findSelect(key) {
  const keyList = JSON.parse(localStorage['inbox']);
  return keyList[key];

}

export { checkStorage, findStorage, findKeys, findSelect, loadStorage };
