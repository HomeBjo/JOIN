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
