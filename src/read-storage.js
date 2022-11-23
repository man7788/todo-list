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
  } else {
    cardShrink('', title, discript, date, priority);
  }
}

function findStorage(type) {
  const keyList = Object.keys(JSON.parse(localStorage[type]));
  for (let i = 0; i < keyList.length; i++) {
    loadStorage(keyList[i], type);
  }
}

function findKeys(type) {
  const keyList = Object.keys(JSON.parse(localStorage[type]));
  return keyList;
}

function findExistKey(type, exist) {
  if (JSON.parse(localStorage[type]) == undefined) {
    return;
  }
  const keysList = findKeys(type);
  let value;
  if (keysList.includes(exist)) {
    console.log('exist');
    console.log(keysList);
    value = true;
  } else {
    value = false;
    }
  return value;
}

function findSelect(key) {
  const keyList = JSON.parse(localStorage['inbox']);
  return keyList[key];
}

export { checkStorage, findStorage, findKeys, findSelect, loadStorage, findExistKey };
