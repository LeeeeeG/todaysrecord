//$('#div1').text(''); //괄호 안에 따옴표만 들어가면 내용을 비우라는 의미
//$('#div1').text('내용이 바뀌었습니다. text로'); //.text() -> 안의 내용을 string으로 인식
$('#div2').html('내용이 바뀌었습니다. html로'); //.html() -> 안의 내용 중 태그를 인지함
$('#div3').text('<h2>TEXT</h2>');
$('#div4').html('<h2>HTML</h2>');

$('#div1').hover(function(){
    $('#div1').text('내용이 바뀌었습니다. text로');
},function(){
    $('#div1').text('내용이 돌아왔습니다.');
}) //이런식으로 응용이 가능하다