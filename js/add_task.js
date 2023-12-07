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


async function getAllTasks() {
  try {
    allTasks = JSON.parse(await getItem('newTask'));
  } catch (e) {
    console.error('Loading error:', e);
  }
}


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




async function createNewTaskFromBoard() {
  if (checkInputFields()) {
    let getTitel = document.getElementById('addTastTitel').value;
    let getTextArea = document.getElementById('addTastTextArea').value;
    let getDateValue = document.getElementById('dueDateValue').value;
    let getCategory = loadCategory();
    let getTaskCategory= selectedCategory2;

    selectedPriority = selectedPriority || 'low';

    await pushTaskInfo(getTitel, getTextArea, getDateValue, selectedUsers, getCategory, selectedPriority,getTaskCategory,currentSubtasks);
    getTitel.value ='';
    getTextArea.value ='';
    getDateValue.value ='';
  }
  init();
  
}


function clearArray() {
  allTasks.splice(0, allTasks.length);
}


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


async function pushTaskInfo(getTitle, getDescription, getDateValue, contactData, getCategory, selectedPriority,getTaskCategory,currentSubtasks) {
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
    let newTask = getValues(existingTasks.length, getTitle, getDescription, selectedPriority, getDateValue, contactData, getCategory,getTaskCategory,currentSubtasks, checked);

    existingTasks.push(newTask);
    await setItem('newTask', JSON.stringify(existingTasks));

    console.log(existingTasks);
    await showCreateAnimation();
  } else {
    alert('Task bereits vorhanden');
  }
}


function getValues(existingTasks, getTitle, getDescription, selectedPriority, getDateValue, contactData, getCategory,getTaskCategory, currentSubtasks, checked){
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


async function showCreateAnimation() {
  const successMessage = document.getElementById('animation');

  successMessage.classList.remove('d-none');
  await new Promise(resolve => setTimeout(resolve, 2500));
  successMessage.classList.add('slideUpDown');
  await new Promise(resolve => setTimeout(resolve, 300));
  successMessage.classList.remove('slideUpDown');
  successMessage.classList.add('d-none');
}


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


function removeClassesOFgetThePriority(low, medium, urgent, lowIcon, mediumIcon, highIcon){
  low.classList.remove("active3");
  medium.classList.remove("active2");
  urgent.classList.remove("active");
  lowIcon.classList.remove("colorIcon3");
  mediumIcon.classList.remove("colorIcon2");
  highIcon.classList.remove("colorIcon");
}


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


function addContacts() {
  let box = document.getElementById("selectContainer");
  box.classList.toggle("d-none");
}


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


function closeSelectContainer(event) {
  let selectContainer = document.getElementById("selectContainer");
  let assignedSelect = document.getElementById("assignedSelect");
  if (!assignedSelect.contains(event.target) && !selectContainer.contains(event.target)) {
    selectContainer.classList.add("d-none");
  }
}


function showCategoryContacts() {
  document.getElementById("categoryContainer").classList.toggle("d-none");
}


function closeCategoryContainer(event) {
  let selectContainer = document.getElementById("categoryContainer");
  let assignedSelect = document.getElementById("categorySelect");
  if (!assignedSelect.contains(event.target) && !selectContainer.contains(event.target)) {
    selectContainer.classList.add("d-none");
  }
}


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


function loadTechnicalTask() {
  let Box = document.getElementById('technicalTaskID');
  let currentValue = Box.innerHTML;
  if (currentValue === "Technical Task") {
    document.getElementById('SelectTaskCatergory').innerHTML = currentValue;
  }
}


function loadUserStory() {
  let Box = document.getElementById('userStoryID');
  let currentValue = Box.innerHTML;
  if (currentValue === "User Story") {
    document.getElementById('SelectTaskCatergory').innerHTML = currentValue;
  }
}


function loadCategory() {
  let getValue = document.getElementById('categorySelect').textContent.trim();
  return getValue;
}


function addedSubtask() {
  let box = document.getElementById("subtaskValue").value;
  return box.textContent;
}


function editSubtask(subtaskId) {
  let editedValue = document.getElementById(subtaskId).textContent;
  console.log('Edit Subtask:', editedValue);

}


function deleteSubtask(subtaskId) {
  const subtaskIndex = currentSubtasks.findIndex(task => task.id === subtaskId);
  if (subtaskIndex !== -1) {
    currentSubtasks.splice(subtaskIndex, 1);
  }
  const subtaskElement = document.getElementById(`currenT${subtaskId}`);
  if (subtaskElement) {
    subtaskElement.remove();
  }
}