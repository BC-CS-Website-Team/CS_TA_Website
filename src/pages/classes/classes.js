document.addEventListener('DOMContentLoaded', function() {
    // Select the element where you want to insert the sidebar
    const sidebarContainer = document.querySelector('#sidebar-container');

    // Fetch the sidebar content
    fetch('classes-sidebar.html')
        .then(response => response.text())
        .then(data => {
            sidebarContainer.innerHTML = data;

            // Add active class to current page
            const currentPage = window.location.pathname.split('/').pop();
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