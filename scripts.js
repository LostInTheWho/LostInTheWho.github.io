var headerOpen = false;

function toggleNav() {
    if (!headerOpen) {
        $('header').css('left', '0');
        $('.menu-icon').addClass('active');
        $('.nav-brand').addClass('active');
        $('html').css('overflow-y', 'hidden');

        headerOpen = true;
    } else {
        $('header').css('left', '-110vw');
        $('.menu-icon').removeClass('active');
        $('.nav-brand').removeClass('active');
        $('html').css('overflow-y', 'visible');

        headerOpen = false;
    }
}

function mobileLinks() {
    if (headerOpen) {
        $('header').css('left', '-110vw');
        $('.menu-icon').removeClass('active');
        $('.nav-brand').removeClass('active');
        $('html').css('overflow-y', 'visible');

        headerOpen = false;
    }
}