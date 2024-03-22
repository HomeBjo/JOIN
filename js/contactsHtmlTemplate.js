function removeClassesByNewContacts(){
    document.getElementById('addBox').classList.remove('backgoundBox');
    document.getElementById('boxOfAddingNewContact').classList.remove('showSideWindow');
    document.getElementById('boxOfDetailsContacts').innerHTML ='';
}


function generateContactInSmallHtml(firstLetter){
    return /*html*/`
        <div class="positionLetterContact">
            <p class="letterContact" id="letterContact">${firstLetter}</p>
        </div>
        <div class="positionLineContact">
            <p class="lineContact"></p>
        </div>`;
}


function generateContactInSmallHtml2(name, email, phone, initial, color, i){
    return /*html*/`
    <div class="sizeOfContactBox displayFlex" id="addBackgroung${i}" onclick="showDetailsOfContact('${name}', '${email}', '${phone}', '${initial}', '${color}', '${i}')">
        <div class="whiteBackground displayFlex" >
            <div>
                <div id="renderFirstLetter" style="background-color: ${color};">
                <p class="imgOfContackt">${initial}</p>
                </div>
            </div>
        </div>
        <div>
            <p style="margin: 6px;">${name}</p>
            <p class="styleMail" id="changeStyleEMail${i}">${email}</p>
        </div>
    </div>`;
}

function showDetailsOfContactHtml(color, initial, newName, newEmail, newPhone){
    return /*html*/ `
    <div>
        <span class="contactInformationResponcive d-none">Contact Information</span>
        <div class="positionHeaderContactDetails">
            <img src="../assets/img/arrow-left-line.svg" class="arrow-left d-none" onclick="returnArrow()">
            <div class="bigImgContactsBackground">
                <div id="randomBackgroundColor" class="bigImgContacts" style="background-color: ${color};">
                    <p class="sizeOfLetterDetails">${initial}</p>
                </div>
            </div>
            <div class="contactName">
                <span class="nameHeaderContactDetails">${newName}</span>
                <div class="positionEditAndDelete" id="toHideByResponsive">
                    <button onclick="editContact('${newName}','${newEmail}','${newPhone}', '${initial}', '${color}')" class="displayFlex clearBtn"><img src="../assets/img/edit.svg"
                            style="margin-right: 8px;">Edit</button>
                    <button onclick="deleteContact('${newName}','${newEmail}','${newPhone}', '${initial}', '${color}')" class="displayFlex clearBtn"><img
                            src="../assets/img/delete.svg" style="margin-right: 8px">Delete</button>
                </div>
            </div>
        </div>
        <div>
            <p class="contantInformation">Contact Information</p>
            <p class="fontWeight">Email</p>
            <a href="mailto:${newEmail}" target="_blank" class="mailContact">${newEmail}</a>
            <p class="fontWeight">Phone</p>
            <p>${newPhone}</p>
        </div>
        <img src="../assets/img/more_vert.svg" id="moreVertButtonId" class="moreVertImg" onclick="loadMoreVert()">
    </div>`;
}


function removeClassesByShowDetailsOfContact(i){
    document.getElementById(`addBackgroung${i}`).classList.remove('sizeOfContactBoxOnclick');
    document.getElementById(`changeStyleEMail${i}`).classList.remove('changeStyleMail');
}


function addNewContactBtnHtml(){
    return /*html*/`
    <div class="blueBoxAddContact">
    <img src="../assets/img/capa1.svg" class="imgBlueBox">
        <h1 class="h1AddContact">Add Contact</h1>
        <p class="pAddContact">Tasks are better with a team!</p>
    </div>
    <img src="../assets/img/closeInWhite.svg" class="closeAddContactBox" onclick="closeAddContactBoxWithX()">
    <div class="witheBoxAddContact">
        <form class="detailsOFAddContact" onsubmit="createNewContact(); return false;">
            <img src="../assets/img/frame79.svg" class="witheBoxAddContactImg">
            <div class="displayFlex">
                <input type="text" class="inputField" placeholder="Name" minlength="2"  id="nameAddContact" required >
                <img src="../assets/img/person.svg" class="imgInInput">
            </div>
            <div class="displayFlex">
                <input type="email" class="inputField" placeholder="Email" id="emailAddContact" required>
                <img src="../assets/img/mail.svg" class="imgInInput">
            </div>
            <div class="displayFlex">
                <input type="tel" class="inputField" placeholder="Phone" pattern="[0-9]+" min="4" id="phoneAddContact" required>
                <img src="../assets/img/call.svg" class="imgInInput">
            </div>
            <div class="btnsAddContact">
            <button class="displayFlex btnCloseContact" onclick="closeAddContactWindow()" type="button">Close <img
                    src="../assets/img/vector.svg" class="samllIconsContactX"></button>
            <button class="displayFlex btnCreateContact" type="submit">Create contact
                <img src="../assets/img/check.svg" class="samllIconsContactOK"></button>
            </div>
        </form>  
    </div>`;
}


function loadMoreVertHtml(newName, newEmail, newPhone, initial, color){
    return /*html*/`
        <div class="styleResponsiveEdit">
            <button onclick="editContact('${newName}','${newEmail}','${newPhone}', '${initial}', '${color}')" class="flexSstart clearBtn marginLeft">
            <img src="../assets/img/edit.svg" style="margin-right: 8px;">Edit</button>
            <button onclick="deleteContact('${newName}','${newEmail}','${newPhone}', '${initial}', '${color}')" class="flexSstart clearBtn marginLeft">
            <img src="../assets/img/delete.svg" style="margin-right: 8px">Delete</button>
        </div>`;
}


function editContactHtml(color, initial, newName, newEmail, newPhone){
    return /*html*/`
    <div class="blueBoxEditContact">
        <img src="../assets/img/capa1.svg" class="imgBlueBox">
        <h1 class="h1EditContact">Edit Contact</h1>
    </div>
    <img src="../assets/img/closeInWhite.svg" class="closeEditContactBox" onclick="closeEditContactBox()">
    <div class="witheBoxAddContact">
        <div class="detailsOFAddContact">
            <div class="backgroundEditContactImg">
                <div class="witheBoxAddContactImgIn" style="background-color: ${color};">
                    <p class="sizeOfLetterDetails">${initial}</p>
                </div>
            </div>    
            <div class="displayFlex">
                <input type="text" class="inputField" placeholder="Name" pattern="[a-zA-Z ]+" id="nameEditContact" required>
                <img src="../assets/img/person.svg" class="imgInInput">
            </div>
            <div class="displayFlex">
                <input type="text" class="inputField" placeholder="Email" id="emailEditContact">
                <img src="../assets/img/mail.svg" class="imgInInput">
            </div>
            <div class="displayFlex">
                <input type="tel" class="inputField" placeholder="Phone" pattern="[0-9]+" min="4" id="phoneEditContact" required>
                <img src="../assets/img/call.svg" class="imgInInput">
            </div>
            <div class="btnsAddContact">
                <button class="displayFlex btnCloseContact" onclick="deleteContact('${newName}','${newEmail}','${newPhone}','${initial}')">Delete</button>
                <button class="displayFlex btnCreateContact" onclick="saveEditContactWindow('${newName}','${newEmail}','${newPhone}','${color}')">Save <img
                        src="../assets/img/check.svg" class="samllIconsContactOK"></button>
            </div>
        </div>
    </div>`;
}


function changeClassesAfterDelete(){
    document.getElementById('boxOfDetailsContacts').innerHTML = '';
    document.getElementById('boxOfEdingContact').classList.remove('showSideWindow');
    document.getElementById('addBox').classList.remove('backgoundBox');
    document.getElementById('boxOfDetailsContacts').classList.add('d-none');
}


function removeClassesAfterEdit(){
    document.getElementById('boxOfDetailsContacts').classList.add('d-none');
    document.getElementById('addBox').classList.remove('backgoundBox');
    document.getElementById('boxOfEdingContact').classList.add('d-none');
}