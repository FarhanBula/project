$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('scroll-navbar');
        $('.logo h1').addClass('scroll-logo');
        $('li').addClass('scroll-navlink');
    }else{
        $('header').removeClass('scroll-navbar');
        $('.logo h1').removeClass('scroll-logo');
        $('li').removeClass('scroll-navlink');
    }
})