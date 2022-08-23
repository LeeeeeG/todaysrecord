let $window=$(window);
let header=$('.page-header');
let headerOffsetTop=$('.page-header').offset().top;

$window.scroll(function(){
    if($(this).scrollTop()>=headerOffsetTop){
        header.addClass('sticky');
    }else{
        header.removeClass('sticky')
    }
});