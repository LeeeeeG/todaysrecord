//$('.changeThis').attr('src','./img/3.jpg'); //개체의 속성을 찾아서 변경하는 법
$('.changeThis').hover(function(){
    $(this).attr('src','./img/3.jpg');
}, function(){
    $(this).attr('src','./img/2.jpg');
})