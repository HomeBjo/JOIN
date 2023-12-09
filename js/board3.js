/**
 * Create new subtasks in the edit window at board
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
        value: subtaskValue,
      });
    }
}


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


function BoardEgreeEditSubtask(subtaskId){
    let editWindowElement = document.getElementById(`BoardSubtaskEditWindow${subtaskId}`);
    let updatedValue = editWindowElement.value;

    let subtaskIndex = currentSubtasksBoard.findIndex(subtask => subtask.id === subtaskId);

    if (subtaskIndex !== -1) {
        currentSubtasksBoard[subtaskIndex].value = updatedValue;
    }

    BoardRenderSubtasksByAddTask();
}


function BoardRenderSubtasksByAddTask() {
    let addTask = document.getElementById('selectedSubrasks');
    addTask.innerHTML = '';

    currentSubtasksBoard.forEach(subtask => {
        addTask.innerHTML += rederCurrentTasksHtml(subtask.id, subtask.value);
    }); 
}


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
