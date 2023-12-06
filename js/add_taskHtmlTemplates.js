function showAssignetContactsHtml(getColor, getInitial, userName, i){
    return/*html*/ `
    <div class="userBoxContainer displayFlex">
      <div class="imgPerson displayFlex" style="background-color: ${getColor};">${getInitial}</div>
      <span class="userPosition">${userName}</span>
      <input type="checkbox" id="inputId${i}" onclick="handleCheckboxClick('${i}', '${userName}', '${getInitial}', '${getColor}')">
    </div>`;
}


function andleCheckboxClickHtml(userId, getInitial, getColor){
    return `
        <div id="${userId}" class="userBoxContainer displayFlex">
          <div class="imgPerson displayFlex" style="background-color: ${getColor};">${getInitial}</div>
        </div>`;
}


function addSubTaskHtml(subtaskId, subtaskValue){
    return`
        <div class="subtaskList" id="${subtaskId}">${subtaskValue} 
            <img src="../assets/img/delete.svg" onclick="deleteSubtask('${subtaskId}')" class="subtaskDeleteImg">
        </div>`;
}