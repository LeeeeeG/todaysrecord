$('.menu li a').each(function(){
    let imgs=$(this).find('img');
    let src_off=imgs.attr('src');
    let src_on=src_off.replace('_off','_on')
    $('<img />').attr('src',src_on); //빠른 실행을 위해 변수에 저장하는 것
    $(this).hover(function(){
        imgs.attr('src',src_on)
    },function(){
        imgs.attr('src',src_off)
    });
});