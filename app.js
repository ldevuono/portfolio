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

const sun = document.querySelector(".fa-sun")
const moon = document.querySelector(".fa-moon");
const wolf = document.querySelector(".wolf");
const cat = document.querySelector(".cat");

lightSwitch.addEventListener("click", (e) => {
    body.classList.toggle("darkMode");
    if (body.classList.contains("darkMode")) {
        sun.style.display = "block";
        moon.style.display = "none";
        cat.style.display = "block";
        wolf.style.display = "none";
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
        wolf.style.display = "block";
        cat.style.display = "none";
    }
}
)



