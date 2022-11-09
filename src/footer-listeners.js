import { elementFactory } from "./factory";
import { createProjectContent, addToProject } from "./projects";
import { createTodoClick } from "./add-card";
import { putStorage, showStorage, putProject, findKeys } from './storage';

function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const mainContent = document.querySelector('.content');
  const projectContent = document.querySelector('.project-content');
  const wipeContent = document.querySelector('.content > *');
  const wipeSelect = document.querySelector('.new-project-div select');
  return { footerAdd, projectName, projectDiv, mainContent, 
    projectContent, wipeContent, wipeSelect }
}

function createFooterClick() {
  const add = findElement().footerAdd;
  add.addEventListener('click', function() {
    let projectName = findElement().projectName;
    createSideProject(projectName.value);
    projectName.value = '';
  });
}

function createSideProject(project) {
  const projectItem = elementFactory('side-project-title').element;
  const projectDiv = findElement().projectDiv;

  projectItem.textContent = project;
  projectItem.addEventListener('click', function() {
    loadProject(project, projectItem);
    }, { once: true });
  projectDiv.appendChild(projectItem);
  putProject();
  findKeys();
}

function loadProject(project, sideDiv) {
  const load = findElement().mainContent;
  findElement().wipeContent.remove();
  const projectContent = createProjectContent(project)
  putStorage(project, projectContent);
  load.appendChild(projectContent);
  createTodoClick(); 
  addToProject();
  sideDiv.addEventListener('click', () => {
    reloadProject(project)
  });
}

function reloadProject(project) {
  const load = findElement().mainContent;
  findElement().wipeContent.remove();
  load.appendChild(showStorage().storage[project]);
  findElement().wipeSelect.remove();
  putProject();
  findKeys();
  addToProject();
}

export { createFooterClick };