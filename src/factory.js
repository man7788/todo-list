const elementFactory = (name) => {
  const element = document.createElement('div');
  element.classList.add(name);
  return { element };
};

const formFactory = () => {
  const element = document.createElement('form');
  // element.setAttribute('action', action);
  // element.setAttribute('method', method);
  return { element };
};

const inputFactory = (type, plcholder) => {
  const br = document.createElement('br');
  const element = document.createElement('input');
  element.setAttribute('type', type);
  element.setAttribute('placeholder', plcholder);
  br.appendChild(element);
  return { element };
}

const selectFactory = (label, op1, op2, op3) => {
  const element = document.createElement('select');
  const group = document.createElement('optgroup');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');

  group.setAttribute('label', label);
  option1.textContent = op1;
  option2.textContent = op2;
  option2.setAttribute('selected', 'selected');
  option3.textContent = op3;
  group.append(option1, option2, option3);
  element.append(group);

  return { element }
}

const buttonFactory = (type, text) => {
  const element = document.createElement('button');
  element.setAttribute('type', type);
  element.textContent = text;
  return { element }
}

export { elementFactory, inputFactory, formFactory, selectFactory, buttonFactory }

 // cardTitle.setAttribute('contenteditable', 'true');
  // cardDescript.setAttribute('contenteditable', 'true');
  // cardDate.setAttribute('contenteditable', 'true');
  // cardPriority.setAttribute('contenteditable', 'true');