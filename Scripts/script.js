$(function () {

    $("#main-carousel .owl-carousel").owlCarousel({
        nav: true,
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        navText: ["<i class= 'fa fa-angle-left'></i>", "<i class= 'fa fa-angle-right'></i>"]

    });

    $("#product-all .owl-carousel").owlCarousel({
        nav: true,
        items: 4,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        navText: ["<i class= 'fa fa-angle-left'></i>", "<i class= 'fa fa-angle-right text-sm-center'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            }
        }
    });

    $(".back-top").click(function () {
        $("html,body").animate({ scrollTop: $(".up-top").offset().top }, "3000");
        return false
    })

    function changeimageCarousel(e, x) {
        var src = x.attr("src");

        $("#big-img").attr("src", src);

        api1.swap(src, src);

        e.preventDefault();

    }

    $("#detail-image-list a img").hover(function (e) {
        changeimageCarousel(e, $(this));
    })

    $("#detail-image-list a img").click(function (e) {
        changeimageCarousel(e, $(this));
    })

    var $easyzoom = $('.easyzoom').easyZoom();

    var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');

});

