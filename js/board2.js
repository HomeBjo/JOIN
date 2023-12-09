/**
 * Edits an existing task with the specified ID by updating its details based on user inputs.
 * @param {string} getId - The ID of the task to edit.
 */
async function editTask(getId) {

  let info = await getItem('newTask');
  let getTaskInfo = JSON.parse(info);
  let currentID = Number(getId);

  let taskToEditIndex = getTaskInfo.findIndex(task => task.id === currentID);

  if (taskToEditIndex === -1) {
    console.error('Task not found for editing');
    return;
  }

  let getTitel = document.getElementById('addTastTitel2').value;
  let getDiscriptionArea = document.getElementById('addTastTextArea2').value;
  let getCategory = loadCategory2();
  let getPrio = selectedPriority;
  let getSubtask = currentSubtasksBoard;

  getPrio = getPrio || 'low';

  getValueOfTaskInfo(getTaskInfo, taskToEditIndex, getTitel, getDiscriptionArea, getCategory, getPrio, getSubtask, selectedUsers);
  
  await setItem('newTask', JSON.stringify(getTaskInfo));
  allTask[0][taskToEditIndex] = getTaskInfo[taskToEditIndex];
  init();
  currentSubtasksBoard = [];
}

/**
 * Updates the details of a task in the task information array.
 * @param {Array} getTaskInfo - The array containing task information.
 * @param {number} taskToEditIndex - The index of the task to edit.
 * @param {string} getTitel - The title of the task.
 * @param {string} getDiscriptionArea - The description of the task.
 * @param {string} getCategory - The category of the task.
 * @param {string} getPrio - The priority of the task.
 * @param {Array} getSubtask - The array containing subtasks of the task.
 * @param {Array} selectedUsers - The array containing selected users for the task.
 */
function getValueOfTaskInfo(getTaskInfo, taskToEditIndex, getTitel, getDiscriptionArea, getCategory, getPrio, getSubtask, selectedUsers){
  getTaskInfo[taskToEditIndex].title = getTitel;
  getTaskInfo[taskToEditIndex].description = getDiscriptionArea;
  getTaskInfo[taskToEditIndex].workCategory = getCategory;
  getTaskInfo[taskToEditIndex].priority = getPrio;
  getTaskInfo[taskToEditIndex].subtasks = getSubtask;
  getTaskInfo[taskToEditIndex].contacts = selectedUsers;
}

/**
 * Creates a new task based on the edited details, updates the UI, and closes the edit container.
 * @param {string} getId - The ID of the task being edited.
 */
function createNewTask2(getId) {
  editTask(getId);
  let selectedContacts = selectedUsers;
  let usersHTML = "";
  let contactsHTML = "";
  for (let i = 0; i < contactData.length; i++) {
    usersHTML += generateTemplateHtmlCreateNewTask2(contactData, i, selectedContacts);
  }

  for (let i = 0; i < selectedContacts.length; i++) {
    contactsHTML += generateTemplateHtmlCreateNewTask22(selectedContacts, i);
  }
  document.getElementById("usersDateContent").innerHTML = usersHTML;
  document.querySelector(".cardAddUsersIcons").innerHTML = contactsHTML;
  closeEditContainer2();
}

/**
 * Displays assigned contacts in the selectContainer2.
 * @param {Object} loggedInUser - The logged-in user object.
 */
function showAssignetContacts2(loggedInUser) {
  let box = document.getElementById("selectContainer2");

  for (let i = 0; i < loggedInUser.contacts.length; i++) {
    let userName = loggedInUser.contacts[i].name;
    let getInitial = loggedInUser.contacts[i].initial;
    let getColor = loggedInUser.contacts[i].color;

    let isChecked = selectedUsers.some(user => user.name === userName);

    box.innerHTML += showAssignetContacts2Html(getColor, getInitial, userName, i, isChecked);
  }
}

/**
 * Handles the click event on a checkbox, updating the selectedUsers array accordingly.
 * @param {number} i - The index of the checkbox.
 * @param {string} userName - The name of the user.
 * @param {string} getInitial - The initial of the user.
 * @param {string} getColor - The color associated with the user.
 */
function handleCheckboxClick2(i, userName, getInitial, getColor) {
  let checkbox = document.getElementById(`inputId2${i}`);
  let userId = `user_${i}`;

  if (checkbox.checked) {
    if (!selectedUsers.some(user => user.name === userName)) {
      let selectedUser = getSelectedUser(userName, loggedInUser.contacts[i].email, loggedInUser.contacts[i].phone, getInitial, getColor);
      selectedUsers.push(selectedUser);
      renderAddedContactBox(selectedUsers);
    }
  } else {
    let indexToRemove = selectedUsers.findIndex(user => user.name === userName);
    if (indexToRemove !== -1) {
      selectedUsers.splice(indexToRemove, 1);
    }
    renderAddedContactBox(selectedUsers);
  }
}

/**
 * Creates and returns a selected user object.
 */
function getSelectedUser(userName, userEmail, userPhone, getInitial, getColor){
  let selectedUser = {
    name: userName,
    email: userEmail,
    phone: userPhone,
    initial: getInitial,
    color: getColor
  };
  return selectedUser;
};

/**
 * Renders the added contact boxes in the specified container based on the selected users.
 * @param {Array} selectedUsers - The array containing selected user objects.
 */
function renderAddedContactBox(selectedUsers) {
  let currentUsers = document.getElementById("addContactstoassign2");
  currentUsers.innerHTML = '';
  for (let i = 0; i < selectedUsers.length; i++) {
    const initial = selectedUsers[i].initial;
    const color = selectedUsers[i].color;
    currentUsers.innerHTML += /*html*/ `
      <div class="userBoxContainer displayFlex">
        <div class="imgPerson displayFlex" style="background-color: ${color};">${initial}</div>
      </div>`;
  }
}

/**
 * Loads the category value from the categorySelect2 element.
 * @returns {string} - The value of the category.
 */
function loadCategory2() {
  let getValue = document.getElementById('categorySelect2').textContent.trim();
  return getValue;
}

/**
 * Deletes a card with the specified task ID from the task information array and updates the UI.
 * @param {string} taskId - The ID of the task to delete.
 */
async function deleteCard(taskId) {
  let idToDelete = Number(taskId);
  let info = await getItem('newTask');
  let getTaskInfo = JSON.parse(info);
  let taskToDeleteIndex = getTaskInfo.findIndex(task => task.id === idToDelete);
  if (taskToDeleteIndex === -1) {
    console.error('Task not found for deletion');
    return;
  }
  document.getElementById(`closeCarD${taskId}`).innerHTML = '';
  getTaskInfo.splice(taskToDeleteIndex, 1);
  await setItem('newTask', JSON.stringify(getTaskInfo));
  updateHTML(getTaskInfo);
}

/**
 * Updates the priority selection based on the clicked priority option.
 * @param {string} priority - The priority value ('low', 'medium', 'high').
 * @param {string} lowId - The HTML element ID for the low priority option.
 * @param {string} mediumId - The HTML element ID for the medium priority option.
 * @param {string} highId - The HTML element ID for the high priority option.
 */
function getThePriority2(priority, lowId, mediumId, highId) {
  const low2 = document.getElementById(`${lowId}2`);
  const medium2 = document.getElementById(`${mediumId}2`);
  const urgent2 = document.getElementById(`${highId}2`);
  const lowIcon2 = document.getElementById("lowPriority2");
  const mediumIcon2 = document.getElementById("mediumPriority2");
  const highIcon2 = document.getElementById("urgentPriority2");

  if (`${lowId}2` && `${mediumId}2` && `${highId}2` && lowIcon2 && mediumIcon2 && highIcon2) {
    removeClassesOfGetThePriority2(low2, medium2, urgent2, lowIcon2, mediumIcon2, highIcon2);
    if (selectedPriority === priority) {
      selectedPriority = null;
    } else {
      selectedPriority = priority;
      addClassesOfGetThePriority2(selectedPriority, low2, medium2, urgent2, lowIcon2, mediumIcon2, highIcon2);
    }
  } else {
    console.error("Ein oder mehrere Elemente wurden nicht gefunden.");
  }
}

/**
 * Removes active and color classes from priority elements.
 */
function removeClassesOfGetThePriority2(low2, medium2, urgent2, lowIcon2, mediumIcon2, highIcon2){
  low2.classList.remove("active3");
  medium2.classList.remove("active2");
  urgent2.classList.remove("active");
  lowIcon2.classList.remove("colorIcon3");
  mediumIcon2.classList.remove("colorIcon2");
  highIcon2.classList.remove("colorIcon");
}

/**
 * Adds active and color classes to the selected priority elements.
 */
function addClassesOfGetThePriority2(selectedPriority, low2, medium2, urgent2, lowIcon2, mediumIcon2, highIcon2){
  if (selectedPriority === 'low') {
    low2.classList.add("active3");
    lowIcon2.classList.add("colorIcon3");
  } else if (selectedPriority === 'medium') {
    medium2.classList.add("active2");
    mediumIcon2.classList.add("colorIcon2");
  } else if (selectedPriority === 'high') {
    urgent2.classList.add("active");
    highIcon2.classList.add("colorIcon");
  }
}

/**
 * Clears input fields and values on the side add task section.
 */
function clearSideAddTask() {
  let titleInput = document.getElementById('addTastTitel');
  let descriptionInput = document.getElementById('addTastTextArea');
  let dateInput = document.getElementById('dueDateValue');
  let selectedContact = document.getElementById('addContactstoassign');
  let categorySelectBox = document.getElementById('SelectTaskCatergory');
  let subtaskInputBox = document.getElementById('subtaskInput');
  let subtaskContainer = document.getElementById('subtaskContainer');
  clearInputFieldsValuesBoard(titleInput, descriptionInput, dateInput, selectedContact, categorySelectBox, subtaskInputBox, subtaskContainer, subtaskContainer);
}

/**
 * Clears input fields and values on the board section.
 */
function clearInputFieldsValuesBoard(titleInput, descriptionInput, dateInput, selectedContact, categorySelectBox, subtaskInputBox, subtaskContainer, subtaskContainer){
  titleInput.value=``;
  descriptionInput.value=``;
  dateInput.value=``;
  selectedContact.innerHTML=``;
  categorySelectBox.innerHTML=`<div>Select task catergory</div>`;
  subtaskInputBox.value=``;
  currentSubtasks = [];
  subtaskContainer.innerHTML=``;
  resetCheckboxesBoard();
  removeClassesOFgetThePriorityByCleanBoard();
}

/**
 * Resets checkboxes and selected users on the side add task section.
 */
function resetCheckboxesBoard(){
  for (let i = 0; i < loggedInUser.contacts.length; i++) {
    let checkbox = document.getElementById(`inputId${i}`);
    if (checkbox) {
      checkbox.checked = false;
    }

    let userToRemove = document.getElementById(`user_${i}`);
    if (userToRemove) {
      userToRemove.remove();
    }
  }
  selectedUsers = [];
}

/**
 * Removes priority-related classes on the side add task section.
 */
function removeClassesOFgetThePriorityByCleanBoard(){
  document.getElementById('low').classList.remove("active3");
  document.getElementById('medium').classList.remove("active2");
  document.getElementById('high').classList.remove("active");
  document.getElementById("lowPriority").classList.remove("colorIcon3");
  document.getElementById("mediumPriority").classList.remove("colorIcon2");
  document.getElementById("urgentPriority").classList.remove("colorIcon");
}

/**
 * Opens or closes the category switch window on the side add task section.
 * @param {Event} event - The click event.
 * @param {string} elementId - The ID of the element.
 */
function openSwitchCategory(event, elementId) {
  event.stopPropagation();

  let switchContainer = document.getElementById(`switchContainer${elementId}`);
  let switchWindow = switchContainer.querySelector('.switchWindow');

  if (switchWindow) {
    switchContainer.innerHTML = '';
  } else {
    switchContainer.innerHTML = openSwitchCategoryHtml(elementId, event);
  }
}

/**
 * Closes the mobile move window on the side add task section.
 * @param {string} elementId - The ID of the element.
 */
function closeMoveToMobileWindow(elementId){
  event.stopPropagation();
  document.getElementById(`switchContainer${elementId}`).innerHTML = '';
}

/**
 * Moves a task to a different category on the side add task section.
 * @param {string} category - The category to move the task to.
 * @param {string} elementId - The ID of the element.
 * @param {Event} event - The click event.
 */
async function moveToMobile(category, elementId, event) {
  event.stopPropagation();

  let info = await getItem('newTask');
  let getTaskInfo = JSON.parse(info);

  const index = getTaskInfo.findIndex(element => String(element.id) === String(elementId));

  if (index !== -1) {
    getTaskInfo[index]["category"] = category;
    await setItem('newTask', JSON.stringify(getTaskInfo));
    updateHTML(getTaskInfo);
    updateProgressBarOnload();
  }
}

/**
 * Renders the current tasks on the side add task section.
 * @param {Array} selectedSubrasks - The array of selected subtasks.
 */
function rederCurrentTasks(selectedSubrasks) {
  let box = document.getElementById('selectedSubrasks');
  box.innerHTML = '';

  for (let i = 0; i < selectedSubrasks.length; i++) {
    const value = selectedSubrasks[i].value;
    const id = selectedSubrasks[i].id;
    const isSubtaskExist = currentSubtasksBoard.some(subtask => subtask.id === id);
    if (!isSubtaskExist) {
      currentSubtasksBoard.push({
        id: id,
        value: value
      });
    }
    box.innerHTML += rederCurrentTasksHtml(id, value);
  }
}

/**
 * Closes the edit container on the side add task section.
 */
function closeEditContainer() {
  document.getElementById("openEditContainer").classList.add("d-none");
}

/**
 * Generates HTML for a placeholder task in a category.
 * @param {string} category - The category of the task.
 * @returns {string} - The HTML for the placeholder task.
 */
function generatePlaceholderTasks(category) {
  return `<div class="placeholderTaskContainer" ><span>No tasks in ${category}</span></div>`;
}

/**
 * Toggles the visibility of the current date calendar on the side add task section.
 */
function shwoCurrentDate() {
  document.getElementById('autoJsCalendar').classList.toggle('d-none');
}

/**
 * Closes the second edit container on the side add task section.
 */
function closeEditContainer2() {
  document.getElementById("openEditContainer2").classList.add("d-none");
}

/**
 * Toggles the visibility of the contacts container on the side add task section.
 */
function addContacts2() {
  let box = document.getElementById("selectContainer2");
  box.classList.toggle("d-none");
}