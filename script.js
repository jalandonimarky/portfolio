// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for section animations
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });


 // scripts.js

// Initialize EmailJS
emailjs.init("S39pqqrElUokZJbtT");

// Form submit event listener
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the email
    emailjs.sendForm('service_8jv9rdd', 'template_qzyhtiz', this)
        .then(function(response) {
            alert('Message sent successfully!');
            // Clear the form
            document.querySelector('form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});

function toggleSkill(card) {
    card.classList.toggle('active');
}

// JavaScript for playing sound on hover
const hoverSound = document.getElementById('hoverSound');

// Function to play sound
function playHoverSound() {
    hoverSound.currentTime = 0; // Reset sound to start
    hoverSound.play();
}

// Add event listeners to skill cards
document.querySelectorAll('.skill-card').forEach(item => {
    item.addEventListener('mouseover', playHoverSound);
});
