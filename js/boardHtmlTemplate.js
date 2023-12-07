function generateTodoHTML(element, priorityImagePath) {
  let contactsHTML = "";

  for (let i = 0; i < element["contacts"].length; i++) {
    const contact = element["contacts"][i];
    contactsHTML += `
      <div class="cardUserSymbole" style="background-color: ${contact["color"]} !important;">
        ${contact["initial"]}
      </div>`;
  }

  return `
  <div class="taskCards" onclick="openCardContainer('${element["id"]}', '${priorityImagePath}')" draggable="true" ondragstart="startDragging(${element["id"]})">
    <div class="cardContent">
      <div class="cardHeader">
        <p class="userStory">${element["workCategory"]}</p>
        <img onclick="openSwitchCategory(event,${element["id"]})" id="switchCategoryBtn${element["id"]}" class="mobileDragSwitch" src="/assets/img/switchDirectionArrows.svg" alt="hier">
        <div class="switchContainer" id="switchContainer${element["id"]}" ></div>
      </div>
      <div class="cardDescription">
        <p class="cardDescriptionHeader">${element["title"]}</p>
        <p class="cardDescriptionInfo">
          ${element["description"]}
        </p>
      </div>
      <div class="cardSub">
        <div class="progress" role="progressbar" aria-label="Subtasks" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" id="subtaskProgressBar${element["id"]}" style="width: 0;"></div>
        </div>
        <p class="cardSubNumber"><span id="test${element["id"]}">0</span>/${element["subtasks"].length}</p>
      </div>
      <div class="cardAddUser">
        <div class="cardAddUsersIconsContain"><div class="cardAddUsersIcons">${contactsHTML}</div></div>
        <img src=${priorityImagePath} alt="Priority Symbol" />
      </div>
    </div>
  </div>`;

}


function generateTemplateHtmlSideMenu() {
  return `<div class="" id="menuContainerBox"onclick ="closeAddTaskMenu()" >
   <div id="sideMenu" class="sideMenuStyle" onclick="event.stopPropagation()" >
      <div class="header-sideMenu"><span>Add Task</span>
         <img onclick ="closeAddTaskMenu()" class="header-sideMenuImg" src="../assets/img/close.svg" alt="">
      </div>
      <div class="contentContainer-sideMenu mobileScroll" >
         <div class="addTask mobile addTask-sideMenu ">
            <div action="" class="widthOfAddTaskBoardBox">
               <div class="topSektion topSektion-sideMenu">
                  <div class="titleContainer"><input id="addTastTitel" class=" inputFieldTitleBoard inputFieldTitleBoardX sideMenu" type="" placeholder="Enter a title"></div>
                  <div id="tile-fail-message" class="tileFailMessage"></div>
                  <div class="description description-sideMenu">
                     <div class="descriptionContent">
                       <p class="descriptionText">Description
                       <p class="descriptionText small">(optional)</p>
                       </p>
                     </div>
                        <textarea  id="addTastTextArea" class="textArea textAreaBoard" placeholder="Enter a Description" name="" id="" cols="30" rows="10"></textarea>
                        <div id="description-fail-message" class="descriptionFailMessage"></div>   
                     </div>
                  <div class="dateContentMobileDate">
                     <p class="dateTitle">Due date</p>
                    
                    <input  class="inputfieldDateContainerBoard dateMobile" placeholder="tipe you date" type="date" id="dueDateValue" min="2018-01-01">
                     <div class="textfield-fail" id="date-fail-message"></div>
                  </div>
               </div>
               <div class="assignedContent assignedContent-sideMenu" >
                  <div class="assignedTitleContainer">
                     <p class="assignedTitle">Priority
                     <p class="assignedTitle small" >(optional)</p>
                     </p>
                  </div>
                  <div class="buttonContainer mobileButtonContainer"> 
                     <button id="low" onclick="getThePriority('low', 'low', 'medium', 'high')" class="prioButtonGreen sideMobileButtonG">Low<img id="lowPriority" class="buttonImg" src="../assets/img/prio_baja.svg" alt=""></button>
                     <button id="medium" onclick="getThePriority('medium', 'low', 'medium', 'high')" class="prioButtonYellow sideMobileButtonY">Medium<img id="mediumPriority" class="buttonImg" src="../assets/img/prio_media.svg" alt=""></button>
                     <button id="high" onclick="getThePriority('high', 'low', 'medium', 'high')" class="prioButtonRed sideMobileButtonR">Urgent<img id="urgentPriority" class="buttonImg" src="../assets/img/prio_alta.svg" alt=""></button>
                  </div>
               </div>
               <div class="assignedContent assignedContent-sideMenu" >
                  <div class="assignedTitleContainer">
                     <p class="assignedTitle">Assignet to
                     <p class="assignedTitle small" >(optional)</p>
                     </p>
                  </div>
                  <div id="assignedSelect" onclick="addContacts()"class="assignedSelect">
                     <div >Select contacts to assign</div>
                  </div>
               </div>
         	   <div id="addContactstoassign" class="addContactstoassign addContactstoassignBoard"></div>
               <div  id="selectContainer" class="selectContainerX mobileSide d-none"></div>
               <div class="assignedContent assignedContent-sideMenu" >
                  <div class="assignedTitleContainer">
                     <p class="assignedTitle">Category</p>
                  </div>
               <div id="categorySelect" onclick="showCategoryContacts()" class="assignedSelect">
                  <div id="SelectTaskCatergory">Select contacts to assign</div>
               </div>
            </div>
            <div id="categoryContainer" class="categoryContainer d-none">
               <div class="userBoxContainer">
                  <span class="userPosition" id="technicalTaskID" onclick="loadTechnicalTask()">Technical Task</span>
               </div>
               <div class="userBoxContainer">
                  <span class="userPosition" id="userStoryID" onclick="loadUserStory()">User Story</span>
               </div>
            </div>
            <div class="SubtaskContent mobileSideBoard" >
               <div class="assignedTitleContainer">
                  <p class="assignedTitle">Subtask
                  <p class="assignedTitle small" >(optional)</p>
                  </p>
               </div>
               <input id="subtaskInput" onclick="addSubTask()" placeholder="Add new subtask" class="subtaskInput mobileInput marginBo">
               <div class="subtaskContainerMobile" id="subtaskContainer"></div>
            </div>
            <div class="positionOfButtonsBoard mobileButtons">
               <button onclick="clearSideAddTask()" class="ClearBtn">Clear <img src="../assets/img/vector.svg" class="clearBtnImg"></button>
               <button onclick="createNewTaskFromBoard()" class="createTaskBtn" id="buttonCreateTask">Create Task <img src="../assets/img/check.svg"></button>
            </div>
         </div>
      </div>
               
           </div>
        </div>
      </div>
   </div>
</div>`;
}


function generateTemplateHtmlFirstCard(task, currentIndex, priorityText, priorityImagePath, element) {
  return `<div id="openCardContainer" onclick="closeCardContainer()"  class="openCardContainer" >
  <div class="openCardsDetails" onclick="event.stopPropagation()">
     <div class="openCardTitle"> 
      <div><span class="userDetailsTitle">${allTask[0][currentIndex]["workCategory"]}</span></div>
        <img class="userDetailsImg" onclick="closeCardContainer()" src="../assets/img/close.svg" alt="">
     </div>
     <div class="openCardDescription">
        <span class="openCardDescriptionText">${allTask[0][currentIndex]["title"]}</span>
     </div>
     <div class="openCardText"> 
        <span class="openCardSpanText">${allTask[0][currentIndex]["description"]}</span>
     </div>
     <div class="openCardDate">
        <span class="cardsCategoryText">Due date:</span>
        <span class="openCardSecondText" >${allTask[0][currentIndex]["date"]}</span>
     </div>
     <div class="openCardPrio">
        <span class="cardsCategoryText">Priority:</span>
        <span class="openCardSecondText" >${priorityText}  <img src=${priorityImagePath} alt="Priority Symbol" /> </span> 
     </div>
     <div class="openCardAssigned">
        <span class="cardsCategoryText">Assignet To:</span>
        <div id="usersDateContent" class="openCardAssignedAddUser" >
          
        </div>
     </div>
     <div class="openCardSubtask">
        <span class="cardsCategoryText" >Subtask</span>
     </div>
     <div class="openCardCheckbox">
     
     <div class="subtaskText">${renderSubtasks(element, allTask[0][currentIndex]["subtasks"])}</div>

     </div>
     <div class="openCardIcons">
     <div  class="openCardIconsImgContainer" onclick="deleteCard('${element}')">
           <img class="openCardIconsImg" src="../assets/img/delete.svg" alt=""> <span class="openCardIconsText">Delete</span>
        </div>
        <img class="openCardIconsImg" src="../assets/img/vector3.svg" alt="">
        <div onclick="openEditContainer(${[currentIndex]}),showAssignetContacts2(loggedInUser)" class="openCardIconsImgContainer" >
           <img   class="openCardIconsImg" src="../assets/img/edit.svg" alt=""> <span class="openCardIconsText">Edit</span>
        </div>
     </div>
  </div>
</div>
</div>`;
}


function generateTemplateHtmlEditCard(task, element, getId) {
  return `
  <div id="openEditContainer2" onclick="closeEditContainer2()"  class="openCardContainer" >
         <div onclick="event.stopPropagation()"  class="openCardsDetailsEdit">
            <div class="header-EditMenu">
               <img onclick ="closeEditContainer2()" class="header-editMenuImg" src="../assets/img/close.svg" alt="">
            </div>
            <div class="contentContainer-sideMenu" >
            <div class="addTask addTask-sideMenu editMenu">
            <div action="">
               <div class="topSektion topSektion-sideMenu">
                  <div class="titleContainer"><input id="addTastTitel2" class="inputFieldTitleBoard" type="" placeholder="${allTask[0][element]["title"]}"></div>
                  <div class="textfield-fail" id="tile-fail-message2"></div>
                  <div class="description">
                     <div class="descriptionContent">
                        <p class="descriptionText">Description
                        <p class="descriptionText small">(optional)</p>
                        </p>
                     </div>
                     <textarea class="textArea" placeholder="${allTask[0][element]["description"]}" name="" id="addTastTextArea2" cols="30"
                        rows="10"></textarea>
                  </div>
                  <div class="textfield-fail" id="description-fail-message2"></div>
                  <div class="dateContent editMobileDate">
                     <p class="dateTitle">Due date</p>

                     <input  class="inputfieldDateContainerBoard" placeholder="tipe you date" type="date" min="2018-01-01">

                     <div class="textfield-fail" id="date-fail-message2"></div>
                  </div>
               </div>
               <div class="assignedContentBoard" >
                  <div class="assignedTitleContainer">
                     <p class="assignedTitle">Priority
                     <p class="assignedTitle small" >(optional)</p>
                     </p>
                  </div>
                   <div class="buttonContainer editbuttonContainer"> 
                    <button id="low2" onclick="getThePriority2('low', 'low', 'medium', 'high')" class="prioButtonGreen prioButtonGreenEdit">Low<img id="lowPriority2" class="buttonImg" src="../assets/img/prio_baja.svg" alt=""></button>
                    <button id="medium2" onclick="getThePriority2('medium', 'low', 'medium', 'high')" class="prioButtonYellow prioButtonYellowEdit">Medium<img id="mediumPriority2" class="buttonImg" src="../assets/img/prio_media.svg" alt=""></button>
                    <button id="high2" onclick="getThePriority2('high', 'low', 'medium', 'high')" class="prioButtonRed prioButtonRedEdit">Urgent<img id="urgentPriority2" class="buttonImg" src="../assets/img/prio_alta.svg" alt=""></button>
                   </div>
               </div>
               <div class="assignedContentBoard" >
                  <div class="assignedTitleContainer">
                     <p class="assignedTitle">Assignet to
                     <p class="assignedTitle small" >(optional)</p>
                     </p>
                  </div>
                  <div id="assignedSelect2" onclick="addContacts2()"class="assignedSelect">
                     <div >Select contacts to assign</div>
                  </div>
               </div>
               <div id="addContactstoassign2" class="addContactstoassignBoard">
                <div id="renderContacts"></div>
               </div>
               <div  id="selectContainer2" class="selectContainerBoard d-none">
                  
               </div>
               <div class="assignedContentBoard" >
                  <div class="assignedTitleContainer">
                     <p class="assignedTitle">Category</p>
                  </div>
                  <div id="categorySelect2" onclick="showCategoryContacts2()" class="assignedSelect">
                     <div id="SelectTaskCatergory2">${allTask[0][element]["workCategory"]}</div>
                  </div>
               </div>
               <div id="categoryContainer2" class="categoryContainer d-none">
                  <div class="userBoxContainer">
                     <span class="userPosition" id="technicalTaskID2" onclick="loadTechnicalTask2()">Technical Task</span>
                  </div>
                  <div class="userBoxContainer">
                     <span class="userPosition" id="userStoryID2" onclick="loadUserStory2()">User Story</span>
                  </div>
               </div>
               <div class="SubtaskContentBoard" >
                  <div class="assignedTitleContainer">
                     <p class="assignedTitle">Subtask
                     <p class="assignedTitle small" >(optional)</p>
                     </p>
                  </div>
                  <input id="subtaskInput2" onclick="addSubTask2()" placeholder="Add new subtask" class="subtaskInput">
                  <div class="selectedSubrasksMobile" id="selectedSubrasks" style="margin-bottom: 0;"></div>
                  <div id="subtaskContainer2"></div>
               </div>
               <div class="buttonContainerEdit" > <button onclick="createNewTask2('${getId}')" class="displayFlex btnCreateContact" style="color: white;">Ok<img
               src="../assets/img/check.svg" class="samllIconsContactOK"></button></div>
         </div>
            </div>
            
         </div>
         
            </div>
            
      </div>`;
}


function generateTemplateHtmlUserDate(contact) {
  return `
      <div class="detaicardsUserContainer">
        <div class="cardUserSymbole detailVersion" style="background-color: ${contact["color"]} !important;">
          ${contact["initial"]}
        </div>
        <div>
          <span class="cardUserDetailVersion" > ${contact["name"]}</span> 
        </div>
      </div>`;
}


function generateTemplateHtmlCreateNewTask2(contactData, i, selectedContacts) {
  return `
        <div class="userBoxContainer displayFlex">
          <div class="imgPerson displayFlex" style="background-color: ${contactData[i].color};">${contactData[i].initial}</div>
          <span class="userPosition">${contactData[i].name}</span>
          <input type="checkbox" id="inputId${i}" ${selectedContacts.some(user => user.name === contactData[i].name) ? 'checked' : ''} onclick="handleCheckboxClick2('${i}', '${contactData[i].name}', '${contactData[i].initial}', '${contactData[i].color}')">
        </div>`;
}


function generateTemplateHtmlCreateNewTask22(selectedContacts, i) {
  return `
        <div class="userBoxContainer displayFlex">
          <div class="imgPerson displayFlex" style="background-color: ${selectedContacts[i].color};">${selectedContacts[i].initial}</div>
          <span class="userPosition">${selectedContacts[i].name}</span>
        </div>`;
}


function showAssignetContacts2Html(getColor, getInitial, userName, i, isChecked){
   return   /*html*/ `
   <div class="userBoxContainer displayFlex">
     <div class="imgPerson displayFlex" style="background-color: ${getColor};">${getInitial}</div>
     <span class="userPosition">${userName}</span>
     <input type="checkbox" id="inputId2${i}" ${isChecked ? 'checked' : ''} onclick="handleCheckboxClick2(${i}, '${userName}', '${getInitial}', '${getColor}', ${isChecked})">
   </div>`;
}


function rederCurrentTasksHtml(id, value){
   return /*html*/ `
      <div class="spaceBetween" id="BoardCurrenT${id}">
         <span class="subtaskList" id="${id}">${value}</span>
         <input type="text" class="subtaskEditWindow d-none" id="BoardSubtaskEditWindow${id}"> 
         <div class="positionOfImgsBySubtask" id="BoardEdit&deleteImgs${id}">
           <img src="../assets/img/edit.svg" onclick="BoardEditSubtask('${id}')" class="subtaskEditImg">|
           <img src="../assets/img/delete.svg" onclick="BoardDeleteSubtask('${id}')" class="subtaskDeleteImg">
         </div>
         <div class="positionOfImgsBySubtask d-none" id="BoardAgree&denyImgs${id}">
           <img src="../assets/img/check.svg" onclick="BoardEgreeEditSubtask('${id}')" class="agreeEditImg">|
           <img src="../assets/img/vector.svg" onclick="BoardRenderSubtasksByAddTask()" class="denyDeleteImg">
         </div>
      </div>`;
}