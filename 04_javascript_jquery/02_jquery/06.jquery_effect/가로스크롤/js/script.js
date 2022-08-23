let wheelDelta=0; //휠 이벤트 발생시 반환값 확인 변수
let browser=0; //파이어폭스 브라우저 판별 변수 Bom


$('.section').each(function(index){
	$(this).on('mousewheel DOMMouseScroll', function(e){
		e.preventDefault();
		browser=window.navigator.userAgent.toLowerCase().indexOf('firefox'); //파이어폭스가 있으면 (1) 없으면 (-1)
		if(browser>=0){
			wheelDelta=-e.detail*40
		}else{
			wheelDelta=e.originalEvent.wheelDelta
		}
		
		if(wheelDelta<0){//스크롤을 내렸을 때
			if(index<$('.section').length-1){
				$('html, body').stop().animate({scrollLeft:$('.section').next().offset().left},500);
			}
		}else{
			if(index>0){
				$('html, body').stop().animate({scrollLeft:$('.section').prev().offset().left},500);
			}
		}
	})
});