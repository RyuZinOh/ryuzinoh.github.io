document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        // Toggle the "active" class to show/hide the navigation menu
        navLinks.classList.toggle('active');
        // Toggle the animation of the hamburger icon
        navToggle.classList.toggle('active');
    });

    // Add an event listener to close the menu when a link is clicked
    const navLinksList = document.querySelectorAll('.nav-links li a');
    navLinksList.forEach(function (link) {
        link.addEventListener('click', function () {
            // Remove the "active" class to close the navigation menu
            navLinks.classList.remove('active');
            // Remove the "active" class to revert the hamburger icon
            navToggle.classList.remove('active');
        });
    });
});
