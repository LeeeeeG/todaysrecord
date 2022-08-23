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
    let willMoveLeft;
    let willMoveTop;
    // if(index==0){
    //     willMoveLeft=-(index*600)
    //     willMoveTop=-(0*400)
    // }else if(index==1){
    //     willMoveLeft=-(index*600)
    //     willMoveTop=-(0*400)
    // }else if(index==2){
    //     willMoveLeft=-(index*600)
    //     willMoveTop=-(0*400)
    // }else if(index==3){
    //     willMoveLeft=-(0*600)
    //     willMoveTop=-(1*400)
    // }else if(index==4){
    //     willMoveLeft=-(1*600)
    //     willMoveTop=-(1*400)
    // }else{
    //     willMoveLeft=-(2*600)
    //     willMoveTop=-(1*400)
    // }

    willMoveLeft=-(index%3)*600
    willMoveTop=-Math.floor(index/3)*400

    $('.slider-pannel').animate({left:willMoveLeft,top:willMoveTop},500);
    $('.control-button[data-index='+ index +']').addClass('active');
    $('.control-button[data-index!='+ index +']').removeClass('active');
    $('.slider-text[data-index='+ index +']').show().animate({left:50},500);
    $('.slider-text[data-index!='+ index +']').hide().animate({left:-300},500);
}
let randomNum=Math.round(Math.random()*5)
moveSlider(randomNum);


let timer=null;
slide();
function slide(){
    timer=setInterval(function(){
        randomNum++;
        if(randomNum==$('.control-button').size()) randomNum=0;
        $('.control-button').eq(randomNum).trigger('click')
    },2000);
}

$('.slider-pannel').hover(function(){
    clearInterval(timer);
},function(){
    slide();
})