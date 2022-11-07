function putStorage(fileName, divName) {
  let user = fileName;
  let file = divName;
  storage[user] = file;
}

const showStorage = () => {
  console.log(storage);
  return { storage };
}

let storage = {};

export { putStorage, showStorage, storage};