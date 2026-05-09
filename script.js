// Select DOM Elements
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let darkmodeIcon = document.querySelector('#darkmode-icon');

// Mobile Menu Toggle
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Dark Mode / Light Mode Toggle
darkmodeIcon.onclick = () => {
    // Check if the icon is currently a moon (meaning we are in light mode)
    if(darkmodeIcon.classList.contains('bx-moon')) {
        darkmodeIcon.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('dark-mode');
    } else {
        // Switch back to light mode
        darkmodeIcon.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('dark-mode');
    }
};

// Sticky Header & Active Link Highlighting on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Remove toggle icon and navbar when clicking a link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};