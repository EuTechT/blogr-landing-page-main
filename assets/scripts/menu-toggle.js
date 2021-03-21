const btnMenu = window.document.querySelector('#btn-menu');
const navigation = window.document.querySelector('.navigation');
/*const navlinkMenu = window.document.querySelectorAll('.navlink-menu');*/

btnMenu.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation--active');
    btnMenu.classList.toggle('btn-menu--active');
});

/*navlinkMenu.forEach((link, index, arrayLinks) => {
    link.addEventListener('click', (event) => {
        const submenus = window.document.querySelectorAll('.submenu');
        const imgsLinksDarks = window.document.querySelectorAll('.img-link-dark');
        const imgsLinksLights = window.document.querySelectorAll('.img-link-light');

        submenus[index].classList.toggle('submenu--active');
        link.classList.toggle('navlink-menu--active');
        imgsLinksDarks[index].classList.toggle('img-link--active');
        imgsLinksLights[index].classList.toggle('img-link--active');

        for(let i = 0; i < arrayLinks.length; i++){
            if(event.target != arrayLinks[i] && submenus[i].className == 'submenu submenu--active') {
                submenus[i].classList.remove('submenu--active');
                arrayLinks[i].classList.remove('navlink-menu--active');
                imgsLinksDarks[i].classList.remove('img-link--active');
                imgsLinksLights[i].classList.remove('img-link--active');
            }
        }
    });
});*/

window.onresize = function() {
    closeNavigation();
};

function closeNavigation() {
    if(window.innerWidth > 1024 && navigation.className == 'navigation navigation--active') {
        navigation.classList.remove('navigation--active');
        /*btnMenu.classList.remove('btn-menu--active');*/
    }
}