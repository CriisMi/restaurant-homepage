import {initialPage} from './initial-page.js';
import {menuPage} from './menu-page.js';
import {contactPage} from './contact-page.js';
import {navBar} from './nav-bar.js';
import './style.css';

navBar();
initialPage();

const removeContent = () => {
    const content = document.querySelector('.main');
    content.textContent = '';
}

const home = document.querySelector('.home-tab');
home.addEventListener("click", () => {
    removeContent();
    initialPage();
})

const menu = document.querySelector('.menu-tab');
menu.addEventListener("click", () => {
    removeContent();
    menuPage();
})

const contact = document.querySelector('.contact-tab');
contact.addEventListener("click", () => {
    removeContent();
    contactPage();
})