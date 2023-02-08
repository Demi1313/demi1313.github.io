
const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('activ');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('activ');
});
const percents = document.querySelectorAll('.skills__item__grid__percent'),
lines = document.querySelectorAll('.skills__item__scale__load');

percents.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});