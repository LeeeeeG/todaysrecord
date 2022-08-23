setInterval(function(){
    $('.top').css('left','-100%').animate({left:0},500);
    $('.bottom').css('left','100%').animate({left:0},500);
    $('.right').css('bottom','100%').animate({bottom:0},500);
    $('.left').css('top','100%').animate({top:0},500);
    $('.word').css('opacity','0').animate({opacity:1},500)
},2000)