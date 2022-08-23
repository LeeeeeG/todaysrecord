//sec1
$('.div1').show();
$('.div2').hide();
$('.div3').show('fast'); //괄호 안에 옵션 설정이 가능
$('.div4').hide(1000, /* function(){alert('숨김')} */); //(초/fast/slow, function)

//sec2
$('.div5').width(100);
$('.div6').height(100);

//sec3
//$('.div7').fadeIn(2000);
$('.div').hover(function(){
    $('.div7').fadeIn(2000);
}, function(){
    $('.div7').fadeOut(2000);
}) //응용 : 시험에 나옴
$('.div8').fadeOut(2000);
$('.div9').fadeTo(2000,.5);

//sec4
$('.div10').slideDown(5000); //대상이 안보여야 나타날 수 있음
$('.div11').slideUp(5000); //대상이 보여야 사라질 수 있음

//sec5
$('.div12').animate({
    left:400, 
    top:400
},3000);

$('.div13').delay(3000).animate({
    bottom:500
},3000).animate({right:300},3000);

$('.div14').delay(9000).animate({
    bottom:500
},3000);