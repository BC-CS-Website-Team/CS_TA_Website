document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    // Load navigation
    fetch('/src/components/navigation.html')
        .then(response => {
            console.log('Navigation fetch response:', response.status);
            return response.text();
        })
        .then(data => {
            console.log('Navigation data received');
            document.getElementById('main-nav').innerHTML = data;
            highlightCurrentPage();
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });

    // Load header
    fetch('/src/components/header.html')
        .then(response => {
            console.log('Header fetch response:', response.status);
            return response.text();
        })
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    // Load footer
    fetch('/src/components/footer.html')
        .then(response => {
            console.log('Footer fetch response:', response.status);
            return response.text();
        })
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Found nav links:', navLinks.length);
    navLinks.forEach(link => {
        console.log('Checking link:', link.getAttribute('href'));
        if (link.getAttribute('href') === currentPath) {
            console.log('Found matching link:', link);
            link.classList.add('active');
        }
    });
}