import { elementFactory, addPrjFactory } from "./factory";
import { showKeys, showStorage, findKeys } from "./storage";

function createProjectContent(project) {
  const projectContent = elementFactory('project-content').element;
  const headerContent = createProjectHeader(project);
  const cardContainer = elementFactory('card-container').element;

  projectContent.append(headerContent, cardContainer);

  return projectContent;
}

function createProjectHeader(project) {
  const projectHeaderDiv = elementFactory('project-header-container').element;
  const projectTitle = elementFactory('project-title').element;
  const newProjectDiv = elementFactory('new-project-div').element;
  const projectAdd = elementFactory('project-add').element;

  projectTitle.textContent = project;
  projectAdd.textContent = '+';

  newProjectDiv.append(projectAdd);

  projectHeaderDiv.append(projectTitle, newProjectDiv);

  return projectHeaderDiv;
}

function addToProject() {
  const addList = showKeys();
  const list = addPrjFactory('Add to project', addList).element;
  const div = document.querySelector('.new-project-div');
  div.append(list);
}

function addProjectCard() {
  const add = document.querySelector('.project-add');
  const content = document.querySelector('.card-container');
  const storage = showStorage().storage;
  const children = storage['inbox'].children[1].children
  
  add.addEventListener('click', function() {
    const selected = document.querySelector('.new-project-div select').selectedIndex;
    if (children.length != 0) {
      content.append(children[selected]);
    } else { return };
    document.querySelector('.new-project-div select').remove();
    findKeys();
    addToProject()
  });
}

export { createProjectContent, addToProject, addProjectCard };