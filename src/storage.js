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
    // console.log(text);
  }
  console.log(localStorage);
}

function putKey(type, oldKey, modKey) {
  const data = JSON.parse(localStorage.getItem(type));
  const replacements = {};
  replacements[oldKey] = modKey;

  let replacedItems = Object.keys(data).map((key) => {
  const newKey = replacements[key] || key;
  return { [newKey] : data[key] };
  });

  const newData = replacedItems.reduce((a, b) => Object.assign({}, a, b));
  localStorage.setItem(type, JSON.stringify(newData));
}


function removeCardData(type, key) {
  let text = JSON.parse(localStorage.getItem(type));
  delete text[key];
  localStorage.setItem(type, JSON.stringify(text));
}

function removePrjData(type) {
  localStorage.removeItem(type);
  removeCardData('side', type);
}

export { cardData, putJSON, putKey, removeCardData, removePrjData };