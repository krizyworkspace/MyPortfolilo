// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const typeWriter = document.getElementById('typewriter-text');
  const text = 'Web Developer | 2 Year Experience'; // Replace with your desired hero text
  typeWriter.textContent = text;
  typeWriter.style.setProperty('--characters', text.length);
});

// Scroll animation for slide-left and slide-right
const slideElements = document.querySelectorAll('.slide-left, .slide-right');
function revealSlides() {
  slideElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSlides);
revealSlides();

// Contact form basic validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
});
