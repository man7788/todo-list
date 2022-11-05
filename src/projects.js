import { elementFactory } from "./factory";

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
  const projectTodo = elementFactory('project-todo').element;

  projectTitle.textContent = project;
  projectAdd.textContent = '+';
  projectTodo.textContent = 'New Todo';

  newProjectDiv.append(projectAdd, projectTodo);
  projectHeaderDiv.append(projectTitle, newProjectDiv);

  return projectHeaderDiv;
}

export { createProjectContent };