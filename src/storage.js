
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


function removeJSON(type, key) {
  let text = JSON.parse(localStorage.getItem(type));
  delete text[key];
  localStorage.setItem(type, JSON.stringify(text));
}

export { cardData, putJSON, removeJSON };