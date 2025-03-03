document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-custom');
    const toggler = document.querySelector('.navbar-toggler');

    toggler.addEventListener('click', function () {
        if (toggler.getAttribute('aria-expanded') === 'false') {
            navbar.classList.remove('open');
        } else {
            navbar.classList.add('open');
        }
    });
});