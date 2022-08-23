let moving=$('.area>ul')
let timer=null;

slide();
function slide(){
    timer=setInterval(function(){
        moving.animate({left:-210},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'))
            $(this).css('left',0)
        })
    },2000);
}

$('.box').on({mouseover:function(){
    clearInterval(timer)
},mouseout:function(){
    slide();
}})

$('.right').click(function(){
    moving.animate({left:-210},500,function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'))
        $(this).css('left',0)
    })
});
$('.left').click(function(){
    moving.find('li:last').insertBefore(moving.children('li:first'))
    moving.css({left:-210}).stop().animate({left:0},500)
});