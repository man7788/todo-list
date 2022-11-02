import { elementFactory } from "./factory";

function createProjectContent() {
  const projectContent = elementFactory('project-content').element;
  const headerContent = createProjectHeader();

  projectContent.append(headerContent);

  return projectContent;
}

function createProjectHeader() {
  const projectHeaderDiv = elementFactory('project-header-container').element;
  const projectTitle = elementFactory('project-title').element;
  const newProjectDiv = elementFactory('new-project-div').element;
  const projectAdd = elementFactory('project-add').element;
  const newProject = elementFactory('new-project').element;

  projectTitle.textContent = 'Projects';
  projectAdd.textContent = '+';
  newProject.textContent = 'New Project';

  newProjectDiv.append(projectAdd, newProject);
  projectHeaderDiv.append(projectTitle, newProjectDiv);

  return projectHeaderDiv;
}

export { createProjectContent };