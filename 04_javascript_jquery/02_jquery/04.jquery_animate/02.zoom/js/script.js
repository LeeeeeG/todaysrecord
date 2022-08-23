let base=100;
let mybody=$('body');
$('#zoom a').on('click',function(){
    let zNum=$('#zoom a').index(this)
    if(zNum==0){
        base+=10;
    }else if(zNum==0){
        base=100;
    }else{
        base-=10;
    }
    mybody.css('overflow-y','auto').css('transform','scale('+base/100+')').css('transform-origin','50% 0').css('zoom',base+'%');
    return false;
})