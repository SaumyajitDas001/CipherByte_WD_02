// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check Local Storage for Theme Preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = "Dark Mode";
}

// Toggle Theme on Click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = "Dark Mode";
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = "Light Mode";
        localStorage.setItem('theme', 'dark');
    }
});

// Check Local Storage for Theme Preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = "Dark Mode";
}

// Toggle Theme on Click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = "Dark Mode";
        localStorage.setItem('theme', 'light');
    } else {
        themeToggle.textContent = "Light Mode";
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Interactive Hover Effect for Projects
const projects = document.querySelectorAll('.project-card');

projects.forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'scale(1.1)';
        project.style.transition = '0.3s ease-in-out';
    });

    project.addEventListener('mouseout', () => {
        project.style.transform = 'scale(1)';
    });
});
