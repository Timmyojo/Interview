const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.link');

hamburger.addEventListener('click', (e) => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
})

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    })
})