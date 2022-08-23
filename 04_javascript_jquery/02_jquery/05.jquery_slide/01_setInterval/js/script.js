let interval=3000;

$('.slideshow').each(function(){
    let container=$(this);
    function switchImg(){
        let imgs=container.find('img');
        let first=imgs.eq(0);
        let second=imgs.eq(1);
        container.append(first.fadeOut());
        second.fadeIn();
    }
    setInterval(switchImg, interval);
})