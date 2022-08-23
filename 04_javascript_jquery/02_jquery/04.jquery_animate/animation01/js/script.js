
jQuery(document).ready(function(){
	ff();
	text_anii();
	 
	   
	function ff(){
		setTimeout(function(){
			first();
			text_ani();
			function first(){
						setTimeout(function(){
						var spans=$('.container p span');
						var spani=spans.eq(0);
							 
						spani.delay(0).animate({top: -20},500);
						spani.delay(0).animate({top: 0},500).stop();
					},0);
				};
			  
				var i=1; //변수 안에다쓰고 밖에다쓰고 그 차이 중요함
				function text_ani(){      
					setInterval(function(){   
						var spans=$('.container p span');
						var spanii=spans.eq(i);
						var x=i*200;   
					
						i++;
												  
						spanii.delay(x).animate({top: -20},500);
						spanii.animate({top: 0},500);
					},0);         
				 }; 
		},0)
	}   
	   
	function text_anii(){   
	   setTimeout(function(){
			setInterval(function(){
				first();
				text_ani();
				function first(){
						setTimeout(function(){
						var spans=$('.container p span');
						var spani=spans.eq(0);
							 
						spani.delay(0).animate({top: -20},500);
						spani.delay(0).animate({top: 0},500).stop();
					},50);
				};
			  
				var i=1; //변수 안에다쓰고 밖에다쓰고 그 차이 중요함
				function text_ani(){      
					setInterval(function(){   
						var spans=$('.container p span');
						var spanii=spans.eq(i);
						var x=i*200;   
					
						i++;
												  
						spanii.delay(x).animate({top: -20},500);
						spanii.animate({top: 0},500);
					},0);         
				 }; 
			},5000);
		},0);
	};   

});
