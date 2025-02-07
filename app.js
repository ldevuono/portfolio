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

// Get the current URL of the page
const currentUrl = window.location.href;

// Function to highlight the current page in the menu
function highlightCurrentPage() {
    menuItems.forEach(menuItem => {
        // Check if the href attribute contains the current URL
        if (menuItem.href === currentUrl || menuItem.href === currentUrl + '/') {
            menuItem.classList.add('current-page'); // Add a class to highlight the current page
        }
    });
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', highlightCurrentPage);




