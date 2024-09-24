document.addEventListener('DOMContentLoaded', function() {
    // Determine the correct path based on the current page
    const path = window.location.pathname;
    const isHomePage = path === "/" || path.endsWith("index.html");
    const componentPath = isHomePage ? 'src/components/' : '../../src/components/';

    // Function to load component
    function loadComponent(id, file) {
        fetch(componentPath + file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(id).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${file}:`, error));
    }

    // Load header
    loadComponent('main-header', 'header.html');

    // Load footer
    loadComponent('main-footer', 'footer.html');
});
