let banner=$('#wrap ul li');
let current=0;

setInterval(function(){
    let prev=banner.eq(current);
    move(prev,0,'-100%');
    
},2000)



function move(tg,start,end){
    tg.css('right',start).stop().animate({right:end},500)
}