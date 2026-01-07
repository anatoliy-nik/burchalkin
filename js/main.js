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

    // нужно инициализировать до Slick, чтобы можно было удалить клоны из Fancybox
    Fancybox.bind("[data-fancybox]", {
    // Your custom options
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

    // чтобы Fancybox не дублировал клонированные слайды (фото), 
    // нужно удалить data-fancybox у клонов сразу после инициализации Slick
    $('.office').on('init', function() {
    $('.slick-cloned [data-fancybox]').removeAttr('data-fancybox');
    }).slick({
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: false,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                centerMode: true,
                arrows: false
                // slidesToShow: 1,
                // variableWidth: false,
                // если не указать, не будет работать 1 слайд
            }
            }
        ]
    });

    // модальное окно
    $('[data-modal]').on('click', function() {
      $($(this).data('modal')).modal();
      return false;
    });

});