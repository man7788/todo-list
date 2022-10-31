const elementFactory = (name) => {
  let element = document.createElement('div');
  element.classList.add(name);
  return { element };
}

function createCard() {
  const cardDiv = elementFactory('card-container').element;
}