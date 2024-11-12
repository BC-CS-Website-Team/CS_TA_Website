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

    const dropdowns = document.querySelectorAll('.dropdown-toggle');

    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function() {
        // Toggle active class for the arrow rotation
        this.classList.toggle('active');
        // Toggle the visibility of the dropdown content with CSS
        const content = this.nextElementSibling;
        content.classList.toggle('active');
      });
    });
});

