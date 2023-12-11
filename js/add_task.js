let allTasks = [];
let contactData = [];
let selectedPriority;
let currentSubtasks = [];
let selectedUsers = [];
let checked = true;
let selectedCategory2;


async function initAddTask() {
  await includeHTML();
  highlightTitle('add-task');
  highlightTitleMobile('add-task-mobile');
  getAllTasks();
  loggedInUser = await getLoggedInUser();
  showProfileInitials(loggedInUser);
  loadUsers();
  showAssignetContacts(loggedInUser);
}

/**
 * This function is used for retrieves all tasks from local storage and updates the global 'allTasks' variable.
 */
async function getAllTasks() {
  try {
    allTasks = JSON.parse(await getItem('newTask'));
  } catch (e) {
    console.error('Loading error:', e);
  }
}

/**
 * This function is used for  Creates a new task based on user input. Disables the 'Create Task' button during execution.
 */
async function createNewTask() {
  let buttonCreateTask = document.getElementById('buttonCreateTask');
  buttonCreateTask.disabled = true;

  let isValid = checkInputFields();

  if (isValid) {
    let getTitel = document.getElementById('addTastTitel').value;
    let getTextArea = document.getElementById('addTastTextArea').value;
    let getDateValue = document.getElementById('dueDateValue').value;
    let getCategory = loadCategory();

    selectedPriority = selectedPriority || 'low';

    await pushTaskInfo(getTitel, getTextArea, getDateValue, selectedUsers, getCategory, selectedPriority, currentSubtasks);
    window.location.href = '../html/board.html';
  }

  buttonCreateTask.disabled = false;
}

/**
 * This function is used for  Creates a new task from the board view based on user input. Validates input fields using the 'checkInputFields' function.
 */
async function createNewTaskFromBoard() {
  if (checkInputFields()) {
    let getTitel = document.getElementById('addTastTitel').value;
    let getTextArea = document.getElementById('addTastTextArea').value;
    let getDateValue = document.getElementById('dueDateValue').value;
    let getCategory = loadCategory();
    let getTaskCategory= selectedCategory2;


    selectedPriority = selectedPriority || 'low';

    await pushTaskInfo(getTitel, getTextArea, getDateValue, selectedUsers, getCategory, selectedPriority,currentSubtasks,getTaskCategory);
    getTitel.value ='';
    getTextArea.value ='';
    getDateValue.value ='';
    init();
  } 
}

/**
 * This function is used for clearArray.
 */
function clearArray() {
  allTasks.splice(0, allTasks.length);
}

/**
 * This function is used for clearArray.
 */
function clearTasksArray() {
  if (confirm('Are you sure you want to clear all tasks?')) {
    clearArray(); 
    setItem('newTask', JSON.stringify([])) 
      .then(() => {
        console.log('Tasks array cleared');
      })
      .catch((error) => {
        console.error('Error clearing tasks array:', error);
      });
  }
}


/**
 * This function is used for  Pushes task information to storage after validating and processing input data.
 * Checks if a task with the same title already exists. If not, creates a new task object with the provided data.
 */
async function pushTaskInfo(getTitle, getDescription, getDateValue, contactData, getCategory, selectedPriority,currentSubtasks,getTaskCategory) {
  getTitle = getTitle.trim();
  let existingTasks = [];
  try {
    const storedTasks = await getItem('newTask');
    if (storedTasks) {
      existingTasks = JSON.parse(storedTasks);
    }
  } catch (e) {
    console.error('Error fetching existing tasks:', e);
  }
  const existingTaskIndex = existingTasks.findIndex((task) => task.title === getTitle);
  if (existingTaskIndex === -1) {
    let newTask = getValues(existingTasks.length, getTitle, getDescription, selectedPriority, getDateValue, contactData, getCategory,currentSubtasks, checked,getTaskCategory);
    existingTasks.push(newTask);
    await setItem('newTask', JSON.stringify(existingTasks));
    await showCreateAnimation();
  } else {
    alert('Task bereits vorhanden');
  }
}

/**
 * This function is used for getvalues from inputfields and set category.
 */
function getValues(existingTasks, getTitle, getDescription, selectedPriority, getDateValue, contactData, getCategory,currentSubtasks, checked,getTaskCategory){
  const categoryC = getTaskCategory || "toDo";
  let newTask = {
    id: existingTasks + Date.now(),
    title: getTitle,
    description: getDescription,
    priority: selectedPriority,
    date: getDateValue,
    contacts: contactData,
    workCategory: getCategory,
    category: categoryC,
    subtasks: currentSubtasks,
    isChecked: checked,
    taskbar: 0,
  };
  return newTask;
}

/**
 * This function is used for displays a success animation to indicate the creation of a new task.
 */
async function showCreateAnimation() {
  const successMessage = document.getElementById('animation');

  successMessage.classList.remove('d-none');
  await new Promise(resolve => setTimeout(resolve, 2500));
  successMessage.classList.add('slideUpDown');
  await new Promise(resolve => setTimeout(resolve, 300));
  successMessage.classList.remove('slideUpDown');
  successMessage.classList.add('d-none');
}

/**
 * This function is used for Checks the input fields for creating a new task and displays error messages if necessary.
 */
function checkInputFields() {
  let titleInput = document.getElementById('addTastTitel');
  let descriptionInput = document.getElementById('addTastTextArea');
  let dateInput = document.getElementById('dueDateValue');
  let titleFail = document.getElementById('tile-fail-message');
  let descriptionFail = document.getElementById('description-fail-message');
  let dateFail = document.getElementById('date-fail-message');
  titleFail.innerHTML = '';
  descriptionFail.innerHTML = '';
  dateFail.innerHTML = '';

  return ifStatementsOfcheckInputFields(titleInput, titleFail, descriptionInput, descriptionFail, dateInput, dateFail);
}

/**
 * This function is used for performs individual validation statements for input fields when creating a new task.
 */
function ifStatementsOfcheckInputFields(titleInput, titleFail, descriptionInput, descriptionFail, dateInput, dateFail) {
  let isValid = true;

  if (titleInput.value.trim() === '') {
    titleFail.innerHTML = '<span>Title is required</span>';
    isValid = false;
  }
  if (descriptionInput.value.trim() === '') {
    descriptionFail.innerHTML = '<span>Description is required</span>';
    isValid = false;
  }
  if (dateInput.value.trim() === '') {
    dateFail.innerHTML = '<span>Due date is required</span>';
    isValid = false;
  }

  return isValid;
}

/**
 * This function is used for Handles the selection of task priority and toggles priority classes and icons based on user selection.
 */
function getThePriority(priority, lowId, mediumId, highId) {
  const low = document.getElementById(lowId);
  const medium = document.getElementById(mediumId);
  const urgent = document.getElementById(highId);
  const lowIcon = document.getElementById("lowPriority");
  const mediumIcon = document.getElementById("mediumPriority");
  const highIcon = document.getElementById("urgentPriority");

  if (low && medium && urgent && lowIcon && mediumIcon && highIcon) {
    removeClassesOFgetThePriority(low, medium, urgent, lowIcon, mediumIcon, highIcon);

    if (selectedPriority === priority) {
      selectedPriority = null;
    } else {
      selectedPriority = priority;
      getColorOfPriority(low, lowIcon, medium, mediumIcon, urgent, highIcon);
    }
  }
}

/**
 * This function is used for removes active classes and color icons associated with task priority options.
 */
function removeClassesOFgetThePriority(low, medium, urgent, lowIcon, mediumIcon, highIcon){
  low.classList.remove("active3");
  medium.classList.remove("active2");
  urgent.classList.remove("active");
  lowIcon.classList.remove("colorIcon3");
  mediumIcon.classList.remove("colorIcon2");
  highIcon.classList.remove("colorIcon");
}

/**
 * This function is used for sets the color and active state for the selected task priority option.
 */
function getColorOfPriority(low, lowIcon, medium, mediumIcon, urgent, highIcon){
  if (selectedPriority === 'low') {
    low.classList.add("active3");
    lowIcon.classList.add("colorIcon3");
  } else if (selectedPriority === 'medium') {
    medium.classList.add("active2");
    mediumIcon.classList.add("colorIcon2");
  } else if (selectedPriority === 'high') {
    urgent.classList.add("active");
    highIcon.classList.add("colorIcon");
  }
}

/**
 * This function is used for toggles the visibility of the contact selection container.
 */
function addContacts() {
  let box = document.getElementById("selectContainer");
  box.classList.toggle("d-none");
}

/**
 * This function is used for displays assigned contacts in the contact selection container and retrieves contact information from the logged-in user's data.
 */
async function showAssignetContacts(loggedInUser) {
  let box = document.getElementById("selectContainer");

  for (let i = 0; i < loggedInUser.contacts.length; i++) {
    let userName = loggedInUser.contacts[i].name;
    let getInitial = loggedInUser.contacts[i].initial;
    let getColor = loggedInUser.contacts[i].color;
    box.innerHTML += showAssignetContactsHtml(getColor, getInitial, userName, i);

    let userContactData = getUserContactData(userName, loggedInUser.contacts[i].email, loggedInUser.contacts[i].phone, getInitial, getColor);

    contactData.push(userContactData);
  }
  return contactData;
}

/**
 * This function is used for Creates an object containing user contact data.
 */
function getUserContactData(userName, userEmail, userPhone, getInitial, getColor){
  let userContactData = {
    name: userName,
    email: userEmail,
    phone: userPhone,
    initial: getInitial,
    color: getColor
  };
  return userContactData;
}

/**
 * This function is used for handles the click event on a checkbox for user selection.
 */
function handleCheckboxClick(i, userName, getInitial, getColor) {
  let checkbox = document.getElementById(`inputId${i}`);
  let addUser = document.getElementById("addContactstoassign");
  let userId = `user_${i}`;

  if (checkbox.checked) {
    addUser.innerHTML += andleCheckboxClickHtml(userId, getInitial, getColor);

    let selectedUser = getSelectedUser(userName, loggedInUser.contacts[i].email, loggedInUser.contacts[i].phone, getInitial, getColor);

    selectedUsers.push(selectedUser);
  } else {
    let userToRemove = document.getElementById(userId);
    if (userToRemove) {
      userToRemove.remove();
      selectedUsers = selectedUsers.filter(user => user.name !== userName);
    }
  }
}

/**
 * This function is used for get user selection.
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
 * This function is used for closes the select container if a click occurs outside of it.
 */
function closeSelectContainer(event) {
  let selectContainer = document.getElementById("selectContainer");
  let assignedSelect = document.getElementById("assignedSelect");
  if (!assignedSelect.contains(event.target) && !selectContainer.contains(event.target)) {
    selectContainer.classList.add("d-none");
  }
}

/**
 * This function is used for toggle the categoryContainer if a click occurs outside of it.
 */
function showCategoryContacts() {
  document.getElementById("categoryContainer").classList.toggle("d-none");
}

/**
 * This function is used for closes the category container if a click occurs outside of it.
 */
function closeCategoryContainer(event) {
  let selectContainer = document.getElementById("categoryContainer");
  let assignedSelect = document.getElementById("categorySelect");
  if (!assignedSelect.contains(event.target) && !selectContainer.contains(event.target)) {
    selectContainer.classList.add("d-none");
  }
}

/**
 * This function is used for adds a subtask to the task with the provided subtask input value.
 */
function addSubTask() {
  let subtaskInput = document.getElementById('subtaskInput');
  let addTask = document.getElementById('subtaskContainer');
  let subtaskValue = subtaskInput.value;
  let subtaskId = 'subtask' + Date.now();
  let status = false;
  if (subtaskValue.trim() !== '') {
    addTask.innerHTML += addSubTaskHtml(subtaskId, subtaskValue, subtaskId);
    subtaskInput.value = '';

    currentSubtasks.push({
      id: subtaskId,
      value: subtaskValue,
      status: false
    });
  }
}

/**
 * This function is used for loads the technical task and updates the task category in the SelectTaskCatergory element.
 */
function loadTechnicalTask() {
  let Box = document.getElementById('technicalTaskID');
  let currentValue = Box.innerHTML;
  if (currentValue === "Technical Task") {
    document.getElementById('SelectTaskCatergory').innerHTML = currentValue;
  }
}

