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
  updateHTML(getTaskInfo);
}


function getValueOfTaskInfo(getTaskInfo, taskToEditIndex, getTitel, getDiscriptionArea, getCategory, getPrio, getSubtask, selectedUsers){
  getTaskInfo[taskToEditIndex].title = getTitel;
  getTaskInfo[taskToEditIndex].description = getDiscriptionArea;
  getTaskInfo[taskToEditIndex].workCategory = getCategory;
  getTaskInfo[taskToEditIndex].priority = getPrio;
  getTaskInfo[taskToEditIndex].subtasks = getSubtask;
  getTaskInfo[taskToEditIndex].contacts = selectedUsers;
}


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
 * 
 * @param {string} loggedInUser -test test  
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


function handleCheckboxClick2(i, userName, getInitial, getColor) {
  let checkbox = document.getElementById(`inputId2${i}`);
  let userId = `user_${i}`;

  if (checkbox.checked) {
    if (!selectedUsers.some(user => user.name === userName)) {
      let selectedUser = getSelectedUser(userName, loggedInUser.contacts[i].email, loggedInUser.contacts[i].phone, getInitial, getColor);
      selectedUsers.push(selectedUser);
      console.log(`selectedUsers hat ${selectedUsers.length}`);
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


function loadCategory2() {
  let getValue = document.getElementById('categorySelect2').textContent.trim();
  return getValue;
}


async function deleteCard(taskId) {
  let idToDelete = Number(taskId);
  let info = await getItem('newTask');
  let getTaskInfo = JSON.parse(info);
  let taskToDeleteIndex = getTaskInfo.findIndex(task => task.id === idToDelete);
  if (taskToDeleteIndex === -1) {
    console.error('Task not found for deletion');
    return;
  }
  getTaskInfo.splice(taskToDeleteIndex, 1);
  await setItem('newTask', JSON.stringify(getTaskInfo));
  updateHTML(getTaskInfo);
}

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


function removeClassesOfGetThePriority2(low2, medium2, urgent2, lowIcon2, mediumIcon2, highIcon2){
  low2.classList.remove("active3");
  medium2.classList.remove("active2");
  urgent2.classList.remove("active");
  lowIcon2.classList.remove("colorIcon3");
  mediumIcon2.classList.remove("colorIcon2");
  highIcon2.classList.remove("colorIcon");
}


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


function removeClassesOFgetThePriorityByCleanBoard(){
  document.getElementById('low').classList.remove("active3");
  document.getElementById('medium').classList.remove("active2");
  document.getElementById('high').classList.remove("active");
  document.getElementById("lowPriority").classList.remove("colorIcon3");
  document.getElementById("mediumPriority").classList.remove("colorIcon2");
  document.getElementById("urgentPriority").classList.remove("colorIcon");
}


function openSwitchCategory(event, elementId) {
  event.stopPropagation();

  let switchContainer = document.getElementById(`switchContainer${elementId}`);

  switchContainer.innerHTML = `
    <div class="switchWindow">
      <div class="switchButtons" onclick="filterByCategory('${elementId}', 'progress', event)">In Progress</div>
      <div class="switchButtons" onclick="filterByCategory('${elementId}', 'done', event)">Done</div>
      <div class="switchButtons" onclick="filterByCategory('${elementId}', 'toDo', event)">To Do</div>
    </div>`;
}

function filterByCategory(elementId, category, event) {
  event.stopPropagation();

  // Fügen Sie hier Ihren Code für die Kategoriefilterung hinzu
}
