let slide=$('.slideUl>li'),
    pager=$('.pager>li>a'),
    prev=$('.prev'),
    next=$('.next'),
    current=0,
    timer=null;


slider();
function slider(){
    timer=setInterval(function(){
        let prev=slide.eq(current);
        let prevBtn=pager.eq(current);
        move(prev,0,'-100%');
        prevBtn.removeClass('active');
        
        current++;
        if(current===slide.size()) current=0;

        let next=slide.eq(current);
        let nextBtn=pager.eq(current);
        move(next,'100%',0);
        nextBtn.addClass('active')
    },2000);
}

function move(tg,start,end){
    tg.css('left',start).stop().animate({left:end},500)
}

$('.slide').hover(function(){
    clearInterval(timer);
},function(){
    slider();
})

next.click(function(){
    timer=setInterval(function(){
        let prev=slide.eq(current);
        let prevBtn=pager.eq(current);
        move(prev,0,'-100%');
        prevBtn.removeClass('active');
        
        current++;
        if(current===slide.size()) current=0;

        let next=slide.eq(current);
        let nextBtn=pager.eq(current);
        move(next,'100%',0);
        nextBtn.addClass('active');
    },2000);
})