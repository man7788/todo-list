import { elementFactory, buttonFactory, prjNameFactory } from "./factory";
import { createProjectContent, addToProject, addProjectCard } from "./projects";
import { cardData, putJSON, removePrjData } from './storage';
import { checkStorage } from "./read-storage";
import { loadInbox } from "./side-listeners";

function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const mainContent = document.querySelector('.content');
  const wipeContent = document.querySelector('.content > *');

  let contentTitle;
  if (document.querySelector('.inbox-title') == undefined) {
    contentTitle = document.querySelector('.project-title').textContent;
  } else {
    contentTitle = document.querySelector('.inbox-title').textContent;
  }

  return { footerAdd, projectName, projectDiv, mainContent, 
    wipeContent, contentTitle }
}

function createFooterClick() {
  const add = findElement().footerAdd;

  add.addEventListener('click', function() {
    let projectName = findElement().projectName;
    createSideProject(projectName.value);
    //------------------------------------------------------------------------------------------------
    const output = cardData(projectName.value).data;
    putJSON('side', projectName.value, output);
    putJSON(projectName.value);
    projectName.value = '';
  });
}

function createSideProject(project) {
  const projectBox = elementFactory('side-project-box').element;
  const projectItem = elementFactory('side-project-title').element;
  const projectDelete = buttonFactory('button', 'side-del-button', 'X').element;
  const projectDiv = findElement().projectDiv;

  projectItem.textContent = project;
  projectDelete.textContent = 'X';
  projectBox.append(projectItem, projectDelete);
  
  projectItem.addEventListener('click', function() {
    loadProject(project, projectItem);
    addProjectCard();
    addToProject(project);
  });
  
  projectDelete.addEventListener('click', function(e) {
    deleteProject(project, e);
  });

  projectDiv.append(projectBox);
}

function loadProject(project) {
  const load = findElement().mainContent;

  findElement().wipeContent.remove();
  const projectContent = createProjectContent(project)
  load.appendChild(projectContent);
  checkStorage(project);
}

function deleteProject(project, event) {
  const title = findElement().contentTitle;
  const prjName = prjNameFactory(event).result;
  const container = findElement().projectDiv;
  const length = Object.keys(JSON.parse(localStorage.getItem('side'))).length;

  removePrjData(project);
  container.replaceChildren();
  checkStorage('side');

  if (title == prjName || length == 0) {
    loadInbox();
  }

}
export { createFooterClick, createSideProject };