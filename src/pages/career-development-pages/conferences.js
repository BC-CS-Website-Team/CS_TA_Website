
document.addEventListener('DOMContentLoaded', function() {
    const sidebarContainer = document.querySelector('#sidebar-container');

    // Get the current path to determine depth
    const path = window.location.pathname;
    const isSubDirectory = path.includes('pages/career-development-pages') || path.includes('/career-development-pages');

    // Adjust path based on whether we're in a subdirectory
    const sidebarPath = 'conferences-sidebar.html';


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