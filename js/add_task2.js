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


function removeClassesOFgetThePriorityByClean(){
  document.getElementById('low').classList.remove("active3");
  document.getElementById('medium').classList.remove("active2");
  document.getElementById('high').classList.remove("active");
  document.getElementById("lowPriority").classList.remove("colorIcon3");
  document.getElementById("mediumPriority").classList.remove("colorIcon2");
  document.getElementById("urgentPriority").classList.remove("colorIcon");
}