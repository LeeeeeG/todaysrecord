const tab=$('#tab li')
const content=$('#content > div');

tab.on('click', function(e){
    e.preventDefault();
    let tg=$(this);
    let ta=tg.find('a');
    tab.find('>a').removeClass('on');
    ta.addClass('on');

    let i=tg.index();
    
    content.css('display','none');
    content.eq(i).css('display','block');
});

let el=$('#content>div>img');
let urls=['https://www.naver.com/','https://www.daum.net/','https://www.google.com/','https://www.nate.com/'];

el.on({mouseover:function(){
    let tg=$(this);
    tg.addClass('on');
},mouseout:function(){
    let tg=$(this);
    tg.removeClass('on');
},click:function(){
    let tg=$(this);
    let i=tg.parent().index();
    let linkURL=urls[i];
    //location.href=linkURL;
    window.open(linkURL)
}})