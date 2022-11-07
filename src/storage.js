function putStorage(fileName, divName) {
  storage[fileName] = divName;
}

const showStorage = () => {
  console.log(storage);
  return { storage };
}

let storage = {};

export { putStorage, showStorage };