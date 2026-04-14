const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
// Toggle the navigation menu on click for when using the phone version of the website
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');l
}