const tab1=$('#tab li'); //누를 대상 지정
const div1=$('#content > div'); //누르면 나타날 대상 지정

tab1.on('click',function(e){
    e.preventDefault(); //누를 대상의 href="#" 무효화
    let tg=$(this); //누른 대상을 다시 부름
    tab1.find('>a').removeClass('on'); //누를 대상들에 지정된 .on 전부 삭제
    tg.find('a').addClass('on'); //내가 누른 대상에만 .on 지정

    let i=tg.index(); //내가 누른 대상의 인덱스 번호 찾아옴

    div1.css('display','none'); //나타날 대상들이 전부 안 보이게 함
    div1.eq(i).css('display','block'); //내가 누른 대상과 일치하는 인덱스 번호의 대상만 보이게 만듦
})