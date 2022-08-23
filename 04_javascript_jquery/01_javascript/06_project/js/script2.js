const btnCollapse=document.getElementById('btnCollapse');
const heading=document.getElementsByClassName('pannel-heading');
const question=document.getElementsByClassName('pannel-question');
const answer=document.getElementsByClassName('pannel-body');

for(let i=0; i<heading.length; i++){
    heading[i].addEventListener('click',function(e){
        for(let k=0; k<question.length; k++){
            question[k].classList.remove('active');
            e.target.parentNode.classList.add('active');
            activeBody();
        }
    })
}

function activeBody(){
    for(let l=0; l<answer.length; l++){
        answer[l].style.display='none'
    }
    let activePannel=document.querySelector('.pannel-question.active .pannel-body');
    activePannel.style.display='block';
}
activeBody();

btnCollapse.addEventListener('click',function(){
    for(let l=0; l<answer.length; l++){
        answer[l].style.display='none'
    }
})