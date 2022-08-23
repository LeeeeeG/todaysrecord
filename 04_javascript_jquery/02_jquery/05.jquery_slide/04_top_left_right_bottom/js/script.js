let banner=$('#wrap ul li');
let current=0;

setInterval(function(){
    let prev=banner.eq(current);
    move(prev, 0, "-100%");
    current++;
    if(current==banner.size()){current=0;}
    let next=banner.eq(current);
    move(next, '100%', 0)
},2000);

function move(tg, start, end){
    tg.css('top', start).stop().animate({top:end},{duration:500,ease:'easeOutCubic'})
}