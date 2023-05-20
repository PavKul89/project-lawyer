const btnOpen = document.querySelector('.mobile-menu-btn');
const btnClose = document.querySelector('.mobile-menu-close');
const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');
const desktopDropDownBtn = document.querySelectorAll('.nav-icon');
const desktopDropdownMenu = document.querySelectorAll('.dropdown-menu');

btnClose.style.display = 'none';

btnOpen.addEventListener('click', () => {
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';
    mobileDropdownMenu.style.top = '60%';
} )

btnClose.addEventListener('click', () => {
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
    mobileDropdownMenu.style.top = '-300%';
} )