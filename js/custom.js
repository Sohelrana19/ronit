$(document).ready(function() {

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: '.right',
        nextArrow: '.left',
        autoplaySpeed: 3000,
        speed: 1000,
    });



    new WOW().init()


    var html_body = $('html, body');
    $('.collapse a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    //back to top 
   
    var back2top = $(".back-to-top");
    var html_body = $('html, body');
    back2top.click(function(){
        html_body.animate({scrollTop:0},1500);
  })

  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 700){
        back2top.fadeIn(500);
    }
    else{
        back2top.fadeOut(500);
    }
}); 

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {

            $(".about-navbar").addClass("bg");
        } else {

            $(".about-navbar").removeClass("bg");
        }
    })

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 800) {

            $(".navbar").addClass("bg2");
        } else {

            $(".navbar").removeClass("bg2");
        }
    })

    $('.venobox').venobox(); 

});