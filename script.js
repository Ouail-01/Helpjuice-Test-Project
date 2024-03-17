var menuIcon = document.getElementById('menuIcon');
var closeIcon = document.getElementById('closeIcon');
var mobile = document.getElementById('mobile');
var navMenu = document.getElementById('navMenu');
var login = document.getElementById('login');

menuIcon.addEventListener('click', function () {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    mobile.classList.remove('hidden');
    navMenu.style.display = 'block';
    login.style.display = 'flex';
});

closeIcon.addEventListener('click', function () {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    mobile.classList.add('hidden');
    navMenu.style.display = 'none';
    login.style.display = 'none';
});