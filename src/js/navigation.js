/*
 * Component Loader and Navigation Manager
 *
 * Purpose: This script serves three main functions:
 * 1. Loads modular components (navigation, header, footer) dynamically into the webpage
 * 2. Ensures components are only loaded after the DOM is ready
 * 3. Highlights the current page in the navigation menu
 *
 * The script uses the Fetch API to load HTML components from separate files,
 * which allows for better code organization and maintenance. Each component
 * can be edited independently without changing the main HTML files.

KEY CONCEPTS:
Fetch API: This is a modern way to make HTTP requests (get data from servers).
It's like sending a messenger to get something and bring it back.
It uses "Promises" which are special objects that represent a future value.
Promise Chaining: The .then() methods chain together like a assembly line:

First .then() handles the response status
Second .then() handles the actual data
.catch() handles any errors that occur


Template Loading: Instead of having one huge HTML file, this code loads smaller pieces (components) and puts them together.
Think of it like building with Lego blocks instead of carving from one big stone.
Window Location: window.location.pathname gives us the current page's path in the URL.

To use this code in your website, you would need:

A main HTML file with elements that have the IDs: main-nav, main-header, and main-footer
Separate HTML files for your navigation, header, and footer in the /src/components/ directory
Navigation links with the class nav-link
 */

// Wait for the DOM (Document Object Model) to be fully loaded before executing any code
// This prevents errors that could occur if we try to modify elements that haven't loaded yet
document.addEventListener('DOMContentLoaded', function() {
    // Log confirmation that our script has started running
    console.log('DOM Content Loaded');

    // NAVIGATION COMPONENT LOADING
    // Use the Fetch API to get the navigation HTML file
    // fetch returns a Promise that resolves with the response
    fetch('/src/components/navigation.html')
        // First .then handles the initial response
        .then(response => {
            // Log the HTTP status code (200 means success)
            console.log('Navigation fetch response:', response.status);
            // Convert the response to text format
            return response.text();
        })
        // Second .then handles the actual HTML content
        .then(data => {
            console.log('Navigation data received');
            // Insert the navigation HTML into the element with id 'main-nav'
            document.getElementById('main-nav').innerHTML = data;
            // After navigation is loaded, highlight the current page
            highlightCurrentPage();
        })
        // Catch and log any errors that occur during the fetch
        .catch(error => {
            console.error('Error loading navigation:', error);
        });

    // HEADER COMPONENT LOADING
    // Similar process as navigation, but for the header component
    fetch('/src/components/header.html')
        .then(response => {
            console.log('Header fetch response:', response.status);
            return response.text();
        })
        .then(data => {
            // Insert header HTML into the element with id 'main-header'
            document.getElementById('main-header').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    // FOOTER COMPONENT LOADING
    // Similar process as navigation and header, but for the footer component
    fetch('/src/components/footer.html')
        .then(response => {
            console.log('Footer fetch response:', response.status);
            return response.text();
        })
        .then(data => {
            // Insert footer HTML into the element with id 'main-footer'
            document.getElementById('main-footer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});

// Function to highlight the current page in the navigation menu
function highlightCurrentPage() {
    // Get the current page's path from the browser's location
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);

    // Find all elements with the class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Found nav links:', navLinks.length);

    // Check each navigation link
    navLinks.forEach(link => {
        // Log the href attribute of each link for debugging
        console.log('Checking link:', link.getAttribute('href'));

        // If the link's href matches the current path
        if (link.getAttribute('href') === currentPath) {
            console.log('Found matching link:', link);
            // Add the 'active' class to highlight it
            link.classList.add('active');
        }
    });
}