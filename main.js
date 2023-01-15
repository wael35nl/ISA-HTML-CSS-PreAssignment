import { navList, navLinks, navList1, navLinks1 } from "./elements.js";

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