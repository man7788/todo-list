import { elementFactory, addPrjFactory } from "./factory";
import { putJSON, showKeys, showStorage } from "./storage";
import { findKeys, findSelect, loadStorage } from "./read-storage";

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

function addToProject(project) {
  let addList = findKeys('inbox');
  let removeList = findKeys(project);
  let newList = [];

  addList.forEach(item => {
    if (!removeList.includes(item)) {
      newList.push(item);
    }
  }); 
  
  const list = addPrjFactory('Add to project', newList).element;
  const div = document.querySelector('.new-project-div');
  div.append(list);
}

function addProjectCard() {
  const add = document.querySelector('.project-add');
  const title = document.querySelector('.project-title').textContent;
  
  add.addEventListener('click', function() {
    const selected = document.querySelector('.new-project-div select');
    const value = selected.value;
    const index = selected.selectedIndex;
    const data = findSelect(value);

    check:
    if (selected.length !== 0) {
      loadStorage(value, 'inbox');
      putJSON(title, value, data);
      selected[index].remove();
    } else {
      break check;
    }
  });
}

export { createProjectContent, addToProject, addProjectCard };