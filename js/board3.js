/**
 * Adds a subtask on the side add task section.
 */
function addSubTask2() {
    let subtaskInput = document.getElementById('subtaskInput2');
    let addTask = document.getElementById('selectedSubrasks');
    let subtaskValue = subtaskInput.value;
    let subtaskId = 'subtask' + Date.now();
    if (subtaskValue.trim() !== '') {
      addTask.innerHTML += rederCurrentTasksHtml(subtaskId, subtaskValue, subtaskId);
      subtaskInput.value = '';
      currentSubtasksBoard.push({
        id: subtaskId,
        status: false,
        value: subtaskValue,
      });
    }
}

/**
 * Opens the edit window for a subtask on the board.
 * @param {string} subtaskId - The ID of the subtask.
 */
function BoardEditSubtask(subtaskId){
    let subtaskElement = document.getElementById(`BoarD${subtaskId}`);
    let editWindowElement = document.getElementById(`BoardSubtaskEditWindow${subtaskId}`);
    document.getElementById(`BoardEdit&deleteImgs${subtaskId}`).classList.add('d-none');
    document.getElementById(`BoardAgree&denyImgs${subtaskId}`).classList.remove('d-none');
    subtaskElement.classList.add('d-none');
    editWindowElement.classList.remove('d-none');

    let subtaskValue = subtaskElement.innerText;
    editWindowElement.value = subtaskValue;
    editWindowElement.focus();
}

/**
 * Applies the edited value for a subtask on the board.
 * @param {string} subtaskId - The ID of the subtask.
 */
function BoardEgreeEditSubtask(subtaskId){
    let editWindowElement = document.getElementById(`BoardSubtaskEditWindow${subtaskId}`);
    let updatedValue = editWindowElement.value;

    let subtaskIndex = currentSubtasksBoard.findIndex(subtask => subtask.id === subtaskId);

    if (subtaskIndex !== -1) {
        currentSubtasksBoard[subtaskIndex].value = updatedValue;
    }

    BoardRenderSubtasksByAddTask();
}

/**
 * Renders the subtasks on the board by adding a task.
 */
function BoardRenderSubtasksByAddTask() {
    let addTask = document.getElementById('selectedSubrasks');
    addTask.innerHTML = '';

    currentSubtasksBoard.forEach(subtask => {
        addTask.innerHTML += rederCurrentTasksHtml(subtask.id, subtask.value);
    }); 
}

/**
 * Deletes a subtask on the board.
 * @param {string} id - The ID of the subtask.
 */
function BoardDeleteSubtask(id) {
    const subtaskIndex = currentSubtasksBoard.findIndex(task => task.id === id);
    if (subtaskIndex !== -1) {
      currentSubtasksBoard.splice(subtaskIndex, 1);
    }
    const subtaskElement = document.getElementById(`BoardCurrenT${id}`);
    if (subtaskElement) {
      subtaskElement.remove();
    }
  
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

/**
 * Toggles the visibility of the category container on the side add task section.
 */
function showCategoryContacts2() {
  document.getElementById("categoryContainer2").classList.toggle("d-none");
}

/**
 * Loads the technical task on the side add task section.
 */
function loadTechnicalTask2() {
  let Box = document.getElementById('technicalTaskID2');
  let currentValue = Box.innerHTML;
  if (currentValue === "Technical Task") {
    document.getElementById('SelectTaskCatergory2').innerHTML = currentValue;
  }
}

/**
 * Loads the user story on the side add task section.
 */
function loadUserStory2() {
  let Box = document.getElementById('userStoryID2');
  let currentValue = Box.innerHTML;
  if (currentValue === "User Story") {
    document.getElementById('SelectTaskCatergory2').innerHTML = currentValue;
  }
}


function closeCategoryContainerOnBoardEdit(event){
  let SelectTaskBox = document.getElementById("categoryContainer2");
  let SelectTaskHeader = document.getElementById("categorySelect2");
  if (!SelectTaskHeader.contains(event.target) && !SelectTaskBox.contains(event.target)) {
    SelectTaskBox.classList.add("d-none");
  }
}

function closeCategoryContainerOnBoardEditContacts(event){
  let SelectContactsBox = document.getElementById("selectContainer2");
  let SelectContactsHeader = document.getElementById("assignedSelect2");
  if (!SelectContactsHeader.contains(event.target) && !SelectContactsBox.contains(event.target)) {
    SelectContactsBox.classList.add("d-none");
  }
}



function showCurrentDateBoard(){
  let AddTaskBoard = document.getElementById('dueDateValue');
  let EditBoard = document.getElementById('dateEditBoard');
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }

  today = yyyy + '-' + mm + '-' + dd;
  AddTaskBoard.min = today;
  EditBoard.min = today;
}