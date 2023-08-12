const themeButton = document.getElementById("theme-icon");
themeButton.addEventListener("click", changeTheme);

/* Alternates between dark and light themes. */
function changeTheme() {
    let currentTheme = themeButton.classList.value;
    let currentThemeIcon = themeButton.children[0].children[0].classList;
    let otherTheme = currentTheme == "light-theme" ? "dark-theme" : "light-theme";
    let otherThemeIcon = currentThemeIcon[1] == "fa-moon" ? "fa-sun" : "fa-moon";
    let themeElements = document.querySelectorAll(`.${currentTheme}`);
    currentThemeIcon.remove(currentThemeIcon[1]);
    currentThemeIcon.add(otherThemeIcon);
    for (let i = 0; i < themeElements.length; i++) {
        themeElements[i].classList.remove(currentTheme);
        themeElements[i].classList.add(otherTheme);
    }
}