document.addEventListener('DOMContentLoaded', function() {
    // Determine the correct path based on the current page
    const path = window.location.pathname;
    const isHomePage = path === "/" || path.endsWith("index.html");
    const componentPath = isHomePage ? 'src/components/' : '../../src/components/';

    // Load navigation
    fetch(componentPath + 'navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-nav').innerHTML = data;
            adjustNavLinks();
            highlightCurrentPage();
        })
        .catch(error => console.error('Error loading navigation:', error));
});

function adjustNavLinks() {
    const isHomePage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (!isHomePage) {
            if (link.getAttribute('href') === "/") {
                link.setAttribute('href', "../../index.html");
            } else if (link.getAttribute('href').startsWith("/src/pages/")) {
                link.setAttribute('href', link.getAttribute('href').replace("/src/pages/", ""));
            }
        }
    });
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if ((currentPath === "/" || currentPath.endsWith("index.html")) && (link.getAttribute('href') === "/" || link.getAttribute('href').endsWith("index.html"))) {
            link.classList.add('active');
        } else if (currentPath.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
}
