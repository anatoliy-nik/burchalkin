$(function(){

    $(document).on('click keydown', '.toggle-submenu', function(e) {
        if (e.type === 'keydown' && e.which !== 13 && e.which !== 32) return;

        e.preventDefault();
        const $btn = $(this);
        const $submenu = $btn.closest('.menu-list__item--submenu').find('.submenu-list');

        // Закрываем другие подменю
        $('.submenu-list.open').not($submenu).removeClass('open').siblings('div').find('.toggle-submenu').removeClass('open');

        // Toggle текущего
        $submenu.toggleClass('open');
        $btn.toggleClass('open');
    });

    $('.s-news .news-list').slick({
        arrows: true,
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
        autoplay: false
    });

    $('.s-reviews .reviews-list').slick({
        arrows: true,
        dots: true,
        infinite: false,
        autoplay: false
    });

    $('.office').slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: false
    });

    Fancybox.bind("[data-fancybox]", {
    // Your custom options
    });

    // модальное окно
    $('[data-modal]').on('click', function() {
      $($(this).data('modal')).modal();
      return false;
    });

});