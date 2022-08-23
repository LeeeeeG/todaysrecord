$(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown(300);
    },function(){
        $(this).find('ul').stop().slideUp(300);
    });
    $('nav>ul>li').focusin(function(){
        $(this).find('ul').stop().slideDown(300);
    });
    $('nav>ul>li ul li:last-child').focusout(function(){
        $(this).parent('ul').stop().slideUp(300);
    });
});