document.addEventListener('DOMContentLoaded', function() {
    // Select the element where you want to insert the sidebar
    const sidebarContainer = document.querySelector('#sidebar-container');

    // Get the current path to determine depth
    const path = window.location.pathname;
    const isSubDirectory = path.includes('/creative-space-committee/') || path.includes('/diversity-in-stem-committee/') || path.includes('/tech-ethics/') || path.includes('/career-development-pages-committee/');

    // Adjust path based on whether we're in a subdirectory
    const sidebarPath = isSubDirectory ? '../committees-sidebar.html' : 'committees-sidebar.html';

    // Fetch the sidebar content
    fetch(sidebarPath)
        .then(response => response.text())
        .then(data => {
            sidebarContainer.innerHTML = data;

            // Add active class to current page
            const currentPage = path.split('/').pop();
            const links = sidebarContainer.getElementsByTagName('a');

            for (let link of links) {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        })
        .catch(error => console.error('Error loading sidebar:', error));
});