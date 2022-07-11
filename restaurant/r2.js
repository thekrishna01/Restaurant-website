$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });
    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');
        $('.gallery').magnificPopup({
            delegate:'a',
            type:'image',
            gallery:{
                enabled:true
            }
        });
    
    });
    
});

