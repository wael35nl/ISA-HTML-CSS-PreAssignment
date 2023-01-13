const navList = document.getElementsByClassName('fa-list')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const navList1 = document.getElementsByClassName('fa-list')[1];
const navLinks1 = document.getElementsByClassName('nav-links')[1];

navList.addEventListener('click', () => {
    if (navLinks.style.display === 'none') {
        navLinks.style.display = 'flex'
    } else {
        navLinks.style.display = 'none'
    }
});

navList1.addEventListener('click', () => {
    if (navLinks1.style.display === 'none') {
        navLinks1.style.display = 'flex'
    } else {
        navLinks1.style.display = 'none'
    }
});