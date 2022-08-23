$('.sub').hide();
$('.title').click(function(){
    let subShow=$(this).next('.sub');
    $('.sub').slideUp();
    if(subShow.is(':visible')){
        subShow.slideUp();
    }else{
        subShow.slideDown();
    }
});