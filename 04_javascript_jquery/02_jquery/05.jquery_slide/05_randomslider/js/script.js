let pannelWidth=$('.slider-pannel>img').width();
$('.slider-text').css('left',-300).each(function(index){
    $(this).attr('data-index',index)
});
$('.control-pannel>.control-button').each(function(index){
    $(this).attr('data-index',index)
}).click(function(){
    let index=$(this).attr('data-index')
    moveSlider(index)
});

function moveSlider(index){
    let willMoveLeft=-(index*pannelWidth);
    $('.slider-pannel').animate({left:willMoveLeft},500);
    $('.control-button[data-index='+ index +']').addClass('active');
    $('.control-button[data-index!='+ index +']').removeClass('active');
    $('.slider-text[data-index='+ index +']').show().animate({left:50},500);
    $('.slider-text[data-index!='+ index +']').hide().animate({left:-300},500);
}
let randomNum=Math.round(Math.random()*4)
moveSlider(randomNum);