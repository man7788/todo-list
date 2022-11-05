import { elementFactory } from "./factory";
import { createProjectContent } from "./projects";
import { createTodoClick } from "./add-card";

function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const allProjects = document.querySelectorAll('.side-project-title');
  const mainContent = document.querySelector('.content');
  return { footerAdd, projectName, projectDiv, allProjects, mainContent }
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
    loadProject(project);
  });

  projectDiv.appendChild(projectItem);
}

function loadProject(prjName) {
  const load = findElement().mainContent;
  document.querySelector('.content > *').remove();
  load.appendChild(createProjectContent(prjName));
  createTodoClick();
}

export { createFooterClick };