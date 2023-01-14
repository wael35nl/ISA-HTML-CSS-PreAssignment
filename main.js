const navList = document.getElementsByClassName('fa-list')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const navList1 = document.getElementsByClassName('fa-list')[1];
const navLinks1 = document.getElementsByClassName('nav-links')[1];

navList.addEventListener('click', () => {
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none'
    } else {
        navLinks.style.display = 'flex'
    }
});

navList1.addEventListener('click', () => {
    if (navLinks1.style.display === 'flex') {
        navLinks1.style.display = 'none'
    } else {
        navLinks1.style.display = 'flex'
    }
});