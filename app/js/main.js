$(function() {
    $('.products__slider').slick({
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        }, {
            breakpoint: 300,
            settings: "unslick"
        }]
    });
});