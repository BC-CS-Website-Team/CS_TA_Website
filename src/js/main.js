document.addEventListener('DOMContentLoaded', function() {
    // Add any global JavaScript functionality here
    console.log('Main script loaded');

    // Example: Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});