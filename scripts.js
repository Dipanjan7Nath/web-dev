// Form validation for registration
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the form from submitting immediately

        const name = document.getElementById('name').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const vehicle = document.getElementById('vehicle').value.trim();

        // Simple validation checks
        if (!name || !contact) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!/^\d{10}$/.test(contact)) {
            alert('Please enter a valid 10-digit contact number.');
            return;
        }

        alert('Registration successful!');
        registerForm.reset(); // Clears the form fields
    });
});

// Simulate data loading for admin dashboard
function viewReports() {
    setTimeout(() => {
        alert('Monthly reports have been loaded.');
        // Logic to dynamically display reports can be added here
    }, 1000); // Simulates loading time
}

function monitorActivities() {
    setTimeout(() => {
        alert('System activities are now being monitored.');
        // Logic for activity monitoring can be added here
    }, 1000);
}

// Toggle navigation menu for better UX
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background-color: #ff69b4;
        color: white;
        border: none;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    `;

    document.body.appendChild(menuButton);

    const nav = document.querySelector('nav');
    menuButton.addEventListener('click', () => {
        nav.classList.toggle('visible');
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
    });
});

// Smooth scroll for better navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
