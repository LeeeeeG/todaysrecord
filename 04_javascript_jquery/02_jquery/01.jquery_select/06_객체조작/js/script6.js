//sec1
$('.btn1').on("mouseover focus", function(){
    $('.on').text('이벤트 두개');
}); //focus:탭키로 포커스가 올라갈 때, 웹접근성을 위함
$('.btn1').on({"mouseout blur":function(){
    $('.on').text('원래대로');
}});
$('.btn2').on({"mouseover":function(){
    $('.btnOn').css('background','yellow')
},"focus":function(){
    $('.btnOn').text('아니지롱')
},"mouseout":function(){
    $('.btnOn').css('background','white')
},"blur":function(){
    $('.btnOn').text('그룹메서드')
}});

//sec2
$('.btn3').click(function(){
    $('.btn3').parent().next().css('color','red')
});
$('.btn4').on({'mouseover focus':function(){
    $('.btn4').parent().next().css('color','blue')
}})
$('.btn3').off('click'); //.off('동작')동작을 끈다
$('.btn4').trigger('mouseover') //.trigger('동작')동작을 강제로 실행한다

//sec3
$(document).ready(function(){
    let heightImg=$('.img1').height();
    console.log("ready:", heightImg)
})

$(window).load(function(){
    let heightImg1=$('.img1').height();
    console.log("load:", heightImg1)
})

//sec4
$('.div1').click(function(){
    $(this).text('클릭되었습니다.')
})

//sec5
$('.btn5').on('click',function(e){ //e:event
    e.preventDefault();
    $('.txt5').text('내용이 바뀌었습니다.');
});
$('.btn6').on({'click':function(){
    $('.txt6').css('background','yellow');
    return false
}}); //결과적으로는 같음
$('.btn7').on('dblclick',function(){
    $('.txt7').css('background','blue')
});

//sec6
$('#hover').hover(function(){
    $(this).text('배고픈데 입맛이 없어요').css({border:'2px solid green',padding:'5px'});
},function(){
    $(this).text('매일 점심메뉴가 고민되네').css({border:'2px solid green',padding:'5px'});
}).click(function(){
    $(this).text('오늘 점심.. 여전히 고민').css({padding:'7px', border:'none'})
}); //hover는 웹접근성을 고려하면 되도록 사용하지 않는 것이 좋다

//sec7
$('#mouseenter').mouseenter(function(){
    $(this).text('배고픈데 입맛이 없어요').css({border:'2px solid green',padding:'5px'});
})
$('#mouseenter').mouseleave(function(){
    $(this).text('매일 점심메뉴가 고민되네').css({border:'2px solid green',padding:'5px'});
})

//sec8
$('.animal').each(function(){
    let name1=$(this).text();
    alert(name1);
})