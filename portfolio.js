// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message){
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    }
});

// Add animation to skills list
const skillsList = document.getElementById('skills-list');
skillsList.addEventListener('mouseover', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.style.transform = 'scale(1.1)';
    }
});

skillsList.addEventListener('mouseout', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.style.transform = 'scale(1)';
    }
});
