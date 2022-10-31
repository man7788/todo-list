import { elementFactory } from "./elements";
import { traverseAppend } from "./elements";

function createArticle() {
  const articleDiv = elementFactory('article-container').element;
  const article = articleContent();

  articleDiv.appendChild(article);

  return articleDiv;
}

function articleContent() {
  const article = elementFactory('article').element;
  
  article.textContent = 'Todo';

  return article;
}

export { createArticle };