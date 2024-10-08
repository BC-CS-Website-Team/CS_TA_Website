document.addEventListener('DOMContentLoaded', function() {
    // Load navigation
    fetch('/src/components/navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-nav').innerHTML = data;
            highlightCurrentPage();
        });

    // Load header
    fetch('/src/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-header').innerHTML = data;
        });

    // Load footer
    fetch('/src/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-footer').innerHTML = data;
        });
});

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}