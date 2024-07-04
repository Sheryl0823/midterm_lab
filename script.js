// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    navbar.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            // Example: Log the clicked link text
            console.log('Clicked:', event.target.textContent);
        }
    });
});
