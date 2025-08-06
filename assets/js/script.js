const headerMenuToggle = document.querySelector('.header-menu-toggle');
const headerMenus = document.querySelector('.header-menus');
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header-menus li a');

headerMenuToggle.addEventListener('click', () => {
    headerMenus.classList.toggle('active');
});

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let activeLink = document.querySelector(`.header-menus li a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    })
}

ScrollReveal({
    reset: true,
    delay: 300,
    distance: '60px',
    duration: 1500
});

ScrollReveal().reveal('.section-title');
ScrollReveal().reveal('.section-desc', {
    delay: 600,
    duration: 2500
});

ScrollReveal().reveal('.section-home-title');
ScrollReveal().reveal('.section-home-img',{
    origin: 'right'
});

ScrollReveal().reveal('.section-home-buttons', {
    delay: 600
});

ScrollReveal().reveal('.section-menu-card', {
    interval: 300
});

ScrollReveal().reveal('.section-about-image', {
    delay: 900,
    origin: 'left'
});

ScrollReveal().reveal('.section-about-stat', {
    delay: 1200,
    interval: 300
});

ScrollReveal().reveal('.section-about .primary-button', {
    duration: 3000,
    delay: 1200
});

ScrollReveal().reveal('.section-services-card', {
    delay: 1200,
    interval: 300,
});

ScrollReveal().reveal('.section-contact-info-item', {
    delay: 1200,
    interval: 300,
});

ScrollReveal().reveal('.section-contact-form', {
    delay: 1800,
    duration: 3000
});