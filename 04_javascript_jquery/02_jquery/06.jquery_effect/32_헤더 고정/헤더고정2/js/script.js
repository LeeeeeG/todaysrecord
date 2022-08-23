let header=$('.page-header');
let headerClone=header.contents().clone();
let headerCloneContainer=$('<div class="page-header-clone"></div>');
let headerOffsetTop=header.offset().top;

headerCloneContainer.append(headerClone);
headerCloneContainer.appendTo('body');

$(window).scroll(function(){
    if($(this).scrollTop()>=headerOffsetTop){
        headerCloneContainer.addClass('visible');
    }else{
        headerCloneContainer.removeClass('visible');
    }
});