// sidebar menu

const hamburger = document.querySelector('.hamburger__menu');
const sidebar = document.querySelector('.sidebar');

hamburger.addEventListener('click', function() {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        hamburger.classList.remove('open');

    } else if (!sidebar.classList.contains('open')) {
        sidebar.classList.add('open');
        hamburger.classList.add('open');
    }
})