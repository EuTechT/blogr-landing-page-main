const btnMenu = window.document.querySelector('#btn-menu');
const navigation = window.document.querySelector('.navigation');
const menuIcon = window.document.querySelector('.menu-icon');
const navLinks = window.document.querySelectorAll('.navlink');

btnMenu.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation-active');

    menuIcon.src = changeIcon(menuIcon.getAttribute('src'));
});

function changeIcon(icon) {
    if(icon == './src/images/icon-hamburger.svg') {
        return './src/images/icon-close.svg';
    } else {
        return './src/images/icon-hamburger.svg';
    }
}

navLinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        const submenu = link.parentNode.querySelector('.submenu');

        submenu.classList.toggle('submenu-active');
    });
});