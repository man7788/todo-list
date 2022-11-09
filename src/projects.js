import { elementFactory, addPrjFactory } from "./factory";
import { showKeys } from "./storage";

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
  // const addList = showKeys();
  // const projectTodo = addPrjFactory('Add to project', addList);

  projectTitle.textContent = project;
  projectAdd.textContent = '+';

  // newProjectDiv.append(projectAdd, projectTodo);
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

export { createProjectContent, addToProject };