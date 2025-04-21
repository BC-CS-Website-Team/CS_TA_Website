/*
 * Main Navigation and Interaction Script
 * 
 * Purpose: This script handles two main features for the website:
 * 1. Smooth scrolling: When users click on links that point to page sections (like '#about'),
 *    the page smoothly scrolls to that section instead of jumping instantly
 * 2. Dropdown menus: Manages interactive dropdown menus by showing/hiding content and
 *    rotating arrow indicators when users click on dropdown toggles
 * 
 * The script waits for the DOM (Document Object Model) to fully load before running,
 * which ensures all elements are available for manipulation.

KEY CONCEPTS:
Event Listeners: These are like setting up a security camera that watches for specific actions.
addEventListener lets you say "when X happens, do Y". In this code, we use them to watch for:

The DOM loading (DOMContentLoaded)
Clicks on links (click)


Arrow Functions: The => syntax (like in anchor =>) is a shorter way to write functions.
It's equivalent to writing function(anchor) { }.
querySelector/querySelectorAll: These are methods to find elements on the page:

querySelector finds the first matching element
querySelectorAll finds all matching elements
They use CSS selector syntax (like .class or #id)


classList: This is how we add/remove CSS classes from elements.
The toggle method adds the class if it's not there and removes it if it is.
 */



// This event listener waits for the DOM to be fully loaded before running any code
// It's like saying "don't start until the whole page is ready"
document.addEventListener('DOMContentLoaded', function() {
    // Log a message to the browser's console to confirm the script is running
    // This is helpful for debugging - you can see it in browser developer tools
    console.log('Main script loaded');

    // SMOOTH SCROLLING SECTION
    // Find all links that start with # (these are links to page sections)
    // querySelectorAll returns a list of all matching elements
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // For each anchor link, add a click event listener
        // This runs whenever someone clicks the link
        anchor.addEventListener('click', function (e) {
            // Prevent the default jump-to-section behavior
            e.preventDefault();
            
            // Get the target element that this link points to
            // this.getAttribute('href') gets the href value (like '#about')
            // querySelector then finds that element on the page
            // scrollIntoView smoothly scrolls to show that element
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'  // Makes the scroll animation smooth instead of instant
            });
        });
    });

    // DROPDOWN MENU SECTION
    // Find all elements with the 'dropdown-toggle' class
    const dropdowns = document.querySelectorAll('.dropdown-toggle');

    // Add click handlers to each dropdown toggle button
    dropdowns.forEach(dropdown => {
        // When a dropdown toggle is clicked...
        dropdown.addEventListener('click', function() {
            // Toggle the 'active' class on the clicked button
            // This class might rotate an arrow icon or change the button's appearance
            const dropdownContent = this.nextElementSibling;
            // Find the dropdown content (it's the next element after the button)
            // and toggle its 'active' class to show/hide it
            if (dropdownContent) {
                // Toggle the active class on both the toggle and the content
                this.classList.toggle('active');
                dropdownContent.classList.toggle('active');
            }
        });
    });
});