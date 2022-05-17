
//      BACKGROUND COVER TRANSITION

var images = ['../img/bg10.jpg','../img/bg9.jpg','../img/bg8.jpg','../img/bg7.jpg','../img/bg6.jpg','../img/bg5.jpg','../img/bg4.jpg','../img/bg2.jpg','../img/bg3.jpg','../img/opcapa1.jpg'];
    index = 0;
    maxImages = images.length - 1;
    var timer = setInterval(function() {
        var curImage = images[index];
        index = (index == maxImages) ? 0 : ++index;
         $('.filme-principal').fadeOut(300,function(){
           $(this).css({'background': 'linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('+curImage+')'}).fadeIn();
           $(this).css({'background-size': 'cover'}).fadeIn();
         });
     }, 8000);

     // CAROUSEL MECHANICS

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    
    nav:true,
    autoplay: true,
    transition: '0.4s',
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
    if (e.originalEvent.deltaY>0) {
        $('.owl-carousel').trigger('next.owl');
    } else {
        $('.owl-carousel').trigger('prev.owl');
    }
    e.preventDefault();
});

