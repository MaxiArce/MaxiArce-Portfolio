
document.addEventListener("DOMContentLoaded", function () { 
    const firstRow = document.querySelector('.row-proyecto-PS');
    const secondRowImage = document.querySelector('.row-proyecto-doggo__image');
    const thirdRowImage = document.querySelector('.row-proyecto-helping__image');

    firstRow.style.visibility = 'hidden';
    secondRowImage.style.visibility = 'hidden';
    thirdRowImage.style.visibility = 'hidden';
    

    window.addEventListener('scroll', () => {
        firstRow.style.animationName = 'reveal-200';
        firstRow.style.animationDuration = '2s';
        firstRow.style.visibility = 'visible';
    }, {once : true});

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const height = document.documentElement.scrollHeight;
      
        if(scrolled > (height*0.25)){
            secondRowImage.style.animationName = 'diagonal';
            secondRowImage.style.animationDuration = '2s';
            secondRowImage.style.visibility = 'visible';
        }
        if(scrolled > (height*0.6)){
            thirdRowImage.style.animationName = 'slide-top';
            thirdRowImage.style.animationDuration = '2s';
            thirdRowImage.style.visibility = 'visible';
            window.removeEventListener
        }
    });


});