$(function(){
   $("nav").hover(function(){
    $(this).children('ul').addClass('active');
    $(this).next('.sub-shadow').addClass('active');
   },function(){
    $(this).children('ul').removeClass('active');
    $(this).next('.sub-shadow').removeClass('active');
   });
});