$(function(){
    const menu=$('.nav li');
    menu.hover(function(){
        let tg=$(this);
        let onImg=tg.find('.menu-txt > .on');
        let offImg=tg.find('.menu-txt > .off');
        let menuImg=tg.find('.menu-img');
        let imgHeight=menuImg.find('img').height();
        console.log(imgHeight)
        
        onImg.css('display','block');
        offImg.css('display','none');
        menuImg.stop().animate({
            height:imgHeight
        },600)
    },function(){
        let tg=$(this);
        let onImg=tg.find('.menu-txt > .on');
        let offImg=tg.find('.menu-txt > .off');
        let menuImg=tg.find('.menu-img');
        let imgHeight=0;
        console.log(imgHeight)
        
        onImg.css('display','none');
        offImg.css('display','block');
        menuImg.stop().animate({
            height:imgHeight
        },600)
    })
})