/**
 * Clears input fields, selected contacts, and resets task category, subtasks, and checkboxes.
 */
function clearInputFields() {
  let titleInput = document.getElementById('addTastTitel');
  let descriptionInput = document.getElementById('addTastTextArea');
  let dateInput = document.getElementById('dueDateValue');
  let selectedContact = document.getElementById('addContactstoassign');
  let categorySelectBox = document.getElementById('SelectTaskCatergory');
  let subtaskInputBox = document.getElementById('subtaskInput');
  let subtaskContainer = document.getElementById('subtaskContainer');
  clearInputFieldsValues(titleInput, descriptionInput, dateInput, selectedContact, categorySelectBox, subtaskInputBox, subtaskContainer, subtaskContainer);
}

/**
 * Clears the values of input fields, selected contacts, task category, subtasks, and resets checkboxes.
 */
function clearInputFieldsValues(titleInput, descriptionInput, dateInput, selectedContact, categorySelectBox, subtaskInputBox, subtaskContainer, subtaskContainer){
  titleInput.value=``;
  descriptionInput.value=``;
  dateInput.value=``;
  selectedContact.innerHTML=``;
  categorySelectBox.innerHTML=`<div>Select task catergory</div>`;
  subtaskInputBox.value=``;
  currentSubtasks = [];
  subtaskContainer.innerHTML=``;
  resetCheckboxes();
  removeClassesOFgetThePriorityByClean();
}

/**
 * Resets all checkboxes and removes selected users from the list.
 */
function resetCheckboxes(){
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
 * Removes priority-related classes to reset the priority selection.
 */
function removeClassesOFgetThePriorityByClean(){
  document.getElementById('low').classList.remove("active3");
  document.getElementById('medium').classList.remove("active2");
  document.getElementById('high').classList.remove("active");
  document.getElementById("lowPriority").classList.remove("colorIcon3");
  document.getElementById("mediumPriority").classList.remove("colorIcon2");
  document.getElementById("urgentPriority").classList.remove("colorIcon");
}

/**
 * Displays the edit window for a subtask with the specified ID.
 * @param {string} subtaskId - The ID of the subtask to be edited.
 */
function editSubtask(subtaskId){
    let subtaskElement = document.getElementById(`${subtaskId}`);
    let editWindowElement = document.getElementById(`subtaskEditWindow${subtaskId}`);
    document.getElementById(`edit&deleteImgs${subtaskId}`).classList.add('d-none');
    document.getElementById(`agree&denyImgs${subtaskId}`).classList.remove('d-none');
    subtaskElement.classList.add('d-none');
    editWindowElement.classList.remove('d-none');

    let subtaskValue = subtaskElement.innerText;
    editWindowElement.value = subtaskValue;
    editWindowElement.focus();
}

/**
 * Updates the value of a subtask with the specified ID after editing.
 * @param {string} subtaskId - The ID of the subtask to be updated.
 */
function agreeEditSubtask(subtaskId){
    let editWindowElement = document.getElementById(`subtaskEditWindow${subtaskId}`);
    let updatedValue = editWindowElement.value;

    let subtaskIndex = currentSubtasks.findIndex(subtask => subtask.id === subtaskId);

    if (subtaskIndex !== -1) {
        currentSubtasks[subtaskIndex].value = updatedValue;
    }

    renderSubtasksByAddTask();
}

/**
 * Renders the subtasks in the subtaskContainer by adding HTML elements.
 */
function renderSubtasksByAddTask() {
    let addTask = document.getElementById('subtaskContainer');
    addTask.innerHTML = '';

    currentSubtasks.forEach(subtask => {
        addTask.innerHTML += addSubTaskHtml(subtask.id, subtask.value);
    });
}

/**
 * This function is used for loads the userStoryID and updates the task category in the SelectTaskCatergory element.
 */
function loadUserStory() {
  let Box = document.getElementById('userStoryID');
  let currentValue = Box.innerHTML;
  if (currentValue === "User Story") {
    document.getElementById('SelectTaskCatergory').innerHTML = currentValue;
  }
}

/**
 * This function is used for retrieves the selected category from the categorySelect element and returns its trimmed value.
 */
function loadCategory() {
  let getValue = document.getElementById('categorySelect').textContent.trim();
  return getValue;
}

/**
 * This function is used for retrieves the value of the input element with the id "subtaskValue."
 */
function addedSubtask() {
  let box = document.getElementById("subtaskValue").value;
  return box.textContent;
}

/**
 * This function is used for Retrieves the text content of the element with the provided subtask ID.
 */
function editSubtask(subtaskId) {
  let editedValue = document.getElementById(subtaskId).textContent;
  console.log('Edit Subtask:', editedValue);

}

/**
 * This function is used for deletes a subtask with the specified ID from the currentSubtasks array and the DOM.
 */
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

