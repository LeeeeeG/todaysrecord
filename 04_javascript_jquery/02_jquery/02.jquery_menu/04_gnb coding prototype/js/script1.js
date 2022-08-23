$(function(){
    /* $('nav>ul').hover(function(){
        $(this).addClass("active");
    },function(){
        $(this).removeClass("active");
    }); */
    $('nav>ul').hover(function(){
        $(this).animate({height:200},300);
    },function(){
        $(this).animate({height:40},300);
    });
    $('nav>ul>li').focusin(function(){
        $(this).animate({height:200},300);
    });
    $('nav>ul>li ul li:last-child').focusout(function(){
        $(this).animate({height:40},300);
    });
});