import { elementFactory } from "./factory";

function createProject() {
  const mainContent = elementFactory('content').element;
  const projectDiv = elementFactory('project-container').element;
  const content = createProjectContent();

  projectDiv.appendChild(content);
  mainContent.appendChild(projectDiv);

  return mainContent;
}

function createProjectContent() {
  const projectContent = elementFactory('project-content').element;
  const headerContent = createProjectHeader();
  const cardContent = createCard();

  projectContent.append(headerContent, cardContent);


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

function createCard() {
  const cardDiv = elementFactory('card-container').element;
  const cardItem = elementFactory('card-item').element;
  const cardDate = elementFactory('card-date').element;
  const cardTitle = elementFactory('card-title').element;

  cardDate.textContent = 'Mon, June 18';
  cardTitle.textContent = 'This is some text place-holders';

  cardItem.append(cardTitle, cardDate);
  cardDiv.append(cardItem);

  return cardDiv;
}

export { createProject };