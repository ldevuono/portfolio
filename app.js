// hamburger menu tutorial here: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

// hamburger menu
// create variables for each element
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

// function to toggle hamburger menu on click
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

// hide the menu when the user clicks on a nav item
menuItems.forEach(
    function (menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)


// dark mode
const body = document.querySelector("body");
const lightSwitch = document.querySelector(".lightSwitch")

const wolf = document.querySelector(".wolf");
const cat = document.querySelector(".cat");
const imageBox = document.querySelector(".introImg")
console.log(imageBox)

lightSwitch.addEventListener("click", (e) => {
    body.classList.toggle("darkMode");
})

// if (body.classList.contains("darkMode")) {
//     imageBox.appendChild(".cat")
// } else {
//     imageBox.remove(".cat");
// }