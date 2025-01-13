

        // Add click event listeners to dropdown toggles
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const dropdownBox = toggle.parentElement;
                dropdownBox.classList.toggle('active');
            });
        });