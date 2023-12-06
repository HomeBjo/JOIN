


async function initLegal() {
    await includeHTML();
    highlightTitle2('ln');
    loggedInUser = await getLoggedInUser();
    showProfileInitials(loggedInUser);
}


async function initPrivacy() {
    await includeHTML();
    highlightTitle2('pp');
    loggedInUser = await getLoggedInUser();
    showProfileInitials(loggedInUser);
}