// var visi= true;
// $('.cont_tit').click(function(){
//     if( visi==true){
//         $('.cont_navi').css({height:230});
//         visi= false;
//     }else{
//         $('.cont_navi').css({height:0});
//         visi= true;
//     }
// });

// 메뉴
$('.tit .btn').click(function(){
    $('.cont_navi').slideToggle();
    $(this).toggleClass('on');
});

$('.pop3').click(function(){
    $('.pop').fadeIn();
});

$('.pop-btn').click(function(){
    $('.pop').fadeOut();
});

// 탭
var $tab_list=$('.tab_menu');

$tab_list.find('ul ul').hide();
$tab_list.find('li.active>ul').show();

function tabMenu(e){
    e.preventDefault();
    var eThis=$(this);
    eThis.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}

$tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu)

// 슬라이드 이미지
var imgs=$('.slide_img> ul> li');
var playbtn=$('.gb_icon1');
var pausebtn=$('.gb_icon2');
var prevbtn=$('.gb_icon3');
var nextbtn=$('.gb_icon4');
var current=0;
var setIntervalId=null;

timer();
function timer(){
    setIntervalId=setInterval(function(){
        var prev=imgs.eq(current);
        move(prev, 0, '-100%');
        current++;
        if(current==5){
            current=0;
        }
        var next=imgs.eq(current);
        move(next, '100%', 0)
    },2000)
} 
function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end},500)
}

playbtn.click(function(e){
    e.preventDefault();
    timer();
})
pausebtn.click(function(e){
    e.preventDefault();
    clearInterval(setIntervalId)
})
nextbtn.hover(function(){
    clearInterval(setIntervalId)
},function(){
    timer();
})
prevbtn.hover(function(){
    clearInterval(setIntervalId)
},function(){
    timer();
})
nextbtn.click(function(e){
    e.preventDefault();
    var prev=imgs.eq(current);
        move(prev, 0, '-100%');
        current++;
        if(current==5){
            current=0;
        }
        var next=imgs.eq(current);
        move(next, '100%', 0)
})
prevbtn.click(function(e){
    e.preventDefault();
    var prev=imgs.eq(current);
    move(prev, 0, '100%');
    current--;
    if(current==-5){
        current=0;
    }
    var next=imgs.eq(current);
    move(next, '-100%', 0)
})

//배너
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});