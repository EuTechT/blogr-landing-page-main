const btnMenu = window.document.querySelector('#btn-menu');
const navigation = window.document.querySelector('.navigation');
const menuIcon = window.document.querySelector('.menu-icon');
//const navLinks = window.document.querySelectorAll('.navlink');
//const listItems = window.document.querySelectorAll('.list-item');
const navlinkMenu = window.document.querySelectorAll('.navlink-menu');

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

/*navLinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        const submenu = link.parentNode.querySelector('.submenu');

        submenu.classList.toggle('submenu-active');
    });
});*/

/*listItems.forEach((list, i) => {
    const parent = list.parentNode;
    
    if(parent.className == 'menu') {
        list.addEventListener('click', (e) => {
            const submenu = list.querySelector('.submenu');

            submenu.classList.toggle('submenu-active');
        });
    }
});*/

navlinkMenu.forEach((link, i) => {
    link.addEventListener('click', (e) => {
        const submenus = window.document.querySelectorAll('.submenu');

        submenus[i].classList.toggle('submenu-active');

        if(e.target == navlinkMenu[0]) {
            submenus[1].classList.remove('submenu-active');
            submenus[2].classList.remove('submenu-active');
        } else if (e.target == navlinkMenu[1]) {
            submenus[0].classList.remove('submenu-active');
            submenus[2].classList.remove('submenu-active');
        } else {
            submenus[0].classList.remove('submenu-active');
            submenus[1].classList.remove('submenu-active');
        }

    });
});