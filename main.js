const faqs = document.querySelectorAll('.faq');
const imageSvg = document.querySelectorAll('.faq-svg');

faqs.forEach((faq,i) =>{
    faq.addEventListener('click', () =>{
        const answer = faq.querySelector('.answer');
        answer.classList.toggle("active");
        imageSvg[i].classList.toggle('faq-svg-item');
        
    });
});