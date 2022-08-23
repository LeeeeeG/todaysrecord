$('#caption').remove();

$('.thumbs a').click(function(e){
    e.preventDefault();
    $('#caption').remove();
    let path=$(this).attr("href");
    $('#largeImg > img').attr({src:path});
    let msg=$(this).next('em').text();

    $('#largeImg').append("<div id='caption'></div>");
    $('#largeImg #caption').text(msg);
    let posy=$('#largeImg #caption').innerHeight();
    $('#largeImg #caption').animate({top:-posy+'px'},300)
});