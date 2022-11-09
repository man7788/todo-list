let storage = {};

let projectList = {};

let projectKeys = [];

function putStorage(fileName, divName) {
  storage[fileName] = divName;
}

const showStorage = () => {
  // console.log(projectList);

  console.log(projectKeys);
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
  for (let item of keys) {
    projectKeys.push(item);
  }
}

function showKeys() {
  return projectKeys;
}

export { putStorage, showStorage, putProject, findKeys, showKeys };