$(function(){

    // бургер кнопка и меню
    // $('.burger-btn').on('click', function() {
    //     $('.menu__list').toggleClass('menu__list--active');
    //     $('.burger-btn').toggleClass('burger-btn--active');
    // });

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