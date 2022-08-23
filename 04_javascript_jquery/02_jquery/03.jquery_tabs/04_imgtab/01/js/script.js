$('.thumbs a').click(function(){
    let path=$(this).attr('href');
    $('#largeImg > img').attr({src:path});
    $('#largeImg > img').css('opacity',0).stop().animate({opacity:1},1000)
    return false;
});