let storage = {};

let projectList = {};

let projectKeys = [];

function putStorage(fileName, divName) {
  storage[fileName] = divName;
}

const showStorage = () => {
  // console.log(projectList);
  // console.log(storage);
  // let jer = Object.keys(projectList);
  // console.log(projectKeys);
  // let jer = showKeys();
  // console.log(jer);
  return { storage };
};

function putProject() {
  projectList = {};
  const itemList = storage['inbox'].children[1].children;
  for (let i = 0; i < itemList.length; i++) {
    let project = itemList[i].children[0].textContent;
    projectList[project] = itemList[i];
  }
}

function findKeys() {
  projectKeys = [];
  const keys = Object.keys(projectList);
  for (let i = 0; i < keys.length; i++);
    projectKeys.push(keys);
}

function showKeys() {
  return projectKeys;
}

export { putStorage, showStorage, putProject, findKeys, showKeys };