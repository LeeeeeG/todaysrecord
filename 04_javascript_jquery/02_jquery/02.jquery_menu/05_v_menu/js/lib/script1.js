$('.sub').hide();
$('.group .title').on('click focus',function(){
    $('.sub').slideUp(500);
    $(this).next('.sub').stop().slideDown(500);
});