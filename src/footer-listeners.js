import { elementFactory } from "./factory";
import { createProjectContent, addToProject, addProjectCard } from "./projects";
import { putStorage, showStorage, findKeys, cardData, putJSON } from './storage';

function findElement() {
  const footerAdd = document.querySelector('.footer-add');
  const projectName = document.querySelector('.footer-container > input');
  const projectDiv = document.querySelector('.side-project-container');
  const mainContent = document.querySelector('.content');
  const projectContent = document.querySelector('.project-content');
  const wipeContent = document.querySelector('.content > *');
  const wipeSelect = document.querySelector('.new-project-div select');
  const inboxContent = document.querySelector('.inbox-content');
  return { footerAdd, projectName, projectDiv, mainContent, 
    projectContent, wipeContent, wipeSelect, inboxContent }
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
    // addProjectCard();
  }, { once: false });
  
  projectDiv.appendChild(projectItem);

  // findKeys();
}

function loadProject(project, sideDiv) {
  const load = findElement().mainContent;

  findElement().wipeContent.remove();
  const projectContent = createProjectContent(project)
  // putStorage(project, projectContent);
  load.appendChild(projectContent);
  
  // addToProject();

  // sideDiv.addEventListener('click', function() {
    // findKeys();
    // reloadProject(project)
  // });
}

// function reloadProject(project) {
//   const load = findElement().mainContent;
//   findElement().wipeContent.remove();
//   load.appendChild(showStorage().storage[project]);
//   findElement().wipeSelect.remove();

//   addToProject();
// }

export { createFooterClick, createSideProject };