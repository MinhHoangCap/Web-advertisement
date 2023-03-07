var reasonImgElement = document.querySelector('.reason__img');


window.addEventListener('scroll',function(){
    var elementTop = reasonImgElement.getBoundingClientRect().top;
    var elementBottom = reasonImgElement.getBoundingClientRect().bottom;
    var isVisible = (elementTop >= 0) && (elementBottom <= this.window.innerHeight);


    if(isVisible){
        reasonImgElement.classList.add('animate')
    }
})