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
        autoplay: false,
        responsive: [
            {
            breakpoint: 540,
            settings: {
                // slidesToShow: 3,
                // slidesToScroll: 3,
                // infinite: true,
                // dots: true
                arrows: false
                }
            }
        ]
    });

    // модальное окно для формы связи
    $('[data-modal]').on('click', function() {
      $($(this).data('modal')).modal();
      return false;
    });

    // слайдер фото офиса
    new Splide('#office-slider', {
        type: 'slide',      // ← не 'loop'!
        rewind: true,       // ← включает "возврат к началу"
        perPage: 6, // Перебивает стили!
        // focus: 0, // чтобы в dots было разбиение по слайдам (по дефолту - по странице)
        perMove: 1, 
        // drag: 'free',
        gap: 24, // подогнать и прописать именно здесь, а не в стилях. Перебивает стили!
        pagination: false,
        speed: 500, // по дефолту 400
        rewindSpeed: 500,
        breakpoints: {
            1399: {
                perPage: 5,
            },
            1199: {
                perPage: 4,
            },
            991: {
                perPage: 3,
            },
            767: {
                perPage: 2,
            },
            539: {
                gap: 12,
                pagination: true,
                arrows: false,
                grid: { rows: 2, cols: 1, gap: {row: 12} },
                perPage: 2,
                perMove: 1,
            }
        }
    }).mount(window.splide.Extensions);
    
    // всплывашка для фото офиса 
    Fancybox.bind("[data-fancybox]", {
    // Your custom options
    });

});