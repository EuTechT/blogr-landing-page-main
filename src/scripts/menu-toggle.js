const btnMenu = window.document.querySelector('#btn-menu');
const navigation = window.document.querySelector('.navigation');
const menuIcon = window.document.querySelector('.menu-icon');
const navlinkMenu = window.document.querySelectorAll('.navlink-menu');

btnMenu.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation--active');

    menuIcon.src = changeIcon(menuIcon.getAttribute('src'));
});

function changeIcon(icon) {
    if(icon == './src/images/icon-hamburger.svg') {
        return './src/images/icon-close.svg';
    } else {
        return './src/images/icon-hamburger.svg';
    }
}

navlinkMenu.forEach((link, index, arrayLinks) => {
    link.addEventListener('click', (event) => {
        const submenus = window.document.querySelectorAll('.submenu');
        const imgsLinks = window.document.querySelectorAll('.img-link');

        submenus[index].classList.toggle('submenu--active');
        link.classList.toggle('navlink-menu--active');
        imgsLinks[index].classList.toggle('img-link--active');

        for(let i = 0; i < arrayLinks.length; i++){
            if(event.target != arrayLinks[i] && submenus[i].className == 'submenu submenu--active') {
                submenus[i].classList.remove('submenu--active');
                arrayLinks[i].classList.remove('navlink-menu--active');
                imgsLinks[i].classList.remove('img-link--active');
            }
        }
    });
});