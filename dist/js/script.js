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

// scrolling
let lastScrollTop = 0;

document.addEventListener('scroll', function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        //scroll down
        hamburger.style.cssText = 'display: none';
    } else {
        //scroll up
        hamburger.style.cssText = 'position: fixed';
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false)