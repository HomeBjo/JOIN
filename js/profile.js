let loggedInUser;


/**
 * Initializes the user profile, includes HTML, and retrieves the logged-in user.
 */
async function initProfile() {
    await includeHTML();
    loggedInUser = await getLoggedInUser();
    showProfileInitials(loggedInUser);
}


/**
 * Retrieves the currently logged-in user from storage.
 */
async function getLoggedInUser() {
    const userData = await getItem('loggedInUser');
    return JSON.parse(userData);
}


/**
 * Greets the user by updating the displayed name.
 */
function greetUser(loggedInUser) {
    let name = document.getElementById('greet-name');
    name.textContent = loggedInUser.username;
}


/**
 * Displays the user's initials in the profile section.
 */
function showProfileInitials(loggedInUser) {
    let initials = document.getElementById('profile-initials');
    let initialsMobile = document.getElementById('profile-initials-mobile');
    
    if (loggedInUser && loggedInUser.username) {
        const username = loggedInUser.username;
        const words = username.split(' ');
        let initialsString = '';

        for (const word of words) {
            if (word.length > 0) {
                initialsString += word[0].toUpperCase();
            }
        }
        initials.textContent = initialsString;
        initialsMobile.textContent = initialsString;
    } else {
        initials.textContent = '';
        initialsMobile.textContent = '';
    }
}


/**
 * Toggles the visibility of the profile settings section.
 */
function toggleSettings() {
    let settings = document.getElementById('profile-settings');
    let profile = document.getElementById('initials-div')

    if (settings.classList.contains('d-none')) {
        settings.classList.remove('d-none');
        profile.classList.add('bg-colorchange');
    } else {
        settings.classList.add('d-none');
        profile.classList.remove('bg-colorchange');
    }
}


/**
 * Toggles the visibility of the mobile profile settings section.
 */
function toggleSettingsMobile() {
    let settingsMobile = document.getElementById('profile-settings-mobile');
    let profileMobile = document.getElementById('initials-div-mobile')

    if (settingsMobile.classList.contains('d-none')) {
        settingsMobile.classList.remove('d-none');
        profileMobile.classList.add('bg-colorchange');
    } else {
        settingsMobile.classList.add('d-none');
        profileMobile.classList.remove('bg-colorchange');
    }
}


/**
 * Redirects the user to the help page.
 */
function loadHelp() {
    window.location.href = '../html/help.html';
}


/**
 * Logs out the user by updating the logged-in user data and redirecting to the login page.
 */
async function logout() {
    try {
        window.location.href = '../html/login.html';
    } catch (error) {
        console.error('Error during logout:', error);
    }
}


/**
 * Navigates back to the previous page in the browsing history.
 */
function returnBack() {
    window.history.back();
}


/**
 * Highlights the title of the specified page.
 */
function highlightTitle(pageId) {
    let page = document.getElementById(pageId);

    page.classList.add('highlighted');
}


/**
 * Highlights the title of the specified page with a different style.
 */
function highlightTitle2(pageId) {
    let page = document.getElementById(pageId);

    page.classList.add('highlighted2');
}


/**
 * Highlights the title of the specified page in the mobile view.
 */
function highlightTitleMobile(pageId) {
    let page = document.getElementById(pageId);

    page.classList.add('highlighted-mobile');
}
