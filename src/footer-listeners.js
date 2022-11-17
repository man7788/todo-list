import { elementFactory } from "./factory";
import { createProjectContent, addToProject, addProjectCard } from "./projects";
import { cardData, putJSON } from './storage';
import { checkStorage } from "./read-storage";

function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const mainContent = document.querySelector('.content');
  const wipeContent = document.querySelector('.content > *');
  return { footerAdd, projectName, projectDiv, mainContent, 
    wipeContent }
}

function createFooterClick() {
  const add = findElement().footerAdd;

  add.addEventListener('click', function() {
    let projectName = findElement().projectName;
    createSideProject(projectName.value);
    //------------------------------------------------------------------------------------------------
    const output = cardData(projectName.value).data;
    putJSON('side', projectName.value, output);
    projectName.value = '';
  });
}

function createSideProject(project) {
  const projectItem = elementFactory('side-project-title').element;
  const projectDiv = findElement().projectDiv;

  projectItem.textContent = project;
  
  projectItem.addEventListener('click', function() {
    loadProject(project, projectItem);
    addProjectCard();
    addToProject();
  });
  
  projectDiv.appendChild(projectItem);
}

function loadProject(project) {
  const load = findElement().mainContent;

  findElement().wipeContent.remove();
  const projectContent = createProjectContent(project)
  load.appendChild(projectContent);
  checkStorage(project);
}
export { createFooterClick, createSideProject };