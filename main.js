// Navigation toggle for small screens
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle && navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// IntersectionObserver for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      // animate skill bars
      if(entry.target.querySelectorAll){
        const bars = entry.target.querySelectorAll('.bar-fill');
        bars.forEach(b => {
          const val = b.getAttribute('data-fill') || '0';
          b.style.width = val + '%';
        });
      }
    }
  });
},{threshold: 0.15});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth active link toggling
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if(pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  links.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#'+current){
      link.classList.add('active');
    }
  });
});
