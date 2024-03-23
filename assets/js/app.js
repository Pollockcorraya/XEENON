$(document).ready(function(){
    // Counter up 
    $('.counter').counterUp({
        delay: 50,
        time: 1000
    });


    // Lightbox
    $('.img-popup').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });
    $('.testimonial-slide').slick({
        prevArrow:false,
        nextArrow:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:3000,
    });





})