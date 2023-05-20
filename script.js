
let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderBtn = document.querySelector('.slider-next');
sliderBtn.addEventListener('click',  ()=> {
    offset = offset + 300; 
    if(offset > 900) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

const sliderBtnPrev = document.querySelector('.slider-prev');
sliderBtnPrev.addEventListener('click',  ()=> {
    offset = offset - 300; 
    if(offset < 0) {
        offset = 900;
    }
    sliderLine.style.left = -offset + 'px';
});

































