console.log('start of script');
var wrapper = document.querySelector('[data-wrapper]');
var hamburger = document.querySelector('[data-hamburger]');
var close_btn = document.querySelector('[data-close]');
var nav = document.querySelector('[data-nav]');
var handleToggle = function () {
    nav.classList.toggle('hide');
};
hamburger.addEventListener('click', handleToggle);
close_btn.addEventListener('click', handleToggle);
console.log('end of script');
