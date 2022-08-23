var mainHeader=document.getElementById('main-header');
var headerHeight=mainHeader.offsetHeight;
//console.log(headerHeight) 98
window.addEventListener('scroll',function(){
    if(this.pageYOffset>headerHeight){
        mainHeader.classList.add('active')
    }else{
        mainHeader.classList.remove('active')
    }
})