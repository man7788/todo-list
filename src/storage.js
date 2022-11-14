
const cardData = (title, discript, date, priority) => {
  const data = {
    title,
    discript,
    date,
    priority,
  };
  return { data };
};

function putJSON(type, key, value) {
  if (!localStorage.getItem(type)) {
    let create = {};
    create[key] = value;
    localStorage.setItem(type, JSON.stringify(create));
  } else {
    let text = JSON.parse(localStorage.getItem(type));
    text[key] = value
    localStorage.setItem(type, JSON.stringify(text));
    console.log(text);
  }
  console.log(localStorage);
}


let storage = {};

let projectList = {};

let projectKeys = [];

function putStorage(fileName, divName) {
  storage[fileName] = divName;
}

const showStorage = () => {
  // console.log(inboxJSON);
  // console.log(sideJSON);
  // console.log(localStorage.getItem('storage'));
  // console.log(storage);
  // console.log(putJSON());

  // console.log(projectKeys);
  // console.log(projectList);
  // console.log(storage['inbox'].children[1].children);
  return { storage };
};

// function findKeys() {
//   projectList = {};
//   const itemList = storage['inbox'].children[1].children;
//   for (let i = 0; i < itemList.length; i++) {
//     let project = itemList[i].children[0].textContent;
//     projectList[project] = itemList[i];
//   }
//   projectKeys = [];
//   const keys = Object.keys(projectList);
//   for (let item of keys) {
//     projectKeys.push(item);
//   }
// }

// function showKeys() {
//   return projectKeys;
// }

// export { putStorage, showStorage, findKeys, showKeys };
export { putStorage, showStorage, cardData, putJSON };