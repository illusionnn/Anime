

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.main-nav');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let log = document.querySelector('.login');
let container = document.querySelector('.login-form-container');

log.onclick = () => {
    container.classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () => {
    container.classList.remove('active');
}

