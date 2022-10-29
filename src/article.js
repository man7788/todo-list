const elementFactory = (name) => {
  let element = document.createElement('div');
  element.classList.add(name);
  return { element };
}

function createArticle() {
const articleDiv = elementFactory('article-container').element;

return articleDiv;
}

export { createArticle };