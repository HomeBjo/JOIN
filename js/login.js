

function init() {
    renderLogInCard();
    getRememberedUser();
    showContentDuringAnimation();
    loadUsers();
}


function renderSignUpContent() {
    renderSignUpBody();
    renderSignUpCard();
}


function renderLogInContent() {
    renderLogInBody();
    renderLogInCard();
}


function renderSignUpBody() {
    let body = document.getElementById('body');
    let privacy = document.getElementById('privacy');
    let legal = document.getElementById('legal');
    let loader = document.getElementById('loader');
    let loginHeader = document.getElementById('login-header');
    let loginHeader2 = document.getElementById('login-header2');
    
    body.classList.add('bg-color');
    privacy.classList.add('w-color');
    legal.classList.add('w-color');
    loader.classList.add('bgimg1');
    loader.classList.remove('bgimg2');
    loginHeader.classList.add('d-none');
    loginHeader2.classList.add('d-none');
}


function renderSignUpCard() {
    let title = document.getElementById('title');
    let titleArrow = document.getElementById('arrow-left');
    let form = document.getElementById('form-div');
     
    title.innerHTML = 'Sign in'
    titleArrow.classList.remove('d-none');
    form.innerHTML = '';
    form.innerHTML = signUpFormTemplate();
}


function renderLogInBody() {
    let body = document.getElementById('body');
    let privacy = document.getElementById('privacy');
    let legal = document.getElementById('legal');
    let loader = document.getElementById('loader');
    let loginHeader = document.getElementById('login-header');
    let loginHeader2 = document.getElementById('login-header2');
    
    body.classList.remove('bg-color');
    privacy.classList.remove('w-color');
    legal.classList.remove('w-color');
    loader.classList.add('bgimg2');
    loader.classList.remove('bgimg1');
    loginHeader.classList.remove('d-none');
    loginHeader2.classList.remove('d-none');
}


function renderLogInCard() {
    let title = document.getElementById('title');
    let titleArrow = document.getElementById('arrow-left');
    let form = document.getElementById('form-div');

    title.innerHTML = 'Log in';
    titleArrow.classList.add('d-none');
    form.innerHTML = '';
    form.innerHTML = logInFormTemplate();
}


async function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailMessage = document.getElementById('email-fail');
    let passwordMessage = document.getElementById('login-fail');
    let checkbox = document.getElementById('form2Example31');
    let user = users.find(u => u.email == email.value);

    if (user) {
        if (user.password == password.value) {
            if (checkbox.checked) {
                await setItem('rememberMe', JSON.stringify(user));
                await setItem('loggedInUser', JSON.stringify(user));
                window.location.href = '../html/summary.html';
            } else {
                await setItem('rememberMe', JSON.stringify(null));
                await setItem('loggedInUser', JSON.stringify(user));
                window.location.href = '../html/summary.html';
                }
        } else {
            firstLoginElsePasrt(emailMessage, email, password, passwordMessage);
        }
    } else {
        secondLoginElsePasrt(passwordMessage, password, email, emailMessage);
    }
}


function firstLoginElsePasrt(emailMessage, email, password, passwordMessage){
    emailMessage.innerHTML = '';
    email.classList.remove('red-bg');
    password.classList.add('red-bg');
    passwordMessage.innerHTML = /*html*/ `<span>*Ups! wrong password</span>`;
}


function secondLoginElsePasrt(passwordMessage, password, email, emailMessage){
    passwordMessage.innerHTML = '';
    password.classList.remove('red-bg');
    email.classList.add('red-bg');
    emailMessage.innerHTML = /*html*/ `<span>*Ups! e-mail doesn't exist</span>`;
}


async function guestLogin() {
    let user = users[2];

    console.log(user);
    if(user) {
        await setItem('loggedInUser', JSON.stringify(user));
        window.location.href = '../html/summary.html';
    } 
}


async function getRememberedUser() {
    try {
        rememberedUser = JSON.parse(await getItem('rememberMe'));
        fillInputs(rememberedUser);
    } catch(e) {
        console.error('Loading error:', e);
    }
}


function fillInputs(rememberedUser) {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (rememberedUser !== null) {
        email.value = rememberedUser.email;
        password.value = rememberedUser.password;
    }
}


function showContentDuringAnimation() {
    setTimeout(function() {
        let elementsToDisplay = [
            document.getElementById('login-header'),
            document.getElementById('login-header2'),
            document.getElementById('login-card-div'),
            document.getElementById('login-footer')
        ];

        elementsToDisplay.forEach(function(element) {
            if (element) {
                element.classList.remove('d-none-js');
            }
        });
    }, 1300);
}