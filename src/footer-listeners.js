import { elementFactory } from "./factory";
import { createProjectContent } from "./projects";
import { createTodoClick } from "./add-card";
import { putStorage, showStorage } from './storage';

function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const mainContent = document.querySelector('.content');
  const projectContent = document.querySelector('.project-content');
  const wipeContent = document.querySelector('.content > *');
  return { footerAdd, projectName, projectDiv, mainContent, projectContent, wipeContent }
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
}

function loadProject(project, sideDiv) {
  const load = findElement().mainContent;
  findElement().wipeContent.remove();
  const projectContent = createProjectContent(project)
  putStorage(project, projectContent);
  load.appendChild(projectContent);
  createTodoClick(); 
  sideDiv.addEventListener('click', () => {
    reloadProject(project)
  });
}

function reloadProject(project) {
  const load = findElement().mainContent;
  findElement().wipeContent.remove();
  load.appendChild(showStorage().storage[project]);
}

export { createFooterClick };