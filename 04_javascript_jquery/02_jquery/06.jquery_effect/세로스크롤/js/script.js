let wheelDelta=0; //휠 이벤트 발생시 반환값 확인 변수
let browser=0; //파이어폭스 브라우저 판별 변수 Bom

//7개의 섹션을 클래스 요소를 배열처리
//마우스 휠을 아래로 한 번 내릴 때마다 (-120)의 값이 도출 == 위로는 (120)
//파이어폭스만 다르다 : 아래-(30) / 위-(-30)
//파이어폭스 브라우저 판별 -> window.navigator.userAgent
//크롬, 익스, 사파리, 오페라 등 -> Browser[Event-mousewheel]
//파이어폭스 -> Browser[Event-DOMMouseScroll]
//이전 (prev()) 다음(next())


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
				$('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
			}
		}else{
			if(index>0){
				$('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);
			}
		}
	})
})