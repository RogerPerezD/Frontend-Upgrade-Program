'use strict'

const mobileMenu = document.querySelector('#mobile-cta');
const mobileMenuExit = document.querySelector('#mobile-exit');
const navbar = document.querySelector('nav');

const handleOpenMenu = () =>{
    navbar.classList.add('menu-btn');
}

const handleCloseMenu = () => {
    navbar.classList.remove('menu-btn');
}

mobileMenu.addEventListener('click', handleOpenMenu);

mobileMenuExit.addEventListener('click', handleCloseMenu);