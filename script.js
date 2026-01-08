const kollabBtn = document.getElementById('kollab');
const arrow = document.getElementById('kollabarrow');
const kollabbox = document.getElementById('kollabbox');

const toggleMenu = () => {
    arrow.classList.toggle('rotate');
    if (kollabbox.classList.contains('hidden')) {
        kollabbox.classList.remove('hidden');
        kollabbox.classList.add('flex');
    } else {
        kollabbox.classList.add('hidden');
        kollabbox.classList.remove('flex');
    }
};
kollabBtn.addEventListener('click', toggleMenu);

const menu = document.getElementById('navmobile');
const hamburg = document.getElementById('hamberger');

const toggleMenuHam = () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
};
hamburg.addEventListener('click', toggleMenuHam);

const kollabBtnMobile = document.getElementById('kollabarrow-mobile');
const kollabboxMobile = document.getElementById('kollabboxMobile');

const toggleKollabMobile = () => {
    if (menu.classList.contains('flex')) {
        menu.classList.remove('flex');
        menu.classList.add('hidden');
    } else {
        menu.classList.add('flex');
        menu.classList.remove('hidden');
    }

    if (kollabboxMobile.classList.contains('hidden')) {
        kollabboxMobile.classList.remove('hidden');
        kollabboxMobile.classList.add('flex');
    } else {
        kollabboxMobile.classList.add('hidden');
        kollabboxMobile.classList.remove('flex');
    }
};
kollabBtnMobile.addEventListener('click', toggleKollabMobile);

const backFromKollabToMenu = document.getElementById('kollabarrowback');

const toggleBackToMenu = () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    }
    if (kollabboxMobile.classList.contains('hidden')) {
        kollabboxMobile.classList.remove('hidden');
        kollabboxMobile.classList.add('flex');
    } else {
        kollabboxMobile.classList.add('hidden');
        kollabboxMobile.classList.remove('flex');
    }
};
backFromKollabToMenu.addEventListener('click', toggleBackToMenu);
