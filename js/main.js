// Smooth scrolling is handled by CSS, but you can add more interactivity here

// Example: Highlight active navigation link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Example: Form validation or other features can be added here
console.log('Portfolio page loaded successfully!');
