let currentDraggedElement;
let allTask = [];
let currentSubtasksBoard = [];
let selectedSubtaskCounts = [];
let currentIndex = 0;
let startDraggingIndex = 0;

/**
 * Initializes the board by loading tasks, highlighting the board title, and displaying user profile initials.
 */
async function init() {
  await includeHTML();
  loggedInUser = await getLoggedInUser();
  highlightTitle('board');
  highlightTitleMobile('board-mobile');
  let info = await getItem('newTask');
  let getTaskInfo = JSON.parse(info);
  showProfileInitials(loggedInUser);
  loadUsers();
  generateAddTaskSideMenu();
  allTask = [];
  allTask.push(getTaskInfo);
  updateHTML(getTaskInfo);
  showAssignetContacts(loggedInUser);
  updateProgressBarOnload()
}

/**
 * Gets the image path for the specified priority.
 * @param {string} priority - The priority value ('high', 'medium', 'low').
 * @returns {string} - The image path for the priority.
 */
function getPriorityImagePath(priority) {
  const priorityPaths = {
    high: "../assets/img/prio_alta.svg",
    medium: "../assets/img/prio_media.svg",
    low: "../assets/img/prio_baja.svg",
  };
  if (priority in priorityPaths) {
    return priorityPaths[priority];
  } else {

    return "no found";
  }
}

/**
 * Searches for tasks based on the input in the searchInput field and updates the displayed tasks accordingly.
 */
function searchTask() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const filteredTasks = allTask[0].filter((task) => {
    const titleMatches = task.title.toLowerCase().includes(searchTerm);
    const descriptionMatches = task.description.toLowerCase().includes(searchTerm);

    return titleMatches || descriptionMatches;
    
  });
 
  updateHTML(filteredTasks);
  updateProgressBarFiltered(filteredTasks);

}

/**
 * Updates the progress bar for each task based on the completion status of its subtasks.
 * @param {Array} taskList - The list of tasks to update progress bars for.
 */
function updateProgressBarFiltered(taskList) {
  for (let i = 0; i < taskList.length; i++) {
    const element = taskList[i];
    const progressBar = document.getElementById(`subtaskProgressBar${element["id"]}`);

    if (progressBar) {
      let numberOfSubtask = document.getElementById(`test${element["id"]}`);
      let completedSubtasks = element.subtasks.filter(subtask => subtask.status === true).length;
      let totalSubtasks = element.subtasks.length;
      let percentage = (completedSubtasks / totalSubtasks) * 100;

      progressBar.style.width = `${percentage}%`;
      progressBar.setAttribute('aria-valuenow', percentage);
      progressBar.innerHTML = `<span>${percentage}%</span>`;
      
      if (numberOfSubtask) {
        numberOfSubtask.innerHTML = `<span>${completedSubtasks}</span>`;
      }
    }
  }
}

/**
 * Updates the HTML container with the specified category and task list.
 * @param {string} category - The category to update.
 * @param {Array} taskList - The list of tasks for the category.
 */
function updateContainer(category, taskList) {
  let container = document.getElementById(category);
  container.innerHTML = "";

  if (taskList.length === 0) {
    container.innerHTML = generatePlaceholderTasks(category);
  } else {
    for (let index = 0; index < taskList.length; index++) {
      const element = taskList[index];
      container.innerHTML += generateTodoHTML(element, getPriorityImagePath(element.priority));
    }
  }
}

/**
 * Updates the HTML content for different task categories based on the provided task information.
 * @param {Array} getTaskInfo - The array containing task information.
 */
function updateHTML(getTaskInfo) {
  selectedUsers = [];

  const toDolist = getTaskInfo.filter((t) => t["category"] === "toDo");
  updateContainer("toDo", toDolist);

  const progressList = getTaskInfo.filter((t) => t["category"] === "progress");
  updateContainer("progress", progressList);

  const feedbackList = getTaskInfo.filter((t) => t["category"] === "feedBack");
  updateContainer("feedBack", feedbackList);

  const doneList = getTaskInfo.filter((t) => t["category"] === "done");
  updateContainer("done", doneList);
}

/**
 * Prevents the default behavior of the drag-and-drop operation.
 * @param {Event} ev - The drag event.
 */
function allowDrop(ev) {
  ev.preventDefault();
}

/**
 * Sets the currentDraggedElement to the provided ID when starting the drag operation.
 * @param {string} id - The ID of the element being dragged.
 */
function startDragging(id) {
  currentDraggedElement = id;
}

/**
 * Gets the index of the element being dragged in the allTask array.
 * @param {string} element - The ID of the element being dragged.
 * @returns {number} - The index of the element in the allTask array.
 */
function getStartDraggingIndex(element) {
  let idToDelete = Number(element);
  startDraggingIndex = 0;
  for (let i = 0; i < allTask[0].length; i++) {
    const indexID = allTask[0][i].id;
    if (indexID === idToDelete) {
      startDraggingIndex = i;
      return startDraggingIndex;
    }
  }
}

/**
 * Moves the task with the dragged element ID to the specified category and updates the HTML.
 * @param {string} category - The target category for the moved task.
 */
async function moveTo(category) {
  getStartDraggingIndex(currentDraggedElement);
  let info = await getItem('newTask');
  let getTaskInfo = JSON.parse(info);
  getTaskInfo[startDraggingIndex]["category"] = category;
  await setItem('newTask', JSON.stringify(getTaskInfo));
  updateHTML(getTaskInfo);
  updateProgressBarOnload();
}

/**
 * Adds a highlighting effect to the element with the specified ID.
 */
function highlight(id) {
  document.getElementById(id).classList.add("boardtoDoSektion-highlight");
}

/**
 * Removes the highlighting effect from the element with the specified ID after a delay.
 */
function removeHighlight(id) {
  setTimeout(function () {
    document.getElementById(id).classList.remove("boardtoDoSektion-highlight");
  }, 100);
}

/**
 * Generates and displays the side menu for adding tasks.
 */
function generateAddTaskSideMenu() {
  document.getElementById('FirstCardRenderContainer').innerHTML = generateTemplateHtmlSideMenu();
}

/**
 * Displays the add task menu for the specified category.
 * @param {string} category - The category for which to display the add task menu.
 */
function showAddTaskMenu(category) {
  document.getElementById("FirstCardRenderContainer").classList.remove("d-none");
  document.getElementById("menuContainerBox").classList.add("menuContainer");
  document.getElementById("sideMenu").classList.add("showmenu");
  selectedCategory2 = category;
 
}

/**
 * Closes the add task menu.
 */
function closeAddTaskMenu() {
  document.getElementById("menuContainerBox").classList.remove("menuContainer");
  document.getElementById("sideMenu").classList.remove("showmenu");
}

/**
 * Opens the card container and populates it with task details, including priority, user dates, and subtasks.
 * @param {string} element - The ID of the task element.
 * @param {string} priorityImagePath - The path to the priority image.
 */
function openCardContainer(element, priorityImagePath) {
  let priorityText;
  getCurrentIndex(element);
  if (allTask[0][currentIndex]["priority"] === 'high') {
    priorityText = 'High';
  } else if (allTask[0][currentIndex]["priority"] === 'medium') {
    priorityText = 'Medium';
  } else if (allTask[0][currentIndex]["priority"] === 'low') {
    priorityText = 'Low';
  } else {
    priorityText = 'Unknown';
  }
  document.getElementById("FirstCardRenderContainer2").classList.remove("d-none");
  document.getElementById("FirstCardRenderContainer2").innerHTML =
    generateTemplateHtmlFirstCard(allTask[0][currentIndex], currentIndex, priorityText, priorityImagePath, element);

  usersDate();
  updateCheckboxStatus(element);
}

/**
 * Gets the index of the specified task element in the allTask array.
 * @param {string} element - The ID of the task element.
 * @returns {number} - The index of the task element in the allTask array.
 */
function getCurrentIndex(element) {
  let idToDelete = Number(element);
  currentIndex = 0;
  for (let i = 0; i < allTask[0].length; i++) {
    const indexID = allTask[0][i].id;
    if (indexID === idToDelete) {
      currentIndex = i;
      return currentIndex;
    }
  }
}

/**
 * Updates the checkbox status of subtasks for the specified task element.
 * @param {string} element - The ID of the task element.
 */
function updateCheckboxStatus(element) {
  const checkboxes = document.querySelectorAll('.subtaskCheckbox input[type="checkbox"]');
  const subtaskCounts = selectedSubtaskCounts[element];

  if (subtaskCounts) {
    for (const subtaskId in subtaskCounts) {
      const checkbox = document.getElementById(subtaskId);
      if (checkbox) {
        checkbox.checked = subtaskCounts[subtaskId];
      }
    }
  }
}

/**
 * Renders user dates for the specified task element.
 */
function usersDate() {
  let userDateRender = document.getElementById('usersDateContent');
  let contactsHTML = "";

  for (let i = 0; i < allTask[0][currentIndex]["contacts"].length; i++) {
    const contact = allTask[0][currentIndex]["contacts"][i];
    contactsHTML += generateTemplateHtmlUserDate(contact);
  }
  userDateRender.innerHTML = contactsHTML;
}

/**
 * Renders the HTML for subtasks of the specified task element.
 * @param {string} element - The ID of the task element.
 * @param {Array} subtasks - The array containing subtask information.
 * @returns {string} - The HTML content for subtasks.
 */
function renderSubtasks(element, subtasks) {
  let subtasksHTML = "";
  for (let i = 0; i < subtasks.length; i++) {
    const subtask = subtasks[i];
    const isChecked = subtask.status === true;

    subtasksHTML += `<div class="subtaskCheckbox">
      <input type="checkbox" id="${subtask.id}" name="${subtask.value}" value="${subtask.value}" ${isChecked ? 'checked' : ''} onclick="checkboxClicked('${element}', '${subtask.id}')">
      <label for="${subtask.id}">${subtask.value}</label>
    </div>`;
  }
  return subtasksHTML;
}

/**
 * Handles the click event for a subtask checkbox and updates the selectedSubtaskCounts.
 * @param {string} cardElement - The ID of the task element.
 * @param {string} subtaskId - The ID of the subtask.
 */
async function checkboxClicked(cardElement, subtaskId) {
  const checkbox = document.getElementById(subtaskId);
  let numberOfSubtask = document.getElementById(`test${cardElement}`);

  if (!selectedSubtaskCounts[cardElement]) {
    selectedSubtaskCounts[cardElement] = {};
  }

  selectedSubtaskCounts[cardElement][subtaskId] = checkbox.checked;

  await updateProgressBar(cardElement, subtaskId);
  await updateStatus(subtaskId, checkbox.checked);
}

/**
 * Updates the status of a subtask in the allTask array and triggers updates to the taskbar and progress bar.
 * @param {string} subtaskIdToUpdate - The ID of the subtask to update.
 * @param {boolean} newStatusValue - The new status value for the subtask (true if completed, false otherwise).
 */
async function updateStatus(subtaskIdToUpdate, newStatusValue) {

  for (let j = 0; j < allTask[0].length; j++) {
    if (allTask[0][j].subtasks) {
      const subtaskIndex = allTask[0][j].subtasks.findIndex(subtask => subtask.id === subtaskIdToUpdate);

      if (subtaskIndex !== -1) {
        allTask[0][j].subtasks[subtaskIndex].status = newStatusValue;
      }
    }
  }
  await setItem('newTask', JSON.stringify(allTask[0]));
  updateProgressBarOnload();
}

/**
 * Updates the progress bar for a specific task element based on its subtask completion status.
 * @param {string} element - The ID of the task element.
 * @param {string} subtaskId - The ID of the subtask.
 */
async function updateProgressBar(element, subtaskId) {
  const progressBar = document.getElementById(`subtaskProgressBar${element}`);

  if (!selectedSubtaskCounts[element]) {
    selectedSubtaskCounts[element] = {};
  }

  await setItem('newTask', JSON.stringify(allTask[0][currentIndex].taskbar));
}

/**
 * Updates the progress bars for all task elements on page load.
 */
function updateProgressBarOnload() {
  for (let i = 0; i < allTask[0].length; i++) {
    const element = allTask[0][i];
    const progressBar = document.getElementById(`subtaskProgressBar${element["id"]}`);

    let numberOfSubtask = document.getElementById(`test${element["id"]}`);
    let completedSubtasks = element.subtasks.filter(subtask => subtask.status === true).length;
    let totalSubtasks = element.subtasks.length;
    let percentage = Math.round((completedSubtasks / totalSubtasks) * 100);

    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', percentage);
    progressBar.innerHTML = `<span>${percentage}%</span>`;
    numberOfSubtask.innerHTML = `<span>${completedSubtasks}</span>`;
  }
}

/**
 * Closes the card container by adding the "d-none" class to the openCardContainer element.
 */
function closeCardContainer() {
  document.getElementById("openCardContainer").classList.add("d-none");
}

/**
 * Opens the edit container, populates it with the details of the selected task, and hides the openCardContainer.
 * @param {number} element - The index of the selected task in the allTask array.
 */
function openEditContainer(element) {
  selectedUsers = allTask[0][element]["contacts"];
  let selectedSubrasks = allTask[0][element]["subtasks"];
  let getId = allTask[0][element]["id"];
  document.getElementById("secondCardRenderContainer").classList.remove("d-none");
  document.getElementById("openCardContainer").classList.add("d-none");

  document.getElementById("secondCardRenderContainer").innerHTML = generateTemplateHtmlEditCard(allTask[0][element], element, getId);

  renderContactsSmall(allTask[0][element]);
  rederCurrentTasks(selectedSubrasks);
}

/**
 * Renders small contact boxes in the specified container based on the contacts of a task element.
 * @param {Object} element - The task element.
 */
function renderContactsSmall(element) {
  let box = document.getElementById('addContactstoassign2');
  box.innerHTML = '';

  for (let i = 0; i < element["contacts"].length; i++) {
    const contact = element["contacts"][i];
    box.innerHTML += `
    <div id="${contact.id}" class="userBoxContainer displayFlex">
      <div class="imgPerson displayFlex" style="background-color: ${contact["color"]};">${contact["initial"]}</div>
    </div>`;
  }
}
