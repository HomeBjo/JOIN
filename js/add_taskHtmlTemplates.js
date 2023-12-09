function showAssignetContactsHtml(getColor, getInitial, userName, i){
    return/*html*/ `
    <label class="userBoxContainer displayFlex userBoxContainerBox">
      <div class="imgPerson displayFlex" style="background-color: ${getColor};">${getInitial}</div>
      <span class="userPosition">${userName}</span>
      <input type="checkbox" id="inputId${i}" onclick="handleCheckboxClick('${i}', '${userName}', '${getInitial}', '${getColor}')">
    </label>`;
}


function andleCheckboxClickHtml(userId, getInitial, getColor){
    return `
        <div id="${userId}" class="userBoxContainer displayFlex">
          <div class="imgPerson displayFlex" style="background-color: ${getColor};">${getInitial}</div>
        </div>`;
}


function addSubTaskHtml(subtaskId, subtaskValue){
    return /*html*/`
        <div class="spaceBetween" id="currenT${subtaskId}">
          <span class="subtaskList" id="${subtaskId}">${subtaskValue}</span>
          <input type="text" class="subtaskEditWindow d-none" id="subtaskEditWindow${subtaskId}"> 
          <div class="positionOfImgsBySubtask" id="edit&deleteImgs${subtaskId}">
            <img src="../assets/img/edit.svg" onclick="editSubtask('${subtaskId}')" class="subtaskEditImg">|
            <img src="../assets/img/delete.svg" onclick="deleteSubtask('${subtaskId}')" class="subtaskDeleteImg">
          </div>
          <div class="positionOfImgsBySubtask d-none" id="agree&denyImgs${subtaskId}">
            <img src="../assets/img/check.svg" onclick="agreeEditSubtask('${subtaskId}')" class="agreeEditImg">|
            <img src="../assets/img/vector.svg" onclick="renderSubtasksByAddTask()" class="denyDeleteImg">
          </div>
        </div>`;
}