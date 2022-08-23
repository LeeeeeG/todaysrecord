//sec1
$('.box p:eq(2)').after("<p>After</p>");
$('<p>insertAfter</p>').insertAfter('.box p:eq(1)');
$('.box p:eq(1)').before("<p>Before</p>");
$('<p>insertBefore</p>').insertBefore('.box p:eq(0)'); //둘의 차이점 : 순서가 반대

//sec2
let basket=$('#basket'),
    apple=$('#apple'),
    banana=$('#banana'),
    orange=$('#orange');

    /* basket.append(orange) 1
    basket.append(apple) 2
    basket.append(banana) 3 //순서에 따라 들어가는 순서가 정해짐 */

    apple.prependTo(basket)
    orange.prependTo(basket)
    banana.prependTo(basket)
    //append는 목적지가 위로 가고 prepend는 목적지가 아래로 감

//sec3
let copyObj=$('.box2').children().clone();
let obj2=$('.box3');
let obj1=$('.box2');
let obj3=$('.box4');

copyObj.appendTo(obj2);
obj1.remove(); //remove : 변수 자체를 없앰
obj3.empty(); //empty : 변수 안의 내용을 없앰

//sec4
$('.box5 h3').replaceWith('<h2>replace method</h2>');
$('<p>change</p>').replaceAll('.box6 div');

//sec5
$('#sec5 strong').unwrap(); //h2 삭제
$('.ct1').wrap('<div />'); //div 안에 각각 넣음
$('.ct2').wrapAll('<div />'); //div 안에 전체 요소를 묶어서 넣음
$('#sec5 ul li').wrapInner('<h3 />') //하위의 요소를 각각 감쌈