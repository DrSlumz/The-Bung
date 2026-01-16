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

const kollabBtnMobile = document.getElementById('kollabMobile');
const kollabboxMobile = document.getElementById('kollabboxMobile');

const toggleKollabMobile = (e) => {
    e.preventDefault();

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

const hover1 = document.getElementById('hoverproduct1');
const backside = document.getElementById('productalt1');

const productHover = () => {
    if (backside.classList.contains('hidden')) {
        backside.classList.remove('hidden');
        backside.classList.add('flex');
    } else {
        backside.classList.add('hidden');
        backside.classList.remove('flex');
    }
};
hover1.addEventListener('mouseover', productHover);
hover1.addEventListener('mouseout', productHover);

const hover2 = document.getElementById('hoverproduct2');
const backside2 = document.getElementById('productalt2');

const productHover2 = () => {
    if (backside2.classList.contains('hidden')) {
        backside2.classList.remove('hidden');
        backside2.classList.add('flex');
    } else {
        backside2.classList.add('hidden');
        backside2.classList.remove('flex');
    }
};
hover2.addEventListener('mouseover', productHover2);
hover2.addEventListener('mouseout', productHover2);

const hover3 = document.getElementById('hoverproduct3');
const backside3 = document.getElementById('productalt3');

const productHover3 = () => {
    if (backside3.classList.contains('hidden')) {
        backside3.classList.remove('hidden');
        backside3.classList.add('flex');
    } else {
        backside3.classList.add('hidden');
        backside3.classList.remove('flex');
    }
};
hover3.addEventListener('mouseover', productHover3);
hover3.addEventListener('mouseout', productHover3);

const hover4 = document.getElementById('hoverproduct4');
const backside4 = document.getElementById('productalt4');

const productHover4 = () => {
    if (backside4.classList.contains('hidden')) {
        backside4.classList.remove('hidden');
        backside4.classList.add('flex');
    } else {
        backside4.classList.add('hidden');
        backside4.classList.remove('flex');
    }
};
hover4.addEventListener('mouseover', productHover4);
hover4.addEventListener('mouseout', productHover4);

const emailInput = document.getElementById('email');
const successBox = document.getElementById('successbox');
const subButton = document.getElementById('subbutton');
const emailWrong = document.getElementById('emailwrong');
const closeButton = document.getElementById('close');

const validateEmail = () => {
    const emailTypeValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailInput.value.match(emailTypeValid)) {
        emailWrong.innerHTML = 'Wrong One Punk';
        emailInput.classList.add('emailValidate');
        return false;
    } else {
        emailInput.classList.remove('emailValidate');
        return true;
    }
};

const openMassage = () => {
    if (validateEmail()) {
        successBox.classList.remove('hidden');
        successBox.classList.add('flex');
        emailWrong.innerHTML = '';
        emailInput.value = '';
    }
};

subButton.addEventListener('click', openMassage);

const closeSeccess = () => {
    if (successBox.classList.contains('flex')) {
        successBox.classList.remove('flex');
        successBox.classList.add('hidden');
    }
};
closeButton.addEventListener('click', closeSeccess);
