var btn=document.getElementById('submit'),
    con=document.querySelector('.container');

//이벤트 사용방법
btn.addEventListener('click', function(){
    btn.style.color="red";
    console.log('버튼이 클릭되었습니다.')
});

con.addEventListener('mouseenter',function(){
    console.log('마우스가 올라왔습니다.')
})
con.addEventListener('mouseleave',function(){
    console.log('마우스가 내려갔습니다.')
})

window.addEventListener('keydown',function(event){
    console.log(event.key);
    console.log(event.keyCode)
})