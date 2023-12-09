let users = [];


/**
 * Generates a unique ID based on the current timestamp and a random letter.
 */
function generateUniqueId() {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  
    const uniqueId = `${timestamp}${randomLetter}`;
  
    return uniqueId;
}


/**
 * Initializes the registration process.
 */
async function initRegister() {
    register();
}


/**
 * Loads user data from storage.
 */
async function loadUsers() {
    try {
        users = JSON.parse(await getItem('users'));
    } catch(e) {
        console.error('Loading error:', e);
    }
}


/**
 * Handles user registration, performs validation, and updates the UI accordingly.
 */
async function register() {
    const [signUpButton, username, email, password, confirmPassword, wrongPwMessage, emailMessage] = getValuesOfRegister();

    const emailExists = users.some(user => user.email === email.value);

    if (!emailExists) {
        if (password.value == confirmPassword.value) {
            await secondIfPartOfRegister(signUpButton, username, email, password, confirmPassword, wrongPwMessage);
        } else {
            firstElsePartOfRegister(emailMessage, email, wrongPwMessage, password, confirmPassword);
        }
    } else {
        emailMessage.innerHTML = /* html */ `<span>*Ups! your email already exists</span>`;
        email.classList.add('red-bg');
    }
}


function getValuesOfRegister() {
    const signUpButton = document.getElementById('signup-button');
    const username = document.getElementById('user-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const wrongPwMessage = document.getElementById('pw-fail');
    const emailMessage = document.getElementById('email-fail');

    return [signUpButton, username, email, password, confirmPassword, wrongPwMessage, emailMessage];
}



/**
 * Handles the case when the entered passwords do not match during registration.
 */
async function secondIfPartOfRegister(signUpButton, username, email, password, confirmPassword, wrongPwMessage){
    signUpButton.disabled = true;
    pushUserInfo(username, email, password);
    await setItem('users', JSON.stringify(users));
    resetForm(signUpButton, username, email, password, confirmPassword);
    wrongPwMessage.innerHTML = '';
    password.classList.remove('red-bg');
    confirmPassword.classList.remove('red-bg');
    
    await signUpSuccessAnimation();
    renderLogInContent();
}


/**
 * Handles the successful completion of the registration process and triggers the animation.
 */
function firstElsePartOfRegister(emailMessage, email, wrongPwMessage, password, confirmPassword){
    emailMessage.innerHTML = '';
    email.classList.remove('red-bg');
    wrongPwMessage.innerHTML = /* html */ `<span>*Ups! your passowrd don't match</span>`;
    password.classList.add('red-bg');
    confirmPassword.classList.add('red-bg');
}


/**
 * Adds user information to the users array.
 */
function pushUserInfo(username, email, password, contacts) {
    const UNIQUE_ID = generateUniqueId();

    users.push({
        id: UNIQUE_ID,
        username: username.value,
        email: email.value,
        password: password.value,
        contacts: []
    });
}


/**
 * Resets the registration form after successful registration.
 */
function resetForm(signUpButton, username, email, password, confirmPassword) {
    username.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
    signUpButton.disabled = false;
}


/**
 * Performs the success animation after a successful registration.
 */
async function signUpSuccessAnimation() {
    const successMessage = document.getElementById('successMessage');
    const overlay = document.getElementById('overlay');

    successMessage.classList.remove('d-none');
    overlay.classList.remove('d-none');
    await new Promise(resolve => setTimeout(resolve, 2000));
    successMessage.classList.add('d-none');
    overlay.classList.add('d-none');
}


/**
 * Changes the image source and cursor style based on the password input length.
 */
function changeImage() {
    let passwordInput = document.getElementById('password');
    let passwordImage = document.getElementById('pw-img');

    if (passwordInput.value.length >= 1) {
        passwordImage.src = '../assets/img/eye_closed.png';
        passwordImage.classList.add('cursor-pointer');
    } else {
        passwordImage.src = '../assets/img/lock.svg';
        passwordImage.classList.remove('cursor-pointer');
    }
}


/**
 * Changes the image source and cursor style based on the confirm password input length.
 */
function changeImage2() {
    let passwordInput = document.getElementById('confirm-password');
    let passwordImage = document.getElementById('cpw-img');

    if (passwordInput.value.length >= 1) {
        passwordImage.src = '../assets/img/eye_closed.png';
        passwordImage.classList.add('cursor-pointer');  
    } else {
        passwordImage.src = '../assets/img/lock.svg';
        passwordImage.classList.remove('cursor-pointer');
    }
}


/**
 * Toggles the visibility of the password input and updates the eye icon accordingly.
 */
function toggleVisibility() {
    let passwordInput = document.getElementById('password');
    let passwordImage = document.getElementById('pw-img');

    if (passwordInput.value.length >= 1) {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
            passwordImage.src = '../assets/img/eye_open.png';
        } else {
            passwordInput.type = 'password';
            passwordImage.src = '../assets/img/eye_closed.png';
        }
    }
}


/**
 * Toggles the visibility of the confirm password input and updates the eye icon accordingly.
 */
function toggleVisibility2() {
    let passwordInput = document.getElementById('confirm-password');
    let passwordImage = document.getElementById('cpw-img');

    if (passwordInput.value.length >= 1) {
        if (passwordInput.type == 'password') {
            passwordInput.type = 'text';
            passwordImage.src = '../assets/img/eye_open.png';
        } else {
            passwordInput.type = 'password';
            passwordImage.src = '../assets/img/eye_closed.png';
        }
    }
}