console.log('start of script');

const wrapper = document.querySelector('[data-wrapper]');
const hamburger = document.querySelector('[data-hamburger]');
const close_btn = document.querySelector('[data-close]');
const nav = document.querySelector('[data-nav]');

const handleToggle = () => {
    nav.classList.toggle('hide');
}

hamburger.addEventListener('click', handleToggle );
close_btn.addEventListener('click', handleToggle );




console.log('end of script');