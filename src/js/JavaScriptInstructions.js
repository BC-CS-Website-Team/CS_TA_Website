// FETCH API EXAMPLE
// Basic fetch request
fetch('https://api.example.com/data')
    .then(response => response.json())    // Convert response to JSON
    .then(data => console.log(data))      // Use the data
    .catch(error => console.error(error)); // Handle any errors

// PROMISE CHAINING EXAMPLE
// Let's simulate a more complex operation with multiple steps
function getUserData() {
    fetch('/api/user')
        .then(response => {
            // First .then - Check if the response is okay
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(userData => {
            // Second .then - Process user data
            console.log('User data:', userData);
            return fetch(`/api/posts/${userData.id}`);
        })
        .then(response => response.json())
        .then(userPosts => {
            // Third .then - Handle user's posts
            console.log('User posts:', userPosts);
        })
        .catch(error => {
            // Catch any errors from any of the above steps
            console.error('Error:', error);
        });
}

// TEMPLATE LOADING EXAMPLE
// Here's how we might load and combine multiple templates
function loadTemplate(templatePath) {
    return fetch(templatePath)
        .then(response => response.text());
}

// Load multiple templates and combine them
Promise.all([
    loadTemplate('/templates/header.html'),
    loadTemplate('/templates/content.html'),
    loadTemplate('/templates/footer.html')
])
.then(([header, content, footer]) => {
    document.body.innerHTML = `
        <div class="header">${header}</div>
        <div class="content">${content}</div>
        <div class="footer">${footer}</div>
    `;
});

// WINDOW LOCATION EXAMPLE
// Here's how to work with window.location
function handleNavigation() {
    // Get current path
    const currentPath = window.location.pathname;

    // Get different parts of the URL
    console.log({
        fullUrl: window.location.href,      // "https://example.com/page?id=123#section"
        path: window.location.pathname,     // "/page"
        query: window.location.search,      // "?id=123"
        hash: window.location.hash,         // "#section"
        origin: window.location.origin      // "https://example.com"
    });

    // Example of checking current page
    if (currentPath === '/about.html') {
        console.log('User is on About page');
    }
}

// PUTTING IT ALL TOGETHER
// Example of a complete page structure
document.addEventListener('DOMContentLoaded', function() {
    // HTML structure needed in your main page:
    /*
    <!DOCTYPE html>
    <html>
    <body>
        <div id="main-header"></div>
        <div id="main-nav"></div>
        <div id="content">
            <!-- Page specific content -->
        </div>
        <div id="main-footer"></div>
    </body>
    </html>
    */

    // Example navigation link structure:
    /*
    <nav>
        <a href="/home.html" class="nav-link">Home</a>
        <a href="/about.html" class="nav-link">About</a>
        <a href="/contact.html" class="nav-link">Contact</a>
    </nav>
    */
});