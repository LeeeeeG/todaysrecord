let srcVal=$('#sec p img').attr('src');
//console.log(srcVal)
$('#sec p img').attr({'width':200, "src":srcVal.replace('1.png','2.png'),"alt":"바위"})

//sec1
$('#div1').addClass('box')
$('#div2').removeClass('box');
$('#div3').addClass('alert'); 
$('#div4').removeClass('alert');

//sec2
$('.click').click(function(){
    $('#imgs').find('img').toggleClass('add')
});

//sec3
var a=$('#input1').val('내용을 바꾸었습니다.');
var b=$('#textarea1').val('다시 내용 넣기');
var c=$('#select1').val('city2');
var c=$('#select2').val(['town2','town3']);
//console.log(a)

//sec4
$('.div1').empty();

//sec5
var wid1=$('#p1').width();
console.log(wid1);
var wid2=$('#p1').innerWidth(); //width+padding
console.log(wid2);
var wid3=$('#p1').outerWidth(); //width+padding+border
console.log(wid3);
$('#p2').outerWidth(300);

//sec6
var $txt1=$('.txt1 span');
var $txt2=$('.txt2 span');
var $pBox=$('.pBox');
var offTop=$pBox.offset().top; //절대값
var pTop=$pBox.position().top; //상대값

$txt1.text(offTop);
$txt2.text(pTop);

//sec7
var topNum=$('h1').offset().top; //기본값 : top&left 뒤에 명령어를 붙여서 top 혹은 left만 가져올 수도
console.log(topNum);
$(window).scrollTop(topNum);
var sct=$(window).scrollTop();
console.log(sct);