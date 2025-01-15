/*
 * Component Loader and Navigation Manager
 *
 * Purpose: This script serves main functions:
 * 1. Loads modular components (navigation, header, footer) dynamically into the webpage
 * 2. Ensures components are only loaded after the DOM is ready
 * 3. Highlights the current page in the navigation menu
 * 4. Manages dropdown menu functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Log confirmation that our script has started running
    console.log('DOM Content Loaded');

    // NAVIGATION COMPONENT LOADING
    fetch('/src/components/navigation.html')
        .then(response => {
            console.log('Navigation fetch response:', response.status);
            return response.text();
        })
        .then(data => {
            console.log('Navigation data received');
            const mainNav = document.getElementById('main-nav');
            if (mainNav) {
                const parser = new DOMParser();
                const navDoc = parser.parseFromString(data, 'text/html');
                const navContent = navDoc.querySelector('#main-nav');
                if (navContent) {
                    mainNav.innerHTML = navContent.innerHTML;
                    // Remove loading class after content is loaded
                    setTimeout(() => {
                        mainNav.classList.remove('loading');
                    }, 100);
                }
            }
            // After navigation is loaded:
            highlightCurrentPage();
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
            // Remove loading class even on error to prevent eternal loading state
            const mainNav = document.getElementById('main-nav');
            if (mainNav) {
                mainNav.classList.remove('loading');
            }
        });

    // HEADER COMPONENT LOADING
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

    // FOOTER COMPONENT LOADING
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

// Function to highlight the current page in the navigation menu
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);

    // Find all navigation links (including dropdown links)
    const allNavLinks = document.querySelectorAll('.nav-link, .dropdown-content a');
    console.log('Found nav links:', allNavLinks.length);

    allNavLinks.forEach(link => {
        console.log('Checking link:', link.getAttribute('href'));

        if (link.getAttribute('href') === currentPath) {
            console.log('Found matching link:', link);
            link.classList.add('active');

            // If the matching link is in a dropdown, also highlight the parent
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('.nav-link');
                parentLink.classList.add('active');
            }
        }
    });
}